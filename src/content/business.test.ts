import { describe, it, expect } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { serviceRequestContext } from "@/features/inquiry/service-context";
import manifest from "../../content/assets-manifest.json";

describe("Gewerbekunden complete section", () => {
  it("preserves all four routes with distinct, traceable media and a consistent home entry", async () => {
    const [hub, pages, services, categories] = await Promise.all([
      repository.getBusinessPageContent(),
      repository.getBusinessServicePages(),
      repository.getServices(),
      repository.getServiceCategories(),
    ]);
    expect(pages.map((p) => p.slug)).toEqual([
      "wohnungswirtschaft",
      "industrie-gewerbe",
      "hotellerie-gastronomie",
      "wartung-service",
    ]);
    expect(new Set(pages.map((p) => p.media.image.src)).size).toBe(4);
    expect(
      services.filter((s) => s.category === "gewerbekunden").map((s) => s.slug),
    ).toEqual(pages.map((p) => `gewerbekunden/${p.slug}`));
    expect(categories.find((c) => c.slug === "gewerbekunden")?.image).toEqual(
      hub.hero.media.image,
    );
    for (const page of pages) {
      const summary = services.find(
        (s) => s.slug === `gewerbekunden/${page.slug}`,
      );
      expect(summary?.intro).toBe(page.hero.lead);
      expect(summary?.image).toBe(page.media.image.src);
      for (const img of [page.media.image, page.detail.image]) {
        const provenance = manifest.find((a) => a.src === img.src);
        expect(provenance?.rightsStatus).toBe("client-presentation-approved");
        expect(provenance?.sourceUrl).not.toMatch(/AdobeStock|blank|favicon/i);
        expect(img.width).toBeGreaterThan(600);
      }
    }
  });
  it("offers substantial individual B2B copy with valid links and no fabricated commercial figures", async () => {
    const [hub, pages, services, articles, overviews] = await Promise.all([
      repository.getBusinessPageContent(),
      repository.getBusinessServicePages(),
      repository.getServices(),
      repository.getFeaturedArticles(),
      repository.getOverviewPages(),
    ]);
    expect(hub.tasks).toHaveLength(4);
    expect(hub.preparation).toHaveLength(4);
    expect(hub.faq).toHaveLength(6);
    expect(new Set(pages.map((p) => p.metaTitle)).size).toBe(4);
    expect(new Set(pages.map((p) => p.metaDescription)).size).toBe(4);
    expect(
      new Set(pages.flatMap((p) => p.faq.map((f) => f.question))).size,
    ).toBe(20);
    const paths = new Set([
      ...services.map((s) => `/${s.slug}`),
      ...overviews.map((o) => `/${o.slug}`),
    ]);
    for (const page of pages) {
      const copy = [
        page.hero.lead,
        ...page.story.paragraphs,
        ...page.variants.flatMap((v) => [v.description, v.suitable]),
        ...page.detail.paragraphs,
        ...page.planning.map((p) => p.text),
        page.costs.lead,
        ...page.faq.map((f) => f.answer),
      ].join(" ");
      expect(copy.split(/\s+/).length).toBeGreaterThan(600);
      expect(copy).not.toMatch(
        /Lorem ipsum|künftige Plattform|\d+\s*%|Amortisation.*2,4|garantierte Umsatzsteigerung|kostenloser Aufmaß/,
      );
      expect(page.variants).toHaveLength(3);
      expect(page.planning).toHaveLength(4);
      expect(page.brief.items).toHaveLength(4);
      expect(page.faq).toHaveLength(5);
      expect(page.status).toBe("draft");
      expect(page.sourceRefs.length).toBeGreaterThanOrEqual(4);
      expect(articles.some((a) => a.slug === page.guideSlug)).toBe(true);
      for (const item of page.productLinks)
        expect(paths.has(item.href)).toBe(true);
      for (const slug of page.related)
        expect(pages.some((p) => p.slug === slug && p.slug !== page.slug)).toBe(
          true,
        );
    }
  });
  it("resolves B2B and maintenance topics while rejecting arbitrary and repeated query values", async () => {
    const groups = await Promise.all([
      repository.getTerraceServicePages(),
      repository.getWindowsServicePages(),
      repository.getFenceServicePages(),
      repository.getBusinessServicePages(),
    ]);
    expect(new Set(groups.flat().map((p) => p.slug)).size).toBe(
      groups.flat().length,
    );
    for (const page of groups[3]!) {
      const context = await serviceRequestContext(
        repository,
        page.slug,
        "terrasse-garten",
      );
      expect(context?.topic).toBe(page.inquiryTopic);
      expect(context?.message).toContain(page.requestMessage);
    }
    expect(
      (await serviceRequestContext(repository, undefined, "gewerbekunden"))
        ?.topic,
    ).toBe("Gewerbe / Wohnungswirtschaft");
    expect(
      (await serviceRequestContext(repository, "fenster", "gewerbekunden"))
        ?.topic,
    ).toBe("Fenster & Türen");
    expect(
      (await serviceRequestContext(repository, "pergolen", "gewerbekunden"))
        ?.topic,
    ).toBe("Terrasse & Garten");
    expect(
      (await serviceRequestContext(repository, "hoftore", "gewerbekunden"))
        ?.topic,
    ).toBe("Zaun & Tor");
    expect(
      await serviceRequestContext(repository, "arbitrary input", undefined),
    ).toBeUndefined();
    expect(
      await serviceRequestContext(
        repository,
        ["wartung-service", "fenster"],
        undefined,
      ),
    ).toBeUndefined();
    expect(
      await serviceRequestContext(repository, undefined, [
        "gewerbekunden",
        "zaun-tor",
      ]),
    ).toBeUndefined();
  });
});
