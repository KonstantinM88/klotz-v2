import type { Article, SiteSettings } from "@/domain/content/types";
import type { ServicePageContent } from "@/domain/content/service-page";
import { ServiceLandingPage } from "@/features/services/service-landing-page";

export function FenceServicePage({
  content,
  site,
  related,
  guide,
}: {
  content: ServicePageContent;
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
      context={{
        label: "Zaun & Tor",
        href: "/zaun-tor",
        overviewLabel: "Alle Lösungen für Ihr Grundstück",
        closingTitle: "Ihr Grundstück.",
        closingAccent: "Ihre gute nächste Idee.",
        closingText:
          "Erzählen Sie uns von Ihrer Einfahrt, Ihrem Garten oder dem geplanten Geländer. Eine Skizze, Fotos und Ihre Wünsche geben dem ersten Gespräch eine klare Richtung.",
        archive:
          content.slug === "zaunanlagen"
            ? {
                href: "/referenzen/einzaeunung-stadtstadion",
                label: "Einblick / Zaun im Objektbereich",
                title: "Einzäunung Stadtstadion.",
                text: "Eine veröffentlichte KLOTZ-Referenz zeigt einen Grundstücksabschluss im Objektbereich. Entdecken Sie die vorhandenen Ansichten der Einzäunung.",
              }
            : {
                href: "/unternehmen",
                label: "KLOTZ / Beratung in Meuschau",
                title: "Ideen persönlich weiterdenken.",
                text: "Lernen Sie KLOTZ und die Beratung am Standort kennen. Hier besprechen wir Materialien, Gestaltung und den nächsten Schritt für Ihr Vorhaben.",
              },
      }}
    />
  );
}
