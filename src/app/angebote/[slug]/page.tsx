import { notFound } from "next/navigation";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { OfferDetail } from "@/features/offers/offer-detail";
import { pageMetadata } from "@/lib/metadata";
import { canIndexOffer } from "@/lib/offer-publication";
import { isIndexingAllowed } from "@/lib/site-url";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export async function generateStaticParams() {
  return (await repository.getOfferPages()).map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const offer = await repository.getOfferPage(slug);
  if (!offer) notFound();
  return {
    ...pageMetadata(
      offer.metaTitle,
      offer.metaDescription,
      offer.href,
      offer.image.src,
    ),
    robots: {
      index: isIndexingAllowed() && canIndexOffer(offer),
      follow: true,
      noarchive: true,
    },
  };
}
export default async function OfferPage({ params }: Props) {
  const { slug } = await params;
  const [offer, offers, site] = await Promise.all([
    repository.getOfferPage(slug),
    repository.getOfferPages(),
    repository.getSiteSettings(),
  ]);
  if (!offer) notFound();
  return (
    <OfferDetail
      offer={offer}
      otherOffers={offers.filter((item) => item.id !== offer.id)}
      site={site}
    />
  );
}
