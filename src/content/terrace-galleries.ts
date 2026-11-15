import selections from "../../content/terrace-gallery-selections.json";
import snapshot from "../../content/terrace-gallery-assets-manifest.json";
import type { ServiceGalleryContent } from "@/domain/content/service-gallery";
import {
  buildServiceGalleries,
  galleryArchiveNote as note,
} from "./service-galleries";
export const terraceGalleries = buildServiceGalleries(selections, snapshot);
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
