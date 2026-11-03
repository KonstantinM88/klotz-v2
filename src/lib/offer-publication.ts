import type { OfferPageContent } from "@/domain/content/offers";

// A future site launch must not publish unreviewed or expired campaign pages.
export function canIndexOffer(
  offer: OfferPageContent,
  today = new Date(),
): boolean {
  return (
    offer.status === "verified" &&
    Object.values(offer.publication).every(Boolean) &&
    (!offer.validUntil || offer.validUntil >= today.toISOString().slice(0, 10))
  );
}
