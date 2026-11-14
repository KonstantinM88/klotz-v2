import Image from "next/image";
import Link from "next/link";
import type { OfferPageContent } from "@/domain/content/offers";
import type { SiteSettings } from "@/domain/content/types";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { JsonLd } from "@/components/seo/json-ld";
import { OfferContact, OfferPreviewNotice } from "./offer-parts";
import { offersIndexJsonLd } from "./offer-structured-data";

export function OffersIndex({
  offers,
  site,
}: {
  offers: OfferPageContent[];
  site: SiteSettings;
}) {
  return (
    <main id="main-content" className="offers-page">
      <JsonLd data={offersIndexJsonLd(offers, site)} />
      <section className="offers-intro">
        <div className="shell">
          <Breadcrumbs items={[{ label: "Angebote", href: "/angebote" }]} />
          <div className="offers-intro__grid">
            <div>
              <p className="eyebrow">
                <span />
                KLOTZ · Haus & Garten
              </p>
              <h1>
                Angebote für
                <br />
                <em>Ihr nächstes Projekt.</em>
              </h1>
            </div>
            <div className="offers-intro__copy">
              <p>
                Mehr Raum draußen, ein neuer Zaun oder neue Fenster: Entdecken
                Sie die aktuellen Angebote von KLOTZ mit Ab-Preisen für Haus und
                Garten.
              </p>
              <p>
                Jede Themenseite zeigt Preise, Planungstipps und den Weg zu
                Ihrem persönlichen Angebot – beraten in unserer Ausstellung in
                Merseburg-Meuschau, aufgemessen und montiert von unserem eigenen
                Team.
              </p>
              <a href="#angebote" className="text-link">
                Fünf Themen entdecken <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          {offers.some((offer) => offer.status !== "verified") ? (
            <OfferPreviewNotice />
          ) : null}
        </div>
      </section>

      <section
        className="offers-catalog"
        id="angebote"
        aria-labelledby="offers-catalog-title"
      >
        <div className="shell">
          <div className="offers-catalog__heading">
            <h2 id="offers-catalog-title">Was möchten Sie verändern?</h2>
            <p>Vergleichen. Im Original ansehen. Persönlich planen.</p>
          </div>
          <ul className="offers-grid">
            {offers.map((offer, index) => (
              <li
                key={offer.id}
                className={
                  offer.kind === "funding"
                    ? "offer-card offer-card--funding"
                    : "offer-card"
                }
              >
                <Link href={offer.href} className="offer-card__link">
                  <div className="offer-card__media">
                    <Image
                      src={offer.image.src}
                      alt={offer.image.alt}
                      width={offer.image.width}
                      height={offer.image.height}
                      sizes="(max-width: 760px) 100vw, (max-width: 1100px) 45vw, 24vw"
                    />
                  </div>
                  <div className="offer-card__copy">
                    <p className="eyebrow">
                      <span />0{index + 1} / {offer.eyebrow}
                    </p>
                    <h3>{offer.shortTitle}</h3>
                    <p>{offer.excerpt}</p>
                    <p className="offer-card__price">
                      {offer.priceSummary}
                      <small>
                        {offer.kind === "funding"
                          ? "Bedingungen individuell prüfen"
                          : "Ab-Preise · zzgl. Montage"}
                      </small>
                    </p>
                    <span className="offer-card__cta">
                      Angebot im Detail <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <p className="source-caption">
            Gestaltungsbeispiele. Ausführungen im Original sehen Sie in unserer
            Innen- und Außenausstellung in Merseburg-Meuschau.
          </p>
        </div>
      </section>

      <section className="offer-index-guide">
        <div className="shell editorial-grid">
          <div>
            <p className="eyebrow">
              <span />
              Gut vorbereitet
            </p>
            <h2>
              Ein Preis ist
              <br />
              der Anfang des Gesprächs.
            </h2>
          </div>
          <div className="content-copy">
            <p>
              Die Ab-Preise geben Ihnen eine erste Orientierung. Ihren
              verbindlichen Preis erhalten Sie nach dem Aufmaß vor Ort –
              inklusive Montage und allem, was für Ihr Projekt dazugehört.
            </p>
            <p>
              Von der Beratung bis zur Bauabnahme werden Sie bei KLOTZ aus einer
              Hand betreut: Fachberatung, Aufmaß, Angebot, Montage durch unsere
              eigenen Monteure und auf Wunsch Wartung und Instandsetzung. Für
              den Anfang genügen Projektort, ungefähre Maße und ein paar Fotos.
            </p>
            <Link
              href="/wissen/vom-aufmass-bis-zur-abnahme"
              className="text-link"
            >
              Vom Aufmaß bis zur Abnahme <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <OfferContact site={site} />
    </main>
  );
}
