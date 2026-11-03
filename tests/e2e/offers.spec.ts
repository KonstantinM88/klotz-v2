import { test, expect } from "@playwright/test";

test("offers lead to a contextual inquiry and support keyboard FAQ", async ({
  page,
  isMobile,
}) => {
  await page.goto("/angebote");
  await expect(page.locator(".offer-card")).toHaveCount(5);
  if (isMobile) {
    await page.getByRole("button", { name: /Menü/ }).click();
    await page
      .getByRole("dialog")
      .getByRole("link", { name: /Angebote$/ })
      .click();
  } else {
    await expect(
      page
        .locator(".desktop-nav")
        .getByRole("link", { name: "Angebote", exact: true }),
    ).toHaveAttribute("aria-current", "page");
  }
  await page
    .locator('.offer-card__link[href="/angebote/fenster-tueren"]')
    .click();
  await expect(page.locator(".offer-price-item")).toHaveCount(6);
  const question = page.locator(".offer-faq summary").first();
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question.locator("..")).toHaveAttribute("open", "");
  await page
    .locator(".offer-hero__actions")
    .getByRole("link", { name: "Zu diesem Angebot anfragen" })
    .click();
  await expect(page).toHaveURL(/projekt-anfragen\?angebot=fenster-tueren/);
  await expect(
    page.getByLabel("Leistungsbereich *", { exact: true }),
  ).toHaveValue("Fenster & Türen");
  await expect(page.getByLabel("Ihr Vorhaben *", { exact: true })).toHaveValue(
    /Fenster & Türen/,
  );
  await page.goto("/projekt-anfragen?angebot=unknown");
  await expect(
    page.getByLabel("Leistungsbereich *", { exact: true }),
  ).toHaveValue("");
});

test("offers remain readable without JavaScript and fit narrow and tablet widths", async ({
  browser,
  page,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const plainPage = await context.newPage();
  await plainPage.goto("http://127.0.0.1:3100/angebote/fenster-tueren");
  await expect(plainPage.locator(".offer-price-grid")).toContainText("2.900 €");
  await expect(plainPage.locator(".offer-article")).toContainText(
    "Montage nicht enthalten",
  );
  await plainPage.locator(".offer-faq summary").first().click();
  await expect(plainPage.locator(".offer-faq details").first()).toHaveAttribute(
    "open",
    "",
  );
  await context.close();
  for (const width of [320, 768, 1024, 1060, 1100, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/angebote",
      "/angebote/energetisch-sanieren-foerderung",
    ]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
  }
});
