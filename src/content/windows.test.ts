import { describe, it, expect } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import manifest from "../../content/assets-manifest.json";

describe("Fenster & Türen complete section", () => {
  it("keeps all five service identities consistent across overview, details and route summaries", async () => {
    const [hub, pages, services, categories] = await Promise.all([
      repository.getWindowsPageContent(),
      repository.getWindowsServicePages(),
      repository.getServices(),
      repository.getServiceCategories(),
    ]);
    expect(pages.map((p) => p.slug)).toEqual([
      "fenster",
      "haustueren",
      "innentueren",
      "rolllaeden",
      "einbruchschutz",
    ]);
    expect(hub.solutions).toHaveLength(5);
    expect(new Set(pages.map((p) => p.media.image.src)).size).toBe(5);
    expect(categories.find((c) => c.slug === "fenster-tueren")?.image.src).toBe(
      hub.hero.media.image.src,
    );
    for (const page of pages) {
      expect(
        hub.solutions.find((c) => c.slug === page.slug)?.media.image.src,
      ).toBe(page.media.image.src);
      expect(
        services.find((s) => s.slug === `fenster-tueren/${page.slug}`)?.image,
      ).toBe(page.media.image.src);
      for (const image of [page.media.image, page.detail.image]) {
        const asset = manifest.find((a) => a.src === image.src);
        expect(asset?.sourcePage).toMatch(/^https:\/\/www\.klotz\.mobi\//);
        expect(asset?.rightsStatus).toBe("client-presentation-approved");
        expect(image.width).toBeGreaterThan(500);
      }
    }
  });
  it("provides distinct buying advice without generic placeholders or invented performance claims", async () => {
    const [pages, articles, offers] = await Promise.all([
      repository.getWindowsServicePages(),
      repository.getFeaturedArticles(),
      repository.getOfferPages(),
    ]);
    expect(new Set(pages.map((p) => p.metaDescription)).size).toBe(5);
    expect(
      new Set(pages.flatMap((p) => p.faq.map((f) => f.question))).size,
    ).toBe(25);
    for (const page of pages) {
      const copy = [
        page.hero.lead,
        ...page.story.paragraphs,
        ...page.detail.paragraphs,
        ...page.variants.flatMap((v) => [v.description, v.suitable]),
        ...page.planning.map((p) => p.text),
        page.costs.lead,
        ...page.faq.map((f) => f.answer),
      ].join(" ");
      expect(copy.split(/\s+/).length).toBeGreaterThan(600);
      expect(copy).not.toMatch(
        /Lorem ipsum|freigegebenen Produktunterlagen|garantiert|\d+\s*%|RC\s*3/,
      );
      expect(page.variants).toHaveLength(3);
      expect(page.planning).toHaveLength(4);
      expect(page.faq).toHaveLength(5);
      expect(page.status).toBe("draft");
      if (page.guideSlug)
        expect(articles.some((a) => a.slug === page.guideSlug)).toBe(true);
      if (page.offerSlug)
        expect(offers.some((a) => a.slug === page.offerSlug)).toBe(true);
      for (const slug of page.related)
        expect(pages.some((p) => p.slug === slug && p.slug !== page.slug)).toBe(
          true,
        );
    }
  });
});
