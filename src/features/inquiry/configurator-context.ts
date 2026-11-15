import type { ContentRepository } from "@/repositories/content-repository";
import {
  energyPlanningText,
  validateEnergyInput,
} from "@/domain/configurator/planning";
import {
  doorPlanText,
  validateDoorPlan,
} from "@/domain/configurator/door-catalog";

/** Only allowlisted door choices and bounded numeric inputs can reach the demo form. */
export async function configuratorRequestContext(
  repository: ContentRepository,
  params: Record<string, string | string[] | undefined>,
) {
  if (params.planung !== "haustuer" && params.planung !== "fenster")
    return undefined;
  const content = await repository.getConfiguratorPageContent();
  if (params.planung === "haustuer") {
    const catalog = await repository.getDoorCatalog();
    const selection = validateDoorPlan(catalog, params);
    if (!selection.success) return undefined;
    return {
      key: `door/${Object.values(selection.plan).join("/")}`,
      topic: "Fenster & Türen" as const,
      message: `Ich möchte meine Haustürplanung mit KLOTZ besprechen.\n\n${doorPlanText(catalog, selection.plan)}\n\nProjektort und mein Vorhaben: `,
    };
  }
  const parsed = validateEnergyInput(params);
  if (!parsed.success) return undefined;
  const label = content.energy.systems.find(
    (s) => s.id === parsed.input.system,
  )!.label;
  return {
    key: `energy/${Object.values(parsed.input).join("/")}`,
    topic: "Fenster & Türen" as const,
    message: `Ich möchte einen möglichen Fenstertausch mit KLOTZ besprechen.\n\n${energyPlanningText(parsed.input, label)}\n\nProjektort und mein Vorhaben: `,
  };
}
