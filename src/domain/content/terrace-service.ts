import type { ServicePageContent } from "./service-page";
import type { ServiceGalleryContent } from "./service-gallery";
export type { ServicePageMedia as TerraceMedia } from "./service-page";
export type TerraceServiceContent = ServicePageContent & {
  gallery: ServiceGalleryContent;
};
