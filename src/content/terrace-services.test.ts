import { describe, expect, it } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import manifest from "../../content/assets-manifest.json";

describe("complete outdoor service pages", () => {
  it("keeps all six cards, service pages and legacy route summaries on the same imagery", async () => {
    const [hub, pages, services] = await Promise.all([
      repository.getTerracePageContent(),
      repository.getTerraceServicePages(),
      repository.getServices(),
    ]);
    expect(pages).toHaveLength(6);
    expect(new Set(pages.map((p) => p.slug)).size).toBe(6);
    for (const page of pages) {
      const route = `terrasse-garten/${page.slug}`;
      const card = hub.solutions.find((s) => s.href === `/${route}`);
      expect(card?.image.src).toBe(page.media.image.src);
      expect(card?.media?.companion?.src).toBe(page.media.companion?.src);
      expect(services.find((s) => s.slug === route)?.image).toBe(
        page.media.image.src,
      );
      const asset = manifest.find((a) => a.src === page.media.image.src);
      expect(asset?.rightsStatus).toBe("client-presentation-approved");
      expect(page.media.image.width).toBeGreaterThanOrEqual(768);
    }
    const pergola = pages.find((p) => p.slug === "pergolen")!;
    expect(pergola.media.image.sourceUrl).toContain("pergola-mit-sonnentuch");
    expect(pergola.media.image.src).not.toContain("lamelle");
  });
  it("provides individual buying content and contextual related destinations", async () => {
    const [pages, articles, offers] = await Promise.all([
      repository.getTerraceServicePages(),
      repository.getFeaturedArticles(),
      repository.getOfferPages(),
    ]);
    expect(new Set(pages.map((p) => p.metaDescription)).size).toBe(6);
    const openingQuestions = new Set();
    for (const page of pages) {
      expect(page.status).toBe("draft");
      expect(page.story.paragraphs).toHaveLength(2);
      expect(page.variants).toHaveLength(3);
      expect(page.planning).toHaveLength(4);
      expect(page.faq).toHaveLength(5);
      openingQuestions.add(page.faq[0]?.question);
      expect(articles.some((a) => a.slug === page.guideSlug)).toBe(true);
      if (page.offerSlug)
        expect(offers.some((o) => o.slug === page.offerSlug)).toBe(true);
      for (const slug of page.related)
        expect(pages.some((p) => p.slug === slug && p.slug !== page.slug)).toBe(
          true,
        );
      const copy = [
        page.hero.lead,
        ...page.story.paragraphs,
        ...page.variants.flatMap((v) => [v.description, v.suitable]),
        ...page.detail.paragraphs,
        ...page.planning.map((p) => p.text),
        page.costs.lead,
        ...page.faq.map((f) => f.answer),
      ].join(" ");
      expect(copy.split(/\s+/).length).toBeGreaterThan(500);
      expect(copy).not.toMatch(/Lorem ipsum|im nächsten Schritt|Demo\/noch/);
    }
    expect(openingQuestions.size).toBe(6);
  });
});
