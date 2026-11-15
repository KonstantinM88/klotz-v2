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

export type BusinessPageContent = {
  metadata: { title: string; description: string };
  hero: {
    title: string;
    accent: string;
    lead: string;
    media: ServicePageMedia;
  };
  introduction: { title: string; paragraphs: string[] };
  trust: {
    title: string;
    accent: string;
    lead: string;
    experience: { value: string; label: string; text: string };
    advantages: { title: string; text: string }[];
  };
  tasks: { title: string; text: string; href: string; label: string }[];
  process: { title: string; text: string; result: string }[];
  preparation: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  sourceRefs: string[];
  status: "draft";
};
