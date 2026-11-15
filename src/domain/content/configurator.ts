import type {
  EnergyDraft,
  HeatingSystem,
} from "@/domain/configurator/planning";
import type { ServicePageMedia } from "./service-page";

export type ConfiguratorPageContent = {
  status: "draft";
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    accent: string;
    lead: string;
    media: ServicePageMedia;
  };
  door: {
    title: string;
    accent: string;
    lead: string;
    externalUrl: string;
    note: string;
    preparation: { title: string; text: string }[];
  };
  energy: {
    title: string;
    accent: string;
    lead: string;
    defaults: EnergyDraft;
    systems: {
      id: HeatingSystem;
      label: string;
      exampleFactor: string;
      hint: string;
    }[];
    oldExamples: { label: string; value: string }[];
    newExamples: { label: string; value: string }[];
    scope: string;
  };
  process: { title: string; text: string }[];
  faq: {
    question: string;
    answer: string;
    link?: { label: string; href: string };
  }[];
  sources: { label: string; url: string }[];
  sourceRefs: string[];
  reviewedAt: string;
};
