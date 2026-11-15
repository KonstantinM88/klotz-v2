import { describe, it, expect } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import manifest from "../../content/assets-manifest.json";
import { serviceRequestContext } from "@/features/inquiry/service-context";

describe("Zaun & Tor complete section", () => {
  it("covers every existing fence route with consistent individual product imagery", async () => {
    const [hub, pages, services, categories] = await Promise.all([
      repository.getFencePageContent(),
      repository.getFenceServicePages(),
      repository.getServices(),
      repository.getServiceCategories(),
    ]);
    expect(pages.map((p) => p.slug)).toEqual([
      "zaunanlagen",
      "sichtschutz",
      "hoftore",
      "schiebetore",
      "elektrische-toranlagen",
      "gelaender",
    ]);
    expect(
      services.filter((s) => s.category === "zaun-tor").map((s) => s.slug),
    ).toEqual(pages.map((p) => `zaun-tor/${p.slug}`));
    expect(hub.solutions).toHaveLength(6);
    expect(new Set(pages.map((p) => p.media.image.src)).size).toBe(6);
    expect(categories.find((c) => c.slug === "zaun-tor")?.image.src).toBe(
      hub.hero.media.image.src,
    );
    for (const page of pages) {
      expect(
        hub.solutions.find((s) => s.slug === page.slug)?.media.image.src,
      ).toBe(page.media.image.src);
      expect(
        services.find((s) => s.slug === `zaun-tor/${page.slug}`)?.image,
      ).toBe(page.media.image.src);
      for (const img of [page.media.image, page.detail.image]) {
        const asset = manifest.find((a) => a.src === img.src);
        expect(asset?.rightsStatus).toBe("client-presentation-approved");
        expect(asset?.sourceUrl).not.toMatch(/AdobeStock|blank\.jpg|favicon/i);
        expect(img.width).toBeGreaterThan(600);
      }
    }
  });
  it("contains substantial unique buying content and valid related destinations", async () => {
    const [pages, articles, offers] = await Promise.all([
      repository.getFenceServicePages(),
      repository.getFeaturedArticles(),
      repository.getOfferPages(),
    ]);
    expect(new Set(pages.map((p) => p.metaDescription)).size).toBe(6);
    expect(
      new Set(pages.flatMap((p) => p.faq.map((f) => f.question))).size,
    ).toBe(30);
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
        /Lorem ipsum|spätere Website|garantiert|\d+\s*%|kostenlos|zertifiziert/,
      );
      expect(page.variants).toHaveLength(3);
      expect(page.planning).toHaveLength(4);
      expect(page.faq).toHaveLength(5);
      expect(page.status).toBe("draft");
      expect(page.sourceRefs.length).toBeGreaterThanOrEqual(2);
      expect(articles.some((a) => a.slug === page.guideSlug)).toBe(true);
      if (page.offerSlug)
        expect(offers.some((o) => o.slug === page.offerSlug)).toBe(true);
      for (const slug of page.related)
        expect(pages.some((p) => p.slug === slug && p.slug !== page.slug)).toBe(
          true,
        );
    }
  });
  it("prefills only known service contexts with the correct topic, ahead of conflicting category hints", async () => {
    const groups = await Promise.all([
      repository.getTerraceServicePages(),
      repository.getWindowsServicePages(),
      repository.getFenceServicePages(),
    ]);
    expect(new Set(groups.flat().map((p) => p.slug)).size).toBe(
      groups.flat().length,
    );
    for (const page of groups[2]!) {
      const context = await serviceRequestContext(
        repository,
        page.slug,
        "fenster-tueren",
      );
      expect(context?.topic).toBe("Zaun & Tor");
      expect(context?.message).toContain(page.requestMessage);
    }
    expect(
      (await serviceRequestContext(repository, "fenster", "zaun-tor"))?.topic,
    ).toBe("Fenster & Türen");
    expect(
      (await serviceRequestContext(repository, "pergolen", "zaun-tor"))?.topic,
    ).toBe("Terrasse & Garten");
    expect(
      (await serviceRequestContext(repository, undefined, "zaun-tor"))?.topic,
    ).toBe("Zaun & Tor");
    for (const value of ["unknown", ["hoftore", "gelaender"]])
      expect(
        await serviceRequestContext(repository, value, undefined),
      ).toBeUndefined();
    expect(
      await serviceRequestContext(repository, undefined, [
        "zaun-tor",
        "fenster-tueren",
      ]),
    ).toBeUndefined();
  });
});
