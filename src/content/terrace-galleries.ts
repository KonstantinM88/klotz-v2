import { z } from "zod";
import selections from "../../content/terrace-gallery-selections.json";
import snapshot from "../../content/terrace-gallery-assets-manifest.json";
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
const assets = z.array(assetSchema).parse(snapshot);
if (new Set(assets.map((asset) => asset.id)).size !== assets.length)
  throw Error("Duplicate terrace gallery image");
const note =
  "Produkt- und Gestaltungsideen aus dem KLOTZ-Bildarchiv, darunter Herstellerabbildungen. Ausstattung und Ausführung stimmen wir individuell mit Ihnen ab.";
export const terraceGalleries: Record<string, ServiceGalleryContent> =
  Object.fromEntries(
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
export const terraceOverviewGallery: ServiceGalleryContent = {
  title: "Draußen beginnt",
  accent: "mit einer guten Idee.",
  lead: "Sechs Perspektiven auf Ihren Außenbereich: vom transparenten Terrassendach bis zum lichten Schatten einer Markise. Entdecken Sie die unterschiedlichen Formen, Materialien und Stimmungen.",
  items: [
    ["terrassenueberdachungen", "Terrassendächer · Licht und klare Linien"],
    ["lamellendaecher", "Lamellendächer · Licht nach Ihrem Gefühl"],
    ["pergolen", "Pergolen · Ein leichter Rahmen"],
    ["sommer-wintergaerten", "Glasräume · Dem Garten näher"],
    ["glasschiebewaende", "Glaswände · Transparent verbunden"],
    ["sonnenschutz", "Sonnenschutz · Ihr Platz im Schatten"],
  ].map(([slug, title]) => ({
    ...terraceGalleries[slug!]!.items[0]!,
    title: title!,
  })),
  note,
};
