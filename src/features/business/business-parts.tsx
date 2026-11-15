import Link from "next/link";
import type { SiteSettings } from "@/domain/content/types";
import type { ServicePageMedia } from "@/domain/content/service-page";
import type {
  BusinessPageContent,
  BusinessServiceContent,
} from "@/domain/content/business";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceMedia } from "@/features/services/service-media";
import "@/styles/business.css";

export function BusinessHero({
  title,
  accent,
  lead,
  audience,
  media,
  request,
  cta,
  serviceTitle,
  slug,
}: {
  title: string;
  accent: string;
  lead: string;
  audience: string;
  media: ServicePageMedia;
  request: string;
  cta: string;
  serviceTitle?: string;
  slug?: string;
}) {
  return (
    <section
      className="outdoor-hero business-hero"
      aria-labelledby="business-title"
    >
      <div className="shell">
        <Breadcrumbs
          items={[
            { label: "Gewerbekunden", href: "/gewerbekunden" },
            ...(serviceTitle && slug
              ? [{ label: serviceTitle, href: `/gewerbekunden/${slug}` }]
              : []),
          ]}
        />
      </div>
      <div className="shell outdoor-hero__grid">
        <div className="outdoor-hero__copy">
          <p className="index-label">KLOTZ / {audience}</p>
          <h1 id="business-title">
            {title}
            <em>{accent}</em>
          </h1>
          <p className="outdoor-hero__lead">{lead}</p>
          <div className="outdoor-actions">
            <ButtonLink href={request}>{cta}</ButtonLink>
            <a
              className="editorial-link"
              href={slug ? "#leistungsumfang" : "#branchen"}
            >
              Leistungen entdecken <span aria-hidden="true">↘</span>
            </a>
          </div>
          <p className="outdoor-hero__local">
            Beratung · Aufmaß · Montage · Service
            <br />
            Merseburg, Halle (Saale), Leipzig & Saalekreis
          </p>
        </div>
        <figure className="outdoor-hero__figure">
          <ServiceMedia media={media} priority />
          <figcaption>{media.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function BusinessBenefits({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <section
      className="shell outdoor-benefits business-benefits"
      aria-label="Worauf es bei Ihrem Auftrag ankommt"
    >
      {items.map((b, i) => (
        <div key={b.title}>
          <span className="outdoor-index" aria-hidden="true">
            0{i + 1}
          </span>
          <h2>{b.title}</h2>
          <p>{b.text}</p>
        </div>
      ))}
    </section>
  );
}

export function BusinessFaq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section
      className="shell outdoor-section outdoor-faq business-faq"
      aria-labelledby="business-faq"
    >
      <div>
        <p className="index-label">Fragen vor dem ersten Gespräch</p>
        <h2 id="business-faq">
          Gut vorbereitet.
          <br />
          <em>Gemeinsam weiter.</em>
        </h2>
        <p>
          Eine erste Orientierung für Ihr Objekt. Die konkrete Ausführung und
          den Umfang besprechen wir persönlich.
        </p>
      </div>
      <div>
        {items.map((f) => (
          <details key={f.question}>
            <summary>
              {f.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function BusinessProcess({
  items,
}: {
  items: BusinessPageContent["process"];
}) {
  return (
    <section className="business-process" aria-labelledby="business-process">
      <div className="shell outdoor-section">
        <div className="business-section-heading">
          <div>
            <p className="index-label">
              Zusammenarbeit / Vom Anliegen bis zur Abnahme
            </p>
            <h2 id="business-process">
              Klar im Gespräch.
              <br />
              <em>Konkret im Auftrag.</em>
            </h2>
          </div>
          <p>
            Der genaue Ablauf richtet sich nach Ihrem Objekt und der
            vereinbarten Leistung. Diese Schritte geben der Abstimmung eine
            Richtung.
          </p>
        </div>
        <ol>
          {items.map((s, i) => (
            <li key={s.title}>
              <span className="business-step" aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <p className="business-process__result">{s.result}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function BusinessCards({
  pages,
  compact = false,
}: {
  pages: BusinessServiceContent[];
  compact?: boolean;
}) {
  return (
    <div
      className={`business-sector-cards${compact ? " business-sector-cards--compact" : ""}`}
    >
      {pages.map((p, i) => (
        <article
          className="business-sector-card"
          key={p.slug}
          id={compact ? undefined : p.slug}
        >
          <Link
            className="business-sector-card__image"
            href={`/gewerbekunden/${p.slug}`}
            aria-label={`${p.title}: Leistungen entdecken`}
          >
            <ServiceMedia media={p.media} />
            <span aria-hidden="true">0{i + 1} / ↗</span>
          </Link>
          <div className="business-sector-card__copy">
            <p className="index-label">{p.audience}</p>
            <h3>
              <Link href={`/gewerbekunden/${p.slug}`}>{p.title}</Link>
            </h3>
            <p>{p.overview}</p>
            {!compact && (
              <ul>
                {p.variants.map((v) => (
                  <li key={v.title}>{v.title}</li>
                ))}
              </ul>
            )}
            <Link className="editorial-link" href={`/gewerbekunden/${p.slug}`}>
              Leistungen & Zusammenarbeit <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function BusinessContact({
  site,
  request,
  title,
  text,
}: {
  site: SiteSettings;
  request: string;
  title: string;
  text: string;
}) {
  return (
    <>
      <section
        className="outdoor-contact business-contact"
        aria-labelledby="business-contact"
      >
        <div className="shell">
          <div>
            <p className="index-label">
              Ihr nächster Schritt / KLOTZ in Merseburg
            </p>
            <h2 id="business-contact">
              {title}
              <br />
              <em>Lassen Sie uns sprechen.</em>
            </h2>
            <p>{text}</p>
            <div className="outdoor-actions">
              <ButtonLink href={request} variant="light">
                Anfrage vorbereiten
              </ButtonLink>
              <a className="editorial-link" href={`mailto:${site.email}`}>
                Per E-Mail Kontakt aufnehmen <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="outdoor-contact__call">
            <p>Direkter Kontakt für Ihr Vorhaben</p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <p>{site.openingHours.display}</p>
            <address>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}-
              {site.address.district}
            </address>
            <Link className="editorial-link" href="/kontakt">
              Anfahrt & Beratung <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <div className="shell outdoor-editorial-note">
        <p>
          Präsentationsentwurf zur Abstimmung mit KLOTZ · Produktbilder
          veranschaulichen mögliche Ausführungen. Das Anfrageformular versendet
          und speichert noch keine Daten.
        </p>
      </div>
    </>
  );
}
