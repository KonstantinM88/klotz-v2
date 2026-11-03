import Image from "next/image";
import Link from "next/link";
import type { OfferPageContent } from "@/domain/content/offers";
import type { SiteSettings } from "@/domain/content/types";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { OfferContact, OfferPreviewNotice } from "./offer-parts";

export function OffersIndex({
  offers,
  site,
}: {
  offers: OfferPageContent[];
  site: SiteSettings;
}) {
  return (
    <main id="main-content" className="offers-page">
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
                Mehr Raum draußen, ein neuer Zugang oder die Modernisierung
                Ihres Hauses: Entdecken Sie fünf Angebotsideen aus den
                KLOTZ-Aktionsflyern.
              </p>
              <p>
                Jede Themenseite erklärt die Preisbeispiele, die wichtigsten
                Planungsfragen und den Weg zu einem individuellen Angebot für
                Merseburg und Umgebung.
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
            <p>
              Produkt verstehen. Bedingungen vergleichen. Persönlich planen.
            </p>
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
                          : "Preisbeispiele · zzgl. Montage"}
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
            Gestaltungsbeispiele auf Basis der KLOTZ-Materialien. Abbildungen
            dienen der Veranschaulichung; die konkrete Ausführung wird
            individuell abgestimmt.
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
              Ein Einstiegspreis ist hilfreich, wenn klar ist, worauf er sich
              bezieht. Größe, Material, Ausstattung und die Situation vor Ort
              bestimmen den Leistungsumfang. Die Preisbeispiele auf diesen
              Seiten ersetzen deshalb keine persönliche Kalkulation.
            </p>
            <p>
              Notieren Sie Ihren Projektort, ungefähre Maße und die gewünschte
              Nutzung. Fragen Sie nach Montage, Vorarbeiten und möglichen
              Anschlüssen. So lassen sich Angebote mit vergleichbarem Umfang
              gegenüberstellen.
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
