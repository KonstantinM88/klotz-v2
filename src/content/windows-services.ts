import type { ServicePageContent } from "@/domain/content/service-page";
import { windowsMedia } from "./windows-media";
import { serviceImage } from "./service-images";
import { windowsSecurityPage } from "./windows-security";

const base = "https://www.klotz.mobi";
const repairGuide = "fenster-reparieren-oder-austauschen";

export const windowsServicePages: ServicePageContent[] = [
  {
    slug: "fenster",
    title: "Fenster",
    metaTitle: "Fenster in Merseburg: Auswahl & Austausch",
    metaDescription:
      "Neue Fenster für Ihr Zuhause: Kunststoff, Aluminium oder Holz. KLOTZ berät in Merseburg zu Material, Verglasung, Aufmaß und Montage im Bestand.",
    hero: {
      title: "Neue Fenster.",
      accent: "Ein anderes Wohngefühl.",
      lead: "Morgens leichter öffnen. Am Lieblingsplatz angenehmer sitzen. Eine Fassade, die wieder stimmig wirkt. Gemeinsam mit KLOTZ wählen Sie Fenster, die zu Ihrem Haus und Ihrem Alltag passen – von der Materialentscheidung bis zum Einbau.",
      cta: "Meine Fenster besprechen",
    },
    media: windowsMedia.fenster,
    benefits: [
      {
        title: "Passend zum Haus",
        text: "Rahmen, Teilung und Farbe nehmen die Architektur auf – im Altbau ebenso wie im modernen Wohnhaus.",
      },
      {
        title: "Passend zum Raum",
        text: "Öffnung, Verglasung und Beschläge werden nach Nutzung, Lage und Ihren Wünschen ausgewählt.",
      },
      {
        title: "Passend eingebaut",
        text: "Aufmaß, Ausbau und Anschlüsse gehören von Anfang an in die Planung Ihres Fenstertauschs.",
      },
    ],
    story: {
      title: "Was sollen Ihre neuen Fenster für Sie verändern?",
      paragraphs: [
        "Vielleicht zieht es am Sofa, ein Flügel klemmt oder die Fenster passen nicht mehr zur geplanten Fassade. Diese Beobachtungen sind ein guter Startpunkt für die Beratung. Bevor Sie ein Material auswählen, schauen wir auf den Bestand und Ihre Ziele: Geht es um einzelne Räume, einen schrittweisen Austausch oder die Modernisierung des gesamten Hauses?",
        "Jeder Raum stellt andere Fragen. Im Schlafzimmer kann Ruhe besonders wichtig sein, im Erdgeschoss die gewünschte Sicherheitsausstattung und im Wohnzimmer viel Tageslicht. Auch Öffnungsrichtung, erreichbare Griffe, Möbel und der Blick in den Garten beeinflussen, welche Ausführung sich später gut anfühlt.",
        "KLOTZ führt im bisherigen Sortiment Kunststoff-, Aluminium- und Holzfenster. Wir ordnen die Möglichkeiten nach Ihrem Gebäude und dem gewünschten Pflegeaufwand ein. So entsteht eine nachvollziehbare Auswahl, die Gestaltung, Nutzung und Einbau zusammenbringt.",
      ],
    },
    variants: [
      {
        title: "Kunststofffenster",
        description:
          "Eine vielseitige Möglichkeit für Modernisierung und Neubau. Profilgestaltung, Dekor und Ausstattung lassen sich auf das Haus abstimmen; auch innen und außen können unterschiedliche Gestaltungswünsche eine Rolle spielen.",
        suitable:
          "Für eine alltagstaugliche Lösung mit vielen Gestaltungsmöglichkeiten.",
      },
      {
        title: "Aluminiumfenster",
        description:
          "Klare Linien und ein architektonischer Ausdruck machen Aluminium interessant. Bei größeren Elementen betrachten wir die mögliche Teilung und Öffnung gemeinsam mit den Anforderungen an das konkrete System.",
        suitable:
          "Für eine geradlinige Gestaltung und abgestimmte Fenster- und Türansichten.",
      },
      {
        title: "Holzfenster",
        description:
          "Sichtbare Maserung und eine warme Materialwirkung passen zu vielen Wohnstilen. Bei charaktervollen Bestandsgebäuden sind Proportionen und Details besonders wichtig; die spätere Oberflächenpflege wird mitbedacht.",
        suitable:
          "Für natürliche Oberflächen und einen sensiblen Umgang mit der Architektur.",
      },
    ],
    detail: {
      title: "Das ganze Fenster zählt. Auch sein Anschluss.",
      image: serviceImage(
        "/images/building-window-detail.webp",
        "Schnittmodell eines weißen Kunststofffensters mit Rahmen und Verglasung",
      ),
      caption:
        "Profil und Verglasung im Zusammenspiel · Schnittmodell aus der KLOTZ-Produktgalerie",
      paragraphs: [
        "Ein schönes Rahmenprofil ist ein Teil der Entscheidung. Verglasung, Beschläge, Dichtungen und der Anschluss an die Wand wirken zusammen. Deshalb werden Wünsche an Wärme, Schall und Sicherheit am vollständigen Element und an seiner Einbausituation besprochen. Konkrete Leistungswerte gehören zum ausgewählten Produkt und in Ihr Angebot.",
        "Beim Austausch schauen wir auch auf Fensterbänke, Laibungen, vorhandene Rollläden und die Fassadenplanung. Gerade an diesen Übergängen entscheidet sich, welche Nebenarbeiten dazugehören und in welcher Reihenfolge gearbeitet wird. Wer eine Dämmung plant, sollte das schon im ersten Gespräch ansprechen.",
        "Zu dichteren neuen Fenstern gehört außerdem die Frage, wie Räume künftig gelüftet werden. Gemeinsam klären wir den Bedarf an Öffnungsmöglichkeiten und ergänzender Ausstattung. So bleibt die Auswahl eng mit dem tatsächlichen Wohnen verbunden.",
      ],
    },
    planning: [
      {
        title: "Bestand zeigen",
        text: "Fotos von innen und außen, Anzahl der Fenster und der Projektort helfen beim Einstieg. Nennen Sie auch, was am bisherigen Fenster stört.",
      },
      {
        title: "Raum für Raum entscheiden",
        text: "Wir besprechen Öffnungen, Material, Farbe sowie Ihre Wünsche an Wärme, Ruhe und Sicherheit. Rollläden und Sonnenschutz werden mitgedacht.",
      },
      {
        title: "Einbausituation aufnehmen",
        text: "Das genaue Aufmaß erfasst Öffnungen und Anschlüsse. Fensterbänke, Laibungen und geplante Arbeiten an der Fassade fließen in den Umfang ein.",
      },
      {
        title: "Umsetzung abstimmen",
        text: "Angebot, Zugang zu den Räumen, Ausbau und vereinbarte Nebenarbeiten werden vor der Montage geklärt. Bei mehreren Fenstern lohnt sich ein gemeinsamer Ablaufplan.",
      },
    ],
    costs: {
      lead: "Ein Fensterpreis wird erst durch die Ausführung aussagekräftig. Vergleichen Sie Angebote mit gleicher Ausstattung und einem klar beschriebenen Einbauumfang. KLOTZ erstellt Ihr konkretes Angebot auf Grundlage der besprochenen Lösung und des Aufmaßes.",
      factors: [
        "Anzahl, Maße, Teilung und Öffnungsarten",
        "Rahmenmaterial, Oberfläche und Verglasung",
        "Beschläge, Bedienkomfort und gewünschte Sicherheitsausstattung",
        "Ausbau, Entsorgung und Anschlüsse an Laibung und Fensterbank",
        "Rollläden, Sonnenschutz und weitere vereinbarte Arbeiten",
      ],
    },
    faq: [
      {
        question: "Fenster reparieren oder austauschen – womit beginne ich?",
        answer:
          "Mit dem Zustand des vorhandenen Elements. Ein schwergängiger Flügel oder eine beschädigte Dichtung kann Anlass für eine Reparatur sein. Sind Rahmen, Verglasung und Nutzung insgesamt nicht mehr passend, lohnt sich der Vergleich mit einem Austausch. Beschreiben Sie den Fehler und zeigen Sie Fotos; KLOTZ bietet auch Wartung und Instandsetzung an.",
      },
      {
        question: "Welches Material passt zu meinem Haus?",
        answer:
          "Die Entscheidung verbindet Architektur, Oberfläche, Pflege und die gewünschte Ausführung. Kunststoff bietet viele Gestaltungsmöglichkeiten, Aluminium einen klaren architektonischen Ausdruck und Holz eine natürliche Materialwirkung. Vergleichen Sie passende Muster und die konkrete Ausstattung statt nur das Material als Schlagwort.",
      },
      {
        question: "Kann ich zunächst einzelne Fenster erneuern?",
        answer:
          "Ein schrittweises Vorgehen lässt sich besprechen. Sinnvoll ist trotzdem ein Blick auf das gesamte Haus: Teilung, Farbe, Fassadenarbeiten und spätere Anschlüsse sollten zusammenpassen. Nennen Sie im Gespräch, welche Räume jetzt und welche möglicherweise später anstehen.",
      },
      {
        question: "Welche Verglasung brauche ich?",
        answer:
          "Das hängt vom Gebäude, der Lage des Raums und Ihrem Ziel ab. Wärmedämmung, sommerliche Sonneneinstrahlung, Schall und Sicherheitswünsche werden gemeinsam betrachtet. Die Auswahl erfolgt für das konkrete Fenster; eine pauschale Glasempfehlung ersetzt diese Abstimmung nicht.",
      },
      {
        question: "Was ist für eine erste Fensteranfrage hilfreich?",
        answer:
          "Projektort, ungefähre Anzahl und Maße sowie Fotos von innen und außen genügen für den Einstieg. Ergänzen Sie, ob Sie sanieren oder neu bauen und was Sie verbessern möchten. Verbindliche Bestellmaße werden anschließend beim fachlichen Aufmaß ermittelt.",
      },
    ],
    related: ["haustueren", "rolllaeden", "einbruchschutz"],
    guideSlug: repairGuide,
    offerSlug: "fenster-tueren",
    requestMessage:
      "Ich interessiere mich für neue Fenster. Bitte beraten Sie mich zu Material, Verglasung und Austausch mit Montage.",
    sourceRefs: [
      `${base}/portfolio/fenster`,
      `${base}/kunststofffenster`,
      `${base}/alufenster`,
      `${base}/holzfenster`,
      `${base}/portfolio/wartung-service`,
    ],
    status: "draft",
  },
  {
    slug: "haustueren",
    title: "Haustüren",
    metaTitle: "Haustüren in Merseburg: Beratung & Einbau",
    metaDescription:
      "Eine Haustür passend zu Ihrem Haus: Gestaltung, Licht, Bedienung und Einbau gemeinsam planen. Persönliche Beratung bei KLOTZ in Merseburg-Meuschau.",
    hero: {
      title: "Ihre Haustür.",
      accent: "Willkommen zu Hause.",
      lead: "Der erste Eindruck von außen. Ein vertrauter Handgriff im Alltag. Ihre Haustür verbindet Gestaltung mit der Frage, wie Sie nach Hause kommen möchten. KLOTZ begleitet die Auswahl mit Blick auf Eingang, Ausstattung und fachgerechten Einbau.",
      cta: "Meinen Eingang planen",
    },
    media: windowsMedia.haustueren,
    benefits: [
      {
        title: "Ein stimmiger Empfang",
        text: "Türmotiv, Farbe, Griff und Verglasung werden als Teil Ihrer Fassade gedacht.",
      },
      {
        title: "Komfort im Alltag",
        text: "Durchgang, Schwelle und Bedienung passen zu den Menschen, die den Eingang täglich nutzen.",
      },
      {
        title: "Klarer Leistungsumfang",
        text: "Vom Aufmaß bis zu den Anschlussdetails wird besprochen, was Ihre neue Eingangslösung umfasst.",
      },
    ],
    story: {
      title: "Ein Eingang, der Ihr Zuhause erkennen lässt.",
      paragraphs: [
        "Eine neue Haustür verändert mehr als die Ansicht des Hauses. Sie prägt den Empfang für Gäste und den eigenen Alltag: mit Einkaufstaschen nach Hause kommen, Kinder hereinlassen oder den Hausflur mit Tageslicht versorgen. Deshalb beginnen wir bei Ihrer Nutzung und beim Charakter des Gebäudes.",
        "Soll die Tür ruhig in der Fassade liegen oder einen bewussten Akzent setzen? Ein geschlossenes Türblatt wirkt anders als ein Motiv mit Glas; ein Seitenteil verändert Licht und Proportionen des gesamten Eingangs. Materialien und Farben werden gemeinsam mit vorhandenen Fenstern, Vordach und Außenbereich betrachtet.",
        "Im KLOTZ-Sortiment sind Aluminium-, Kunststoff- und Holzhaustüren vertreten. Für Ihre Auswahl zählen die konkrete Ausführung, die gewünschte Oberfläche und die Ausstattung. Ein persönliches Gespräch hilft, aus vielen Motiven eine Lösung für genau Ihren Eingang zu entwickeln.",
      ],
    },
    variants: [
      {
        title: "Klar & geschlossen",
        description:
          "Ein ruhiges Türblatt lenkt den Blick auf Material, Linien und Griff. Farbe und Oberfläche können sich zurücknehmen oder einen gezielten Kontrast zur Fassade bilden.",
        suitable:
          "Für einen geschützten Eingangsbereich mit klarer Gestaltung.",
      },
      {
        title: "Mit Licht im Flur",
        description:
          "Verglasungen im Türblatt, seitliche Glaselemente oder ein Oberlicht können Tageslicht in den Eingang bringen. Dabei stimmen wir Einblick, Lichtwunsch und die vorhandene Öffnung aufeinander ab.",
        suitable:
          "Für Eingänge, bei denen Helligkeit und Privatsphäre zusammenpassen sollen.",
      },
      {
        title: "Komfortabel ausgestattet",
        description:
          "Griff, Verriegelung und Bedienung werden nach Ihrem Alltag ausgewählt. Falls ein elektronischer Zugang gewünscht ist, klären wir die Optionen des gewählten Systems und die nötigen Voraussetzungen.",
        suitable:
          "Für einen Eingang, der sich im täglichen Gebrauch richtig anfühlt.",
      },
    ],
    detail: {
      title: "Die Details machen aus einer Tür Ihren Eingang.",
      image: serviceImage(
        "/images/building-entry-detail.webp",
        "Dunkle Haustür mit schmalen Glaselementen an einer weißen Fassade mit begrüntem Vorgarten",
      ),
      caption:
        "Türmotiv, Glas und Fassade gemeinsam gedacht · KLOTZ-Produktgalerie",
      paragraphs: [
        "Die schöne Außenansicht soll auch von innen überzeugen. Wir besprechen Anschlag, Öffnungsraum, Griffhöhe und das Zusammenspiel mit Garderobe, Treppe oder Briefkasten. So wird die Tür passend zur tatsächlichen Bewegung im Haus ausgewählt.",
        "Besondere Aufmerksamkeit verdient der untere Anschluss. Schwellenhöhe, Innenboden und Außenniveau gehören früh auf den Tisch, gerade wenn ein bequemerer Zugang gewünscht ist. Die geeignete Ausführung wird anhand der vorhandenen Situation geplant.",
        "Sicherheitswünsche betrachten wir als Zusammenspiel aus Tür, Verriegelung, Verglasung und Montage. Konkrete Eigenschaften werden für das ausgewählte Element vereinbart. Das Angebot beschreibt außerdem Ausbau, Anschlussarbeiten und Zubehör, damit Sie den Umfang der neuen Haustür nachvollziehen können.",
      ],
    },
    planning: [
      {
        title: "Den Eingang kennenlernen",
        text: "Zeigen Sie Außen- und Innenansicht. Wünsche an Tageslicht, Privatsphäre und Bedienung helfen dabei, die passende Richtung zu finden.",
      },
      {
        title: "Gestaltung zusammenstellen",
        text: "Material, Motiv, Farbe, Glas und Griff werden gemeinsam gewählt. Vorhandene Fenster und ein Vordach können als gestalterische Bezugspunkte dienen.",
      },
      {
        title: "Maße und Übergänge prüfen",
        text: "Beim Aufmaß zählen auch Bodenhöhen, Anschlag, Durchgang und seitliche Anschlüsse. Gewünschte Zugangstechnik wird früh angesprochen.",
      },
      {
        title: "Einbauumfang vereinbaren",
        text: "Wir stimmen Ausbau, vereinbarte Montage und Nebenarbeiten ab. So ist vor der Umsetzung klar, wie der bestehende Eingang erneuert wird.",
      },
    ],
    costs: {
      lead: "Eine Haustür wird aus vielen Entscheidungen zusammengestellt. Der Preis hängt vom vollständigen Element, der Ausstattung und den Arbeiten am Eingang ab. Mit einer konkret beschriebenen Ausführung wird aus einem Motivwunsch ein vergleichbares Angebot.",
      factors: [
        "Maße, Material und Oberfläche des Türelements",
        "Türmotiv, Glas, Seitenteile und Oberlicht",
        "Griff, Verriegelung und gewünschte Zugangstechnik",
        "Ausbau der bisherigen Tür und Anschluss an den Bestand",
        "Schwelle, Bodenübergänge und vereinbarte Nebenarbeiten",
      ],
    },
    faq: [
      {
        question: "Welches Haustürmaterial sollte ich wählen?",
        answer:
          "Aluminium, Kunststoff und Holz bieten unterschiedliche Oberflächen und Gestaltungsmöglichkeiten. Entscheidend ist, welche konkrete Ausführung zur Architektur, zum Pflegewunsch und zu Ihrer Ausstattung passt. In der Beratung betrachten wir das ganze Türelement statt nur die Materialbezeichnung.",
      },
      {
        question: "Wie bringe ich mehr Tageslicht in den Hausflur?",
        answer:
          "Je nach Eingang kommen Glas im Türblatt, ein Seitenteil oder ein Oberlicht infrage. Wichtig sind die vorhandene Öffnung und Ihr Wunsch nach Sichtschutz. Gemeinsam lässt sich eine Aufteilung wählen, die von außen stimmig wirkt und innen die gewünschte Lichtwirkung unterstützt.",
      },
      {
        question: "Kann ich einen Zugang ohne klassischen Schlüssel wählen?",
        answer:
          "Elektronische Zugangsmöglichkeiten werden für das ausgewählte Türsystem geprüft. Besprechen Sie früh, wie Sie öffnen möchten und wer die Tür nutzt. Dazu gehören auch Stromversorgung, Bedienung und der Umgang mit einer Störung; die passende Ausstattung wird konkret vereinbart.",
      },
      {
        question: "Ist ein möglichst schwellenarmer Eingang möglich?",
        answer:
          "Das prüfen wir anhand der Bodenhöhen und der Außenanschlüsse. Ein komfortabler Übergang muss zur vorhandenen Einbausituation und zum Witterungsschutz passen. Zeigen Sie deshalb auch die Stufe vor der Tür und den Innenboden, wenn Sie Ihre Anfrage vorbereiten.",
      },
      {
        question: "Was gehört zum Angebot für eine neue Haustür?",
        answer:
          "Neben Material, Maßen und Motiv sollten Glas, Griff, Verriegelung und Zubehör beschrieben sein. Ebenso wichtig sind Ausbau, Montage und die vereinbarten Anschlussarbeiten. Bei KLOTZ werden diese Punkte mit Ihrer Einbausituation zusammengeführt, damit der Umfang nachvollziehbar bleibt.",
      },
    ],
    related: ["fenster", "rolllaeden", "einbruchschutz"],
    guideSlug: repairGuide,
    offerSlug: "fenster-tueren",
    requestMessage:
      "Ich plane eine neue Haustür. Bitte beraten Sie mich zu Gestaltung, Ausstattung, Aufmaß und Einbau.",
    sourceRefs: [
      `${base}/portfolio/tueren`,
      `${base}/alutueren`,
      `${base}/kunststofftueren`,
      `${base}/holztueren`,
      `${base}/kontakt`,
    ],
    status: "draft",
  },
  {
    slug: "innentueren",
    title: "Innentüren",
    metaTitle: "Innentüren in Merseburg: Stil, Auswahl & Montage",
    metaDescription:
      "Innentüren für ein stimmiges Zuhause: CPL, Holz, Weißlack und Glas. Mit KLOTZ in Merseburg Oberfläche, Zarge, Öffnung und Montage gemeinsam planen.",
    hero: {
      title: "Räume verbinden.",
      accent: "Ihren Stil bewahren.",
      lead: "Eine Tür schließt einen Raum und verbindet das ganze Zuhause. Mit der passenden Oberfläche, einem guten Griff und einer stimmigen Zarge wird daraus ein Detail, das Sie jeden Tag gern benutzen. Entdecken Sie mit KLOTZ Ihre Möglichkeiten.",
      cta: "Meine Innentüren auswählen",
    },
    media: windowsMedia.innentueren,
    benefits: [
      {
        title: "Ein roter Faden",
        text: "Türblatt, Zarge und Beschlag passen zu Boden, Wand und dem Charakter Ihrer Räume.",
      },
      {
        title: "Für echtes Wohnen",
        text: "Licht, Privatsphäre und Beanspruchung geben der Materialwahl eine klare Richtung.",
      },
      {
        title: "Bis ins Detail geplant",
        text: "Wandstärke, Bodenaufbau und Öffnungsrichtung werden vor der Bestellung gemeinsam betrachtet.",
      },
    ],
    story: {
      title: "Ein Zuhause wirkt durch seine Übergänge.",
      paragraphs: [
        "Wenn Sie mehrere Innentüren erneuern, verändert sich der Eindruck einer ganzen Wohnung. Ein ruhiges Weiß lässt Wände und Möbel wirken, ein Holzdekor nimmt den Boden auf und eine Glastür führt Licht weiter in den Flur. Die beste Auswahl beginnt deshalb mit dem Gesamtbild und der Nutzung jedes Raums.",
        "Ein Schlafzimmer braucht andere Überlegungen als eine Verbindung zum Wohnzimmer. Fragen nach Einblick, gewünschter Ruhe und Platz vor der Öffnung helfen bei der Entscheidung. Auch ein Türgriff wird täglich benutzt: Form und Oberfläche sollten sich ebenso gut anfühlen, wie sie aussehen.",
        "Das bisherige KLOTZ-Sortiment umfasst Echtholz- und Furniertüren, CPL, Weißlack und Glastüren. Wir helfen, diese Möglichkeiten für Ihr Vorhaben zu ordnen. Dazu betrachten wir Türblatt und Zarge als Einheit und stimmen neue Elemente mit dem vorhandenen Ausbau ab.",
      ],
    },
    variants: [
      {
        title: "CPL für den Alltag",
        description:
          "Eine dekorative Oberfläche mit vielen Holzoptiken und ruhigen Farbtönen. Interessant, wenn die Tür unkompliziert in einen viel genutzten Wohnbereich passen soll. Das konkrete Dekor wird zusammen mit Boden und Zarge ausgewählt.",
        suitable:
          "Für Familienleben, klare Gestaltung und eine auf den Alltag abgestimmte Oberfläche.",
      },
      {
        title: "Holz & Weißlack",
        description:
          "Furnier bringt natürliche Maserung in den Raum, Weißlack eine helle und zurückhaltende Wirkung. Glatte oder profilierte Türblätter schaffen unterschiedliche Stimmungen; die passende Ausführung folgt Ihrem Wohnstil.",
        suitable:
          "Für natürliche Akzente oder ein durchgängig ruhiges Türenbild.",
      },
      {
        title: "Glas & Lichtausschnitte",
        description:
          "Licht kann durch eine geschlossene Tür weiter in den Flur gelangen. Klare und stärker sichtschützende Gestaltungen verändern die Verbindung zwischen den Räumen; Öffnungsart und Beschläge werden passend dazu gewählt.",
        suitable: "Für helle Übergänge mit bewusst gewähltem Maß an Einblick.",
      },
    ],
    detail: {
      title: "Türblatt, Zarge und Raum müssen zusammenpassen.",
      image: serviceImage(
        "/images/building-interior-detail.webp",
        "Geöffnete Innentür in heller Holzoptik zwischen Wohnräumen",
      ),
      caption:
        "Holzoptik als Verbindung zwischen Räumen · Produktabbildung aus der KLOTZ-CPL-Galerie",
      paragraphs: [
        "Beim Austausch ist die sichtbare Tür nur ein Teil des Vorhabens. Die Zarge muss zur Wandstärke und Öffnung passen; der fertige Fußboden beeinflusst Höhen und Übergänge. Wer Boden und Türen gemeinsam erneuert, sollte diese Reihenfolge vor der Bestellung abstimmen.",
        "Auch die Öffnungsrichtung verdient einen Blick in den Alltag. Steht ein Schrank im Weg, wird ein Lichtschalter verdeckt oder treffen zwei geöffnete Türen aufeinander? Ein einfacher Grundriss und Fotos machen solche Punkte früh sichtbar. Eine Schiebelösung kann je nach Einbausituation eine Alternative sein.",
        "Wünsche an Schall, Feuchtigkeit oder besondere Nutzung werden raumbezogen geklärt. Dafür zählt die geeignete Gesamtausführung aus Türblatt, Zarge und Ausstattung. So verbinden Sie einen einheitlichen Stil mit den Funktionen, die in den einzelnen Räumen gebraucht werden.",
      ],
    },
    planning: [
      {
        title: "Räume und Stil festlegen",
        text: "Nennen Sie Anzahl und Nutzung der Räume. Fotos von Boden, Wänden und bisherigen Türen zeigen, welche Gestaltung harmonieren soll.",
      },
      {
        title: "Oberflächen vergleichen",
        text: "Wir besprechen Dekor, Lack, Furnier oder Glas zusammen mit Zarge und Beschlag. Ein gemeinsames Bild verhindert zufällige Einzelentscheidungen.",
      },
      {
        title: "Öffnungen aufnehmen",
        text: "Maße, Wandstärken, Anschläge und der fertige Bodenaufbau werden geprüft. Geplante Renovierungen gehören bereits in diese Abstimmung.",
      },
      {
        title: "Austausch koordinieren",
        text: "Vor der vereinbarten Montage werden Zugang, Ausbauumfang und mögliche Anpassungen geklärt. Bei mehreren Räumen hilft eine übersichtliche Zuordnung der Türen.",
      },
    ],
    costs: {
      lead: "Die Kosten neuer Innentüren ergeben sich aus Anzahl, Ausführung und Einbau. Besonders aussagekräftig ist ein Angebot, das pro Öffnung Türblatt, Zarge, Beschlag und vereinbarte Arbeiten beschreibt. So bleiben auch unterschiedliche Raumlösungen übersichtlich.",
      factors: [
        "Anzahl der Türen und jeweilige Öffnungsmaße",
        "Türblatt, Oberfläche und Glasgestaltung",
        "Zargen, Wandstärken und Beschläge",
        "Dreh- oder Schiebelösung und gewünschte Funktionen",
        "Ausbau, Montage und Anpassungen am vorhandenen Ausbau",
      ],
    },
    faq: [
      {
        question: "CPL, Weißlack oder Furnier – was passt zu mir?",
        answer:
          "Das entscheidet sich aus gewünschter Optik, Nutzung und Pflege. CPL bietet viele Dekore, Weißlack ein ruhiges helles Bild und Furnier eine natürliche Maserung. Vergleichen Sie die Oberfläche zusammen mit Boden, Wandfarbe und Zarge, damit die Räume als Ganzes stimmig wirken.",
      },
      {
        question: "Kann eine neue Tür in der alten Zarge bleiben?",
        answer:
          "Das lässt sich nach Prüfung von Maßen, Bändern, Falz und Zustand beurteilen. Ein beliebiges neues Türblatt passt nicht automatisch in jede vorhandene Zarge. Wenn Sie nur das Blatt austauschen möchten, zeigen Sie Fotos von Bändern und Zarge und sprechen Sie diesen Wunsch gleich an.",
      },
      {
        question: "Welche Tür hilft, Licht in den Flur zu bringen?",
        answer:
          "Eine Glastür oder ein Lichtausschnitt kann Tageslicht zwischen Räumen weitergeben. Wie viel Einblick dabei gewünscht ist, bestimmt die Gestaltung des Glases. Wir besprechen die Verbindung zwischen den Räumen und die passende Öffnung, bevor Sie sich für ein Motiv entscheiden.",
      },
      {
        question: "Wann sollte ich Türen bei einer Renovierung planen?",
        answer:
          "Sobald Bodenaufbau und Raumaufteilung feststehen. Die fertige Fußbodenhöhe und die Wandstärke wirken sich auf die Bestellung aus. Stimmen Sie Türen deshalb früh mit Bodenleger und weiteren Ausbauarbeiten ab; das Aufmaß sollte die geplante Endausführung berücksichtigen.",
      },
      {
        question: "Kann ich für einzelne Räume besondere Funktionen wählen?",
        answer:
          "Ja, unterschiedliche Anforderungen werden pro Raum besprochen. Gewünschter Schallschutz, Feuchtebeanspruchung oder eine andere Öffnungsart beeinflussen die konkrete Auswahl. Wichtig ist die vollständige geeignete Ausführung; zugleich kann die sichtbare Gestaltung im Zuhause einheitlich bleiben.",
      },
    ],
    related: ["haustueren", "fenster", "rolllaeden"],
    guideSlug: "",
    offerSlug: "fenster-tueren",
    requestMessage:
      "Ich möchte Innentüren erneuern. Bitte beraten Sie mich zu Oberflächen, Zargen, Beschlägen und Montage.",
    sourceRefs: [
      `${base}/portfolio/tueren`,
      `${base}/clp`,
      `${base}/echtholztueren`,
      `${base}/weisslacktueren`,
      `${base}/glastueren`,
    ],
    status: "draft",
  },
  {
    slug: "rolllaeden",
    title: "Rollläden",
    metaTitle: "Rollläden in Merseburg: Nachrüstung & Komfort",
    metaDescription:
      "Rollläden neu planen, nachrüsten oder modernisieren: Mit KLOTZ in Merseburg Einbausituation, Sichtschutz, Verdunkelung und Bedienung passend abstimmen.",
    hero: {
      title: "Licht gestalten.",
      accent: "Zur Ruhe kommen.",
      lead: "Morgens öffnen, abends zurückziehen, im Schlafzimmer verdunkeln. Rollläden machen den Alltag am Fenster angenehmer. KLOTZ berät Sie zur passenden Einbaulösung und dazu, wie sich neue oder vorhandene Anlagen bequem bedienen lassen.",
      cta: "Meine Rollläden planen",
    },
    media: windowsMedia.rolllaeden,
    benefits: [
      {
        title: "Ihr Tagesrhythmus",
        text: "Öffnen und schließen, wenn es zu Ihrem Alltag passt – mit einer darauf abgestimmten Bedienung.",
      },
      {
        title: "Mehr Rückzug",
        text: "Sichtschutz und Verdunkelung werden nach Raum, Fenster und gewünschter Nutzung geplant.",
      },
      {
        title: "Bestand sinnvoll nutzen",
        text: "Nachrüstung, Motorisierung oder Erneuerung werden anhand der vorhandenen Anlage besprochen.",
      },
    ],
    story: {
      title: "Was wünschen Sie sich von Ihrem Fensterplatz?",
      paragraphs: [
        "Vielleicht möchten Sie morgens länger schlafen, abends Einblicke von der Straße reduzieren oder die tägliche Bedienung mehrerer Rollläden vereinfachen. Solche Wünsche machen die Auswahl konkret. Wir betrachten, welche Räume geschützt werden sollen und was an den vorhandenen Fenstern bereits möglich ist.",
        "Die Lösung soll zur Fassade und zur Nutzung passen. Kasten, Führungsschienen und Behang prägen den Außenanblick; im Raum zählen Bedienbarkeit und der Zugang zur Wartung. Besonders beim Nachrüsten ist die vorhandene Öffnung ein wichtiger Ausgangspunkt.",
        "KLOTZ beschreibt im bisherigen Sortiment verschiedene Rollladenlösungen und die Modernisierung vorhandener Anlagen. Gemeinsam klären wir, ob eine neue Ausführung, eine Anpassung der Bedienung oder eine Instandsetzung sinnvoll ist. So richten Sie den Umfang an Ihrem tatsächlichen Bedarf aus.",
      ],
    },
    variants: [
      {
        title: "Vorhandenes modernisieren",
        description:
          "Bei einer bestehenden Anlage werden Zustand, Platz und Bedienung geprüft. Eine Motorisierung oder der Austausch einzelner Komponenten kann sich anbieten, wenn die Voraussetzungen passen.",
        suitable:
          "Wenn vor allem die tägliche Handhabung verbessert werden soll.",
      },
      {
        title: "Am Bestand nachrüsten",
        description:
          "Eine Vorbaulösung kann bei bestehenden Fenstern infrage kommen. Dabei werden Kastenposition, Führungsschienen und der verbleibende Lichteinfall gemeinsam mit dem Fassadenbild betrachtet.",
        suitable:
          "Wenn bisher kein Rollladen vorhanden ist und das Fenster erhalten bleiben soll.",
      },
      {
        title: "Mit neuen Fenstern planen",
        description:
          "Beim Fenstertausch lässt sich die Rollladenlösung von Beginn an mitdenken. Kasten, Fenster, Anschlüsse und die gewünschte Steuerung werden zusammen ausgewählt und aufeinander abgestimmt.",
        suitable: "Wenn mehrere Bauelemente in einem Schritt erneuert werden.",
      },
    ],
    detail: {
      title: "Komfort beginnt bei der richtigen Bedienung.",
      image: serviceImage(
        "/images/building-shutter-detail.webp",
        "Teilweise geschlossener weißer Rollladen in einer dunklen Fassade",
      ),
      caption:
        "Kasten, Führung und Fensteransicht im Zusammenhang · KLOTZ-Rollladengalerie",
      paragraphs: [
        "Gurt oder Kurbel sind vertraute Bedienwege. Ein Motor kann die tägliche Nutzung erleichtern, etwa bei großen Elementen oder mehreren Fenstern. Ob vorhandene Anlagen dafür geeignet sind, wird anhand der Technik und des verfügbaren Platzes geprüft.",
        "Wenn eine elektrische Bedienung gewünscht ist, gehören Stromversorgung, Schalterposition und mögliche Leitungswege früh in die Planung. Für Funk oder automatisierte Abläufe zählt, welche Komponenten tatsächlich zusammenarbeiten. Bestehende Hausautomation sollte deshalb mit Hersteller und System benannt werden.",
        "Auch später muss die Anlage erreichbar bleiben. Der Zugang zum Kasten und die Möglichkeit zur Wartung werden bei der Einbaulösung mitbedacht. Wünsche nach integriertem Insektenschutz lassen sich für das gewählte System prüfen und direkt in die Auswahl aufnehmen.",
      ],
    },
    planning: [
      {
        title: "Wünsche je Raum sammeln",
        text: "Sichtschutz, Verdunkelung und Bedienkomfort können unterschiedlich wichtig sein. Nennen Sie die betroffenen Fenster und was sich im Alltag verbessern soll.",
      },
      {
        title: "Bestand dokumentieren",
        text: "Fotos von Fenster, Kasten und bisheriger Bedienung helfen bei der Einordnung. Bei einer vorhandenen Steuerung sind Hersteller und Systembezeichnung nützlich.",
      },
      {
        title: "Einbau und Bedienung abstimmen",
        text: "Kasten, Schienen, Öffnung und eventuelle Stromversorgung werden zusammen betrachtet. Gewünschte Automatik und Insektenschutz sprechen wir früh an.",
      },
      {
        title: "Umfang konkret vereinbaren",
        text: "Nach Prüfung und Aufmaß werden neue Komponenten, Montage und mögliche Nebenarbeiten beschrieben. Eine Reparatur wird bei geeigneten Bestandsanlagen mitbedacht.",
      },
    ],
    costs: {
      lead: "Für Rollläden zählen die Maße ebenso wie die Art des Einbaus und der Bedienung. Eine Nachrüstung unterscheidet sich von einem gemeinsam mit dem Fenster geplanten System. Ihr Angebot beschreibt die passende Ausführung und die vereinbarten Arbeiten am Gebäude.",
      factors: [
        "Anzahl, Maße und Zustand der betroffenen Elemente",
        "Kasten, Behang und Führungsschienen",
        "Manuelle, motorische oder abgestimmte automatisierte Bedienung",
        "Voraussetzungen für Stromversorgung und Leitungswege",
        "Montage, Zugänglichkeit und gewünschte Ergänzungen",
      ],
    },
    faq: [
      {
        question: "Kann ich Rollläden an vorhandenen Fenstern nachrüsten?",
        answer:
          "Das wird anhand von Fassade, Öffnung und Platz für Kasten und Schienen geprüft. Eine Vorbaulösung kann infrage kommen; wichtig sind auch der verbleibende Lichteinfall und die Befestigung. Zeigen Sie im ersten Gespräch eine Außenansicht der betroffenen Fenster.",
      },
      {
        question: "Lässt sich ein Rollladen mit Gurt auf Motor umrüsten?",
        answer:
          "Eine Umrüstung kann möglich sein, wenn Anlage, Platz und Zustand dazu passen. Zusätzlich wird die Stromversorgung geklärt. Fotos von Kasten, Gurt und Element sowie Angaben zur gewünschten Bedienung erleichtern die erste Einschätzung; die konkrete Ausführung wird am Bestand geprüft.",
      },
      {
        question: "Was brauche ich für Funk oder eine automatische Steuerung?",
        answer:
          "Entscheidend sind geeignete und miteinander kompatible Komponenten. Nennen Sie bei vorhandener Hausautomation Hersteller und System. Dann lässt sich klären, welche Bedienung am Fenster, welche gemeinsamen Abläufe und welche zusätzlichen Voraussetzungen sinnvoll sind.",
      },
      {
        question: "Sind Rollläden automatisch ein Einbruchschutz?",
        answer:
          "Ein gewöhnlicher Rollladen ist kein pauschaler Nachweis für Einbruchhemmung. Wenn Sicherheit Ihr Ziel ist, sprechen Sie diese Anforderung ausdrücklich an. Die Eigenschaften müssen für das konkrete System und die Einbausituation betrachtet werden; auch Fenster und Verriegelung gehören dazu.",
      },
      {
        question: "Muss ein defekter Rollladen vollständig ersetzt werden?",
        answer:
          "Nicht jeder Defekt erfordert einen vollständigen Austausch. Zustand, Fehlerursache und verfügbare passende Teile bestimmen, ob eine Reparatur sinnvoll ist. KLOTZ bietet Wartung und Instandsetzung an. Beschreiben Sie, ob Behang, Gurt, Motor oder Steuerung auffällig sind, und vermeiden Sie gewaltsames Betätigen.",
      },
    ],
    related: ["fenster", "haustueren", "innentueren"],
    guideSlug: repairGuide,
    offerSlug: "fenster-tueren",
    requestMessage:
      "Ich interessiere mich für Rollläden oder die Modernisierung einer vorhandenen Anlage. Bitte beraten Sie mich zu Einbau und Bedienung.",
    sourceRefs: [
      `${base}/rolllaeden`,
      `${base}/portfolio/sicht-sonnenschutz`,
      `${base}/portfolio/wartung-service`,
    ],
    status: "draft",
  },
  windowsSecurityPage,
];
