import { describe, it, expect } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { pageMetadata } from "@/lib/metadata";
import { serializeJsonLd } from "@/lib/structured-data";
import assetManifest from "../../content/assets-manifest.json";
describe("presentation content contract", () => {
  it("supplies all service routes and complete article bodies", async () => {
    const services = await repository.getServices();
    expect(services).toHaveLength(21);
    expect(new Set(services.map((s) => s.slug)).size).toBe(21);
    for (const a of await repository.getFeaturedArticles()) {
      const b = await repository.getArticleBody(a.slug);
      expect(b?.sections.length).toBeGreaterThanOrEqual(4);
      expect(services.some((s) => "/" + s.slug === b?.servicePath)).toBe(true);
    }
  });
  it("uses licensed local project images and unique routes", async () => {
    const projects = await repository.getFeaturedProjects();
    expect(projects).toHaveLength(4);
    for (const p of projects) {
      expect(p.image.src).toMatch(/^\/images\//);
      expect(p.image.rightsStatus).toBe("client-presentation-approved");
    }
  });
  it("keeps editorial article imagery traceable to presentation-approved assets", async () => {
    const articles = await repository.getFeaturedArticles();
    for (const article of articles.filter((a) => a.image)) {
      const asset = assetManifest.find(
        (item) => item.src === article.image?.src,
      );
      expect(article.status).toBe("draft");
      expect(asset?.rightsStatus).toBe("client-presentation-approved");
      expect(asset?.sourceUrl).toMatch(/^https:\/\/www\.klotz\.mobi\//);
    }
  });
  it("creates canonical paths and escapes script closures", () => {
    expect(
      pageMetadata("Title", "Description", "/wissen/example").alternates
        ?.canonical,
    ).toBe("/wissen/example");
    expect(serializeJsonLd({ name: "</script>" })).not.toContain("</script>");
  });
});
