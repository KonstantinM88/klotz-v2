import type { ContentRepository } from "@/repositories/content-repository";
import type { ServicePageContent } from "@/domain/content/service-page";
import type { inquiryTopics } from "./options";
import type { ImageAsset } from "@/domain/content/types";
import type { WindowsMaterialChapter } from "@/domain/content/windows";
import type { ServiceGalleryContent } from "@/domain/content/service-gallery";

type Topic = (typeof inquiryTopics)[number];
export type RequestContext = {
  key: string;
  topic: Topic;
  message: string;
  inspiration?: {
    title: string;
    description: string;
    image: ImageAsset;
    backHref: string;
  };
};
type SelectableService = ServicePageContent & {
  inquiryTopic?: Topic;
  gallery?: ServiceGalleryContent;
  materials?: WindowsMaterialChapter[];
};

/** Only known editorial entities may prefill the public demo form. */
export async function serviceRequestContext(
  repository: ContentRepository,
  leistung: string | string[] | undefined,
  bereich: string | string[] | undefined,
  choices: { material?: string | string[]; bild?: string | string[] } = {},
): Promise<RequestContext | undefined> {
  const groups: {
    slug: string;
    topic: Topic;
    message: string;
    pages: () => Promise<SelectableService[]>;
  }[] = [
    {
      slug: "terrasse-garten",
      topic: "Terrasse & Garten",
      message:
        "Ich interessiere mich für eine Lösung für meine Terrasse oder meinen Garten. Bitte beraten Sie mich zu Überdachung, Beschattung und passenden Erweiterungen.",
      pages: () => repository.getTerraceServicePages(),
    },
    {
      slug: "fenster-tueren",
      topic: "Fenster & Türen",
      message:
        "Ich interessiere mich für Fenster, Türen oder Rollläden. Bitte beraten Sie mich zur passenden Auswahl und Montage.",
      pages: () => repository.getWindowsServicePages(),
    },
    {
      slug: "zaun-tor",
      topic: "Zaun & Tor",
      message:
        "Ich interessiere mich für Zaun, Tor oder Geländer. Bitte beraten Sie mich zur passenden Gestaltung, Ausführung und Montage.",
      pages: () => repository.getFenceServicePages(),
    },
    {
      slug: "gewerbekunden",
      topic: "Gewerbe / Wohnungswirtschaft",
      message:
        "Ich möchte eine Objektanfrage für unser Unternehmen oder unseren Wohnungsbestand besprechen.\n\nProjektort / PLZ:\nNutzung und betroffene Bauelemente:\nGewünschte Arbeiten:\nAnsprechpartner und Terminwunsch:",
      pages: () => repository.getBusinessServicePages(),
    },
  ];
  if (typeof leistung === "string") {
    const sets = await Promise.all(groups.map((group) => group.pages()));
    for (const [index, pages] of sets.entries()) {
      const page = pages.find((page) => page.slug === leistung);
      const group = groups[index];
      if (page && group) {
        const photo =
          typeof choices.bild === "string"
            ? page.gallery?.items.find((item) => item.id === choices.bild)
            : undefined;
        const material =
          typeof choices.material === "string"
            ? page.materials?.find((item) => item.id === choices.material)
            : undefined;
        const selected = photo ?? material?.image;
        const materialLabel = material?.label.replace(/^\d+ \/ /, "");
        const inspiration = selected
          ? {
              title: photo ? photo.title : materialLabel!,
              description: photo
                ? "Als Gestaltungsidee für das Gespräch ausgewählt. Material, Maße und Ausstattung stimmen wir für Ihr Vorhaben ab."
                : "Ihre gewünschte Materialrichtung für die Beratung. Die konkrete Ausführung wählen wir gemeinsam passend zu Ihrem Zuhause.",
              image: selected.image,
              backHref: `/${group.slug}/${page.slug}#${photo ? "bilder" : material!.id}`,
            }
          : undefined;
        const selectedMessage = photo
          ? `\n\nMeine Bildidee: ${photo.title}\nDie Abbildung dient als Gestaltungsidee; Ausführung und Ausstattung möchte ich persönlich abstimmen.`
          : material
            ? `\n\nMeine Materialrichtung: ${materialLabel}\nBitte beraten Sie mich zur passenden Ausführung für mein Zuhause.`
            : "";
        return {
          key: `${group.slug}/${page.slug}${selected ? `/${photo?.id ?? material!.id}` : ""}`,
          topic: page.inquiryTopic ?? group.topic,
          message: `${page.requestMessage}${selectedMessage}\n\nMein Vorhaben: `,
          inspiration,
        };
      }
    }
  }
  const group =
    typeof bereich === "string"
      ? groups.find((group) => group.slug === bereich)
      : undefined;
  return group
    ? {
        key: group.slug,
        topic: group.topic,
        message: `${group.message}\n\nMein Vorhaben: `,
      }
    : undefined;
}
