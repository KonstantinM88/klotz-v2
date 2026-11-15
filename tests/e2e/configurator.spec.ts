import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";

test("configurator presentation, navigation, SEO and responsive layout", async ({
  page,
}, info) => {
  const external: string[] = [];
  const errors: string[] = [];
  page.on("request", (r) => {
    if (!r.url().startsWith("http://127.0.0.1:3100")) external.push(r.url());
  });
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  const response = await page.goto("/konfigurator");
  expect(response?.status()).toBe(200);
  expect(response?.headers()["x-robots-tag"]).toContain("noindex");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /\/konfigurator$/,
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  await expect(
    page.locator('.site-footer a[href="/konfigurator"]'),
  ).toBeVisible();
  if (info.project.name === "mobile") {
    await page.getByRole("button", { name: "Menü", exact: true }).click();
    await page
      .getByRole("dialog", { name: "Hauptmenü" })
      .getByRole("link", { name: /Konfigurator/ })
      .click();
    await expect(
      page.getByRole("dialog", { name: "Hauptmenü" }),
    ).not.toBeVisible();
  } else {
    await expect(
      page.locator('.desktop-nav a[href="/konfigurator"]'),
    ).toHaveAttribute("aria-current", "page");
  }
  const fullCatalog = page.getByRole("link", {
    name: "Vollständigen Konfigurator öffnen",
  });
  await expect(fullCatalog).toHaveAttribute(
    "href",
    "https://konfigurator.klotz.mobi/",
  );
  await expect(fullCatalog).toHaveAttribute("target", "_blank");
  await expect(fullCatalog).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(page.locator(".configurator-faq details")).toHaveCount(7);
  const schemas = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  expect(schemas.map((s) => JSON.parse(s)["@type"])).toEqual([
    "BreadcrumbList",
  ]);
  for (const width of info.project.name === "desktop"
    ? [320, 390, 768, 1024, 1100, 1250, 1440]
    : [390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page
      .locator(".energy-assumptions")
      .evaluate((el) => ((el as HTMLDetailsElement).open = true));
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator(".configurator-hero img")).toHaveCSS(
      "object-fit",
      "contain",
    );
    if (width < 761) {
      const title = await page.locator("h1").boundingBox();
      const media = await page
        .locator(".configurator-hero__media")
        .boundingBox();
      const cta = await page
        .locator(".configurator-hero__actions")
        .boundingBox();
      const lead = await page.locator(".configurator-hero__lead").boundingBox();
      expect(media!.y).toBeGreaterThan(title!.y + title!.height);
      expect(cta!.y).toBeGreaterThan(media!.y);
      expect(lead!.y).toBeGreaterThan(cta!.y);
    }
  }
  await page.setViewportSize(info.project.use.viewport!);
  await page
    .locator(".energy-assumptions")
    .evaluate((el) => ((el as HTMLDetailsElement).open = false));
  await page.locator(".configurator-method summary").focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".configurator-method")).toHaveAttribute(
    "open",
    "",
  );
  const faq = page.locator(".configurator-faq summary").first();
  await faq.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.locator(".configurator-faq details").first(),
  ).toHaveAttribute("open", "");
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(axe.violations).toEqual([]);
  expect(external).toEqual([]);
  expect(errors).toEqual([]);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({
    path: info.outputPath("configurator.png"),
    fullPage: true,
  });
});

test("catalog header stays fixed above the scrollable models without covering cards", async ({
  page,
}, info) => {
  await page.goto("/konfigurator#haustuer");
  await page
    .getByRole("button", { name: /Alle 503 Varianten ansehen/ })
    .click();
  const catalog = page.getByRole("dialog", { name: "Welche Tür ist Ihre?" });
  const header = catalog.locator(".door-catalog-dialog__heading");
  const body = catalog.getByRole("region", { name: "Türmodelle und Filter" });
  const close = catalog.getByRole("button", {
    name: "Modellkatalog schließen",
  });
  const initial = (await header.boundingBox())!;
  const pageScroll = await page.evaluate(() => scrollY);
  expect(initial.height).toBeLessThan(130);
  for (const position of [0.5, 1]) {
    await body.evaluate((element, fraction) => {
      element.scrollTop =
        (element.scrollHeight - element.clientHeight) * fraction;
    }, position);
    await expect
      .poll(() => body.evaluate((element) => element.scrollTop))
      .toBeGreaterThan(0);
    const current = (await header.boundingBox())!;
    const content = (await body.boundingBox())!;
    expect(current.y).toBeCloseTo(initial.y, 1);
    expect(current.height).toBeCloseTo(initial.height, 1);
    expect(content.y).toBeGreaterThanOrEqual(current.y + current.height - 1);
    await expect(close).toBeInViewport();
    expect(
      await header.evaluate((element) => {
        const box = element.getBoundingClientRect();
        return element.contains(
          document.elementFromPoint(box.x + box.width / 2, box.bottom - 3),
        );
      }),
    ).toBe(true);
    expect(await catalog.evaluate((element) => element.scrollTop)).toBe(0);
    // Browsers can round the background anchor position by one CSS pixel.
    expect(
      Math.abs((await page.evaluate(() => scrollY)) - pageScroll),
    ).toBeLessThanOrEqual(1);
    await catalog.screenshot({
      path: info.outputPath(`catalog-scroll-${position}.png`),
    });
  }
  await close.click();
  await expect(catalog).not.toBeVisible();
});

test("configurator full catalog, model dimensions, comparison, keyboard and inquiry continuity", async ({
  page,
}, info) => {
  await page.goto("/konfigurator#haustuer");
  const open = page.getByRole("button", { name: /Alle 503 Varianten ansehen/ });
  await open.click();
  const catalog = page.getByRole("dialog", { name: "Welche Tür ist Ihre?" });
  await expect(catalog).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Welche Tür ist Ihre?" }),
  ).toBeFocused();
  const more = catalog.getByRole("button", {
    name: /^Weitere 24 Varianten zeigen/,
  });
  await more.focus();
  await page.keyboard.press("Tab");
  await expect(
    catalog.getByRole("button", { name: "Modellkatalog schließen" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(more).toBeFocused();
  const collection = page.getByLabel("Kollektion", { exact: true });
  const options = await collection
    .locator("option")
    .evaluateAll((items) => items.map((o) => (o as HTMLOptionElement).value));
  expect(options).toHaveLength(10);
  for (const id of options.slice(1)) {
    await collection.selectOption(id);
    await expect(
      catalog.locator(".door-model-grid > article").first(),
    ).toBeVisible();
    await expect(catalog.locator(".door-catalog-toolbar p")).not.toHaveText(
      "0 Varianten gefunden",
    );
  }
  await collection.selectOption("all");
  await page.getByLabel("Modell oder Artikelnummer suchen").fill("DAPHNE");
  await expect(catalog.locator(".door-model-grid > article")).toHaveCount(12);
  await catalog
    .getByRole("button", { name: "DA01 merken", exact: true })
    .click();
  await catalog
    .locator(".door-model-grid > article")
    .first()
    .getByRole("button", { name: "Vergleichen", exact: true })
    .click();
  await catalog
    .locator(".door-model-grid > article")
    .nth(1)
    .getByRole("button", { name: "Vergleichen", exact: true })
    .click();
  await expect(catalog.locator(".door-comparison__grid > article")).toHaveCount(
    2,
  );
  await catalog.getByRole("button", { name: "★ Merkliste (1)" }).click();
  await expect(catalog.locator(".door-model-grid > article")).toHaveCount(1);
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await catalog.screenshot({ path: info.outputPath("catalog-comparison.png") });
  await page.keyboard.press("Escape");
  await expect(open).toBeFocused();
  await open.click();
  await catalog
    .getByRole("button", { name: "DAPHNE DA01 auswählen", exact: true })
    .click();
  await expect(catalog).not.toBeVisible();
  await page.getByLabel("Breite Türelement", { exact: true }).fill("100");
  await expect(
    page.getByRole("link", { name: /Türplanung besprechen/ }),
  ).toHaveCount(0);
  await expect(page.locator("#door-width-error")).toContainText("800–1250");
  await page.getByLabel("Breite Türelement", { exact: true }).fill("1100");
  await page.getByLabel("Höhe Türelement", { exact: true }).fill("2150");
  await page
    .getByLabel("Grundform", { exact: true })
    .selectOption("SINGLE_LEFT_RIGHT_TOP");
  await page.getByLabel("Breite Seitenteil links", { exact: true }).fill("350");
  await page
    .getByLabel("Breite Seitenteil rechts", { exact: true })
    .fill("450");
  await page.getByLabel("Höhe Oberlicht", { exact: true }).fill("400");
  await expect(page.locator(".door-total-dimension")).toContainText(
    "1900 × 2550",
  );
  await page.getByText("03 / Öffnung & Oberfläche", { exact: false }).click();
  await page.getByLabel("DIN-Richtung", { exact: true }).selectOption("links");
  await page.getByLabel("Öffnen nach", { exact: true }).selectOption("aussen");
  const photo = await page
    .locator(".door-model-preview__photo img")
    .getAttribute("src");
  await page
    .getByLabel("Flügel außen · Farbwunsch", { exact: true })
    .selectOption({ index: 3 });
  await expect(page.locator(".door-model-preview__photo img")).toHaveAttribute(
    "src",
    photo!,
  );
  await expect(page.locator(".door-model-preview__photo img")).toHaveCSS(
    "object-fit",
    "contain",
  );
  const downloadPromise = page.waitForEvent("download");
  await page
    .getByRole("button", { name: /Planungsnotiz herunterladen/ })
    .click();
  const download = await downloadPromise;
  const text = await readFile((await download.path())!, "utf8");
  expect(text).toContain("DAPHNE / DA01");
  expect(text).toContain("1900 × 2550 mm");
  expect(text).toContain("DIN links, nach aussen");
  await page
    .locator(".door-workbench")
    .screenshot({ path: info.outputPath("door-selection.png") });
  await page.getByRole("link", { name: /Türplanung besprechen/ }).click();
  await expect(
    page.getByLabel("Leistungsbereich *", { exact: true }),
  ).toHaveValue("Fenster & Türen");
  await expect(page.getByLabel("Ihr Vorhaben *", { exact: true })).toHaveValue(
    /DAPHNE \/ DA01/,
  );
  await expect(page.getByLabel("Ihr Vorhaben *", { exact: true })).toHaveValue(
    /1900 × 2550 mm/,
  );
});

test("configurator technical mode loads the exact external origin only after an explicit click", async ({
  page,
  request,
}) => {
  const home = await request.get("/");
  expect(home.headers()["content-security-policy"]).toContain(
    "frame-src 'none'",
  );
  const response = await page.goto("/konfigurator");
  expect(response!.headers()["content-security-policy"]).toContain(
    "frame-src https://konfigurator.klotz.mobi",
  );
  await expect(page.locator("iframe")).toHaveCount(0);
  let loaded = false;
  await page.route("https://konfigurator.klotz.mobi/**", async (route) => {
    loaded = true;
    await route.fulfill({
      contentType: "text/html; charset=utf-8",
      body: "<!doctype html><html lang='de'><title>Testoberfläche</title><body><h1>Hersteller-Testoberfläche</h1></body></html>",
    });
  });
  await page
    .getByRole("button", {
      name: /Vollständigen Hersteller-Konfigurator laden/,
    })
    .click();
  await expect(page.frameLocator("iframe").getByRole("heading")).toHaveText(
    "Hersteller-Testoberfläche",
  );
  expect(loaded).toBe(true);
  await expect(page.locator("iframe")).toHaveAttribute(
    "src",
    "https://konfigurator.klotz.mobi/",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page
    .getByRole("button", { name: /Technischen Vollmodus schließen/ })
    .click();
  await expect(page.locator("iframe")).toHaveCount(0);
});

test("configurator energy model, own tariff, heat pump and inquiry continuity", async ({
  page,
}, info) => {
  await page.goto("/konfigurator#energiesparrechner");
  await expect(page.getByTestId("saved-heat")).toHaveText("2.550");
  await expect(page.getByTestId("saved-cost")).toHaveCount(0);
  await page
    .getByLabel("Ihr Arbeitspreis (optional)", { exact: true })
    .fill("0,12");
  await expect(
    page.getByRole("link", { name: "Fenstertausch besprechen", exact: true }),
  ).toHaveCount(0);
  await page
    .getByRole("button", { name: "Potenzial berechnen", exact: true })
    .click();
  await expect(page.getByTestId("saved-cost")).toHaveText("407,96 €/a");
  await expect(page.getByTestId("saved-energy")).toHaveText("3.400 kWh/a");
  await expect(page.locator(".energy-result__heading h3")).toBeFocused();
  await page
    .getByLabel("Heizsystem", { exact: true })
    .selectOption("waermepumpe");
  await expect(
    page.getByLabel("Ihr Arbeitspreis (optional)", { exact: true }),
  ).toHaveValue("");
  await page
    .getByLabel("Ihr Arbeitspreis (optional)", { exact: true })
    .fill("0.30");
  await page
    .getByRole("button", { name: "Potenzial berechnen", exact: true })
    .click();
  await expect(page.getByTestId("saved-energy")).toHaveText("850 kWh/a");
  await expect(page.getByTestId("saved-cost")).toHaveText("254,97 €/a");
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
  await page
    .locator(".energy-workbench")
    .screenshot({ path: info.outputPath("window-comparison.png") });
  await page
    .getByRole("link", { name: "Fenstertausch besprechen", exact: true })
    .click();
  await expect(
    page.getByLabel("Leistungsbereich *", { exact: true }),
  ).toHaveValue("Fenster & Türen");
  await expect(page.getByLabel("Ihr Vorhaben *", { exact: true })).toHaveValue(
    /Jahresarbeitszahl \(Annahme\): 3/,
  );
  await expect(page.getByLabel("Ihr Vorhaben *", { exact: true })).toHaveValue(
    /254,97 €\/a/,
  );
});

test("configurator calculator errors, keyboard, assumptions and no improvement", async ({
  page,
}) => {
  await page.goto("/konfigurator#energiesparrechner");
  await page.getByLabel("Gesamte Fensterfläche", { exact: true }).fill("20abc");
  await page
    .getByRole("button", { name: "Potenzial berechnen", exact: true })
    .click();
  await expect(page.locator(".energy-errors")).toBeFocused();
  await expect(page.getByTestId("saved-heat")).toHaveCount(0);
  await expect(
    page.getByLabel("Gesamte Fensterfläche", { exact: true }),
  ).toHaveAttribute("aria-invalid", "true");
  await page.locator(".energy-errors").getByRole("link").first().click();
  await expect(
    page.getByLabel("Gesamte Fensterfläche", { exact: true }),
  ).toBeFocused();
  await page.getByLabel("Gesamte Fensterfläche", { exact: true }).fill("20");
  await page.getByLabel("Uw-Wert neues Fenster", { exact: true }).fill("4");
  await page
    .getByRole("button", { name: "Potenzial berechnen", exact: true })
    .click();
  await expect(page.getByTestId("saved-heat")).toHaveText("0");
  await expect(page.locator(".energy-result__reduction")).toContainText(
    "keine Verringerung",
  );
  await page.locator(".energy-assumptions summary").focus();
  await page.keyboard.press("Enter");
  await page.getByLabel("Nutzungsgrad der Heizung", { exact: true }).fill("0");
  await page
    .getByRole("button", { name: "Potenzial berechnen", exact: true })
    .click();
  await expect(page.locator(".energy-errors")).toContainText(
    "Nutzungsgrad von 0,1 bis 1",
  );
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await page
    .getByRole("button", { name: "Beispiel zurücksetzen", exact: true })
    .click();
  await expect(page.getByTestId("saved-heat")).toHaveText("2.550");
  await expect(page.locator(".energy-errors")).toHaveCount(0);
});

test("configurator source redirects and context precedence remain bounded", async ({
  page,
  request,
}) => {
  const capital = await request.get("/Konfigurator?test=1", {
    maxRedirects: 0,
  });
  expect(capital.status()).toBe(308);
  expect(capital.headers().location).toMatch(/\/konfigurator\?test=1$/);
  const energy = await request.get("/energiesparrechner", { maxRedirects: 0 });
  expect(energy.status()).toBe(308);
  expect(energy.headers().location).toBe("/konfigurator#energiesparrechner");
  const note =
    "planung=haustuer&modelId=DA01&width=1100&height=2150&form=SINGLE&leftWidth=400&rightWidth=400&topHeight=400&din=rechts&opening=innen&frameColor=fake&leafColor=fake";
  await page.goto(`/projekt-anfragen?${note}&angebot=zaeune-tore`);
  await expect(
    page.getByLabel("Leistungsbereich *", { exact: true }),
  ).toHaveValue("Zaun & Tor");
  await page.goto(`/projekt-anfragen?${note}&leistung=wartung-service`);
  await expect(
    page.getByLabel("Leistungsbereich *", { exact: true }),
  ).toHaveValue("Wartung & Service");
  await page.goto(`/projekt-anfragen?${note}&modelId=DA02`);
  await expect(page.getByLabel("Ihr Vorhaben *", { exact: true })).toHaveValue(
    "",
  );
  await page.goto(
    "/projekt-anfragen?planung=fenster&area=1e5&oldUw=2.84&newUw=1.2&system=gas&degreeDays=3239&factor=0.75&price=0.12",
  );
  await expect(page.getByLabel("Ihr Vorhaben *", { exact: true })).toHaveValue(
    "",
  );
  await page.goto("/angebote/fenster-tueren");
  await expect(
    page.getByRole("link", { name: "Zum Haustürkonfigurator", exact: true }),
  ).toHaveAttribute("href", "/konfigurator#haustuer");
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Allow: /");
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).not.toContain("<loc>");
});

test("configurator supports no JavaScript and reduced motion", async ({
  browser,
}, info) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: info.project.use.viewport,
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/konfigurator", {
    waitUntil: "domcontentloaded",
  });
  await expect(page.locator(".configurator-nojs")).toBeVisible();
  await expect(page.locator(".door-plan-controls")).not.toBeVisible();
  await expect(page.locator(".energy-form")).not.toBeVisible();
  await page.locator(".configurator-faq summary").first().click();
  await expect(
    page.locator(".configurator-faq details").first(),
  ).toHaveAttribute("open", "");
  await expect(
    page.getByRole("link", { name: /^Vorhaben direkt besprechen/ }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await context.close();
  const motionContext = await browser.newContext({
    reducedMotion: "reduce",
    viewport: info.project.use.viewport,
  });
  const motionPage = await motionContext.newPage();
  await motionPage.goto("http://127.0.0.1:3100/konfigurator");
  await expect(motionPage.locator(".door-dimensions rect").first()).toHaveCSS(
    "transition-duration",
    "0s",
  );
  await motionContext.close();
});
