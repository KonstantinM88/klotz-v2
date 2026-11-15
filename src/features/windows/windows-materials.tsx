import Image from "next/image";
import Link from "next/link";
import type { WindowsMaterialChapter } from "@/domain/content/windows";
import "@/styles/windows-materials.css";

export function WindowsMaterials({
  chapters,
  serviceSlug,
}: {
  chapters: WindowsMaterialChapter[];
  serviceSlug: string;
}) {
  return (
    <section
      className="window-materials shell"
      id="materialien"
      aria-labelledby="materials-title"
    >
      <div className="window-materials__heading">
        <p className="index-label">Materialien / Gestaltung / Ihr Alltag</p>
        <h2 id="materials-title">
          Eine bewusste Auswahl.
          <br />
          <em>Ein Zuhause, das zu Ihnen passt.</em>
        </h2>
        <nav
          aria-label="Materialien und Ausführungen"
          className="window-materials__jump"
        >
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`}>
              {chapter.label.replace(/^\d+ \/ /, "")}{" "}
              <span aria-hidden="true">↓</span>
            </a>
          ))}
        </nav>
      </div>
      {chapters.map((chapter) => (
        <article
          className="window-materials__chapter"
          id={chapter.id}
          key={chapter.id}
          aria-labelledby={`${chapter.id}-title`}
        >
          <figure>
            <div className="window-materials__image">
              <Image
                src={chapter.image.image.src}
                alt={chapter.image.image.alt}
                width={chapter.image.image.width}
                height={chapter.image.image.height}
                placeholder="blur"
                blurDataURL={chapter.image.blurDataURL}
                sizes="(max-width: 760px) calc(100vw - 40px), 44vw"
              />
            </div>
            <figcaption>
              {chapter.image.caption}{" "}
              <a href="#bilder">
                Weitere Ansichten <span aria-hidden="true">↗</span>
              </a>
            </figcaption>
          </figure>
          <div className="window-materials__copy">
            <p className="index-label">{chapter.label}</p>
            <h3 id={`${chapter.id}-title`}>{chapter.title}</h3>
            {chapter.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="window-materials__considerations">
              <p>Für Ihre Auswahl wichtig</p>
              <ul>
                {chapter.considerations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <Link
              className="editorial-link"
              href={`/projekt-anfragen?leistung=${serviceSlug}&material=${chapter.id}`}
            >
              Meine Auswahl besprechen <span aria-hidden="true">↗</span>
            </Link>
            {chapter.id === "aluminiumhaustueren" ? (
              <Link className="editorial-link" href="/konfigurator#haustuer">
                Türideen im Konfigurator entdecken{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            ) : null}
            {chapter.id === "terrassentueren" ? (
              <Link className="editorial-link" href="/terrasse-garten">
                Den Außenbereich weiterdenken <span aria-hidden="true">↗</span>
              </Link>
            ) : null}
          </div>
        </article>
      ))}
    </section>
  );
}
