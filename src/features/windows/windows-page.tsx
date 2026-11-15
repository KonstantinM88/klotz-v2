import Link from "next/link";
import type { Article, SiteSettings } from "@/domain/content/types";
import type { WindowsPageContent } from "@/domain/content/windows";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceMedia } from "@/features/services/service-media";
import { getSiteUrl } from "@/lib/site-url";
import { ServicePhotoGallery } from "@/features/services/service-photo-gallery";
import "@/styles/windows.css";

export function WindowsPage({
  content,
  site,
  guide,
}: {
  content: WindowsPageContent;
  site: SiteSettings;
  guide?: Article;
}) {
  const request = "/projekt-anfragen?bereich=fenster-tueren";
  const absolute = (path: string) => new URL(path, getSiteUrl()).href;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absolute("/fenster-tueren")}#page`,
    url: absolute("/fenster-tueren"),
    name: content.metadata.title,
    description: content.metadata.description,
    inLanguage: "de-DE",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: content.solutions.length,
      itemListElement: content.solutions.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: absolute(`/fenster-tueren/${s.slug}`),
      })),
    },
  };
  return (
    <main id="main-content" className="outdoor-service windows-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="outdoor-hero" aria-labelledby="windows-title">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Fenster & Türen", href: "/fenster-tueren" }]}
          />
        </div>
        <div className="shell outdoor-hero__grid">
          <div className="outdoor-hero__copy">
            <p className="index-label">KLOTZ / Fenster & Türen / Merseburg</p>
            <h1 id="windows-title">
              {content.hero.title}
              <em>{content.hero.accent}</em>
            </h1>
            <p className="outdoor-hero__lead">{content.hero.lead}</p>
            <div className="outdoor-actions">
              <ButtonLink href={request}>Mein Zuhause weiterdenken</ButtonLink>
              <a className="editorial-link" href="#loesungen">
                Lösungen entdecken <span aria-hidden="true">↘</span>
              </a>
            </div>
            <p className="outdoor-hero__local">
              Beratung · Aufmaß · Montage · Service
              <br />
              Merseburg, Halle (Saale), Leipzig & Region
            </p>
          </div>
          <figure className="outdoor-hero__figure">
            <ServiceMedia media={content.hero.media} priority />
            <figcaption>
              {content.hero.media.caption}
              <a className="outdoor-gallery-shortcut" href="#bilder">
                Zur Bildergalerie <span aria-hidden="true">↘</span>
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="shell windows-jump" aria-label="Direkt zu Ihrem Thema">
        {content.solutions.map((s, i) => (
          <a href={`#${s.slug}`} key={s.slug}>
            <span>0{i + 1}</span>
            {s.title}
            <span aria-hidden="true">↓</span>
          </a>
        ))}
      </div>
      <section
        className="shell outdoor-section windows-intro"
        aria-labelledby="windows-intro"
      >
        <div>
          <p className="index-label">01 / Was möchten Sie verändern?</p>
          <h2 id="windows-intro">{content.introduction.title}</h2>
        </div>
        <div className="outdoor-copy">
          {content.introduction.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            Schon eine Idee im Kopf? Im{" "}
            <Link href="/konfigurator">KLOTZ-Konfigurator</Link> gestalten Sie
            Ihren Eingang oder vergleichen das rechnerische Potenzial neuer
            Fenster vor dem persönlichen Gespräch.
          </p>
        </div>
      </section>
      <section
        className="shell windows-solutions"
        id="loesungen"
        aria-labelledby="solutions-title"
      >
        <div className="windows-section-head">
          <div>
            <p className="index-label">02 / Lösungen für mehr Wohnqualität</p>
            <h2 id="solutions-title">
              Die passende Lösung.
              <br />
              <em>Für jeden Tag.</em>
            </h2>
          </div>
          <p>
            Entdecken Sie Materialien, Möglichkeiten und die Details, auf die es
            bei Ihrem Vorhaben ankommt.
          </p>
        </div>
        <div className="windows-solutions__grid">
          {content.solutions.map((s, i) => (
            <article key={s.slug} id={s.slug} className="windows-solution">
              <Link
                className="windows-solution__image"
                href={`/fenster-tueren/${s.slug}`}
                aria-label={`${s.title} entdecken`}
              >
                <ServiceMedia
                  media={s.media}
                  sizes="(max-width: 620px) calc(100vw - 40px), 45vw"
                />
                <span className="windows-solution__index" aria-hidden="true">
                  0{i + 1} / ↗
                </span>
              </Link>
              <div className="windows-solution__copy">
                <p className="index-label">{s.benefit}</p>
                <h3>
                  <Link href={`/fenster-tueren/${s.slug}`}>{s.title}</Link>
                </h3>
                <p>{s.description}</p>
                <Link
                  className="editorial-link"
                  href={`/fenster-tueren/${s.slug}`}
                >
                  {s.title} entdecken <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="shell windows-material-index"
        aria-labelledby="windows-material-index-title"
      >
        <div className="windows-section-head">
          <div>
            <p className="index-label">
              Ihre Auswahl / Materialien im Vergleich
            </p>
            <h2 id="windows-material-index-title">
              Welches Material
              <br />
              <em>fühlt sich richtig an?</em>
            </h2>
          </div>
          <p>
            Die Oberfläche prägt den Eindruck. Konstruktion, Ausstattung und
            Einbau bestimmen, wie die Lösung zu Ihrem Alltag passt. Hier steigen
            Sie direkt in Ihr Thema ein.
          </p>
        </div>
        <nav
          aria-label="Fenster- und Türmaterialien"
          className="windows-material-index__grid"
        >
          {content.materialNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              <span>
                {item.label}
                <span aria-hidden="true">↗</span>
              </span>
              <p>{item.description}</p>
            </Link>
          ))}
        </nav>
      </section>
      <ServicePhotoGallery content={content.gallery} />
      <section className="windows-decisions" aria-labelledby="decisions-title">
        <div className="shell outdoor-section">
          <div className="windows-section-head">
            <div>
              <p className="index-label">
                03 / Von Ihrem Wunsch zur passenden Richtung
              </p>
              <h2 id="decisions-title">
                Beginnen wir
                <br />
                <em>bei Ihrem Alltag.</em>
              </h2>
            </div>
            <p>
              Sie müssen noch kein Produkt kennen. Ein konkreter Wunsch hilft
              oft mehr als ein voller Katalog.
            </p>
          </div>
          <div className="windows-decisions__list">
            {content.decisions.map((d, i) => (
              <div key={d.href}>
                <span className="windows-number">0{i + 1}</span>
                <h3>{d.wish}</h3>
                <div>
                  <p>{d.approach}</p>
                  <Link href={d.href} className="editorial-link">
                    {d.label}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="shell outdoor-section windows-planning"
        aria-labelledby="windows-planning"
      >
        <div className="windows-section-head">
          <div>
            <p className="index-label">04 / Gute Vorbereitung zahlt sich aus</p>
            <h2 id="windows-planning">
              Nicht nur auswählen.
              <br />
              <em>Zusammen planen.</em>
            </h2>
          </div>
          <p>
            Gerade im Bestand gehören Bauelement und Gebäude zusammen. Diese
            vier Punkte machen die erste Beratung produktiv.
          </p>
        </div>
        <div className="windows-planning__grid">
          {content.preparation.map((p, i) => (
            <article key={p.title}>
              <span className="windows-number">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="shell windows-repair" aria-labelledby="repair-title">
        <div>
          <p className="index-label">Bestand verstehen / Bewusst entscheiden</p>
          <h2 id="repair-title">
            Manchmal beginnt die bessere Lösung
            <br />
            <em>mit einer Reparatur.</em>
          </h2>
          <p>
            Ein klemmender Flügel, eine beschädigte Dichtung oder ein
            schwergängiger Rollladen verdient zuerst einen fachlichen Blick.
            KLOTZ bietet auch Wartung und Instandsetzung an. Wir besprechen, ob
            Erhalten, Modernisieren oder Erneuern zu Ihrem Vorhaben passt.
          </p>
          <Link
            href="/gewerbekunden/wartung-service"
            className="editorial-link"
          >
            Wartung & Service kennenlernen<span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div>
          {guide ? (
            <Link href={guide.href}>
              <p className="index-label">KLOTZ Wissen / {guide.readingTime}</p>
              <h3>
                {guide.title}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{guide.excerpt}</p>
            </Link>
          ) : null}
        </div>
      </section>
      <section
        className="shell outdoor-section windows-process"
        aria-labelledby="windows-process"
      >
        <div className="windows-section-head">
          <div>
            <p className="index-label">05 / Persönlich begleitet</p>
            <h2 id="windows-process">
              Ein klarer Weg.
              <br />
              <em>Ein gutes Ergebnis.</em>
            </h2>
          </div>
          <p>
            Beratung, Aufmaß, Angebot und Montage werden gemeinsam gedacht. Sie
            wissen, welche Entscheidungen als Nächstes anstehen.
          </p>
        </div>
        <ol>
          {content.process.map((p, i) => (
            <li key={p.title}>
              <span className="windows-number">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="outdoor-showroom" aria-labelledby="windows-showroom">
        <div className="shell outdoor-showroom__grid">
          <div>
            <p className="index-label">06 / Beratung in Merseburg-Meuschau</p>
            <h2 id="windows-showroom">
              Materialien ansehen.
              <br />
              <em>Möglichkeiten besprechen.</em>
            </h2>
            <p>
              Ein Farbton wirkt in der Hand anders als am Bildschirm. Bringen
              Sie Ihre Ideen, Fotos oder einen Grundriss mit und besprechen Sie
              die Auswahl persönlich mit KLOTZ. Die Innen- und Außenausstellung
              am Standort bietet den Rahmen für Ihr Beratungsgespräch.
            </p>
            <a
              className="editorial-link"
              href={site.showroomTourUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Erster Eindruck im virtuellen Rundgang{" "}
              <span className="outdoor-sr-only">(neues Fenster)</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <aside>
            <p className="index-label">KLOTZ / Beratung & Ausstellung</p>
            <address>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}-
              {site.address.district}
            </address>
            <p>{site.openingHours.display}</p>
            <a className="outdoor-phone" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <ButtonLink href="/kontakt" variant="light">
              Besuch abstimmen
            </ButtonLink>
          </aside>
        </div>
      </section>
      <section
        className="shell outdoor-section outdoor-faq"
        aria-labelledby="windows-faq"
      >
        <div>
          <p className="index-label">07 / Vor der Entscheidung</p>
          <h2 id="windows-faq">
            Ihre Fragen.
            <br />
            <em>Ein klarer Einstieg.</em>
          </h2>
          <p>
            Für alles Weitere nehmen wir Ihr Gebäude und Ihre Wünsche persönlich
            in den Blick.
          </p>
        </div>
        <div>
          {content.faq.map((f, i) => (
            <details key={f.question} id={`windows-frage-${i + 1}`}>
              <summary>
                {f.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section
        className="shell windows-offers"
        aria-labelledby="windows-offers"
      >
        <div>
          <p className="index-label">Ausführungen & Orientierung</p>
          <h2 id="windows-offers">
            Eine Idee für
            <br />
            <em>Ihr Vorhaben.</em>
          </h2>
          <p>
            In unseren Angeboten finden Sie ausgewählte Ausführungen und
            Preisbeispiele. Welche Ausstattung und welche Arbeiten zu Ihrem
            Gebäude passen, klären wir im persönlichen Gespräch und beim Aufmaß.
          </p>
        </div>
        <ButtonLink href="/angebote/fenster-tueren" variant="secondary">
          Angebote für Fenster & Türen
        </ButtonLink>
      </section>
      <section className="outdoor-contact" aria-labelledby="windows-contact">
        <div className="shell">
          <div>
            <p className="index-label">
              Ihr Zuhause verdient einen guten nächsten Schritt
            </p>
            <h2 id="windows-contact">
              Was möchten Sie
              <br />
              <em>verändern?</em>
            </h2>
            <p>
              Ein Fenster, ein Eingang oder die ganze Wohnung: Erzählen Sie uns
              von Ihrem Vorhaben. Für den Anfang reichen Ihre Wünsche, der
              Projektort und ein paar Eckdaten.
            </p>
            <div className="outdoor-actions">
              <ButtonLink href={request} variant="light">
                Meine Wünsche besprechen
              </ButtonLink>
              <a
                className="editorial-link"
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Per WhatsApp besprechen
                <span className="outdoor-sr-only">(neues Fenster)</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="outdoor-contact__call">
            <p>Direkt miteinander sprechen</p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <p>{site.openingHours.display}</p>
          </div>
        </div>
      </section>
      <div className="shell outdoor-editorial-note">
        <p>
          Präsentationsentwurf zur Abstimmung mit KLOTZ · Abbildungen zeigen
          Gestaltungsbeispiele. Das Anfrageformular versendet und speichert noch
          keine Daten.
        </p>
      </div>
    </main>
  );
}
