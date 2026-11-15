import {
  serviceRequestContext,
  type RequestContext,
} from "@/features/inquiry/service-context";
import { configuratorRequestContext } from "@/features/inquiry/configurator-context";
import type { Metadata } from "next";
import { ProjectRequestForm } from "@/components/forms/project-request-form";
import { pageMetadata } from "@/lib/metadata";
import { localContentRepository as contentRepository } from "@/repositories/local-content-repository";
import Image from "next/image";
import Link from "next/link";
import "@/styles/request-inspiration.css";

export const metadata: Metadata = pageMetadata(
  "Projekt anfragen",
  "Beschreiben Sie Ihr Vorhaben und testen Sie die Projektanfrage in der Präsentationsdemo.",
  "/projekt-anfragen",
);

export default async function RequestPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const { angebot, bereich, leistung } = params;
  const offer =
    typeof angebot === "string"
      ? await contentRepository.getOfferPage(angebot)
      : undefined;
  const context: RequestContext | undefined = !offer
    ? ((await serviceRequestContext(
        contentRepository,
        leistung,
        bereich,
        params,
      )) ?? (await configuratorRequestContext(contentRepository, params)))
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
            {context?.inspiration ? (
              <figure className="request-inspiration">
                <div className="request-inspiration__image">
                  <Image
                    src={context.inspiration.image.src}
                    alt={context.inspiration.image.alt}
                    width={context.inspiration.image.width}
                    height={context.inspiration.image.height}
                    sizes="(max-width: 760px) calc(100vw - 40px), 35vw"
                  />
                </div>
                <figcaption>
                  <p className="request-inspiration__label">
                    Ihre Gesprächsgrundlage
                  </p>
                  <h3>{context.inspiration.title}</h3>
                  <p>{context.inspiration.description}</p>
                  <Link href={context.inspiration.backHref}>
                    Auswahl noch einmal ansehen{" "}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </figcaption>
              </figure>
            ) : null}
          </div>
          <ProjectRequestForm
            key={offer?.slug ?? context?.key ?? "general"}
            initialTopic={offer?.inquiryTopic ?? context?.topic}
            initialMessage={
              offer
                ? `Ich interessiere mich für ${offer.shortTitle}. Bitte beraten Sie mich zu einer passenden Ausführung und einem aktuellen Angebot.\n\nMein Vorhaben: `
                : context?.message
            }
          />
        </div>
      </section>
    </main>
  );
}
