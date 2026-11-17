import { terraceImage as image, mediaForTerraceService } from "./terrace-media";
import type { TerracePageContent } from "@/domain/content/terrace";
import { terraceOverviewGallery } from "./terrace-galleries";

export const terracePageContent: TerracePageContent = {
  gallery: terraceOverviewGallery,
  metadata: {
    title: "Terrassenüberdachung & Lamellendach in Merseburg",
    description:
      "Terrassendach, Lamellendach, Pergola oder Sommergarten? KLOTZ berät in Merseburg, Halle und Leipzig – mit Aufmaß, Montage und Ausstellung in Meuschau.",
  },
  hero: {
    title: "Terrasse & Garten.",
    accent: "Draußen zu Hause.",
    lead: "Ein Frühstück im Freien. Schatten am Nachmittag. Ein Platz, an dem der Abend länger bleiben darf. Finden Sie mit KLOTZ die Überdachung, die zu Ihrem Haus und Ihrem Alltag passt.",
    image: image(
      "/images/lamelle-detail-1.webp",
      "Geöffnetes Lamellendach über einer Terrasse mit grauer Sitzgruppe, Aufnahme aus der KLOTZ-Galerie",
    ),
  },
  introduction:
    "KLOTZ plant und montiert Terrassenüberdachungen, Lamellendächer, Pergolen und Glaslösungen aus Merseburg-Meuschau. Für Vorhaben in Merseburg, Halle (Saale), Leipzig und der Region verbinden wir persönliche Beratung, Aufmaß vor Ort und die passende Ausführung. Der Ausgangspunkt ist Ihre Nutzung: offen und luftig, flexibel beschattet oder seitlich geschützt.",
  solutions: [
    {
      id: "terrassendach",
      title: "Terrassenüberdachungen",
      benefit: "Ein Dach für Ihre freien Stunden.",
      description:
        "Ein festes Dach schützt den Sitzbereich von oben. Eine Glasüberdachung lässt Tageslicht auf die Terrasse und in angrenzende Räume; Stützen, Dachform und Anschluss werden auf das Haus abgestimmt.",
      considerations:
        "Von Anfang an mitdenken: Beschattung unter Glas, Wasserführung und spätere Seitenelemente.",
      href: "/terrasse-garten/terrassenueberdachungen",
      image: image(
        "/images/terrasse.webp",
        "Weiße Terrassenüberdachung an einem Wohnhaus mit angrenzendem Garten",
      ),
    },
    {
      id: "lamellendach",
      title: "Lamellendächer",
      benefit: "Licht und Schatten selbst bestimmen.",
      description:
        "Bewegliche Aluminiumlamellen verändern den Lichteinfall und die Luftzirkulation. So lässt sich der Platz unter dem Dach an sonnige Stunden und wechselnde Situationen anpassen.",
      considerations:
        "Bedienung, Entwässerung und mögliche Seitenabschlüsse hängen vom gewählten System ab.",
      href: "/terrasse-garten/lamellendaecher",
      image: image(
        "/images/lamelle-detail-2.webp",
        "Lamellendach mit dunkler Aluminiumkonstruktion aus dem KLOTZ-Bildarchiv",
      ),
    },
    {
      id: "pergola",
      title: "Pergolen",
      benefit: "Leichte Architektur. Beweglicher Schatten.",
      description:
        "Eine Pergola mit beweglichem Sonnentuch gibt dem Sitzplatz einen Rahmen und bringt textile Leichtigkeit in den Garten. Sie ist eine Möglichkeit, wenn vor allem Schatten und eine offene Atmosphäre gewünscht sind.",
      considerations:
        "Sonnen-, Regen- und Windschutz sind je nach Tuch und Konstruktion unterschiedlich zu bewerten.",
      href: "/terrasse-garten/pergolen",
      image: image(
        "/images/terrace-pergola.webp",
        "Freistehende Pergola mit hellem Sonnentuch und Esstisch im Garten",
      ),
    },
    {
      id: "gartenraum",
      title: "Sommer- & Wintergärten",
      benefit: "Den Garten aus einer neuen Nähe erleben.",
      description:
        "Ein unbeheizter Sommergarten schafft einen geschützteren Übergang nach draußen. Ein Wintergarten, der als beheizter Wohnraum gedacht ist, braucht eine darauf abgestimmte thermische und bauliche Planung.",
      considerations:
        "Zuerst die Nutzung klären: saisonaler Sitzplatz oder ganzjährig beheizter Raum?",
      href: "/terrasse-garten/sommer-wintergaerten",
      image: image(
        "/images/glas-detail-1.webp",
        "Seitlich verglaster Sitzbereich mit Gartenblick bei Abendlicht",
      ),
    },
    {
      id: "glasschiebewaende",
      title: "Glasschiebewände",
      benefit: "Offen bleiben. Bei Bedarf schließen.",
      description:
        "Bewegliche Glaselemente können Wind und seitlichen Wettereinfluss reduzieren, ohne den Blick in den Garten zu nehmen. Bei passender Konstruktion lässt sich ein bestehendes Terrassendach damit ergänzen.",
      considerations:
        "Dachtragwerk, Bodenanschluss, Schienenführung und Öffnungsrichtung müssen zusammenpassen.",
      href: "/terrasse-garten/glasschiebewaende",
      image: image(
        "/images/glas-detail-2.webp",
        "Gläserne Seitenelemente einer überdachten Terrasse aus der KLOTZ-Galerie",
      ),
    },
    {
      id: "sonnenschutz",
      title: "Sonnenschutz",
      benefit: "Angenehmer Schatten statt voller Sonne.",
      description:
        "Markisen und weitere Beschattungslösungen helfen, den Außenbereich auf die Sonneneinstrahlung abzustimmen. Unter einem Glasdach sind Lage und Art der Beschattung besonders wichtig für den sommerlichen Komfort.",
      considerations:
        "Ausrichtung, Befestigung und Windlage entscheiden mit über System und Bedienung.",
      href: "/terrasse-garten/sonnenschutz",
      image: image(
        "/images/terrace-markise.webp",
        "Ausgefahrene textile Markise an einer Hausfassade, Produktabbildung aus dem KLOTZ-Archiv",
      ),
    },
  ].map((solution) => {
    const media = mediaForTerraceService(solution.href.split("/").at(-1)!);
    return { ...solution, image: media.image, media };
  }),
  comparison: [
    {
      wish: "Ich möchte einen dauerhaft überdachten Essplatz.",
      solution: "Festes Terrassendach",
      consideration: "Tageslicht erhalten und Beschattung gleich mitplanen.",
      href: "/terrasse-garten/terrassenueberdachungen",
    },
    {
      wish: "Ich möchte Sonne und Luft flexibel regulieren.",
      solution: "Lamellendach",
      consideration:
        "Lamellenstellung, Bedienung und mögliche Seitenlösungen vergleichen.",
      href: "/terrasse-garten/lamellendaecher",
    },
    {
      wish: "Ich suche einen luftigen Schattenplatz im Garten.",
      solution: "Pergola oder Markise",
      consideration:
        "Textile Beschattung nach Standort und gewünschter Nutzung wählen.",
      href: "/terrasse-garten/pergolen",
    },
    {
      wish: "Ich möchte geschützter sitzen, mit Blick ins Grüne.",
      solution: "Sommergarten mit Glasschiebewänden",
      consideration:
        "Saisonale Nutzung, Lüftung und Beschattung gemeinsam betrachten.",
      href: "/terrasse-garten/sommer-wintergaerten",
    },
  ],
  planning: [
    {
      title: "Haus & Grundstück",
      text: "Fassadenaufbau, Befestigung, Stützen und Untergrund gehören zusammen. Beim Aufmaß wird geklärt, welche Anschlüsse und Fundamente das Vorhaben benötigt.",
    },
    {
      title: "Sonne & Tageslicht",
      text: "Wann trifft die Sonne auf den Sitzplatz? Wie viel Licht benötigen die dahinterliegenden Räume? Dach und Beschattung sollten gemeinsam ausgewählt werden.",
    },
    {
      title: "Regen & Standort",
      text: "Wasser muss kontrolliert abgeführt werden. Dachneigung, Entwässerung und die Anforderungen am konkreten Standort fließen in die Planung ein.",
    },
    {
      title: "Heute & später",
      text: "Glasschiebewände, Licht oder elektrische Bedienung können je nach System eine Option sein. Wer Erweiterungen früh anspricht, kann Befestigung und Anschlüsse gezielt vorbereiten.",
    },
  ],
  costs: [
    {
      title: "Maße & Konstruktion",
      text: "Breite, Tiefe, Dachart, Material und Anzahl der Stützen bilden die Grundlage.",
    },
    {
      title: "Komfort & Ausstattung",
      text: "Verglasung, Beschattung, Seitenelemente, Antrieb und Licht verändern den Umfang.",
    },
    {
      title: "Einbau & Vorarbeiten",
      text: "Fassade, Fundamente, Zugänglichkeit, Elektroarbeiten und Montage müssen berücksichtigt werden.",
    },
  ],
  process: [
    {
      title: "Wünsche besprechen",
      text: "Sie zeigen Ihre Idee, wir besprechen Nutzung und Möglichkeiten. In der Ausstellung in Meuschau lassen sich Materialien und Gestaltung persönlich besprechen.",
    },
    {
      title: "Vor Ort genau hinsehen",
      text: "Das Aufmaß klärt die Einbausituation. Darauf bauen Ausführung und Angebot mit einem nachvollziehbaren Leistungsumfang auf.",
    },
    {
      title: "Planen & montieren",
      text: "Nach Abstimmung und Beauftragung wird die Umsetzung vorbereitet. Das KLOTZ-Montageteam übernimmt die vereinbarten Arbeiten.",
    },
    {
      title: "Abnehmen & weiterbetreuen",
      text: "Zum Abschluss wird die Ausführung gemeinsam betrachtet. Wartung und Instandsetzung können Sie anschließend direkt mit KLOTZ besprechen.",
    },
  ],
  preparation: [
    "Projektort und ein bis zwei Fotos der Terrasse",
    "Ungefähre Breite und Tiefe des gewünschten Bereichs",
    "Ihre Nutzung: Schatten, Wetterschutz oder zusätzlicher Gartenraum",
    "Wünsche zu Farbe, Bedienung und späteren Ergänzungen",
  ],
  faq: [
    {
      id: "auswahl",
      question: "Welche Terrassenüberdachung passt zu meinem Haus?",
      answer:
        "Das hängt vor allem von Nutzung, Ausrichtung und Einbausituation ab. Ein festes Glasdach erhält viel Tageslicht, braucht aber eine passende Beschattung. Ein Lamellendach macht Licht und Luft flexibler regulierbar. Eine Pergola mit Sonnentuch legt den Schwerpunkt auf textile Beschattung. Beim Aufmaß werden diese Wünsche mit Fassade, Untergrund und Platzangebot abgeglichen.",
      href: "/wissen/lamellendach-oder-glasdach",
      linkLabel: "Glasdach und Lamellendach vergleichen",
    },
    {
      id: "kosten",
      question: "Was kostet eine Terrassenüberdachung mit Montage?",
      answer:
        "Einen verlässlichen Gesamtpreis gibt es erst für eine definierte Ausführung und Einbausituation. Neben den Maßen zählen Dachmaterial, Beschattung, Seitenelemente, Fundamente und Montage. Vergleichen Sie deshalb den vollständigen Leistungsumfang. KLOTZ erstellt das konkrete Angebot auf Grundlage Ihrer Anforderungen und des Aufmaßes.",
      href: "/wissen/was-kostet-eine-terrassenueberdachung",
      linkLabel: "Kostenfaktoren im Überblick",
    },
    {
      id: "nachruesten",
      question: "Kann ich Glasschiebewände oder Sonnenschutz nachrüsten?",
      answer:
        "Das kann möglich sein, muss aber am vorhandenen Dach geprüft werden. Entscheidend sind unter anderem Tragwerk, Befestigungsmöglichkeiten, Bodenanschluss und Entwässerung. Fotos und Angaben zum bestehenden Dach helfen beim ersten Gespräch. Die technische Eignung lässt sich daraus allein noch nicht verbindlich ableiten.",
      href: "/terrasse-garten/glasschiebewaende",
      linkLabel: "Glasschiebewände kennenlernen",
    },
    {
      id: "gartenraum",
      question: "Worin unterscheiden sich Sommergarten und Wintergarten?",
      answer:
        "Ein Sommergarten ist in der Regel ein unbeheizter, seitlich geschützter Außenbereich. Er ist kein automatisch ganzjährig nutzbarer Wohnraum. Für einen beheizten Wintergarten sind Wärmeschutz, Lüftung, Beschattung und die baurechtliche Einordnung von Beginn an gemeinsam zu planen.",
      href: "/wissen/sommergarten-oder-wintergarten",
      linkLabel: "Sommergarten und Wintergarten vergleichen",
    },
    {
      id: "genehmigung",
      question: "Brauche ich eine Baugenehmigung?",
      answer:
        "Das hängt von Größe, Bauweise, Grundstückssituation und örtlichen Vorgaben ab – wir sprechen das beim Aufmaß mit Ihnen durch. Klären Sie die Anforderungen vor der Beauftragung mit der zuständigen Bauaufsicht; für ein Vorhaben im Saalekreis ist die dortige Bauaufsichtsbehörde die richtige Anlaufstelle.",
      href: "/wissen/genehmigung-terrassenueberdachung",
      linkLabel: "Fragen zur Genehmigung vorbereiten",
    },
    {
      id: "region",
      question: "Wo berät und montiert KLOTZ?",
      answer:
        "KLOTZ hat seinen Sitz und seine Ausstellung in Merseburg-Meuschau und betreut Vorhaben in Merseburg, Halle (Saale), Leipzig, Saalekreis und Burgenlandkreis. Nennen Sie bei der Anfrage Ihren Projektort, damit KLOTZ die Betreuung Ihres Vorhabens konkret abstimmen kann.",
      href: "/kontakt",
      linkLabel: "Kontakt und Anfahrt",
    },
  ],
  projectIds: ["glass-walls", "lamella-roof", "stormthaler-see"],
  articleSlugs: [
    "lamellendach-oder-glasdach",
    "sommergarten-oder-wintergarten",
    "was-kostet-eine-terrassenueberdachung",
  ],
  sourceRefs: [
    "https://www.klotz.mobi/portfolio/terrassenueberdachung",
    "https://www.klotz.mobi/produkt/lamellendach",
    "https://www.klotz.mobi/produkte/pergola-mit-sonnentuch",
    "https://www.klotz.mobi/produkte/gartenzimmer",
    "https://www.klotz.mobi/produkte/glasschiebe-faltw%C3%A4nde",
    "https://www.klotz.mobi/portfolio/sicht-sonnenschutz",
    "https://www.klotz.mobi/markiesen",
    "https://klotz.mobi/portfolio/wintergaerten",
    "https://www.klotz.mobi/ueber-uns",
    "https://www.klotz.mobi/kontakt",
    "https://mid.sachsen-anhalt.de/bauen-und-wohnen/bauen/page/bauaufsichtsbehoerden",
  ],
  reviewedAt: "2026-11-14",
  status: "draft",
};
