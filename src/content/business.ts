import type { BusinessPageContent } from "@/domain/content/business";
import { businessHubMedia } from "./business-media";
import { serviceImage } from "./service-images";

const img = (src: string, alt: string) => {
  const { width, height } = serviceImage(src, alt);
  return { src, alt, width, height };
};

export const businessPageContent: BusinessPageContent = {
  metadata: {
    title: "Bauelemente für Gewerbe & Wohnungswirtschaft | Merseburg",
    description:
      "Fenster, Türen, Zaun- und Toranlagen, Überdachungen und Service für Hausverwaltungen, Unternehmen, Hotels und Gastronomie – mit eigenem Montageteam aus Merseburg.",
  },
  hero: {
    eyebrow: "Gewerbe · Wohnungswirtschaft · Hotellerie",
    title: "Bauelemente für Objekte,",
    accent: "die jeden Tag funktionieren.",
    lead: "Fenster und Türen im Bestand, Zaun- und Toranlagen, Überdachungen und Service – für Hausverwaltungen, Unternehmen, Hotels und Gastronomie. Mit eigener Ansprechpartnerin für gewerbliche Kunden, eigenem Montageteam und kurzen Wegen aus Merseburg-Meuschau.",
    media: businessHubMedia,
    mosaic: [
      {
        ...img(
          "/images/b2b/montageteam.webp",
          "KLOTZ-Montageteam vor einem Firmenfahrzeug",
        ),
        label: "Eigenes Montageteam",
      },
      {
        ...img(
          "/images/b2b/stadion-zaun.webp",
          "Neue Doppelstabmatten-Zaunanlage entlang eines Sportplatzes",
        ),
        label: "Stadtstadion Merseburg · 2025",
      },
      {
        ...img(
          "/images/b2b/see-verglasung.webp",
          "Verglaster, überdachter Außenbereich an einem Gebäudekomplex",
        ),
        label: "Überdachung am Störmthaler See",
      },
    ],
  },
  facts: [
    {
      value: "30+",
      label: "Jahre KLOTZ in der Region",
      text: "Bauelemente aus Merseburg-Meuschau für Halle, Leipzig und Mitteldeutschland.",
    },
    {
      value: "13",
      label: "Fachleute im eigenen Team",
      text: "Fachberatung, technische Sachbearbeitung, Monteure und Ausbildung unter einem Dach.",
    },
    {
      value: "1,1 km+",
      label: "Zaunanlage am Stadtstadion",
      text: "Einzäunung des Stadtstadions Merseburg, umgesetzt Anfang 2025.",
    },
    {
      value: "1",
      label: "Ansprechpartnerin für Gewerbe",
      text: "Arbeitsvorbereitung, Kalkulation und Einkauf für gewerbliche Kunden.",
    },
  ],
  statement: {
    label: "Unser Anspruch",
    text: "Ein Wohnungsbestand stellt andere Fragen als eine Betriebszufahrt oder eine Hotelterrasse. Deshalb beginnen wir bei Ihrem Objekt – und liefern Beratung, Aufmaß, Montage und Service aus einer Hand.",
    signature: "KLOTZ GmbH · Merseburg-Meuschau",
  },
  references: [
    {
      id: "stadtstadion",
      eyebrow: "Referenz / Öffentliches Objekt",
      title: "Über 1,1 Kilometer Zaun.",
      accent: "Ein Projekt, ein Team.",
      text: "Anfang 2025 hat KLOTZ das Stadtstadion Merseburg neu eingezäunt: Doppelstabmatten-Zaunanlage mit Toren über eine Länge von mehr als 1,1 Kilometern – vom Setzen der Pfosten bis zum fertigen Grundstücksabschluss mit eigenem Montageteam.",
      facts: [
        { label: "Objekt", value: "Stadtstadion Merseburg" },
        {
          label: "Leistung",
          value: "Einzäunung mit Doppelstabmatten und Toren",
        },
        { label: "Umfang", value: "über 1,1 km Zaunlänge" },
        { label: "Zeitraum", value: "Februar 2025" },
      ],
      images: [
        img(
          "/images/b2b/stadion-montage.webp",
          "Monteure in Warnkleidung setzen Zaunpfosten mit Betonkübel am Sportplatz",
        ),
        img(
          "/images/b2b/stadion-zaun.webp",
          "Fertige grüne Doppelstabmatten-Zaunanlage entlang des Sportplatzes",
        ),
        img(
          "/images/b2b/stadion-eingang.webp",
          "Eingangsbereich mit Schild Stadtstadion und neuer Zaunanlage",
        ),
        img(
          "/images/b2b/stadion-fahrzeuge.webp",
          "Firmenfahrzeuge und Baumaschinen auf dem Baufeld am Stadion",
        ),
      ],
      caption:
        "Aufnahmen aus dem KLOTZ-Bildbericht „Einzäunung Stadtstadion“, Februar 2025",
      href: "/referenzen/einzaeunung-stadtstadion",
      source: "https://www.klotz.mobi/news/einz%C3%A4unung-stadtstadion",
    },
    {
      id: "stoermthaler-see",
      eyebrow: "Referenz / Außenbereich am Wasser",
      title: "Überdachung am Störmthaler See.",
      accent: "Geschützt draußen, mit Blick aufs Wasser.",
      text: "Ein großzügiger Außenbereich an einem Gebäudekomplex am Störmthaler See: überdacht und seitlich verglast, damit die Fläche bei Wind und Regen nutzbar bleibt und der Blick nach draußen frei ist.",
      facts: [
        { label: "Ort", value: "Störmthaler See bei Leipzig" },
        { label: "Leistung", value: "Überdachung mit seitlicher Verglasung" },
      ],
      images: [
        img(
          "/images/b2b/see-terrasse.webp",
          "Überdachte Terrasse mit Glasdach und Blick auf den See",
        ),
        img(
          "/images/b2b/see-fassade.webp",
          "Gebäudekomplex mit vorgesetzter verglaster Überdachung im Erdgeschoss",
        ),
        img(
          "/images/b2b/see-verglasung.webp",
          "Seitliche Glaselemente der Überdachung mit Spiegelung des Himmels",
        ),
      ],
      caption: "Aufnahmen aus der KLOTZ-Projektgalerie",
      source: "https://www.klotz.mobi/",
    },
  ],
  matrix: {
    title: "Ein Partner.",
    accent: "Alle Bauelemente rund ums Objekt.",
    lead: "Statt mehrere Firmen zu koordinieren, klären Sie Fenster, Türen, Außenanlagen und Service mit einem Team. Typische Aufgaben je Bereich auf einen Blick:",
    sectors: [
      "Wohnungswirtschaft",
      "Industrie & Gewerbe",
      "Hotellerie & Gastronomie",
    ],
    rows: [
      {
        service: "Fenster & Rollläden",
        href: "/fenster-tueren/fenster",
        marks: [true, true, true],
      },
      {
        service: "Haus- und Objekteingangstüren",
        href: "/fenster-tueren/haustueren",
        marks: [true, true, true],
      },
      {
        service: "Einbruchschutz",
        href: "/fenster-tueren/einbruchschutz",
        marks: [true, true, false],
      },
      {
        service: "Zaunanlagen & Sichtschutz",
        href: "/zaun-tor/zaunanlagen",
        marks: [true, true, true],
      },
      {
        service: "Hoftore, Schiebetore & elektrische Antriebe",
        href: "/zaun-tor/elektrische-toranlagen",
        marks: [true, true, false],
      },
      {
        service: "Geländer",
        href: "/zaun-tor/gelaender",
        marks: [true, true, true],
      },
      {
        service: "Überdachungen, Glasschiebewände & Sonnenschutz",
        href: "/terrasse-garten",
        marks: [false, true, true],
      },
      {
        service: "Wartung & Instandsetzung",
        href: "/gewerbekunden/wartung-service",
        marks: [true, true, true],
      },
    ],
  },
  team: {
    image: img(
      "/images/b2b/team.webp",
      "Das KLOTZ-Team vor zwei Firmenfahrzeugen am Standort Merseburg-Meuschau",
    ),
    title: "Das Team hinter Ihrem Objekt.",
    accent: "Persönlich erreichbar.",
    text: "Bei KLOTZ arbeiten Fachberatung, technische Sachbearbeitung und Montage an einem Standort zusammen. Für gewerbliche Kunden gibt es eine eigene Ansprechpartnerin für Arbeitsvorbereitung, Kalkulation und Einkauf.",
    contactIds: ["team-shafiee", "team-klotz"],
  },
  tasks: [
    {
      title: "Mehrere Meldungen aus dem Wohnungsbestand?",
      text: "Wir ordnen Objekte und Elemente, prüfen den Zustand und schlagen vor, was instand gesetzt und was erneuert werden sollte – als nachvollziehbarer Maßnahmenplan.",
      href: "/gewerbekunden/wohnungswirtschaft",
      label: "Bestandsmaßnahmen planen",
    },
    {
      title: "Zugang oder Zufahrt am Betrieb verändern?",
      text: "Wir planen Zaun, Tor und Antrieb passend zu Verkehrswegen und Nutzung – und stimmen Montageflächen und Stromversorgung von Anfang an mit Ihnen ab.",
      href: "/gewerbekunden/industrie-gewerbe",
      label: "Standortprojekt planen",
    },
    {
      title: "Die Terrasse soll Gästen mehr bieten?",
      text: "Überdachung, Glasschiebewände und Sonnenschutz machen Außenplätze bei mehr Wetterlagen nutzbar. Wir planen Sitzbereiche, Schatten und Servicewege als Gesamtkonzept.",
      href: "/gewerbekunden/hotellerie-gastronomie",
      label: "Außenbereich weiterdenken",
    },
    {
      title: "Ein Tor oder eine Tür funktioniert nicht mehr?",
      text: "Beschreiben Sie Element und Auffälligkeit – wir prüfen vor Ort, ob Reparatur, Teilersatz oder Erneuerung die wirtschaftlichste Lösung ist.",
      href: "/gewerbekunden/wartung-service",
      label: "Service anfragen",
    },
  ],
  process: [
    {
      title: "Objekt kennenlernen",
      text: "Sie schildern Anlass, Projektort und Bestand. Fotos, Stückzahlen oder eine Objektliste genügen für den Einstieg.",
      result: "Gemeinsames Verständnis Ihrer Aufgabe",
    },
    {
      title: "Aufmaß & Angebot",
      text: "Wir nehmen vor Ort auf, klären Ausführung und Vorarbeiten und kalkulieren Ihr Angebot – auf Wunsch auch auf Basis Ihres Leistungsverzeichnisses.",
      result: "Nachvollziehbares Angebot, Position für Position",
    },
    {
      title: "Ausführung planen",
      text: "Zugänge, Zeitfenster, Bauabschnitte und Ansprechpartner vor Ort stimmen wir vorab ab – damit Bewohner und Betrieb möglichst wenig beeinträchtigt werden.",
      result: "Abgestimmter Montageplan",
    },
    {
      title: "Montage & Abnahme",
      text: "Unser eigenes Montageteam setzt um, die Abnahme machen wir gemeinsam. Wartung und Instandsetzung bleiben danach bei uns in einer Hand.",
      result: "Übergabe mit einem Ansprechpartner für später",
    },
  ],
  preparation: [
    {
      title: "Objekt & Standort",
      text: "Projektort, Nutzung und eine grobe Stückzahl – eine vorhandene Objektliste genügt.",
    },
    {
      title: "Aufgabe & Bestand",
      text: "Erneuerung, Ergänzung oder Störung? Gesamtansichten, Details und bekannte Produktangaben.",
    },
    {
      title: "Ablauf & Beteiligte",
      text: "Wer entscheidet, wer öffnet vor Ort, welche Zeiten und Wege sind wichtig?",
    },
    {
      title: "Termine & Unterlagen",
      text: "Wunschzeitraum, Skizzen, Pläne oder ein Leistungsverzeichnis – falls vorhanden.",
    },
  ],
  faq: [
    {
      question: "Für welche gewerblichen Auftraggeber arbeitet KLOTZ?",
      answer:
        "Für Wohnungsgesellschaften, Hausverwaltungen, mittelständische Unternehmen, Hotels und Gastronomie – und für öffentliche Objekte, wie die Einzäunung des Stadtstadions Merseburg zeigt. Ob einzelnes Bauteil oder ganzes Objekt: Wir prüfen Ihre Aufgabe und sagen Ihnen, wie wir sie umsetzen.",
    },
    {
      question:
        "Können wir Reparaturen und geplante Erneuerungen gemeinsam besprechen?",
      answer:
        "Ja. Schicken Sie uns eine Übersicht der betroffenen Elemente. Wir prüfen am Bestand, was sich instand setzen lässt und wo ein Austausch sinnvoll ist – daraus entsteht ein Maßnahmenplan, den Sie auch in Etappen umsetzen können.",
    },
    {
      question:
        "Wie berücksichtigen Sie bewohnte Gebäude und laufenden Betrieb?",
      answer:
        "Zugänge, Zeitfenster und Bauabschnitte stimmen wir vor der Montage mit Ihnen ab. Nennen Sie uns dafür wichtige Wege, Betriebszeiten und wer vor Ort öffnet – dann planen wir die Ausführung entsprechend.",
    },
    {
      question: "Welche Region betreut KLOTZ für Objektanfragen?",
      answer:
        "Von Merseburg-Meuschau aus betreuen wir Objekte in Halle (Saale), Leipzig, im Saalekreis und Burgenlandkreis sowie in Weimar, Erfurt, Jena und Gera.",
    },
    {
      question: "Brauchen wir bereits ein Leistungsverzeichnis?",
      answer:
        "Nein. Für den Einstieg genügen Projektort, betroffene Elemente und ein paar Fotos. Liegen Pläne oder ein Leistungsverzeichnis vor, kalkulieren wir gern auf dieser Grundlage.",
    },
    {
      question: "Übernimmt KLOTZ auch Wartung und Instandsetzung?",
      answer:
        "Ja, Wartung und Instandsetzung gehören zu unseren Leistungen. Welcher Umfang und welche Intervalle für Ihre Tore, Türen und Fenster sinnvoll sind, legen wir objektbezogen mit Ihnen fest.",
    },
  ],
  sourceRefs: [
    "https://www.klotz.mobi/ueber-uns",
    "https://www.klotz.mobi/kontakt",
    "https://www.klotz.mobi/news/einz%C3%A4unung-stadtstadion",
    "https://www.klotz.mobi/portfolio/wartung-service",
    "https://www.klotz.mobi/inspirationen-f%C3%BCr-die-hotellerie-gastronomiebranche",
  ],
  status: "draft",
};
