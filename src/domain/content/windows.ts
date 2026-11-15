import type { ServicePageContent, ServicePageMedia } from "./service-page";
import type {
  ServiceGalleryContent,
  ServiceGalleryImage,
} from "./service-gallery";

export type WindowsMaterialChapter = {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  considerations: string[];
  image: ServiceGalleryImage;
};
export type WindowsServiceContent = ServicePageContent & {
  gallery: ServiceGalleryContent;
  materials: WindowsMaterialChapter[];
};

export type WindowsPageContent = {
  gallery: ServiceGalleryContent;
  materialNavigation: { label: string; href: string; description: string }[];
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
  decisions: { wish: string; approach: string; label: string; href: string }[];
  preparation: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  sourceRefs: string[];
  reviewedAt: string;
  status: "draft";
};
