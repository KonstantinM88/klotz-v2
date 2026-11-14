import type { ContentStatus } from "./types";

export type OfferPageContent = {
  id: string;
  slug: string;
  href: string;
  kind: "products" | "funding";
  title: string;
  shortTitle: string;
  eyebrow: string;
  excerpt: string;
  lead: string;
  answer: string;
  metaTitle: string;
  metaDescription: string;
  priceSummary: string;
  inquiryTopic: "Terrasse & Garten" | "Fenster & Türen" | "Zaun & Tor";
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
  products: {
    title: string;
    detail: string;
    fromPriceEUR: number;
    unit: string;
  }[];
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    link?: { label: string; href: string };
  }[];
  checklist: string[];
  faq: { question: string; answer: string }[];
  relatedLinks: { label: string; href: string }[];
  sources: { title: string; url: string }[];
  updatedAt: string;
  sourcePriceDate: string;
  validUntil?: string;
  status: ContentStatus;
  publication: {
    contentApproved: boolean;
    commercialApproved: boolean;
    rightsApproved: boolean;
  };
};
