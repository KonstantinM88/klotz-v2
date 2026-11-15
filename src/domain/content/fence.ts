import type { ServicePageMedia } from "./service-page";

export type FencePageContent = {
  metadata: { title: string; description: string };
  hero: {
    title: string;
    accent: string;
    lead: string;
    media: ServicePageMedia;
  };
  introduction: { title: string; paragraphs: string[] };
  solutions: {
    slug: string;
    title: string;
    benefit: string;
    description: string;
    media: ServicePageMedia;
  }[];
  decisions: { title: string; text: string; href: string; label: string }[];
  preparation: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  sourceRefs: string[];
  reviewedAt: string;
  status: "draft";
};
