import { describe, expect, it } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { terraceStructuredData } from "@/features/terrace/structured-data";
import manifest from "../../content/assets-manifest.json";

describe("terrace hub publication contract", () => {
  it("connects every solution, comparison and FAQ to an existing destination", async () => {
    const [content, services, projects, articles] = await Promise.all([
      repository.getTerracePageContent(),
      repository.getServices(),
      repository.getFeaturedProjects(),
      repository.getFeaturedArticles(),
    ]);
    const paths = new Set([
      "/kontakt",
      ...services.map((s) => `/${s.slug}`),
      ...articles.map((a) => a.href),
    ]);
    expect(content.solutions).toHaveLength(6);
    for (const link of [
      ...content.solutions,
      ...content.comparison,
      ...content.faq,
    ])
      expect(paths.has(link.href)).toBe(true);
    expect(new Set(content.solutions.map((s) => s.id)).size).toBe(6);
    expect(new Set(content.faq.map((f) => f.id)).size).toBe(content.faq.length);
    for (const id of content.projectIds)
      expect(projects.some((p) => p.id === id)).toBe(true);
    for (const slug of content.articleSlugs)
      expect(articles.some((a) => a.slug === slug)).toBe(true);
  });
  it("keeps draft status and presentation-only image provenance", async () => {
    const content = await repository.getTerracePageContent();
    expect(content.status).toBe("draft");
    for (const image of [
      content.hero.image,
      ...content.solutions.map((s) => s.image),
    ]) {
      const source = manifest.find((entry) => entry.src === image.src);
      expect(source?.sourcePage).toBe(image.sourceUrl);
      expect(source?.rightsStatus).toBe("client-presentation-approved");
      expect(image.width).toBeGreaterThan(0);
      expect(image.height).toBeGreaterThan(0);
    }
  });
  it("describes navigation without unapproved product, offer or business claims", async () => {
    const content = await repository.getTerracePageContent();
    const data = terraceStructuredData(content);
    expect(data["@type"]).toBe("CollectionPage");
    expect(data.mainEntity.numberOfItems).toBe(6);
    expect(
      data.mainEntity.itemListElement.map((item) => new URL(item.url).pathname),
    ).toEqual(content.solutions.map((s) => s.href));
    for (const type of [
      "Product",
      "Offer",
      "AggregateRating",
      "FAQPage",
      "LocalBusiness",
    ])
      expect(JSON.stringify(data)).not.toContain(`"${type}"`);
  });
});
