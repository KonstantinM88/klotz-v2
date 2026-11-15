import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { ConfiguratorPage } from "@/features/configurator/configurator-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const content = await repository.getConfiguratorPageContent();
  return pageMetadata(
    content.metaTitle,
    content.metaDescription,
    "/konfigurator",
    content.hero.media.image.src,
  );
}

export default async function Page() {
  const [content, site, catalog] = await Promise.all([
    repository.getConfiguratorPageContent(),
    repository.getSiteSettings(),
    repository.getDoorCatalog(),
  ]);
  return <ConfiguratorPage content={content} site={site} catalog={catalog} />;
}
