import Link from "next/link";
import type { OfferPageContent } from "@/domain/content/offers";
import type { SiteSettings } from "@/domain/content/types";
import { ButtonLink } from "@/components/ui/button-link";

export function OfferPreviewNotice() {
  return (
    <div className="offer-preview-note" role="note">
      <strong>Redaktionelle Vorschau · noch abzustimmen</strong>
      <p>
        Preise, Aktionszeitraum und Leistungsumfang werden vor der
        Veröffentlichung mit KLOTZ abgestimmt.
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
              Rufen Sie uns an, schreiben Sie per WhatsApp oder besuchen Sie
              unsere Musterausstellung in Merseburg-Meuschau. Von der Planung
              bis zum Einbau werden Sie aus einer Hand betreut.
            </p>
            <ul className="offer-contact__facts">
              <li>Innen- und Außenausstellung am Firmensitz</li>
              <li>13 Fachleute: Beratung, Technik und eigene Montage</li>
              <li>Aufmaß, Angebot, Montage und Bauabnahme aus einer Hand</li>
              <li>Wartung und Instandsetzung auch nach dem Einbau</li>
            </ul>
            <p className="offer-contact__areas">
              Für Sie im Einsatz: {site.serviceAreas.join(" · ")}
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
            <p className="offer-contact__hours">{site.openingHours.display}</p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <a
              href={site.whatsappHref}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {site.whatsappDisplay} (neuer Tab){" "}
              <span aria-hidden="true">↗</span>
            </a>
            <Link href="/kontakt" className="text-link">
              Kontakt & Anfahrt <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
