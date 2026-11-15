"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { ServiceGalleryContent } from "@/domain/content/service-gallery";
import "@/styles/terrace-photo-gallery.css";

export function TerracePhotoGallery({
  content,
}: {
  content: ServiceGalleryContent;
}) {
  const [active, setActive] = useState<number>();
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLAnchorElement | null>(null);
  const strip = useRef<HTMLDivElement>(null);
  const pointer = useRef<{ x: number; y: number } | undefined>(undefined);
  const current = content.items[active ?? 0]!;
  const total = content.items.length;
  function open(event: MouseEvent<HTMLAnchorElement>, index: number) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    opener.current = event.currentTarget;
    setActive(index);
    dialog.current?.showModal();
  }
  function move(direction: number) {
    setActive((index) => ((index ?? 0) + direction + total) % total);
  }
  useEffect(() => {
    const container = strip.current;
    const selected = container?.querySelector<HTMLElement>(
      '[aria-current="true"]',
    );
    if (container && selected)
      container.scrollTo({
        left:
          selected.offsetLeft -
          (container.clientWidth - selected.clientWidth) / 2,
        behavior: "instant",
      });
  }, [active]);
  return (
    <section
      id="bilder"
      className="terrace-photo-gallery shell"
      aria-labelledby="terrace-photo-gallery-title"
    >
      <div className="terrace-photo-gallery__heading">
        <div>
          <p className="index-label">
            Bildwelten / Inspiration für Ihr Zuhause
          </p>
          <h2
            id="terrace-photo-gallery-title"
            className="terrace-photo-gallery__title"
          >
            {content.title}
            <em>{content.accent}</em>
          </h2>
        </div>
        <div>
          <p className="terrace-photo-gallery__lead">{content.lead}</p>
          <a
            className="editorial-link"
            href={content.items[0]!.image.src}
            onClick={(event) => open(event, 0)}
            aria-haspopup="dialog"
          >
            Alle {total} Ansichten ansehen <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="terrace-photo-gallery__grid">
        {content.items.slice(0, 6).map((item, index) => (
          <figure
            className={`terrace-photo-gallery__tile${item.image.height > item.image.width * 1.1 ? " terrace-photo-gallery__tile--portrait" : ""}`}
            key={item.id}
          >
            <a
              href={item.image.src}
              aria-label={`Bild vergrößern: ${item.title}`}
              aria-haspopup="dialog"
              onClick={(event) => open(event, index)}
              className="terrace-photo-gallery__image"
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                placeholder="blur"
                blurDataURL={item.blurDataURL}
                style={{ objectFit: "contain" }}
                sizes={
                  index < 2
                    ? "(max-width: 760px) calc(100vw - 40px), 55vw"
                    : "(max-width: 760px) 45vw, 25vw"
                }
              />
              <span
                className="terrace-photo-gallery__expand"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
            <figcaption>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="terrace-photo-gallery__footer">
        <p>{content.note}</p>
        <a
          className="button button--secondary"
          href={content.items[0]!.image.src}
          aria-haspopup="dialog"
          onClick={(event) => open(event, 0)}
        >
          Bilder in Ruhe entdecken <span aria-hidden="true">↗</span>
        </a>
      </div>
      <noscript>
        <p className="terrace-photo-gallery__nojs">
          Die gezeigten Bilder lassen sich auch ohne JavaScript als Bilddatei
          öffnen.
        </p>
      </noscript>
      <dialog
        className="terrace-photo-viewer"
        ref={dialog}
        aria-labelledby="terrace-photo-viewer-title"
        onClose={() => {
          setActive(undefined);
          opener.current?.focus({ preventScroll: true });
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
          if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            setActive(event.key === "Home" ? 0 : total - 1);
          }
          if (event.key === "Tab") {
            const buttons = [
              ...event.currentTarget.querySelectorAll<HTMLButtonElement>(
                "button",
              ),
            ].filter((button) => button.getClientRects().length > 0);
            const first = buttons[0],
              last = buttons[buttons.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }
        }}
      >
        <div className="terrace-photo-viewer__header">
          <div>
            <p className="index-label">KLOTZ / Bildwelten</p>
            <h2 id="terrace-photo-viewer-title">
              {content.title} {content.accent}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Bildergalerie schließen"
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
        </div>
        {active !== undefined && (
          <>
            <div
              className="terrace-photo-viewer__stage"
              onPointerDown={(event) => {
                if (
                  event.pointerType === "touch" &&
                  !(event.target as HTMLElement).closest("button")
                ) {
                  pointer.current = { x: event.clientX, y: event.clientY };
                  event.currentTarget.setPointerCapture(event.pointerId);
                }
              }}
              onPointerCancel={() => {
                pointer.current = undefined;
              }}
              onPointerUp={(event) => {
                const start = pointer.current;
                pointer.current = undefined;
                if (
                  start &&
                  Math.abs(event.clientY - start.y) < 70 &&
                  Math.abs(event.clientX - start.x) > 55
                )
                  move(event.clientX < start.x ? 1 : -1);
              }}
            >
              <button
                type="button"
                aria-label="Vorheriges Bild"
                onClick={() => move(-1)}
              >
                ←
              </button>
              <div className="terrace-photo-viewer__image">
                <Image
                  src={current.image.src}
                  alt={current.image.alt}
                  width={current.image.width}
                  height={current.image.height}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL={current.blurDataURL}
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 760px) 80vw, 85vw"
                />
              </div>
              <button
                type="button"
                aria-label="Nächstes Bild"
                onClick={() => move(1)}
              >
                →
              </button>
            </div>
            <div
              className="terrace-photo-viewer__caption"
              aria-live="polite"
              aria-atomic="true"
            >
              <span>
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <div>
                <h3>{current.title}</h3>
                <p>{current.caption}</p>
              </div>
            </div>
            <div
              className="terrace-photo-viewer__thumbnails"
              ref={strip}
              role="group"
              aria-label="Bildauswahl"
            >
              {content.items.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setActive(index)}
                  aria-label={`Bild ${index + 1} anzeigen: ${item.title}`}
                  aria-current={active === index ? "true" : undefined}
                >
                  <Image
                    src={item.image.src}
                    alt=""
                    width={item.image.width}
                    height={item.image.height}
                    sizes="100px"
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
