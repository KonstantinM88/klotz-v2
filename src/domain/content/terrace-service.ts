import type { ImageAsset } from "./types";

export type TerraceMedia = {
  image: ImageAsset;
  companion?: ImageAsset;
  caption: string;
};
export type TerraceServiceContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: { title: string; accent: string; lead: string; cta: string };
  media: TerraceMedia;
  benefits: { title: string; text: string }[];
  story: { title: string; paragraphs: string[] };
  variants: { title: string; description: string; suitable: string }[];
  detail: {
    title: string;
    paragraphs: string[];
    image: ImageAsset;
    caption: string;
  };
  planning: { title: string; text: string }[];
  costs: { lead: string; factors: string[] };
  faq: { question: string; answer: string }[];
  related: string[];
  guideSlug: string;
  offerSlug?: string;
  requestMessage: string;
  sourceRefs: string[];
  status: "draft";
};
