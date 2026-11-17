import Image from "next/image";
import Link from "next/link";
import type { SiteSettings } from "@/domain/content/types";
import type { CompanyPageContent } from "@/domain/content/presentation";
import type {
  BusinessPageContent,
  BusinessReference,
} from "@/domain/content/business";

export function BusinessFactsBand({
  facts,
}: {
  facts: BusinessPageContent["facts"];
}) {
  return (
    <div className="b2b-hero b2b-hero--band">
      <dl className="shell b2b-facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>
              <span className="b2b-facts__value">{fact.value}</span>
              <span className="b2b-facts__label">{fact.label}</span>
            </dt>
            <dd>{fact.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function BusinessAssurance({
  reference,
  contacts,
  site,
}: {
  reference: BusinessReference;
  contacts: CompanyPageContent["team"];
  site: SiteSettings;
}) {
  const [image] = reference.images;
  return (
    <section className="b2b-assurance" aria-labelledby="b2b-assurance">
      <div className="shell">
        <header className="b2b-heading">
          <div>
            <p className="b2b-eyebrow b2b-eyebrow--dark">
              Referenz & Ansprechpartner
            </p>
            <h2 id="b2b-assurance">
              Gebaut in der Region. <em>Betreut von Menschen.</em>
            </h2>
          </div>
          <p>
            Ein Blick auf ein umgesetztes Objekt – und auf die Menschen, die
            Ihre Anfrage bei KLOTZ in die Hand nehmen.
          </p>
        </header>
        <div className="b2b-assurance__grid">
          <article className="b2b-assurance__ref">
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 900px) 100vw, 30vw"
              />
            ) : null}
            <div>
              <p className="b2b-eyebrow">{reference.eyebrow}</p>
              <h3>{reference.title}</h3>
              <dl>
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
          </article>
          <ul className="b2b-contacts b2b-contacts--stack">
            {contacts.map((person) => (
              <li key={person.id}>
                {person.image ? (
                  <Image
                    src={person.image.src}
                    alt={person.image.alt}
                    width={person.image.width}
                    height={person.image.height}
                    sizes="104px"
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
  );
}
