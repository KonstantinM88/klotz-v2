import { serviceImage } from "./service-images";
import type { ServicePageMedia } from "@/domain/content/service-page";

export const windowsMedia = {
  einbruchschutz: {
    image: serviceImage(
      "/images/building-security-hero.webp",
      "Heller Hauseingang von innen mit geschlossener Tür und seitlichen Glaselementen",
    ),
    caption:
      "Den Eingang als Ganzes betrachten · Gestaltungsbeispiel aus der KLOTZ-Türengalerie",
  },
  fenster: {
    image: serviceImage(
      "/images/building-window-hero.webp",
      "Weiße Fenster in einer hellen Fassade mit geschwungenen Stuckverzierungen",
    ),
    caption:
      "Fenstergestaltung im Bestand · Produktabbildung aus der KLOTZ-Holzfenstergalerie",
  },
  haustueren: {
    image: serviceImage(
      "/images/building-entry-hero.webp",
      "Graue Haustür mit langem Griff und seitlicher Verglasung im Klinkerhaus",
    ),
    caption:
      "Eingang mit seitlicher Verglasung · Gestaltungsidee aus der KLOTZ-Produktgalerie",
  },
  innentueren: {
    image: serviceImage(
      "/images/building-interior-hero.webp",
      "Weiße Innentüren mit Lichtausschnitten in einem hellen Wohnbereich",
    ),
    caption:
      "Innentüren im Wohnraum · Produktabbildung aus der KLOTZ-CPL-Galerie",
  },
  rolllaeden: {
    image: serviceImage(
      "/images/building-shutter-hero.webp",
      "Weiße Rollläden an bodentiefen Fenstern einer Terrasse, teilweise geschlossen",
    ),
    caption: "Außenliegende Rollläden · Produktabbildung aus der KLOTZ-Galerie",
  },
} satisfies Record<string, ServicePageMedia>;
