import { z } from "zod";
import { offerPageSchema } from "./schemas";
import type { OfferPageContent } from "@/domain/content/offers";
import campaignAssets from "../../content/angebote-assets-manifest.json";

// Campaign media and source prices are adapted to the domain model here.
// Pages consume the repository and never depend on the manifest's file format.
const definitions = [
  {
    id: "angebote-lamellendach-pergola-2026",
    slug: "lamellendaecher-pergolen",
    kind: "products",
    title: "Lamellendach- und Pergola-Angebote in Merseburg",
    shortTitle: "Lamellendach & Pergola",
    eyebrow: "Terrasse & Garten",
    excerpt:
      "Zwei Wege zum Lieblingsplatz draußen: Lamellendach und Pergola mit Preisbeispielen, Planungsfragen und persönlicher Beratung.",
    lead: "Wie möchten Sie Ihre Terrasse nutzen? Vergleichen Sie die Ausgangspreise aus unserem Aktionsflyer und klären Sie mit KLOTZ, welche Dachlösung zu Haus, Sonne und Alltag passt.",
    answer:
      "Der Flyer nennt ein Lamellendach mit 3,0 × 3,0 m ab 5.999 € und eine Pergola mit 3,0 × 3,0 m ab 4.999 €, jeweils ohne Montage. Welches Angebot zu Ihrem Vorhaben passt, entscheidet sich an Nutzung, Dachsystem, Befestigung und Ausstattung. Die Beträge sind archivierte Preisbeispiele; ein aktuelles Angebot setzt die Prüfung Ihrer Einbausituation voraus.",
    metaTitle: "Lamellendach & Pergola: Angebotsideen in Merseburg",
    metaDescription:
      "Lamellendach und Pergola in Merseburg vergleichen: Preisbeispiele, Maße, Ausstattung und Planung mit KLOTZ. Montage und Bedingungen transparent erklärt.",
    priceSummary: "Lamellendach ab 5.999 € · Pergola ab 4.999 €",
    inquiryTopic: "Terrasse & Garten",
    sections: [
      {
        id: "dachwahl",
        title: "Lamellendach oder Pergola: Was möchten Sie draußen erleben?",
        paragraphs: [
          "Ein Lamellendach arbeitet mit verstellbaren Lamellen. So lässt sich der Lichteinfall je nach System beeinflussen. Bei einer Pergola stehen Gestaltung und Sonnenschutz im Mittelpunkt; welche Dachbespannung oder Bedachung vorgesehen ist, muss das konkrete Angebot erklären. Der Produktname allein beschreibt den Leistungsumfang noch nicht.",
          "Beginnen Sie deshalb mit Ihren Lieblingszeiten auf der Terrasse: Frühstück in der Morgensonne, ein Platz zum Lesen oder ein großer Esstisch am Haus? Ausrichtung, vorhandene Verschattung und der Übergang zum Wohnraum helfen, zwischen den Lösungen zu wählen. Eine bestimmte Witterungsbeständigkeit ergibt sich erst aus den geprüften Systemdaten.",
        ],
      },
      {
        id: "preisvergleich",
        title:
          "Warum zwei Anlagen gleicher Größe unterschiedlich viel kosten können",
        paragraphs: [
          "Die 3,0 × 3,0 m aus dem Flyer sind ein Vergleichsmaß und keine Zusage für jede Grundstückssituation. Dachmaterial, Stützen, Farbwahl, Bedienung und Zubehör beeinflussen den Preis. Ebenso wichtig ist, ob die Konstruktion frei steht oder an eine geeignete Hauswand angeschlossen werden soll.",
          "Lassen Sie sich im Angebot zeigen, welche Teile enthalten sind und welche Arbeiten gesondert berechnet werden. Fundamente, Elektroanschluss, Entwässerung und Beschattung gehören früh ins Gespräch. Ein niedriger Einstiegspreis ist erst dann hilfreich, wenn Sie die gesamte Ausführung mit einer anderen Lösung vergleichen können.",
        ],
      },
      {
        id: "standort",
        title: "Standort und Erweiterungen zusammen planen",
        paragraphs: [
          "Vor der Systemwahl sollten Stellfläche, Stützenpositionen und die Ableitung des Regenwassers geklärt sein. Denken Sie auch an Türen, Laufwege und den Zugang für die Montage. Ob ein baurechtliches Verfahren erforderlich ist, muss für Grundstück und Ausführung bei der zuständigen Stelle geprüft werden.",
          "Wenn später Glasschiebewände, Seitenbeschattung oder Beleuchtung gewünscht sind, sprechen Sie diese Optionen jetzt an. Nicht jedes Dach lässt sich beliebig nachrüsten. Eine passende Vorbereitung kann die spätere Entscheidung erleichtern; die tatsächliche Erweiterbarkeit bestätigt der Fachbetrieb für das ausgewählte System.",
        ],
      },
      {
        id: "anfrage",
        title: "So wird aus dem Preisbeispiel Ihr konkretes Projekt",
        paragraphs: [
          "Für den ersten Kontakt sind der Projektort, ungefähre Breite und Tiefe sowie Fotos der Hausseite hilfreich. Notieren Sie, wie viele Personen den Platz nutzen und was Sie am bisherigen Außenbereich stört. Auch die Frage nach manueller oder elektrischer Bedienung darf zunächst offen bleiben.",
          "KLOTZ ist am Standort Merseburg-Meuschau ansprechbar. Für Vorhaben in Halle (Saale), Leipzig und im Saalekreis werden Umfang und Einbausituation individuell abgestimmt. Aus dem Gespräch und der Prüfung vor Ort kann ein nachvollziehbares Angebot mit abgegrenzten Leistungen entstehen. Verfügbarkeit und Montagetermin sind gesondert zu vereinbaren.",
        ],
      },
    ],
    checklist: [
      "Projektort, Breite und Tiefe notieren",
      "Ausrichtung und gewünschte Nutzungszeiten beschreiben",
      "Fundamente, Wandanschluss und Entwässerung ansprechen",
      "Bedienung, Beschattung und spätere Seitenelemente mitdenken",
      "Gesamtumfang inklusive Montage im Angebot prüfen",
    ],
    faq: [
      {
        question: "Ist das Lamellendach im Flyer inklusive Montage?",
        answer:
          "Nein. Die Preisbeispiele des Flyers verstehen sich ohne Montage. Ob zusätzlich Fundamente, Elektroarbeiten oder andere Vorleistungen nötig sind, hängt vom Standort ab. Ein aktuelles Angebot sollte Material, Ausstattung, Montage und bauseitige Arbeiten getrennt und verständlich ausweisen.",
      },
      {
        question:
          "Ist eine Pergola automatisch günstiger als ein Lamellendach?",
        answer:
          "Die beiden Flyerbeispiele nennen unterschiedliche Einstiegspreise. Daraus folgt kein allgemeines Preisverhältnis für jede Größe und Ausstattung. Vergleichen Sie Dachsystem, Bedienung, Fundamentierung und Zubehör im gleichen Leistungsumfang. Erst damit lässt sich die wirtschaftlich passende Lösung für Ihr Haus bewerten.",
      },
      {
        question: "Kann ich das Dach später mit Glaswänden schließen?",
        answer:
          "Das kann bei geeigneten Systemen eine Option sein, ist aber keine automatische Eigenschaft jeder Anlage. Tragkonstruktion, Anschlüsse und Entwässerung müssen zur Erweiterung passen. Lassen Sie die gewünschte spätere Nutzung bereits beim ersten Angebot prüfen und schriftlich beschreiben.",
      },
      {
        question: "Sind die abgebildeten Anlagen genau das angebotene Modell?",
        answer:
          "Die Motive veranschaulichen die Gestaltungsmöglichkeiten. Aus dem Bild lassen sich weder die im Einstiegspreis enthaltene Ausstattung noch die exakten Maße ableiten. Maßgeblich sind die Beschreibung und die technischen Unterlagen Ihres individuell abgestimmten Angebots.",
      },
    ],
    relatedLinks: [
      {
        label: "Lamellendächer im Detail",
        href: "/terrasse-garten/lamellendaecher",
      },
      {
        label: "Pergolen kennenlernen",
        href: "/terrasse-garten/pergolen",
      },
      {
        label: "Lamellendach oder Glasdach?",
        href: "/wissen/lamellendach-oder-glasdach",
      },
    ],
    sources: [
      {
        title: "KLOTZ: Lamellendach und Montagebilder",
        url: "https://www.klotz.mobi/lamellendach",
      },
      {
        title: "KLOTZ: Terrassenüberdachungen",
        url: "https://www.klotz.mobi/portfolio/terrassenueberdachung",
      },
    ],
  },
  {
    id: "angebote-zaun-tor-2026",
    slug: "zaeune-tore",
    kind: "products",
    title: "Zaun- und Tor-Angebote für Ihr Grundstück",
    shortTitle: "Zaun & Tor",
    eyebrow: "Grundstück & Zugang",
    excerpt:
      "Vom Doppelstabmattenzaun bis zum Hoftor: fünf Preisbeispiele und Orientierung zu Sichtschutz, Zufahrt und Montage.",
    lead: "Ein Grundstücksabschluss soll zu Ihrem Alltag passen. Vergleichen Sie Zaun, Sichtschutz und Toranlagen anhand der Flyerbeispiele und planen Sie den Zugang mit KLOTZ aus Merseburg.",
    answer:
      "Der Flyer enthält fünf Beispiele: Doppelstabmattenzaun ab 59 €/lfm, WPC-Sichtschutz ab 180 €/lfm, ein Alu-Zaun-Paket mit Pforte und elektrischem Flügeltor ab 7.999 € sowie zwei Hoftore ab 4.399 € beziehungsweise 2.888 €. Montage ist nicht enthalten. Laufende Meter und komplette Torpakete sind unterschiedliche Bezugsgrößen und lassen sich nicht direkt als Gesamtpreise vergleichen.",
    metaTitle: "Zaun & Tor: Preisbeispiele und Planung in Merseburg",
    metaDescription:
      "Zaun, WPC-Sichtschutz und Hoftore mit KLOTZ in Merseburg planen. Fünf Preisbeispiele, Materialien, Zufahrt, Antrieb und Montage verständlich vergleichen.",
    priceSummary: "Zaun ab 59 €/lfm · Sichtschutz ab 180 €/lfm",
    inquiryTopic: "Zaun & Tor",
    sections: [
      {
        id: "grundstueck",
        title: "Sichtschutz, Abgrenzung oder komfortable Zufahrt?",
        paragraphs: [
          "Zuerst zählt die Aufgabe: Soll die Grenze sichtbar sein, ein Sitzplatz abgeschirmt werden oder eine Zufahrt bequem zu öffnen sein? Ein offener Zaun, ein Sichtschutzfeld und eine Toranlage lösen unterschiedliche Fragen. Die gewünschte Höhe allein reicht deshalb für die Auswahl noch nicht aus.",
          "Denken Sie Gehwege, Mülltonnen, Fahrradzugang und Stellplätze mit. Ein separates Gartentor kann im Alltag anders genutzt werden als die breite Einfahrt. Auch die Optik von Haus, Nachbargrundstück und vorhandenen Mauern ist ein sinnvoller Ausgangspunkt für Material und Farbe.",
        ],
      },
      {
        id: "material",
        title: "Doppelstabmatten, WPC und Aluminium richtig vergleichen",
        paragraphs: [
          "Im Flyer stehen ein Doppelstabmattenzaun und ein WPC-Sichtschutzzaun mit Preisen pro laufendem Meter. Entscheidend ist, welche Höhe, Pfosten, Befestigungen und Abschlüsse das jeweilige Angebot umfasst. Die Bezeichnung WPC darf dabei nicht mit PVC gleichgesetzt werden; Material und Ausführung sind ausdrücklich zu benennen.",
          "Das Alu-Zaun-Beispiel ist dagegen ein Paket mit Pforte und elektrischem Flügeltor. Die Hoftore mit Paneelen beziehungsweise aus Schmiedeeisen haben eigene Maße. Ein fairer Vergleich berücksichtigt Füllung, Öffnungsbreite, Beschläge, Oberfläche und den vorgesehenen Einbau statt nur den größten Preis auf dem Motiv.",
        ],
      },
      {
        id: "torplanung",
        title: "Für eine Toranlage zählen Öffnungsraum und sichere Bedienung",
        paragraphs: [
          "Ein Flügeltor benötigt Platz für seine Bewegung. Prüfen Sie, wo Fahrzeuge halten, wie die Zufahrt ansteigt und ob die Torflügel in den nutzbaren Bereich hineinragen würden. Ein Schiebetor kann eine andere Lösung sein; dafür braucht es geeigneten seitlichen Raum und passende bauliche Voraussetzungen.",
          "Bei einem Antrieb gehören Bedienung, Stromversorgung und die vorgesehenen Sicherheitseinrichtungen ins Angebot. Lassen Sie auch erklären, wie Wartung und eine Bedienung bei Ausfall vorgesehen sind. Die konkrete Eignung und sichere Ausführung muss für das ausgewählte System und den Standort geprüft werden.",
        ],
      },
      {
        id: "montage",
        title: "Gelände und Montageumfang vor dem Auftrag klären",
        paragraphs: [
          "Gefälle, Boden, vorhandene Fundamente und Anschluss an Gebäude oder Mauern können den Aufwand verändern. Ebenso wichtig sind eine geklärte Grundstücksgrenze und die örtlichen Vorgaben. Höhen oder Abstände sollten anhand der tatsächlichen Situation abgestimmt werden; diese Seite ersetzt keine baurechtliche Prüfung.",
          "Für eine Anfrage helfen eine Skizze mit Zaunlänge und Durchfahrtsbreite sowie Fotos des Geländes. KLOTZ in Merseburg-Meuschau bespricht Projekte aus Merseburg, Halle (Saale), Leipzig und dem Saalekreis individuell. Fragen Sie nach einem Gesamtangebot, das Rückbau, Erdarbeiten, Material, Montage und Antrieb nachvollziehbar abgrenzt.",
        ],
      },
    ],
    checklist: [
      "Zaunlänge, gewünschte Höhe und Zufahrtsbreite erfassen",
      "Sichtschutz und Durchblicke bewusst auswählen",
      "Gefälle, vorhandene Pfosten und Fundamente fotografieren",
      "Öffnungsraum, Antrieb und Stromversorgung ansprechen",
      "Grenzverlauf, örtliche Vorgaben und Leistungsumfang klären",
    ],
    faq: [
      {
        question: "Was bedeutet der Preis pro laufendem Meter?",
        answer:
          "Ein laufender Meter beschreibt die Länge der Zaunanlage. Der Flyer nennt 59 €/lfm für das Doppelstabmattenbeispiel und 180 €/lfm für WPC-Sichtschutz. Welche Höhe, Pfosten und Zubehörteile dazugehören, muss das aktuelle Angebot klären. Montage und gegebenenfalls notwendige Erdarbeiten sind gesondert zu betrachten.",
      },
      {
        question: "Was umfasst das Alu-Zaun-Paket ab 7.999 €?",
        answer:
          "Der alte Flyer bezeichnet es als Alu-Zaun mit Pforte und elektrischem Flügeltor. Weitere Maße und Ausstattungsdetails sind dort nicht vollständig beschrieben. Die genaue Zaunlänge, Torbreite, Technik, Sicherheitsausstattung und Montage müssen daher vor einer Beauftragung konkret bestätigt werden.",
      },
      {
        question:
          "Kann ein vorhandenes Tor nachträglich elektrifiziert werden?",
        answer:
          "Das hängt unter anderem von Zustand, Bewegung, Beschlägen und der Einbausituation ab. Ein Antrieb lässt sich nicht pauschal an jedes Tor setzen. Lassen Sie die bestehende Anlage und die Anforderungen an die sichere Bedienung vor der Auswahl prüfen.",
      },
      {
        question: "Welche Angaben braucht KLOTZ für eine erste Einschätzung?",
        answer:
          "Hilfreich sind der Projektort, ungefähre Länge und Höhe des Zauns, die freie Durchfahrtsbreite und Fotos. Teilen Sie mit, ob Sichtschutz, ein zusätzlicher Fußgängerzugang oder elektrische Bedienung gewünscht sind. Ungeklärte Maße können beim weiteren Aufmaß präzisiert werden.",
      },
    ],
    relatedLinks: [
      {
        label: "Zaunanlagen kennenlernen",
        href: "/zaun-tor/zaunanlagen",
      },
      {
        label: "Sichtschutz auswählen",
        href: "/zaun-tor/sichtschutz",
      },
      {
        label: "Hoftore planen",
        href: "/zaun-tor/hoftore",
      },
      {
        label: "Elektrische Toranlagen",
        href: "/zaun-tor/elektrische-toranlagen",
      },
    ],
    sources: [
      {
        title: "KLOTZ: Zäune",
        url: "https://www.klotz.mobi/portfolio/zaeune",
      },
      {
        title: "KLOTZ: Hoftore",
        url: "https://www.klotz.mobi/portfolio/hoftore",
      },
    ],
  },
  {
    id: "angebote-fenster-tueren-2026",
    slug: "fenster-tueren",
    kind: "products",
    title: "Fenster- und Türen-Angebote für Ihre Modernisierung",
    shortTitle: "Fenster & Türen",
    eyebrow: "Modernisieren & gestalten",
    excerpt:
      "Sechs Flyerbeispiele von Fenster und Haustür bis Rollladen und Garagentor – mit klaren Einheiten und Fragen zum Einbau.",
    lead: "Neue Bauelemente verändern den Alltag am Haus. KLOTZ aus Merseburg hilft bei der Einordnung von Fenstern, Türen und ergänzenden Lösungen, bevor aus einer Preisidee ein konkreter Auftrag wird.",
    answer:
      "Der Flyer nennt Schüco-Kunststofffenster mit 3-fach-Verglasung ab 250 €/m², eine Aluminium-Haustür ab 2.900 € und Rollläden ab 199 € pro Stück. Hinzu kommen Vordach, CPL-Innentür und Garagen-Sektionaltor. Die Beispiele gelten laut Vorlage bis 31.12.2026 und verstehen sich ohne Montage. Produktgrößen, Einbauumfang und aktuelle Konditionen müssen individuell bestätigt werden.",
    metaTitle: "Fenster & Türen: Angebote für Merseburg und Umgebung",
    metaDescription:
      "Fenster, Haustür, Rollladen und Garagentor mit KLOTZ in Merseburg vergleichen. Sechs Preisbeispiele, Einheiten, Montageumfang und Modernisierung erklärt.",
    priceSummary: "Fenster ab 250 €/m² · Haustür ab 2.900 €",
    inquiryTopic: "Fenster & Türen",
    sections: [
      {
        id: "bestand",
        title: "Erst den Bestand prüfen, dann Bauelemente auswählen",
        paragraphs: [
          "Wenn ein Fenster klemmt oder eine Tür nicht sauber schließt, ist ein vollständiger Austausch nicht automatisch der erste Schritt. Zustand, Beschläge und Dichtungen sollten geprüft werden. KLOTZ nennt im bestehenden Service auch Wartung und Instandsetzung; welche Maßnahme sinnvoll ist, lässt sich am Bestand klären.",
          "Für eine Erneuerung zählen Ihre Prioritäten: leichtere Bedienung, Gestaltung, Ruhe, Sonnenschutz oder Anforderungen an die Sicherheit. Teilen Sie mit, was heute fehlt. Ein bestimmter Energiegewinn oder eine Schutzklasse lässt sich aus dem Werbemotiv nicht ableiten und wird hier nicht pauschal versprochen.",
        ],
      },
      {
        id: "vergleich",
        title: "Warum €/m² und Stückpreise unterschiedliche Fragen beantworten",
        paragraphs: [
          "Das Fensterbeispiel ist ein Flächenpreis für Kunststofffenster mit 3-fach-Verglasung. Größe, Teilung, Öffnungsart und Einbausituation können die Kalkulation verändern. Lassen Sie erklären, auf welche Bezugsfläche sich der Preis bezieht und welche Rahmen, Beschläge und Anschlussarbeiten enthalten sind.",
          "Der Rollladen ist dagegen pro Stück angegeben. Für Haustür, Vordach, Innentür und Garagentor nennt der Flyer konkrete Größen. Prüfen Sie beim Vergleich, ob Ihre Maße und die gewünschte Ausführung damit übereinstimmen. Ein Angebot für eine andere Abmessung oder zusätzliche Ausstattung ist eine neue Kalkulation.",
        ],
      },
      {
        id: "anschluss",
        title: "Einbau, Anschluss und Lüftung gemeinsam betrachten",
        paragraphs: [
          "Neue Fenster und Außentüren müssen zum vorhandenen Gebäude passen. Laibungen, Anschlussfugen, Fensterbänke und Rollladenkästen können den Umfang der Arbeiten mitbestimmen. Ein vollständiges Angebot benennt deshalb nicht nur das Bauteil, sondern auch Ausbau, Entsorgung, Einbau und gegebenenfalls erforderliche Nacharbeiten.",
          "Wenn die Gebäudehülle dichter wird, sollte auch die Lüftung mitgedacht werden. Fragen Sie nach dem Zusammenspiel mit den vorhandenen Wänden und möglichen Feuchtestellen. Die technische Beurteilung erfolgt am Gebäude; diese Angebotsübersicht legt keine pauschalen U-Werte oder Sanierungspflichten fest.",
        ],
      },
      {
        id: "projekt",
        title: "Mehrere Bauteile als gemeinsames Vorhaben organisieren",
        paragraphs: [
          "Eine Haustür mit Vordach, neue Fenster mit Rollläden oder ein erneuertes Garagentor betreffen unterschiedliche Anschlüsse und Abläufe. Legen Sie fest, welche Arbeiten zusammengehören und welche Räume während der Montage nutzbar bleiben sollen. Stimmen Sie Schnittstellen mit anderen Gewerken rechtzeitig ab.",
          "Für KLOTZ in Merseburg-Meuschau sind Anzahl, ungefähre Maße und Fotos innen wie außen ein hilfreicher Gesprächseinstieg. Vorhaben in Halle (Saale), Leipzig und im Saalekreis werden nach Umfang und Standort besprochen. Falls eine Förderung relevant ist, müssen deren aktuelle Voraussetzungen vor einer verbindlichen Beauftragung geklärt werden.",
        ],
      },
    ],
    checklist: [
      "Anzahl und ungefähre Maße der Bauelemente notieren",
      "Fotos innen und außen sowie erkennbare Probleme sammeln",
      "Öffnungsart, Bedienung, Schall- und Sonnenschutz priorisieren",
      "Ausbau, Entsorgung und Anschlussarbeiten im Angebot prüfen",
      "Lüftung und gegebenenfalls Förderung vor Auftrag ansprechen",
    ],
    faq: [
      {
        question: "Gilt der Fensterpreis von 250 € für ein komplettes Fenster?",
        answer:
          "Im Flyer steht ab 250 €/m², also ein Flächenpreis und kein pauschaler Stückpreis. Er bezieht sich auf das dort genannte Beispiel mit Kunststoffrahmen und 3-fach-Verglasung. Bezugsfläche, Größe, Öffnungsart, Ausstattung und Montageumfang müssen im aktuellen Angebot eindeutig beschrieben sein.",
      },
      {
        question: "Sind die 199 € für Rollläden pro Quadratmeter?",
        answer:
          "Nein. Der Originalflyer nennt ab 199 € pro Stück. Größe, Bedienung und enthaltene Teile werden vor Auftrag individuell festgelegt. Der Betrag ist ein Preisbeispiel aus dem Flyer und keine bestätigte Kalkulation für jeden Fenstertyp.",
      },
      {
        question: "Ist eine staatliche Förderung bereits vom Preis abgezogen?",
        answer:
          "Nein. Die dargestellten Basispreise enthalten keine von dieser Seite zugesagte staatliche Förderung. Ein möglicher Zuschuss richtet sich nach Programm, Gebäude und Ausführung. Er ist keine automatische Ermäßigung des Verkäufers und muss gesondert mit einer geeigneten Energieberatung geprüft werden.",
      },
      {
        question: "Wie lange gelten die Beispiele und ist Montage enthalten?",
        answer:
          "Die Vorlage nennt den 31.12.2026 als Laufzeit und schließt Montage aus. Ob das Angebot aktuell noch verfügbar ist, welche Steuerangaben gelten und welche Arbeiten erforderlich sind, muss KLOTZ bestätigen. Maßgeblich ist das persönliche Angebot für Ihr Vorhaben.",
      },
    ],
    relatedLinks: [
      {
        label: "Fensterlösungen ansehen",
        href: "/fenster-tueren/fenster",
      },
      {
        label: "Haustüren auswählen",
        href: "/fenster-tueren/haustueren",
      },
      {
        label: "Rollläden kennenlernen",
        href: "/fenster-tueren/rolllaeden",
      },
      {
        label: "Reparieren oder austauschen?",
        href: "/wissen/fenster-reparieren-oder-austauschen",
      },
    ],
    sources: [
      {
        title: "KLOTZ: Fenster",
        url: "https://www.klotz.mobi/portfolio/fenster",
      },
      {
        title: "KLOTZ: Wartung und Service",
        url: "https://www.klotz.mobi/portfolio/wartung-service",
      },
      {
        title: "Verbraucherzentrale: Fenster sanieren oder austauschen",
        url: "https://www.verbraucherzentrale.de/wissen/energie/energetische-sanierung/fenster-sanieren-oder-austauschen-darauf-sollten-sie-achten-13878",
      },
    ],
  },
  {
    id: "angebote-terrassendach-carport-2026",
    slug: "terrassendach-carport",
    kind: "products",
    title: "Terrassenüberdachung und Carport: Angebote vergleichen",
    shortTitle: "Terrassendach & Carport",
    eyebrow: "Draußen mehr Raum",
    excerpt:
      "Zwei Überdachungen, zwei Aufgaben: Einstiegspreise für die Terrasse und den Stellplatz mit Orientierung zu Untergrund und Hausanschluss.",
    lead: "Ein Dach über der Terrasse und ein geschützter Stellplatz brauchen eine passende Planung. Starten Sie mit den Flyerbeispielen und klären Sie mit KLOTZ die baulichen Voraussetzungen Ihres Grundstücks.",
    answer:
      "Die Vorlage nennt eine Terrassenüberdachung mit 3,0 × 3,0 m ab 3.999 € und einen Carport mit 3,3 × 5,0 m ebenfalls ab 3.999 €. Gleicher Einstiegspreis bedeutet hier nicht gleicher Leistungsumfang: Nutzfläche, Untergrund, Anschlüsse und Ausstattung unterscheiden sich. Montage ist nicht enthalten; als Laufzeit nennt der Flyer den 31.12.2026.",
    metaTitle: "Terrassendach & Carport: Angebotsideen in Merseburg",
    metaDescription:
      "Terrassenüberdachung und Carport mit KLOTZ in Merseburg planen: Maße, Preisbeispiele, Fundamente, Entwässerung und Montage nachvollziehbar vergleichen.",
    priceSummary: "Terrassendach und Carport jeweils ab 3.999 €",
    inquiryTopic: "Terrasse & Garten",
    sections: [
      {
        id: "nutzung",
        title: "Für die Terrasse oder den Stellplatz: Die Nutzung entscheidet",
        paragraphs: [
          "Auf der Terrasse geht es um Licht, Aufenthalt und den Anschluss an den Wohnbereich. Prüfen Sie, wie das Dach Schatten wirft und ob zusätzlicher Sonnenschutz oder seitliche Elemente gewünscht sind. Vorhandene Türen und Fenster sollten im Gesamtbild berücksichtigt werden.",
          "Beim Carport stehen Fahrzeug, Einfahrt und Bewegungsraum im Vordergrund. Nicht nur die Fahrzeuggröße zählt: Türen müssen sich öffnen lassen und der Zugang zu Haus oder Garten soll funktionieren. Denken Sie auch an Fahrräder oder zusätzlichen Stauraum, ohne die Durchfahrt unnötig einzuengen.",
        ],
      },
      {
        id: "masse",
        title: "Was die Abmessungen aus dem Flyer bedeuten",
        paragraphs: [
          "Die genannten 3,0 × 3,0 m beziehungsweise 3,3 × 5,0 m beschreiben zwei unterschiedliche Angebotsbeispiele. Lassen Sie erläutern, ob damit Außenmaße, Dachfläche oder nutzbarer Innenraum gemeint sind. Stützen und Dachüberstände können die tatsächlich verfügbare Fläche beeinflussen.",
          "Für andere Breiten, Tiefen oder Höhen ist eine neue Kalkulation erforderlich. Vergleichen Sie außerdem Dachmaterial, Tragkonstruktion und Ausstattung. Ein Werbemotiv illustriert eine Gestaltung; daraus folgt nicht, dass die gezeigte Anlage genau dem enthaltenen Paket entspricht.",
        ],
      },
      {
        id: "baugrund",
        title: "Fundamente, Entwässerung und Befestigung früh klären",
        paragraphs: [
          "Ob ein Dach an das Gebäude angeschlossen oder frei gestellt wird, beeinflusst die Planung. Prüfen Sie Untergrund, mögliche Stützenpositionen und die Führung des Regenwassers. Bei einem Hausanschluss müssen Befestigung und bestehende Fassade zur Konstruktion passen.",
          "Örtliche Vorgaben und die Frage nach einer Genehmigung sind für die konkrete Anlage vorab zu klären. Aus dem Einstiegspreis lassen sich keine Fundamentkosten oder zulässigen Wind- und Schneelasten ableiten. Die notwendigen Nachweise und die bauliche Eignung müssen für das gewählte System geprüft werden.",
        ],
      },
      {
        id: "angebot",
        title: "So vergleichen Sie das vollständige Angebot",
        paragraphs: [
          "Ein nachvollziehbares Angebot trennt Material und Ausstattung von Montage und Vorarbeiten. Fragen Sie nach Rückbau, Fundamenten, Anschlüssen und dem Umgang mit vorhandenem Pflaster. Klären Sie auch, wer welche bauseitigen Leistungen übernimmt und ob ein Stromanschluss überhaupt benötigt wird.",
          "Für die Beratung am Standort Merseburg-Meuschau helfen eine Grundstücksskizze, Fotos und Ihre ungefähren Wunschmaße. KLOTZ bespricht auch Vorhaben aus Halle (Saale), Leipzig und dem Saalekreis nach den örtlichen Voraussetzungen. Aus dieser Grundlage werden Ausführung, Umfang und Termin individuell abgestimmt.",
        ],
      },
    ],
    checklist: [
      "Nutzung, gewünschte Fläche und Durchgänge festlegen",
      "Skizze mit Haus, Zufahrt und möglichen Stützen vorbereiten",
      "Untergrund und bestehende Anschlüsse fotografieren",
      "Regenwasserführung und gegebenenfalls Beschattung besprechen",
      "Baurecht und vollständigen Montageumfang vor Auftrag klären",
    ],
    faq: [
      {
        question: "Warum kosten die beiden Flyerbeispiele jeweils ab 3.999 €?",
        answer:
          "Es handelt sich um zwei unterschiedlich aufgebaute Preisbeispiele mit verschiedenen Abmessungen. Der gleiche Einstiegspreis sagt nicht aus, dass Fläche, Ausstattung oder Montageaufwand gleich sind. Maßgeblich ist die Leistungsbeschreibung des konkreten Terrassendachs oder Carports.",
      },
      {
        question: "Sind Fundamente und Montage im Preis enthalten?",
        answer:
          "Die Vorlage schließt Montage ausdrücklich aus. Welche Fundamente, Anschlussarbeiten oder Vorleistungen bei Ihrem Grundstück benötigt werden, ist damit noch nicht geklärt. Lassen Sie diese Positionen im aktuellen Angebot zusammen mit Material und Ausstattung nachvollziehbar beschreiben.",
      },
      {
        question: "Kann aus dem Terrassendach später ein Sommergarten werden?",
        answer:
          "Je nach System können seitliche Glaselemente eine Option sein. Eine Erweiterung setzt eine geeignete Konstruktion und passende Anschlüsse voraus. Sprechen Sie den Wunsch bei der ersten Planung an und lassen Sie die Möglichkeiten für das konkrete System bestätigen.",
      },
      {
        question: "Brauche ich eine Baugenehmigung?",
        answer:
          "Das hängt von Grundstück, Größe, Lage und Ausführung sowie den geltenden Vorgaben ab. Der Produktname oder die Größe im Werbeflyer entscheidet diese Frage nicht allein. Klären Sie die baurechtliche Einordnung vor einer Beauftragung bei der zuständigen Stelle.",
      },
    ],
    relatedLinks: [
      {
        label: "Terrassenüberdachungen im Detail",
        href: "/terrasse-garten/terrassenueberdachungen",
      },
      {
        label: "Sommergarten oder Wintergarten?",
        href: "/wissen/sommergarten-oder-wintergarten",
      },
      {
        label: "Kosten eines Terrassendachs verstehen",
        href: "/wissen/was-kostet-eine-terrassenueberdachung",
      },
      {
        label: "Genehmigung früh klären",
        href: "/wissen/genehmigung-terrassenueberdachung",
      },
    ],
    sources: [
      {
        title: "KLOTZ: Terrassenüberdachungen",
        url: "https://www.klotz.mobi/portfolio/terrassenueberdachung",
      },
      {
        title: "KLOTZ: Carports",
        url: "https://www.klotz.mobi/portfolio/carports",
      },
    ],
  },
  {
    id: "angebote-sanierung-foerderung-2026",
    slug: "energetisch-sanieren-foerderung",
    kind: "funding",
    title: "Fenster sanieren und Förderung frühzeitig prüfen",
    shortTitle: "Sanierung & Förderung",
    eyebrow: "Bestand & Modernisierung",
    excerpt:
      "Was die 15 Prozent Grundförderung bedeuten können und welche Fragen vor einer Fenster- oder Türensanierung geklärt werden sollten.",
    lead: "Eine Förderung beginnt mit der passenden Maßnahme und einer sauberen Vorbereitung. Ordnen Sie Produktwahl, Gebäude und Antrag gemeinsam ein, bevor Sie aus einem Werbehinweis eine finanzielle Erwartung ableiten.",
    answer:
      "Für förderfähige Einzelmaßnahmen an der Gebäudehülle nennen die offiziellen BEG-Informationen eine Grundförderung von 15 Prozent. Daraus folgt keine pauschale Zusage für jedes Fenster oder jede Haustür. Förderfähigkeit, technische Anforderungen, Antrag und gegebenenfalls weitere Bedingungen müssen mit einer zugelassenen Energieeffizienz-Expertin oder einem Experten anhand des konkreten Vorhabens geprüft werden.",
    metaTitle: "Fenster-Förderung und Sanierung in Merseburg planen",
    metaDescription:
      "Fenster und Außentüren modernisieren: KLOTZ erklärt die Einordnung der möglichen BEG-Grundförderung, Vorbereitung und Grenzen vor einer Projektanfrage.",
    priceSummary: "15 % Grundförderung möglich · Voraussetzungen prüfen",
    inquiryTopic: "Fenster & Türen",
    sections: [
      {
        id: "einordnung",
        title: "Förderhinweis und Produktangebot sind zwei verschiedene Dinge",
        paragraphs: [
          "Ein staatlicher Zuschuss ist keine automatische Ermäßigung des Verkäufers. Das Angebot des Fachbetriebs beschreibt Bauteile und Arbeiten; die Förderung hängt von einem eigenen Verfahren und den förderfähigen Ausgaben ab. Rechnen Sie einen möglichen Zuschuss deshalb nicht ungeprüft vom gesamten Auftragswert ab.",
          "Die Abbildung mit dem Hausmodell veranschaulicht das Thema Sanierung. Sie beschreibt kein konkretes Gebäude, keine garantierte Einsparung und keine bewilligte Maßnahme. Auch die Preisbeispiele auf unseren anderen Angebotsseiten enthalten keine zugesagte Förderung.",
        ],
      },
      {
        id: "zustand",
        title: "Zuerst die sinnvolle Maßnahme am Gebäude klären",
        paragraphs: [
          "Bei alten Fenstern oder Außentüren steht zunächst der Bestand im Mittelpunkt: Welche Bauteile sind beschädigt, was funktioniert noch und welche Anforderungen sollen künftig erfüllt werden? Ein Problem am Beschlag ist eine andere Aufgabe als eine energetisch geplante Erneuerung mehrerer Fenster.",
          "Bei einem Austausch gehören Anschlüsse, Laibungen und Lüftung zum Gespräch. Die Auswahl eines Produktes allein beantwortet noch nicht, wie es sich in das bestehende Gebäude einfügt. KLOTZ bespricht die Bauelemente und die Einbausituation; die energetische und förderrechtliche Bewertung ist mit der dafür qualifizierten Stelle abzustimmen.",
        ],
      },
      {
        id: "foerderantrag",
        title: "Förderfähigkeit vor einer verbindlichen Beauftragung prüfen",
        paragraphs: [
          "Für Einzelmaßnahmen an der Gebäudehülle ist nach den offiziellen Informationen eine Energieeffizienz-Expertin oder ein Experte einzubeziehen. Lassen Sie dort das aktuell geltende Verfahren, die technischen Anforderungen und den richtigen Zeitpunkt für Antrag und Vertrag prüfen. Bedingungen können sich ändern.",
          "Bringen Sie vorhandene Unterlagen und ein zunächst klar abgegrenztes Vorhaben mit. Hilfreich sind die geplanten Bauteile, Fotos und die Beschreibung weiterer Sanierungsarbeiten. Die zuständigen Stellen beziehungsweise die Energieberatung klären, welche Nachweise und Vertragsbedingungen erforderlich sind. Diese Seite ersetzt diese Prüfung nicht.",
        ],
      },
      {
        id: "koordination",
        title: "Technisches Angebot und Förderprüfung aufeinander abstimmen",
        paragraphs: [
          "Halten Sie fest, welche Leistungen im Angebot stehen und welche Anforderungen für die Förderprüfung nachgewiesen werden sollen. Produktunterlagen, genaue Maße und ein abgegrenzter Montageumfang erleichtern die Abstimmung zwischen Auftraggebenden, Fachbetrieb und Energieberatung. Offene Punkte sollten vor der Entscheidung schriftlich geklärt sein.",
          "Der erste Kontakt mit KLOTZ am Standort Merseburg-Meuschau kann helfen, das geplante Fenster- oder Türenprojekt zu strukturieren. Auch für Vorhaben aus Halle (Saale), Leipzig und dem Saalekreis sind Projektort, Bestand und Umfang ein guter Einstieg. Es wird hier weder eine Förderbewilligung noch eine bestimmte Ersparnis versprochen.",
        ],
      },
    ],
    checklist: [
      "Probleme am Bestand und das Sanierungsziel beschreiben",
      "Fotos, ungefähre Maße und vorhandene Unterlagen sammeln",
      "Geeignete Energieeffizienz-Expertin oder Experten einbeziehen",
      "Aktuelle Bedingungen und Reihenfolge von Antrag und Vertrag prüfen",
      "Produktanforderungen und Montageumfang schriftlich abstimmen",
    ],
    faq: [
      {
        question: "Sind die 15 Prozent für mein Vorhaben garantiert?",
        answer:
          "Nein. Die Grundförderung ist an förderfähige Maßnahmen und die jeweils geltenden Voraussetzungen gebunden. Ob Ihr Vorhaben darunterfällt und auf welche Ausgaben sich ein Zuschuss beziehen kann, muss individuell geprüft werden. Diese Seite enthält keine Förderzusage.",
      },
      {
        question: "Ersetzt KLOTZ die unabhängige Energieberatung?",
        answer:
          "Diese Seite verspricht keine solche Leistung oder Akkreditierung. KLOTZ ist für das Gespräch über Bauelemente und Einbausituation ansprechbar. Für die erforderliche energetische Beurteilung und das Förderverfahren müssen die geeigneten, für das Vorhaben zugelassenen Fachleute eingebunden werden.",
      },
      {
        question: "Gilt Förderung pauschal auch für Rollläden und Garagentore?",
        answer:
          "Eine pauschale Aussage ist nicht möglich. Maßnahme, Gebäude und technische Voraussetzungen müssen zum konkreten Programm passen. Aus einem gemeinsamen Werbeflyer folgt nicht, dass jedes dort gezeigte Produkt förderfähig ist. Lassen Sie den vorgesehenen Leistungsumfang einzeln einordnen.",
      },
      {
        question:
          "Welche Unterlagen sollte ich für den ersten Kontakt bereithalten?",
        answer:
          "Nennen Sie den Projektort, die geplanten Bauteile und die erkennbaren Probleme. Fotos, ungefähre Maße und vorhandene Unterlagen zum Gebäude helfen bei der Orientierung. Welche Nachweise für einen Antrag benötigt werden, klären Sie anschließend anhand des aktuellen Verfahrens mit der zuständigen Fachberatung.",
      },
    ],
    relatedLinks: [
      {
        label: "Fenster- und Türen-Angebote",
        href: "/angebote/fenster-tueren",
      },
      {
        label: "Fenster im Bestand prüfen",
        href: "/fenster-tueren/fenster",
      },
      {
        label: "Fenster reparieren oder austauschen?",
        href: "/wissen/fenster-reparieren-oder-austauschen",
      },
      {
        label: "Persönlichen Kontakt aufnehmen",
        href: "/kontakt",
      },
    ],
    sources: [
      {
        title: "BMWE: Antworten zur Bundesförderung für effiziente Gebäude",
        url: "https://www.energiewechsel.de/KAENEF/Redaktion/DE/FAQ/FAQ-Uebersicht/BEG/faq-bundesfoerderung-fuer-effiziente-gebaeude.html",
      },
      {
        title: "BAFA: Förderübersicht BEG Einzelmaßnahmen",
        url: "https://www.bafa.de/SharedDocs/Downloads/DE/Energie/beg_em_foerderuebersicht.pdf?__blob=publicationFile&v=10",
      },
      {
        title: "BAFA: Allgemeine Antragstellung",
        url: "https://www.bafa.de/SharedDocs/Downloads/DE/Energie/beg_merkblatt_allgemein_antragstellung.pdf?__blob=publicationFile&v=4",
      },
    ],
  },
];

export const offerPages: OfferPageContent[] = z.array(offerPageSchema).parse(
  definitions.map((definition) => {
    const asset = campaignAssets.assets.find(
      (item) => item.id === definition.id,
    );
    if (!asset) throw new Error(`Missing campaign asset: ${definition.id}`);
    const expiry =
      "validUntilFromSource" in asset ? asset.validUntilFromSource : undefined;
    return {
      ...definition,
      href: `/angebote/${definition.slug}`,
      status: "draft",
      updatedAt: "2026-11-03",
      sourcePriceDate:
        definition.kind === "funding"
          ? "Förderinformationen geprüft: 03.11.2026"
          : "Aktionsflyer Februar 2026",
      validUntil: expiry,
      publication: {
        contentApproved: false,
        commercialApproved: false,
        rightsApproved: false,
      },
      image: {
        src: asset.src,
        alt: asset.alt,
        width: asset.width,
        height: asset.height,
        caption:
          "Gestaltungsbeispiel auf Basis der KLOTZ-Materialien. Abbildungen dienen der Veranschaulichung; die Ausführung wird individuell abgestimmt.",
      },
      products: asset.offers.map((product) => ({
        title: product.name,
        detail: [
          "dimensions" in product ? product.dimensions : "",
          "details" in product ? product.details : "",
        ]
          .filter(Boolean)
          .join(" · "),
        fromPriceEUR: product.fromPriceEUR,
        unit: product.unit,
      })),
      sources: [
        {
          title: "KLOTZ: Angebotsvorlagen und Aktionsflyer",
          url: campaignAssets.sourcePage,
        },
        ...definition.sources,
      ],
    };
  }),
);
