import { describe, expect, it } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import {
  defaultDoorPlan,
  doorForms,
  doorPlanText,
  doorPlanUrl,
  validateDoorPlan,
} from "./door-catalog";
import { configuratorRequestContext } from "@/features/inquiry/configurator-context";
import manifest from "../../../content/door-catalog-assets-manifest.json";

describe("original manufacturer catalog and dimensional planning", () => {
  it("retains the full captured catalog, source bounds and traceable exact or base imagery", async () => {
    const catalog = await repository.getDoorCatalog();
    expect(catalog.models).toHaveLength(503);
    expect(new Set(catalog.models.map((m) => m.family)).size).toBe(134);
    expect(new Set(catalog.models.map((m) => m.key)).size).toBe(503);
    expect(catalog.collections).toHaveLength(9);
    expect(catalog.colors).toHaveLength(199);
    expect(catalog.formIds).toEqual(doorForms.map((f) => f.id));
    expect(manifest.assets).toHaveLength(427);
    for (const collection of catalog.collections)
      expect(
        catalog.models.some((m) => m.collections.includes(collection.id)),
      ).toBe(true);
    for (const model of catalog.models) {
      expect(model.dimensions).not.toBeNull();
      expect(model.sourceUrl).toBe(
        `https://konfigurator.klotz.mobi/model-by-id/${encodeURIComponent(model.id)}`,
      );
      if (model.image) {
        expect(
          manifest.assets.some((asset) => asset.src === model.image!.src),
        ).toBe(true);
        if (model.imageModelId !== model.id)
          expect(model.imageModelId).toBe(model.parentModel);
      }
    }
    expect(catalog.models.filter((m) => !m.image).map((m) => m.id)).toEqual([
      "RU40",
      "ZO02",
      "ZO81",
    ]);
  });
  it("computes total dimensions only from the selected form and validates each model's own limits", async () => {
    const catalog = await repository.getDoorCatalog();
    const plan = {
      ...defaultDoorPlan(catalog),
      form: "SINGLE_LEFT_RIGHT_TOP",
      leftWidth: "350",
      rightWidth: "450",
      topHeight: "400",
    };
    const parsed = validateDoorPlan(catalog, plan);
    expect(parsed.success).toBe(true);
    if (!parsed.success) throw new Error("Invalid fixture");
    expect(parsed.totalWidth).toBe(1900);
    expect(parsed.totalHeight).toBe(2550);
    const narrow = { ...plan, width: "850" };
    expect(
      validateDoorPlan(catalog, { ...narrow, modelId: "DA01" }).success,
    ).toBe(true);
    expect(
      validateDoorPlan(catalog, { ...narrow, modelId: "AC01" }).success,
    ).toBe(false);
    expect(
      validateDoorPlan(catalog, { ...plan, form: "SINGLE", leftWidth: "bad" })
        .success,
    ).toBe(true);
  });
  it("rejects invalid dimensions, duplicate query fields and untrusted catalog choices", async () => {
    const catalog = await repository.getDoorCatalog();
    const plan = defaultDoorPlan(catalog);
    for (const override of [
      { modelId: "<script>" },
      { modelId: ["DA01", "DA02"] },
      { width: "1100junk" },
      { width: "1e3" },
      { height: "0" },
      { height: "2600" },
      { width: "799" },
      { width: ["1100", "1200"] },
      { form: "other" },
      { din: "unknown" },
      { opening: "other" },
      { leafColor: "fake" },
      { frameColor: [plan.frameColor] },
      { form: "SINGLE_TOP", topHeight: "-1" },
      { form: "SINGLE_LEFT", leftWidth: "10001" },
    ])
      expect(validateDoorPlan(catalog, { ...plan, ...override }).success).toBe(
        false,
      );
  });
  it("round-trips an exact model, active side measurements and color wishes into the bounded inquiry", async () => {
    const catalog = await repository.getDoorCatalog();
    const plan = {
      ...defaultDoorPlan(catalog),
      form: "SINGLE_RIGHT_TOP",
      rightWidth: "500",
      topHeight: "300",
      din: "links" as const,
    };
    const params = Object.fromEntries(
      new URL(doorPlanUrl(plan), "http://localhost").searchParams,
    );
    const context = await configuratorRequestContext(repository, params);
    expect(context?.message).toContain("DAPHNE / DA01");
    expect(context?.message).toContain("1600 × 2450 mm");
    expect(context?.message).toContain("Seitenteil rechts: 500 mm");
    expect(context?.message).toContain("DIN links");
    expect(context?.message).not.toContain("Seitenteil links:");
    expect(doorPlanText(catalog, { ...plan, width: "1" })).toBeUndefined();
    expect(
      await configuratorRequestContext(repository, {
        ...params,
        modelId: "unknown",
      }),
    ).toBeUndefined();
  });
});
