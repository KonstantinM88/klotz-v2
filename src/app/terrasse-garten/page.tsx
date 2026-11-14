import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { TerracePage } from "@/features/terrace/terrace-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const { metadata, hero } = await repository.getTerracePageContent();
  return pageMetadata(
    metadata.title,
    metadata.description,
    "/terrasse-garten",
    hero.image.src,
  );
}

export default async function Page() {
  const [content, site, projects, articles] = await Promise.all([
    repository.getTerracePageContent(),
    repository.getSiteSettings(),
    repository.getFeaturedProjects(),
    repository.getFeaturedArticles(),
  ]);
  return (
    <TerracePage
      content={content}
      site={site}
      projects={content.projectIds.flatMap((id) =>
        projects.filter((project) => project.id === id),
      )}
      articles={content.articleSlugs.flatMap((slug) =>
        articles.filter((article) => article.slug === slug),
      )}
    />
  );
}
