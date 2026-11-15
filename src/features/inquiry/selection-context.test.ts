import { describe, expect, it } from "vitest";
import { serviceRequestContext } from "./service-context";
import { localContentRepository as repository } from "@/repositories/local-content-repository";

describe("source-bound consultation choices", () => {
  it("keeps an actual material and its illustration attached to the correct service", async () => {
    const result = await serviceRequestContext(
      repository,
      "innentueren",
      undefined,
      { material: "cpl-tueren" },
    );
    expect(result?.topic).toBe("Fenster & Türen");
    expect(result?.message).toContain("Meine Materialrichtung: CPL-Türen");
    expect(result?.inspiration?.title).toBe("CPL-Türen");
    expect(result?.inspiration?.backHref).toBe(
      "/fenster-tueren/innentueren#cpl-tueren",
    );
    expect(result?.inspiration?.image.sourceUrl).toBe(
      "https://www.klotz.mobi/clp",
    );
  });
  it("resolves a selected image only from that service's known archive", async () => {
    const pages = await repository.getWindowsServicePages();
    for (const page of pages)
      for (const image of page.gallery.items) {
        const result = await serviceRequestContext(
          repository,
          page.slug,
          undefined,
          { bild: image.id },
        );
        expect(result?.inspiration?.image.src).toBe(image.image.src);
        expect(result?.message).toContain(`Meine Bildidee: ${image.title}`);
        expect(result?.inspiration?.backHref).toBe(
          `/fenster-tueren/${page.slug}#bilder`,
        );
        expect(result?.key).toContain(image.id);
      }
  });
  it("ignores foreign, repeated and conflicting URL text without reflecting it in the form", async () => {
    const baseline = await serviceRequestContext(
      repository,
      "fenster",
      undefined,
    );
    for (const choices of [
      { material: "glastueren" },
      { bild: "windows-gallery-haustueren-01" },
      { material: ["kunststofffenster", "holzfenster"] },
      { bild: ["windows-gallery-fenster-01", "windows-gallery-fenster-02"] },
      {
        material: "<script>foreign</script>",
        bild: "https://foreign.example/image.jpg",
      },
    ]) {
      const result = await serviceRequestContext(
        repository,
        "fenster",
        undefined,
        choices,
      );
      expect(result?.inspiration).toBeUndefined();
      expect(result?.message).toBe(baseline?.message);
      expect(result?.key).toBe(baseline?.key);
    }
    expect(
      await serviceRequestContext(
        repository,
        ["fenster", "haustueren"],
        undefined,
        { bild: "windows-gallery-fenster-01" },
      ),
    ).toBeUndefined();
    expect(
      (
        await serviceRequestContext(repository, undefined, "fenster-tueren", {
          material: "holzfenster",
        })
      )?.inspiration,
    ).toBeUndefined();
  });
  it("uses a concrete image as the conversation reference when both recognized choices are supplied", async () => {
    const result = await serviceRequestContext(
      repository,
      "innentueren",
      undefined,
      { material: "cpl-tueren", bild: "windows-gallery-innentueren-01" },
    );
    expect(result?.message).toContain("Meine Bildidee:");
    expect(result?.message).not.toContain("Meine Materialrichtung:");
    expect(result?.inspiration?.title).toBe("Furnier · Natürlich verbunden");
  });
});
