import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const slug of [
  "zaunanlagen",
  "sichtschutz",
  "hoftore",
  "schiebetore",
  "elektrische-toranlagen",
  "gelaender",
])
  test(`fence section product identity, content and inquiry: ${slug}`, async ({
    page,
  }, info) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    await page.goto("/zaun-tor");
    const card = page.locator(
      `.fence-solution__image[href="/zaun-tor/${slug}"]`,
    );
    const identity = await card
      .locator(".service-media")
      .getAttribute("data-media-id");
    await card.click();
    await expect(page).toHaveURL(new RegExp(`/zaun-tor/${slug}$`));
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".outdoor-hero .service-media")).toHaveAttribute(
      "data-media-id",
      identity!,
    );
    await expect(page.locator(".outdoor-hero img")).toHaveCSS(
      "object-fit",
      "contain",
    );
    await expect(page.locator(".outdoor-options__grid article")).toHaveCount(3);
    await expect(page.locator(".outdoor-planning ol li")).toHaveCount(4);
    await expect(page.locator(".outdoor-faq details")).toHaveCount(5);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`/zaun-tor/${slug}$`),
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    await expect(page.locator(".outdoor-related__heading a")).toHaveAttribute(
      "href",
      "/zaun-tor",
    );
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
    if (info.project.name === "mobile") {
      const title = await page.locator("h1").boundingBox(),
        image = await page.locator(".outdoor-hero__figure").boundingBox(),
        cta = await page.locator(".outdoor-hero .button").boundingBox(),
        lead = await page.locator(".outdoor-hero__lead").boundingBox();
      expect(title!.y + title!.height).toBeLessThan(image!.y);
      expect(image!.y + image!.height).toBeLessThan(cta!.y);
      expect(cta!.y).toBeLessThan(lead!.y);
    }
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
    ).toHaveValue("Zaun & Tor");
    await expect(
      page.getByLabel("Ihr Vorhaben", { exact: false }),
    ).not.toHaveValue("");
  });

test("fence section overview, diagrams, accessible navigation and category inquiry", async ({
  page,
}, info) => {
  await page.goto("/zaun-tor");
  await expect(page.locator(".fence-solution")).toHaveCount(6);
  await expect(page.locator(".fence-principle[role=img]")).toHaveCount(2);
  const scripts = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const collection = scripts
    .map((s) => JSON.parse(s))
    .find((s) => s["@type"] === "CollectionPage");
  expect(collection.mainEntity.numberOfItems).toBe(6);
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const heights = await page
      .locator(".fence-solution .service-media")
      .evaluateAll((els) => els.map((el) => el.getBoundingClientRect().height));
    expect(Math.max(...heights) - Math.min(...heights)).toBeLessThan(1);
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
  await page.locator(".outdoor-faq summary").first().focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".outdoor-faq details").first()).toHaveAttribute(
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
  await page.locator(".fence-comparison__grid article").first().hover();
  await expect(page.locator(".fence-principle__movement").first()).toHaveCSS(
    "animation-name",
    "none",
  );
  await page.screenshot({
    path: info.outputPath("overview.png"),
    fullPage: true,
  });
  await page.locator(".outdoor-hero .button").click();
  await expect(
    page.getByLabel("Leistungsbereich", { exact: false }),
  ).toHaveValue("Zaun & Tor");
});

test("fence section query boundaries and offer priority remain correct", async ({
  page,
}) => {
  for (const query of [
    "leistung=unknown",
    "leistung=hoftore&leistung=gelaender",
    "bereich=zaun-tor&bereich=fenster-tueren",
  ]) {
    await page.goto(`/projekt-anfragen?${query}`);
    await expect(page.getByLabel("Ihr Vorhaben", { exact: false })).toHaveValue(
      "",
    );
  }
  for (const [slug, topic] of [
    ["hoftore", "Zaun & Tor"],
    ["fenster", "Fenster & Türen"],
    ["pergolen", "Terrasse & Garten"],
  ]) {
    await page.goto(`/projekt-anfragen?leistung=${slug}&bereich=zaun-tor`);
    await expect(
      page.getByLabel("Leistungsbereich", { exact: false }),
    ).toHaveValue(topic!);
  }
  await page.goto(
    "/projekt-anfragen?angebot=lamellendaecher-pergolen&leistung=hoftore",
  );
  await expect(
    page.getByLabel("Leistungsbereich", { exact: false }),
  ).toHaveValue("Terrasse & Garten");
});

test("fence section navigation and native FAQ without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/zaun-tor", {
    waitUntil: "domcontentloaded",
  });
  await expect(page.locator(".fence-solution")).toHaveCount(6);
  await page
    .locator('.fence-solution__image[href="/zaun-tor/schiebetore"]')
    .click();
  await expect(page.locator("#story-title")).toContainText("neben der Öffnung");
  await page.locator(".outdoor-faq summary").first().click();
  await expect(page.locator(".outdoor-faq details").first()).toHaveAttribute(
    "open",
    "",
  );
  await context.close();
});
