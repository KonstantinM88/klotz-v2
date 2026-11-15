import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const [slug, images, chapters] of [
  ["", 6, 0],
  ["fenster", 15, 4],
  ["haustueren", 12, 3],
  ["innentueren", 16, 4],
  ["rolllaeden", 8, 0],
  ["einbruchschutz", 6, 0],
] as const)
  test(`windows gallery and material chapters: ${slug || "overview"}`, async ({
    page,
  }, info) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto(`/fenster-tueren${slug ? `/${slug}` : ""}`);
    await expect(page.locator(".window-materials__chapter")).toHaveCount(
      chapters,
    );
    await expect(page.locator(".terrace-photo-gallery__tile")).toHaveCount(6);
    for (const width of info.project.name === "desktop"
      ? [320, 768, 1440]
      : [390]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      for (const image of await page
        .locator(".window-materials__image img")
        .all()) {
        await image.scrollIntoViewIfNeeded();
        await expect(image).toHaveCSS("object-fit", "contain");
        await expect
          .poll(() =>
            image.evaluate(
              (element) =>
                (element as HTMLImageElement).complete &&
                (element as HTMLImageElement).naturalWidth > 0,
            ),
          )
          .toBe(true);
      }
    }
    await page.setViewportSize(info.project.use.viewport!);
    if (chapters) {
      await page.locator(".window-materials__jump a").last().click();
      const chapter = page.locator(".window-materials__chapter").last();
      await expect(chapter).toBeInViewport();
      await chapter.screenshot({ path: info.outputPath("material.png") });
    }
    const gallery = page.locator(".terrace-photo-gallery");
    await gallery.scrollIntoViewIfNeeded();
    for (const image of await gallery
      .locator(".terrace-photo-gallery__image img")
      .all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (element) =>
              (element as HTMLImageElement).complete &&
              (element as HTMLImageElement).naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    await gallery.screenshot({ path: info.outputPath("gallery.png") });
    const opener = gallery.locator(".terrace-photo-gallery__image").first();
    await opener.focus();
    await page.keyboard.press("Enter");
    const viewer = page.locator(".terrace-photo-viewer");
    await expect(viewer).toBeVisible();
    await expect(
      viewer.getByRole("button", { name: "Bildergalerie schließen" }),
    ).toBeFocused();
    await expect(page.locator("html")).toHaveCSS("overflow", "hidden");
    await expect(
      viewer.locator(".terrace-photo-viewer__thumbnails button"),
    ).toHaveCount(images);
    await page.keyboard.press("End");
    await expect(
      viewer.locator(".terrace-photo-viewer__caption > span"),
    ).toHaveText(
      `${String(images).padStart(2, "0")} / ${String(images).padStart(2, "0")}`,
    );
    await expect
      .poll(() =>
        viewer
          .locator(".terrace-photo-viewer__image img")
          .evaluate(
            (element) =>
              (element as HTMLImageElement).complete &&
              (element as HTMLImageElement).naturalWidth > 0,
          ),
      )
      .toBe(true);
    const image = viewer.locator(".terrace-photo-viewer__image img");
    const naturalLimit = await image.evaluate((element) => ({
      width: Number(element.getAttribute("width")),
      display: element.getBoundingClientRect().width,
    }));
    expect(naturalLimit.display).toBeLessThanOrEqual(naturalLimit.width + 1);
    await viewer
      .getByRole("button", { name: "Nächstes Bild", exact: true })
      .click();
    await expect(
      viewer.locator(".terrace-photo-viewer__caption > span"),
    ).toHaveText(`01 / ${String(images).padStart(2, "0")}`);
    await expect(
      viewer.getByRole("button", { name: "Bildergalerie schließen" }),
    ).toBeInViewport();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await viewer.screenshot({ path: info.outputPath("viewer.png") });
    await page.keyboard.press("Escape");
    await expect(opener).toBeFocused();
    await expect(viewer).not.toBeVisible();
    expect(errors).toEqual([]);
  });

test("material index leads to the correct detailed advice and real fallback images", async ({
  page,
  browser,
}, info) => {
  await page.goto("/fenster-tueren");
  const links = await page
    .locator(".windows-material-index__grid a")
    .evaluateAll((elements) =>
      elements.map((element) => element.getAttribute("href")!),
    );
  expect(links).toHaveLength(11);
  for (const href of links) {
    await page.goto("/fenster-tueren");
    await page
      .locator(`.windows-material-index__grid a[href="${href}"]`)
      .click();
    await expect(page.locator(href.slice(href.indexOf("#")))).toBeInViewport();
    expect(
      await page.locator(href.slice(href.indexOf("#"))).innerText(),
    ).not.toContain("Lorem ipsum");
  }
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: info.project.use.viewport,
  });
  const p = await context.newPage();
  await p.goto("http://127.0.0.1:3100/fenster-tueren/innentueren");
  await expect(p.locator(".window-materials__chapter")).toHaveCount(4);
  await expect(p.locator(".terrace-photo-gallery__nojs")).toBeVisible();
  const source = await p
    .locator(".terrace-photo-gallery__image")
    .first()
    .getAttribute("href");
  expect((await p.request.get(`http://127.0.0.1:3100${source}`)).status()).toBe(
    200,
  );
  await context.close();
});
