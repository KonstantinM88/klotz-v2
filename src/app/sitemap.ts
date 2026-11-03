import type { MetadataRoute } from "next";
import { getSiteUrl, isIndexingAllowed } from "@/lib/site-url";
import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { canIndexOffer } from "@/lib/offer-publication";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!isIndexingAllowed()) return [];
  const [overviewPages, featuredProjects, featuredArticles, services, offers] =
    await Promise.all([
      repository.getOverviewPages(),
      repository.getFeaturedProjects(),
      repository.getFeaturedArticles(),
      repository.getServices(),
      repository.getOfferPages(),
    ]);
  const origin = getSiteUrl().origin;
  const paths = [
    "",
    "projekt-anfragen",
    ...overviewPages.map(({ slug }) => slug),
    ...featuredProjects.map(({ href }) => href.slice(1)),
    ...featuredArticles.map(({ href }) => href.slice(1)),
    ...services.map(({ slug }) => slug),
    ...offers
      .filter((offer) => canIndexOffer(offer))
      .map(({ href }) => href.slice(1)),
  ];
  return paths.map((path, index) => ({
    url: `${origin}/${path}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "projekt-anfragen" ? 0.9 : 0.7,
  }));
}
