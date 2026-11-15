import type { WindowsMaterialChapter } from "@/domain/content/windows";
import { windowsGalleries } from "./windows-galleries";

function picture(service: string, index: number) {
  const id = `windows-gallery-${service}-${String(index + 1).padStart(2, "0")}`;
  const image = windowsGalleries[service]?.items.find(
    (image) => image.id === id,
  );
  if (!image) throw Error(`Missing material illustration: ${service}/${index}`);
  return image;
}

export const windowsMaterials: Record<string, WindowsMaterialChapter[]> = {
  fenster: [
    {
      id: "kunststofffenster",
      label: "01 / Kunststofffenster",
      title: "Vielseitig im Ausdruck. Durchdacht im Alltag.",
      paragraphs: [
        "Sie möchten Fenster erneuern, die sich selbstverständlich in Ihr Zuhause einfügen? Kunststoff bietet unterschiedliche Profilansichten und Oberflächen – vom ruhigen Weiß bis zum bewusst gewählten Dekor. Vergleichen Sie die Innenansicht mit Ihren Räumen und die Außenansicht mit Fassade, Haustür und vorhandenen Rollläden. So wird aus einer Materialentscheidung ein stimmiges Konzept.",
        "Das Schnittmodell zeigt, warum die Ausstattung genauer betrachtet werden sollte: Rahmen, Verglasung, Dichtungen und Beschläge wirken zusammen. Wir besprechen Ihre Wünsche an Bedienung, Wärme, Ruhe und Sicherheit für das vollständige Element. Bei der Modernisierung kommen die Anschlüsse an Fensterbank und Laibung sowie die künftige Lüftung hinzu. Konkrete Eigenschaften und Werte werden anhand des ausgewählten Systems vereinbart.",
      ],
      considerations: [
        "Profilansicht, Farbe und Dekor",
        "Verglasung und Nutzung je Raum",
        "Anschlüsse und Lüftung im Bestand",
      ],
      image: picture("fenster", 3),
    },
    {
      id: "aluminiumfenster",
      label: "02 / Aluminiumfenster",
      title: "Klare Linien für Ihre Architektur.",
      paragraphs: [
        "Aluminium ist eine interessante Richtung, wenn Sie eine geradlinige Fensteransicht und ein abgestimmtes Gesamtbild mit Haustür oder Schiebeelementen wünschen. Die Wirkung entsteht durch Profil, Teilung, Oberfläche und den Anteil der sichtbaren Glasfläche. Statt nur einen Farbton zu wählen, betrachten wir deshalb die gesamte Fassadenansicht und den Blick aus dem Raum.",
        "Größere Öffnungen verlangen eine genaue Abstimmung von Elementaufteilung, Bedienung und Einbau. Was sich in Ihrem Haus umsetzen lässt, richtet sich nach Maßen, Konstruktion und dem gewählten Fenstersystem. Auch Sonneneinstrahlung und gewünschter Sichtschutz gehören früh ins Gespräch. Anhand von Mustern und Produktunterlagen klären Sie die konkrete Ausstattung, ohne aus einer Profilabbildung auf technische Eigenschaften zu schließen.",
      ],
      considerations: [
        "Rahmen und Fassadenproportionen",
        "Oberfläche passend zum Eingang",
        "Öffnungsart und Sonnenschutz",
      ],
      image: picture("fenster", 2),
    },
    {
      id: "holzfenster",
      label: "03 / Holzfenster",
      title: "Charakter bewahren. Natürlich weiterdenken.",
      paragraphs: [
        "Holzfenster geben der Materialwirkung einen besonderen Platz. Maserung, Farbe und Profil können ein wohnliches Interieur begleiten oder die Proportionen eines bestehenden Hauses aufnehmen. An den Fassadenbeispielen sehen Sie, wie stark Teilung, Oberlicht und angrenzende Stuckdetails zusammenwirken. Diese gestalterischen Beziehungen sind bei einer Erneuerung mindestens so wichtig wie der einzelne Fensterflügel.",
        "Bringen Sie eine Gesamtansicht des Hauses und Detailfotos Ihrer Fenster mit. Gemeinsam besprechen wir, welche Merkmale erhalten bleiben sollen und wie Sie künftig öffnen, lüften und pflegen möchten. Holzart, Beschichtung und die spätere Oberflächenpflege gehören zur konkreten Auswahl. Falls für Ihr Gebäude besondere gestalterische Vorgaben bestehen, werden diese vor Bestellung und Ausführung mit den zuständigen Stellen geklärt.",
      ],
      considerations: [
        "Vorhandene Teilungen und Details",
        "Holzoberfläche und Pflegewunsch",
        "Vorgaben für das jeweilige Gebäude",
      ],
      image: picture("fenster", 0),
    },
    {
      id: "terrassentueren",
      label: "04 / Terrassen- & Balkontüren",
      title: "Den Garten näher an Ihr Wohnen holen.",
      paragraphs: [
        "Der Zugang nach draußen wird täglich benutzt: zum Frühstück auf der Terrasse, zum Lüften oder auf dem Weg in den Garten. Eine Dreh-Kipp-Tür, eine Hebeschiebelösung und ein Faltelement brauchen jeweils einen anderen Bewegungsraum. Die Bildbeispiele zeigen diese unterschiedlichen Richtungen. Welche davon zu Ihnen passt, beginnt bei Ihrer Laufroute, den Möbeln und der gewünschten freien Öffnung.",
        "Bei einer Schiebelösung betrachten wir die Fläche neben dem beweglichen Flügel; bei einem Faltelement den Platz für das Flügelpaket. Genauso wichtig sind Schwelle, Innenboden, Außenniveau und Entwässerung. Ein niedrigerer Übergang wird anhand der tatsächlichen Anschlüsse geprüft. Rahmenmaterial, Glas, Griff sowie Rollladen oder Insektenschutz werden mit der gewählten Konstruktion abgestimmt – für einen Zugang, der auch im Alltag Freude macht.",
      ],
      considerations: [
        "Dreh-Kipp, Schieben oder Falten",
        "Schwelle und Anschluss nach außen",
        "Bedienung, Beschattung und Insektenschutz",
      ],
      image: picture("fenster", 1),
    },
  ],
  haustueren: [
    {
      id: "aluminiumhaustueren",
      label: "01 / Aluminium-Haustüren",
      title: "Ein klarer Auftritt. Bis ins Detail.",
      paragraphs: [
        "Ein ruhiges Türblatt, ein langer Griff oder ein gezielt gesetzter Glasausschnitt: Aluminium-Haustüren bieten viele gestalterische Richtungen. Überlegen Sie zuerst, wie der Eingang auf Ihr Haus reagieren soll. Soll er sich in die Fassade einfügen oder einen eigenen Akzent setzen? Fensterfarbe, Vordach, Briefkasten und Außenbeleuchtung helfen, diese Entscheidung als Ganzes zu treffen.",
        "Seitenteile und Oberlichter können den Hausflur mit Tageslicht verbinden; die passende Glasgestaltung berücksichtigt zugleich den gewünschten Einblick. Auch die Innenansicht verdient Aufmerksamkeit. Im Konfigurator können Sie erste Motive vergleichen und Ihre Wünsche festhalten. Das Gespräch und das Aufmaß klären anschließend die tatsächlich lieferbare Ausführung, Maße, Verriegelung, Schwelle und die nötigen Anschlussarbeiten am Gebäude.",
      ],
      considerations: [
        "Türmotiv, Oberfläche und Griff",
        "Seitenteil, Oberlicht und Privatsphäre",
        "Konfiguration mit dem Aufmaß abgleichen",
      ],
      image: picture("haustueren", 0),
    },
    {
      id: "kunststoffhaustueren",
      label: "02 / Kunststoff-Haustüren",
      title: "Ihr Stil. Ihr täglicher Empfang.",
      paragraphs: [
        "Kunststoff-Haustüren lassen sich mit unterschiedlichen Füllungen, Farben und Glasmotiven gestalten. Vom hellen klassischen Eingang bis zur dunklen, geradlinigen Ansicht lohnt der Vergleich mit den vorhandenen Fenstern. Achten Sie dabei nicht nur auf das Motiv: Ein Seitenteil kann den Flur verändern, ein anderer Griff die Bedienung, eine abweichende Innenfarbe den Eindruck im Haus.",
        "Für die Auswahl werden Rahmen, Türfüllung, Verglasung und Verriegelung gemeinsam betrachtet. Wenn Sie einen elektronischen Zugang oder eine andere Komfortfunktion wünschen, prüfen wir die Möglichkeiten des konkreten Türsystems. Ausstattung und Pflege richten sich nach dem ausgewählten Produkt. Ein nachvollziehbares Angebot beschreibt das vollständige Türelement und den Einbauumfang, damit Sie Ihre Möglichkeiten auf derselben Grundlage vergleichen können.",
      ],
      considerations: [
        "Füllung und Glasmotiv vergleichen",
        "Außen- und Innenansicht abstimmen",
        "Verriegelung für das konkrete Element wählen",
      ],
      image: picture("haustueren", 2),
    },
    {
      id: "holzhaustueren",
      label: "03 / Holz-Haustüren",
      title: "Ein Material mit eigener Handschrift.",
      paragraphs: [
        "Holz kann einen Eingang warm und zurückhaltend wirken lassen oder seine klassische Gestaltung hervorheben. Die Bildauswahl reicht von geradlinigen Türflächen bis zu aufwendig gegliederten Ansichten. Entscheidend ist, welche Form, Holzzeichnung und Farbe mit Ihrem Gebäude harmonieren. Auch bei einem alten Haus lässt sich so eine bewusste gestalterische Richtung entwickeln.",
        "Für die Planung schauen wir auf die Lage des Eingangs, seinen Witterungsschutz und Ihren Wunsch an die spätere Pflege. Glaseinsätze, Griffe, Anschlag und Schwelle werden mit der konkreten Konstruktion abgestimmt. Besondere vorhandene Details und gegebenenfalls Vorgaben zum Gebäude gehören früh ins Gespräch. Eine schöne Holzansicht ersetzt dabei keine Produktprüfung: Die vereinbarten Funktionen werden für die ausgewählte Tür und ihre Montage beschrieben.",
      ],
      considerations: [
        "Holzbild und Fassadencharakter",
        "Witterungsschutz und Oberflächenpflege",
        "Vorhandene Details vor dem Austausch erfassen",
      ],
      image: picture("haustueren", 1),
    },
  ],
  innentueren: [
    {
      id: "cpl-tueren",
      label: "01 / CPL-Türen",
      title: "Eine Oberfläche für gelebte Räume.",
      paragraphs: [
        "Im Flur, Kinderzimmer oder Homeoffice wird eine Tür oft angefasst und bewegt. CPL-Dekore sind eine Möglichkeit, den Wunsch nach einer alltagstauglichen Oberfläche mit einem durchgängigen Wohnstil zu verbinden. Holzoptik, Weiß oder ein dezenter Farbton wirken jeweils anders. Vergleichen Sie die Muster deshalb mit Ihrem Boden und den Lichtverhältnissen im Raum.",
        "CPL bezeichnet die Oberfläche; den Aufbau des Türblatts und seine Funktionen legt die konkrete Ausführung fest. Fragen nach gewünschter Ruhe, Feuchtebeanspruchung oder einer besonderen Nutzung werden zusätzlich geklärt. Zarge, Kante, Griff und gegebenenfalls Lichtausschnitt gehören in die Auswahl. So bestellen Sie eine abgestimmte Türlösung mit passenden Pflegehinweisen statt nur ein Dekor nach einem Bildschirmfoto.",
      ],
      considerations: [
        "Dekor im Raumlicht vergleichen",
        "Türblatt und Zarge zusammen wählen",
        "Funktion unabhängig vom Dekornamen klären",
      ],
      image: picture("innentueren", 2),
    },
    {
      id: "echtholz-furniertueren",
      label: "02 / Echtholz- & Furniertüren",
      title: "Natürliches Holz. Ein eigener Charakter.",
      paragraphs: [
        "Eine sichtbare Holzzeichnung bringt Tiefe und Wärme in einen Raum. Furnier zeigt die natürlichen Merkmale des Holzes als dünne Oberflächenschicht; das macht die konkrete Maserung zu einem wichtigen Teil der Auswahl. Ob hell und ruhig oder dunkel mit deutlicher Zeichnung: Betrachten Sie Tür, Zarge und Boden als gemeinsame Materialpalette.",
        "Echtholzoberfläche und massives Türblatt sind unterschiedliche Eigenschaften. Wir besprechen deshalb den tatsächlichen Aufbau, die Oberfläche und die Anforderungen je Raum getrennt. Auch die Richtung des Furnierbilds beeinflusst die Wirkung. Wenn mehrere Türen nebeneinander sichtbar sind, lohnt ein gemeinsames Konzept. Gewünschte Glasanteile und Schiebeausführungen werden für das gewählte Programm geprüft; natürliche Unterschiede in Farbe und Zeichnung gehören in das Beratungsgespräch.",
      ],
      considerations: [
        "Holzton und Maserungsrichtung",
        "Oberfläche und Türblattaufbau unterscheiden",
        "Mehrere sichtbare Türen gemeinsam planen",
      ],
      image: picture("innentueren", 0),
    },
    {
      id: "weisslacktueren",
      label: "03 / Weißlacktüren",
      title: "Zurückhaltend. Und voller Möglichkeiten.",
      paragraphs: [
        "Weißlack kann eine Wand ruhig weiterführen oder eine klassische Türform bewusst hervorheben. Glatte Flächen, profilierte Ansichten und Lichtausschnitte wirken auch innerhalb einer hellen Farbwelt unterschiedlich. Die Wahl hängt davon ab, ob Ihre Einrichtung, die Architektur oder die Tür selbst im Vordergrund stehen soll.",
        "Weiß ist am Bildschirm nicht eindeutig vergleichbar. Bringen Sie Informationen zu Wandfarbe, Sockelleisten und Fußboden mit und sehen Sie sich die Oberfläche möglichst im Muster an. Farbton, Glanz und Profil sollten gemeinsam betrachtet werden. CPL in Weiß und eine lackierte Oberfläche können ähnlich aussehen, sind aber unterschiedliche Ausführungen. Welche Oberfläche, Zarge und Beschläge Sie erhalten, wird deshalb im Angebot nachvollziehbar benannt.",
      ],
      considerations: [
        "Farbton und Glanzgrad im Muster",
        "Glatt, profiliert oder mit Lichtausschnitt",
        "Lack und weißes Dekor klar unterscheiden",
      ],
      image: picture("innentueren", 1),
    },
    {
      id: "glastueren",
      label: "04 / Glastüren",
      title: "Licht weitergeben. Räume verbinden.",
      paragraphs: [
        "Ein dunkler Flur kann von Tageslicht aus dem angrenzenden Wohnraum profitieren. Eine Glastür hält die Verbindung sichtbar, während satinierte Bereiche den Einblick verändern. Überlegen Sie, wo Sie Offenheit wünschen und wo mehr Rückzug wichtig ist. Klare, teilweise satinierte und stärker gegliederte Ansichten lassen sich anhand der Bilder gut miteinander vergleichen.",
        "Neben der Glasgestaltung zählt die Öffnungsart. Eine Drehtür benötigt Platz vor der Öffnung; eine Schiebetür eine passende seitliche Fläche und eine geeignete Befestigung. Beschläge, Griff, Anschläge und die konkrete Glasart werden als vollständige Ausführung ausgewählt. Gewünschter Schallschutz ergibt sich nicht allein aus dem Glasfoto. Nennen Sie besondere Anforderungen deshalb ausdrücklich, damit Konstruktion und Einbau auf Ihre Nutzung abgestimmt werden können.",
      ],
      considerations: [
        "Transparenz und gewünschter Einblick",
        "Dreh- oder Schiebelösung mit Platzbedarf",
        "Glasart, Beschläge und Befestigung",
      ],
      image: picture("innentueren", 3),
    },
  ],
};

export const windowsMaterialNavigation = Object.entries(
  windowsMaterials,
).flatMap(([service, chapters]) =>
  chapters.map((chapter) => ({
    label: chapter.label.replace(/^\d+ \/ /, ""),
    href: `/fenster-tueren/${service}#${chapter.id}`,
    description: chapter.title,
  })),
);
