import snapshot from "../../content/door-catalog.json";
import { z } from "zod";
import type { ManufacturerDoorCatalog } from "@/domain/configurator/door-catalog";

const positive = z.number().positive();
const image = z.object({
  src: z.string().startsWith("/images/door-catalog/"),
  width: positive,
  height: positive,
});
const schema = z.object({
  capturedAt: z.string(),
  sourceUrl: z.literal("https://konfigurator.klotz.mobi"),
  status: z.literal("legacy"),
  collections: z
    .array(z.object({ id: z.string().min(1), label: z.string().min(1) }))
    .length(9),
  models: z
    .array(
      z.object({
        id: z.string().min(1),
        key: z.string().regex(/^[a-z0-9_-]+$/),
        family: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1),
        parentModel: z.string(),
        imageModelId: z.string().nullable(),
        collections: z.array(z.string()).min(1),
        sourceUrl: z.url(),
        hasGlass: z.boolean(),
        dimensions: z
          .object({
            minWidth: positive,
            maxWidth: positive,
            minHeight: positive,
            maxHeight: positive,
          })
          .nullable(),
        image: image.nullable(),
      }),
    )
    .min(1),
  colors: z
    .array(
      z.object({
        id: z.string().min(1),
        label: z.string().min(1),
        group: z.string(),
        hex: z.string().regex(/^#[a-f0-9]{6}$/i),
        ral: z.string(),
      }),
    )
    .min(1),
  formIds: z.array(z.string()).length(8),
});
export const manufacturerDoorCatalog: ManufacturerDoorCatalog =
  schema.parse(snapshot);
if (
  new Set(manufacturerDoorCatalog.models.map((m) => m.id)).size !==
  manufacturerDoorCatalog.models.length
)
  throw new Error("Duplicate door model ID");
for (const model of manufacturerDoorCatalog.models) {
  if (
    model.collections.some(
      (id) => !manufacturerDoorCatalog.collections.some((c) => c.id === id),
    )
  )
    throw new Error(`Unknown collection: ${model.id}`);
  if (
    model.dimensions &&
    (model.dimensions.minWidth > model.dimensions.maxWidth ||
      model.dimensions.minHeight > model.dimensions.maxHeight)
  )
    throw new Error(`Invalid bounds: ${model.id}`);
}
