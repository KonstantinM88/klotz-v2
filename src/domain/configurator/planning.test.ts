import { describe, expect, it } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import {
  calculateWindowPotential,
  energyRequestUrl,
  parseDecimal,
  validateEnergyInput,
} from "./planning";
import { defaultDoorPlan, doorPlanUrl } from "./door-catalog";
import { configuratorRequestContext } from "@/features/inquiry/configurator-context";
import manifest from "../../../content/assets-manifest.json";
import { offerPageSchema } from "@/content/schemas";

const example = {
  area: "20",
  oldUw: "2,84",
  newUw: "1,20",
  degreeDays: "3239",
  factor: "0,75",
  price: "0,12",
  system: "gas",
};

describe("window potential model and planning handoff", () => {
  it("allows the new internal offer link while rejecting unsafe link schemes", async () => {
    const offer = (await repository.getOfferPages())[0]!;
    const withLink = (href: string) => ({
      ...offer,
      sections: offer.sections.map((section, index) =>
        index === 0 ? { ...section, link: { label: "Planen", href } } : section,
      ),
    });
    expect(
      offerPageSchema.safeParse(withLink("/konfigurator#haustuer")).success,
    ).toBe(true);
    expect(
      offerPageSchema.safeParse(withLink("https://konfigurator.klotz.mobi/"))
        .success,
    ).toBe(true);
    for (const href of [
      "//outside.example",
      "javascript:alert(1)",
      "/../outside",
      "data:text/html,test",
    ])
      expect(offerPageSchema.safeParse(withLink(href)).success).toBe(false);
  });
  it("converts W, degree-days and area into heat, then final energy and optional cost", () => {
    const parsed = validateEnergyInput(example);
    expect(parsed.success).toBe(true);
    if (!parsed.success) throw new Error("Invalid test fixture");
    const result = calculateWindowPotential(parsed.input);
    expect(result.oldLoss).toBeCloseTo(4415.4048, 6);
    expect(result.newLoss).toBeCloseTo(1865.664, 6);
    expect(result.savedHeat).toBeCloseTo(2549.7408, 6);
    expect(result.savedEnergy).toBeCloseTo(3399.6544, 6);
    expect(result.savedCost).toBeCloseTo(407.958528, 6);
    expect(result.reduction).toBeCloseTo(57.74647887, 6);
    expect(
      calculateWindowPotential({ ...parsed.input, area: 40 }).savedHeat,
    ).toBeCloseTo(5099.4816, 6);
  });
  it("uses annual performance for heat pumps and does not invent a tariff", () => {
    const parsed = validateEnergyInput({
      ...example,
      system: "waermepumpe",
      factor: "3",
      price: "",
    });
    if (!parsed.success) throw new Error("Invalid test fixture");
    const result = calculateWindowPotential(parsed.input);
    expect(result.savedEnergy).toBeCloseTo(849.9136, 6);
    expect(result.savedCost).toBeUndefined();
    expect(
      calculateWindowPotential({ ...parsed.input, price: 0 }).savedCost,
    ).toBe(0);
  });
  it("does not claim savings with an equal or worse new Uw", () => {
    for (const newUw of ["2,84", "4"]) {
      const parsed = validateEnergyInput({ ...example, newUw });
      if (!parsed.success) throw new Error("Invalid test fixture");
      const result = calculateWindowPotential(parsed.input);
      expect(result.savedHeat).toBe(0);
      expect(result.savedEnergy).toBe(0);
      expect(result.savedCost).toBe(0);
      expect(result.newLoss).toBeGreaterThanOrEqual(result.oldLoss);
    }
  });
  it("accepts German decimals while rejecting partial, grouped and non-finite input", () => {
    expect(parseDecimal(" 1,2345 ")).toBe(1.2345);
    expect(parseDecimal("1.2345")).toBe(1.2345);
    for (const value of [
      "",
      "1,2abc",
      "1e3",
      "1.000,50",
      "Infinity",
      "NaN",
      "-2",
      ["20"],
      undefined,
      "0,12345",
    ])
      expect(parseDecimal(value)).toBeUndefined();
  });
  it("rejects invalid area, system, coefficients, tariff and repeated numeric query values", () => {
    for (const override of [
      { area: "0" },
      { area: "1001" },
      { oldUw: "0" },
      { newUw: "9" },
      { degreeDays: "0" },
      { factor: "0" },
      { factor: "3" },
      { system: "unknown" },
      { price: "-1" },
      { price: "6" },
      { price: ["0.1", "0.2"] },
      { area: ["20", "30"] },
    ])
      expect(validateEnergyInput({ ...example, ...override }).success).toBe(
        false,
      );
  });
  it("round-trips only catalog door choices and safely formatted numbers into the inquiry", async () => {
    const doorUrl = new URL(
      doorPlanUrl(defaultDoorPlan(await repository.getDoorCatalog())),
      "http://localhost",
    );
    const doorParams = Object.fromEntries(doorUrl.searchParams);
    const door = await configuratorRequestContext(repository, doorParams);
    expect(door?.topic).toBe("Fenster & Türen");
    expect(door?.message).toContain("DA01");
    expect(door?.message).toContain("1100 × 2150 mm");
    expect(
      await configuratorRequestContext(repository, {
        ...doorParams,
        modelId: ["DA01", "DA02"],
      }),
    ).toBeUndefined();
    expect(
      await configuratorRequestContext(repository, {
        ...doorParams,
        planung: ["haustuer", "fenster"],
      }),
    ).toBeUndefined();
    const parsed = validateEnergyInput(example);
    if (!parsed.success) throw new Error("Invalid test fixture");
    const energyParams = Object.fromEntries(
      new URL(energyRequestUrl(parsed.input), "http://localhost").searchParams,
    );
    const energy = await configuratorRequestContext(repository, energyParams);
    expect(energy?.message).toContain("2.550 kWh/a");
    expect(energy?.message).toContain("407,96 €/a");
    expect(energy?.message).toContain("Keine Prognose");
    expect(
      await configuratorRequestContext(repository, {
        ...energyParams,
        oldUw: "2<script>",
      }),
    ).toBeUndefined();
    expect(
      await configuratorRequestContext(repository, {
        ...energyParams,
        system: ["gas", "strom"],
      }),
    ).toBeUndefined();
    expect(
      await configuratorRequestContext(repository, { planung: "unknown" }),
    ).toBeUndefined();
  });
  it("has a complete typed catalog, traceable imagery, verified HTTPS destination and no preset energy price", async () => {
    const content = await repository.getConfiguratorPageContent();
    expect(content.energy.defaults.price).toBe("");
    expect(validateEnergyInput(content.energy.defaults).success).toBe(true);
    expect(content.door.externalUrl).toBe("https://konfigurator.klotz.mobi/");
    expect(content.status).toBe("draft");
    expect(content.faq).toHaveLength(7);
    expect(new Set(content.faq.map((f) => f.question)).size).toBe(7);
    expect(
      manifest.find((a) => a.src === content.hero.media.image.src)
        ?.rightsStatus,
    ).toBe("client-presentation-approved");
    expect(
      (await repository.getPrimaryNavigation()).find(
        (n) => n.label === "Konfigurator",
      )?.href,
    ).toBe("/konfigurator");
    expect(content.sources.map((s) => new URL(s.url).hostname)).toEqual([
      "www.ift-rosenheim.de",
      "passipedia.de",
      "www.dwd.de",
    ]);
  });
});
