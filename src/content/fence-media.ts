import type { ServicePageMedia } from "@/domain/content/service-page";
import { serviceImage } from "./service-images";

export const fenceMedia = {
  zaunanlagen: {
    image: serviceImage(
      "/images/boundary-fence-hero.webp",
      "Offener Aluminiumzaun mit waagerechten Feldern an einem modernen Wohnhaus",
    ),
    caption:
      "Klare Linien am Grundstück · Produktabbildung aus der KLOTZ-Aluminiumzaungalerie",
  },
  sichtschutz: {
    image: serviceImage(
      "/images/boundary-privacy-detail.webp",
      "Grauer Sichtschutzzaun mit waagerechten Profilen und Bambusbepflanzung",
    ),
    caption:
      "Rückzug im Garten · Gestaltungsidee aus der KLOTZ-Sichtschutzgalerie",
  },
  hoftore: {
    image: serviceImage(
      "/images/boundary-gate-hero.webp",
      "Zweiflügeliges anthrazitfarbenes Hoftor mit dekorativen Ausschnitten zwischen hellen Pfeilern",
    ),
    caption:
      "Zweiflügeliger Eingang · Produktabbildung aus der KLOTZ-Aluhoftorgalerie",
  },
  schiebetore: {
    image: serviceImage(
      "/images/boundary-sliding-hero.webp",
      "Seitlich öffnendes Metalltor mit waagerechten Feldern und freiem Rücklauf entlang der Einfahrt",
    ),
    caption:
      "Schiebetor und seitlicher Rücklauf · Produktabbildung aus der KLOTZ-Torengalerie",
  },
  "elektrische-toranlagen": {
    image: serviceImage(
      "/images/boundary-electric-hero.webp",
      "Metalltor an einer gepflasterten Einfahrt vor einem Wohnhaus",
    ),
    caption:
      "Einfahrt als Ausgangspunkt der Antriebsplanung · KLOTZ-Produktabbildung, Ausstattung wird individuell gewählt",
  },
  gelaender: {
    image: serviceImage(
      "/images/boundary-railing-detail.webp",
      "Glasgeländer mit Metallhandlauf an einer hellen Treppe im Wohnbereich",
    ),
    caption:
      "Transparenter Abschluss an der Treppe · Produktabbildung aus der KLOTZ-Glasgeländergalerie",
  },
} satisfies Record<string, ServicePageMedia>;
