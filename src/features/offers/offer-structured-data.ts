import type { OfferPageContent } from "@/domain/content/offers";
import type { SiteSettings } from "@/domain/content/types";
import {
  absoluteUrl,
  businessId,
  localBusinessJsonLd,
} from "@/lib/structured-data";

// UN/CEFACT codes for per-unit prices shown on the page.
const unitCodes: Record<string, string> = { lfm: "MTR", "m²": "MTK" };

// Every value comes from the same offer object that renders the visible page.
// Images are omitted on purpose: the campaign motifs are illustrations.
export function offerPageJsonLd(offer: OfferPageContent, site: SiteSettings) {
  const pageUrl = absoluteUrl(offer.href);
  const products = offer.products.map((product, index) => {
    const unitCode = unitCodes[product.unit];
    return {
      "@type": "Product",
      "@id": `${pageUrl}#produkt-${index + 1}`,
      name: product.detail
        ? `${product.title} ${product.detail}`
        : product.title,
      category: offer.eyebrow,
      offers: {
        "@type": "Offer",
        url: pageUrl,
        priceCurrency: "EUR",
        price: product.fromPriceEUR,
        priceSpecification: {
          "@type": unitCode ? "UnitPriceSpecification" : "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: product.fromPriceEUR,
          ...(unitCode
            ? {
                price: product.fromPriceEUR,
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: 1,
                  unitCode,
                },
              }
            : {}),
        },
        ...(offer.validUntil ? { priceValidUntil: offer.validUntil } : {}),
        seller: { "@id": businessId() },
      },
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessJsonLd(site),
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: offer.title,
        description: offer.metaDescription,
        inLanguage: "de-DE",
        dateModified: offer.updatedAt,
        about: { "@id": businessId() },
        ...(products.length
          ? { mainEntity: products.map((item) => ({ "@id": item["@id"] })) }
          : {}),
      },
      ...products,
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#fragen`,
        mainEntity: offer.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

export function offersIndexJsonLd(
  offers: OfferPageContent[],
  site: SiteSettings,
) {
  const pageUrl = absoluteUrl("/angebote");
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessJsonLd(site),
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        url: pageUrl,
        name: "Angebote für Haus und Garten",
        inLanguage: "de-DE",
        about: { "@id": businessId() },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: offers.map((offer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: offer.shortTitle,
            url: absoluteUrl(offer.href),
          })),
        },
      },
    ],
  };
}
