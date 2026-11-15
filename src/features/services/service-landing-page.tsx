import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import type { Article, SiteSettings } from "@/domain/content/types";
import type { ServicePageContent } from "@/domain/content/service-page";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceMedia } from "./service-media";
import "@/styles/terrace-service.css";

export type ServicePageContext = {
  label: string;
  href: string;
  overviewLabel: string;
  closingTitle: string;
  closingAccent: string;
  closingText: string;
  archive: { href: string; label: string; title: string; text: string };
};
export function ServiceLandingPage({
  content,
  site,
  related,
  context,
  guide,
  gallery,
}: {
  content: ServicePageContent;
  site: SiteSettings;
  related: ServicePageContent[];
  context: ServicePageContext;
  guide?: Article;
  gallery?: ReactNode;
}) {
  const requestHref = `/projekt-anfragen?leistung=${content.slug}`;
  return (
    <main
      id="main-content"
      className={`outdoor-service outdoor-service--${content.slug}`}
    >
      <section className="outdoor-hero" aria-labelledby="service-title">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: context.label, href: context.href },
              {
                label: content.title,
                href: `${context.href}/${content.slug}`,
              },
            ]}
          />
        </div>
        <div className="shell outdoor-hero__grid">
          <div className="outdoor-hero__copy">
            <p className="index-label">KLOTZ / {content.title} aus Merseburg</p>
            <h1 id="service-title">
              {content.hero.title}
              <em>{content.hero.accent}</em>
            </h1>
            <p className="outdoor-hero__lead">{content.hero.lead}</p>
            <div className="outdoor-actions">
              <ButtonLink href={requestHref}>{content.hero.cta}</ButtonLink>
              <a className="editorial-link" href="#moeglichkeiten">
                Möglichkeiten entdecken <span aria-hidden="true">↘</span>
              </a>
            </div>
            <p className="outdoor-hero__local">
              Beratung · Aufmaß · Montage
              <br />
              Merseburg, Halle (Saale), Leipzig & Region
            </p>
          </div>
          <figure className="outdoor-hero__figure">
            <ServiceMedia media={content.media} priority />
            <figcaption>
              {content.media.caption}
              {gallery ? (
                <a className="outdoor-gallery-shortcut" href="#bilder">
                  Zur Bildergalerie <span aria-hidden="true">↘</span>
                </a>
              ) : null}
            </figcaption>
          </figure>
        </div>
      </section>
      <section
        className="shell outdoor-benefits"
        aria-label={`Ihre Möglichkeiten mit ${content.title}`}
      >
        {content.benefits.map((benefit, i) => (
          <div key={benefit.title}>
            <span className="outdoor-index" aria-hidden="true">
              0{i + 1}
            </span>
            <h2>{benefit.title}</h2>
            <p>{benefit.text}</p>
          </div>
        ))}
      </section>
      <section
        className="shell outdoor-section outdoor-story"
        aria-labelledby="story-title"
      >
        <div>
          <p className="index-label">01 / Eine Lösung für Ihren Alltag</p>
          <h2 id="story-title">{content.story.title}</h2>
        </div>
        <div className="outdoor-copy">
          {content.story.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      <section
        className="outdoor-options"
        id="moeglichkeiten"
        aria-labelledby="options-title"
      >
        <div className="shell outdoor-section">
          <div className="outdoor-section-heading">
            <p className="index-label">02 / Ihre Gestaltungsmöglichkeiten</p>
            <h2 id="options-title">
              Welche Idee
              <br />
              <em>passt zu Ihnen?</em>
            </h2>
          </div>
          <div className="outdoor-options__grid">
            {content.variants.map((variant, i) => (
              <article key={variant.title}>
                <span className="outdoor-index" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{variant.title}</h3>
                <p>{variant.description}</p>
                <p className="outdoor-options__suitable">{variant.suitable}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="shell outdoor-section outdoor-detail"
        aria-labelledby="detail-title"
      >
        <figure>
          <Image
            src={content.detail.image.src}
            alt={content.detail.image.alt}
            width={content.detail.image.width}
            height={content.detail.image.height}
            sizes="(max-width: 760px) calc(100vw - 40px), 50vw"
          />
          <figcaption>{content.detail.caption}</figcaption>
        </figure>
        <div>
          <p className="index-label">03 / Gut durchdacht</p>
          <h2 id="detail-title">{content.detail.title}</h2>
          <div className="outdoor-copy">
            {content.detail.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ButtonLink href={requestHref} variant="secondary">
            Meine Wünsche besprechen
          </ButtonLink>
        </div>
      </section>
      {gallery}
      <section className="outdoor-planning" aria-labelledby="planning-title">
        <div className="shell outdoor-section">
          <div className="outdoor-section-heading">
            <p className="index-label">04 / Aus der Idee wird ein Vorhaben</p>
            <h2 id="planning-title">
              Damit es später
              <br />
              <em>einfach passt.</em>
            </h2>
          </div>
          <ol>
            {content.planning.map((item, i) => (
              <li key={item.title}>
                <span className="outdoor-index" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="outdoor-planning__note">
            <h3>Persönlich begleitet. Von Anfang an.</h3>
            <p>
              KLOTZ verbindet Beratung, Aufmaß, Angebot und die vereinbarte
              Montage bis zur Abnahme. In Merseburg-Meuschau können Sie Ihre
              Vorstellungen persönlich besprechen. Fragen zu späterer Wartung
              und Instandsetzung haben ebenfalls einen Ansprechpartner.
            </p>
            <Link className="editorial-link" href="/unternehmen">
              KLOTZ kennenlernen <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="shell outdoor-section outdoor-budget"
        aria-labelledby="budget-title"
      >
        <div>
          <p className="index-label">05 / Ihr Angebot mit Überblick</p>
          <h2 id="budget-title">
            Was kostet
            <br />
            <em>Ihre Idee?</em>
          </h2>
          <div className="outdoor-copy">
            <p>{content.costs.lead}</p>
          </div>
        </div>
        <div className="outdoor-budget__card">
          <p className="index-label">Diese Punkte bestimmen den Umfang</p>
          <ul>
            {content.costs.factors.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p>
            Für den Einstieg helfen Fotos, ungefähre Maße und der Projektort.
            Das konkrete Aufmaß bildet die Grundlage für Ihr Angebot.
          </p>
          <ButtonLink href={requestHref}>Mein Vorhaben anfragen</ButtonLink>
          {content.offerSlug ? (
            <Link
              className="editorial-link"
              href={`/angebote/${content.offerSlug}`}
            >
              Preisbeispiele & Ausführungen <span aria-hidden="true">↗</span>
            </Link>
          ) : null}
        </div>
      </section>
      <section className="outdoor-showroom" aria-labelledby="showroom-title">
        <div className="shell outdoor-showroom__grid">
          <div>
            <p className="index-label">06 / Beratung in Ihrer Nähe</p>
            <h2 id="showroom-title">
              Lernen wir Ihre
              <br />
              <em>Idee kennen.</em>
            </h2>
            <p>
              Am Telefon, in der Ausstellung oder beim vereinbarten Termin:
              Besprechen Sie mit KLOTZ, was Ihnen bei {content.title} wichtig
              ist. Von Merseburg-Meuschau aus begleiten wir Vorhaben in
              Merseburg, Halle (Saale), Leipzig und der Region.
            </p>
            <a
              className="editorial-link"
              href={site.showroomTourUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Virtuellen Rundgang öffnen{" "}
              <span className="outdoor-sr-only"> (neues Fenster)</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <aside>
            <p className="index-label">KLOTZ / Beratung & Ausstellung</p>
            <address>
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}-
              {site.address.district}
            </address>
            <p>{site.openingHours.display}</p>
            <a className="outdoor-phone" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <ButtonLink href="/kontakt" variant="light">
              Besuch abstimmen
            </ButtonLink>
          </aside>
        </div>
      </section>
      <section
        className="shell outdoor-section outdoor-faq"
        aria-labelledby="faq-title"
      >
        <div>
          <p className="index-label">07 / Ihre Fragen vor der Entscheidung</p>
          <h2 id="faq-title">
            Wissen, worauf
            <br />
            <em>es ankommt.</em>
          </h2>
          <p>
            Antworten rund um {content.title} – als Einstieg in Ihr persönliches
            Beratungsgespräch.
          </p>
        </div>
        <div>
          {content.faq.map((item, i) => (
            <details key={item.question} id={`service-frage-${i + 1}`}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section
        className="shell outdoor-related"
        aria-labelledby="related-title"
      >
        <div className="outdoor-related__heading">
          <div>
            <p className="index-label">08 / Das Ganze im Blick</p>
            <h2 id="related-title">
              So lässt sich
              <br />
              <em>weiterdenken.</em>
            </h2>
          </div>
          <Link className="editorial-link" href={context.href}>
            {context.overviewLabel} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="outdoor-related__grid">
          {related.map((item) => (
            <article key={item.slug}>
              <Link
                className="outdoor-related__image"
                href={`${context.href}/${item.slug}`}
                aria-label={item.title}
              >
                <ServiceMedia
                  media={item.media}
                  sizes="(max-width: 620px) calc(100vw - 40px), 30vw"
                />
              </Link>
              <h3>
                <Link href={`${context.href}/${item.slug}`}>{item.title}</Link>
              </h3>
              <p>{item.benefits[0]?.text}</p>
              <Link
                className="editorial-link"
                href={`${context.href}/${item.slug}`}
              >
                Mehr entdecken <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="outdoor-reading">
          {guide ? (
            <Link href={guide.href}>
              <span className="index-label">
                Ratgeber / {guide.readingTime}
              </span>
              <h3>
                {guide.title}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{guide.excerpt}</p>
            </Link>
          ) : null}
          <Link href={context.archive.href}>
            <span className="index-label">{context.archive.label}</span>
            <h3>
              {context.archive.title}
              <span aria-hidden="true">↗</span>
            </h3>
            <p>{context.archive.text}</p>
          </Link>
        </div>
      </section>
      <section className="outdoor-contact" aria-labelledby="contact-title">
        <div className="shell">
          <div>
            <p className="index-label">Der nächste Schritt ist ein Gespräch</p>
            <h2 id="contact-title">
              {context.closingTitle}
              <br />
              <em>{context.closingAccent}</em>
            </h2>
            <p>{context.closingText}</p>
            <div className="outdoor-actions">
              <ButtonLink href={requestHref} variant="light">
                {content.hero.cta}
              </ButtonLink>
              <a
                className="editorial-link"
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Per WhatsApp besprechen
                <span className="outdoor-sr-only"> (neues Fenster)</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="outdoor-contact__call">
            <p>Direkt miteinander sprechen</p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <p>{site.openingHours.display}</p>
          </div>
        </div>
      </section>
      <div className="shell outdoor-editorial-note">
        <p>
          Präsentationsentwurf zur Abstimmung mit KLOTZ · Abbildungen zeigen
          Gestaltungsbeispiele. Das Anfrageformular versendet und speichert noch
          keine Daten.
        </p>
      </div>
    </main>
  );
}
