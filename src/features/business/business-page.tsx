import Image from "next/image";
import Link from "next/link";
import type { SiteSettings } from "@/domain/content/types";
import type { CompanyPageContent } from "@/domain/content/presentation";
import type {
  BusinessPageContent,
  BusinessReference,
  BusinessServiceContent,
} from "@/domain/content/business";
import { ButtonLink } from "@/components/ui/button-link";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl } from "@/lib/site-url";
import {
  BusinessCards,
  BusinessContact,
  BusinessFaq,
  BusinessProcess,
} from "./business-parts";

const request = "/projekt-anfragen?bereich=gewerbekunden";

export function BusinessPage({
  content,
  services,
  site,
  team,
}: {
  content: BusinessPageContent;
  services: BusinessServiceContent[];
  site: SiteSettings;
  team: CompanyPageContent["team"];
}) {
  const absolute = (path: string) => new URL(path, getSiteUrl()).href;
  const contacts = content.team.contactIds.flatMap((id) =>
    team.filter((member) => member.id === id),
  );
  const [stadium, lake] = content.references;
  return (
    <main id="main-content" className="outdoor-service business-page b2b">
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

      <section className="b2b-hero" aria-labelledby="b2b-title">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Gewerbekunden", href: "/gewerbekunden" }]}
          />
        </div>
        <div className="shell b2b-hero__grid">
          <div className="b2b-hero__copy">
            <p className="b2b-eyebrow">{content.hero.eyebrow}</p>
            <h1 id="b2b-title">
              {content.hero.title} <em>{content.hero.accent}</em>
            </h1>
            <p className="b2b-hero__lead">{content.hero.lead}</p>
            <div className="b2b-actions">
              <ButtonLink href={request} variant="light">
                Objekt besprechen
              </ButtonLink>
              <a className="b2b-link" href="#referenzen">
                Referenzen ansehen <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="b2b-hero__direct">
              Direkt für Objektanfragen{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
          </div>
          <div className="b2b-mosaic">
            {content.hero.mosaic.map((tile, index) => (
              <figure key={tile.src} className={`b2b-mosaic__tile--${index}`}>
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  width={tile.width}
                  height={tile.height}
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? "(max-width: 900px) 100vw, 46vw"
                      : "(max-width: 900px) 50vw, 22vw"
                  }
                />
                <figcaption>{tile.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <dl className="shell b2b-facts">
          {content.facts.map((fact) => (
            <div key={fact.label}>
              <dt>
                <span className="b2b-facts__value">{fact.value}</span>
                <span className="b2b-facts__label">{fact.label}</span>
              </dt>
              <dd>{fact.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <nav
        className="shell business-jump b2b-jump"
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
        className="shell b2b-statement"
        aria-label={content.statement.label}
      >
        <p className="b2b-eyebrow b2b-eyebrow--dark">
          {content.statement.label}
        </p>
        <blockquote>
          <p>{content.statement.text}</p>
          <footer>{content.statement.signature}</footer>
        </blockquote>
      </section>

      <section
        className="shell b2b-section business-sectors"
        id="branchen"
        aria-labelledby="business-sectors"
      >
        <header className="b2b-heading">
          <div>
            <p className="b2b-eyebrow b2b-eyebrow--dark">
              Vier Bereiche / Ein Ansprechpartner
            </p>
            <h2 id="business-sectors">
              Was braucht <em>Ihr Objekt?</em>
            </h2>
          </div>
          <p>
            Wohnungsbestand, Betriebsgelände, Gastronomie oder Service: Jeder
            Bereich zeigt typische Aufgaben, Lösungen und was wir für ein erstes
            Gespräch brauchen.
          </p>
        </header>
        <BusinessCards pages={services} />
      </section>

      <section
        className="b2b-reference"
        id="referenzen"
        aria-labelledby="ref-stadtstadion"
      >
        {stadium ? <ReferenceFeature reference={stadium} /> : null}
      </section>
      {lake ? (
        <section
          className="b2b-reference b2b-reference--strip"
          aria-labelledby={`ref-${lake.id}`}
        >
          <ReferenceStrip reference={lake} />
        </section>
      ) : null}

      <section
        className="shell b2b-section b2b-matrix"
        aria-labelledby="b2b-matrix"
      >
        <header className="b2b-heading">
          <div>
            <p className="b2b-eyebrow b2b-eyebrow--dark">
              Leistungen / Rund um die Gebäudehülle
            </p>
            <h2 id="b2b-matrix">
              {content.matrix.title} <em>{content.matrix.accent}</em>
            </h2>
          </div>
          <p>{content.matrix.lead}</p>
        </header>
        <div className="b2b-matrix__scroll">
          <table>
            <caption className="visually-hidden">
              Typische Leistungen von KLOTZ je Kundenbereich
            </caption>
            <thead>
              <tr>
                <th scope="col">Leistung</th>
                {content.matrix.sectors.map((sector) => (
                  <th scope="col" key={sector}>
                    {sector}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.matrix.rows.map((row) => (
                <tr key={row.service}>
                  <th scope="row">
                    <Link href={row.href}>
                      {row.service} <span aria-hidden="true">↗</span>
                    </Link>
                  </th>
                  {row.marks.map((mark, index) => (
                    <td
                      key={content.matrix.sectors[index]}
                      data-label={content.matrix.sectors[index]}
                    >
                      {mark ? (
                        <span className="b2b-dot">
                          <span className="visually-hidden">typisch</span>
                        </span>
                      ) : (
                        <span className="b2b-dash">
                          <span className="visually-hidden">auf Anfrage</span>
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="business-decisions b2b-decisions"
        aria-labelledby="business-decisions"
      >
        <div className="shell b2b-section">
          <header className="b2b-heading">
            <div>
              <p className="b2b-eyebrow b2b-eyebrow--dark">
                Vom Anlass zur Lösung
              </p>
              <h2 id="business-decisions">
                Sie kennen den Anlass. <em>Wir klären den Weg.</em>
              </h2>
            </div>
            <p>
              Ein konkretes Anliegen ist der beste Einstieg – auch ohne fertige
              technische Planung.
            </p>
          </header>
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

      <section className="b2b-team" aria-labelledby="b2b-team">
        <div className="shell b2b-team__grid">
          <figure className="b2b-team__photo">
            <Image
              src={content.team.image.src}
              alt={content.team.image.alt}
              width={content.team.image.width}
              height={content.team.image.height}
              sizes="(max-width: 900px) 100vw, 56vw"
            />
          </figure>
          <div className="b2b-team__side">
            <div className="b2b-team__copy">
              <p className="b2b-eyebrow b2b-eyebrow--dark">
                Ihre Ansprechpartner
              </p>
              <h2 id="b2b-team">
                {content.team.title} <em>{content.team.accent}</em>
              </h2>
              <p>{content.team.text}</p>
              <Link className="editorial-link" href="/unternehmen">
                Das ganze Team kennenlernen <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <ul className="b2b-contacts">
              {contacts.map((person) => (
                <li key={person.id}>
                  {person.image ? (
                    <Image
                      src={person.image.src}
                      alt={person.image.alt}
                      width={person.image.width}
                      height={person.image.height}
                      sizes="120px"
                    />
                  ) : null}
                  <div>
                    <p className="b2b-contacts__name">{person.name}</p>
                    <p className="b2b-contacts__role">{person.role}</p>
                    <a href={site.phoneHref}>{site.phoneDisplay}</a>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="shell b2b-section business-preparation b2b-preparation"
        aria-labelledby="business-preparation"
      >
        <header className="b2b-heading">
          <div>
            <p className="b2b-eyebrow b2b-eyebrow--dark">
              Ihr Einstieg / Ein paar Eckdaten genügen
            </p>
            <h2 id="business-preparation">
              Eine gute Anfrage. <em>Ein klarer Anfang.</em>
            </h2>
          </div>
          <p>
            Sie müssen noch nicht jede technische Frage beantwortet haben. Mit
            diesen Angaben bereiten wir das erste Gespräch gezielt vor.
          </p>
        </header>
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
            Wählen Sie oben Ihren Bereich – oder schildern Sie hier Ihr gesamtes
            Vorhaben.
          </p>
          <ButtonLink href={request}>Objektanfrage vorbereiten</ButtonLink>
        </div>
      </section>

      <BusinessFaq items={content.faq} />
      <BusinessContact
        site={site}
        request={request}
        title="Was steht bei Ihrem Objekt an?"
        text="Ein einzelnes Tor, ein Treppenhaus voller Fenster oder ein ganzer Bestand: Nennen Sie Projektort und Aufgabe – wir melden uns mit den nächsten Schritten."
      />
    </main>
  );
}

function ReferenceFeature({ reference }: { reference: BusinessReference }) {
  return (
    <div className="shell b2b-reference__grid">
      <div className="b2b-reference__copy">
        <p className="b2b-eyebrow">{reference.eyebrow}</p>
        <h2 id={`ref-${reference.id}`}>
          {reference.title} <em>{reference.accent}</em>
        </h2>
        <p>{reference.text}</p>
        <dl className="b2b-reference__facts">
          {reference.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        {reference.href ? (
          <Link className="b2b-link" href={reference.href}>
            Bildbericht ansehen <span aria-hidden="true">↗</span>
          </Link>
        ) : null}
      </div>
      <figure className="b2b-reference__gallery">
        <div>
          {reference.images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`b2b-reference__img--${index}`}
              sizes="(max-width: 900px) 50vw, 26vw"
            />
          ))}
        </div>
        <figcaption>{reference.caption}</figcaption>
      </figure>
    </div>
  );
}

function ReferenceStrip({ reference }: { reference: BusinessReference }) {
  return (
    <div className="shell">
      <div className="b2b-strip__head">
        <div>
          <p className="b2b-eyebrow b2b-eyebrow--dark">{reference.eyebrow}</p>
          <h2 id={`ref-${reference.id}`}>
            {reference.title} <em>{reference.accent}</em>
          </h2>
        </div>
        <div>
          <p>{reference.text}</p>
          <dl className="b2b-strip__facts">
            {reference.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <figure className="b2b-strip__images">
        <div>
          {reference.images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
          ))}
        </div>
        <figcaption>{reference.caption}</figcaption>
      </figure>
    </div>
  );
}
