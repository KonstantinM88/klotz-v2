import type { Article, Project, SiteSettings } from "@/domain/content/types";
import type { TerraceServiceContent } from "@/domain/content/terrace-service";
import { ServiceLandingPage } from "@/features/services/service-landing-page";
import { ServicePhotoGallery } from "@/features/services/service-photo-gallery";
export function TerraceServicePage({
  content,
  site,
  related,
  projects,
  guide,
}: {
  content: TerraceServiceContent;
  site: SiteSettings;
  related: TerraceServiceContent[];
  projects: Project[];
  guide?: Article;
}) {
  const archiveHref =
    content.slug === "lamellendaecher"
      ? (projects.find((p) => p.id === "lamella-roof")?.href ?? "/referenzen")
      : content.slug === "sommer-wintergaerten" ||
          content.slug === "glasschiebewaende"
        ? (projects.find((p) => p.id === "glass-walls")?.href ?? "/referenzen")
        : "/referenzen";
  return (
    <ServiceLandingPage
      content={content}
      site={site}
      related={related}
      guide={guide}
      gallery={<ServicePhotoGallery content={content.gallery} />}
      context={{
        label: "Terrasse & Garten",
        href: "/terrasse-garten",
        overviewLabel: "Alle Lösungen für draußen",
        closingTitle: "Ihre Idee verdient",
        closingAccent: "einen guten Platz.",
        closingText:
          "Sie brauchen noch keine fertige Planung. Erzählen Sie uns vom Haus, vom Garten und davon, wie Sie draußen leben möchten.",
        archive: {
          href: archiveHref,
          label: "Einblicke / KLOTZ-Bildarchiv",
          title: "Ideen für Ihr Zuhause.",
          text: "Entdecken Sie weitere Ansichten und Gestaltungsmöglichkeiten aus den veröffentlichten KLOTZ-Galerien.",
        },
      }}
    />
  );
}
