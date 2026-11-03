import Link from "next/link";
import type { OfferPageContent } from "@/domain/content/offers";
import type { SiteSettings } from "@/domain/content/types";
import { ButtonLink } from "@/components/ui/button-link";

export function OfferPreviewNotice() {
  return (
    <div className="offer-preview-note" role="note">
      <strong>Redaktionelle Vorschau · noch abzustimmen</strong>
      <p>
        Die Preisbeispiele stammen aus den Aktionsflyern 2026. Aktuelle Preise,
        Steuerangaben, Verfügbarkeit und Leistungsumfang sind vor einem Auftrag
        mit KLOTZ zu bestätigen.
      </p>
    </div>
  );
}

export function OfferContact({
  site,
  offer,
}: {
  site: SiteSettings;
  offer?: OfferPageContent;
}) {
  return (
    <section
      className="contact-panel offer-contact"
      aria-labelledby="offer-contact-title"
    >
      <div className="shell">
        <p className="eyebrow">
          <span />
          KLOTZ · Merseburg-Meuschau
        </p>
        <div className="offer-contact__grid">
          <div>
            <h2 id="offer-contact-title">
              Aus einer Idee
              <br />
              wird Ihr Projekt.
            </h2>
            <p>
              Besprechen Sie Ihr Vorhaben am Standort Merseburg-Meuschau.
              Projektort, Einbausituation und gewünschte Ausführung bilden die
              Grundlage für Ihr persönliches Angebot.
            </p>
            <p className="offer-contact__areas">
              {site.serviceAreas.join(" · ")}
            </p>
            <ButtonLink
              href={
                offer
                  ? `/projekt-anfragen?angebot=${offer.slug}`
                  : "/projekt-anfragen"
              }
            >
              {offer ? "Zu diesem Angebot anfragen" : "Projekt besprechen"}
            </ButtonLink>
          </div>
          <div className="offer-contact__address">
            <strong>{site.legalName}</strong>
            <address>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city} /{" "}
              {site.address.district}
            </address>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <Link href="/kontakt" className="text-link">
              Kontakt & Anfahrt <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
