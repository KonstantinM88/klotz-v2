import type { ServicePageMedia } from "@/domain/content/service-page";
import { serviceImage } from "./service-images";

export const businessWorkMedia: ServicePageMedia = {
  image: serviceImage(
    "/images/business-work.webp",
    "Monteure beim Einbau einer weißen Rahmenkonstruktion an einem Gebäude",
  ),
  caption:
    "Einblick in die Montage · unveränderte Aufnahme aus dem KLOTZ-Servicearchiv",
};
export const businessMedia = {
  wohnungswirtschaft: {
    image: serviceImage(
      "/images/building-window-hero.webp",
      "Fenster in einer hellen Bestandsfassade mit geschwungenen Stuckprofilen",
    ),
    caption:
      "Bauelemente im Bestand · Produktbeispiel aus der KLOTZ-Fenstergalerie",
  },
  "industrie-gewerbe": {
    image: serviceImage(
      "/images/business-industry-hero.webp",
      "Metalltor und Zaun an einer breiten Zufahrt mit seitlichem Torlauf",
    ),
    caption:
      "Zufahrt und Grundstücksabschluss · Produktbeispiel aus der KLOTZ-Torengalerie",
  },
  "hotellerie-gastronomie": {
    image: serviceImage(
      "/images/business-hospitality-hero.webp",
      "Überdachte Gastronomieterrasse mit Tischen, Stühlen und seitlichen Glaselementen",
    ),
    caption:
      "Außenbereich für Gäste · Produktbeispiel aus der KLOTZ-Gastronomiegalerie",
  },
  "wartung-service": {
    image: serviceImage(
      "/images/business-workshop.webp",
      "Zwei Mitarbeiter bearbeiten gemeinsam ein Bauelement in der Werkstatt",
    ),
    caption:
      "Blick in die Werkstatt · unveränderte Aufnahme aus dem KLOTZ-Servicearchiv",
  },
} satisfies Record<string, ServicePageMedia>;
