import type { WindowsPageContent } from "@/domain/content/windows";
import { windowsServicePages } from "./windows-services";
import { windowsMedia } from "./windows-media";

const cards: Record<string, { benefit: string; description: string }> = {
  einbruchschutz: {
    benefit: "Bewusst planen. Passend ergänzen.",
    description:
      "Fenster und Türen als Ganzes betrachten: Besprechen Sie mit KLOTZ, ob eine geeignete Nachrüstung oder neue Elemente zu Ihren Anforderungen passen. Konkrete Eigenschaften werden für die ausgewählte Ausführung geklärt.",
  },
  fenster: {
    benefit: "Mehr Licht. Mehr Freude am Wohnen.",
    description:
      "Kunststoff, Aluminium oder Holz? Finden Sie Fenster, die Architektur und Alltag verbinden. Wir betrachten Material, Verglasung, Öffnung und den Einbau in Ihr Haus gemeinsam.",
  },
  haustueren: {
    benefit: "Der erste Eindruck bleibt.",
    description:
      "Ein Eingang mit Charakter: Wählen Sie Motiv, Farbe, Glas und Griff als stimmige Einheit. Bedienung, Verriegelung und die Übergänge zum Gebäude gehören von Anfang an dazu.",
  },
  innentueren: {
    benefit: "Ein Stil, der Räume verbindet.",
    description:
      "CPL, Furnier, Weißlack oder Glas: Innentüren prägen die Atmosphäre Ihres Zuhauses. Türblatt, Zarge und Beschlag werden auf Boden, Raum und Nutzung abgestimmt.",
  },
  rolllaeden: {
    benefit: "Ihr Licht. Ihr Rückzug.",
    description:
      "Verdunkelung, Sichtschutz und eine angenehmere Bedienung. Entdecken Sie Lösungen für neue Fenster, die Nachrüstung am Bestand oder die Modernisierung vorhandener Rollläden.",
  },
};
export const windowsPageContent: WindowsPageContent = {
  metadata: {
    title: "Fenster & Türen in Merseburg: Beratung & Montage",
    description:
      "Fenster, Haustüren, Innentüren und Rollläden für Ihr Zuhause. KLOTZ in Merseburg verbindet persönliche Auswahl, Aufmaß und Montage in Halle, Leipzig & Region.",
  },
  hero: {
    title: "Das gute Gefühl,",
    accent: "zu Hause zu sein.",
    lead: "Fenster, die zu Ihrem Haus passen. Ein Eingang, der Sie willkommen heißt. Türen, die Räume verbinden. Mit KLOTZ planen Sie neue Bauelemente vom ersten Wunsch bis zum passenden Einbau – persönlich in Merseburg und der Region.",
    media: windowsMedia.haustueren,
  },
  introduction: {
    title: "Gute Entscheidungen beginnen bei Ihrem Zuhause.",
    paragraphs: [
      "Sie modernisieren einzelne Räume, erneuern einen Eingang oder planen den Austausch mehrerer Fenster? Wir helfen Ihnen, die Auswahl zu ordnen. Entscheidend ist, was sich für Sie verbessern soll: Licht, Bedienkomfort, die Gestaltung oder das Zusammenspiel mit dem bestehenden Gebäude.",
      "KLOTZ verbindet die Produktauswahl mit dem Blick auf den Einbau. In Merseburg-Meuschau besprechen Sie Materialien und Möglichkeiten persönlich. Aus Ihren Vorstellungen, der Situation vor Ort und dem genauen Aufmaß entsteht die Grundlage für ein nachvollziehbares Angebot.",
    ],
  },
  solutions: windowsServicePages.map(({ slug, title, media }) => {
    const card = cards[slug];
    if (!card) throw new Error(`Missing windows overview copy: ${slug}`);
    return { slug, title, media, ...card };
  }),
  decisions: [
    {
      wish: "Die Fenster ziehen oder lassen sich schwer öffnen.",
      approach:
        "Zuerst den Zustand prüfen: Dichtungen, Beschläge und Verglasung helfen bei der Entscheidung zwischen Instandsetzung und Austausch.",
      label: "Fenster richtig einordnen",
      href: "/wissen/fenster-reparieren-oder-austauschen",
    },
    {
      wish: "Der Eingang soll schöner und komfortabler werden.",
      approach:
        "Türmotiv, Licht im Flur, gewünschte Verriegelung und die vorhandenen Bodenhöhen gemeinsam betrachten.",
      label: "Haustür planen",
      href: "/fenster-tueren/haustueren",
    },
    {
      wish: "Die Wohnung soll nach der Renovierung stimmig wirken.",
      approach:
        "Innentüren mit Boden und Wänden auswählen. Zargen, Wandstärken und Öffnungsrichtungen früh abstimmen.",
      label: "Innentüren auswählen",
      href: "/fenster-tueren/innentueren",
    },
    {
      wish: "Ich möchte abends mehr Privatsphäre und leichter bedienen.",
      approach:
        "Rollläden je Raum planen und prüfen, ob Nachrüstung, Motorisierung oder Erneuerung zu Ihrem Bestand passt.",
      label: "Rollläden entdecken",
      href: "/fenster-tueren/rolllaeden",
    },
  ],
  preparation: [
    {
      title: "Ihr Ziel",
      text: "Was soll besser werden: Licht, Gestaltung, Bedienung oder Komfort? Nennen Sie auch, welche Räume und wie viele Elemente betroffen sind.",
    },
    {
      title: "Der Bestand",
      text: "Fotos von innen und außen zeigen Rahmen, Zargen und Anschlüsse. Grobe Maße helfen beim Einstieg; die Bestellmaße werden fachlich aufgenommen.",
    },
    {
      title: "Weitere Arbeiten",
      text: "Eine neue Fassade, Dämmung oder ein anderer Fußboden beeinflusst Anschlüsse und Höhen. Sprechen Sie die geplante Reihenfolge früh an.",
    },
    {
      title: "Der Leistungsumfang",
      text: "Material, Ausstattung, Ausbau und Montage sollen klar beschrieben sein. So können Sie Lösungen und Angebote auf derselben Grundlage vergleichen.",
    },
  ],
  process: [
    {
      title: "Wünsche klären",
      text: "Wir besprechen, was Ihnen wichtig ist und welche Elemente Sie verändern möchten.",
    },
    {
      title: "Ausführung wählen",
      text: "Material, Gestaltung und Bedienung werden anhand Ihrer Nutzung eingeordnet.",
    },
    {
      title: "Genau aufmessen",
      text: "Die Situation am Gebäude und die nötigen Anschlüsse werden aufgenommen.",
    },
    {
      title: "Angebot & Montage",
      text: "Umfang und Ablauf werden abgestimmt, die vereinbarte Montage wird bis zur Abnahme begleitet.",
    },
    {
      title: "Ansprechpartner behalten",
      text: "Auch Fragen zu Wartung, Instandsetzung oder einer späteren Ergänzung können Sie an KLOTZ richten.",
    },
  ],
  faq: [
    {
      question: "Wo kann ich mich zu Fenstern und Türen beraten lassen?",
      answer:
        "KLOTZ hat seinen Standort mit Innen- und Außenausstellung in der Zur Saale 16 in Merseburg-Meuschau. Stimmen Sie Ihren Besuch ab und bringen Sie Fotos oder erste Vorstellungen mit. Vorhaben in Merseburg, Halle (Saale), Leipzig und der Region lassen sich hier persönlich besprechen.",
    },
    {
      question: "Kann ich Fenster, Haustür und Rollläden zusammen planen?",
      answer:
        "Eine gemeinsame Planung ist sinnvoll, wenn Gestaltung und Anschlüsse zusammenpassen sollen. Farbe, Proportionen, Bedienung und die Reihenfolge der Arbeiten können dadurch früh abgestimmt werden. Sie können ebenso mit einem einzelnen Element beginnen und weitere Schritte im Gespräch berücksichtigen.",
    },
    {
      question: "Wie finde ich eine passende Lösung für meinen Altbau?",
      answer:
        "Beginnen Sie bei den vorhandenen Proportionen, dem Zustand und Ihrem Modernisierungsziel. Fensterteilungen, Türöffnungen und Anschlüsse verdienen im Bestand besondere Aufmerksamkeit. Wenn besondere Vorgaben für das Gebäude bestehen, bringen Sie diese zur Beratung mit; die Auswahl wird daran ausgerichtet.",
    },
    {
      question: "Wovon hängen die Kosten mit Montage ab?",
      answer:
        "Maße und Anzahl, Material, Ausstattung und Einbausituation bestimmen den Umfang. Dazu kommen gegebenenfalls Ausbau, Entsorgung oder Anschlussarbeiten. Ein belastbares Angebot braucht deshalb eine besprochene Ausführung und ein genaues Aufmaß. Preisbeispiele können orientieren, ersetzen aber kein Angebot für Ihr Gebäude.",
    },
    {
      question: "Hilft KLOTZ auch bei bestehenden Fenstern und Türen?",
      answer:
        "Wartung und Instandsetzung gehören zum beschriebenen Leistungsbereich. Eine Prüfung kann zeigen, ob eine Reparatur, der Austausch einer Komponente oder ein neues Element sinnvoll ist. Nennen Sie die Art des Problems und zeigen Sie Fotos; passende nächste Schritte werden persönlich geklärt.",
    },
  ],
  sourceRefs: [
    "https://www.klotz.mobi/portfolio/fenster",
    "https://www.klotz.mobi/portfolio/tueren",
    "https://www.klotz.mobi/rolllaeden",
    "https://www.klotz.mobi/portfolio/wartung-service",
    "https://www.klotz.mobi/ueber-uns",
    "https://www.klotz.mobi/kontakt",
  ],
  reviewedAt: "2026-11-15",
  status: "draft",
};
