import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { WindowsPage } from "@/features/windows/windows-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const { metadata, hero } = await repository.getWindowsPageContent();
  return pageMetadata(
    metadata.title,
    metadata.description,
    "/fenster-tueren",
    hero.media.image.src,
  );
}
export default async function Page() {
  const [content, site, articles] = await Promise.all([
    repository.getWindowsPageContent(),
    repository.getSiteSettings(),
    repository.getFeaturedArticles(),
  ]);
  return (
    <WindowsPage
      content={content}
      site={site}
      guide={articles.find(
        (a) => a.slug === "fenster-reparieren-oder-austauschen",
      )}
    />
  );
}
