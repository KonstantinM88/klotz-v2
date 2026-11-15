import type { ImageAsset } from "./types";

export type ServiceGalleryImage = {
  id: string;
  title: string;
  caption: string;
  blurDataURL: string;
  image: ImageAsset;
};
export type ServiceGalleryContent = {
  title: string;
  accent: string;
  lead: string;
  items: ServiceGalleryImage[];
  note: string;
};
