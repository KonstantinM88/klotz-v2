import Image from "next/image";
import type { TerraceMedia } from "@/domain/content/terrace-service";
import "@/styles/terrace-service.css";

/** The exact same composition is used in overview cards and service heroes. */
export function ServiceMedia({
  media,
  priority = false,
  sizes = "(max-width: 760px) calc(100vw - 40px), 55vw",
}: {
  media: TerraceMedia;
  priority?: boolean;
  sizes?: string;
}) {
  const images = [media.image, ...(media.companion ? [media.companion] : [])];
  return (
    <div
      className={`service-media${media.companion ? " service-media--pair" : ""}`}
      data-media-id={media.image.src}
    >
      {images.map((image, i) => (
        <div className="service-media__frame" key={image.src}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={media.companion ? "(max-width: 760px) 45vw, 28vw" : sizes}
            priority={priority && i === 0}
            loading={priority ? "eager" : undefined}
            fetchPriority={priority && i === 0 ? "high" : undefined}
          />
        </div>
      ))}
    </div>
  );
}
