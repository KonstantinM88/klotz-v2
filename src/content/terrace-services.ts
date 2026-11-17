import type { TerraceServiceContent } from "@/domain/content/terrace-service";
import { terraceImage as image, terraceMedia } from "./terrace-media";
import { terraceGalleries } from "./terrace-galleries";

const base = "https://www.klotz.mobi";
const companySources = [`${base}/ueber-uns`, `${base}/kontakt`];

export const terraceServicePages: TerraceServiceContent[] = [
  {
    slug: "terrassenueberdachungen",
    title: "Terrassenüberdachungen",
    metaTitle: "Terrassenüberdachung mit Montage in Merseburg",
    metaDescription:
      "Ihr Terrassendach von KLOTZ: Glasdach, Beschattung und Seitenlösungen gemeinsam planen. Beratung und Aufmaß für Merseburg, Halle und Leipzig.",
    hero: {
      title: "Terrassendach.",
      accent: "Mehr Leben draußen.",
      lead: "Der Tisch bleibt gedeckt, auch wenn sich der Himmel verändert. Ein Terrassendach macht aus dem Sitzplatz am Haus einen geschützteren Ort für gemeinsame Mahlzeiten, ruhige Nachmittage und lange Abende. KLOTZ plant die passende Verbindung aus Dach, Tageslicht und Beschattung für Ihr Zuhause.",
      cta: "Mein Terrassendach besprechen",
    },
    media: terraceMedia.terrassenueberdachungen,
    gallery: terraceGalleries["terrassenueberdachungen"]!,
    benefits: [
      {
        title: "Draußen mehr vorhaben",
        text: "Ein festes Dach schützt den Sitzbereich von oben und gibt Ihrer Terrasse einen verlässlichen Rahmen.",
      },
      {
        title: "Den Garten im Blick behalten",
        text: "Glas lässt Licht und Blickbeziehungen zu. Wie hell es im Wohnraum bleibt, wird bei der Planung mitgedacht.",
      },
      {
        title: "Komfort passend ergänzen",
        text: "Beschattung und mögliche Seitenelemente werden von Anfang an auf die gewählte Konstruktion abgestimmt.",
      },
    ],
    story: {
      title: "Ein Dach, das zu Ihrem Haus gehört.",
      paragraphs: [
        "Eine Terrassenüberdachung wirkt jeden Tag: vom Wohnzimmer aus, auf dem Weg in den Garten und beim Sitzen darunter. Deshalb beginnt die Auswahl mit den Proportionen Ihres Hauses. Wo verläuft die Traufe? Welche Türen müssen frei bleiben? Wie kann die Konstruktion die Fassade aufnehmen, ohne sie zu dominieren?",
        "Bei KLOTZ besprechen Sie diese Fragen zusammen mit Ihrer Nutzung. Ein großer Esstisch braucht andere Bewegungsflächen als eine kleine Lounge. Eine Südterrasse stellt andere Anforderungen an die Beschattung als ein geschützter Platz mit Morgensonne. Aus diesen Angaben entsteht die Richtung für Material, Maße und Ausstattung – und anschließend das konkrete Aufmaß.",
      ],
    },
    variants: [
      {
        title: "An das Haus angeschlossen",
        description:
          "Das Dach führt den Wohnbereich nach draußen weiter. Wandanschluss, Befestigung und Stützen werden auf die vorhandene Fassade und die Terrassentüren abgestimmt.",
        suitable: "Für einen Sitzplatz direkt am Gebäude.",
      },
      {
        title: "Freistehend gedacht",
        description:
          "Eine eigenständige Konstruktion kann den gewünschten Platz unabhängig von der Hauswand rahmen. Dafür müssen Standort, Fundamentierung und Entwässerung als zusammenhängende Lösung geplant werden.",
        suitable: "Für einen eigenständigen Bereich auf dem Grundstück.",
      },
      {
        title: "Mit Schatten und seitlichem Schutz",
        description:
          "Ein Glasdach lässt sich je nach System durch Beschattung und bewegliche Glaselemente ergänzen. So können Sie den Komfort erweitern, ohne das Vorhaben von Beginn an als geschlossenen Gartenraum anzulegen.",
        suitable: "Für eine Terrasse, die mit Ihren Wünschen mitwachsen soll.",
      },
    ],
    detail: {
      title: "Licht behalten. Wärmeentwicklung mitdenken.",
      paragraphs: [
        "Die Transparenz eines Glasdachs ist ein gestalterischer Vorteil. Gleichzeitig kann sich die Fläche darunter bei direkter Sonne stark erwärmen. Deshalb ist die Beschattung kein nebensächliches Extra: Sie entscheidet mit darüber, wie angenehm sich die Terrasse an warmen Tagen nutzen lässt.",
        "Gemeinsam betrachten wir Ausrichtung, Dachfläche und die angrenzenden Wohnräume. Auch die Bedienung gehört dazu: Soll die Beschattung nur bei Bedarf ausgefahren werden? Ist seitlicher Sonneneinfall relevant? Die passende Lösung wird für die konkrete Einbausituation ausgewählt.",
      ],
      image: image(
        "/images/terrace-roof-detail.webp",
        "Blick unter ein helles Terrassendach mit Esstisch und Garten",
      ),
      caption: "Lichtdurchlässige Überdachung · KLOTZ-Produktgalerie",
    },
    planning: [
      {
        title: "Nutzfläche festlegen",
        text: "Tisch, Stühle und Laufwege bestimmen die tatsächlich benötigte Breite und Tiefe. Planen Sie auch geöffnete Terrassentüren ein.",
      },
      {
        title: "Hausanschluss prüfen",
        text: "Fassadenaufbau, Anschlusshöhe und Befestigung müssen zur Konstruktion passen. Diese Details werden beim Aufmaß betrachtet.",
      },
      {
        title: "Untergrund und Wasser klären",
        text: "Stützen benötigen eine geeignete Gründung. Ebenso wichtig ist ein geplanter Weg für das Regenwasser.",
      },
      {
        title: "Erweiterungen vorbereiten",
        text: "Sonnenschutz, mögliche Glaswände und elektrische Ausstattung sollten früh angesprochen werden – auch wenn sie erst später gewünscht sind.",
      },
    ],
    costs: {
      lead: "Ein vergleichbares Angebot nennt das gesamte Vorhaben, nicht nur die Dachfläche. Nach Aufmaß und Abstimmung erhalten Sie den Preis für die vereinbarte Ausführung. So können Sie Konstruktion, Ausstattung und Montage gemeinsam bewerten.",
      factors: [
        "Breite, Tiefe, Dachmaterial und Tragkonstruktion",
        "Wandanschluss, Fundamente, Wasserführung und Montagezugang",
        "Beschattung, Seitenelemente und vereinbarte Zusatzarbeiten",
      ],
    },
    faq: [
      {
        question: "Glasdach oder Lamellendach: Was passt besser?",
        answer:
          "Ein festes Glasdach erhält den Blick nach oben und viel Tageslicht. Ein Lamellendach verändert den Lichteinfall durch bewegliche Lamellen. Entscheidend sind Ihre gewünschte Nutzung, die Sonnenseite und die Wirkung auf angrenzende Räume. Wir helfen Ihnen, die beiden Ansätze am eigenen Haus zu vergleichen.",
      },
      {
        question: "Kann eine Überdachung später einen Sommergarten bilden?",
        answer:
          "Das kann bei einer geeigneten Konstruktion möglich sein. Voraussetzung sind passende Anschlüsse, ein geeigneter Untergrund und die technische Eignung des Dachs. Sprechen Sie diesen Wunsch früh an, damit mögliche Seitenwände und Beschattung bereits bei der Dachplanung berücksichtigt werden.",
      },
      {
        question: "Ist eine Beschattung unter einem Glasdach sinnvoll?",
        answer:
          "Bei direkter Sonneneinstrahlung ist sie ein wesentlicher Komfortfaktor. Welche Anordnung passt, hängt von Dachsystem, Ausrichtung und Einbausituation ab. Beziehen Sie auch den Lichteinfall in die angrenzenden Wohnräume in die Entscheidung ein.",
      },
      {
        question: "Wer übernimmt Aufmaß und Montage?",
        answer:
          "KLOTZ begleitet das Vorhaben von der persönlichen Beratung über das Aufmaß und Angebot bis zur vereinbarten Montage und Abnahme. Vorbereitende Arbeiten und mögliche Schnittstellen, etwa zur Elektrik, werden im Leistungsumfang abgestimmt.",
      },
      {
        question: "Was sollte ich vor dem ersten Gespräch vorbereiten?",
        answer:
          "Ein Foto der Hausseite, der Projektort und ungefähre Maße reichen für den Einstieg. Hilfreich ist außerdem Ihre Vorstellung von der Nutzung: Essen, Entspannen oder ein später geschützter Gartenraum. Rechtliche Anforderungen am Standort sollten vor der Beauftragung mit der zuständigen Stelle geklärt sein.",
      },
    ],
    related: ["lamellendaecher", "glasschiebewaende", "sonnenschutz"],
    guideSlug: "was-kostet-eine-terrassenueberdachung",
    offerSlug: "terrassendach-carport",
    requestMessage:
      "Ich möchte meine Terrasse überdachen. Bitte beraten Sie mich zu einem Terrassendach mit passender Beschattung und Montage.",
    sourceRefs: [
      `${base}/produkte/terrassen%C3%BCberdachungen-0`,
      `${base}/portfolio/terrassenueberdachung`,
      ...companySources,
    ],
    status: "draft",
  },
  {
    slug: "lamellendaecher",
    title: "Lamellendächer",
    metaTitle: "Lamellendach für Ihre Terrasse in Merseburg",
    metaDescription:
      "Licht, Schatten und Luft selbst gestalten: Lamellendächer von KLOTZ. Persönliche Beratung, Aufmaß und Montage in Merseburg, Halle und Leipzig.",
    hero: {
      title: "Lamellendach.",
      accent: "Ihr Licht. Ihr Rhythmus.",
      lead: "Sonne zum Frühstück, Schatten am Nachmittag und ein Platz, der sich mit dem Tag verändert. Bewegliche Aluminiumlamellen machen Ihr Dach anpassungsfähig. KLOTZ plant daraus einen Gartenplatz, der sich gestalterisch in Ihr Zuhause einfügt und im Alltag einfach nutzen lässt.",
      cta: "Mein Lamellendach planen",
    },
    media: terraceMedia.lamellendaecher,
    gallery: terraceGalleries["lamellendaecher"]!,
    benefits: [
      {
        title: "Licht aktiv gestalten",
        text: "Mit der Lamellenstellung verändern Sie den Lichteinfall, statt den Schattenplatz dauerhaft festzulegen.",
      },
      {
        title: "Luft und Offenheit erleben",
        text: "Geöffnete Lamellen lassen den Außenraum spürbar offen. Die gewünschte Bedienung wird mitgeplant.",
      },
      {
        title: "Eine klare Architektur",
        text: "Konstruktion, Stützen und Farbe geben dem Sitzplatz einen Rahmen – am Haus oder als eigenständiger Gartenbereich.",
      },
    ],
    story: {
      title: "Ein Dach für wechselnde Lieblingsmomente.",
      paragraphs: [
        "Ein Lamellendach ist interessant, wenn Sie sich auf der Terrasse nicht zwischen dauerhaftem Schatten und freiem Himmel festlegen möchten. Die beweglichen Lamellen ermöglichen unterschiedliche Stellungen. So lässt sich der Bereich darunter auf den Sonnenstand und Ihre jeweilige Tätigkeit abstimmen.",
        "Dabei zählt mehr als die Dachfläche. Wie wird das Dach bedient? Wo stehen Tisch und Lounge? Welche Sichtachsen möchten Sie behalten? KLOTZ betrachtet diese Wünsche zusammen mit Befestigung, Stromversorgung und Wasserführung. So entsteht eine Ausführung, die nicht nur auf einer Produktabbildung überzeugt, sondern zu Ihrem Grundstück passt.",
      ],
    },
    variants: [
      {
        title: "Direkt an der Terrasse",
        description:
          "Am Haus wird das Lamellendach zum Übergang zwischen Innenraum und Garten. Lage und Lamellenrichtung sollten auch den Tageslichteinfall in die angrenzenden Zimmer berücksichtigen.",
        suitable: "Für Ihren täglichen Sitzplatz am Wohnhaus.",
      },
      {
        title: "Als eigener Gartenplatz",
        description:
          "Eine freistehende Lösung kann einen Esstisch oder eine Lounge im Garten fassen. Stützenpositionen und Wege werden dabei auf die Fläche und ihre Nutzung abgestimmt.",
        suitable: "Für einen bewusst gesetzten Treffpunkt im Grünen.",
      },
      {
        title: "Mit zusätzlichen Komfortideen",
        description:
          "Licht und seitliche Lösungen können je nach gewähltem System hinzukommen. Wir besprechen mit Ihnen, welche Ausstattung Ihren Alltag bereichert und wie sie sich in die gewünschte Konstruktion integrieren lässt.",
        suitable: "Für ein Dach, dessen Ausstattung Ihren Alltag unterstützt.",
      },
    ],
    detail: {
      title: "Die Entscheidung steckt in den Details.",
      paragraphs: [
        "Ein geöffnetes Dach und eine geschlossene Lamellenfläche wirken unterschiedlich. Sehen Sie sich deshalb beide Zustände an und denken Sie an den Blick aus Ihren Wohnräumen. Auch die Platzierung der Stützen beeinflusst, wie frei sich der Sitzbereich anfühlt.",
        "Wasserführung, Bedienung und Standortanforderungen müssen zur konkreten Ausführung passen. Technische Belastungsgrenzen werden anhand des ausgewählten Systems geklärt. In der Beratung können Sie Ihre Prioritäten benennen: größtmögliche Offenheit, unkomplizierte Bedienung oder ein späterer seitlicher Abschluss.",
      ],
      image: image(
        "/images/lamelle-detail-3.webp",
        "Weitere Ansicht der Lamellenkonstruktion aus der KLOTZ-Galerie",
      ),
      caption: "Lamellendach · weitere Ansicht aus der KLOTZ-Galerie",
    },
    planning: [
      {
        title: "Sonne und Blickrichtungen",
        text: "Zu welchen Tageszeiten sitzen Sie draußen? Der Sonnenlauf und die Fenster des Hauses helfen bei der Positionierung.",
      },
      {
        title: "Stützen und Nutzfläche",
        text: "Möbel, Gartenwege und Durchgänge sollten frei bleiben. Die benötigte Fläche wird beim Aufmaß konkretisiert.",
      },
      {
        title: "Bedienung und Anschlüsse",
        text: "Gewünschte Steuerung, Stromanschluss und mögliche Beleuchtung werden mit der Systemwahl abgestimmt.",
      },
      {
        title: "Wasser und Standort",
        text: "Entwässerung, Befestigung und die örtlichen Anforderungen fließen in die technische Planung ein.",
      },
    ],
    costs: {
      lead: "Vergleichen Sie Lamellendächer über die abgestimmte Ausführung: Maße, Bedienung, Ausstattung und Montage gehören in denselben Blick. KLOTZ klärt den Leistungsumfang nach dem Aufmaß und erstellt darauf das konkrete Angebot.",
      factors: [
        "Dachgröße, Konstruktion und Ausführung der Lamellen",
        "Antrieb, Bedienung und gewählte Komfortausstattung",
        "Fundamente, Befestigung, Anschlüsse und Montage",
      ],
    },
    faq: [
      {
        question: "Wie verändert ein Lamellendach Licht und Schatten?",
        answer:
          "Die Lamellen lassen sich je nach System kippen oder schließen. Durch ihre Stellung verändern sich Lichteinfall und Luftzirkulation unter dem Dach. Welche Möglichkeiten die Bedienung bietet, wird anhand des konkret gewählten Systems besprochen.",
      },
      {
        question: "Kann ich das Lamellendach auch bei Regen nutzen?",
        answer:
          "Wie das Dach bei Regen genutzt werden kann, hängt vom System, seiner Entwässerung und dem fachgerechten Einbau ab. Besprechen Sie auch die seitliche Offenheit Ihres Sitzplatzes. KLOTZ erläutert die Möglichkeiten und Nutzungsgrenzen der angebotenen Ausführung.",
      },
      {
        question: "Sind Glaswände oder seitlicher Sonnenschutz möglich?",
        answer:
          "Solche Ergänzungen sind systemabhängig. Besprechen Sie Ihre Wünsche bereits bei der Dachplanung, damit Konstruktion, Anschlüsse und mögliche Durchgänge darauf abgestimmt werden können. Eine Nachrüstung muss im Einzelfall geprüft werden.",
      },
      {
        question: "Was ist der Unterschied zu einer Pergola mit Tuch?",
        answer:
          "Beim Lamellendach regulieren bewegliche Aluminiumlamellen den Lichteinfall. Eine Pergola mit Sonnentuch arbeitet mit einer textilen Fläche. Der Vergleich betrifft deshalb nicht nur die Optik, sondern auch die gewünschte Offenheit, Bedienung und die vorgesehenen Wetterbedingungen.",
      },
      {
        question: "Lässt sich das Dach in einem bestehenden Garten ergänzen?",
        answer:
          "Grundsätzlich beginnt die Planung am vorhandenen Grundstück: mit Platzangebot, Untergrund, möglichen Anschlüssen und Zugänglichkeit. Schicken Sie für den Einstieg Fotos und ungefähre Maße. Beim Aufmaß werden die Voraussetzungen für Ihr Vorhaben geprüft.",
      },
    ],
    related: ["terrassenueberdachungen", "pergolen", "glasschiebewaende"],
    guideSlug: "lamellendach-oder-glasdach",
    offerSlug: "lamellendaecher-pergolen",
    requestMessage:
      "Ich interessiere mich für ein Lamellendach. Bitte beraten Sie mich zu Ausführung, Bedienung und Montage für meine Terrasse.",
    sourceRefs: [`${base}/produkt/lamellendach`, ...companySources],
    status: "draft",
  },
  {
    slug: "pergolen",
    title: "Pergolen",
    metaTitle: "Pergola mit Sonnentuch in Merseburg | Beratung",
    metaDescription:
      "Ein eigener Schattenplatz im Garten: Pergolen mit beweglichem Sonnentuch von KLOTZ. Gestaltung, Standort und Montage persönlich besprechen.",
    hero: {
      title: "Pergola.",
      accent: "Leichtigkeit im Garten.",
      lead: "Ein Rahmen für den Lieblingsplatz. Ein Tuch, das sich nach Ihrer Stimmung öffnet oder Schatten spendet. Eine Pergola bringt textile Leichtigkeit in den Garten und schafft einen Ort, an dem man gern zusammenkommt – vom ersten Kaffee bis zum Abendessen im Freien.",
      cta: "Meine Pergola gestalten",
    },
    media: terraceMedia.pergolen,
    gallery: terraceGalleries["pergolen"]!,
    benefits: [
      {
        title: "Schatten nach Bedarf",
        text: "Die bewegliche textile Fläche macht aus Sonne und Schatten eine bewusste Wahl.",
      },
      {
        title: "Ein Platz mit Charakter",
        text: "Eine freistehende Konstruktion gibt dem Garten Struktur, ohne ihn wie einen geschlossenen Raum wirken zu lassen.",
      },
      {
        title: "Gestaltung aus einem Guss",
        text: "Konstruktion, Tuch und Möblierung lassen sich als gemeinsame Idee für Ihren Außenbereich betrachten.",
      },
    ],
    story: {
      title: "Ein neuer Mittelpunkt im Grünen.",
      paragraphs: [
        "Manche Plätze im Garten sind zu schön, um sie nur bei mildem Sonnenlicht zu nutzen. Eine Pergola mit Sonnentuch kann dort einen klar gefassten Sitzbereich schaffen: offen an den Seiten, leicht in der Wirkung und bei Bedarf beschattet.",
        "KLOTZ bespricht mit Ihnen, wo dieser Platz liegen soll und was Sie dort vorhaben. Ein Esstisch in Hausnähe braucht andere Wege als eine Lounge weiter im Garten. Aus Nutzungsfläche, Sonnenlauf und Befestigung entsteht die passende Richtung. Die Tuchauswahl und die vorgesehene Bedienung werden darauf abgestimmt.",
      ],
    },
    variants: [
      {
        title: "Der Essplatz im Garten",
        description:
          "Eine Pergola kann Tisch und Stühle als gemeinsamen Bereich fassen. Berücksichtigen Sie neben der Tischfläche auch zurückgerückte Stühle und den Weg zwischen Haus, Garten und Sitzplatz.",
        suitable: "Für gemeinsames Essen unter einem beweglichen Schattendach.",
      },
      {
        title: "Die ruhige Gartenlounge",
        description:
          "Mit Sitzmöbeln und einer passenden Tuchwirkung entsteht ein eigener Rückzugsort. Der Standort entscheidet mit darüber, wie offen, sonnig oder einsehbar sich dieser Platz anfühlt.",
        suitable: "Für Lesen, Entspannen und Zeit im Freien.",
      },
      {
        title: "Textile Gestaltung passend zum Haus",
        description:
          "Farbwirkung und Konstruktion verbinden die Pergola mit dem vorhandenen Garten und Gebäude. Aktuelle Stoffe, Ausführungen und mögliche Bedienarten werden für Ihr Vorhaben bemustert beziehungsweise abgestimmt.",
        suitable: "Für einen bewusst gestalteten Außenbereich.",
      },
    ],
    detail: {
      title: "Die Sonne genießen – und den Schatten wählen.",
      paragraphs: [
        "Eine Pergola mit Sonnentuch und ein Lamellendach verfolgen unterschiedliche Gestaltungsansätze. Das Tuch bringt eine weiche, textile Fläche in die Architektur. Geöffnet verändert es die Wirkung des Gartenplatzes; geschlossen steht die Beschattung im Mittelpunkt.",
        "Welche Wetterbedingungen für das gewählte Tuch und die Konstruktion vorgesehen sind, gehört ins Beratungsgespräch. Stellen Sie dafür Ihre tatsächlichen Wünsche in den Vordergrund: Geht es vor allem um Sonnenschutz, um einen offenen Gartenraum oder um möglichst weitgehenden Wetterschutz? So lässt sich die Pergola sinnvoll mit anderen Dachlösungen vergleichen.",
      ],
      image: image(
        "/images/terrace-pergola.webp",
        "Pergola mit hellem beweglichem Tuch im Garten",
      ),
      caption: "Pergola mit Sonnentuch · weiteres Motiv aus der KLOTZ-Galerie",
    },
    planning: [
      {
        title: "Den richtigen Platz finden",
        text: "Sonnenzeiten, Blick in den Garten und Wege zum Haus helfen, den Standort festzulegen.",
      },
      {
        title: "Fläche für den Alltag bemessen",
        text: "Möbel und Bewegungsraum zählen gemeinsam. Auch Gartenpflege und angrenzende Bepflanzung werden mitgedacht.",
      },
      {
        title: "Untergrund klären",
        text: "Befestigung und Gründung müssen zur Konstruktion passen. Ein vorhandener Terrassenbelag ist dafür allein noch kein Nachweis.",
      },
      {
        title: "Tuch und Nutzung abstimmen",
        text: "Material, Bedienung und Umgang mit Wind und Wetter werden anhand des angebotenen Systems erklärt.",
      },
    ],
    costs: {
      lead: "Der Preis richtet sich nach dem geplanten Gartenplatz und der ausgewählten Ausführung. Beim Vergleich sollten Sie Konstruktion, Tuch, Befestigung und Montage gemeinsam betrachten – so bleibt erkennbar, was zum fertigen Vorhaben gehört.",
      factors: [
        "Abmessungen und Ausführung der Konstruktion",
        "Tuch, Bedienung und vereinbarte Ergänzungen",
        "Gründung, Zugang zum Grundstück und Montage",
      ],
    },
    faq: [
      {
        question: "Was unterscheidet die Pergola von einer Markise?",
        answer:
          "Eine freistehende Pergola bildet mit ihrer Konstruktion einen eigenen Bereich im Garten. Eine klassische Gelenkarmmarkise beschattet eine Fläche von der Fassade aus. Welche Lösung besser passt, hängt vom gewünschten Standort, der Befestigung und Ihrer Nutzung ab.",
      },
      {
        question: "Kann das Sonnentuch geöffnet werden?",
        answer:
          "Die Pergola mit Sonnentuch arbeitet mit einer beweglichen textilen Fläche. Die passende Ausführung und ihre Bedienung werden im Gespräch geklärt. So wählen Sie die Lösung nach Ihrem Alltag und der gewünschten Offenheit aus.",
      },
      {
        question: "Ist das Sonnentuch automatisch ein Regendach?",
        answer:
          "Nein. Die Eignung für Regen und Wind hängt vom Material und vom konkreten System ab. Wenn dauerhafter Wetterschutz Ihr Hauptziel ist, sollten Sie Pergola, festes Terrassendach und Lamellendach gezielt miteinander vergleichen.",
      },
      {
        question: "Kann die Pergola frei im Garten stehen?",
        answer:
          "Eine freistehende Pergola kann im Garten einen eigenen Sitzplatz schaffen. Standort, Gründung und Zugänglichkeit werden für Ihr Grundstück betrachtet. Das Aufmaß dient dazu, aus der Gestaltungsidee eine passende Ausführung abzuleiten.",
      },
      {
        question: "Wie finde ich die passende Größe?",
        answer:
          "Gehen Sie zunächst von Ihrer Möblierung aus. Rechnen Sie die Bewegungsflächen für Stühle und Durchgänge dazu und markieren Sie den Bereich probeweise auf dem Boden. Diese ungefähren Maße helfen beim Einstieg; die verbindliche Planung erfolgt nach dem Aufmaß.",
      },
    ],
    related: ["lamellendaecher", "terrassenueberdachungen", "sonnenschutz"],
    guideSlug: "lamellendach-oder-glasdach",
    offerSlug: "lamellendaecher-pergolen",
    requestMessage:
      "Ich wünsche mir eine Pergola mit Sonnentuch. Bitte beraten Sie mich zu einem passenden Schattenplatz in meinem Garten.",
    sourceRefs: [`${base}/produkte/pergola-mit-sonnentuch`, ...companySources],
    status: "draft",
  },
  {
    slug: "sommer-wintergaerten",
    title: "Sommer- & Wintergärten",
    metaTitle: "Sommergarten & Wintergarten in Merseburg planen",
    metaDescription:
      "Geschützter Gartenplatz oder zusätzlicher Wohnraum? KLOTZ hilft bei der Planung von Sommergarten und Wintergarten in Merseburg, Halle und Leipzig.",
    hero: {
      title: "Gartenräume.",
      accent: "Näher am Grünen.",
      lead: "Den Garten sehen, während draußen der Wind auffrischt. Den Sitzplatz öffnen, wenn es warm wird. Ein verglaster Gartenraum verändert die Nähe zum Freien. Entscheidend ist, wie Sie ihn nutzen möchten: als saisonalen Sommergarten oder als sorgfältig geplanten, beheizten Wintergarten.",
      cta: "Meinen Gartenraum besprechen",
    },
    media: terraceMedia["sommer-wintergaerten"],
    gallery: terraceGalleries["sommer-wintergaerten"]!,
    benefits: [
      {
        title: "Den Übergang gestalten",
        text: "Ein Gartenraum verbindet Haus und Außenbereich – mit Licht, Ausblick und einer eigenen Aufenthaltsqualität.",
      },
      {
        title: "Die Nutzung zuerst klären",
        text: "Saisonaler Sitzplatz und beheizter Wohnraum stellen unterschiedliche Anforderungen an die gesamte Planung.",
      },
      {
        title: "Offenheit bewusst wählen",
        text: "Bewegliche Glaselemente, Lüftung und Beschattung bestimmen gemeinsam, wie sich der Raum anfühlt.",
      },
    ],
    story: {
      title: "Wie möchten Sie Ihren Gartenraum erleben?",
      paragraphs: [
        "Vielleicht wünschen Sie sich einen geschützteren Platz für die Übergangszeit. Vielleicht soll am Haus ein zusätzlicher Raum zum Wohnen entstehen. Diese beiden Ideen sehen auf Bildern oft ähnlich aus, führen aber zu unterschiedlichen baulichen Lösungen.",
        "Deshalb beginnt KLOTZ mit Ihrem Alltag. Wann möchten Sie den Raum nutzen? Soll er beheizt werden? Wie offen soll er sich im Sommer anfühlen? Aus diesen Antworten ergeben sich die Anforderungen an Konstruktion, Verglasung, Boden, Anschlüsse und Haustechnik. Eine frühe Klärung hilft, Erwartungen und Planung zusammenzubringen.",
      ],
    },
    variants: [
      {
        title: "Sommergarten",
        description:
          "Eine seitlich geschützte, in der Regel unbeheizte Terrasse schafft einen anderen Übergang in den Garten. Die Nutzung bleibt von Außentemperaturen und Sonne geprägt; sie ist nicht mit einem automatisch ganzjährig temperierten Wohnraum gleichzusetzen.",
        suitable:
          "Für einen saisonalen Gartenplatz mit mehr seitlichem Schutz.",
      },
      {
        title: "Beheizter Wintergarten",
        description:
          "Wenn zusätzlicher Wohnraum gewünscht ist, müssen Wärmeschutz, Lüftung, Beschattung und Heizung von Beginn an zusammenpassen. Auch Fundament und Gebäudeanschluss werden entsprechend geplant.",
        suitable:
          "Für ein Vorhaben mit ausdrücklich gewünschter Wohnraumnutzung.",
      },
      {
        title: "Bestehendes Dach weiterdenken",
        description:
          "Ein vorhandenes Terrassendach kann der Ausgangspunkt sein. Ob ein seitlicher Abschluss sinnvoll und technisch möglich ist, hängt von der Konstruktion und der vorhandenen Einbausituation ab.",
        suitable:
          "Für Eigentümer, die eine bestehende Terrasse gezielt ergänzen möchten.",
      },
    ],
    detail: {
      title: "Viel Glas braucht einen Plan für Sonne und Luft.",
      paragraphs: [
        "Der Ausblick ist ein wichtiger Grund für einen Gartenraum. Damit er angenehm bleibt, gehören Beschattung und Lüftung zur Grundidee. Betrachten Sie nicht nur die Dachfläche: Auch seitlicher Sonneneinfall und die Öffnungsmöglichkeiten der Glasflächen beeinflussen den Komfort.",
        "Ein durchdachter Raum lässt sich im Alltag bedienen und reinigen. Wo werden Glasfelder geparkt? Welche Wege bleiben frei? Welche Bodenanschlüsse sind vorgesehen? Diese Fragen machen aus einer schönen Vorstellung ein nutzbares Konzept für Ihr Zuhause.",
      ],
      image: image(
        "/images/glas-detail-3.webp",
        "Seitlich verglaster Gartenbereich aus dem KLOTZ-Bildarchiv",
      ),
      caption:
        "Gläserner Gartenbereich · Gestaltungsbeispiel aus dem KLOTZ-Bildarchiv",
    },
    planning: [
      {
        title: "Nutzung festlegen",
        text: "Saisonal oder beheizt? Beschreiben Sie zuerst, wann und wofür Sie den neuen Raum nutzen möchten.",
      },
      {
        title: "Anschlüsse betrachten",
        text: "Gebäude, Fundament, Bodenhöhe und mögliche Haustechnik bilden die bauliche Grundlage.",
      },
      {
        title: "Raumklima planen",
        text: "Sonnenverlauf, Beschattung und Lüftung müssen zur Glasfläche und zur Nutzung passen.",
      },
      {
        title: "Baurecht früh klären",
        text: "Die Einordnung des konkreten Vorhabens und örtliche Vorgaben werden vor einer Beauftragung mit der zuständigen Stelle geklärt.",
      },
    ],
    costs: {
      lead: "Sommergarten und beheizter Wintergarten sind keine direkt vergleichbaren Preispositionen. Die gewünschte Nutzung verändert den Umfang der Konstruktion und der begleitenden Arbeiten. Ein aussagekräftiges Angebot beginnt deshalb mit einer klaren Beschreibung des Raums.",
      factors: [
        "Nutzung, Größe, Dach und seitliche Verglasung",
        "Fundament, Gebäudeanschluss und Bodenaufbau",
        "Beschattung, Lüftung und gegebenenfalls Haustechnik",
      ],
    },
    faq: [
      {
        question:
          "Was ist der wichtigste Unterschied zwischen Sommergarten und Wintergarten?",
        answer:
          "Ein Sommergarten ist üblicherweise ein unbeheizter geschützter Außenbereich. Ein als Wohnraum geplanter Wintergarten muss auf die gewünschte Temperierung und Nutzung ausgelegt werden. Der Unterschied betrifft die ganze Konstruktion und Planung, nicht allein die Frage, ob Glaswände vorhanden sind.",
      },
      {
        question:
          "Kann ich aus meinem Terrassendach einen Sommergarten machen?",
        answer:
          "Das kann möglich sein. Zunächst werden die vorhandene Konstruktion, ihre Anschlüsse, der Untergrund und mögliche Seitenlösungen geprüft. Fotos, vorhandene Unterlagen und ein Aufmaß helfen dabei, die Möglichkeiten Ihres Bestands einzuordnen.",
      },
      {
        question: "Kann ein Sommergarten im Winter genutzt werden?",
        answer:
          "Das hängt von Wetter, Sonneneinstrahlung und Ihrem Komfortanspruch ab. Ein unbeheizter Sommergarten bietet keinen automatisch temperierten Wohnraum. Wenn Sie eine verlässlich beheizte Nutzung wünschen, sollte das von Beginn an als eigener Planungsanspruch besprochen werden.",
      },
      {
        question: "Wie wichtig ist eine Beschattung?",
        answer:
          "Glasflächen lassen Licht herein und können sich unter direkter Sonne stark erwärmen. Die passende Beschattung und ausreichende Öffnungsmöglichkeiten sind deshalb wichtige Bestandteile der Planung. Dach und Seiten werden gemeinsam betrachtet.",
      },
      {
        question: "Wer klärt die Genehmigung?",
        answer:
          "Ob und welche Genehmigung erforderlich ist, hängt vom konkreten Vorhaben und Standort ab. Die verbindliche Einordnung kommt von der zuständigen Bauaufsicht. Eine frühe Klärung gibt der weiteren Planung eine verlässliche Grundlage.",
      },
    ],
    related: ["terrassenueberdachungen", "glasschiebewaende", "sonnenschutz"],
    guideSlug: "sommergarten-oder-wintergarten",
    requestMessage:
      "Ich möchte einen Sommergarten oder Wintergarten planen. Bitte besprechen Sie mit mir die passende Lösung für meine gewünschte Nutzung.",
    sourceRefs: [
      `${base}/produkte/gartenzimmer`,
      `${base}/portfolio/wintergaerten`,
      ...companySources,
    ],
    status: "draft",
  },
  {
    slug: "glasschiebewaende",
    title: "Glasschiebewände",
    metaTitle: "Glasschiebewände für Ihre Terrasse in Merseburg",
    metaDescription:
      "Terrasse öffnen und bei Bedarf seitlich schließen: Glasschiebewände mit KLOTZ planen. Beratung zur Nachrüstung, Schienen und Montage in der Region Merseburg.",
    hero: {
      title: "Glas, das öffnet.",
      accent: "Der Garten bleibt nah.",
      lead: "Offen sitzen, wenn die Luft angenehm ist. Seitlich schließen, wenn der Wind auffrischt. Glasschiebewände geben einer überdachten Terrasse mehr Möglichkeiten, ohne den Blick ins Grüne zu nehmen. KLOTZ prüft mit Ihnen, welche Lösung zum Dach, zum Boden und zu Ihren Wegen passt.",
      cta: "Meine Glaslösung anfragen",
    },
    media: terraceMedia.glasschiebewaende,
    gallery: terraceGalleries["glasschiebewaende"]!,
    benefits: [
      {
        title: "Die Aussicht behalten",
        text: "Transparente Glaselemente schaffen einen seitlichen Abschluss mit Blickbeziehung zum Garten.",
      },
      {
        title: "Den Außenbereich variieren",
        text: "Bewegliche Elemente lassen sich öffnen oder schließen. Die Öffnungs- und Parkpositionen werden bewusst geplant.",
      },
      {
        title: "Vorhandenes sinnvoll ergänzen",
        text: "Bei passender Konstruktion können Glaswände eine bestehende Überdachung erweitern – nach Prüfung der Anschlüsse.",
      },
    ],
    story: {
      title: "Mehr Möglichkeiten unter Ihrem Dach.",
      paragraphs: [
        "Ein Dach schützt von oben. Seitlicher Wind oder ein offener Rand können den Sitzkomfort trotzdem begrenzen. Bewegliche Glaselemente setzen genau dort an: Sie verändern die seitliche Offenheit des Platzes und erhalten dabei die Aussicht.",
        "Die passende Lösung beginnt mit der vorhandenen Situation. Welche Seite soll geschützt werden? Wo möchten Sie in den Garten gehen? Wo können sich geöffnete Glasfelder sammeln? KLOTZ betrachtet diese Fragen gemeinsam mit Dachtragwerk, Bodenanschluss und Entwässerung. So wird aus einer Glaswand eine im Alltag nutzbare Ergänzung.",
      ],
    },
    variants: [
      {
        title: "Eine Seite gezielt schließen",
        description:
          "Nicht jede Terrasse braucht einen vollständigen Abschluss. Eine einzelne seitliche Glasfläche kann die für Ihren Sitzplatz besonders relevante Richtung aufnehmen und die übrigen Seiten offen lassen.",
        suitable:
          "Für gezielten seitlichen Schutz bei weiterhin offenem Charakter.",
      },
      {
        title: "Mehrere Seiten beweglich gestalten",
        description:
          "Ein umfassenderer Abschluss kann den Bereich unter dem Dach stärker rahmen. Entscheidend bleiben ausreichend nutzbare Öffnungen und die Lage der geparkten Glasfelder.",
        suitable: "Für eine geschütztere Terrasse mit flexiblen Durchgängen.",
      },
      {
        title: "Schiebe- und Faltlösungen vergleichen",
        description:
          "Die Bewegungsart beeinflusst Öffnungsbreite, Bedienung und Platzbedarf. Welche Ausführung passt, wird anhand der aktuell angebotenen Systeme und Ihrer Konstruktion geklärt.",
        suitable: "Für eine Lösung, deren Bewegung zu Ihren Laufwegen passt.",
      },
    ],
    detail: {
      title: "Der gute Anschluss macht den Unterschied.",
      paragraphs: [
        "Eine niedrige Schiene kann angenehm wirken; entscheidend ist jedoch der tatsächliche Anschluss an den Boden. Höhen, Wasserführung und vorhandene Beläge müssen zusammenpassen. Wünschen Sie einen möglichst schwellenarmen Übergang, planen wir den Bodenanschluss gezielt darauf hin.",
        "Auch die Reinigung und Bedienung gehören ins Gespräch. Wie erreichen Sie die Glasflächen? Bleibt die Tür zum Haus frei? Wo verlaufen häufig genutzte Wege? Diese Details bestimmen, ob die Glaswand später selbstverständlich zum Alltag gehört.",
      ],
      image: image(
        "/images/terrace-glass-detail.webp",
        "Essplatz mit transparenten Glaswänden und Blick in den Garten",
      ),
      caption: "Gläserner Seitenabschluss am Essplatz · KLOTZ-Produktgalerie",
    },
    planning: [
      {
        title: "Vorhandenes Dach prüfen",
        text: "Tragwerk, Abmessungen und geeignete Befestigungspunkte bestimmen die Möglichkeiten der Ergänzung.",
      },
      {
        title: "Bodenanschlüsse abstimmen",
        text: "Belag, Höhe, Schienenführung und Wasserführung werden gemeinsam betrachtet.",
      },
      {
        title: "Öffnungen sinnvoll setzen",
        text: "Planen Sie die genutzten Durchgänge und die Parkposition der Glasfelder passend zu Möbeln und Wegen.",
      },
      {
        title: "Komfort vollständig denken",
        text: "Sonnenschutz, Luftaustausch, Reinigung und die spätere Bedienung gehören zur Entscheidung.",
      },
    ],
    costs: {
      lead: "Der Aufwand ergibt sich nicht allein aus der Glasfläche. Anzahl und Bewegung der Elemente sowie die Anschlüsse an Dach und Boden sind ebenso wichtig. Beim Bestand klärt erst die Prüfung, welche Anpassungen sinnvoll und erforderlich sind.",
      factors: [
        "Breite, Höhe und Anzahl der beweglichen Glasfelder",
        "Schienen, Profile, Öffnungsart und Anschlussdetails",
        "Anpassungen am Bestand und vereinbarte Montagearbeiten",
      ],
    },
    faq: [
      {
        question:
          "Kann jede Terrassenüberdachung mit Glaswänden ergänzt werden?",
        answer:
          "Nein. Das vorhandene Dach muss für die gewünschte Ergänzung geeignet sein. Konstruktion, Anschlusspunkte und Bodenaufbau werden geprüft. Hilfreich sind Fotos, Maße und vorhandene Produktunterlagen; eine verbindliche Beurteilung ersetzt das noch nicht.",
      },
      {
        question: "Entsteht durch Glaswände automatisch ein Wintergarten?",
        answer:
          "Nein. Ein seitlicher Glasabschluss kann eine geschütztere Terrasse oder einen Sommergarten schaffen. Ein beheizter Wohnraum stellt zusätzliche Anforderungen an die gesamte Konstruktion. Sprechen Sie die gewünschte Nutzung ausdrücklich an.",
      },
      {
        question: "Wie viel lässt sich öffnen?",
        answer:
          "Das hängt von System, Feldaufteilung und der vorgesehenen Parkposition der Elemente ab. Die Öffnungsbreite und die nutzbaren Durchgänge werden für die gewählte Ausführung geplant. Vergleichen Sie die Bewegung anhand Ihrer tatsächlichen Wege.",
      },
      {
        question: "Sind die Bodenschienen barrierefrei?",
        answer:
          "Das hängt vom System und vom Bodenanschluss ab. Nennen Sie uns besondere Anforderungen an den Durchgang früh im Beratungsgespräch – dann planen wir den Übergang so schwellenarm wie möglich.",
      },
      {
        question: "Welche Angaben helfen bei einer Anfrage zur Nachrüstung?",
        answer:
          "Zeigen Sie das Dach von außen und innen, die gewünschte Seite und den Bodenanschluss. Wenn vorhanden, ergänzen Sie Herstellerunterlagen und ungefähre Maße. KLOTZ kann damit den Einstieg vorbereiten und die notwendigen Prüfungen für Ihr Vorhaben abstimmen.",
      },
    ],
    related: [
      "sommer-wintergaerten",
      "terrassenueberdachungen",
      "sonnenschutz",
    ],
    guideSlug: "sommergarten-oder-wintergarten",
    requestMessage:
      "Ich möchte meine überdachte Terrasse mit Glasschiebewänden ergänzen. Bitte prüfen Sie mit mir die Möglichkeiten und die passende Ausführung.",
    sourceRefs: [
      `${base}/produkte/glasschiebe-faltw%C3%A4nde`,
      ...companySources,
    ],
    status: "draft",
  },
  {
    slug: "sonnenschutz",
    title: "Sonnenschutz",
    metaTitle: "Markisen & Sonnenschutz in Merseburg",
    metaDescription:
      "Angenehmer Schatten für Terrasse und Glasdach: Markisen und Sonnenschutz mit KLOTZ planen. Beratung, Aufmaß und Montage aus Merseburg-Meuschau.",
    hero: {
      title: "Sonnenschutz.",
      accent: "Draußen gern bleiben.",
      lead: "Der schönste Sommerplatz braucht nicht möglichst viel Sonne, sondern den passenden Schatten zur richtigen Zeit. Mit einer Markise oder einer auf Ihr Dach abgestimmten Beschattung wird die Terrasse zu einem angenehmeren Aufenthaltsort – passend zu Ausrichtung, Architektur und Ihrem Alltag.",
      cta: "Meinen Sonnenschutz finden",
    },
    media: terraceMedia.sonnenschutz,
    gallery: terraceGalleries["sonnenschutz"]!,
    benefits: [
      {
        title: "Schatten am richtigen Ort",
        text: "Ausrichtung und Sonnenlauf helfen, die Beschattung dort zu planen, wo Sie tatsächlich sitzen.",
      },
      {
        title: "Textile Gestaltung",
        text: "Tuch und Konstruktion prägen die Terrasse. Ihre Farbwirkung wird zusammen mit Fassade und Garten betrachtet.",
      },
      {
        title: "Bedienung für den Alltag",
        text: "Manuelle oder elektrische Möglichkeiten werden anhand der Ausführung und Ihrer Wünsche abgestimmt.",
      },
    ],
    story: {
      title: "Welche Sonne möchten Sie genießen?",
      paragraphs: [
        "Am Morgen ist sie willkommen, am Nachmittag kann derselbe Sitzplatz zu warm sein. Deshalb beginnt guter Sonnenschutz mit der Frage, wann Sie Ihre Terrasse nutzen. Ebenso wichtig ist der Blick nach innen: Welche Zimmer liegen hinter der beschatteten Fläche und wie soll dort das Tageslicht wirken?",
        "KLOTZ verbindet diese Wünsche mit der Einbausituation. Eine Markise an der Hauswand hat andere Voraussetzungen als die Beschattung eines vorhandenen Glasdachs. Wenn tiefer Sonnenstand stört, kann ein seitlicher Ansatz sinnvoll sein. Die passende Richtung entsteht aus dem Zusammenspiel von Sonnenverlauf, Befestigung und gewünschter Offenheit.",
      ],
    },
    variants: [
      {
        title: "Markise an der Fassade",
        description:
          "Eine ausfahrbare textile Fläche beschattet den Sitzbereich vor dem Haus. Befestigung, Ausladung und die passende Bedienung müssen auf die Wand und die gewünschte Fläche abgestimmt werden.",
        suitable: "Für einen variablen Schattenplatz an der Hausseite.",
      },
      {
        title: "Beschattung am Glasdach",
        description:
          "Unter einer transparenten Überdachung ist die Wirkung der Sonne besonders wichtig. Welche Beschattung am gewählten oder vorhandenen Dach möglich ist, hängt von System und Anschlüssen ab.",
        suitable: "Für mehr sommerlichen Komfort unter einer Überdachung.",
      },
      {
        title: "Seitlicher Sonnen- und Sichtschutz",
        description:
          "Bei tief stehender Sonne reicht ein Schutz von oben nicht immer aus. Seitliche Lösungen können die Planung ergänzen; dabei werden Blickbeziehungen und Offenheit bewusst abgewogen.",
        suitable: "Für seitlichen Sonneneinfall und gewünschte Privatsphäre.",
      },
    ],
    detail: {
      title: "Das Tuch ist sichtbar. Die Befestigung entscheidend.",
      paragraphs: [
        "Farbe und Stoffwirkung fallen zuerst auf. Für eine passende Lösung müssen aber auch die dahinterliegenden Voraussetzungen stimmen: Fassadenaufbau, Montagehöhe, nutzbarer Bewegungsraum und die Lage möglicher Anschlüsse.",
        "Besprechen Sie außerdem den Umgang mit Wind und Wetter. Wir erklären Ihnen Bedienung und mögliche Wind- und Sonnensteuerung passend zu Ihrer Ausführung. So können Sie Ihren Sonnenschutz im Alltag bewusst und nach den zugehörigen Vorgaben nutzen.",
      ],
      image: image(
        "/images/terrace-shade-detail.webp",
        "Ausgefahrene Markise über einem Sitzbereich an einer Backsteinfassade",
      ),
      caption: "Markise am Haus · weiteres Motiv aus der KLOTZ-Markisengalerie",
    },
    planning: [
      {
        title: "Nutzungszeiten erkennen",
        text: "Notieren Sie, wann die Sonne stört und welche Fläche beschattet werden soll.",
      },
      {
        title: "Fassade oder Dach prüfen",
        text: "Befestigungspunkte, Montagehöhe und vorhandene Konstruktion bilden die Grundlage der Systemwahl.",
      },
      {
        title: "Bedienung festlegen",
        text: "Komfortwünsche und mögliche elektrische Anschlüsse werden gemeinsam betrachtet.",
      },
      {
        title: "Tuch und Wirkung auswählen",
        text: "Farbe, Lichtwirkung und gestalterische Verbindung zum Haus gehören zur persönlichen Beratung.",
      },
    ],
    costs: {
      lead: "Ein passender Sonnenschutz wird für die gewünschte Fläche und ihre Befestigung geplant. Ein Preisvergleich ist erst dann sinnvoll, wenn Tuch, Konstruktion, Bedienung und Montageumfang klar benannt sind.",
      factors: [
        "Beschattete Fläche, Bauart und Tuchauswahl",
        "Bedienung, Antrieb und mögliche Steuerungsoptionen",
        "Befestigung, Anschlüsse und Montagezugang",
      ],
    },
    faq: [
      {
        question: "Welche Markise passt zu meiner Terrasse?",
        answer:
          "Entscheidend sind die gewünschte Schattenfläche, die Ausrichtung und die Befestigungsmöglichkeiten an der Fassade. Auch die Zeit, zu der Sie draußen sitzen, spielt eine Rolle. Fotos und ungefähre Maße helfen KLOTZ, das erste Gespräch konkret vorzubereiten.",
      },
      {
        question: "Lässt sich ein bestehendes Glasdach nachrüsten?",
        answer:
          "Das kann möglich sein, muss aber für das vorhandene Dach geprüft werden. Konstruktion, Befestigungspunkte und verfügbarer Platz bestimmen die Möglichkeiten. Unterlagen und Fotos der Überdachung helfen bei der Einordnung.",
      },
      {
        question: "Ist eine elektrische Bedienung möglich?",
        answer:
          "Das hängt von der gewählten Ausführung ab. Besprechen Sie Ihren Komfortwunsch und die vorhandene Stromversorgung beim Einstieg. Welche Antriebe oder Steuerungen angeboten werden, wird für das konkrete System abgestimmt.",
      },
      {
        question: "Schützt eine Markise auch bei jedem Regen und Wind?",
        answer:
          "Nein. Die Nutzungsmöglichkeiten und Grenzen richten sich nach der konkreten Ausführung und den Herstellervorgaben. Wenn umfassender Wetterschutz Ihr Hauptziel ist, lohnt sich der Vergleich mit einem Terrassendach oder einem anderen dafür geeigneten System.",
      },
      {
        question: "Kann ich Tuch und Farbe passend zum Haus wählen?",
        answer:
          "Die gestalterische Abstimmung gehört zur Beratung. Betrachten Sie Tuchwirkung, Fassade und Garten gemeinsam. Die aktuell verfügbaren Stoffe, Farben und Ausführungen werden für Ihr Vorhaben geklärt; eine Produktabbildung allein legt die spätere Bemusterung nicht fest.",
      },
    ],
    related: ["terrassenueberdachungen", "pergolen", "lamellendaecher"],
    guideSlug: "lamellendach-oder-glasdach",
    requestMessage:
      "Ich suche Sonnenschutz für meine Terrasse oder mein Glasdach. Bitte beraten Sie mich zu einer passenden Markise oder Beschattung.",
    sourceRefs: [
      `${base}/markiesen`,
      `${base}/portfolio/sicht-sonnenschutz`,
      ...companySources,
    ],
    status: "draft",
  },
];
