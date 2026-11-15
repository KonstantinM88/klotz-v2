import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const slug of [
  "fenster",
  "haustueren",
  "innentueren",
  "rolllaeden",
  "einbruchschutz",
])
  test(`windows section product identity and inquiry: ${slug}`, async ({
    page,
  }, info) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    await page.goto("/fenster-tueren");
    const card = page.locator(
      `.windows-solution__image[href="/fenster-tueren/${slug}"]`,
    );
    const image = await card
      .locator(".service-media")
      .getAttribute("data-media-id");
    await card.click();
    await expect(page).toHaveURL(new RegExp(`/fenster-tueren/${slug}$`));
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".outdoor-hero .service-media")).toHaveAttribute(
      "data-media-id",
      image!,
    );
    await expect(page.locator(".outdoor-hero img")).toHaveCSS(
      "object-fit",
      "contain",
    );
    await expect(page.locator(".outdoor-options__grid article")).toHaveCount(3);
    await expect(page.locator(".outdoor-faq details")).toHaveCount(5);
    await expect(page.locator(".outdoor-planning ol li")).toHaveCount(4);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`/fenster-tueren/${slug}$`),
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    expect(await page.title()).not.toContain("KLOTZ | KLOTZ");
    await expect(page.locator("main")).not.toContainText("vom Garten");
    for (const img of await page.locator("main img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          img.evaluate(
            (el) =>
              (el as HTMLImageElement).complete &&
              (el as HTMLImageElement).naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    for (const width of info.project.name === "desktop"
      ? [320, 768, 1024, 1440]
      : [390]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const box = await page
        .locator(".outdoor-hero .service-media")
        .boundingBox();
      expect(box!.width / box!.height).toBeCloseTo(1.5, 1);
    }
    await page.setViewportSize(info.project.use.viewport!);
    await page.locator(".outdoor-faq summary").first().focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".outdoor-faq details").first()).toHaveAttribute(
      "open",
      "",
    );
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(audit.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({
      path: info.outputPath("service.png"),
      fullPage: true,
    });
    await page.locator(".outdoor-hero .button").click();
    await expect(
      page.getByLabel("Leistungsbereich", { exact: false }),
    ).toHaveValue("Fenster & Türen");
    await expect(
      page.getByLabel("Ihr Vorhaben", { exact: false }),
    ).not.toHaveValue("");
  });

test("windows section overview, navigation, metadata and accessibility", async ({
  page,
}, info) => {
  await page.goto("/fenster-tueren");
  await expect(page.locator(".windows-solution")).toHaveCount(5);
  const scripts = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const collection = scripts
    .map((s) => JSON.parse(s))
    .find((s) => s["@type"] === "CollectionPage");
  expect(collection.mainEntity.numberOfItems).toBe(5);
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const boxes = await page
      .locator(".windows-solution .service-media")
      .evaluateAll((els) => els.map((el) => el.getBoundingClientRect().height));
    expect(Math.max(...boxes) - Math.min(...boxes)).toBeLessThan(1);
  }
  await page.setViewportSize(info.project.use.viewport!);
  for (const img of await page.locator("main img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate(
          (el) =>
            (el as HTMLImageElement).complete &&
            (el as HTMLImageElement).naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
  await page.screenshot({
    path: info.outputPath("overview.png"),
    fullPage: true,
  });
  await page.locator(".outdoor-hero .button").click();
  await expect(
    page.getByLabel("Leistungsbereich", { exact: false }),
  ).toHaveValue("Fenster & Türen");
});

test("windows section context rejects unknown or repeated values and preserves offer priority", async ({
  page,
}) => {
  for (const query of [
    "leistung=unknown",
    "leistung=fenster&leistung=haustueren",
    "bereich=fenster-tueren&bereich=terrasse-garten",
  ]) {
    await page.goto(`/projekt-anfragen?${query}`);
    await expect(page.getByLabel("Ihr Vorhaben", { exact: false })).toHaveValue(
      "",
    );
  }
  await page.goto("/projekt-anfragen?leistung=fenster&bereich=terrasse-garten");
  await expect(
    page.getByLabel("Leistungsbereich", { exact: false }),
  ).toHaveValue("Fenster & Türen");
  await page.goto(
    "/projekt-anfragen?angebot=lamellendaecher-pergolen&leistung=fenster",
  );
  await expect(
    page.getByLabel("Leistungsbereich", { exact: false }),
  ).toHaveValue("Terrasse & Garten");
});

test("windows section server content and native FAQ without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/fenster-tueren", {
    waitUntil: "domcontentloaded",
  });
  await expect(page.locator(".windows-solution")).toHaveCount(5);
  await page
    .locator('.windows-solution__image[href="/fenster-tueren/innentueren"]')
    .click();
  await expect(page.locator("#story-title")).toContainText("Übergänge");
  await page.locator(".outdoor-faq summary").first().click();
  await expect(page.locator(".outdoor-faq details").first()).toHaveAttribute(
    "open",
    "",
  );
  await context.close();
});
