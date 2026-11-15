import type { BusinessPageContent } from "@/domain/content/business";
import { businessWorkMedia } from "./business-media";

export const businessPageContent: BusinessPageContent = {
  metadata: {
    title: "Bauelemente für Gewerbe & Wohnungswirtschaft | Merseburg",
    description:
      "KLOTZ begleitet Hausverwaltungen, Unternehmen, Hotels und Gastronomie mit Bauelementen, Montage und Service. Ihr Objekt in Merseburg, Halle und Leipzig besprechen.",
  },
  hero: {
    title: "Ihr Objekt.",
    accent: "Unser gemeinsamer Plan.",
    lead: "Fenster, Türen, Außenanlagen und Service für Gebäude, die täglich genutzt werden. KLOTZ begleitet Hausverwaltungen, Unternehmen sowie Hotels und Gastronomie – mit persönlicher Beratung, Aufmaß und abgestimmter Montage aus Merseburg-Meuschau.",
    media: businessWorkMedia,
  },
  introduction: {
    title: "Ihr Auftrag beginnt beim Verstehen.",
    paragraphs: [
      "Ein Wohnungsbestand stellt andere Fragen als eine Betriebszufahrt oder eine Restaurantterrasse. Gemeinsam ist ihnen: Die Lösung muss zur Nutzung passen, der Umfang verständlich sein und die Umsetzung mit den Menschen vor Ort abgestimmt werden. Deshalb beginnt KLOTZ bei Ihrer Aufgabe und dem vorhandenen Objekt.",
      "Für Wohnungsgesellschaften, Hausverwaltungen und mittelständische Unternehmen verbindet KLOTZ Fachberatung, technische Vorbereitung und Montage. So führen wir Ihr Vorhaben vom Aufmaß und Angebot bis zur Umsetzung und Abnahme. Im Raum Merseburg, Halle (Saale), Leipzig und Saalekreis besprechen wir mit Ihnen, welche Leistungen zu Ihrem Objekt passen.",
    ],
  },
  trust: {
    title: "Verlässlich an Ihrer Seite.",
    accent: "Mit Erfahrung für Ihr Objekt.",
    lead: "Für professionelle Auftraggeber zählen fachliche Erfahrung, erreichbare Ansprechpartner und ein verständlicher Weg zur Umsetzung. Dafür verbinden wir bei KLOTZ Beratung, technische Vorbereitung, Montage und Service.",
    experience: {
      value: "30+",
      label: "Jahre KLOTZ in der Region",
      text: "Der Name KLOTZ steht seit über 30 Jahren für Bauelemente im Raum Halle und Leipzig. Diese gewachsene Erfahrung fließt in die Beratung und Umsetzung Ihres Vorhabens ein.",
    },
    advantages: [
      {
        title: "Von der Beratung bis zur Abnahme",
        text: "Fachberatung, technische Vorbereitung und Montage greifen bei KLOTZ ineinander. Aufmaß, Angebot und die vereinbarte Ausführung bilden einen zusammenhängenden Weg für Ihr Projekt.",
      },
      {
        title: "Mit Wohnungsbestand und Gewerbe vertraut",
        text: "Wohnungsgesellschaften, Hausverwaltungen und mittelständische Unternehmen gehören zu unserem Kundenkreis. Wir betrachten Ihr Anliegen mit Blick auf Nutzung, Zugang und die Menschen vor Ort.",
      },
      {
        title: "Persönlich in Merseburg-Meuschau",
        text: "Besprechen Sie Ihr Objekt direkt mit KLOTZ. Die Innen- und Außenausstellung am Standort bietet einen Rahmen, um Materialien und Ausführungen im persönlichen Gespräch zu vergleichen.",
      },
      {
        title: "Auch für Bestehendes ansprechbar",
        text: "Wartung und Instandsetzung gehören zum Leistungsspektrum. Bei Auffälligkeiten besprechen wir geeignete Schritte, verfügbare Komponenten und die Möglichkeiten, vorhandene Bauelemente zu erhalten.",
      },
    ],
  },
  tasks: [
    {
      title: "Mehrere Meldungen aus dem Wohnungsbestand?",
      text: "Objekte und betroffene Elemente ordnen. Reparatur und Erneuerung zunächst anhand des Zustands einordnen, statt jede Meldung als Komplettaustausch zu behandeln.",
      href: "/gewerbekunden/wohnungswirtschaft",
      label: "Bestandsmaßnahmen vorbereiten",
    },
    {
      title: "Zugang oder Zufahrt am Betrieb verändern?",
      text: "Verkehrswege, Nutzung und Bewegungsraum gemeinsam betrachten. Montageflächen, elektrische Versorgung und weitere Gewerke von Anfang an ansprechen.",
      href: "/gewerbekunden/industrie-gewerbe",
      label: "Standortprojekt konkretisieren",
    },
    {
      title: "Die Terrasse soll Gästen mehr bieten?",
      text: "Sitzbereiche, Schatten und Servicewege zusammen planen. Dach und seitliche Elemente als Konzept vergleichen, passend zu Ihrer gewünschten Nutzung.",
      href: "/gewerbekunden/hotellerie-gastronomie",
      label: "Außenbereich weiterdenken",
    },
    {
      title: "Ein Bauelement funktioniert nicht wie gewohnt?",
      text: "Element, Auffälligkeit und vorhandene Unterlagen beschreiben. Ob Reparatur, Teilersatz oder Erneuerung infrage kommt, wird am konkreten Bestand geprüft.",
      href: "/gewerbekunden/wartung-service",
      label: "Serviceanliegen einordnen",
    },
  ],
  process: [
    {
      title: "Aufgabe und Objekt kennenlernen",
      text: "Sie beschreiben Anlass, Projektort und vorhandene Situation. Fotos, Stückzahlen und bekannte Maße geben dem ersten Gespräch eine konkrete Grundlage.",
      result: "Gemeinsames Verständnis Ihrer Aufgabe",
    },
    {
      title: "Bestand und Umfang klären",
      text: "Aufmaß, Ausführung und erforderliche Vorarbeiten werden für das Vorhaben besprochen. Reparaturmöglichkeiten und Schnittstellen werden dort betrachtet, wo sie relevant sind.",
      result: "Abgegrenzte Grundlage für das Angebot",
    },
    {
      title: "Ausführung abstimmen",
      text: "Zugang, zuständige Personen und Montagebedingungen werden vereinbart. Bei laufender Nutzung gehören mögliche Einschränkungen und erforderliche Abstimmungen dazu.",
      result: "Besprochene Voraussetzungen und nächste Schritte",
    },
    {
      title: "Umsetzen und gemeinsam abschließen",
      text: "Die vereinbarten Arbeiten führen zur Abnahme. Benötigte Unterlagen, offene Punkte und ein möglicher späterer Service werden passend zum Auftrag besprochen.",
      result: "Nachvollziehbarer Abschluss der vereinbarten Leistung",
    },
  ],
  preparation: [
    {
      title: "Objekt & Standort",
      text: "Welche Gebäude oder Bereiche sind betroffen? Nennen Sie Projektort, Nutzung und eine grobe Stückzahl. Eine vorhandene Objektliste genügt als Einstieg.",
    },
    {
      title: "Aufgabe & Bestand",
      text: "Geht es um Erneuerung, Ergänzung oder eine Störung? Gesamtansichten, Details und bekannte Produktangaben helfen bei der Einordnung.",
    },
    {
      title: "Ablauf & Beteiligte",
      text: "Wer entscheidet, wer öffnet vor Ort und welche Zeiten oder Wege sind wichtig? Teilen Sie bekannte Einschränkungen früh mit.",
    },
    {
      title: "Wünsche & Unterlagen",
      text: "Ein Terminwunsch, Skizzen oder vorhandene Pläne helfen beim Gespräch. Exakte technische Daten müssen für die erste Anfrage noch nicht vollständig sein.",
    },
  ],
  faq: [
    {
      question: "Für welche gewerblichen Auftraggeber arbeitet KLOTZ?",
      answer:
        "KLOTZ begleitet Wohnungsgesellschaften, Hausverwaltungen und mittelständische Unternehmen sowie Hotels und Gastronomiebetriebe. Welcher Leistungsumfang für Ihr Objekt passt, wird anhand der Aufgabe und der örtlichen Situation geklärt. Wählen Sie Ihr Thema oder beschreiben Sie das Vorhaben direkt in einer Anfrage.",
    },
    {
      question:
        "Können wir Reparaturen und geplante Erneuerungen gemeinsam besprechen?",
      answer:
        "Ja. Eine Übersicht über betroffene Elemente und den Anlass hilft, unterschiedliche Maßnahmen zu ordnen. Welche Teile erhalten werden können und wo ein Austausch sinnvoll ist, wird am vorhandenen Bestand geprüft. Daraus lässt sich der gewünschte Auftrag abgrenzen.",
    },
    {
      question:
        "Wie werden laufender Betrieb oder bewohnte Gebäude berücksichtigt?",
      answer:
        "Nennen Sie wichtige Wege, Betriebszeiten und Zuständigkeiten für den Zutritt. Mögliche Abschnitte, Sperrungen und Abstimmungen werden vor der Ausführung besprochen. Eine Montage ohne jede Beeinträchtigung oder zu einem festen Wunschtermin wird nicht pauschal zugesagt.",
    },
    {
      question: "Welche Region betreut KLOTZ für Objektanfragen?",
      answer:
        "Der Standort ist Merseburg-Meuschau. Merseburg, Halle (Saale), Leipzig und Saalekreis bilden den regionalen Schwerpunkt dieser Seite. Nennen Sie Ihren Projektort, damit die konkrete Anfrage und die Möglichkeiten zur Umsetzung eingeordnet werden können.",
    },
    {
      question: "Brauchen wir bereits ein Leistungsverzeichnis?",
      answer:
        "Für ein erstes Gespräch genügt eine verständliche Aufgabenbeschreibung mit Projektort, betroffenen Elementen und gegebenenfalls Fotos. Wenn Pläne oder ein Leistungsverzeichnis vorliegen, erwähnen Sie diese in der Anfrage. Benötigte Unterlagen und der weitere Weg werden gemeinsam besprochen.",
    },
    {
      question:
        "Gibt es einen pauschalen Wartungsvertrag oder feste Servicezeiten?",
      answer:
        "Vertragsumfang, Termine und benötigte Unterlagen werden für das konkrete Objekt besprochen. Nennen Sie die betroffenen Anlagen und die gewünschten Aufgaben, damit die Möglichkeiten eingeordnet werden können. Ein dringendes Anliegen klären Sie am besten telefonisch; ein Termin wird individuell vereinbart.",
    },
  ],
  sourceRefs: [
    "https://www.klotz.mobi/ueber-uns",
    "https://www.klotz.mobi/kontakt",
    "https://www.klotz.mobi/portfolio/wartung-service",
    "https://www.klotz.mobi/inspirationen-f%C3%BCr-die-hotellerie-gastronomiebranche",
  ],
  status: "draft",
};
