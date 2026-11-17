import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const slugs = [
  "wohnungswirtschaft",
  "industrie-gewerbe",
  "hotellerie-gastronomie",
  "wartung-service",
];
for (const slug of slugs)
  test(`business section identity, content and inquiry: ${slug}`, async ({
    page,
  }, info) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    await page.goto("/gewerbekunden");
    const card = page.locator(
      `.business-sector-card__image[href="/gewerbekunden/${slug}"]`,
    );
    const mediaId = await card
      .locator(".service-media")
      .getAttribute("data-media-id");
    await card.click();
    await expect(page).toHaveURL(new RegExp(`/gewerbekunden/${slug}$`));
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".business-hero .service-media")).toHaveAttribute(
      "data-media-id",
      mediaId!,
    );
    await expect(page.locator(".business-hero img")).toHaveCSS(
      "object-fit",
      "cover",
    );
    await expect(page.locator(".business-scope__grid article")).toHaveCount(3);
    await expect(page.locator(".business-coordination ol li")).toHaveCount(4);
    await expect(page.locator(".business-brief li")).toHaveCount(4);
    await expect(page.locator(".business-faq details")).toHaveCount(5);
    await expect(page.locator(".business-related__heading a")).toHaveAttribute(
      "href",
      "/gewerbekunden",
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`/gewerbekunden/${slug}$`),
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    const schemas = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    expect(schemas.map((s) => JSON.parse(s)["@type"])).toEqual([
      "BreadcrumbList",
    ]);
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
        .locator(".business-hero .service-media")
        .boundingBox();
      expect(box!.width / box!.height).toBeCloseTo(1.5, 1);
      const detailBox = await page
        .locator(".business-detail .service-media")
        .boundingBox();
      expect(detailBox!.width / detailBox!.height).toBeCloseTo(1.5, 1);
      await expect(page.locator(".business-detail img")).toHaveCSS(
        "object-fit",
        "contain",
      );
    }
    await page.setViewportSize(info.project.use.viewport!);
    if (info.project.name === "mobile") {
      const title = await page.locator("h1").boundingBox(),
        img = await page.locator(".outdoor-hero__figure").boundingBox(),
        cta = await page.locator(".business-hero .button").boundingBox(),
        lead = await page.locator(".outdoor-hero__lead").boundingBox();
      expect(title!.y + title!.height).toBeLessThan(img!.y);
      expect(img!.y + img!.height).toBeLessThan(cta!.y);
      expect(cta!.y).toBeLessThan(lead!.y);
    }
    await page.locator(".business-faq summary").first().focus();
    await page.keyboard.press("Enter");
    await expect(page.locator(".business-faq details").first()).toHaveAttribute(
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
    await page.locator(".business-hero .button").click();
    await expect(
      page.getByLabel("Leistungsbereich", { exact: false }),
    ).toHaveValue(
      slug === "wartung-service"
        ? "Wartung & Service"
        : "Gewerbe / Wohnungswirtschaft",
    );
    await expect(
      page.getByLabel("Ihr Vorhaben", { exact: false }),
    ).not.toHaveValue("");
  });

test("business section overview, sector navigation and category inquiry", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  const response = await page.goto("/gewerbekunden");
  expect(response?.status()).toBe(200);
  expect(response?.headers()["x-robots-tag"]).toContain("noindex");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator(".business-sector-card")).toHaveCount(4);
  await expect(page.locator(".business-task-list article")).toHaveCount(4);
  await expect(page.locator(".business-process li")).toHaveCount(4);
  await expect(page.locator(".business-faq details")).toHaveCount(6);
  await expect(page.locator(".b2b-facts > div")).toHaveCount(4);
  await expect(page.locator(".b2b-mosaic figure")).toHaveCount(3);
  await expect(page.locator(".b2b-matrix tbody tr")).toHaveCount(8);
  await expect(page.locator(".b2b-contacts li")).toHaveCount(2);
  await expect(
    page.getByRole("heading", { name: /Über 1,1 Kilometer Zaun/ }),
  ).toBeVisible();
  const schemas = (
    await page.locator('script[type="application/ld+json"]').allTextContents()
  ).map((s) => JSON.parse(s));
  expect(schemas.map((s) => s["@type"]).sort()).toEqual([
    "BreadcrumbList",
    "CollectionPage",
  ]);
  const collection = schemas.find((s) => s["@type"] === "CollectionPage");
  expect(collection.mainEntity.numberOfItems).toBe(4);
  expect(
    collection.mainEntity.itemListElement.map(
      (s: { url: string }) => new URL(s.url).pathname,
    ),
  ).toEqual(slugs.map((s) => `/gewerbekunden/${s}`));
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const heights = await page
      .locator(".business-sector-card .service-media")
      .evaluateAll((els) => els.map((el) => el.getBoundingClientRect().height));
    expect(Math.max(...heights) - Math.min(...heights)).toBeLessThan(1);
  }
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
  await page.setViewportSize(info.project.use.viewport!);
  await page.locator(".business-jump a").first().focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#wohnungswirtschaft$/);
  await page.locator(".business-faq summary").first().focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".business-faq details").first()).toHaveAttribute(
    "open",
    "",
  );
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".b2b-mosaic figure").first()).toHaveCSS(
    "animation-name",
    "none",
  );
  expect(errors).toEqual([]);
  await page.evaluate(() => {
    (document.activeElement as HTMLElement)?.blur();
    scrollTo(0, 0);
  });
  await page.screenshot({
    path: info.outputPath("overview.png"),
    fullPage: true,
  });
  await page.locator(".b2b-hero .button").click();
  await expect(
    page.getByLabel("Leistungsbereich", { exact: false }),
  ).toHaveValue("Gewerbe / Wohnungswirtschaft");
});

test("business section inquiry boundaries and offer priority", async ({
  page,
}) => {
  await page.goto(
    "/projekt-anfragen?leistung=wartung-service&bereich=zaun-tor",
  );
  await expect(
    page.getByLabel("Leistungsbereich", { exact: false }),
  ).toHaveValue("Wartung & Service");
  await page.goto(
    "/projekt-anfragen?leistung=wohnungswirtschaft&angebot=fenster-tueren",
  );
  await expect(
    page.getByLabel("Leistungsbereich", { exact: false }),
  ).toHaveValue("Fenster & Türen");
  for (const query of [
    "leistung=wartung-service&leistung=fenster",
    "bereich=gewerbekunden&bereich=zaun-tor",
    "leistung=arbitrary-input",
  ]) {
    await page.goto(`/projekt-anfragen?${query}`);
    await expect(page.getByLabel("Ihr Vorhaben", { exact: false })).toHaveValue(
      "",
    );
  }
});

test("business section works without JavaScript", async ({ browser }, info) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: info.project.use.viewport!,
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/gewerbekunden", {
    waitUntil: "domcontentloaded",
  });
  await page.locator(".business-faq summary").first().click();
  await expect(page.locator(".business-faq details").first()).toHaveAttribute(
    "open",
    "",
  );
  for (const slug of slugs) {
    await page.goto(`http://127.0.0.1:3100/gewerbekunden/${slug}`, {
      waitUntil: "domcontentloaded",
    });
    await expect(page.locator(".business-brief .button")).toHaveAttribute(
      "href",
      `/projekt-anfragen?leistung=${slug}`,
    );
    await page.locator(".business-faq summary").first().click();
    await expect(page.locator(".business-faq details").first()).toHaveAttribute(
      "open",
      "",
    );
  }
  await context.close();
});
