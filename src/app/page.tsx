import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { ArticleCards } from "@/components/sections/page-parts";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { pageMetadata } from "@/lib/metadata";
import { trustFacts } from "@/content/trust";
import "@/styles/home-v2.css";

export const metadata = pageMetadata(
  "Bauelemente & Outdoor Living aus Merseburg",
  "Terrassenüberdachungen, Fenster, Türen, Zäune und Tore für Privatkunden und Unternehmen. Beratung, Aufmaß und Montage aus einer Hand – KLOTZ in Merseburg.",
  "/",
  "/images/glas-detail-1.webp",
);

const hubs = [
  {
    slug: "terrasse-garten",
    title: "Terrasse & Garten",
    claim: "Draußen zu Hause.",
    image: "/images/lamelle-detail-1.webp",
    alt: "Lamellendach über einer Terrasse mit Lounge-Möbeln",
  },
  {
    slug: "fenster-tueren",
    title: "Fenster & Türen",
    claim: "Das gute Gefühl, zu Hause zu sein.",
    image: "/images/building-entry-hero.webp",
    alt: "Graue Haustür mit langem Griff und seitlicher Verglasung im Klinkerhaus",
  },
  {
    slug: "zaun-tor",
    title: "Zaun & Tor",
    claim: "Ein schöner Rahmen. Ein guter Empfang.",
    image: "/images/boundary-gate-hero.webp",
    alt: "Zweiflügeliges anthrazitfarbenes Tor vor einem modernen Haus",
  },
];

// Cleaner single photo for the stadium reference tile (the archive image is a
// collage with lettering).
const projectImageOverride: Record<
  string,
  { src: string; alt: string; width: number; height: number }
> = {
  "einzaeunung-stadtstadion": {
    src: "/images/b2b/stadion-montage.webp",
    alt: "Monteure setzen Zaunpfosten am Stadtstadion Merseburg",
    width: 576,
    height: 652,
  },
};

const tools = [
  {
    href: "/konfigurator",
    title: "Haustür-Konfigurator",
    text: "Über 500 Varianten durchsuchen, Farbe und Form wählen – und die Wunschtür direkt in die Anfrage übernehmen.",
    label: "Tür konfigurieren",
  },
  {
    href: "/energiesparrechner",
    title: "Energiesparrechner",
    text: "Grob abschätzen, was neue Fenster beim Heizen bewirken können – als Einstieg ins Beratungsgespräch.",
    label: "Rechner öffnen",
  },
  {
    href: "/angebote",
    title: "Aktuelle Angebote",
    text: "Lamellendach, Zaun, Fenster, Terrassendach und Förderung – mit Ab-Preisen zur ersten Orientierung.",
    label: "Angebote ansehen",
  },
];

export default async function HomePage() {
  const [home, categories, projects, articles, steps, services, site] =
    await Promise.all([
      repository.getHomeContent(),
      repository.getServiceCategories(),
      repository.getFeaturedProjects(),
      repository.getFeaturedArticles(),
      repository.getProcessSteps(),
      repository.getServices(),
      repository.getSiteSettings(),
    ]);
  const business = categories.find((c) => c.slug === "gewerbekunden");
  return (
    <main id="main-content" className="atelier-home home-v2">
      <section className="hv-hero" aria-labelledby="hero-title">
        <Image
          src="/images/glas-detail-1.webp"
          alt="Verglaster Sitzbereich unter einer Terrassenüberdachung bei Abendlicht"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="hv-hero__image"
        />
        <div className="hv-hero__shade" />
        <div className="shell hv-hero__body">
          <p className="hv-kicker">
            KLOTZ · Merseburg-Meuschau · seit über 30 Jahren
          </p>
          <h1 id="hero-title">
            Bauelemente & Outdoor Living <em>aus Merseburg.</em>
          </h1>
          <p className="atelier-hero__lead hv-hero__lead">{home.heroLead}</p>
          <div className="hv-hero__actions">
            <ButtonLink href="/projekt-anfragen" variant="light">
              Projekt anfragen
            </ButtonLink>
            <Link className="hv-link hv-link--light" href="/referenzen">
              Referenzen ansehen <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <dl className="shell hv-hero__facts">
          {trustFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.value}</dt>
              <dd>{fact.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        className="shell hv-paths"
        id="entdecken"
        aria-labelledby="paths-title"
        data-reveal
      >
        <h2 id="paths-title" className="visually-hidden">
          Für wen wir arbeiten
        </h2>
        <Link className="hv-path" href="#leistungen">
          <Image
            src="/images/terrasse.webp"
            alt="Überdachte Terrasse an einem Einfamilienhaus"
            width={740}
            height={588}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <span className="hv-path__body">
            <span className="hv-path__eyebrow">Für Ihr Zuhause</span>
            <span className="hv-path__title">Privatkunden</span>
            <span className="hv-path__text">
              Terrasse, Fenster, Haustür, Zaun und Tor – geplant für Ihren
              Alltag, montiert vom eigenen Team.
            </span>
            <span className="hv-path__cta">
              Leistungen entdecken <span aria-hidden="true">↓</span>
            </span>
          </span>
        </Link>
        <Link className="hv-path hv-path--dark" href="/gewerbekunden">
          {business ? (
            <Image
              src={business.image.src}
              alt={business.image.alt}
              width={business.image.width}
              height={business.image.height}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          ) : null}
          <span className="hv-path__body">
            <span className="hv-path__eyebrow">Für Ihr Objekt</span>
            <span className="hv-path__title">Gewerbe & Wohnungswirtschaft</span>
            <span className="hv-path__text">
              Hausverwaltungen, Unternehmen, Hotels und Gastronomie:
              Bauelemente, Außenanlagen und Service mit eigener
              Ansprechpartnerin.
            </span>
            <span className="hv-path__cta">
              Zu den Gewerbekunden <span aria-hidden="true">↗</span>
            </span>
          </span>
        </Link>
      </section>

      <section
        className="hv-services"
        id="leistungen"
        aria-labelledby="services-title"
      >
        <div className="shell">
          <header className="hv-heading" data-reveal>
            <p className="hv-kicker hv-kicker--dark">Leistungen</p>
            <h2 id="services-title">
              Drei Bereiche. <em>Ein Ansprechpartner.</em>
            </h2>
            <p>{home.introCopy}</p>
          </header>
          <div className="hv-hubs">
            {hubs.map((hub, index) => {
              const items = services.filter((s) => s.category === hub.slug);
              return (
                <article className="hv-hub" key={hub.slug}>
                  <Link
                    className="hv-hub__media"
                    href={`/${hub.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Image
                      src={hub.image}
                      alt=""
                      width={900}
                      height={1100}
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                    <span className="hv-hub__index">0{index + 1}</span>
                  </Link>
                  <div className="hv-hub__body">
                    <h3>
                      <Link href={`/${hub.slug}`}>{hub.title}</Link>
                    </h3>
                    <p className="hv-hub__claim">{hub.claim}</p>
                    <ul>
                      {items.map((item) => (
                        <li key={item.slug}>
                          <Link href={`/${item.slug}`}>
                            {item.title} <span aria-hidden="true">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="hv-projects" aria-labelledby="projects-title">
        <div className="shell">
          <header className="hv-heading hv-heading--light" data-reveal>
            <p className="hv-kicker">Referenzen aus der Region</p>
            <h2 id="projects-title">
              Gebaut, nicht nur geplant. <em>Projekte von KLOTZ.</em>
            </h2>
            <p>{home.projectsLead}</p>
          </header>
          <div className="hv-projects__grid">
            {projects.slice(0, 4).map((project, index) => {
              const image = projectImageOverride[project.slug] ?? project.image;
              return (
                <Link
                  key={project.id}
                  href={project.href}
                  className={`hv-project hv-project--${index}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes={
                      index === 0
                        ? "(max-width: 900px) 100vw, 58vw"
                        : "(max-width: 900px) 100vw, 40vw"
                    }
                  />
                  <span className="hv-project__caption">
                    <span>{project.category}</span>
                    <strong>{project.title}</strong>
                  </span>
                </Link>
              );
            })}
          </div>
          <Link className="hv-link hv-link--light" href="/referenzen">
            Alle Referenzen <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="shell hv-process" aria-labelledby="process-title">
        <header className="hv-heading" data-reveal>
          <p className="hv-kicker hv-kicker--dark">So arbeiten wir</p>
          <h2 id="process-title">
            Von der Idee <em>bis zur Abnahme.</em>
          </h2>
          <p>{home.processLead}</p>
        </header>
        <ol className="hv-steps">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="hv-steps__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="hv-showroom" aria-labelledby="showroom-title">
        <div className="shell hv-showroom__grid">
          <figure>
            <Image
              src="/images/b2b/team.webp"
              alt="Das KLOTZ-Team vor Firmenfahrzeugen am Standort Merseburg-Meuschau"
              width={1000}
              height={586}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </figure>
          <div>
            <p className="hv-kicker hv-kicker--dark">Ausstellung & Team</p>
            <h2 id="showroom-title">
              Besuchen Sie uns <em>in Meuschau.</em>
            </h2>
            <p>
              In unserer Innen- und Außenausstellung sehen Sie Ausführungen im
              Original, vergleichen Oberflächen und prüfen Farben im Tageslicht
              – gemeinsam mit einem Fachberater, der Ihre Fragen direkt am
              Beispiel beantwortet.
            </p>
            <dl className="hv-showroom__info">
              <div>
                <dt>Adresse</dt>
                <dd>
                  {site.address.street}, {site.address.postalCode}{" "}
                  {site.address.city}-{site.address.district}
                </dd>
              </div>
              <div>
                <dt>Geöffnet</dt>
                <dd>{site.openingHours.display}</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </dd>
              </div>
            </dl>
            <div className="hv-showroom__actions">
              <ButtonLink href="/kontakt">Anfahrt & Kontakt</ButtonLink>
              <a
                className="hv-link"
                href={site.showroomTourUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtueller Rundgang (neuer Tab){" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="shell hv-tools" aria-labelledby="tools-title">
        <header className="hv-heading" data-reveal>
          <p className="hv-kicker hv-kicker--dark">Digital vorplanen</p>
          <h2 id="tools-title">
            Erst stöbern. <em>Dann persönlich planen.</em>
          </h2>
        </header>
        <div className="hv-tools__grid">
          {tools.map((tool, index) => (
            <Link key={tool.href} href={tool.href} className="hv-tool">
              <span className="hv-tool__index">0{index + 1}</span>
              <span className="hv-tool__title">{tool.title}</span>
              <span className="hv-tool__text">{tool.text}</span>
              <span className="hv-tool__cta">
                {tool.label} <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="hv-journal" aria-labelledby="journal-title">
        <div className="shell">
          <header className="hv-heading" data-reveal>
            <p className="hv-kicker hv-kicker--dark">KLOTZ Wissen</p>
            <h2 id="journal-title">
              Gute Fragen. <em>Klare Antworten.</em>
            </h2>
            <Link className="hv-link" href="/wissen">
              Zum Ratgeber <span aria-hidden="true">↗</span>
            </Link>
          </header>
          <ArticleCards articles={articles.slice(0, 3)} />
        </div>
      </section>

      <section className="atelier-faq" aria-labelledby="home-faq-title">
        <div className="shell atelier-faq__layout">
          <div className="atelier-faq__intro" data-reveal>
            <p className="index-label">Gut zu wissen</p>
            <h2 id="home-faq-title">
              Fragen, die
              <br />
              <em>weiterhelfen.</em>
            </h2>
            <p>
              Ein guter Anfang braucht keine fertige Produktliste. Hier finden
              Sie erste Antworten und den passenden Weg zu mehr Details.
            </p>
          </div>
          <div className="atelier-faq__list">
            {home.faq.map((item, index) => (
              <details key={item.id} className="atelier-faq__item">
                <summary>
                  <span className="atelier-faq__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="atelier-faq__question">{item.question}</span>
                  <span className="atelier-faq__icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="atelier-faq__answer">
                  <p>{item.answer}</p>
                  <Link href={item.href} className="editorial-link">
                    {item.linkLabel} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="hv-cta" aria-labelledby="cta-title">
        <div className="shell hv-cta__grid">
          <div>
            <p className="hv-kicker">Ihr nächster Schritt</p>
            <h2 id="cta-title">
              Lassen Sie uns über <em>Ihr Projekt sprechen.</em>
            </h2>
            <p>
              Beschreiben Sie kurz Ihr Vorhaben – wir melden uns mit den
              nächsten Schritten. Persönlich, telefonisch, per WhatsApp oder in
              unserer Ausstellung.
            </p>
          </div>
          <div className="hv-cta__actions">
            <ButtonLink href="/projekt-anfragen" variant="light">
              Projekt anfragen
            </ButtonLink>
            <a className="hv-cta__phone" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a
              className="hv-link hv-link--light"
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {site.whatsappDisplay} (neuer Tab){" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
