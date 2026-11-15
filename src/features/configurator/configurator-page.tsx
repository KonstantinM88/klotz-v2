import Link from "next/link";
import type { ConfiguratorPageContent } from "@/domain/content/configurator";
import type { SiteSettings } from "@/domain/content/types";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceMedia } from "@/features/services/service-media";
import { DoorConfigurator } from "./door-configurator";
import type { ManufacturerDoorCatalog } from "@/domain/configurator/door-catalog";
import { EnergyCalculator } from "./energy-calculator";
import "@/styles/configurator.css";

export function ConfiguratorPage({
  content,
  site,
  catalog,
}: {
  content: ConfiguratorPageContent;
  site: SiteSettings;
  catalog: ManufacturerDoorCatalog;
}) {
  return (
    <main className="configurator-page" id="main-content">
      <section
        className="configurator-hero"
        aria-labelledby="configurator-title"
      >
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Konfigurator", href: "/konfigurator" }]}
          />
        </div>
        <div className="shell configurator-hero__grid">
          <div className="configurator-hero__copy">
            <p className="eyebrow">
              <span />
              Konfigurator & Energiesparrechner
            </p>
            <h1 id="configurator-title">
              {content.hero.title}
              <em>{content.hero.accent}</em>
            </h1>
            <p className="configurator-hero__lead">{content.hero.lead}</p>
            <div className="configurator-hero__actions">
              <a href="#haustuer" className="button button--primary">
                Haustür gestalten <span aria-hidden="true">↘</span>
              </a>
              <a href="#energiesparrechner" className="editorial-link">
                Fensterpotenzial berechnen <span aria-hidden="true">↘</span>
              </a>
            </div>
            <p className="configurator-hero__local">
              Online vorbereiten. Persönlich weiterdenken.
              <br />
              Mit KLOTZ in Merseburg, Halle, Leipzig & im Saalekreis.
            </p>
          </div>
          <figure className="configurator-hero__media">
            <ServiceMedia
              media={content.hero.media}
              priority
              sizes="(max-width: 760px) calc(100vw - 40px), 45vw"
            />
            <figcaption>{content.hero.media.caption}</figcaption>
            <div className="configurator-hero__stamp" aria-hidden="true">
              Form.
              <br />
              Farbe.
              <br />
              <em>Ihr Gefühl.</em>
            </div>
          </figure>
        </div>
      </section>
      <nav
        className="shell configurator-tool-nav"
        aria-label="Planungswerkzeuge"
      >
        <a href="#haustuer">
          <span>01 / Gestalten</span>
          <strong>Ihr Türmodell & Maße</strong>
          <span aria-hidden="true">↘</span>
        </a>
        <a href="#energiesparrechner">
          <span>02 / Vergleichen</span>
          <strong>Ihr Fensterpotenzial</strong>
          <span aria-hidden="true">↘</span>
        </a>
      </nav>
      <noscript>
        <style>{`.configurator-interactive{display:none!important}`}</style>
        <div className="shell configurator-nojs">
          <p>
            Für die interaktive Modellauswahl und eigene Berechnungen benötigen
            Sie JavaScript. Informationen, Beispielvergleich und Beratung
            bleiben verfügbar.
          </p>
          <Link href="/projekt-anfragen?bereich=fenster-tueren">
            Vorhaben direkt besprechen ↗
          </Link>
          <a
            href={content.door.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vollständigen Haustürkonfigurator öffnen (externer Dienst, neuer
            Tab) ↗
          </a>
        </div>
      </noscript>
      <section
        id="haustuer"
        className="configurator-section shell"
        aria-labelledby="door-studio-title"
      >
        <div className="configurator-section__heading">
          <p className="index-label">01 / Haustür gestalten</p>
          <div>
            <h2 id="door-studio-title">
              {content.door.title}
              <em>{content.door.accent}</em>
            </h2>
            <p>{content.door.lead}</p>
          </div>
        </div>
        <DoorConfigurator content={content.door} catalog={catalog} />
        <div className="configurator-external">
          <div>
            <h3>Alle Details technisch abstimmen.</h3>
            <p>
              Glasaufbau, Beschläge, Verriegelung und Sonderprofile hängen vom
              gewählten Modell und System ab. Im technischen Vollmodus des
              Herstellers stehen diese Abhängigkeiten bereit. KLOTZ begleitet
              die anschließende Planung und Montage.
            </p>
          </div>
          <div>
            <a
              className="button button--secondary"
              href={content.door.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vollständigen Konfigurator öffnen{" "}
              <span aria-hidden="true">↗</span>
            </a>
            <small>Externer Dienst · öffnet einen neuen Tab</small>
          </div>
        </div>
        <div className="configurator-preparation">
          {content.door.preparation.map((item, i) => (
            <article key={item.title}>
              <span className="index-label" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="energiesparrechner"
        className="configurator-energy"
        aria-labelledby="energy-title"
      >
        <div className="shell">
          <div className="configurator-section__heading">
            <p className="index-label">02 / Fenster vergleichen</p>
            <div>
              <h2 id="energy-title">
                {content.energy.title}
                <em>{content.energy.accent}</em>
              </h2>
              <p>{content.energy.lead}</p>
            </div>
          </div>
          <EnergyCalculator content={content.energy} />
          <details className="configurator-method">
            <summary>
              So entsteht der Vergleich <span aria-hidden="true">+</span>
            </summary>
            <div className="configurator-method__grid">
              <div>
                <h3>Eine offene Rechnung.</h3>
                <p>
                  Wärmedifferenz pro Jahr = (Uw Bestand − Uw neu) ×
                  Fensterfläche × Gradtagzahl × 24 ÷ 1.000.
                </p>
                <p>
                  Uw in W/(m²·K), Fläche in m² und Gradtagzahl in K·d/a ergeben
                  kWh/a. Die 24 rechnet Tage in Stunden um. Die gleiche
                  Klimaannahme gilt für beide Fenster.
                </p>
                <p>
                  Die Wärmedifferenz wird durch den Nutzungsgrad der Heizung
                  geteilt; bei einer Wärmepumpe durch die Jahresarbeitszahl. Mit
                  Ihrem Arbeitspreis ergibt sich eine zugeordnete
                  Kostendifferenz. Grundpreise bleiben unberücksichtigt.
                </p>
              </div>
              <div>
                <h3>Was die Zahl einordnet.</h3>
                <p>{content.energy.scope}</p>
                <p>
                  Uw-Werte und die Start-Gradtagzahl stammen als Beispiele aus
                  dem bisherigen Rechner. Die Fläche ist ein frei gewähltes
                  Rechenbeispiel. JAZ und Nutzungsgrade sind Annahmen; ein
                  Gebäude- oder Produktnachweis entsteht daraus nicht.
                </p>
                <ul>
                  {content.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.label} <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </div>
      </section>
      <section
        className="shell configurator-section configurator-next"
        aria-labelledby="configurator-next-title"
      >
        <div className="configurator-section__heading">
          <p className="index-label">Von online zu vor Ort</p>
          <div>
            <h2 id="configurator-next-title">
              Gut vorbereitet.<em>Persönlich begleitet.</em>
            </h2>
            <p>
              Ein Rechner liefert Orientierung. Für eine Lösung, die zu Ihrem
              Haus passt, zählen auch Einbausituation, Materialien und
              fachgerechte Umsetzung. Genau hier setzt die Beratung mit KLOTZ
              an.
            </p>
          </div>
        </div>
        <ol className="configurator-process">
          {content.process.map((step, i) => (
            <li key={step.title}>
              <span aria-hidden="true">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="configurator-related">
          <Link href="/fenster-tueren/haustueren">
            Haustüren: Gestaltung & Montage <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/fenster-tueren/fenster">
            Fenster: Auswahl & Einbau <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/wissen/fenster-reparieren-oder-austauschen">
            Reparieren oder austauschen? <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section
        className="configurator-faq"
        aria-labelledby="configurator-faq-title"
      >
        <div className="shell configurator-faq__grid">
          <div>
            <p className="index-label">Gut zu wissen</p>
            <h2 id="configurator-faq-title">
              Ihre Fragen.<em>Klar beantwortet.</em>
            </h2>
            <p>Zum Gestalten, Rechnen und den nächsten Schritten.</p>
          </div>
          <div>
            {content.faq.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <div>
                  <p>{faq.answer}</p>
                  {faq.link && (
                    <Link href={faq.link.href}>{faq.link.label} ↗</Link>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section
        className="shell configurator-contact"
        aria-labelledby="configurator-contact-title"
      >
        <div>
          <p className="index-label">Ihr Projekt / KLOTZ Merseburg-Meuschau</p>
          <h2 id="configurator-contact-title">
            Ideen brauchen<em>ein gutes Gespräch.</em>
          </h2>
          <p>
            Sie möchten Materialien vergleichen, Ihren Eingang neu gestalten
            oder bestehende Fenster prüfen lassen? Bringen Sie Ihre Wünsche und
            Fragen mit. Wir besprechen die nächsten Schritte.
          </p>
          <div className="configurator-contact__actions">
            <ButtonLink href="/projekt-anfragen?bereich=fenster-tueren">
              Beratung vorbereiten
            </ButtonLink>
            <ButtonLink href="/kontakt" variant="secondary">
              Kontakt & Ausstellung
            </ButtonLink>
          </div>
        </div>
        <address>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city} /{" "}
            {site.address.district}
          </span>
          <span>{site.openingHours.display}</span>
        </address>
        <p className="configurator-demo">
          Persönliche Präsentationsversion. Modellauswahl und Rechnung dienen
          der Orientierung; Anfragen werden im Demo nicht versendet oder
          gespeichert. Redaktioneller Stand:{" "}
          {new Intl.DateTimeFormat("de-DE", {
            timeZone: "Europe/Berlin",
          }).format(new Date(content.reviewedAt))}
          .
        </p>
      </section>
    </main>
  );
}
