import { notFound } from "next/navigation";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { PageIntro, ContactPanel } from "@/components/sections/page-parts";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { TerraceServicePage } from "@/features/terrace/terrace-service-page";
import { WindowsServicePage } from "@/features/windows/windows-service-page";
import { FenceServicePage } from "@/features/fence/fence-service-page";
type Props = { params: Promise<{ slug: string; service: string }> };
export async function generateStaticParams() {
  return (await repository.getServices()).map((s) => {
    const [slug, service] = s.slug.split("/");
    return { slug, service };
  });
}
export async function generateMetadata({ params }: Props) {
  const p = await params;
  if (p.slug === "zaun-tor") {
    const detail = (await repository.getFenceServicePages()).find(
      (page) => page.slug === p.service,
    );
    return detail
      ? pageMetadata(
          detail.metaTitle,
          detail.metaDescription,
          `/zaun-tor/${detail.slug}`,
          detail.media.image.src,
        )
      : {};
  }
  if (p.slug === "fenster-tueren") {
    const detail = (await repository.getWindowsServicePages()).find(
      (page) => page.slug === p.service,
    );
    return detail
      ? pageMetadata(
          detail.metaTitle,
          detail.metaDescription,
          `/fenster-tueren/${detail.slug}`,
          detail.media.image.src,
        )
      : {};
  }
  if (p.slug === "terrasse-garten") {
    const detail = (await repository.getTerraceServicePages()).find(
      (page) => page.slug === p.service,
    );
    return detail
      ? pageMetadata(
          detail.metaTitle,
          detail.metaDescription,
          `/terrasse-garten/${detail.slug}`,
          detail.media.image.src,
        )
      : {};
  }
  const item = (await repository.getServices()).find(
    (s) => s.slug === p.slug + "/" + p.service,
  );
  return item
    ? pageMetadata(
        item.title + " in Merseburg",
        item.intro,
        "/" + item.slug,
        item.image,
      )
    : {};
}
export default async function ServicePage({ params }: Props) {
  const p = await params;
  if (p.slug === "zaun-tor") {
    const [pages, site, articles] = await Promise.all([
      repository.getFenceServicePages(),
      repository.getSiteSettings(),
      repository.getFeaturedArticles(),
    ]);
    const detail = pages.find((page) => page.slug === p.service);
    if (!detail) notFound();
    return (
      <FenceServicePage
        content={detail}
        site={site}
        related={detail.related.flatMap((slug) =>
          pages.filter((page) => page.slug === slug),
        )}
        guide={articles.find((article) => article.slug === detail.guideSlug)}
      />
    );
  }
  if (p.slug === "fenster-tueren") {
    const [pages, site, articles] = await Promise.all([
      repository.getWindowsServicePages(),
      repository.getSiteSettings(),
      repository.getFeaturedArticles(),
    ]);
    const detail = pages.find((page) => page.slug === p.service);
    if (!detail) notFound();
    return (
      <WindowsServicePage
        content={detail}
        site={site}
        related={detail.related.flatMap((slug) =>
          pages.filter((page) => page.slug === slug),
        )}
        guide={articles.find((article) => article.slug === detail.guideSlug)}
      />
    );
  }
  if (p.slug === "terrasse-garten") {
    const [pages, site, projects, articles] = await Promise.all([
      repository.getTerraceServicePages(),
      repository.getSiteSettings(),
      repository.getFeaturedProjects(),
      repository.getFeaturedArticles(),
    ]);
    const detail = pages.find((page) => page.slug === p.service);
    if (!detail) notFound();
    return (
      <TerraceServicePage
        content={detail}
        site={site}
        related={detail.related.flatMap((slug) =>
          pages.filter((page) => page.slug === slug),
        )}
        projects={projects.filter(
          (project) => project.category === "Terrasse & Garten",
        )}
        guide={articles.find((article) => article.slug === detail.guideSlug)}
      />
    );
  }
  const services = await repository.getServices();
  const item = services.find((s) => s.slug === p.slug + "/" + p.service);
  if (!item) notFound();
  const category = (await repository.getServiceCategories()).find(
    (s) => s.slug === item.category,
  )!;
  return (
    <main id="main-content">
      <PageIntro
        title={item.title}
        intro={item.intro}
        eyebrow={category.title + " · Merseburg"}
        path={"/" + item.slug}
        image={item.image}
        parents={[{ label: category.title, href: category.href }]}
      />
      <section className="content-section">
        <div className="shell">
          <div className="editorial-grid">
            <div>
              <p className="eyebrow">
                <span />
                Passend zu Ihrem Vorhaben
              </p>
              <h2>
                Eine gute Lösung beginnt
                <br />
                mit den richtigen Fragen.
              </h2>
            </div>
            <div>
              <p className="page-lead">
                Wir betrachten Nutzung, Gestaltung und Einbausituation
                gemeinsam. Diese Möglichkeiten geben eine erste Orientierung:
              </p>
              <ul className="feature-list">
                {item.variants.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="planning-section">
        <div className="shell planning-grid">
          <div>
            <p className="eyebrow">
              <span />
              01 / Vorbereitung
            </p>
            <h2>
              Darauf kommt es
              <br />
              bei der Planung an.
            </h2>
            <ul className="number-list">
              {item.planning.map((v, i) => (
                <li key={v}>
                  <span>0{i + 1}</span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">
              <span />
              02 / Kosten verstehen
            </p>
            <h2>
              Ihr Angebot.
              <br />
              Nachvollziehbar geplant.
            </h2>
            <p>
              Der Preis ergibt sich aus der konkreten Ausführung. Diese Faktoren
              bestimmen den Umfang:
            </p>
            <ul className="feature-list">
              {item.costs.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="shell editorial-grid">
          <div>
            <p className="eyebrow">
              <span />
              Gut zu wissen
            </p>
            <h2>
              Fragen vor dem
              <br />
              ersten Gespräch.
            </h2>
          </div>
          <div className="faq-list">
            {item.faq.map((f) => (
              <details key={f.question}>
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section related-section">
        <div className="shell">
          <h2>Weiterdenken.</h2>
          <div className="link-grid">
            {services
              .filter(
                (s) => s.category === item.category && s.slug !== item.slug,
              )
              .slice(0, 3)
              .map((s) => (
                <Link key={s.slug} href={"/" + s.slug}>
                  {s.title}
                  <span>↗</span>
                </Link>
              ))}
            <Link href="/referenzen">
              Reale Einblicke<span>↗</span>
            </Link>
            <Link href="/wissen">
              Wissen & Orientierung<span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <ContactPanel />
    </main>
  );
}
