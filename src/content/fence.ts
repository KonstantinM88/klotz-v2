import type { FencePageContent } from "@/domain/content/fence";
import { fenceServicePages } from "./fence-services";
import { fenceMedia } from "./fence-media";

const descriptions: Record<string, { benefit: string; description: string }> = {
  zaunanlagen: {
    benefit: "Ein Rahmen für Haus und Garten.",
    description:
      "Offene Doppelstabmatten, klare Aluminiumlinien oder klassischer Stahl: Finden Sie den Grundstücksabschluss, der Gestaltung und tägliche Zugänge zusammenbringt.",
  },
  sichtschutz: {
    benefit: "Mehr Rückzug. Genau dort, wo Sie ihn möchten.",
    description:
      "Schützen Sie Ihren Lieblingsplatz vor Einblicken. Material, Blickrichtungen und offene Akzente werden gemeinsam betrachtet, damit der Garten großzügig wirkt.",
  },
  hoftore: {
    benefit: "Der Eingang, der zu Ihnen passt.",
    description:
      "Offen, geschlossen oder mit einer eigenen Gehtür: Planen Sie Tor und Zaun als stimmigen Empfang. Flügel und Bewegungsraum richten sich nach Ihrer Einfahrt.",
  },
  schiebetore: {
    benefit: "Seitlich öffnen. Die Einfahrt klar halten.",
    description:
      "Wenn ein Tor entlang der Grenze öffnet, zählt der Platz daneben. Entdecken Sie, worauf es bei Rücklauf, Untergrund und der passenden Gestaltung ankommt.",
  },
  "elektrische-toranlagen": {
    benefit: "Komfort beginnt beim Ankommen.",
    description:
      "Neue Anlage oder mögliche Nachrüstung: Tor, Antrieb, Bedienung und Schutzfunktionen werden gemeinsam geplant. So passt die Technik zu Ihrem Alltag.",
  },
  gelaender: {
    benefit: "Klare Linien für Treppe, Balkon und Terrasse.",
    description:
      "Glas, Metall und ein passender Handlauf prägen Raum und Ausblick. Die konkrete Ausführung beginnt bei Nutzung, Untergrund und einer geeigneten Befestigung.",
  },
};
export const fencePageContent: FencePageContent = {
  metadata: {
    title: "Zäune & Tore in Merseburg: Planung und Montage",
    description:
      "Zäune, Sichtschutz, Hof- und Schiebetore, elektrische Toranlagen und Geländer. KLOTZ in Merseburg plant mit Ihnen passende Lösungen für Haus und Grundstück.",
  },
  hero: {
    title: "Ein schöner Rahmen.",
    accent: "Ein guter Empfang.",
    lead: "Offen zur Straße. Geschützt im Garten. Bequem an der Einfahrt. Mit KLOTZ gestalten Sie Zäune, Tore und Geländer als passende Teile Ihres Zuhauses – persönlich geplant in Merseburg und der Region.",
    media: fenceMedia.hoftore,
  },
  introduction: {
    title: "Ihr Grundstück. Als Ganzes gedacht.",
    paragraphs: [
      "Ein Zaun folgt der Grenze, ein Tor öffnet den Weg und ein Sichtschutz schafft einen Ort zum Zurückziehen. Zusammen prägen sie, wie Ihr Zuhause von außen wirkt und wie Sie es täglich nutzen. Wir beginnen deshalb bei Ihren Wegen, Blickrichtungen und dem vorhandenen Gelände.",
      "KLOTZ begleitet die Auswahl mit Beratung, Aufmaß und der vereinbarten Montage. In Merseburg-Meuschau können Sie Materialien und Möglichkeiten persönlich besprechen. Ob einzelner Abschnitt oder zusammenhängende Außenanlage: Aus Ihren Wünschen entsteht eine nachvollziehbare Planung für Ihr Grundstück.",
    ],
  },
  solutions: fenceServicePages.map(({ slug, title, media }) => {
    const copy = descriptions[slug];
    if (!copy) throw new Error(`Missing fence overview content: ${slug}`);
    return { slug, title, media, ...copy };
  }),
  decisions: [
    {
      title: "Die Straßenseite soll offen und gepflegt wirken.",
      text: "Ein offener Zaun kann Fassade und Garten sichtbar lassen. Material, Farbe und die wiederkehrenden Linien werden mit dem Haus abgestimmt.",
      href: "/zaun-tor/zaunanlagen",
      label: "Zaungestaltungen entdecken",
    },
    {
      title: "Auf der Terrasse möchte ich ungestört sitzen.",
      text: "Entscheidend sind die Blickrichtungen am Sitzplatz. Ein gezielter Sichtschutz kann Rückzug schaffen und andere Gartenbereiche bewusst offen halten.",
      href: "/zaun-tor/sichtschutz",
      label: "Privatsphäre planen",
    },
    {
      title: "An der Einfahrt ist wenig Bewegungsraum.",
      text: "Vergleichen Sie den Schwenkbereich eines Drehtors mit dem seitlichen Rücklauf einer Schiebelösung. Der verfügbare Raum gibt die Richtung vor.",
      href: "#torvergleich",
      label: "Öffnungsarten vergleichen",
    },
    {
      title: "Mein vorhandenes Tor soll bequemer werden.",
      text: "Bei einer möglichen Motorisierung stehen Zustand, Mechanik und Einbausituation am Anfang. Danach werden geeignete Technik und Bedienwege besprochen.",
      href: "/zaun-tor/elektrische-toranlagen",
      label: "Torautomatik besprechen",
    },
  ],
  preparation: [
    {
      title: "Verlauf & Zugänge",
      text: "Eine Skizze zeigt Grundstücksseite, Einfahrt, Gehtür und geschützte Bereiche. Ungefähre Längen und Fotos helfen für das erste Gespräch.",
    },
    {
      title: "Gelände & Untergrund",
      text: "Gefälle, Mauern, Pflaster und bekannte Leitungen beeinflussen Befestigung und Montage. Zeigen Sie auch die Übergänge zwischen den Abschnitten.",
    },
    {
      title: "Gestaltung & Alltag",
      text: "Welche Blicke möchten Sie erhalten, welche Zugänge nutzen Sie täglich? Material, Offenheit und Bedienung werden daran ausgerichtet.",
    },
    {
      title: "Gemeinsamer Ablauf",
      text: "Neue Pflasterflächen, Gartenarbeiten und Versorgung für einen Antrieb sollten früh besprochen werden. So können Anschlüsse und Reihenfolge zusammenpassen.",
    },
  ],
  process: [
    {
      title: "Wünsche verstehen",
      text: "Wir besprechen Nutzung, gewünschte Wirkung und die wichtigsten Eckdaten Ihres Vorhabens.",
    },
    {
      title: "Vor Ort aufnehmen",
      text: "Aufmaß, Gelände, Untergrund und Anschlüsse machen die Einbausituation konkret.",
    },
    {
      title: "Lösung & Angebot",
      text: "Material, Konstruktion und vereinbarte Arbeiten werden nachvollziehbar beschrieben.",
    },
    {
      title: "Montage abstimmen",
      text: "Umsetzung und angrenzende Arbeiten werden koordiniert; KLOTZ begleitet die vereinbarte Montage bis zur Abnahme.",
    },
  ],
  faq: [
    {
      question: "Plant KLOTZ Zaun und Tor gemeinsam?",
      answer:
        "Ja, Zaunverlauf, Einfahrt und Gehtür lassen sich als zusammenhängende Lösung besprechen. Gestaltung, Pfosten, Bewegungsraum und die gewünschte Bedienung werden dadurch früh aufeinander abgestimmt. Auch einzelne Abschnitte können der Ausgangspunkt für die Beratung sein.",
    },
    {
      question: "Wie finde ich die passende Lösung für mein Grundstück?",
      answer:
        "Beginnen Sie mit Ihren Zielen: offen abgrenzen, einen Sitzplatz schützen oder die Einfahrt komfortabler nutzen. Eine Skizze und Fotos zeigen die Situation. Daraus werden Material, Verlauf, Zugänge und die geeignete Ausführung entwickelt.",
    },
    {
      question: "Was kostet eine Zaun- oder Toranlage mit Montage?",
      answer:
        "Länge und Abmessungen sind nur ein Teil des Umfangs. Material, Füllung, Gelände, Befestigung und Bedienung bestimmen die Arbeiten mit. Ein konkretes Angebot entsteht aus der gewählten Ausführung und dem Aufmaß; Beispiele können orientieren, ersetzen aber keine Beschreibung Ihres Grundstücks.",
    },
    {
      question: "Welche Fragen kläre ich vor Arbeiten an der Grenze?",
      answer:
        "Für die Planung brauchen Sie einen geklärten Grenzverlauf und die für den Ort relevanten Vorgaben. Sprechen Sie vorhandene Unterlagen und geplante Änderungen früh an. KLOTZ nimmt die bauliche Situation auf und stimmt die mögliche Ausführung mit Ihrem Vorhaben ab.",
    },
    {
      question: "Kann eine bestehende Anlage ergänzt werden?",
      answer:
        "Das wird nach Zustand, Konstruktion und geeigneten verfügbaren Komponenten geprüft. Das betrifft einen dichteren Sichtschutz ebenso wie eine Torautomatik oder ein neues Geländer auf bestehenden Bauteilen. Fotos und bekannte Angaben zur Anlage erleichtern den Einstieg.",
    },
  ],
  sourceRefs: [
    "https://www.klotz.mobi/portfolio/zaeune",
    "https://www.klotz.mobi/portfolio/hoftore",
    "https://www.klotz.mobi/portfolio/aussengelaender",
    "https://www.klotz.mobi/produkte/sichtschutzz%C3%A4une",
    "https://www.klotz.mobi/portfolio/wartung-service",
    "https://www.klotz.mobi/ueber-uns",
    "https://www.klotz.mobi/kontakt",
  ],
  reviewedAt: "2026-11-15",
  status: "draft",
};
