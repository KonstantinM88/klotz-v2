import type { TerracePageContent } from "@/domain/content/terrace";
import { getSiteUrl } from "@/lib/site-url";

/** Navigational content only; no unapproved commercial facts or product claims. */
export function terraceStructuredData(content: TerracePageContent) {
  const absolute = (path: string) => new URL(path, getSiteUrl()).href;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${absolute("/terrasse-garten")}#page`,
    url: absolute("/terrasse-garten"),
    name: content.metadata.title,
    description: content.metadata.description,
    inLanguage: "de-DE",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: content.solutions.length,
      itemListElement: content.solutions.map((solution, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: solution.title,
        url: absolute(solution.href),
      })),
    },
  };
}
