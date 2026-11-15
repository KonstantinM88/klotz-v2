import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { FencePage } from "@/features/fence/fence-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const { metadata, hero } = await repository.getFencePageContent();
  return pageMetadata(
    metadata.title,
    metadata.description,
    "/zaun-tor",
    hero.media.image.src,
  );
}
export default async function Page() {
  const [content, site, projects] = await Promise.all([
    repository.getFencePageContent(),
    repository.getSiteSettings(),
    repository.getFeaturedProjects(),
  ]);
  return (
    <FencePage
      content={content}
      site={site}
      project={projects.find((p) => p.id === "stadtstadion-fence")}
    />
  );
}
