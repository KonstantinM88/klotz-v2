import Link from "next/link";
import { TrustBand } from "@/components/sections/trust-band";
import type { Project, SiteSettings } from "@/domain/content/types";
import type { FencePageContent } from "@/domain/content/fence";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceMedia } from "@/features/services/service-media";
import { getSiteUrl } from "@/lib/site-url";
import { GatePrinciple } from "./gate-principle";
import "@/styles/fence.css";

export function FencePage({
  content,
  site,
  project,
}: {
  content: FencePageContent;
  site: SiteSettings;
  project?: Project;
}) {
  const request = "/projekt-anfragen?bereich=zaun-tor";
  const absolute = (path: string) => new URL(path, getSiteUrl()).href;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absolute("/zaun-tor")}#page`,
    url: absolute("/zaun-tor"),
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
        url: absolute(`/zaun-tor/${s.slug}`),
      })),
    },
  };
  return (
    <main id="main-content" className="outdoor-service fence-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="outdoor-hero" aria-labelledby="fence-title">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Zaun & Tor", href: "/zaun-tor" }]} />
        </div>
        <div className="shell outdoor-hero__grid">
          <div className="outdoor-hero__copy">
            <p className="index-label">KLOTZ / Zaun & Tor / Merseburg</p>
            <h1 id="fence-title">
              {content.hero.title}
              <em>{content.hero.accent}</em>
            </h1>
            <p className="outdoor-hero__lead">{content.hero.lead}</p>
            <div className="outdoor-actions">
              <ButtonLink href={request}>Mein Grundstück gestalten</ButtonLink>
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
            <figcaption>{content.hero.media.caption}</figcaption>
          </figure>
        </div>
      </section>
      <TrustBand />
      <nav
        className="shell fence-jump"
        aria-label="Ihr Thema für Grundstück und Eingang"
      >
        {content.solutions.map((s, i) => (
          <a key={s.slug} href={`#${s.slug}`}>
            <span>0{i + 1}</span>
            <span>{s.title}</span>
            <span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>
      <section
        className="shell outdoor-section fence-intro"
        aria-labelledby="fence-intro"
      >
        <div>
          <p className="index-label">
            01 / Gestaltung beginnt mit Ihrem Alltag
          </p>
          <h2 id="fence-intro">{content.introduction.title}</h2>
        </div>
        <div className="outdoor-copy">
          {content.introduction.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      <section
        className="shell fence-solutions"
        id="loesungen"
        aria-labelledby="solutions-title"
      >
        <div className="fence-heading">
          <div>
            <p className="index-label">
              02 / Sechs Lösungen, ein stimmiges Gesamtbild
            </p>
            <h2 id="solutions-title">
              Abgrenzen. Öffnen.
              <br />
              <em>Wohlfühlen.</em>
            </h2>
          </div>
          <p>
            Was braucht Ihr Grundstück? Entdecken Sie Gestaltungsmöglichkeiten
            und die Details, die aus einer Idee eine passende Lösung machen.
          </p>
        </div>
        <div className="fence-solutions__grid">
          {content.solutions.map((s, i) => (
            <article key={s.slug} id={s.slug} className="fence-solution">
              <Link
                className="fence-solution__image"
                href={`/zaun-tor/${s.slug}`}
                aria-label={`${s.title} entdecken`}
              >
                <ServiceMedia
                  media={s.media}
                  sizes="(max-width:620px) calc(100vw - 40px), 45vw"
                />
                <span className="fence-solution__index" aria-hidden="true">
                  0{i + 1} / ↗
                </span>
              </Link>
              <div className="fence-solution__copy">
                <p className="index-label">{s.benefit}</p>
                <h3>
                  <Link href={`/zaun-tor/${s.slug}`}>{s.title}</Link>
                </h3>
                <p>{s.description}</p>
                <Link className="editorial-link" href={`/zaun-tor/${s.slug}`}>
                  Möglichkeiten entdecken <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="fence-choice" aria-labelledby="choice-title">
        <div className="shell outdoor-section">
          <div className="fence-heading">
            <div>
              <p className="index-label">
                03 / Ihre Aufgabe gibt die Richtung vor
              </p>
              <h2 id="choice-title">
                Nicht alles auf einmal.
                <br />
                <em>Das Richtige für Sie.</em>
              </h2>
            </div>
            <p>
              Ein klar formulierter Wunsch ist der beste Einstieg. Gemeinsam
              ordnen wir passende Materialien, Konstruktionen und nächste
              Schritte.
            </p>
          </div>
          <div className="fence-choice__list">
            {content.decisions.map((d, i) => (
              <article key={d.title}>
                <span className="fence-number">0{i + 1}</span>
                <h3>{d.title}</h3>
                <div>
                  <p>{d.text}</p>
                  <Link className="editorial-link" href={d.href}>
                    {d.label}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="shell outdoor-section fence-comparison"
        id="torvergleich"
        aria-labelledby="comparison-title"
      >
        <div className="fence-heading">
          <div>
            <p className="index-label">04 / Zwei Bewegungsarten verstehen</p>
            <h2 id="comparison-title">
              Wie öffnet sich
              <br />
              <em>Ihre Einfahrt?</em>
            </h2>
          </div>
          <p>
            Beide Lösungen brauchen freien Raum – an unterschiedlichen Stellen.
            Entscheidend sind der Grundriss und die Nutzung Ihrer Zufahrt.
          </p>
        </div>
        <div className="fence-comparison__grid">
          <article>
            <p className="index-label">01 / Drehtor</p>
            <GatePrinciple kind="swing" />
            <h3>Platz für die Flügel.</h3>
            <p>
              Ein oder zwei Torflügel schwenken in den vorgesehenen
              Öffnungsbereich. Stellplätze, Gefälle und Fußwege müssen dazu
              passen.
            </p>
            <Link href="/zaun-tor/hoftore" className="editorial-link">
              Hoftore kennenlernen <span aria-hidden="true">↗</span>
            </Link>
          </article>
          <article>
            <p className="index-label">02 / Schiebetor</p>
            <GatePrinciple kind="sliding" />
            <h3>Platz entlang der Grenze.</h3>
            <p>
              Das Torblatt bewegt sich seitlich. Dort braucht es einen
              geeigneten Rücklauf; Untergrund und Konstruktion werden gemeinsam
              geprüft.
            </p>
            <Link href="/zaun-tor/schiebetore" className="editorial-link">
              Schiebetore kennenlernen <span aria-hidden="true">↗</span>
            </Link>
          </article>
        </div>
        <p className="fence-caption">
          Schematische Draufsicht zur Orientierung · ohne Maße. Der tatsächliche
          Bewegungsraum hängt vom gewählten System und der Einbausituation ab.
        </p>
      </section>
      <section
        className="shell fence-planning"
        aria-labelledby="fence-planning"
      >
        <div className="fence-heading">
          <div>
            <p className="index-label">05 / Gut vorbereitet in die Beratung</p>
            <h2 id="fence-planning">
              Schön gedacht.
              <br />
              <em>Passend geplant.</em>
            </h2>
          </div>
          <p>
            Die wichtigsten Angaben haben Sie oft schon zur Hand. Eine fertige
            Planung brauchen Sie für das erste Gespräch nicht.
          </p>
        </div>
        <div className="fence-planning__grid">
          {content.preparation.map((p, i) => (
            <article key={p.title}>
              <span className="fence-number">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>
      {project ? (
        <section
          className="shell outdoor-section fence-proof"
          aria-labelledby="proof-title"
        >
          <div>
            <p className="index-label">
              Einblick / KLOTZ-Referenz im Objektbereich
            </p>
            <h2 id="proof-title">{project.title}</h2>
          </div>
          <div className="fence-proof__copy">
            <p className="index-label">
              Veröffentlichtes Projekt / KLOTZ-Bildarchiv
            </p>
            <p>{project.summary}</p>
            <Link className="editorial-link" href={project.href}>
              Bildbericht im Archiv ansehen<span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      ) : null}
      <section
        className="shell outdoor-section fence-process"
        aria-labelledby="process-title"
      >
        <div className="fence-heading">
          <div>
            <p className="index-label">06 / Von der Idee bis zur Abnahme</p>
            <h2 id="process-title">
              Ein klarer Ablauf.
              <br />
              <em>Persönlich begleitet.</em>
            </h2>
          </div>
          <p>
            Beratung und Montage gehören zusammen. Auch nach der Umsetzung
            können Sie Fragen zu Wartung und Instandsetzung mit KLOTZ
            besprechen.
          </p>
        </div>
        <ol>
          {content.process.map((p, i) => (
            <li key={p.title}>
              <span className="fence-number">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
        <Link href="/gewerbekunden/wartung-service" className="editorial-link">
          Wartung & Service entdecken<span aria-hidden="true">↗</span>
        </Link>
      </section>
      <section className="outdoor-showroom" aria-labelledby="showroom-title">
        <div className="shell outdoor-showroom__grid">
          <div>
            <p className="index-label">07 / Beratung in Merseburg-Meuschau</p>
            <h2 id="showroom-title">
              Ideen mitbringen.
              <br />
              <em>Gemeinsam weiterdenken.</em>
            </h2>
            <p>
              Materialien, Linien und Farben wirken im Zusammenhang. Besprechen
              Sie Ihre Vorstellungen persönlich mit KLOTZ am Standort mit Innen-
              und Außenausstellung. Bringen Sie Fotos vom Grundstück mit – so
              wird aus der Auswahl ein Gespräch über Ihr Zuhause.
            </p>
            <a
              className="editorial-link"
              href={site.showroomTourUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Erster Eindruck im virtuellen Rundgang
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
        aria-labelledby="fence-faq"
      >
        <div>
          <p className="index-label">
            08 / Orientierung vor Ihrer Entscheidung
          </p>
          <h2 id="fence-faq">
            Gute Fragen.
            <br />
            <em>Ein klarer Anfang.</em>
          </h2>
          <p>
            Die Details klären wir an Ihrem Grundstück. Diese Antworten helfen
            beim Einstieg.
          </p>
        </div>
        <div>
          {content.faq.map((f, i) => (
            <details key={f.question} id={`fence-frage-${i + 1}`}>
              <summary>
                {f.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="shell fence-offers" aria-labelledby="fence-offers">
        <div>
          <p className="index-label">Ausgewählte Ideen / Zaun & Tor</p>
          <h2 id="fence-offers">
            Von der ersten Idee
            <br />
            <em>zum konkreten Angebot.</em>
          </h2>
          <p>
            Preisbeispiele zeigen ausgewählte Ausführungen. Was Ihre Anlage
            umfasst, ergibt sich aus Material, Abmessungen, Untergrund und den
            vereinbarten Arbeiten. Ihr konkretes Angebot entsteht nach der
            persönlichen Abstimmung und dem Aufmaß.
          </p>
        </div>
        <ButtonLink href="/angebote/zaeune-tore" variant="secondary">
          Ausführungen & Preisbeispiele
        </ButtonLink>
      </section>
      <section className="outdoor-contact" aria-labelledby="contact-title">
        <div className="shell">
          <div>
            <p className="index-label">Der nächste Schritt ist ein Gespräch</p>
            <h2 id="contact-title">
              Wie soll sich Ihr
              <br />
              <em>Zuhause öffnen?</em>
            </h2>
            <p>
              Eine offene Grenze, ein geschützter Sitzplatz oder ein neuer
              Eingang: Erzählen Sie uns, was Sie verändern möchten. Projektort,
              Fotos und erste Wünsche reichen für den Anfang.
            </p>
            <div className="outdoor-actions">
              <ButtonLink href={request} variant="light">
                Mein Vorhaben besprechen
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
          Präsentationsentwurf zur Abstimmung mit KLOTZ · Produktabbildungen
          zeigen Gestaltungsbeispiele. Das Anfrageformular versendet und
          speichert noch keine Daten.
        </p>
      </div>
    </main>
  );
}
