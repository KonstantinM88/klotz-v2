import Image from "next/image";
import Link from "next/link";
import type { OfferPageContent } from "@/domain/content/offers";
import type { SiteSettings } from "@/domain/content/types";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { ButtonLink } from "@/components/ui/button-link";
import { OfferContact, OfferPreviewNotice } from "./offer-parts";

const euro = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 });
const date = new Intl.DateTimeFormat("de-DE", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function OfferDetail({
  offer,
  otherOffers,
  site,
}: {
  offer: OfferPageContent;
  otherOffers: OfferPageContent[];
  site: SiteSettings;
}) {
  const sections = [
    {
      id: "preisbeispiele",
      title:
        offer.kind === "funding"
          ? "Förderhinweis einordnen"
          : "Preisbeispiele & Bedingungen",
    },
    ...offer.sections,
    { id: "vorbereitung", title: "Ihre Vorbereitung" },
    { id: "fragen", title: "Häufige Fragen" },
    { id: "quellen", title: "Quellen & Stand" },
  ];
  return (
    <main id="main-content" className="offers-page">
      <section className="offer-hero">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Angebote", href: "/angebote" },
              { label: offer.shortTitle, href: offer.href },
            ]}
          />
          <div className="offer-hero__grid">
            <div className="offer-hero__copy">
              <p className="eyebrow">
                <span />
                {offer.eyebrow} · Merseburg
              </p>
              <h1>{offer.title}</h1>
              <p className="offer-hero__lead">{offer.lead}</p>
              <div className="offer-answer">
                <p className="eyebrow">Auf einen Blick</p>
                <p>{offer.answer}</p>
              </div>
              <div className="offer-hero__actions">
                <ButtonLink href={`/projekt-anfragen?angebot=${offer.slug}`}>
                  Zu diesem Angebot anfragen
                </ButtonLink>
                <a href="#preisbeispiele" className="text-link">
                  {offer.kind === "funding"
                    ? "Förderung einordnen"
                    : "Preisbeispiele ansehen"}{" "}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <figure className="offer-poster">
              <Image
                src={offer.image.src}
                alt={offer.image.alt}
                width={offer.image.width}
                height={offer.image.height}
                priority
                fetchPriority="high"
                sizes="(max-width: 900px) 100vw, 38vw"
              />
              <figcaption>
                {offer.image.caption}
                <br />
                <a
                  href={offer.image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Motiv in voller Größe öffnen (neuer Tab){" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="shell offer-reading-layout">
        <aside className="offer-toc">
          <nav aria-label="Auf dieser Seite">
            <p className="eyebrow">Ihr Überblick</p>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <article className="offer-article" aria-label={offer.title}>
          {offer.status !== "verified" ? <OfferPreviewNotice /> : null}
          <section
            className="offer-price-section"
            id="preisbeispiele"
            aria-labelledby="offer-prices-title"
          >
            <p className="eyebrow">
              <span />
              {offer.sourcePriceDate}
            </p>
            <h2 id="offer-prices-title">
              {offer.kind === "funding"
                ? "Fördermöglichkeit verstehen."
                : "Preisbeispiele im Überblick."}
            </h2>
            {offer.kind === "products" ? (
              <>
                <dl className="offer-price-grid">
                  {offer.products.map((product) => (
                    <div className="offer-price-item" key={product.title}>
                      <dt>{product.title}</dt>
                      <dd className="offer-price-item__detail">
                        {product.detail ||
                          (product.unit === "lfm"
                            ? "Preis je laufendem Meter"
                            : product.unit === "Stück"
                              ? "Preis je Stück"
                              : "Paket laut Vorlage")}
                      </dd>
                      <dd className="offer-price-item__value">
                        ab {euro.format(product.fromPriceEUR)} €
                        {product.unit === "lfm" || product.unit === "m²"
                          ? `/${product.unit}`
                          : ""}
                        <span aria-hidden="true">*</span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="offer-price-conditions">
                  *Archivierte Preisbeispiele, keine bestätigten aktuellen
                  Angebotspreise. Montage nicht enthalten. Steuerangaben,
                  Lieferumfang, Vorarbeiten und Verfügbarkeit werden im
                  persönlichen Angebot geklärt.
                </p>
                {offer.validUntil ? (
                  <p className="offer-validity">
                    Laufzeit laut Vorlage: bis{" "}
                    <time dateTime={offer.validUntil}>
                      {date.format(new Date(`${offer.validUntil}T00:00:00Z`))}
                    </time>
                    . Aktuelle Gültigkeit bitte bestätigen lassen.
                  </p>
                ) : (
                  <p className="offer-validity">
                    Die Vorlage nennt für diese Beispiele keine separat
                    bestätigte Laufzeit.
                  </p>
                )}
              </>
            ) : (
              <div className="offer-funding-summary">
                <p>
                  <strong>15 %</strong>
                  <span>Grundförderung möglich</span>
                </p>
                <p>
                  Nur für förderfähige Maßnahmen und bei erfüllten
                  Voraussetzungen. Eine Förderung ist keine automatische
                  Preisermäßigung und keine Zusage von KLOTZ.
                </p>
                <a href="#quellen" className="text-link">
                  Offizielle Informationen prüfen{" "}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            )}
          </section>
          {offer.sections.map((section) => (
            <section
              className="offer-copy-section"
              id={section.id}
              key={section.id}
            >
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <section className="offer-checklist" id="vorbereitung">
            <p className="eyebrow">
              <span />
              Für das erste Gespräch
            </p>
            <h2>Das können Sie vorbereiten.</h2>
            <ul>
              {offer.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="offer-faq" id="fragen">
            <h2>
              {offer.kind === "funding"
                ? "Häufige Fragen zur Förderung."
                : "Häufige Fragen zum Angebot."}
            </h2>
            <div className="faq-list">
              {offer.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
          <section className="offer-sources" id="quellen">
            <h2>Quellen und redaktioneller Stand.</h2>
            <p>
              Redaktioneller Stand:{" "}
              <time dateTime={offer.updatedAt}>
                {date.format(new Date(`${offer.updatedAt}T00:00:00Z`))}
              </time>
              .
              {offer.status !== "verified"
                ? " Fachliche und kommerzielle Freigabe durch KLOTZ steht noch aus."
                : null}
            </p>
            <ul>
              {offer.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url}>
                    {source.title} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <p>
              Diese Orientierung ersetzt keine Prüfung Ihres Gebäudes oder
              Grundstücks. Ausführung und Bedingungen werden für Ihr Vorhaben
              abgestimmt.
            </p>
          </section>
          <section className="offer-related">
            <h2>Passende Lösungen und Wissen.</h2>
            <div className="link-grid">
              {offer.relatedLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>

      <section
        className="offer-other-themes"
        aria-labelledby="offer-other-title"
      >
        <div className="shell">
          <p className="eyebrow">
            <span />
            Weiterdenken
          </p>
          <h2 id="offer-other-title">Weitere Angebotsideen.</h2>
          <div className="offer-theme-links">
            {otherOffers.map((item) => (
              <Link href={item.href} key={item.id}>
                <span>{item.shortTitle}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <Link href="/angebote" className="text-link">
            Alle Angebote im Überblick <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <OfferContact site={site} offer={offer} />
    </main>
  );
}
