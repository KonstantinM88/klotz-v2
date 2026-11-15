import type { Article, SiteSettings } from "@/domain/content/types";
import type { ServicePageContent } from "@/domain/content/service-page";
import type { WindowsServiceContent } from "@/domain/content/windows";
import { ServiceLandingPage } from "@/features/services/service-landing-page";
import { ServicePhotoGallery } from "@/features/services/service-photo-gallery";
import { WindowsMaterials } from "./windows-materials";

export function WindowsServicePage({
  content,
  site,
  related,
  guide,
}: {
  content: WindowsServiceContent;
  site: SiteSettings;
  related: ServicePageContent[];
  guide?: Article;
}) {
  return (
    <ServiceLandingPage
      content={content}
      site={site}
      related={related}
      guide={guide}
      editorial={
        content.materials.length ? (
          <WindowsMaterials
            chapters={content.materials}
            serviceSlug={content.slug}
          />
        ) : undefined
      }
      gallery={<ServicePhotoGallery content={content.gallery} />}
      context={{
        label: "Fenster & Türen",
        href: "/fenster-tueren",
        overviewLabel: "Fenster & Türen im Überblick",
        closingTitle: "Ihr Zuhause.",
        closingAccent: "Ihr nächster Schritt.",
        closingText:
          "Erzählen Sie uns, was Sie verändern möchten. Fotos, ein paar Eckdaten und Ihre Wünsche sind ein guter Anfang für die persönliche Beratung.",
        archive:
          content.slug === "einbruchschutz"
            ? {
                href: "https://www.polizei-beratung.de/themen-und-tipps/einbruch/technische-sicherheit/",
                label: "Unabhängige Orientierung / Polizeiliche Prävention",
                title: "Fenster und Türen gezielt betrachten.",
                text: "Informationen der polizeilichen Prävention helfen, Fragen zur technischen Sicherung zu ordnen. Die konkrete Ausführung für Ihr Gebäude wird anschließend persönlich besprochen.",
              }
            : {
                href: "/unternehmen",
                label: "KLOTZ / Persönlich vor Ort",
                title: "Materialien sehen. Möglichkeiten besprechen.",
                text: "Lernen Sie KLOTZ und die Beratung in Merseburg-Meuschau kennen. Gemeinsam ordnen wir Ihre Wünsche und die Möglichkeiten für Ihr Zuhause ein.",
              },
      }}
    />
  );
}
