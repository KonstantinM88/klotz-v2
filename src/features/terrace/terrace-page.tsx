import Image from "next/image";
import Link from "next/link";
import type { Article, Project, SiteSettings } from "@/domain/content/types";
import type { TerracePageContent } from "@/domain/content/terrace";
import { Breadcrumbs } from "@/components/sections/page-parts";
import { ButtonLink } from "@/components/ui/button-link";
import { JsonLd } from "@/components/seo/json-ld";
import { terraceStructuredData } from "./structured-data";
import { ServiceMedia } from "./service-media";
import { TerracePhotoGallery } from "./terrace-photo-gallery";
import "@/styles/terrace.css";

const requestHref = "/projekt-anfragen?bereich=terrasse-garten";

function SectionHeading({
  number,
  label,
  title,
  accent,
  lead,
}: {
  number: string;
  label: string;
  title: string;
  accent?: string;
  lead?: string;
}) {
  return (
    <div className="terrace-heading" data-reveal>
      <p className="index-label">
        {number} / {label}
      </p>
      <div>
        <h2>
          {title}
          {accent ? (
            <>
              {" "}
              <em>{accent}</em>
            </>
          ) : null}
        </h2>
        {lead ? <p>{lead}</p> : null}
      </div>
    </div>
  );
}

export function TerracePage({
  content,
  site,
  projects,
  articles,
}: {
  content: TerracePageContent;
  site: SiteSettings;
  projects: Project[];
  articles: Article[];
}) {
  return (
    <main id="main-content" className="terrace-page">
      <JsonLd data={terraceStructuredData(content)} />
      <section className="terrace-hero" aria-labelledby="terrace-title">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Terrasse & Garten", href: "/terrasse-garten" }]}
          />
        </div>
        <div className="shell terrace-hero__grid">
          <div className="terrace-hero__copy">
            <p className="index-label">KLOTZ / Outdoor Living aus Merseburg</p>
            <h1 id="terrace-title">
              {content.hero.title}
              <br />
              <em>{content.hero.accent}</em>
            </h1>
            <p className="terrace-hero__lead">{content.hero.lead}</p>
            <div className="terrace-actions">
              <ButtonLink href={requestHref}>Meine Terrasse planen</ButtonLink>
              <a className="editorial-link" href="#loesungen">
                Lösungen entdecken <span aria-hidden="true">↘</span>
              </a>
            </div>
            <p className="terrace-hero__location">
              Beratung · Aufmaß · Montage
              <br />
              Merseburg · Halle (Saale) · Leipzig & Region
            </p>
          </div>
          <figure className="terrace-hero__figure">
            <div className="terrace-hero__image">
              <Image
                src={content.hero.image.src}
                alt={content.hero.image.alt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 760px) calc(100vw - 40px), 45vw"
              />
              <span className="terrace-hero__image-label">
                Licht. Luft. Lieblingsplatz.
              </span>
            </div>
            <figcaption>
              Lamellendach · Aufnahme aus der KLOTZ-Galerie
            </figcaption>
          </figure>
        </div>
      </section>

      <div
        className="shell terrace-trust"
        aria-label="Persönliche Projektbegleitung"
      >
        {[
          "Beratung in Meuschau",
          "Aufmaß vor Ort",
          "Eigenes Montageteam",
          "Wartung & Instandsetzung",
        ].map((item, i) => (
          <p key={item}>
            <span aria-hidden="true">0{i + 1}</span>
            {item}
          </p>
        ))}
      </div>

      <section
        className="shell terrace-section"
        id="loesungen"
        aria-labelledby="solutions-title"
      >
        <div className="terrace-introduction" data-reveal>
          <p className="index-label">01 / Ihre Möglichkeiten</p>
          <div>
            <h2 id="solutions-title">
              Ein Garten.
              <br />
              <em>Viele Möglichkeiten.</em>
            </h2>
            <p>{content.introduction}</p>
          </div>
        </div>
        <div className="terrace-solutions">
          {content.solutions.map((solution, i) => (
            <article
              className="terrace-solution"
              key={solution.id}
              id={solution.id}
            >
              <div className="terrace-solution__visual">
                <Link
                  className="terrace-solution__image-link"
                  href={solution.href}
                  aria-label={`${solution.title} entdecken`}
                >
                  <ServiceMedia
                    media={
                      solution.media ?? {
                        image: solution.image,
                        caption: solution.title,
                      }
                    }
                    sizes="(max-width: 760px) calc(100vw - 40px), 45vw"
                  />
                </Link>
                <span aria-hidden="true">0{i + 1} / ↗</span>
              </div>
              <div className="terrace-solution__body">
                <p className="terrace-solution__benefit">{solution.benefit}</p>
                <h3>
                  <Link href={solution.href}>{solution.title}</Link>
                </h3>
                <p>{solution.description}</p>
                <p className="terrace-solution__note">
                  {solution.considerations}
                </p>
                <Link className="editorial-link" href={solution.href}>
                  Lösung kennenlernen <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="terrace-caption">
          Fotos und Produktabbildungen aus dem KLOTZ-Archiv. Ausführungen als
          Gestaltungsbeispiele.
        </p>
      </section>

      <TerracePhotoGallery content={content.gallery} />
      <section
        className="terrace-choice"
        id="vergleich"
        aria-labelledby="choice-title"
      >
        <div className="shell terrace-section">
          <SectionHeading
            number="02"
            label="Die passende Richtung"
            title="Was soll Ihr neuer"
            accent="Lieblingsplatz können?"
            lead="Beginnen Sie mit Ihrem Alltag. Die passende Konstruktion folgt daraus – und aus den Möglichkeiten vor Ort."
          />
          <h3 id="choice-title" className="visually-hidden">
            Lösungen nach gewünschter Nutzung vergleichen
          </h3>
          <div className="terrace-comparison">
            <div className="terrace-comparison__labels" aria-hidden="true">
              <span>Ihr Wunsch</span>
              <span>Mögliche Lösung</span>
              <span>Bei der Planung wichtig</span>
            </div>
            {content.comparison.map((row, i) => (
              <div className="terrace-comparison__row" key={row.wish}>
                <h3>
                  <span aria-hidden="true">0{i + 1}</span>
                  {row.wish}
                </h3>
                <Link href={row.href}>
                  {row.solution}
                  <span aria-hidden="true">↗</span>
                </Link>
                <p>{row.consideration}</p>
              </div>
            ))}
          </div>
          <div className="terrace-choice__footer">
            <p>
              Sie müssen sich noch nicht festlegen. Ein Gespräch hilft, die
              Möglichkeiten für Ihr Haus einzugrenzen.
            </p>
            <ButtonLink href={requestHref} variant="light">
              Mein Vorhaben besprechen
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        className="shell terrace-section"
        aria-label="Planung und Beispiele"
      >
        <SectionHeading
          number="03"
          label="Auf die Details kommt es an"
          title="Gut geplant."
          accent="Jeden Tag spürbar."
          lead="Ein Dach ist Teil Ihres Hauses. Deshalb betrachten wir die Konstruktion, den Standort und Ihre späteren Wünsche zusammen."
        />
        <div className="terrace-planning">
          {content.planning.map((item, i) => (
            <div key={item.title}>
              <span className="terrace-number" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="terrace-gallery__heading">
          <h3>So unterschiedlich kann draußen aussehen.</h3>
          <Link className="editorial-link" href="/referenzen">
            Zum KLOTZ-Bildarchiv <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="terrace-gallery">
          {projects.map((project) => (
            <Link
              className="terrace-project"
              href={project.href}
              key={project.id}
            >
              <div className="terrace-project__image">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 760px) calc(100vw - 40px), 45vw"
                />
              </div>
              <div>
                <p>KLOTZ-Galerie / {project.region ?? project.category}</p>
                <h3>
                  {project.title}
                  <span aria-hidden="true">↗</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <p className="terrace-caption">
          Einblicke aus den veröffentlichten KLOTZ-Galerien. Weitere Angaben zur
          jeweiligen Ausführung finden Sie auf der Detailseite.
        </p>
      </section>

      <section className="terrace-costs" aria-labelledby="costs-title">
        <div className="shell terrace-section">
          <div className="terrace-costs__intro">
            <div>
              <p className="index-label">04 / Budget mit Überblick</p>
              <h2 id="costs-title">
                Was kostet Ihr
                <br />
                <em>Platz im Freien?</em>
              </h2>
            </div>
            <div>
              <p>
                Ein Produktpreis allein beschreibt noch kein fertiges Projekt.
                Für einen aussagekräftigen Vergleich zählen die passende
                Ausführung und alle vereinbarten Arbeiten.
              </p>
              <p>
                Das konkrete Angebot entsteht nach Klärung Ihrer Wünsche und der
                Einbausituation. So sehen Sie, welche Leistungen enthalten sind
                und welche Vorarbeiten zusätzlich anfallen.
              </p>
              <Link
                className="editorial-link"
                href="/wissen/was-kostet-eine-terrassenueberdachung"
              >
                Kosten verständlich erklärt <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="terrace-costs__factors">
            {content.costs.map((item, i) => (
              <div key={item.title}>
                <span className="terrace-number" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="terrace-costs__offers">
            <p>Sie möchten erste Preisbeispiele einordnen?</p>
            <Link href="/angebote/lamellendaecher-pergolen">
              Lamellendach & Pergola <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/angebote/terrassendach-carport">
              Terrassendach & Carport <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="shell terrace-section terrace-showroom"
        aria-labelledby="showroom-title"
      >
        <div className="terrace-showroom__intro">
          <p className="index-label">05 / Persönlich in Meuschau</p>
          <h2 id="showroom-title">
            Besser entscheiden.
            <br />
            <em>Im Gespräch vor Ort.</em>
          </h2>
          <p>
            Auf einem Bildschirm beginnt eine Idee. Im persönlichen Gespräch
            wird sie konkreter. Besuchen Sie die KLOTZ-Ausstellung in
            Merseburg-Meuschau und besprechen Sie Materialien, Farben und die
            Möglichkeiten für Ihr Zuhause.
          </p>
          <p>
            Von hier betreut KLOTZ Vorhaben in Merseburg, Halle (Saale), Leipzig
            und der Region. Stimmen Sie Ihren Besuch und die für Sie
            interessanten Ausstellungsbereiche am besten vorab ab.
          </p>
          <a
            className="editorial-link"
            href={site.showroomTourUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Virtuellen Rundgang öffnen{" "}
            <span className="visually-hidden"> (neues Fenster)</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <aside
          className="terrace-showroom__card"
          aria-label="Adresse und Besuch der KLOTZ-Ausstellung"
        >
          <span className="terrace-showroom__mark" aria-hidden="true">
            K.
          </span>
          <p className="index-label">Beratung & Ausstellung</p>
          <h3>
            KLOTZ in
            <br />
            Merseburg-Meuschau
          </h3>
          <address>
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </address>
          <p>{site.openingHours.display}</p>
          <a className="terrace-showroom__phone" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <ButtonLink href="/kontakt" variant="light">
            Besuch abstimmen
          </ButtonLink>
        </aside>
      </section>

      <section className="terrace-process" aria-labelledby="process-title">
        <div className="shell terrace-section">
          <p className="index-label">06 / Von der Idee zur Terrasse</p>
          <h2 id="process-title">
            Ein Ansprechpartner.
            <br />
            <em>Ein klarer Weg.</em>
          </h2>
          <ol className="terrace-process__steps">
            {content.process.map((step, i) => (
              <li key={step.title}>
                <span className="terrace-number" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="terrace-preparation">
            <div>
              <h3>Das hilft beim ersten Gespräch.</h3>
              <p>
                Sie brauchen noch keine fertige Planung. Mit diesen Angaben
                lässt sich Ihr Vorhaben leichter einordnen.
              </p>
            </div>
            <ul>
              {content.preparation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="shell terrace-section terrace-faq"
        aria-labelledby="faq-title"
      >
        <div>
          <p className="index-label">07 / Gut zu wissen</p>
          <h2 id="faq-title">
            Ihre Fragen.
            <br />
            <em>Klare Antworten.</em>
          </h2>
          <p>
            Die wichtigsten Punkte für den Einstieg. Die konkrete Ausführung
            klären wir gemeinsam für Ihr Vorhaben.
          </p>
        </div>
        <div>
          {content.faq.map((item) => (
            <details key={item.id} id={`frage-${item.id}`}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <div className="terrace-faq__answer">
                <p>{item.answer}</p>
                <Link className="editorial-link" href={item.href}>
                  {item.linkLabel}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        className="shell terrace-reading"
        aria-labelledby="reading-title"
      >
        <div className="terrace-gallery__heading">
          <h2 id="reading-title">
            Vorfreude beginnt mit <em>guten Antworten.</em>
          </h2>
          <Link className="editorial-link" href="/wissen">
            Alle Ratgeber <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="terrace-reading__grid">
          {articles.map((article) => (
            <Link href={article.href} key={article.id}>
              <p>
                {article.topic} · {article.readingTime}
              </p>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className="editorial-link">
                Weiterlesen <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="terrace-contact" aria-labelledby="contact-title">
        <div className="shell terrace-contact__grid">
          <div>
            <p className="index-label">Ihr nächster Schritt</p>
            <h2 id="contact-title">
              Machen wir aus Ihrer Idee
              <br />
              <em>einen Lieblingsplatz.</em>
            </h2>
            <p>
              Erzählen Sie uns, wie Sie draußen leben möchten. Wir besprechen
              die passende Richtung für Ihr Haus, Ihren Garten und Ihr Vorhaben.
            </p>
            <div className="terrace-actions">
              <ButtonLink href={requestHref} variant="light">
                Meine Terrasse planen
              </ButtonLink>
              <a
                className="editorial-link"
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Per WhatsApp anfragen{" "}
                <span className="visually-hidden"> (neues Fenster)</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="terrace-contact__direct">
            <p>Lieber persönlich sprechen?</p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <p>{site.openingHours.display}</p>
            <Link className="editorial-link" href="/kontakt">
              Kontakt & Anfahrt <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <div className="shell terrace-editorial-note">
        <p>
          Präsentationsentwurf · Inhalte zur Abstimmung mit KLOTZ. Das
          Anfrageformular versendet und speichert noch keine Daten.
        </p>
      </div>
    </main>
  );
}
