import type { Metadata } from "next";
import { ProjectRequestForm } from "@/components/forms/project-request-form";
import { pageMetadata } from "@/lib/metadata";
import { localContentRepository as contentRepository } from "@/repositories/local-content-repository";

export const metadata: Metadata = pageMetadata(
  "Projekt anfragen",
  "Beschreiben Sie Ihr Vorhaben und testen Sie die Projektanfrage in der Präsentationsdemo.",
  "/projekt-anfragen",
);

export default async function RequestPage({
  searchParams,
}: {
  searchParams: Promise<{ angebot?: string | string[] }>;
}) {
  const { angebot } = await searchParams;
  const offer =
    typeof angebot === "string"
      ? await contentRepository.getOfferPage(angebot)
      : undefined;
  return (
    <main id="main-content">
      <section className="inner-hero">
        <div className="shell">
          <p className="eyebrow eyebrow--light">
            <span />
            Projektanfrage
          </p>
          <h1>Erzählen Sie uns, was Sie vorhaben.</h1>
          <p>
            Ein paar Angaben genügen für den Anfang. Im Demo können Sie den
            vorgesehenen Ablauf unverbindlich testen.
          </p>
        </div>
      </section>
      <section className="content-section">
        <div className="shell request-layout">
          <div>
            <p className="eyebrow">
              <span />
              Der erste Schritt
            </p>
            <h2>Persönlich beraten. Klar geplant.</h2>
            <div className="content-copy">
              <p>
                Nach Ihrer Anfrage klärt KLOTZ Bedarf, Einbausituation und
                nächste Schritte persönlich mit Ihnen. Im späteren System können
                Dateien und Fotos sicher ergänzt werden.
              </p>
            </div>
          </div>
          <ProjectRequestForm
            key={offer?.slug ?? "general"}
            initialTopic={offer?.inquiryTopic}
            initialMessage={
              offer
                ? `Ich interessiere mich für ${offer.shortTitle}. Bitte beraten Sie mich zu einer passenden Ausführung und einem aktuellen Angebot.\n\nMein Vorhaben: `
                : undefined
            }
          />
        </div>
      </section>
    </main>
  );
}
