export const heatingSystems = [
  "gas",
  "oel",
  "fernwaerme",
  "strom",
  "waermepumpe",
] as const;
export type HeatingSystem = (typeof heatingSystems)[number];
export type EnergyDraft = {
  area: string;
  oldUw: string;
  newUw: string;
  degreeDays: string;
  factor: string;
  price: string;
  system: HeatingSystem;
};
export type EnergyField = keyof EnergyDraft;
export type EnergyInput = {
  area: number;
  oldUw: number;
  newUw: number;
  degreeDays: number;
  factor: number;
  price?: number;
  system: HeatingSystem;
};
export type EnergyValidation =
  | { success: true; input: EnergyInput }
  | { success: false; errors: Partial<Record<EnergyField, string>> };

/** Decimal input only: no exponent, grouping, partial parses or non-finite values. */
export function parseDecimal(value: unknown): number | undefined {
  if (typeof value !== "string" || value.length > 12) return undefined;
  const text = value.trim();
  if (!/^\d+(?:[,.]\d{1,4})?$/.test(text)) return undefined;
  const number = Number(text.replace(",", "."));
  return Number.isFinite(number) ? number : undefined;
}

export function validateEnergyInput(
  values: Record<string, unknown>,
): EnergyValidation {
  const errors: Partial<Record<EnergyField, string>> = {};
  function number(
    key: Exclude<EnergyField, "system" | "price">,
    min: number,
    max: number,
    message: string,
  ) {
    const value = parseDecimal(values[key]);
    if (value === undefined || value < min || value > max)
      errors[key] = message;
    return value ?? 0;
  }
  const area = number("area", 0.1, 1000, "Bitte 0,1 bis 1.000 m² eingeben.");
  const oldUw = number(
    "oldUw",
    0.1,
    8,
    "Bitte einen Uw-Wert von 0,1 bis 8 eingeben.",
  );
  const newUw = number(
    "newUw",
    0.1,
    8,
    "Bitte einen Uw-Wert von 0,1 bis 8 eingeben.",
  );
  const degreeDays = number(
    "degreeDays",
    500,
    6500,
    "Bitte 500 bis 6.500 K·d eingeben.",
  );
  const isHeatPump = values.system === "waermepumpe";
  const factor = number(
    "factor",
    isHeatPump ? 0.5 : 0.1,
    isHeatPump ? 10 : 1,
    isHeatPump
      ? "Bitte eine Jahresarbeitszahl von 0,5 bis 10 eingeben."
      : "Bitte einen Nutzungsgrad von 0,1 bis 1 eingeben.",
  );
  if (!heatingSystems.includes(values.system as HeatingSystem))
    errors.system = "Bitte ein Heizsystem wählen.";
  const rawPrice =
    typeof values.price === "string" ? values.price.trim() : values.price;
  const price =
    rawPrice === "" || rawPrice === undefined
      ? undefined
      : parseDecimal(rawPrice);
  if (
    rawPrice !== "" &&
    rawPrice !== undefined &&
    (price === undefined || price > 5)
  )
    errors.price =
      "Bitte einen Arbeitspreis von 0 bis 5 €/kWh eingeben oder das Feld leeren.";
  return Object.keys(errors).length
    ? { success: false, errors }
    : {
        success: true,
        input: {
          area,
          oldUw,
          newUw,
          degreeDays,
          factor,
          price,
          system: values.system as HeatingSystem,
        },
      };
}

export function calculateWindowPotential(input: EnergyInput) {
  const climateFactor = (input.area * input.degreeDays * 24) / 1000;
  const oldLoss = input.oldUw * climateFactor;
  const newLoss = input.newUw * climateFactor;
  const heatDifference = oldLoss - newLoss;
  const savedHeat = Math.max(0, heatDifference);
  const savedEnergy = savedHeat / input.factor;
  return {
    oldLoss,
    newLoss,
    heatDifference,
    savedHeat,
    savedEnergy,
    reduction: (savedHeat / oldLoss) * 100,
    savedCost:
      input.price === undefined ? undefined : savedEnergy * input.price,
  };
}

export function energyRequestUrl(input: EnergyInput) {
  const params = new URLSearchParams({ planung: "fenster" });
  for (const [key, value] of Object.entries(input))
    if (value !== undefined) params.set(key, String(value));
  return `/projekt-anfragen?${params}`;
}

export const numberDe = (value: number, digits = 0) =>
  new Intl.NumberFormat("de-DE", { maximumFractionDigits: digits }).format(
    value,
  );

export function energyPlanningText(input: EnergyInput, systemLabel: string) {
  const result = calculateWindowPotential(input);
  return [
    "Mein Fenstervergleich · unverbindliche Modellrechnung",
    `Fensterfläche einschließlich Rahmen: ${numberDe(input.area, 4)} m²`,
    `Uw Bestand: ${numberDe(input.oldUw, 4)} W/(m²·K)`,
    `Uw neu: ${numberDe(input.newUw, 4)} W/(m²·K)`,
    `Gradtagzahl G20/15 (Annahme): ${numberDe(input.degreeDays, 4)} K·d/a`,
    `Heizsystem: ${systemLabel}`,
    `${input.system === "waermepumpe" ? "Jahresarbeitszahl" : "Nutzungsgrad"} (Annahme): ${numberDe(input.factor, 4)}`,
    input.price === undefined
      ? "Arbeitspreis: nicht angegeben"
      : `Arbeitspreis: ${numberDe(input.price, 4)} €/kWh`,
    `Rechnerische Verringerung der Fenster-Transmissionswärmeverluste: ${numberDe(result.savedHeat)} kWh/a`,
    `Zugeordnete Endenergiedifferenz: ${numberDe(result.savedEnergy)} kWh/a`,
    ...(result.savedCost === undefined
      ? []
      : [`Zugeordnete Kostendifferenz: ${numberDe(result.savedCost, 2)} €/a`]),
    "Keine Prognose für den Verbrauch oder die Heizkosten des gesamten Gebäudes. Solarerträge, Lüftung, Wärmebrücken und Nutzung sind nicht bilanziert.",
  ].join("\n");
}
