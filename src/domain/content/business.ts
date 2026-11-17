import type { ServicePageContent, ServicePageMedia } from "./service-page";

export type BusinessServiceContent = ServicePageContent & {
  inquiryTopic: "Gewerbe / Wohnungswirtschaft" | "Wartung & Service";
  audience: string;
  overview: string;
  productLinks: { title: string; text: string; href: string }[];
  brief: { title: string; items: string[] };
  responsibility: {
    title: string;
    text: string;
    href?: string;
    label?: string;
  };
};

export type BusinessReference = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  facts: { label: string; value: string }[];
  images: { src: string; alt: string; width: number; height: number }[];
  caption: string;
  href?: string;
  source: string;
};

export type BusinessPageContent = {
  metadata: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    lead: string;
    media: ServicePageMedia;
    mosaic: {
      src: string;
      alt: string;
      width: number;
      height: number;
      label: string;
    }[];
  };
  facts: { value: string; label: string; text: string }[];
  statement: { label: string; text: string; signature: string };
  references: BusinessReference[];
  matrix: {
    title: string;
    accent: string;
    lead: string;
    sectors: string[];
    rows: { service: string; href: string; marks: boolean[] }[];
  };
  team: {
    image: { src: string; alt: string; width: number; height: number };
    title: string;
    accent: string;
    text: string;
    contactIds: string[];
  };
  tasks: { title: string; text: string; href: string; label: string }[];
  process: { title: string; text: string; result: string }[];
  preparation: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  sourceRefs: string[];
  status: "draft";
};
