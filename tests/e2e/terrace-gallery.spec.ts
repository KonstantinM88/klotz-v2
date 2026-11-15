import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("gallery locks the background and keeps its compact header in the viewport", async ({
  page,
}, info) => {
  await page.goto("/terrasse-garten/terrassenueberdachungen");
  const initialOverflow = await page.evaluate(
    () => getComputedStyle(document.documentElement).overflow,
  );
  for (const width of info.project.name === "desktop"
    ? [320, 768, 1440]
    : [390]) {
    await page.setViewportSize({
      width,
      height: info.project.name === "desktop" ? 620 : 844,
    });
    await page.locator(".terrace-photo-gallery__image").first().click();
    const viewer = page.locator(".terrace-photo-viewer");
    await expect(page.locator("html")).toHaveCSS("overflow", "hidden");
    const before = await page.evaluate(() => scrollY),
      frame = (await viewer
        .locator(".terrace-photo-viewer__image")
        .boundingBox())!;
    if (info.project.name === "mobile") {
      const cdp = await page.context().newCDPSession(page);
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [
          { x: frame.x + frame.width / 2, y: frame.y + frame.height * 0.8 },
        ],
      });
      for (const fraction of [0.65, 0.5, 0.35, 0.2]) {
        await page.waitForTimeout(40);
        await cdp.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: [
            {
              x: frame.x + frame.width / 2,
              y: frame.y + frame.height * fraction,
            },
          ],
        });
      }
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
      await cdp.detach();
    } else {
      await page.mouse.move(
        frame.x + frame.width / 2,
        frame.y + frame.height / 2,
      );
      await page.mouse.wheel(0, 450);
    }
    expect(
      Math.abs((await page.evaluate(() => scrollY)) - before),
    ).toBeLessThanOrEqual(1);
    await expect(
      viewer.getByRole("button", { name: "Bildergalerie schließen" }),
    ).toBeInViewport();
    expect(
      await viewer.evaluate(
        (element) =>
          element.scrollHeight <= element.clientHeight &&
          element.scrollWidth <= element.clientWidth,
      ),
    ).toBe(true);
    await viewer.screenshot({
      path: info.outputPath(`locked-viewer-${width}.png`),
    });
    await page.keyboard.press("Escape");
    await expect(viewer).not.toBeVisible();
    await expect(page.locator("html")).toHaveCSS("overflow", initialOverflow);
  }
});

const cases: [string, number][] = [
  ["", 6],
  ["terrassenueberdachungen", 12],
  ["lamellendaecher", 12],
  ["pergolen", 10],
  ["sommer-wintergaerten", 10],
  ["glasschiebewaende", 10],
  ["sonnenschutz", 12],
];
for (const [slug, count] of cases)
  test(`terrace gallery imagery, viewer and responsive navigation: ${slug || "overview"}`, async ({
    page,
  }, info) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    const response = await page.goto(
      `/terrasse-garten${slug ? `/${slug}` : ""}`,
    );
    expect(response!.status()).toBe(200);
    expect(response!.headers()["x-robots-tag"]).toContain("noindex");
    const gallery = page.locator(".terrace-photo-gallery");
    await expect(gallery).toHaveCount(1);
    await gallery.scrollIntoViewIfNeeded();
    await expect(gallery.locator(".terrace-photo-gallery__tile")).toHaveCount(
      6,
    );
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
      await expect(image).toHaveCSS("object-fit", "contain");
    }
    for (const width of info.project.name === "desktop"
      ? [320, 390, 768, 1024, 1440]
      : [390]) {
      await page.setViewportSize({ width, height: 1000 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    await page.setViewportSize(info.project.use.viewport!);
    await gallery.screenshot({ path: info.outputPath("gallery.png") });
    const first = gallery.locator(".terrace-photo-gallery__image").first();
    await first.focus();
    await page.keyboard.press("Enter");
    const viewer = page.getByRole("dialog", { name: /.+/ });
    await expect(viewer).toBeVisible();
    const close = viewer.getByRole("button", {
      name: "Bildergalerie schließen",
    });
    await expect(close).toBeFocused();
    const counter = viewer.locator(".terrace-photo-viewer__caption > span");
    const caption = () =>
      `${String(count).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
    await expect(counter).toHaveText(`01 / ${String(count).padStart(2, "0")}`);
    await page.keyboard.press("ArrowLeft");
    await expect(counter).toHaveText(caption());
    await page.keyboard.press("Home");
    await viewer
      .getByRole("button", { name: "Nächstes Bild", exact: true })
      .click();
    await expect(counter).toHaveText(`02 / ${String(count).padStart(2, "0")}`);
    await viewer
      .getByRole("button", { name: "Vorheriges Bild", exact: true })
      .click();
    if (info.project.name === "mobile") {
      const bounds = (await viewer
        .locator(".terrace-photo-viewer__image")
        .boundingBox())!;
      const cdp = await page.context().newCDPSession(page);
      const y = bounds.y + bounds.height / 2;
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [{ x: bounds.x + bounds.width * 0.8, y }],
      });
      // Use a human-paced swipe; a zero-duration fling suppresses the next tap in Chromium.
      for (const fraction of [0.65, 0.5, 0.35, 0.2]) {
        await page.waitForTimeout(40);
        await cdp.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: [{ x: bounds.x + bounds.width * fraction, y }],
        });
      }
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
      await expect(counter).toHaveText(
        `02 / ${String(count).padStart(2, "0")}`,
      );
      await page.waitForTimeout(350);
      await viewer
        .getByRole("button", { name: "Nächstes Bild", exact: true })
        .tap();
      await expect(counter).toHaveText(
        `03 / ${String(count).padStart(2, "0")}`,
      );
      await cdp.detach();
    }
    await page.keyboard.press("End");
    await expect(counter).toHaveText(caption());
    await viewer
      .locator(".terrace-photo-viewer__thumbnails button")
      .last()
      .focus();
    await page.keyboard.press("Tab");
    await expect(close).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(
      viewer.locator(".terrace-photo-viewer__thumbnails button").last(),
    ).toBeFocused();
    await expect(viewer.locator(".terrace-photo-viewer__image img")).toHaveCSS(
      "object-fit",
      "contain",
    );
    expect(
      await viewer.evaluate(
        (element) =>
          element.scrollHeight <= element.clientHeight &&
          element.scrollWidth <= element.clientWidth,
      ),
    ).toBe(true);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await expect
      .poll(() =>
        viewer
          .locator(".terrace-photo-viewer__image img")
          .evaluate(
            (image) =>
              (image as HTMLImageElement).complete &&
              (image as HTMLImageElement).naturalWidth > 0,
          ),
      )
      .toBe(true);
    await viewer.screenshot({ path: info.outputPath("viewer.png") });
    await page.keyboard.press("Escape");
    await expect(viewer).not.toBeVisible();
    await expect(first).toBeFocused();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    expect(errors).toEqual([]);
  });

test("terrace gallery keeps real images and links usable without scripts and respects reduced motion", async ({
  browser,
}, info) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: info.project.use.viewport,
  });
  const page = await context.newPage();
  await page.goto(
    "http://127.0.0.1:3100/terrasse-garten/terrassenueberdachungen",
  );
  await expect(page.locator(".terrace-photo-gallery__tile")).toHaveCount(6);
  await expect(page.locator(".terrace-photo-gallery__nojs")).toBeVisible();
  const src = await page
    .locator(".terrace-photo-gallery__image")
    .first()
    .getAttribute("href");
  expect(src).toMatch(/^\/images\/.+\.webp$/);
  expect((await page.request.get(`http://127.0.0.1:3100${src}`)).status()).toBe(
    200,
  );
  await context.close();
  const motion = await browser.newContext({
    reducedMotion: "reduce",
    viewport: info.project.use.viewport,
  });
  const p = await motion.newPage();
  await p.goto("http://127.0.0.1:3100/terrasse-garten/terrassenueberdachungen");
  await expect(p.locator(".terrace-photo-gallery__expand").first()).toHaveCSS(
    "transition-duration",
    "0s",
  );
  await motion.close();
});
