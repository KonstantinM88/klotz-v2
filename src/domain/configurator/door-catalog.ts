export type DoorModel = {
  id: string;
  key: string;
  family: string;
  title: string;
  description: string;
  parentModel: string;
  imageModelId: string | null;
  collections: string[];
  sourceUrl: string;
  hasGlass: boolean;
  dimensions: {
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
  } | null;
  image: { src: string; width: number; height: number } | null;
};
export type ManufacturerDoorCatalog = {
  capturedAt: string;
  sourceUrl: string;
  status: string;
  collections: { id: string; label: string }[];
  models: DoorModel[];
  colors: {
    id: string;
    label: string;
    group: string;
    hex: string;
    ral: string;
  }[];
  formIds: string[];
};
export const doorForms = [
  {
    id: "SINGLE",
    label: "Tür ohne Seitenteil",
    left: false,
    right: false,
    top: false,
  },
  {
    id: "SINGLE_LEFT",
    label: "Seitenteil links",
    left: true,
    right: false,
    top: false,
  },
  {
    id: "SINGLE_RIGHT",
    label: "Seitenteil rechts",
    left: false,
    right: true,
    top: false,
  },
  {
    id: "SINGLE_LEFT_RIGHT",
    label: "Seitenteile beidseitig",
    left: true,
    right: true,
    top: false,
  },
  {
    id: "SINGLE_TOP",
    label: "Tür mit Oberlicht",
    left: false,
    right: false,
    top: true,
  },
  {
    id: "SINGLE_LEFT_TOP",
    label: "Links & Oberlicht",
    left: true,
    right: false,
    top: true,
  },
  {
    id: "SINGLE_RIGHT_TOP",
    label: "Rechts & Oberlicht",
    left: false,
    right: true,
    top: true,
  },
  {
    id: "SINGLE_LEFT_RIGHT_TOP",
    label: "Beidseitig & Oberlicht",
    left: true,
    right: true,
    top: true,
  },
] as const;
export type DoorPlan = {
  modelId: string;
  width: string;
  height: string;
  form: string;
  leftWidth: string;
  rightWidth: string;
  topHeight: string;
  din: "links" | "rechts";
  opening: "innen" | "aussen";
  frameColor: string;
  leafColor: string;
};
export function defaultDoorPlan(catalog: ManufacturerDoorCatalog): DoorPlan {
  const color =
    catalog.colors.find((c) => c.ral === "9016")?.id ?? catalog.colors[0]!.id;
  return {
    modelId:
      catalog.models.find((m) => m.id === "DA01")?.id ?? catalog.models[0]!.id,
    width: "1100",
    height: "2150",
    form: "SINGLE",
    leftWidth: "400",
    rightWidth: "400",
    topHeight: "400",
    din: "rechts",
    opening: "innen",
    frameColor: color,
    leafColor: color,
  };
}
export function validateDoorPlan(
  catalog: ManufacturerDoorCatalog,
  values: Record<string, unknown>,
) {
  const errors: Record<string, string> = {};
  const model = catalog.models.find((m) => m.id === values.modelId);
  const form = doorForms.find((f) => f.id === values.form);
  if (!model) errors.modelId = "Bitte ein Modell aus dem Katalog auswählen.";
  if (!form) errors.form = "Bitte eine Grundform auswählen.";
  const numeric = (key: string, active: boolean) => {
    const value = values[key];
    if (
      typeof value !== "string" ||
      !/^\d{1,5}$/.test(value) ||
      Number(value) < 1 ||
      Number(value) > 10000
    ) {
      if (active)
        errors[key] =
          "Bitte ein positives Planungsmaß in ganzen Millimetern eingeben (bis 10.000).";
      return 0;
    }
    return Number(value);
  };
  const width = numeric("width", true),
    height = numeric("height", true);
  const leftWidth = numeric("leftWidth", !!form?.left),
    rightWidth = numeric("rightWidth", !!form?.right),
    topHeight = numeric("topHeight", !!form?.top);
  if (model?.dimensions) {
    const d = model.dimensions;
    if (width < d.minWidth || width > d.maxWidth)
      errors.width = `Modell ${model.id}: Breite ${d.minWidth}–${d.maxWidth} mm laut Katalog.`;
    if (height < d.minHeight || height > d.maxHeight)
      errors.height = `Modell ${model.id}: Höhe ${d.minHeight}–${d.maxHeight} mm laut Katalog.`;
  }
  for (const key of ["frameColor", "leafColor"])
    if (!catalog.colors.some((c) => c.id === values[key]))
      errors[key] = "Bitte eine Oberfläche aus dem Katalog auswählen.";
  if (values.din !== "links" && values.din !== "rechts")
    errors.din = "Bitte DIN links oder rechts auswählen.";
  if (values.opening !== "innen" && values.opening !== "aussen")
    errors.opening = "Bitte Öffnungsrichtung auswählen.";
  if (Object.keys(errors).length || !model || !form)
    return { success: false as const, errors };
  const plan: DoorPlan = {
    modelId: model.id,
    width: String(width),
    height: String(height),
    form: form.id,
    leftWidth: String(form.left ? leftWidth : 400),
    rightWidth: String(form.right ? rightWidth : 400),
    topHeight: String(form.top ? topHeight : 400),
    din: values.din as DoorPlan["din"],
    opening: values.opening as DoorPlan["opening"],
    frameColor: values.frameColor as string,
    leafColor: values.leafColor as string,
  };
  return {
    success: true as const,
    plan,
    model,
    form,
    totalWidth:
      width + (form.left ? leftWidth : 0) + (form.right ? rightWidth : 0),
    totalHeight: height + (form.top ? topHeight : 0),
  };
}
export function doorPlanUrl(plan: DoorPlan) {
  return `/projekt-anfragen?${new URLSearchParams({ planung: "haustuer", ...plan })}`;
}
export function doorPlanText(catalog: ManufacturerDoorCatalog, plan: DoorPlan) {
  const result = validateDoorPlan(catalog, plan);
  if (!result.success) return undefined;
  return [
    `Haustürplanung · ${result.model.family} / ${result.model.id}`,
    result.model.description,
    `Grundform: ${result.form.label}`,
    `Türelement Breite × Höhe: ${plan.width} × ${plan.height} mm`,
    ...(result.form.left ? [`Seitenteil links: ${plan.leftWidth} mm`] : []),
    ...(result.form.right ? [`Seitenteil rechts: ${plan.rightWidth} mm`] : []),
    ...(result.form.top ? [`Oberlicht: ${plan.topHeight} mm`] : []),
    `Gesamtes Planungsmaß: ${result.totalWidth} × ${result.totalHeight} mm`,
    `Öffnung: DIN ${plan.din}, nach ${plan.opening}`,
    `Flügel außen (Wunsch): ${catalog.colors.find((c) => c.id === plan.leafColor)!.label}`,
    `Blendrahmen außen (Wunsch): ${catalog.colors.find((c) => c.id === plan.frameColor)!.label}`,
    "Planungsvorschlag; kein Bestell- oder Fertigungsmaß. Modellgrenzen aus dem Katalog, weitere System-/Beschlag-/Glasabhängigkeiten im technischen Vollmodus bzw. mit KLOTZ prüfen. Oberfläche als Farbmuster, Modellabbildung in Katalogausführung.",
  ].join("\n");
}
