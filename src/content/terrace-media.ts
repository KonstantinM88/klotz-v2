import { serviceImage as terraceImage } from "./service-images";
import type { TerraceMedia } from "@/domain/content/terrace-service";
export { serviceImage as terraceImage } from "./service-images";
export const terraceMedia = {
  terrassenueberdachungen: {
    image: terraceImage(
      "/images/terrace-roof-hero.webp",
      "Terrassenüberdachung mit gläsernen Seitenelementen und Holzterrasse am Haus",
    ),
    caption:
      "Terrassendach mit Seitenelementen · Produktabbildung aus dem KLOTZ-Archiv",
  },
  lamellendaecher: {
    image: terraceImage(
      "/images/lamelle-detail-1.webp",
      "Lamellendach mit geöffneten Lamellen über einer Lounge am Haus",
    ),
    companion: terraceImage(
      "/images/lamelle-detail-2.webp",
      "Zweite Ansicht des Lamellendachs mit geschlossenen Lamellen und Sitzgruppe",
    ),
    caption:
      "Geöffnete und geschlossene Lamellen · zwei Ansichten aus der KLOTZ-Galerie",
  },
  pergolen: {
    image: terraceImage(
      "/images/terrace-pergola-hero.webp",
      "Freistehende Pergola mit textilem Sonnentuch und Sitzbereich im Garten",
    ),
    caption: "Pergola mit Sonnentuch · Aufnahme aus der KLOTZ-Produktgalerie",
  },
  "sommer-wintergaerten": {
    image: terraceImage(
      "/images/glas-detail-1.webp",
      "Gläserner Gartenraum mit Sitzgruppe am Abend",
    ),
    caption:
      "Verglaste Terrasse als Gestaltungsidee für einen Sommergarten · KLOTZ-Bildarchiv",
  },
  glasschiebewaende: {
    image: terraceImage(
      "/images/terrace-glass-hero.webp",
      "Geöffnete Glasschiebewände verbinden eine überdachte Terrasse mit dem Garten",
    ),
    caption: "Bewegliche Glaswände · Produktabbildung aus dem KLOTZ-Archiv",
  },
  sonnenschutz: {
    image: terraceImage(
      "/images/terrace-shade-hero.webp",
      "Große ausgefahrene Markise über einer möblierten Terrasse",
    ),
    caption:
      "Textile Beschattung · Produktabbildung aus der KLOTZ-Markisengalerie",
  },
} satisfies Record<string, TerraceMedia>;

export function mediaForTerraceService(slug: string): TerraceMedia {
  const media = (terraceMedia as Record<string, TerraceMedia | undefined>)[
    slug
  ];
  if (!media) throw new Error(`Missing terrace service media: ${slug}`);
  return media;
}
