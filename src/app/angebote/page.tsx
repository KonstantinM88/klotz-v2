import type { Metadata } from "next";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { OffersIndex } from "@/features/offers/offers-index";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Angebote für Haus und Garten in Merseburg",
  "Fünf Angebotsideen von KLOTZ: Lamellendach, Zaun, Fenster, Terrassendach und Sanierung. Preisbeispiele und Planung für Merseburg und Umgebung.",
  "/angebote",
  "/images/angebote-2026/01-lamellendach-pergola.webp",
);

export default async function OffersPage() {
  const [offers, site] = await Promise.all([
    repository.getOfferPages(),
    repository.getSiteSettings(),
  ]);
  return <OffersIndex offers={offers} site={site} />;
}
