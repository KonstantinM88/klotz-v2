import { z } from "zod";
import type { ServiceGalleryContent } from "@/domain/content/service-gallery";
const assetSchema = z.object({
  id: z.string().min(1),
  serviceSlug: z.string(),
  title: z.string().min(1),
  caption: z.string().min(1),
  alt: z.string().min(1),
  src: z.string().startsWith("/images/"),
  width: z.number().positive(),
  height: z.number().positive(),
  blurDataURL: z.string().startsWith("data:image/webp;base64,"),
  sourcePage: z.url(),
  sourceUrl: z.url(),
  sourceVariant: z.literal("original"),
  originalPath: z.string().startsWith("content/legacy/originals/"),
  originalSha256: z.string().length(64),
  sha256: z.string().length(64),
  rightsStatus: z.literal("client-presentation-approved"),
  factStatus: z.literal("legacy-product-illustration"),
});

export const galleryArchiveNote =
  "Produkt- und Gestaltungsideen aus dem KLOTZ-Bildarchiv, darunter Herstellerabbildungen. Ausstattung und Ausführung stimmen wir individuell mit Ihnen ab.";
const selectionsSchema = z.array(
  z.object({
    slug: z.string(),
    title: z.string(),
    accent: z.string(),
    lead: z.string(),
    items: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          caption: z.string(),
          alt: z.string(),
        }),
      )
      .min(6),
  }),
);
export function buildServiceGalleries(
  rawSelections: unknown,
  rawAssets: unknown,
): Record<string, ServiceGalleryContent> {
  const selections = selectionsSchema.parse(rawSelections);
  const assets = z.array(assetSchema).parse(rawAssets);
  if (new Set(assets.map((asset) => asset.id)).size !== assets.length)
    throw Error("Duplicate service gallery image");
  const note = galleryArchiveNote;
  return Object.fromEntries(
    selections.map((selection) => {
      const items = selection.items.map((selected) => {
        const asset = assets.find(
          (item) =>
            item.id === selected.id && item.serviceSlug === selection.slug,
        );
        if (!asset) throw Error(`Missing gallery provenance: ${selected.id}`);
        return {
          id: asset.id,
          title: selected.title,
          caption: selected.caption,
          blurDataURL: asset.blurDataURL,
          image: {
            src: asset.src,
            alt: selected.alt,
            width: asset.width,
            height: asset.height,
            sourceUrl: asset.sourcePage,
            rightsStatus: asset.rightsStatus,
          },
        };
      });
      if (items.length < 6)
        throw Error(`Insufficient gallery: ${selection.slug}`);
      return [
        selection.slug,
        {
          title: selection.title,
          accent: selection.accent,
          lead: selection.lead,
          items,
          note,
        },
      ];
    }),
  );
}
