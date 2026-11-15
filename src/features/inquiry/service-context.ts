import type { ContentRepository } from "@/repositories/content-repository";
import type { ServicePageContent } from "@/domain/content/service-page";
import type { inquiryTopics } from "./options";

type Topic = (typeof inquiryTopics)[number];
type RequestContext = { key: string; topic: Topic; message: string };

/** Only known editorial entities may prefill the public demo form. */
export async function serviceRequestContext(
  repository: ContentRepository,
  leistung: string | string[] | undefined,
  bereich: string | string[] | undefined,
): Promise<RequestContext | undefined> {
  const groups: {
    slug: string;
    topic: Topic;
    message: string;
    pages: () => Promise<ServicePageContent[]>;
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
  ];
  if (typeof leistung === "string") {
    const sets = await Promise.all(groups.map((group) => group.pages()));
    for (const [index, pages] of sets.entries()) {
      const page = pages.find((page) => page.slug === leistung);
      const group = groups[index];
      if (page && group)
        return {
          key: `${group.slug}/${page.slug}`,
          topic: group.topic,
          message: `${page.requestMessage}\n\nMein Vorhaben: `,
        };
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
