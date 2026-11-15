import type { ServicePageContent } from "@/domain/content/service-page";
import { fenceMedia } from "./fence-media";
import { serviceImage } from "./service-images";

const base = "https://www.klotz.mobi";
const processGuide = "vom-aufmass-bis-zur-abnahme";

export const fenceServicePages: ServicePageContent[] = [
  {
    slug: "zaunanlagen",
    title: "Zaunanlagen",
    metaTitle: "Zaun in Merseburg: Auswahl, Planung & Montage",
    metaDescription:
      "Zäune passend zu Haus und Grundstück: Doppelstabmatten, Aluminium und Stahl. Mit KLOTZ in Merseburg Verlauf, Gestaltung, Tore und Montage zusammen planen.",
    hero: {
      title: "Ein klarer Rahmen.",
      accent: "Für Ihr Zuhause.",
      lead: "Ein guter Zaun passt zur Fassade, lässt den Garten wirken und ordnet die Zugänge. Mit KLOTZ entwickeln Sie einen Grundstücksabschluss, der sich im Alltag bewährt – von der offenen Metallgestaltung bis zum abgestimmten Zaun mit Tor.",
      cta: "Meinen Zaun planen",
    },
    media: fenceMedia.zaunanlagen,
    benefits: [
      {
        title: "Ein stimmiges Gesamtbild",
        text: "Felder, Pfosten, Farbe und Tor werden gemeinsam mit Haus und Garten betrachtet.",
      },
      {
        title: "Offenheit nach Wunsch",
        text: "Ein klarer Abschluss kann den Blick erhalten oder gezielt durch Sichtschutzelemente ergänzt werden.",
      },
      {
        title: "Ein Verlauf, der passt",
        text: "Gelände, Zugänge und Befestigung fließen früh in die Planung der Anlage ein.",
      },
    ],
    story: {
      title: "Wie soll sich Ihr Grundstück zur Umgebung öffnen?",
      paragraphs: [
        "Am Vorgarten darf ein Zaun leicht wirken, seitlich am Grundstück vielleicht deutlicher abgrenzen. Die passende Lösung beginnt bei diesen Blickrichtungen und bei der täglichen Nutzung: Wo kommen Gäste an, wo gehen Sie mit dem Fahrrad hinaus und welche Bereiche sollen zusammengehören? So entsteht ein Verlauf mit nachvollziehbaren Zugängen.",
        "KLOTZ zeigt im bisherigen Sortiment unter anderem Doppelstabmatten, Aluminium- und Stahlzäune sowie klassische Metallgestaltungen. Diese Auswahl wird für Ihr Grundstück eingeordnet. Ein modernes Wohnhaus kann eine ruhige waagerechte Linie aufnehmen; in einem anderen Umfeld passen offene senkrechte Stäbe oder eine traditionellere Form.",
        "Auch ein längerer Grundstücksabschluss muss nicht überall gleich aussehen. Eine offene Straßenseite und ein geschützter Sitzplatz können als zusammengehörige Anlage geplant werden. Wichtig sind wiederkehrende Farben und Proportionen – und ein Tor, das bei der Gestaltung nicht erst am Ende hinzukommt.",
      ],
    },
    variants: [
      {
        title: "Doppelstabmatten",
        description:
          "Eine geradlinige, offene Feldstruktur für den klaren Grundstücksabschluss. Farbe, Höhe und die passenden Zugänge werden gemeinsam gewählt. Zusätzlicher Sichtschutz wird als eigene Anforderung an die Anlage betrachtet.",
        suitable:
          "Wenn eine übersichtliche Einzäunung mit klarer Linienführung gewünscht ist.",
      },
      {
        title: "Aluminiumzäune",
        description:
          "Waagerechte oder senkrechte Gestaltungen können die Architektur des Hauses aufnehmen. Abstände, Feldaufteilung und Oberfläche prägen die Wirkung. Das passende Tor lässt sich in derselben gestalterischen Richtung mitdenken.",
        suitable:
          "Für einen bewusst gestalteten Übergang zwischen Haus, Garten und Straße.",
      },
      {
        title: "Stahl & klassische Formen",
        description:
          "Von schlichten Stabfeldern bis zu dekorativen Details gibt es verschiedene Richtungen. Wir besprechen, wie offen die Anlage wirken soll und welche Ausführung zu Sockel, Pfeilern und bestehendem Umfeld passt.",
        suitable:
          "Für geradlinige Metallanlagen ebenso wie für einen klassisch geprägten Eingang.",
      },
    ],
    detail: {
      title: "Ein Zaun folgt dem Gelände. Und Ihrem Alltag.",
      image: serviceImage(
        "/images/boundary-fence-detail.webp",
        "Offener Metallzaun und passendes Tor vor einem hellen Wohnhaus mit Garten",
      ),
      caption:
        "Zaun und Zugang als gemeinsame Gestaltung · KLOTZ-Produktgalerie",
      paragraphs: [
        "Gefälle, vorhandene Mauern und unterschiedliche Höhen verändern die Aufteilung der Zaunfelder. Beim Aufmaß werden solche Übergänge ebenso betrachtet wie Ecken und der Platz für Pfosten. Eine saubere Planung zeigt früh, wo Standardfelder passen und wo eine abgestimmte Lösung gebraucht wird.",
        "Vor der Befestigung sind der Untergrund und vorhandene Leitungen wichtig. Zeigen Sie bekannte Leitungspläne und sagen Sie, welche Sockel, Mauern oder Pflasterflächen erhalten bleiben sollen. Damit lässt sich der Umfang von Fundamenten und vereinbarten Nebenarbeiten genauer beschreiben.",
        "Die Lage der Grundstücksgrenze und die am Ort geltenden Vorgaben werden vor der Ausführung geklärt. Gestalterische Wünsche und eine passende technische Lösung gehören zusammen. Im Angebot werden der besprochene Verlauf, die ausgewählten Felder, Zugänge und Montagearbeiten nachvollziehbar zugeordnet.",
      ],
    },
    planning: [
      {
        title: "Verlauf und Zugänge zeigen",
        text: "Eine einfache Skizze, Fotos und die ungefähre Länge helfen beim Einstieg. Markieren Sie Einfahrt, Gartentür und Bereiche mit besonderem Sichtschutzwunsch.",
      },
      {
        title: "Gestaltung auswählen",
        text: "Material, Offenheit, Farbe und Feldaufteilung werden mit Fassade und Garten abgestimmt. Ein gewünschtes Tor wird direkt einbezogen.",
      },
      {
        title: "Gelände aufnehmen",
        text: "Beim Aufmaß zählen Gefälle, Ecken, Mauern, Untergrund und bekannte Leitungen. Die geklärte Grundstücksgrenze bildet den Ausgangspunkt für den Verlauf.",
      },
      {
        title: "Umfang vereinbaren",
        text: "Zaunfelder, Pfosten, Befestigung und vereinbarte Nebenarbeiten werden beschrieben. So bleibt die Ausführung auch bei mehreren Abschnitten übersichtlich.",
      },
    ],
    costs: {
      lead: "Für einen aussagekräftigen Zaunpreis zählt mehr als die Länge. Ein Angebot berücksichtigt Material, Feldaufteilung, Gelände und die vereinbarte Montage. KLOTZ führt diese Punkte auf Grundlage Ihrer Auswahl und des Aufmaßes zusammen.",
      factors: [
        "Länge, Höhe, Ecken und Aufteilung der Anlage",
        "Material, Oberfläche und gewählte Feldgestaltung",
        "Pfosten, Sockel und geeignete Befestigung",
        "Gefälle, Untergrund und Zugang für die Montage",
        "Türen, Tore, Ausbau und vereinbarte Nebenarbeiten",
      ],
    },
    faq: [
      {
        question: "Welcher Zaun passt zu meinem Grundstück?",
        answer:
          "Beginnen Sie bei der gewünschten Wirkung: offen zur Straße, klar abgegrenzt oder mit einzelnen geschützten Bereichen. Danach werden Material, Farbe und Feldgestaltung zusammen mit dem Haus betrachtet. Fotos und eine Skizze machen das Gespräch konkreter als die Auswahl eines einzelnen Katalogbilds.",
      },
      {
        question: "Lässt sich ein Zaun mit dem passenden Tor planen?",
        answer:
          "Ja, der Zugang sollte von Anfang an dazugehören. Durchgang, Öffnungsart und gewünschte Bedienung beeinflussen den Verlauf. Gestaltung, Pfosten und Anschlüsse können dadurch zusammen abgestimmt werden, statt das Tor erst in eine fertige Zaunplanung einzupassen.",
      },
      {
        question: "Wie wird ein Zaun bei Gefälle aufgeteilt?",
        answer:
          "Das hängt vom Verlauf und vom ausgewählten System ab. Höhenunterschiede werden beim Aufmaß aufgenommen und bei der Feldaufteilung berücksichtigt. Zeigen Sie deshalb nicht nur die Straßenseite, sondern auch seitliche Abschnitte und Übergänge zu vorhandenen Mauern oder Wegen.",
      },
      {
        question: "Kann der bestehende Sockel erhalten bleiben?",
        answer:
          "Das wird anhand von Zustand, Aufbau und der geplanten Befestigung geprüft. Ein vorhandener Sockel ist nicht automatisch für jede neue Anlage geeignet. Sprechen Sie den Erhalt im ersten Gespräch an und zeigen Sie Fotos, damit dieser Wunsch in die weitere Aufnahme eingeht.",
      },
      {
        question: "Was braucht KLOTZ für ein erstes Zaunangebot?",
        answer:
          "Hilfreich sind Projektort, ungefährer Verlauf und Länge, Fotos sowie Ihre Wünsche an Höhe, Offenheit und Zugänge. Nennen Sie vorhandene Anlagen und geplante Arbeiten im Außenbereich. Das genaue Aufmaß und die konkrete Ausführung bilden anschließend die Grundlage für Ihr Angebot.",
      },
    ],
    related: ["sichtschutz", "hoftore", "schiebetore"],
    guideSlug: processGuide,
    offerSlug: "zaeune-tore",
    requestMessage:
      "Ich möchte eine Zaunanlage planen. Bitte beraten Sie mich zu Gestaltung, Grundstücksverlauf, passenden Zugängen und Montage.",
    sourceRefs: [
      `${base}/portfolio/zaeune`,
      `${base}/produkte/doppelstabmatten`,
      `${base}/produkte/aluminiumz%C3%A4une`,
      `${base}/portfolio/hoftore`,
    ],
    status: "draft",
  },
  {
    slug: "sichtschutz",
    title: "Sichtschutz",
    metaTitle: "Sichtschutz in Merseburg: Lösungen für Ihren Garten",
    metaDescription:
      "Mehr Privatsphäre auf Terrasse und Grundstück: Mit KLOTZ in Merseburg Material, Blickrichtungen, Gestaltung und Befestigung Ihres Sichtschutzes abstimmen.",
    hero: {
      title: "Ihr Garten.",
      accent: "Ihr guter Rückzugsort.",
      lead: "In Ruhe frühstücken, auf der Terrasse entspannen und den Garten als eigenen Raum erleben. Ein passender Sichtschutz schützt gezielt vor Einblicken und bleibt Teil der Gestaltung. KLOTZ hilft Ihnen, die richtige Balance zu finden.",
      cta: "Meinen Sichtschutz besprechen",
    },
    media: fenceMedia.sichtschutz,
    benefits: [
      {
        title: "Rückzug am richtigen Ort",
        text: "Die tatsächlichen Blickrichtungen bestimmen, welche Abschnitte geschützt werden sollen.",
      },
      {
        title: "Gestaltung mit Leichtigkeit",
        text: "Geschlossene Flächen, offene Akzente und Bepflanzung lassen sich bewusst aufeinander abstimmen.",
      },
      {
        title: "Vom Boden aus gedacht",
        text: "Pfosten, Untergrund und die gewählte Füllung werden als zusammengehörige Anlage geplant.",
      },
    ],
    story: {
      title: "Nicht jeder Blick braucht eine geschlossene Grenze.",
      paragraphs: [
        "Ein Sitzplatz verlangt oft nach mehr Privatsphäre als der übrige Garten. Wenn Sie die Bereiche gezielt auswählen, kann die Umgebung trotzdem offen und freundlich bleiben. Im Gespräch schauen wir auf den Platz, an dem Sie sitzen, die Sicht von benachbarten Wegen und den gewünschten Blick ins Grüne.",
        "KLOTZ zeigt im bisherigen Sortiment Sichtschutz aus unterschiedlichen Materialien, darunter Holz, Verbundwerkstoffe, Kunststoff, Glas und Aluminium. Daraus entstehen verschiedene Atmosphären: eine natürliche Oberfläche, eine ruhige Fläche oder ein bewusst gesetzter transparenter Abschnitt. Die Auswahl richtet sich nach Gestaltung und Nutzung.",
        "Farbe, Profilrichtung und die Übergänge zu Haus oder Zaun prägen das Gesamtbild. Auch Pflanzen können Teil der Komposition sein. So wird Sichtschutz zu einem gestalteten Hintergrund für Ihren Garten, statt lediglich eine möglichst große geschlossene Fläche an die Grenze zu stellen.",
      ],
    },
    variants: [
      {
        title: "Ruhige, geschlossene Flächen",
        description:
          "Durchgängige Felder geben dem Sitzplatz einen klaren Rahmen. Oberfläche, Farbe und waagerechte oder senkrechte Linien werden auf Terrasse und Haus abgestimmt. Die gewünschte Höhe wird aus der konkreten Blicksituation abgeleitet.",
        suitable:
          "Für Bereiche, in denen Sie Einblicke gezielt reduzieren möchten.",
      },
      {
        title: "Natürliche Materialwirkung",
        description:
          "Holz und entsprechende Dekorwelten können den Garten warm und wohnlich begleiten. Pflege, Veränderung der Oberfläche und das Zusammenspiel mit Boden und Bepflanzung gehören mit in die Auswahl.",
        suitable:
          "Wenn der Rückzugsort bewusst mit dem Grün und den Materialien des Gartens verbunden werden soll.",
      },
      {
        title: "Abwechslung mit offenen Akzenten",
        description:
          "Unterschiedliche Feldhöhen, dekorative Einsätze oder passend gewählte transparente Abschnitte können die Gestaltung auflockern. Dabei wird geprüft, an welchen Stellen Offenheit erwünscht ist und wo der Schutz gebraucht wird.",
        suitable:
          "Für einen gegliederten Gartenabschluss mit klaren Schwerpunkten.",
      },
    ],
    detail: {
      title: "Eine schöne Fläche braucht die passende Grundlage.",
      image: serviceImage(
        "/images/boundary-privacy-hero.webp",
        "Grauer Sichtschutzzaun neben einem bepflanzten Gartenstreifen",
      ),
      caption:
        "Profil, Pfosten und Bepflanzung als Einheit · KLOTZ-Sichtschutzgalerie",
      paragraphs: [
        "Ein Sichtschutz unterscheidet sich von einem offenen Zaun durch seine geschlossene Fläche. Deshalb müssen Pfosten, Befestigung und Standort zusammenpassen. Ein bestehender Zaun wird vor einer Ergänzung geprüft; das Einsetzen einer dichten Füllung ist keine reine Dekorentscheidung.",
        "Am Rand einer Terrasse zählen auch die Anschlüsse an Pflaster, Mauer oder Beet. Wo verlaufen Leitungen, welche Flächen sollen erhalten bleiben und wie wird die Anlage später gepflegt? Diese Fragen machen die Einbausituation verständlich und helfen, den Arbeitsumfang zu bestimmen.",
        "Vor der Ausführung werden Grenzverlauf und örtliche Vorgaben geklärt. Für die erste Beratung genügt Ihr Wunschbild mit Fotos aus den relevanten Blickrichtungen. Daraus lässt sich eine Lösung entwickeln, die Privatsphäre bietet und die Proportionen des Gartens respektiert.",
      ],
    },
    planning: [
      {
        title: "Blickrichtungen festhalten",
        text: "Fotografieren Sie vom Sitzplatz und von den Seiten, aus denen Einblicke stören. Nennen Sie, welche Ausblicke Sie erhalten möchten.",
      },
      {
        title: "Material und Wirkung vergleichen",
        text: "Wir ordnen Farben, Oberflächen und Offenheit nach Ihrem Garten ein. Pflegewunsch und die vorhandenen Materialien werden mitbesprochen.",
      },
      {
        title: "Standort und Befestigung prüfen",
        text: "Höhen, Gelände, Pfosten und Untergrund gehören zusammen. Vorhandene Zäune oder Mauern werden bei einer gewünschten Ergänzung aufgenommen.",
      },
      {
        title: "Übergänge abstimmen",
        text: "Die Anschlüsse an Terrasse, Zaun und Garten werden geplant. Das Angebot beschreibt die gewählten Felder und die vereinbarten Montagearbeiten.",
      },
    ],
    costs: {
      lead: "Der Preis eines Sichtschutzes hängt von Fläche, Material und Befestigung ab. Eine gezielt geschützte Sitzecke ist ein anderes Vorhaben als eine geschlossene Grundstücksseite. Im Angebot wird die konkrete Aufteilung zusammen mit den Arbeiten am Standort beschrieben.",
      factors: [
        "Länge, Höhe und Aufteilung der geschützten Bereiche",
        "Material, Profile und dekorative oder transparente Einsätze",
        "Pfosten, Fundamente und geeignete Anschlüsse",
        "Gelände, Zugänglichkeit und vorhandene Bauteile",
        "Ausbau und vereinbarte Anpassungen an Garten oder Terrasse",
      ],
    },
    faq: [
      {
        question: "Wie finde ich die passende Höhe für meinen Sichtschutz?",
        answer:
          "Ausgangspunkt ist die Blicksituation am tatsächlichen Sitzplatz. Einblicke von einem Weg und aus einem höher gelegenen Bereich sind unterschiedlich zu betrachten. Fotos und eine Skizze helfen bei der Beratung; örtliche Vorgaben und die konkrete Befestigung werden vor der Ausführung mitgeklärt.",
      },
      {
        question: "Welches Material wirkt im Garten am ruhigsten?",
        answer:
          "Das hängt von den vorhandenen Farben und Oberflächen ab. Eine zurückhaltende geschlossene Fläche kann Pflanzen wirken lassen, Holz eine natürliche Atmosphäre aufnehmen und ein offener Akzent die Anlage auflockern. Vergleichen Sie das Material deshalb zusammen mit Terrasse, Fassade und Bepflanzung.",
      },
      {
        question:
          "Kann ich meinen vorhandenen Zaun nachträglich blickdicht machen?",
        answer:
          "Eine Ergänzung muss zum bestehenden System und seiner Befestigung passen. Geschlossene Flächen verändern die Beanspruchung der Anlage. Zeigen Sie Zaunfelder, Pfosten und Anschlüsse, damit die Eignung geprüft und eine passende Lösung besprochen werden kann.",
      },
      {
        question: "Muss das ganze Grundstück geschlossen werden?",
        answer:
          "Oft lohnt sich eine gezielte Lösung für Terrasse oder Lieblingsplatz. Offene Abschnitte erhalten den Bezug zur Umgebung, während geschlossene Felder dort stehen, wo Privatsphäre gebraucht wird. Die Aufteilung richtet sich nach Blickrichtungen, Nutzung und dem gewünschten Gesamtbild.",
      },
      {
        question: "Welche Angaben helfen bei einer Sichtschutzanfrage?",
        answer:
          "Nennen Sie den Projektort, die ungefähre Länge und Ihren gewünschten Schutzbereich. Fotos vom Sitzplatz und der Umgebung sind besonders hilfreich. Ergänzen Sie Materialwünsche und vorhandene Mauern oder Zäune; die konkrete Höhe und Ausführung werden gemeinsam abgestimmt.",
      },
    ],
    related: ["zaunanlagen", "hoftore", "gelaender"],
    guideSlug: processGuide,
    offerSlug: "zaeune-tore",
    requestMessage:
      "Ich wünsche mir mehr Privatsphäre im Garten oder auf der Terrasse. Bitte beraten Sie mich zu Sichtschutz, Material, Aufteilung und Montage.",
    sourceRefs: [
      `${base}/produkte/sichtschutzz%C3%A4une`,
      `${base}/portfolio/zaeune`,
    ],
    status: "draft",
  },
  {
    slug: "hoftore",
    title: "Hoftore",
    metaTitle: "Hoftore in Merseburg: Eingang & Einfahrt planen",
    metaDescription:
      "Ein Hoftor passend zu Haus und Zaun: Mit KLOTZ in Merseburg Gestaltung, Flügel, Gehtür, Bedienung und den Einbau an Ihrer Einfahrt gemeinsam planen.",
    hero: {
      title: "Ein guter Empfang.",
      accent: "Schon an der Einfahrt.",
      lead: "Ein Tor gibt Ihrem Grundstück einen eigenen Eingang. Es soll zum Haus passen und jeden Tag angenehm zu nutzen sein. KLOTZ plant mit Ihnen Gestaltung, Öffnung und Zugänge als zusammenhängende Lösung.",
      cta: "Mein Hoftor planen",
    },
    media: fenceMedia.hoftore,
    benefits: [
      {
        title: "Ein Eingang mit Charakter",
        text: "Füllung, Farbe und Linien werden mit Zaun, Pfeilern und Haus abgestimmt.",
      },
      {
        title: "Platz zum Ankommen",
        text: "Fahrzeuge, Wege und der notwendige Öffnungsraum bestimmen die passende Aufteilung.",
      },
      {
        title: "Alltag mitgedacht",
        text: "Eine Gehtür und die gewünschte Bedienung machen die Nutzung schon in der Planung konkret.",
      },
    ],
    story: {
      title: "Wie kommen Sie zu Hause an?",
      paragraphs: [
        "Mit dem Auto einfahren, zu Fuß die Post holen oder das Fahrrad durch den Eingang schieben: Ein Hoftor muss mehr können als auf einem Foto gut aussehen. Deshalb schauen wir zunächst auf Ihre Wege und darauf, wer den Zugang nutzt. Daraus ergibt sich, welche Aufteilung im Alltag sinnvoll ist.",
        "Ein zweiflügeliges Tor kann den Eingang symmetrisch gestalten, eine passende Gehtür den täglichen Weg erleichtern. Wenn die Einfahrt wenig Schwenkraum bietet, wird eine Schiebelösung als Alternative betrachtet. Die Entscheidung folgt den Bewegungsflächen und der Situation vor Ort.",
        "KLOTZ zeigt Aluminium- und Stahlhoftore sowie klassische Metallgestaltungen. Offene Stäbe wirken anders als eine geschlossene Füllung oder ein dekorativer Einsatz. Die Auswahl wird zusammen mit dem Zaun gedacht, damit ein stimmiger Grundstücksabschluss entsteht.",
      ],
    },
    variants: [
      {
        title: "Offen & einladend",
        description:
          "Stäbe oder eine teiloffene Füllung erhalten den Blick auf Haus und Garten. Material, Abstände und obere Linienführung können einen schlichten oder klassischeren Charakter schaffen.",
        suitable:
          "Wenn das Tor abgrenzen und den Bezug zur Straße erhalten soll.",
      },
      {
        title: "Geschlossen & gestaltet",
        description:
          "Paneele und dekorative Flächen geben dem Eingang einen klaren Ausdruck und reduzieren Einblicke. Form und Farbe werden mit dem Haus abgestimmt; die vollständige Konstruktion folgt der gewählten Ausführung.",
        suitable:
          "Für einen bewussten gestalterischen Akzent und mehr Rückzug am Eingang.",
      },
      {
        title: "Mit eigenem Weg zu Fuß",
        description:
          "Eine separate Gehtür oder eine passende Aufteilung trennt den Fußweg von der Fahrzeugzufahrt. Das erleichtert die Planung von Alltagswegen, Klingel und weiteren gewünschten Funktionen.",
        suitable:
          "Wenn der Zugang häufig unabhängig von der großen Einfahrt genutzt wird.",
      },
    ],
    detail: {
      title: "Das Tor braucht Platz. Auch wenn es geöffnet ist.",
      image: serviceImage(
        "/images/boundary-gate-detail.webp",
        "Helles zweiflügeliges Hoftor mit dunklen geschwungenen Dekorelementen an einem modernen Haus",
      ),
      caption:
        "Füllung und Linienführung prägen den Eingang · KLOTZ-Aluhoftorgalerie",
      paragraphs: [
        "Beim Drehtor reicht der Blick auf die lichte Einfahrtsbreite nicht aus. Die Flügel brauchen ihren Bewegungsraum; geparkte Fahrzeuge, ein ansteigender Boden oder ein seitlicher Weg können die Lösung beeinflussen. Fotos von der Straße und aus dem Grundstück machen diese Situation verständlich.",
        "Pfeiler und Befestigung müssen zur geplanten Anlage passen. Soll ein vorhandener Torpfosten erhalten bleiben, wird seine Eignung geprüft. Dazu kommen die Übergänge zu Zaun und Boden sowie die Zugänglichkeit für Montage und spätere Pflege.",
        "Eine gewünschte Motorisierung gehört früh in das Gespräch. Mechanik, mögliche Antriebe, Versorgung und Schutzfunktionen werden zusammen betrachtet. Eine vorhandene Toranlage wird vor der Nachrüstung auf Eignung geprüft; eine elektrische Bedienung ist kein beliebiges Zubehör für jedes Tor.",
      ],
    },
    planning: [
      {
        title: "Nutzung beschreiben",
        text: "Welche Fahrzeuge und Personen nutzen den Zugang? Zeigen Sie Stellplätze, Fußweg und die gewünschten Öffnungen auf einer einfachen Skizze.",
      },
      {
        title: "Gestaltung zusammenstellen",
        text: "Material, Füllung, Farbe und eine mögliche Gehtür werden mit Zaun und Fassade abgestimmt. Die gewünschte Bedienung wird direkt angesprochen.",
      },
      {
        title: "Bewegungsraum aufnehmen",
        text: "Beim Aufmaß werden Breite, Gelände, Öffnungsraum und vorhandene Pfeiler betrachtet. Geplante Pflaster- oder Zaunarbeiten werden einbezogen.",
      },
      {
        title: "Ausführung vereinbaren",
        text: "Tor, Befestigung, Bedienung und vereinbarte Nebenarbeiten werden im Angebot beschrieben. Der Ablauf wird mit den Arbeiten an Ihrer Einfahrt abgestimmt.",
      },
    ],
    costs: {
      lead: "Ein Hoftor wird durch Maße, Füllung und Bedienung konkret. Hinzu kommen Befestigung und die Situation an der Einfahrt. Ein nachvollziehbares Angebot beschreibt das ganze Element sowie die vereinbarten Montage- und Anschlussarbeiten.",
      factors: [
        "Breite, Höhe und Aufteilung der Torflügel",
        "Material, Oberfläche und Gestaltung der Füllung",
        "Pfeiler, Pfosten, Fundamente und Anschlüsse",
        "Gehtür, Verriegelung und gewünschte Bedienung",
        "Ausbau, Montage und vereinbarte Arbeiten an der Einfahrt",
      ],
    },
    faq: [
      {
        question: "Drehtor oder Schiebetor – was passt an meine Einfahrt?",
        answer:
          "Ein Drehtor braucht Platz im Schwenkbereich, ein Schiebetor seitlichen Rücklauf. Gefälle, Stellplätze und Wege beeinflussen die Entscheidung zusätzlich. Zeigen Sie die Einfahrt deshalb von beiden Seiten; die passende Öffnungsart wird anhand des verfügbaren Raums besprochen.",
      },
      {
        question: "Kann eine Gehtür zum Hoftor passen?",
        answer:
          "Eine Gehtür lässt sich bei der Gesamtgestaltung mitdenken. Sie erleichtert den Zugang zu Fuß, ohne die Fahrzeugzufahrt zu nutzen. Farbe, Füllung und Höhe werden zusammen abgestimmt; die geeignete Anordnung hängt von Weg, Pfosten und verfügbarer Breite ab.",
      },
      {
        question: "Kann ich vorhandene Pfeiler weiter nutzen?",
        answer:
          "Das wird nach Zustand und Aufbau der Pfeiler sowie der geplanten Toranlage geprüft. Abmessungen allein reichen dafür nicht. Wenn der Erhalt wichtig ist, zeigen Sie Fotos und vorhandene Unterlagen, damit die Befestigung bei der weiteren Aufnahme berücksichtigt wird.",
      },
      {
        question: "Lässt sich das Hoftor später elektrisch bedienen?",
        answer:
          "Eine spätere Motorisierung sollte schon bei der Planung angesprochen werden. Torbauart, Zustand, Bewegungsraum und Versorgung müssen zusammenpassen. Ob eine Nachrüstung geeignet ist und welche Schutzfunktionen dazugehören, wird für die konkrete Anlage geprüft.",
      },
      {
        question: "Wie bereite ich eine Hoftoranfrage vor?",
        answer:
          "Hilfreich sind Projektort, ungefähre Einfahrtsbreite und Fotos von innen und außen. Beschreiben Sie Nutzung, gewünschte Füllung, Gehtür und Bedienung. Nennen Sie anstehende Pflasterarbeiten, damit Anschluss und Reihenfolge früh in die Planung eingehen.",
      },
    ],
    related: ["zaunanlagen", "schiebetore", "elektrische-toranlagen"],
    guideSlug: processGuide,
    offerSlug: "zaeune-tore",
    requestMessage:
      "Ich plane ein Hoftor. Bitte beraten Sie mich zu Gestaltung, Öffnungsraum, Gehtür und passender Bedienung mit Montage.",
    sourceRefs: [
      `${base}/portfolio/hoftore`,
      `${base}/produkte/aluhoftore`,
      `${base}/produkte/stahlhoftore`,
    ],
    status: "draft",
  },
  {
    slug: "schiebetore",
    title: "Schiebetore",
    metaTitle: "Schiebetore in Merseburg: Planung & Montage",
    metaDescription:
      "Seitlich öffnen, die Einfahrt klar gestalten: KLOTZ in Merseburg berät zu Schiebetoren, Rücklaufbereich, Fundament, Bedienung und passender Zaungestaltung.",
    hero: {
      title: "Raum zum Ankommen.",
      accent: "Seitlich geöffnet.",
      lead: "Ein Schiebetor bewegt sich entlang der Grundstücksgrenze und lässt die Einfahrt anders nutzen als ein Drehtor. Ob es zu Ihrem Grundstück passt, entscheidet vor allem der seitliche Platz. KLOTZ plant Tor, Laufweg und Gestaltung gemeinsam mit Ihnen.",
      cta: "Meine Schiebelösung planen",
    },
    media: fenceMedia.schiebetore,
    benefits: [
      {
        title: "Ein anderer Bewegungsraum",
        text: "Das Tor öffnet seitlich; die Planung richtet sich nach dem verfügbaren Rücklauf entlang des Grundstücks.",
      },
      {
        title: "Eine klare Einfahrt",
        text: "Tor, Zaun und Gehtür können als zusammengehöriger Eingang gestaltet werden.",
      },
      {
        title: "Konstruktion mit Überblick",
        text: "Öffnung, Laufbereich, Fundament und gewünschte Bedienung werden von Beginn an zusammen betrachtet.",
      },
    ],
    story: {
      title: "Der wichtigste Platz liegt neben der Öffnung.",
      paragraphs: [
        "Wenn ein schwenkender Torflügel mit Stellplatz oder Zufahrt kollidiert, lohnt sich der Blick auf eine Schiebelösung. Sie braucht ihren Bewegungsraum an anderer Stelle: neben der Durchfahrt. Dort muss das geöffnete Tor Platz finden, ohne Zugänge, Bepflanzung oder andere Funktionen zu behindern.",
        "Deshalb beginnt die Beratung mit einem Blick auf das gesamte Grundstück. Eine Skizze zeigt die geplante Öffnung und beide seitlichen Bereiche. Mauern, Gefälle, Wege und ein vorhandener Zaun machen deutlich, welche Anordnung überhaupt sinnvoll weitergeplant werden kann.",
        "KLOTZ beschreibt Schiebetor- und Zaunlösungen im bisherigen Portfolio. Für Ihr Vorhaben werden Gestaltung und Konstruktion konkret abgestimmt. Eine offene Füllung kann den Garten einbeziehen, eine geschlossenere Ausführung einen deutlicheren Eingang schaffen. Die Funktion bleibt Teil dieser gestalterischen Entscheidung.",
      ],
    },
    variants: [
      {
        title: "Offene Metallgestaltung",
        description:
          "Stäbe oder teiloffene Felder schaffen einen klaren Grundstücksabschluss mit Durchblick. Linien, Farbe und Übergänge zum Zaun werden aufeinander abgestimmt, damit das Tor als Teil der Anlage wirkt.",
        suitable:
          "Für einen Eingang, der Sichtbeziehungen bewusst erhalten soll.",
      },
      {
        title: "Ruhige, geschlossene Füllung",
        description:
          "Geschlossene Flächen können dem Eingang eine architektonische Wirkung geben. Die gewählte Füllung beeinflusst die gesamte Ausführung und wird zusammen mit Pfosten, Konstruktion und Standort besprochen.",
        suitable:
          "Für eine klare Gestaltung mit reduziertem Einblick auf die Zufahrt.",
      },
      {
        title: "Bedienung nach Nutzung",
        description:
          "Wie oft wird geöffnet, wer nutzt die Einfahrt und wie soll der Zugang zu Fuß funktionieren? Manuelle Nutzung und eine gewünschte Automatisierung werden anhand der konkreten Anlage eingeordnet.",
        suitable:
          "Wenn tägliche Abläufe und die spätere Bedienung von Anfang an passen sollen.",
      },
    ],
    detail: {
      title: "Laufbereich und Untergrund entscheiden mit.",
      image: serviceImage(
        "/images/boundary-sliding-detail.webp",
        "Seitliches Schiebetor mit waagerechten Metallprofilen und anschließender Zaunanlage",
      ),
      caption:
        "Torblatt und Zaun entlang der Zufahrt · KLOTZ-Stahlhoftorgalerie",
      paragraphs: [
        "Eine Schiebeanlage besteht nicht nur aus dem sichtbaren Torblatt. Laufbereich, Führung und Befestigung müssen zur Situation passen. Ob eine freitragende oder eine schienengeführte Ausführung infrage kommt, wird am Standort und am gewählten System geklärt; eine Variante passt nicht automatisch zu jeder Einfahrt.",
        "Im Bodenbereich werden bestehendes Pflaster, Fundamente, Entwässerung und bekannte Leitungen betrachtet. Wenn gleichzeitig die Zufahrt neu angelegt wird, lohnt sich die frühe Abstimmung. So können benötigte Bereiche und Arbeitsschritte zusammen geplant werden.",
        "Der spätere Betrieb soll übersichtlich bleiben. Dazu zählen ein gut erreichbarer Zugang zu den Komponenten und die mögliche Nutzung durch Personen unabhängig vom Torlauf. Bei einer elektrischen Bedienung kommen die dafür geeignete Steuerung und Schutzfunktionen hinzu; sie werden für die konkrete Anlage geplant.",
      ],
    },
    planning: [
      {
        title: "Öffnung und Seitenraum zeigen",
        text: "Zeichnen Sie Einfahrtsbreite und beide seitlichen Bereiche ein. Fotos sollten Mauern, Zaun, Stellplätze und Wege im Umfeld erfassen.",
      },
      {
        title: "Nutzung und Gestaltung klären",
        text: "Fahrzeuge, Fußwege, Füllung und gewünschte Bedienung geben die Richtung vor. Eine passende Gehtür wird bei Bedarf einbezogen.",
      },
      {
        title: "Konstruktion vor Ort prüfen",
        text: "Rücklauf, Gelände, Untergrund und Befestigung werden aufgenommen. Vorhandene oder geplante Pflasterflächen gehören in diese Abstimmung.",
      },
      {
        title: "Tor und Arbeiten abstimmen",
        text: "Ausführung, Montage und vereinbarte Vorarbeiten werden im Angebot beschrieben. Die Reihenfolge wird mit den Arbeiten an der Einfahrt abgestimmt.",
      },
    ],
    costs: {
      lead: "Ein Schiebetorpreis hängt von Öffnung, Torblatt und der geeigneten Konstruktion ab. Auch der Aufwand am Untergrund und die Bedienung zählen dazu. Ein Vergleich wird sinnvoll, wenn diese Bestandteile und die vereinbarten Arbeiten vollständig beschrieben sind.",
      factors: [
        "Durchfahrtsbreite, Höhe und notwendiger Torlauf",
        "Material, Füllung und Oberfläche",
        "Konstruktion, Führung und Fundament",
        "Bedienung, gewünschter Antrieb und weitere Komponenten",
        "Montagezugang und vereinbarte Anpassungen an der Zufahrt",
      ],
    },
    faq: [
      {
        question: "Wie viel seitlichen Platz braucht ein Schiebetor?",
        answer:
          "Das hängt von Öffnung und Konstruktion des konkreten Systems ab. Der notwendige Rücklauf lässt sich nicht allein aus der sichtbaren Einfahrtsbreite ableiten. Zeigen Sie deshalb beide Seiten der Zufahrt mit Mauern, Wegen und Bepflanzung, bevor eine Ausführung ausgewählt wird.",
      },
      {
        question: "Ist ein Schiebetor immer besser bei wenig Platz?",
        answer:
          "Es verlagert den benötigten Bewegungsraum an die Seite. Das kann bei einem knappen Schwenkbereich hilfreich sein, setzt aber einen geeigneten seitlichen Rücklauf voraus. Welche Öffnungsart passt, wird anhand Ihrer Einfahrt und der geplanten Nutzung verglichen.",
      },
      {
        question: "Freitragend oder mit Bodenschiene – wie wird entschieden?",
        answer:
          "Beide Konstruktionsrichtungen werden anhand von Standort und System betrachtet. Untergrund, Laufbereich und die geplante Nutzung beeinflussen die Auswahl. Die passende Lösung wird vor Ort geklärt und im Angebot beschrieben, statt allein nach der Außenansicht gewählt zu werden.",
      },
      {
        question:
          "Kann ein Schiebetor mit einem bestehenden Zaun kombiniert werden?",
        answer:
          "Das kann möglich sein, wenn Verlauf, Anschlüsse und der Rücklauf zusammenpassen. Gestaltung und Befestigung werden dabei geprüft. Fotos des Zauns und der gesamten Einfahrt helfen, den vorhandenen Aufbau aufzunehmen und passende nächste Schritte zu besprechen.",
      },
      {
        question: "Kann ich das Schiebetor elektrisch bedienen lassen?",
        answer:
          "Eine gewünschte Automatisierung wird zusammen mit der Mechanik geplant. Dafür zählen geeignete Komponenten, Versorgung, Bedienwege und Schutzfunktionen. Bei einem vorhandenen Tor wird zunächst geprüft, ob Zustand und Konstruktion für eine Nachrüstung geeignet sind.",
      },
    ],
    related: ["hoftore", "elektrische-toranlagen", "zaunanlagen"],
    guideSlug: processGuide,
    offerSlug: "zaeune-tore",
    requestMessage:
      "Ich interessiere mich für ein Schiebetor. Bitte prüfen Sie mit mir seitlichen Platz, Konstruktion, Gestaltung und passende Bedienung.",
    sourceRefs: [
      `${base}/portfolio/hoftore`,
      `${base}/portfolio/zaeune`,
      `${base}/produkte/stahlhoftore`,
      `${base}/produkte/aluminiumz%C3%A4une`,
    ],
    status: "draft",
  },
  {
    slug: "elektrische-toranlagen",
    title: "Elektrische Toranlagen",
    metaTitle: "Elektrische Tore in Merseburg: Planung & Nachrüstung",
    metaDescription:
      "Tore bequem bedienen: KLOTZ in Merseburg bespricht neue elektrische Toranlagen und geeignete Nachrüstung – mit Blick auf Mechanik, Antrieb, Bedienung und Service.",
    hero: {
      title: "Einfach ankommen.",
      accent: "Komfort am Tor.",
      lead: "Bei Regen im Auto bleiben oder die Einfahrt bequem öffnen: Eine elektrische Bedienung kann den Alltag erleichtern. KLOTZ betrachtet dafür Tor, Antrieb und Einbausituation als gemeinsame Anlage – beim Neubau und bei einer möglichen Nachrüstung.",
      cta: "Meine Torautomatik besprechen",
    },
    media: fenceMedia["elektrische-toranlagen"],
    benefits: [
      {
        title: "Bedienung nach Ihrem Alltag",
        text: "Wer öffnet, wie häufig und von wo? Diese Fragen geben der Auswahl von Bedienwegen eine klare Richtung.",
      },
      {
        title: "Mechanik und Antrieb zusammen",
        text: "Eine neue Anlage und die Nachrüstung eines vorhandenen Tors beginnen mit unterschiedlichen Voraussetzungen.",
      },
      {
        title: "Den Betrieb mitdenken",
        text: "Schutzfunktionen, Zugang bei Störungen und spätere Wartung gehören in die gemeinsame Planung.",
      },
    ],
    story: {
      title: "Gute Automatik beginnt vor dem ersten Knopfdruck.",
      paragraphs: [
        "Die bequemste Bedienung ist die, die zu Ihren tatsächlichen Wegen passt. Öffnen Sie nur für das eigene Auto oder nutzen mehrere Personen den Zugang? Brauchen Gäste einen anderen Weg, und soll eine Gehtür unabhängig bleiben? Solche Angaben helfen, den Bedarf verständlich zu beschreiben.",
        "Bei einem neuen Tor lässt sich die gewünschte elektrische Bedienung von Beginn an einplanen. Bei einer bestehenden Anlage wird zuerst geprüft, ob Mechanik, Zustand und Einbausituation geeignet sind. Ein schwergängiges oder beschädigtes Tor wird nicht durch das Hinzufügen eines Motors zu einer passenden Gesamtlösung.",
        "KLOTZ beschreibt im bisherigen Portfolio elektrische Einfahrtstore und Service an Toranlagen. Für Ihr Vorhaben werden die Möglichkeiten konkret eingeordnet. Eine Anbindung an weitere Haustechnik wird anhand der tatsächlich vorhandenen Systeme geprüft; sie wird nicht unabhängig von Hersteller und Ausstattung zugesagt.",
      ],
    },
    variants: [
      {
        title: "Neue Toranlage mit Antrieb",
        description:
          "Torbauart, Bewegungsraum und Bedienung werden zusammen ausgewählt. Die Planung kann benötigte Versorgung und Leitungswege früh mit den Arbeiten an Einfahrt und Zaun verbinden.",
        suitable: "Wenn ein neues Tor als vollständige Anlage entstehen soll.",
      },
      {
        title: "Vorhandenes Tor modernisieren",
        description:
          "Zustand, Aufbau und die geeigneten Komponenten werden am Bestand geprüft. Aus dieser Aufnahme ergibt sich, ob eine Nachrüstung sinnvoll weitergeplant werden kann und welche Arbeiten dazugehören.",
        suitable:
          "Wenn das vorhandene Tor erhalten und komfortabler bedient werden soll.",
      },
      {
        title: "Bedienung passend abstimmen",
        description:
          "Sender, ein geeigneter Taster oder weitere gewünschte Zugangsmöglichkeiten werden nach Nutzern und Alltag besprochen. Bestehende Steuerungen werden mit genauer Systembezeichnung aufgenommen.",
        suitable:
          "Für klar geregelte Zugänge statt einer unnötig komplizierten Bedienung.",
      },
    ],
    detail: {
      title: "Eine Anlage besteht aus mehr als dem Motor.",
      image: serviceImage(
        "/images/boundary-electric-detail.webp",
        "Seitlich geöffnetes Metalltor neben einer überdachten Fahrzeugzufahrt",
      ),
      caption:
        "Torbewegung und Einbausituation gemeinsam betrachten · KLOTZ-Torengalerie",
      paragraphs: [
        "Die konkrete Torbewegung und ihr Umfeld bestimmen, welche Schutzfunktionen und Komponenten gebraucht werden. Personenwege, mögliche Hindernisse und der Zugang zu den Bedienelementen gehören in diese Betrachtung. Die passende Lösung wird für die vollständige Anlage festgelegt.",
        "Stromversorgung und Leitungswege müssen rechtzeitig geklärt werden. Wenn Pflaster oder Garten ohnehin bearbeitet werden, kann die Reihenfolge darauf abgestimmt werden. Benennen Sie auch vorhandene Klingel- oder Zutrittssysteme, wenn diese in die Planung einbezogen werden sollen.",
        "Für den späteren Alltag werden Nutzung, eine vorgesehene manuelle Bedienmöglichkeit und der Zugang zu den Komponenten besprochen. Wartung und Instandsetzung bleiben Teil des Blicks auf die Anlage. Konkrete Prüf- und Serviceanforderungen werden für die gewählte Ausführung geklärt.",
      ],
    },
    planning: [
      {
        title: "Nutzer und Abläufe klären",
        text: "Nennen Sie Torbauart, tägliche Nutzung und die gewünschte Bedienung. Beschreiben Sie, wie Fahrzeuge, Gäste und Personen zu Fuß den Eingang nutzen.",
      },
      {
        title: "Bestand aufnehmen",
        text: "Fotos von Tor, Befestigung und vorhandener Technik helfen beim Einstieg. Typenschilder und bekannte Systembezeichnungen machen die weitere Prüfung gezielter.",
      },
      {
        title: "Gesamte Anlage abstimmen",
        text: "Mechanik, Antrieb, Versorgung, Bedienwege und Schutzfunktionen werden gemeinsam betrachtet. Vorhandene Haustechnik wird nur nach Prüfung einbezogen.",
      },
      {
        title: "Umfang und Betrieb besprechen",
        text: "Das Angebot beschreibt die gewählte Ausführung und vereinbarte Arbeiten. Fragen zur Bedienung und späteren Wartung werden vor der Übergabe geklärt.",
      },
    ],
    costs: {
      lead: "Für eine Torautomatik zählen Torzustand, geeigneter Antrieb und die vollständige Ausstattung. Eine vorhandene Versorgung kann einen anderen Umfang bedeuten als neue Leitungswege. KLOTZ bespricht diese Voraussetzungen, bevor die konkrete Ausführung angeboten wird.",
      factors: [
        "Torbauart, Abmessungen, Zustand und Nutzung",
        "Passender Antrieb und Steuerung",
        "Geeignete Schutz- und Bedienkomponenten",
        "Vorhandene Versorgung und notwendige Leitungswege",
        "Montage, Anpassungen und vereinbarter Serviceumfang",
      ],
    },
    faq: [
      {
        question: "Lässt sich jedes bestehende Tor motorisieren?",
        answer:
          "Das muss am vorhandenen Tor geprüft werden. Konstruktion, Zustand, Bewegung und Befestigung bestimmen, ob eine geeignete Nachrüstung infrage kommt. Zeigen Sie Fotos und vorhandene Unterlagen; die Entscheidung bezieht sich auf die ganze Anlage, nicht nur auf einen auswählbaren Motor.",
      },
      {
        question: "Kann ich mein Tor mit dem Smartphone öffnen?",
        answer:
          "Eine solche Bedienung hängt von der gewählten Steuerung und passenden Zusatzkomponenten ab. Nennen Sie bestehende Haustechnik mit Hersteller und System. Dann lässt sich die gewünschte Verbindung konkret prüfen, statt eine allgemeine Kompatibilität vorauszusetzen.",
      },
      {
        question: "Was muss vor Pflasterarbeiten geklärt sein?",
        answer:
          "Besprechen Sie früh die Torposition, benötigte Versorgung und mögliche Leitungswege. Auch die spätere Zugänglichkeit und geplante Bedienelemente können die Reihenfolge beeinflussen. Eine gemeinsame Abstimmung verhindert, dass wichtige Voraussetzungen erst nach der Fertigstellung auffallen.",
      },
      {
        question: "Wie wird die Bedienung bei einer Störung berücksichtigt?",
        answer:
          "Für die gewählte Anlage wird besprochen, welche manuelle Bedienmöglichkeit vorgesehen ist und wie die relevanten Komponenten erreichbar bleiben. Diese Fragen gehören zur Auswahl und Einweisung. Angaben zu einem bestehenden Antrieb helfen, die konkrete Situation einzuordnen.",
      },
      {
        question: "An wen wende ich mich bei Wartung oder einem Defekt?",
        answer:
          "KLOTZ beschreibt Wartung und Instandsetzung von Toranlagen im Leistungsbereich. Halten Sie Anlagenbezeichnung und eine Beschreibung des Fehlers bereit. Der passende nächste Schritt und verfügbare Komponenten werden für die vorhandene Anlage geklärt; bei auffälliger Bewegung sollte das Tor nicht weiter erzwungen betrieben werden.",
      },
    ],
    related: ["hoftore", "schiebetore", "zaunanlagen"],
    guideSlug: processGuide,
    offerSlug: "zaeune-tore",
    requestMessage:
      "Ich interessiere mich für eine elektrische Toranlage oder die Motorisierung eines vorhandenen Tors. Bitte beraten Sie mich zur Prüfung und passenden Gesamtausführung.",
    sourceRefs: [
      `${base}/portfolio/hoftore`,
      `${base}/portfolio/wartung-service`,
    ],
    status: "draft",
  },
  {
    slug: "gelaender",
    title: "Geländer",
    metaTitle: "Geländer in Merseburg: Glas, Metall & Montage",
    metaDescription:
      "Geländer für Treppe, Balkon und Terrasse: Mit KLOTZ in Merseburg Material, Gestaltung, Befestigung und die konkrete Einbausituation persönlich abstimmen.",
    hero: {
      title: "Eine klare Linie.",
      accent: "Ein gutes Raumgefühl.",
      lead: "An der Treppe, am Balkon oder auf der Terrasse prägt ein Geländer den ganzen Raum. KLOTZ verbindet Ihre Gestaltungswünsche mit dem Blick auf Nutzung, Untergrund und Befestigung – für eine passend geplante Ausführung.",
      cta: "Mein Geländer planen",
    },
    media: fenceMedia.gelaender,
    benefits: [
      {
        title: "Passend zur Architektur",
        text: "Glas, Metall, Handlauf und Füllung werden mit dem Gebäude und den Blickbeziehungen abgestimmt.",
      },
      {
        title: "Passend zum Einsatzort",
        text: "Treppe, Balkon und Terrasse stellen unterschiedliche Fragen an Verlauf und Befestigung.",
      },
      {
        title: "Mit dem Aufbau geplant",
        text: "Die konkrete Konstruktion beginnt beim tragfähigen Untergrund und den benötigten Anschlüssen.",
      },
    ],
    story: {
      title: "Ein Geländer ist Teil des Raums, den Sie erleben.",
      paragraphs: [
        "Ein transparenter Abschluss kann den Blick offen halten, ein Metallgeländer dem Gebäude eine klare Linie geben. Auf einer Treppe kommt der Handlauf als täglich berührtes Detail hinzu. Deshalb betrachten wir Gestaltung und Nutzung gemeinsam mit dem Ort, an dem das Geländer gebraucht wird.",
        "Das KLOTZ-Portfolio zeigt Glas- und Metallgeländer für innen und außen. Edelstahl und Aluminium sowie unterschiedliche Füllungen eröffnen gestalterische Richtungen. Die Auswahl für Ihr Vorhaben wird anhand der konkreten Konstruktion und des gewünschten Erscheinungsbilds besprochen.",
        "Im Bestand beginnt die Beratung mit vorhandenen Flächen und Anschlüssen. Soll ein altes Geländer ersetzt werden, interessieren uns sein Verlauf, die bisherige Befestigung und der Aufbau von Treppe oder Balkon. Eine Bildidee hilft bei der Gestaltung; sie ersetzt die Aufnahme am Gebäude nicht.",
      ],
    },
    variants: [
      {
        title: "Glas mit Durchblick",
        description:
          "Transparente Füllungen können Räume und Ausblicke verbinden. Wie offen das Geländer wirkt, hängt auch von Handlauf, Pfosten und Glasgestaltung ab. Die geeignete Ausführung wird für den Einsatzort festgelegt.",
        suitable:
          "Wenn ein klarer Abschluss den Blick möglichst wenig unterbrechen soll.",
      },
      {
        title: "Metall mit eigener Linie",
        description:
          "Stäbe, Flächen und ein passender Handlauf geben unterschiedliche gestalterische Richtungen vor. Oberfläche und Verlauf werden mit Fassade oder Innenraum abgestimmt; die konkrete Füllung folgt der geplanten Nutzung.",
        suitable:
          "Für eine bewusst sichtbare Struktur an Balkon, Terrasse oder Treppe.",
      },
      {
        title: "Handlauf & Treppenverlauf",
        description:
          "An einer Treppe zählt die Bewegung von unten nach oben. Verlauf, Übergänge und die Platzverhältnisse werden aufgenommen, damit Gestaltung und gewünschte Handhabung zusammenpassen.",
        suitable:
          "Wenn eine Treppe als zusammenhängender Weg geplant oder erneuert wird.",
      },
    ],
    detail: {
      title: "Die Befestigung gehört an den Anfang.",
      image: serviceImage(
        "/images/boundary-railing-hero.webp",
        "Außentreppe mit seitlicher Glasfüllung und dunklem Handlauf",
      ),
      caption:
        "Geländer am Treppenverlauf · Produktabbildung aus der KLOTZ-Glasgeländergalerie",
      paragraphs: [
        "Die sichtbare Oberfläche zeigt nicht, wie Treppe, Balkon oder Terrassenrand aufgebaut sind. Für eine passende Befestigung zählen Untergrund, Bauteilaufbau und die vorgesehene Konstruktion. Vorhandene Pläne oder Angaben zu einer Sanierung helfen, diese Grundlage früh zu klären.",
        "Im Außenbereich werden Anschlüsse an Beläge und die vorhandenen Abdichtungen mitbetrachtet. Seitliche Befestigung und eine Montage auf dem Bauteil sind unterschiedliche Ansätze, die nicht an jedem Standort gleichermaßen passen. Die Auswahl erfolgt für Ihr Gebäude und das gewählte System.",
        "Welche Abmessungen, Füllungen und Nachweise erforderlich sind, wird für den konkreten Einsatz geklärt. Pauschale Aussagen aus einem Produktfoto reichen dafür nicht. Das Angebot beschreibt deshalb die abgestimmte Ausführung einschließlich der vereinbarten Montage, damit Gestaltung und Aufbau zusammenkommen.",
      ],
    },
    planning: [
      {
        title: "Einsatzort zeigen",
        text: "Nennen Sie Treppe, Balkon oder Terrasse und zeigen Sie den gesamten Verlauf. Fotos aus mehreren Richtungen helfen, Übergänge und Zugänglichkeit zu verstehen.",
      },
      {
        title: "Wirkung und Nutzung abstimmen",
        text: "Glas, Metall, Handlauf und Oberfläche werden mit Ihrem Gebäude betrachtet. Besondere Nutzungswünsche werden früh angesprochen.",
      },
      {
        title: "Aufbau und Befestigung klären",
        text: "Untergrund, Bauteilaufbau, Beläge und Anschlüsse werden aufgenommen. Vorhandene Bauunterlagen und geplante Sanierungen fließen ein.",
      },
      {
        title: "Ausführung konkret beschreiben",
        text: "Verlauf, Konstruktion und vereinbarte Montagearbeiten werden abgestimmt. Benötigte Anforderungen und Nachweise gehören zur Planung des Einsatzorts.",
      },
    ],
    costs: {
      lead: "Ein Geländer wird durch Verlauf, Material und Befestigung bestimmt. Eine gerade Balkonseite ist ein anderes Vorhaben als eine Treppe mit mehreren Übergängen. Ein nachvollziehbares Angebot führt die gewählte Gestaltung und die Arbeiten am Gebäude zusammen.",
      factors: [
        "Länge, Geometrie und Übergänge im Verlauf",
        "Material, Glas- oder Metallfüllung und Oberfläche",
        "Handlauf, Pfosten und Anschlussdetails",
        "Untergrund und geeignete Befestigung",
        "Aufmaß, erforderliche Planung und vereinbarte Montagearbeiten",
      ],
    },
    faq: [
      {
        question: "Glas oder Metall – welches Geländer passt zu meinem Haus?",
        answer:
          "Glas kann Blickbeziehungen erhalten, Metall eine deutlichere Struktur schaffen. Handlauf, Pfosten und Füllung prägen die Wirkung zusätzlich. Die gestalterische Auswahl wird mit Nutzung, Bauteilaufbau und geeigneter Konstruktion verbunden, damit sie am Einsatzort passt.",
      },
      {
        question: "Kann ein bestehendes Geländer ersetzt werden?",
        answer:
          "Das lässt sich anhand von Verlauf, Zustand und bisheriger Befestigung planen. Wichtig ist auch, wie das tragende Bauteil aufgebaut ist. Zeigen Sie Fotos und vorhandene Unterlagen; der gewünschte Austausch wird mit den nötigen Anschlussarbeiten abgestimmt.",
      },
      {
        question: "Ist eine seitliche Befestigung möglich?",
        answer:
          "Das hängt vom Bauteil und dem geeigneten Geländersystem ab. Seitliche Montage und Montage auf der Fläche brauchen jeweils passende Voraussetzungen. Die konkrete Lösung wird nach Aufnahme des Untergrunds und der vorhandenen Anschlüsse ausgewählt.",
      },
      {
        question: "Wie hoch muss mein Geländer werden?",
        answer:
          "Die erforderliche Ausführung richtet sich nach dem konkreten Einsatzort und den dort geltenden Anforderungen. Höhe, Füllung und benötigte Nachweise werden in der Planung geklärt. Eine pauschale Maßangabe ohne Angaben zum Gebäude wäre keine belastbare Grundlage für die Auswahl.",
      },
      {
        question: "Was sollte ich für die Geländerberatung vorbereiten?",
        answer:
          "Hilfreich sind Projektort, Einsatzbereich, Fotos und eine grobe Skizze des Verlaufs. Wenn Pläne zum Aufbau von Balkon oder Treppe vorliegen, bringen Sie sie mit. Nennen Sie gewünschte Materialien und geplante Belags- oder Sanierungsarbeiten, damit die Anschlüsse mitgedacht werden.",
      },
    ],
    related: ["sichtschutz", "zaunanlagen", "hoftore"],
    guideSlug: processGuide,
    requestMessage:
      "Ich plane ein Geländer für Treppe, Balkon oder Terrasse. Bitte beraten Sie mich zu Gestaltung, Material, Befestigung und Montage.",
    sourceRefs: [
      `${base}/portfolio/aussengelaender`,
      `${base}/produkte/glasgel%C3%A4nder`,
      `${base}/produkte/metallgel%C3%A4nder`,
    ],
    status: "draft",
  },
];
