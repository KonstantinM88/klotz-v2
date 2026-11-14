import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const slugs = [
  "terrassenueberdachungen",
  "lamellendaecher",
  "pergolen",
  "sommer-wintergaerten",
  "glasschiebewaende",
  "sonnenschutz",
];
for (const slug of slugs)
  test(`outdoor service identity, content and responsive images: ${slug}`, async ({
    page,
  }, info) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto("/terrasse-garten");
    const card = page.locator(
      `.terrace-solution__image-link[href="/terrasse-garten/${slug}"]`,
    );
    const identity = await card
      .locator(".service-media")
      .getAttribute("data-media-id");
    await card.click();
    await expect(page).toHaveURL(new RegExp(`/terrasse-garten/${slug}$`));
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".outdoor-hero .service-media")).toHaveAttribute(
      "data-media-id",
      identity!,
    );
    await expect(page.locator(".outdoor-options__grid article")).toHaveCount(3);
    await expect(page.locator(".outdoor-faq details")).toHaveCount(5);
    await expect(page.locator("#story-title")).not.toContainText(
      "mit den richtigen Fragen",
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      new RegExp(`/terrasse-garten/${slug}$`),
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    const images = page.locator("main img");
    for (const img of await images.all()) {
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
    for (const img of await page
      .locator(".outdoor-hero .service-media img")
      .all())
      await expect(img).toHaveCSS("object-fit", "contain");
    for (const width of info.project.name === "desktop"
      ? [320, 768, 1024, 1350, 1440]
      : [390]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      const bounds = await page
        .locator(".outdoor-hero .service-media")
        .boundingBox();
      expect(bounds!.width / bounds!.height).toBeCloseTo(1.5, 1);
    }
    await page.setViewportSize(info.project.use.viewport!);
    const summary = page.locator(".outdoor-faq summary").first();
    await summary.focus();
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
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: info.outputPath("service.png"),
      fullPage: true,
    });
    await page.locator(".outdoor-hero .button").click();
    await expect(page).toHaveURL(new RegExp(`leistung=${slug}`));
    await expect(
      page.getByLabel("Leistungsbereich", { exact: false }),
    ).toHaveValue("Terrasse & Garten");
    await expect(
      page.getByLabel("Ihr Vorhaben", { exact: false }),
    ).not.toHaveValue("");
  });

test("service content and native FAQ work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/terrasse-garten/pergolen");
  await expect(page.locator(".outdoor-options__grid article")).toHaveCount(3);
  await page.locator(".outdoor-faq summary").first().click();
  await expect(page.locator(".outdoor-faq details").first()).toHaveAttribute(
    "open",
    "",
  );
  await expect(
    page.locator(".outdoor-hero .service-media img"),
  ).toHaveAttribute("src", /terrace-pergola-hero/);
  await context.close();
});
