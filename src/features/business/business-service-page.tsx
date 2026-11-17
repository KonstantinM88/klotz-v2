import Link from "next/link";
import type { Article, SiteSettings } from "@/domain/content/types";
import type {
  BusinessPageContent,
  BusinessServiceContent,
} from "@/domain/content/business";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceMedia } from "@/features/services/service-media";
import {
  BusinessBenefits,
  BusinessCards,
  BusinessContact,
  BusinessFaq,
  BusinessHero,
  BusinessProcess,
} from "./business-parts";
import { BusinessAssurance, BusinessFactsBand } from "./business-assurance";
import type { CompanyPageContent } from "@/domain/content/presentation";

export function BusinessServicePage({
  content,
  site,
  related,
  process,
  guide,
  overview,
  contacts,
}: {
  content: BusinessServiceContent;
  site: SiteSettings;
  related: BusinessServiceContent[];
  process: BusinessPageContent["process"];
  guide?: Article;
  overview: BusinessPageContent;
  contacts: CompanyPageContent["team"];
}) {
  const reference = overview.references[0];
  const request = `/projekt-anfragen?leistung=${content.slug}`;
  return (
    <main
      id="main-content"
      className={`outdoor-service business-page business-service business-service--${content.slug}`}
    >
      <BusinessHero
        {...content.hero}
        media={content.media}
        audience={content.audience}
        request={request}
        cta={content.hero.cta}
        serviceTitle={content.title}
        slug={content.slug}
      />
      <BusinessFactsBand facts={overview.facts} />
      <BusinessBenefits items={content.benefits} />
      <section
        className="shell outdoor-section business-intro"
        aria-labelledby="business-story"
      >
        <div>
          <p className="index-label">Ihre Aufgabe / {content.title}</p>
          <h2 id="business-story">{content.story.title}</h2>
        </div>
        <div className="outdoor-copy">
          {content.story.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      <section
        className="business-scope"
        id="leistungsumfang"
        aria-labelledby="business-scope"
      >
        <div className="shell outdoor-section">
          <div className="business-section-heading">
            <div>
              <p className="index-label">
                Leistungsbereiche / Passend zum Vorhaben
              </p>
              <h2 id="business-scope">
                Welche Aufgabe
                <br />
                <em>möchten Sie lösen?</em>
              </h2>
            </div>
            <p>
              Diese Bereiche geben eine erste Orientierung. Die geeignete
              Ausführung und die konkreten Arbeiten werden anhand Ihres Objekts
              abgestimmt.
            </p>
          </div>
          <div className="business-scope__grid">
            {content.variants.map((v, i) => (
              <article key={v.title}>
                <span className="outdoor-index" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
                <p className="business-scope__use">{v.suitable}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="shell outdoor-section business-detail"
        aria-labelledby="business-detail"
      >
        <figure>
          <ServiceMedia
            media={{
              image: content.detail.image,
              caption: content.detail.caption,
            }}
            sizes="(max-width: 760px) calc(100vw - 40px), 46vw"
          />
          <figcaption>{content.detail.caption}</figcaption>
        </figure>
        <div>
          <p className="index-label">Die Ausführung mitdenken</p>
          <h2 id="business-detail">{content.detail.title}</h2>
          <div className="outdoor-copy">
            {content.detail.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>
      <section
        className="business-coordination"
        aria-labelledby="business-coordination"
      >
        <div className="shell outdoor-section">
          <div className="business-section-heading">
            <div>
              <p className="index-label">
                Vorbereitung / Nutzung und Umsetzung verbinden
              </p>
              <h2 id="business-coordination">
                Was wir vorab
                <br />
                <em>gemeinsam klären.</em>
              </h2>
            </div>
            <p>
              Eine gute Vorbereitung macht Anforderungen und Zuständigkeiten
              sichtbar. Diese Punkte helfen bei der Abstimmung Ihres Auftrags.
            </p>
          </div>
          <ol>
            {content.planning.map((p, i) => (
              <li key={p.title}>
                <span className="outdoor-index" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="business-responsibility">
            <h3>{content.responsibility.title}</h3>
            <p>{content.responsibility.text}</p>
            {content.responsibility.href && (
              <a
                className="editorial-link"
                href={content.responsibility.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.responsibility.label}
                <span className="outdoor-sr-only">(neues Fenster)</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </aside>
        </div>
      </section>
      <section
        className="shell outdoor-section business-costs"
        aria-labelledby="business-costs"
      >
        <div>
          <p className="index-label">
            Ihr Angebot / Leistungen nachvollziehbar abgrenzen
          </p>
          <h2 id="business-costs">
            Klar beschrieben.
            <br />
            <em>Gut zu entscheiden.</em>
          </h2>
          <p>{content.costs.lead}</p>
        </div>
        <div className="business-costs__factors">
          <h3>Diese Punkte bestimmen den Umfang</h3>
          <ul>
            {content.costs.factors.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <ButtonLink href={request}>Umfang meines Vorhabens klären</ButtonLink>
        </div>
      </section>
      <BusinessProcess items={process} />
      <section
        className="shell outdoor-section business-brief"
        aria-labelledby="business-brief"
      >
        <div>
          <p className="index-label">Jetzt konkret werden / Ihre Anfrage</p>
          <h2 id="business-brief">{content.brief.title}</h2>
          <p>
            Diese Eckdaten helfen für den Einstieg. Die folgende Anfrage enthält
            bereits Ihr Thema und passende Orientierungspunkte.
          </p>
          <ButtonLink href={request}>{content.hero.cta}</ButtonLink>
        </div>
        <ul>
          {content.brief.items.map((p, i) => (
            <li key={p}>
              <span aria-hidden="true">0{i + 1}</span>
              {p}
            </li>
          ))}
        </ul>
      </section>
      <BusinessFaq items={content.faq} />
      <section
        className="business-products"
        aria-labelledby="business-products"
      >
        <div className="shell outdoor-section">
          <div className="business-section-heading">
            <div>
              <p className="index-label">Lösungen im Detail</p>
              <h2 id="business-products">
                Vom Objekt
                <br />
                <em>zum Bauelement.</em>
              </h2>
            </div>
            <p>
              Die Produktseiten erklären Möglichkeiten und Unterschiede. Die
              Auswahl für Ihr Gebäude erfolgt im Zusammenhang mit Nutzung und
              Bestand.
            </p>
          </div>
          <div className="business-product-links">
            {content.productLinks.map((l) => (
              <Link href={l.href} key={l.href}>
                <h3>
                  {l.title}
                  <span aria-hidden="true">↗</span>
                </h3>
                <p>{l.text}</p>
              </Link>
            ))}
          </div>
          {guide && (
            <Link className="business-reading" href={guide.href}>
              <span className="index-label">
                Wissen / Orientierung für Ihr Vorhaben
              </span>
              <h3>
                {guide.title}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{guide.excerpt}</p>
            </Link>
          )}
        </div>
      </section>
      <section
        className="shell outdoor-section business-related"
        aria-labelledby="business-related"
      >
        <div className="business-related__heading">
          <div>
            <p className="index-label">Weitere Aufgaben am Objekt</p>
            <h2 id="business-related">
              Im Zusammenhang
              <br />
              <em>weiterdenken.</em>
            </h2>
          </div>
          <Link className="editorial-link" href="/gewerbekunden">
            Alle Leistungen für Gewerbekunden <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <BusinessCards pages={related} compact />
      </section>
      {reference ? (
        <BusinessAssurance
          reference={reference}
          contacts={contacts}
          site={site}
        />
      ) : null}
      <BusinessContact
        site={site}
        request={request}
        title="Ihr Anliegen ist ein guter Anfang."
        text="Beschreiben Sie uns Ihr Vorhaben und den Projektort. Ob erste Idee oder fertiges Leistungsverzeichnis: Wir melden uns mit den nächsten Schritten für Ihr Objekt."
      />
    </main>
  );
}
