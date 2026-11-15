import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const [service, groups] of [
  [
    "fenster",
    [
      ["kunststofffenster", 4],
      ["aluminiumfenster", 4],
      ["holzfenster", 3],
      ["terrassentueren", 4],
    ],
  ],
  [
    "haustueren",
    [
      ["aluminiumhaustueren", 4],
      ["kunststoffhaustueren", 4],
      ["holzhaustueren", 4],
    ],
  ],
  [
    "innentueren",
    [
      ["cpl-tueren", 4],
      ["echtholz-furniertueren", 4],
      ["weisslacktueren", 3],
      ["glastueren", 5],
    ],
  ],
] as const) {
  test(`material filters and selected picture reach the consultation: ${service}`, async ({
    page,
  }, info) => {
    await page.goto(`/fenster-tueren/${service}`);
    const filters = page.getByRole("navigation", {
      name: "Bilder nach Material auswählen",
    });
    for (const [group, count] of groups) {
      const link = filters.locator(`a[href="#${group}"]`);
      await link.focus();
      await expect(link).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(link).toHaveAttribute("aria-current", "true");
      await expect(page.locator(".terrace-photo-gallery__tile")).toHaveCount(
        count,
      );
      await expect(page.locator(".service-photo-filter-count")).toContainText(
        `${count} Ansichten`,
      );
      await page.locator(".terrace-photo-gallery__image").first().click();
      const viewer = page.getByRole("dialog");
      await expect(
        viewer.locator(".terrace-photo-viewer__thumbnails button"),
      ).toHaveCount(count);
      await page.keyboard.press("End");
      await expect(
        viewer.locator(".terrace-photo-viewer__caption > span"),
      ).toHaveText(
        `${String(count).padStart(2, "0")} / ${String(count).padStart(2, "0")}`,
      );
      await viewer.locator(".service-photo-request").focus();
      await page.keyboard.press("Tab");
      await expect(
        viewer.locator(".terrace-photo-viewer__thumbnails button").first(),
      ).toBeFocused();
      await page.keyboard.press("Escape");
      await expect(viewer).not.toBeVisible();
      await expect(viewer.locator(".terrace-photo-viewer__stage")).toHaveCount(
        0,
      );
      await expect(
        page.locator(".terrace-photo-gallery__image").first(),
      ).toBeFocused();
    }
    for (const width of info.project.name === "desktop"
      ? [320, 768, 1440]
      : [390]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    await page.setViewportSize(info.project.use.viewport!);
    const gallery = page.locator(".terrace-photo-gallery");
    for (const image of await gallery
      .locator(".terrace-photo-gallery__image img")
      .all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (el) =>
              (el as HTMLImageElement).complete &&
              (el as HTMLImageElement).naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    await gallery.screenshot({ path: info.outputPath("filtered-gallery.png") });
    await page.locator(".terrace-photo-gallery__image").first().click();
    const viewer = page.getByRole("dialog");
    await viewer
      .getByRole("button", { name: "Nächstes Bild", exact: true })
      .click();
    const title = await viewer
      .locator(".terrace-photo-viewer__caption h3")
      .innerText();
    const href = await viewer
      .locator(".service-photo-request")
      .getAttribute("href");
    await expect(viewer.locator(".service-photo-request")).toBeInViewport();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await viewer.screenshot({ path: info.outputPath("selected-viewer.png") });
    await viewer
      .getByRole("link", { name: "Diese Ansicht besprechen" })
      .click();
    await expect(page).toHaveURL(`http://127.0.0.1:3100${href}`);
    await expect(page.locator(".request-inspiration h3")).toHaveText(title);
    await expect(
      page.getByLabel("Leistungsbereich", { exact: false }),
    ).toHaveValue("Fenster & Türen");
    await expect(page.getByLabel("Ihr Vorhaben", { exact: false })).toHaveValue(
      new RegExp(title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    );
    await expect(page.locator(".request-inspiration img")).toHaveCSS(
      "object-fit",
      "contain",
    );
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await page
      .locator(".request-inspiration img")
      .evaluate((img) => (img as HTMLImageElement).decode());
    await page.screenshot({
      path: info.outputPath("selected-request.png"),
      fullPage: true,
    });
  });
}

test("material choice survives the actual CTA and rejects foreign selection text", async ({
  page,
}) => {
  await page.goto("/fenster-tueren/innentueren#weisslacktueren");
  await page
    .locator("#weisslacktueren")
    .getByRole("link", { name: "Meine Auswahl besprechen" })
    .click();
  await expect(page.locator(".request-inspiration h3")).toHaveText(
    "Weißlacktüren",
  );
  await expect(page.getByLabel("Ihr Vorhaben", { exact: false })).toHaveValue(
    /Meine Materialrichtung: Weißlacktüren/,
  );
  for (const query of [
    "leistung=fenster&material=glastueren",
    "leistung=fenster&bild=windows-gallery-haustueren-01",
    "leistung=fenster&material=holzfenster&material=aluminiumfenster",
    "leistung=fenster&bild=https%3A%2F%2Fforeign.example%2Fphoto.jpg",
    "leistung=fenster&bild=windows-gallery-fenster-01&bild=windows-gallery-fenster-02",
    "angebot=lamellendaecher-pergolen&leistung=fenster&bild=windows-gallery-fenster-01",
  ]) {
    await page.goto(`/projekt-anfragen?${query}`);
    await expect(page.locator(".request-inspiration")).toHaveCount(0);
    await expect(
      page.getByLabel("Ihr Vorhaben", { exact: false }),
    ).not.toHaveValue(/Meine Bildidee|Meine Materialrichtung|foreign\.example/);
  }
});

test("filter links and material selection remain usable without scripts", async ({
  browser,
}, info) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: info.project.use.viewport,
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/fenster-tueren/fenster");
  await page.locator('.service-photo-filters a[href="#holzfenster"]').click();
  await expect(page.locator("#holzfenster")).toBeInViewport();
  // Finish the native smooth anchor movement before clicking the next target.
  await expect
    .poll(async () => {
      const before = await page.locator("#holzfenster").boundingBox();
      await page.waitForTimeout(120);
      const after = await page.locator("#holzfenster").boundingBox();
      return !!before && !!after && Math.abs(before.y - after.y) < 1;
    })
    .toBe(true);
  await page
    .locator("#holzfenster")
    .getByRole("link", { name: "Meine Auswahl besprechen" })
    .click();
  await expect(page.locator(".request-inspiration h3")).toHaveText(
    "Holzfenster",
  );
  await expect(page.getByLabel("Ihr Vorhaben", { exact: false })).toHaveValue(
    /Meine Materialrichtung: Holzfenster/,
  );
  await context.close();
});

test("overview, shutters and security keep the selected view attached to their actual service", async ({
  page,
}) => {
  for (const [path, service] of [
    ["/fenster-tueren", "haustueren"],
    ["/fenster-tueren/rolllaeden", "rolllaeden"],
    ["/fenster-tueren/einbruchschutz", "einbruchschutz"],
  ]) {
    await page.goto(path!);
    await expect(page.locator(".service-photo-filters")).toHaveCount(0);
    await page.locator(".terrace-photo-gallery__image").first().click();
    const viewer = page.getByRole("dialog");
    const selectedAlt = await viewer
      .locator(".terrace-photo-viewer__image img")
      .getAttribute("alt");
    await viewer
      .getByRole("link", { name: "Diese Ansicht besprechen" })
      .click();
    expect(new URL(page.url()).searchParams.get("leistung")).toBe(service);
    await expect(page.locator(".request-inspiration img")).toHaveAttribute(
      "alt",
      selectedAlt!,
    );
    await expect(
      page.getByLabel("Leistungsbereich", { exact: false }),
    ).toHaveValue("Fenster & Türen");
  }
});
