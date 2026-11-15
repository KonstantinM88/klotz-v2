import { describe, expect, it } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import manifest from "../../content/terrace-gallery-assets-manifest.json";

describe("curated terrace galleries", () => {
  it("provides a distinct source-bound gallery for every outdoor service", async () => {
    const pages = await repository.getTerraceServicePages();
    expect(pages).toHaveLength(6);
    expect(pages.flatMap((page) => page.gallery.items)).toHaveLength(66);
    expect(manifest).toHaveLength(66);
    for (const page of pages) {
      expect(page.gallery.items.length).toBeGreaterThanOrEqual(10);
      expect(page.gallery.items.length).toBeLessThanOrEqual(12);
      expect(new Set(page.gallery.items.map((item) => item.id)).size).toBe(
        page.gallery.items.length,
      );
      for (const item of page.gallery.items) {
        const asset = manifest.find((a) => a.id === item.id)!;
        expect(asset.serviceSlug).toBe(page.slug);
        expect(item.image.src).toBe(asset.src);
        expect(item.image.sourceUrl).toBe(asset.sourcePage);
        expect(new URL(asset.sourceUrl).hostname).toBe("www.klotz.mobi");
        expect(asset.sourceVariant).toBe("original");
        expect(asset.rightsStatus).toBe("client-presentation-approved");
        expect(asset.factStatus).toBe("legacy-product-illustration");
        expect(asset.originalSha256).toMatch(/^[a-f0-9]{64}$/);
        expect(item.image.alt.length).toBeGreaterThan(30);
        expect(asset.sourceUrl).not.toMatch(/adobestock|\/styles\//i);
      }
    }
  });
  it("builds the overview from all six actual service galleries without changing the product identity", async () => {
    const [hub, pages] = await Promise.all([
      repository.getTerracePageContent(),
      repository.getTerraceServicePages(),
    ]);
    expect(hub.gallery.items).toHaveLength(6);
    for (const page of pages) {
      expect(
        hub.gallery.items.some((item) => item.id === page.gallery.items[0]!.id),
      ).toBe(true);
      expect(
        hub.solutions.find((card) => card.href.endsWith(page.slug))?.image.src,
      ).toBe(page.media.image.src);
    }
    expect(new Set(pages.map((page) => page.gallery.lead)).size).toBe(6);
  });
});
