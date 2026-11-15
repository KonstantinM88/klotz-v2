import type { ImageAsset } from "./types";

export type ServiceGalleryImage = {
  id: string;
  title: string;
  caption: string;
  blurDataURL: string;
  image: ImageAsset;
  groupId?: string;
  requestHref?: string;
};
export type ServiceGalleryContent = {
  title: string;
  accent: string;
  lead: string;
  items: ServiceGalleryImage[];
  note: string;
  groups?: { id: string; label: string; href: string }[];
};
