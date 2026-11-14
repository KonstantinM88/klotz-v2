import { describe, expect, it } from "vitest";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { canIndexOffer } from "@/lib/offer-publication";
import { offerPageJsonLd } from "@/features/offers/offer-structured-data";
import manifest from "../../content/angebote-assets-manifest.json";

describe("offer publication and source integrity", () => {
  it("supplies five unique pages with the original source prices and valid internal destinations", async () => {
    const offers = await repository.getOfferPages();
    const paths = new Set([
      "/kontakt",
      "/angebote",
      ...(await repository.getServices()).map((item) => `/${item.slug}`),
      ...(await repository.getFeaturedArticles()).map((item) => item.href),
      ...offers.map((item) => item.href),
    ]);
    expect(offers).toHaveLength(5);
    expect(new Set(offers.map((item) => item.href)).size).toBe(5);
    expect(new Set(offers.map((item) => item.metaDescription)).size).toBe(5);
    for (const offer of offers) {
      const anchors = [
        offer.kind === "funding" ? "foerderung" : "preise",
        "vorbereitung",
        "fragen",
        "quellen",
        ...offer.sections.map((item) => item.id),
      ];
      expect(new Set(anchors).size).toBe(anchors.length);
      const asset = manifest.assets.find((item) => item.id === offer.id)!;
      expect(
        offer.products.map(({ title, fromPriceEUR, unit }) => ({
          title,
          fromPriceEUR,
          unit,
        })),
      ).toEqual(
        asset.offers.map((item) => ({
          title: item.name,
          fromPriceEUR: item.fromPriceEUR,
          unit: item.unit,
        })),
      );
      expect(offer.image.width / offer.image.height).toBe(0.75);
      expect(offer.relatedLinks.every((item) => paths.has(item.href))).toBe(
        true,
      );
      expect(await repository.getOfferPage(offer.slug)).toEqual(offer);
      expect(canIndexOffer(offer)).toBe(false);
    }
    expect(await repository.getOfferPage("unknown")).toBeUndefined();
  });

  it("requires verified content, each approval, and a non-expired campaign", async () => {
    const offer = structuredClone((await repository.getOfferPages())[0]!);
    const today = new Date("2026-11-03T12:00:00Z");
    offer.publication = {
      contentApproved: true,
      commercialApproved: true,
      rightsApproved: true,
    };
    expect(canIndexOffer(offer, today)).toBe(false);
    offer.status = "verified";
    offer.validUntil = "2026-11-03";
    expect(canIndexOffer(offer, today)).toBe(true);
    for (const key of Object.keys(
      offer.publication,
    ) as (keyof typeof offer.publication)[]) {
      offer.publication[key] = false;
      expect(canIndexOffer(offer, today)).toBe(false);
      offer.publication[key] = true;
    }
    offer.validUntil = "2026-11-02";
    expect(canIndexOffer(offer, today)).toBe(false);
    delete offer.validUntil;
    expect(canIndexOffer(offer, today)).toBe(true);
  });
});

describe("offer structured data", () => {
  it("mirrors visible prices and FAQ without placeholders", async () => {
    const site = await repository.getSiteSettings();
    for (const offer of await repository.getOfferPages()) {
      const graph = offerPageJsonLd(offer, site)["@graph"] as {
        "@type": string;
        offers?: { price: number };
        mainEntity?: unknown[];
      }[];
      const products = graph.filter((node) => node["@type"] === "Product");
      expect(products.map((node) => node.offers?.price)).toEqual(
        offer.products.map((product) => product.fromPriceEUR),
      );
      const faq = graph.find((node) => node["@type"] === "FAQPage");
      expect(faq?.mainEntity).toHaveLength(offer.faq.length);
      expect(JSON.stringify(graph)).not.toMatch(/"\s*"|undefined|null/);
    }
  });
});
