import type { ServicePageContent } from "@/domain/content/service-page";
import { windowsMedia } from "./windows-media";
import { serviceImage } from "./service-images";

export const windowsSecurityPage: ServicePageContent = {
  slug: "einbruchschutz",
  title: "Einbruchschutz",
  metaTitle: "Einbruchschutz für Fenster & Türen in Merseburg",
  metaDescription:
    "Fenster und Türen bewusst absichern: Mit KLOTZ in Merseburg Bestand, passende Nachrüstung oder neue Elemente und die fachgerechte Montage besprechen.",
  hero: {
    title: "Zuhause ankommen.",
    accent: "Mit einem guten Gefühl.",
    lead: "Sie möchten Fenster und Türen gezielt verbessern? Beginnen wir mit Ihrem Gebäude und den vorhandenen Bauteilen. KLOTZ bespricht mit Ihnen, welche Nachrüstung oder neue Ausführung zu Ihren Anforderungen passt – nachvollziehbar geplant und aufeinander abgestimmt.",
    cta: "Meine Anforderungen besprechen",
  },
  media: windowsMedia.einbruchschutz,
  benefits: [
    {
      title: "Das Gebäude im Blick",
      text: "Eingang, erreichbare Fenster und weitere Zugänge werden gemeinsam betrachtet, statt nur ein einzelnes Zubehör auszuwählen.",
    },
    {
      title: "Bestand bewusst prüfen",
      text: "Zustand und Aufbau geben die Richtung vor: geeignete Nachrüstung oder ein passend ausgewähltes neues Element.",
    },
    {
      title: "Eigenschaften klar benennen",
      text: "Ihre Anforderungen, die konkrete Ausführung und die vereinbarte Montage gehören gemeinsam in die Planung.",
    },
  ],
  story: {
    title: "Ihre Fragen verdienen eine konkrete Antwort.",
    paragraphs: [
      "Vielleicht steht ohnehin eine neue Haustür an. Vielleicht möchten Sie zunächst die Fenster im Erdgeschoss prüfen lassen oder wissen, ob vorhandene Elemente sinnvoll ergänzt werden können. Beschreiben Sie im Gespräch, welche Bereiche Ihnen wichtig sind. Daraus lässt sich ein übersichtlicher Umfang für die weitere Betrachtung entwickeln.",
      "Ein Foto des Türblatts allein zeigt nicht die gesamte Situation. Rahmen, Beschläge, Verriegelung und der Anschluss an das Gebäude spielen zusammen. Diese ganzheitliche Betrachtung entspricht auch der Orientierung der polizeilichen Prävention zu mechanischen Sicherungen an Fenstern und Türen.",
      "KLOTZ führt Einbruchschutz im bisherigen Leistungsbereich. Für Ihr Vorhaben werden vorhandene Elemente und gewünschte Maßnahmen konkret besprochen. Für die Auswahl zählen passende Produkte, ihr nachgewiesener Aufbau und eine Montage, die zur vereinbarten Ausführung gehört. So lassen sich Ihre Anforderungen im Gespräch gezielt konkretisieren.",
    ],
  },
  variants: [
    {
      title: "Vorhandene Elemente prüfen",
      description:
        "Bei Fenstern und Türen im Bestand beginnt die Auswahl mit Zustand, Konstruktion und dem vorhandenen Zubehör. Zeigen Sie, welche Elemente erhalten bleiben sollen und welche Veränderungen Sie wünschen.",
      suitable:
        "Für einen geordneten Einstieg ohne vorschnelle Produktentscheidung.",
    },
    {
      title: "Geeignet nachrüsten",
      description:
        "Zusätzliche oder angepasste Komponenten müssen zum vorhandenen Bauteil passen und als Lösung zusammenwirken. Welche Nachrüstung infrage kommt, wird für die jeweilige Situation geprüft.",
      suitable:
        "Wenn ein geeignetes vorhandenes Element weiter genutzt werden soll.",
    },
    {
      title: "Neue Elemente abstimmen",
      description:
        "Steht ein Austausch an, lassen sich Sicherheitswünsche direkt in die Fenster- oder Türauswahl aufnehmen. Besprechen Sie Anforderungen, Bedienung und Gestaltung gemeinsam mit der vorgesehenen Montage.",
      suitable:
        "Wenn Modernisierung und gewünschte Ausstattung in einem Schritt geplant werden.",
    },
  ],
  detail: {
    title: "Einzelteile ergeben erst zusammen eine Lösung.",
    image: serviceImage(
      "/images/building-window-detail.webp",
      "Schnittmodell eines Fensterprofils zur Veranschaulichung des Elementaufbaus",
    ),
    caption:
      "Fensteraufbau als Gesprächsgrundlage · Produktabbildung aus der KLOTZ-Galerie",
    paragraphs: [
      "Ein abschließbarer Griff oder eine zusätzliche Verriegelung beantwortet nicht automatisch alle Fragen am Fenster. Wir besprechen, welche Teile vorhanden sind, welche Veränderungen möglich sind und wie sie zur Konstruktion passen. Die Planung bleibt damit am tatsächlichen Element orientiert.",
      "Bei einer neuen Haustür gehören Bedienkomfort und das Verhalten der Verriegelung ebenfalls zum Gespräch. Wer nutzt den Eingang, wie wird geöffnet und was soll sich gegenüber heute verbessern? Solche Angaben helfen, die Ausstattung nachvollziehbar zusammenzustellen, ohne Ihren Alltag aus dem Blick zu verlieren.",
      "Eine verlangte Schutzklasse muss für die konkrete Ausführung belegt und passend montiert werden. Sie wird nicht aus Material, Farbe oder Produktfoto abgelesen. Allgemeine Orientierung bietet die polizeiliche Prävention; die Auswahl für Ihr Gebäude wird anschließend anhand der vorhandenen Situation und der Produktunterlagen konkretisiert.",
    ],
  },
  planning: [
    {
      title: "Anliegen eingrenzen",
      text: "Nennen Sie die betroffenen Fenster oder Türen und was Sie verbessern möchten. Ein Überblick über die Zugänge macht das erste Gespräch zielgerichtet.",
    },
    {
      title: "Bestand zeigen",
      text: "Fotos der Elemente, Beschläge und Rahmen sowie bekannte Herstellerangaben helfen bei der Vorbereitung. Unbekannte Details lassen sich bei der Aufnahme klären.",
    },
    {
      title: "Ausführung konkretisieren",
      text: "Geeignete Nachrüstung und neue Elemente werden mit Ihrer gewünschten Nutzung verglichen. Wenn bestimmte Eigenschaften gefordert sind, bringen Sie diese schriftlich mit.",
    },
    {
      title: "Umfang dokumentieren",
      text: "Ausgewählte Komponenten, Montage und vereinbarte Arbeiten werden im Angebot beschrieben. So bleibt klar, welche Elemente bearbeitet und welche Eigenschaften vorgesehen sind.",
    },
  ],
  costs: {
    lead: "Der Umfang hängt von Anzahl, Zustand und Aufbau der betroffenen Elemente ab. Eine gezielte Nachrüstung und ein vollständiger Austausch sind unterschiedliche Vorhaben. Vergleichbar werden Angebote durch eine klare Beschreibung der ausgewählten Ausführung und der Montage.",
    factors: [
      "Anzahl und Aufbau der betroffenen Fenster und Türen",
      "Zustand und Eignung vorhandener Elemente",
      "Ausgewählte Nachrüstkomponenten oder neue Bauelemente",
      "Geforderte und nachzuweisende Eigenschaften der konkreten Ausführung",
      "Montage, Anschlüsse und mögliche Anpassungen am Gebäude",
    ],
  },
  faq: [
    {
      question: "Kann ich bestehende Fenster und Türen nachrüsten?",
      answer:
        "Eine geeignete Nachrüstung kann infrage kommen. Dafür müssen Zustand, Aufbau und die passenden Komponenten betrachtet werden. Zeigen Sie im ersten Gespräch die betroffenen Elemente und vorhandene Unterlagen; anschließend lässt sich die konkrete Möglichkeit am Bestand prüfen.",
    },
    {
      question:
        "Bedeutet ein abschließbarer Fenstergriff automatisch Einbruchhemmung?",
      answer:
        "Aus einem einzelnen Griff lässt sich keine Schutzklasse des vollständigen Fensters ableiten. Beschläge, Rahmen, Verglasung und die Einbausituation gehören zur Betrachtung. Besprechen Sie deshalb das gewünschte Ziel für das ganze Element, statt nur nach einem einzelnen Zubehörteil auszuwählen.",
    },
    {
      question: "Welche Schutzklasse hat die abgebildete Tür?",
      answer:
        "Unsere Produktabbildungen dienen als Gestaltungsideen. Daraus wird keine Schutzklasse zugesichert. Wenn Sie eine bestimmte Eigenschaft benötigen, wird sie für die ausgewählte Ausführung anhand geeigneter Produktunterlagen geklärt und im vereinbarten Leistungsumfang berücksichtigt.",
    },
    {
      question: "Wie verbinde ich Sicherheitswünsche mit einem Fenstertausch?",
      answer:
        "Nennen Sie diese Wünsche bereits bei der ersten Auswahl. Dann können Beschläge, Verglasung und weitere Ausstattung zusammen mit Material und Öffnungsart eingeordnet werden. Wichtig ist eine konkret beschriebene Gesamtausführung mit passender Montage, die auch Ihre tägliche Bedienung berücksichtigt.",
    },
    {
      question: "Wo finde ich eine unabhängige erste Orientierung?",
      answer:
        "Die polizeiliche Prävention stellt Informationen zur technischen Sicherung von Fenstern und Türen bereit. Diese helfen, Fragen und Ziele für Ihr Gebäude zu ordnen. In der Beratung mit KLOTZ wird anschließend besprochen, welche konkreten Bauelemente und Arbeiten für Ihr Vorhaben infrage kommen.",
    },
  ],
  related: ["fenster", "haustueren", "rolllaeden"],
  guideSlug: "",
  requestMessage:
    "Ich möchte den Einbruchschutz meiner Fenster oder Türen besprechen. Bitte beraten Sie mich zur Prüfung des Bestands, geeigneter Nachrüstung oder neuen Elementen.",
  sourceRefs: [
    "https://www.klotz.mobi/portfolio/einbruchschutz",
    "https://www.klotz.mobi/produkte/rc23-fenster-t%C3%BCren",
    "https://www.klotz.mobi/produkte/abus-zusatzsicherungen",
    "https://www.polizei-beratung.de/themen-und-tipps/einbruch/technische-sicherheit/",
  ],
  status: "draft",
};
