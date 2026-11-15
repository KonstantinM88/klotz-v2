import type { ImageAsset } from "./types";
import type { TerraceMedia } from "./terrace-service";
import type { ServiceGalleryContent } from "./service-gallery";

export type TerraceSolution = {
  id: string;
  title: string;
  benefit: string;
  description: string;
  considerations: string;
  href: string;
  image: ImageAsset;
  media?: TerraceMedia;
};

export type TerracePageContent = {
  gallery: ServiceGalleryContent;
  metadata: { title: string; description: string };
  hero: { title: string; accent: string; lead: string; image: ImageAsset };
  introduction: string;
  solutions: TerraceSolution[];
  comparison: {
    wish: string;
    solution: string;
    consideration: string;
    href: string;
  }[];
  planning: { title: string; text: string }[];
  costs: { title: string; text: string }[];
  process: { title: string; text: string }[];
  preparation: string[];
  faq: {
    id: string;
    question: string;
    answer: string;
    href: string;
    linkLabel: string;
  }[];
  projectIds: string[];
  articleSlugs: string[];
  sourceRefs: string[];
  reviewedAt: string;
  status: "draft";
};
