import type { SiteSettings } from "@/domain/content/types";
import { getSiteUrl } from "./site-url";

export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function absoluteUrl(path: string): string {
  return new URL(path, getSiteUrl()).href;
}

export function businessId(): string {
  return absoluteUrl("/#business");
}

// Built only from site settings that are also visible in the contact panel.
export function localBusinessJsonLd(site: SiteSettings) {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId(),
    name: site.name,
    legalName: site.legalName,
    url: site.canonicalUrl,
    logo: absoluteUrl("/images/logo.webp"),
    telephone: site.phoneHref.replace(/^tel:/, ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: "Sachsen-Anhalt",
      addressCountry: "DE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.openingHours.days,
      opens: site.openingHours.opens,
      closes: site.openingHours.closes,
    },
    areaServed: site.serviceAreas.map((name) => ({ "@type": "Place", name })),
  };
}
