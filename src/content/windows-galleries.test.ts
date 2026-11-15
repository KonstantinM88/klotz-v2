import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import assets from "../../content/windows-gallery-assets-manifest.json";

describe("window and door editorial galleries", () => {
  it("covers the eleven original material sources with verified, local original photographs", async () => {
    const pages = await repository.getWindowsServicePages();
    expect(pages.map((page) => page.gallery.items.length)).toEqual([
      15, 12, 16, 8, 6,
    ]);
    expect(assets).toHaveLength(57);
    const sources = new Set(
      assets.map((asset) => new URL(asset.sourcePage).pathname),
    );
    for (const path of [
      "alufenster",
      "kunststofffenster",
      "holzfenster",
      "alutueren",
      "kunststofftueren",
      "holztueren",
      "echtholztueren",
      "clp",
      "weisslacktueren",
      "glastueren",
      "terrassentueren",
    ])
      expect(sources.has(`/${path}`)).toBe(true);
    for (const asset of assets) {
      expect(asset.sourceVariant).toBe("original");
      expect(asset.sourceUrl).not.toMatch(/\/styles\/|blank\.|adobestock/i);
      expect(asset.rightsStatus).toBe("client-presentation-approved");
      expect(asset.width).toBeLessThanOrEqual(asset.originalWidth);
      expect(asset.height).toBeLessThanOrEqual(asset.originalHeight);
      const digest = (path: string) =>
        createHash("sha256").update(readFileSync(path)).digest("hex");
      expect(digest(`public${asset.src}`)).toBe(asset.sha256);
      expect(digest(asset.originalPath)).toBe(asset.originalSha256);
    }
  });
  it("exposes substantial distinct material advice and valid hub deep links through the typed repository", async () => {
    const [hub, pages] = await Promise.all([
      repository.getWindowsPageContent(),
      repository.getWindowsServicePages(),
    ]);
    expect(hub.gallery.items).toHaveLength(6);
    expect(hub.materialNavigation).toHaveLength(11);
    const chapters = pages.flatMap((page) => page.materials);
    expect(chapters).toHaveLength(11);
    expect(new Set(chapters.map((chapter) => chapter.title)).size).toBe(11);
    for (const page of pages)
      for (const chapter of page.materials) {
        expect(
          chapter.paragraphs.join(" ").split(/\s+/).length,
        ).toBeGreaterThan(95);
        expect(
          page.gallery.items.some((image) => image.id === chapter.image.id),
        ).toBe(true);
        expect(
          hub.materialNavigation.some(
            (link) =>
              link.href === `/fenster-tueren/${page.slug}#${chapter.id}`,
          ),
        ).toBe(true);
      }
    for (const page of pages) {
      if (page.materials.length) {
        expect(page.gallery.groups?.map((group) => group.id)).toEqual(
          page.materials.map((chapter) => chapter.id),
        );
        for (const image of page.gallery.items)
          expect(
            page.gallery.groups?.some((group) => group.id === image.groupId),
          ).toBe(true);
      }
      for (const image of page.gallery.items)
        expect(image.requestHref).toBe(
          `/projekt-anfragen?leistung=${page.slug}&bild=${image.id}`,
        );
    }
    expect(
      pages.find((page) => page.slug === "einbruchschutz")!.gallery.note,
    ).toContain("Kein Nachweis einer Schutzklasse");
  });
});
