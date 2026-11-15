import manifest from "../../content/assets-manifest.json";
import type { ImageAsset } from "@/domain/content/types";

export function serviceImage(src: string, alt: string): ImageAsset {
  const asset = manifest.find((entry) => entry.src === src);
  if (!asset) throw new Error(`Missing service image provenance: ${src}`);
  return {
    src,
    alt,
    width: asset.width,
    height: asset.height,
    sourceUrl: asset.sourcePage,
    rightsStatus: "client-presentation-approved",
  };
}
