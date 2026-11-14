import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("terrace buyer journey compares solutions, opens FAQ and carries inquiry context", async ({
  page,
}) => {
  await page.goto("/terrasse-garten");
  await page.getByRole("link", { name: "Lösungen entdecken" }).click();
  await expect(page.locator("#solutions-title")).toBeInViewport();
  await expect(page.locator(".terrace-solution")).toHaveCount(6);
  await expect(page.locator(".terrace-comparison__row")).toHaveCount(4);
  await expect(page.locator(".terrace-project")).toHaveCount(3);
  const imageLinkAudit = await new AxeBuilder({ page })
    .include(".terrace-solutions")
    .withRules(["label-content-name-mismatch"])
    .analyze();
  expect(imageLinkAudit.violations).toEqual([]);
  const summary = page.locator("#frage-nachruesten summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#frage-nachruesten")).toHaveAttribute("open", "");
  await expect(page.locator("#frage-nachruesten a")).toHaveAttribute(
    "href",
    "/terrasse-garten/glasschiebewaende",
  );
  const audit = await new AxeBuilder({ page })
    .include(".terrace-faq")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
  await page
    .getByRole("link", { name: "Meine Terrasse planen" })
    .first()
    .click();
  await expect(
    page.getByLabel("Leistungsbereich", { exact: false }),
  ).toHaveValue("Terrasse & Garten");
  await expect(page.getByLabel("Ihr Vorhaben", { exact: false })).toHaveValue(
    /meine Terrasse oder meinen Garten/,
  );
  await expect(
    page.getByRole("button", { name: "Demo-Anfrage prüfen" }),
  ).toBeVisible();
});

test("terrace cards keep equal image heights and readable layouts across widths", async ({
  page,
}, info) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/terrasse-garten");
  await page.evaluate(() => document.fonts.ready);
  for (const width of [320, 390, 620, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const heights = await page
      .locator(".terrace-solution__visual")
      .evaluateAll((items) =>
        items.map((item) => item.getBoundingClientRect().height),
      );
    expect(Math.min(...heights)).toBeGreaterThan(100);
    expect(Math.max(...heights) - Math.min(...heights)).toBeLessThan(1);
    const ids = await page
      .locator("[id]")
      .evaluateAll((nodes) => nodes.map((node) => node.id));
    expect(new Set(ids).size).toBe(ids.length);
  }
  await page.setViewportSize(info.project.use.viewport!);
  await page.screenshot({
    path: info.outputPath("terrace.png"),
    fullPage: true,
  });
});

test("unknown and repeated category parameters do not prefill arbitrary content", async ({
  page,
}) => {
  for (const query of [
    "bereich=unknown",
    "bereich=terrasse-garten&bereich=unknown",
  ]) {
    await page.goto(`/projekt-anfragen?${query}`);
    await expect(page.getByLabel("Ihr Vorhaben", { exact: false })).toHaveValue(
      "",
    );
  }
});
