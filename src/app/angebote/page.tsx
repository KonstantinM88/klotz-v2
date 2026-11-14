import type { Metadata } from "next";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { OffersIndex } from "@/features/offers/offers-index";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Angebote & Preise für Haus und Garten in Merseburg",
  "Aktuelle KLOTZ-Angebote: Lamellendach, Zaun und Tor, Fenster und Türen, Terrassendach und Carport mit Ab-Preisen. Beratung, Aufmaß und Montage aus Merseburg.",
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
