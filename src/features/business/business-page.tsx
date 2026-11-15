import Link from "next/link";
import type { SiteSettings } from "@/domain/content/types";
import type {
  BusinessPageContent,
  BusinessServiceContent,
} from "@/domain/content/business";
import { ButtonLink } from "@/components/ui/button-link";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl } from "@/lib/site-url";
import {
  BusinessCards,
  BusinessContact,
  BusinessFaq,
  BusinessHero,
  BusinessProcess,
} from "./business-parts";

export function BusinessPage({
  content,
  services,
  site,
}: {
  content: BusinessPageContent;
  services: BusinessServiceContent[];
  site: SiteSettings;
}) {
  const request = "/projekt-anfragen?bereich=gewerbekunden";
  const absolute = (path: string) => new URL(path, getSiteUrl()).href;
  return (
    <main id="main-content" className="outdoor-service business-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${absolute("/gewerbekunden")}#page`,
          url: absolute("/gewerbekunden"),
          name: content.metadata.title,
          description: content.metadata.description,
          inLanguage: "de-DE",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: services.length,
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: absolute(`/gewerbekunden/${s.slug}`),
            })),
          },
        }}
      />
      <BusinessHero
        {...content.hero}
        audience="Bauelemente für Gewerbe & Wohnungswirtschaft"
        request={request}
        cta="Unser Objekt besprechen"
      />
      <nav
        className="shell business-jump"
        aria-label="Ihr Bereich für die Objektanfrage"
      >
        {services.map((s, i) => (
          <a key={s.slug} href={`#${s.slug}`}>
            <span aria-hidden="true">0{i + 1}</span>
            <span>{s.title}</span>
            <span aria-hidden="true">↓</span>
          </a>
        ))}
      </nav>
      <section
        className="shell outdoor-section business-intro"
        aria-labelledby="business-intro"
      >
        <div>
          <p className="index-label">
            Gewerbekunden / Ihr regionaler Ansprechpartner
          </p>
          <h2 id="business-intro">{content.introduction.title}</h2>
        </div>
        <div className="outdoor-copy">
          {content.introduction.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      <section
        className="business-trust"
        aria-labelledby="business-trust-title"
      >
        <div className="shell outdoor-section">
          <div className="business-section-heading">
            <div>
              <p className="index-label">
                Warum KLOTZ / Ihr Partner für Objekt und Bestand
              </p>
              <h2 id="business-trust-title">
                {content.trust.title}
                <br />
                <em>{content.trust.accent}</em>
              </h2>
            </div>
            <p>{content.trust.lead}</p>
          </div>
          <div className="business-trust__grid">
            <div className="business-trust__experience">
              <p className="business-trust__value">
                {content.trust.experience.value}
              </p>
              <h3>{content.trust.experience.label}</h3>
              <p>{content.trust.experience.text}</p>
              <Link className="editorial-link" href="/unternehmen">
                KLOTZ & Team kennenlernen <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="business-trust__advantages">
              {content.trust.advantages.map((a, i) => (
                <article key={a.title}>
                  <span className="outdoor-index" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="shell outdoor-section business-sectors"
        id="branchen"
        aria-labelledby="business-sectors"
      >
        <div className="business-section-heading">
          <div>
            <p className="index-label">
              Vier Einstiege / Eine Aufgabe im Mittelpunkt
            </p>
            <h2 id="business-sectors">
              Was braucht
              <br />
              <em>Ihr Objekt?</em>
            </h2>
          </div>
          <p>
            Finden Sie die passenden Leistungen für Ihre Nutzung. Jedes Thema
            zeigt Möglichkeiten, Planungsfragen und die Angaben für ein erstes
            Gespräch.
          </p>
        </div>
        <BusinessCards pages={services} />
      </section>
      <section
        className="business-decisions"
        aria-labelledby="business-decisions"
      >
        <div className="shell outdoor-section">
          <div className="business-section-heading">
            <div>
              <p className="index-label">
                Von der Aufgabe zur passenden Leistung
              </p>
              <h2 id="business-decisions">
                Sie kennen den Anlass.
                <br />
                <em>Wir klären den Weg.</em>
              </h2>
            </div>
            <p>
              Ein konkretes Anliegen ist der beste Einstieg. Auch ohne fertige
              technische Planung können Sie Ihr Vorhaben mit uns besprechen.
            </p>
          </div>
          <div className="business-task-list">
            {content.tasks.map((t, i) => (
              <article key={t.href}>
                <span className="business-step" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
                <Link className="editorial-link" href={t.href}>
                  {t.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BusinessProcess items={content.process} />
      <section
        className="shell outdoor-section business-preparation"
        aria-labelledby="business-preparation"
      >
        <div className="business-section-heading">
          <div>
            <p className="index-label">
              Ihr Einstieg / Ein paar Eckdaten genügen
            </p>
            <h2 id="business-preparation">
              Eine gute Anfrage.
              <br />
              <em>Ein klarer Anfang.</em>
            </h2>
          </div>
          <p>
            Sie müssen noch nicht jede technische Frage beantwortet haben. Mit
            diesen Angaben lässt sich Ihre Aufgabe besser zuordnen und das erste
            Gespräch vorbereiten.
          </p>
        </div>
        <div className="business-preparation__grid">
          {content.preparation.map((p, i) => (
            <div key={p.title}>
              <span className="outdoor-index" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <div className="business-preparation__action">
          <p>
            Wählen Sie oben Ihr Thema für eine gezielte Anfrage – oder schildern
            Sie hier Ihr gesamtes Vorhaben.
          </p>
          <ButtonLink href={request}>Objektanfrage vorbereiten</ButtonLink>
        </div>
      </section>
      <section
        className="business-evidence"
        aria-labelledby="business-evidence"
      >
        <div className="shell business-evidence__grid">
          <div>
            <p className="index-label">
              Einblick / Grundstücksabschluss im Objektbereich
            </p>
            <h2 id="business-evidence">Einzäunung Stadtstadion.</h2>
            <p>
              Der veröffentlichte KLOTZ-Bildbericht zeigt eine Einzäunung im
              Objektbereich. Entdecken Sie die vorhandenen Aufnahmen als
              konkreten Einblick in das Projektarchiv.
            </p>
            <Link
              className="editorial-link"
              href="/referenzen/einzaeunung-stadtstadion"
            >
              Bildbericht ansehen <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="business-evidence__note">
            <p className="index-label">Beratung & Arbeitsvorbereitung</p>
            <h3>Menschen, die Ihr Vorhaben weiterbringen.</h3>
            <p>
              Fachberatung, technische Vorbereitung und Montage gehören bei
              KLOTZ zusammen. Lernen Sie die Ansprechpartner und den Standort in
              Merseburg-Meuschau kennen.
            </p>
            <Link className="editorial-link" href="/unternehmen">
              KLOTZ kennenlernen <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <BusinessFaq items={content.faq} />
      <BusinessContact
        site={site}
        request={request}
        title="Was steht bei Ihnen an?"
        text="Ein einzelnes Bauteil, ein Gebäude oder eine größere Aufgabe im Bestand: Nennen Sie den Projektort und erzählen Sie uns, was Sie verändern möchten. Gemeinsam klären wir die passenden nächsten Schritte."
      />
    </main>
  );
}
