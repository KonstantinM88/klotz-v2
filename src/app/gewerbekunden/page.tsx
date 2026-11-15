import { localContentRepository as repository } from "@/repositories/local-content-repository";
import { BusinessPage } from "@/features/business/business-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const { metadata, hero } = await repository.getBusinessPageContent();
  return pageMetadata(
    metadata.title,
    metadata.description,
    "/gewerbekunden",
    hero.media.image.src,
  );
}
export default async function Page() {
  const [content, services, site] = await Promise.all([
    repository.getBusinessPageContent(),
    repository.getBusinessServicePages(),
    repository.getSiteSettings(),
  ]);
  return <BusinessPage content={content} services={services} site={site} />;
}
