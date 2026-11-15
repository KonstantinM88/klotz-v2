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
    title: "Lamellendach & Pergola in Merseburg: Preise und Montage",
    shortTitle: "Lamellendach & Pergola",
    eyebrow: "Terrasse & Garten",
    excerpt:
      "Lamellendach ab 5.999 €, Pergola ab 4.999 €: zwei Wege zu mehr Zeit draußen – zu sehen in unserer Ausstellung in Meuschau, geplant und montiert von KLOTZ.",
    lead: "Schatten am Mittag, lange Abende auf der Terrasse: Mit einem Lamellendach oder einer Pergola wird Ihre Terrasse zu einem Platz, den Sie öfter und länger nutzen. KLOTZ berät Sie, misst vor Ort auf und montiert mit eigenem Team.",
    answer:
      "Ein Lamellendach mit 3,0 × 3,0 m gibt es bei KLOTZ ab 5.999 €, eine Pergola in gleicher Größe ab 4.999 €. In unserer Innen- und Außenausstellung in Merseburg-Meuschau sehen Sie Ausführungen im Original. Ihren verbindlichen Preis erhalten Sie nach dem Aufmaß vor Ort – inklusive Montage und allem, was dazugehört.",
    metaTitle: "Lamellendach & Pergola Merseburg: Preise & Montage",
    metaDescription:
      "Lamellendach ab 5.999 €, Pergola ab 4.999 € (3 × 3 m). Beratung in der Ausstellung Merseburg-Meuschau, Aufmaß, Montage und Service von KLOTZ.",
    priceSummary: "Lamellendach ab 5.999 € · Pergola ab 4.999 €",
    inquiryTopic: "Terrasse & Garten",
    sections: [
      {
        id: "dachwahl",
        title: "Lamellendach oder Pergola: Was passt zu Ihrer Terrasse?",
        paragraphs: [
          "Das Lamellendach ist die Lösung für alle, die Licht und Schatten selbst bestimmen möchten. Über verstellbare Lamellen regeln Sie, wie viel Sonne auf die Terrasse fällt: morgens offen für die ersten Strahlen, mittags geschlossen für angenehmen Schatten.",
          "Die Pergola ist die offenere, leichtere Variante und der günstigere Einstieg. Sie gibt Ihrer Terrasse einen klaren architektonischen Rahmen. Welche Bedachung und welcher Sonnenschutz dazu passen, besprechen wir mit Ihnen anhand Ihrer Terrasse.",
          "Unser Tipp: Denken Sie an Ihre Lieblingszeiten draußen – Frühstück in der Morgensonne, Lesen am Nachmittag, Abende mit Familie und Freunden. Daraus ergibt sich meist schnell, welche Lösung zu Ihnen passt.",
        ],
      },
      {
        id: "ausstellung",
        title:
          "Ansehen, vergleichen, entscheiden: unsere Ausstellung in Meuschau",
        paragraphs: [
          "Ein Dach für die Terrasse wählt man nicht nach einem Katalogbild. Deshalb zeigt KLOTZ am Firmensitz in der Straße Zur Saale 16 eine Innen- und Außenausstellung. Hier sehen Sie Ausführungen im Original, vergleichen Oberflächen, prüfen Farben im Tageslicht und klären Ihre Fragen direkt am Beispiel.",
          "Die Ausstellung ist montags bis freitags von 7:00 bis 16:00 Uhr geöffnet, gern auch nach Vereinbarung. Einen ersten Eindruck bekommen Sie vorab im virtuellen Rundgang.",
        ],
        link: {
          label: "Virtueller Rundgang durch die Ausstellung",
          href: "https://klotz.virtiv.de/vtour/",
        },
      },
      {
        id: "preis",
        title: "Was den Preis Ihres Terrassendachs bestimmt",
        paragraphs: [
          "Die Ab-Preise gelten für eine Anlage mit 3,0 × 3,0 m. Ihr Preis richtet sich nach Größe, Ausstattung und Einbausituation: ob das Dach an der Hauswand angeschlossen wird oder frei steht, welche Farbe Sie wählen und ob Sie elektrische Bedienung, Beleuchtung oder Seitenbeschattung wünschen.",
          "Beim Aufmaß klären wir auch Fundamente, Wasserableitung und Stromanschluss. So steht in Ihrem Angebot von Anfang an alles, was Ihr Projekt braucht – nachvollziehbar Position für Position.",
        ],
      },
      {
        id: "erweiterung",
        title: "Heute planen, später erweitern",
        paragraphs: [
          "Vielleicht soll aus dem Dach später mehr werden: Glasschiebewände, Seitenbeschattung oder Licht. Sagen Sie es uns gleich beim ersten Gespräch. Dann wählen wir ein System und eine Konstruktion, die diese Erweiterung vorsehen.",
          "Ob für Ihr Terrassendach eine Genehmigung nötig ist, hängt von Bundesland, Gemeinde und Ausführung ab. Worauf Sie achten sollten, besprechen wir beim Aufmaß; verbindlich entscheidet die zuständige Bauaufsicht.",
        ],
      },
      {
        id: "ablauf",
        title: "Aus einer Hand: von der Beratung bis zur Abnahme",
        paragraphs: [
          "Bei KLOTZ bleibt Ihr Projekt in einer Hand: Fachberatung, Aufmaß vor Ort, Angebot, Montage durch unsere eigenen Monteure und die gemeinsame Bauabnahme. Unser 13-köpfiges Team aus Fachberatern, technischen Sachbearbeitern, Monteuren und einem Auszubildenden arbeitet dafür Hand in Hand.",
          "Auch nach der Montage sind wir für Sie da: Wartung und Instandsetzung gehören zu unseren Leistungen. Der Name KLOTZ ist in der Region seit Jahrzehnten bekannt. Von Merseburg aus betreuen wir Projekte in Halle (Saale), Leipzig, im Saalekreis und Burgenlandkreis sowie in Weimar, Erfurt, Jena und Gera.",
        ],
      },
    ],
    checklist: [
      "Projektort und ungefähre Maße der Terrasse (Breite × Tiefe)",
      "Zwei, drei Fotos von Terrasse und Hauswand",
      "Ihre Lieblingszeiten draußen – daraus ergibt sich die passende Lösung",
      "Wünsche wie Licht, elektrische Bedienung oder Seitenelemente",
      "Ihr Wunschzeitraum für die Montage",
    ],
    faq: [
      {
        question: "Was kostet ein Lamellendach bei KLOTZ?",
        answer:
          "Ein Lamellendach mit 3,0 × 3,0 m gibt es ab 5.999 €, eine Pergola in gleicher Größe ab 4.999 €. Das sind Produktpreise ohne Montage. Ihren verbindlichen Gesamtpreis – inklusive Montage und allem, was Ihr Projekt braucht – erhalten Sie nach dem Aufmaß vor Ort.",
      },
      {
        question: "Übernimmt KLOTZ auch die Montage?",
        answer:
          "Ja. Aufmaß, Montage und Bauabnahme übernimmt KLOTZ mit eigenen Monteuren. Von der Planung bis zum Einbau werden Sie aus einer Hand betreut – und auch danach, wenn Wartung oder eine Instandsetzung ansteht.",
      },
      {
        question: "Kann ich mir Ausführungen vorher ansehen?",
        answer:
          "Ja. In unserer Innen- und Außenausstellung in Merseburg-Meuschau, Zur Saale 16, sehen Sie Ausführungen im Original. Geöffnet ist montags bis freitags von 7:00 bis 16:00 Uhr oder nach Vereinbarung. Einen ersten Eindruck gibt der virtuelle Rundgang.",
      },
      {
        question: "Kann ich das Dach später mit Glaswänden schließen?",
        answer:
          "Wenn Sie das von Anfang an wünschen, planen wir es mit ein: Wir wählen ein System, das Glasschiebewände oder Seitenbeschattung vorsieht, und legen Konstruktion und Anschlüsse entsprechend aus.",
      },
      {
        question: "Brauche ich eine Genehmigung für ein Terrassendach?",
        answer:
          "Das hängt von Bundesland, Gemeinde, Größe und Lage ab. Die wichtigsten Punkte haben wir in unserem Ratgeber zusammengefasst. Verbindliche Auskunft gibt die zuständige Bauaufsicht; gern sprechen wir das Thema beim Aufmaß mit an.",
      },
      {
        question: "In welcher Region montiert KLOTZ?",
        answer:
          "Von unserem Standort in Merseburg-Meuschau aus sind wir in Halle (Saale), Leipzig, im Saalekreis und Burgenlandkreis sowie in Weimar, Erfurt, Jena und Gera im Einsatz.",
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
      {
        label: "Genehmigung für die Terrassenüberdachung",
        href: "/wissen/genehmigung-terrassenueberdachung",
      },
      {
        label: "Anfahrt zur Ausstellung",
        href: "/kontakt",
      },
    ],
    sources: [
      {
        title: "KLOTZ: Lamellendach",
        url: "https://www.klotz.mobi/lamellendach",
      },
      {
        title: "KLOTZ: Terrassenüberdachungen",
        url: "https://www.klotz.mobi/portfolio/terrassenueberdachung",
      },
      {
        title: "KLOTZ: Über uns",
        url: "https://www.klotz.mobi/ueber-uns",
      },
      {
        title: "KLOTZ: Kontakt und Öffnungszeiten",
        url: "https://www.klotz.mobi/kontakt",
      },
      {
        title: "Virtueller Rundgang durch die Ausstellung",
        url: "https://klotz.virtiv.de/vtour/",
      },
    ],
  },
  {
    id: "angebote-zaun-tor-2026",
    slug: "zaeune-tore",
    kind: "products",
    title: "Zaun & Tor in Merseburg: Preise und Montage",
    shortTitle: "Zaun & Tor",
    eyebrow: "Grundstück & Zugang",
    excerpt:
      "Doppelstabmattenzaun ab 59 €/lfm, WPC-Sichtschutz ab 180 €/lfm, Hoftore ab 2.888 €: Zaun und Zufahrt aus einer Hand – vom Aufmaß bis zur Montage.",
    lead: "Ein Zaun, der zum Haus passt, Sichtschutz für den Garten und eine Einfahrt, die sich bequem öffnet: KLOTZ plant Ihren Grundstücksabschluss, misst vor Ort auf und montiert mit eigenem Team.",
    answer:
      "Den Doppelstabmattenzaun gibt es bei KLOTZ ab 59 €, den WPC-Sichtschutzzaun ab 180 € pro laufendem Meter. Hoftore beginnen bei 2.888 € (Schmiedeeisen, 3,5 × 1,2 m) und 4.399 € (mit Paneelen, 3,4 × 1,6 m), das Komplettpaket aus Alu-Zaun, Pforte und elektrischem Flügeltor bei 7.999 €. Ihren verbindlichen Preis erhalten Sie nach dem Aufmaß vor Ort – inklusive Montage und allem, was dazugehört.",
    metaTitle: "Zaun, Sichtschutz & Hoftor Merseburg: Preise",
    metaDescription:
      "Doppelstabmattenzaun ab 59 €/lfm, WPC-Sichtschutz ab 180 €/lfm, Hoftore ab 2.888 €. Beratung in Merseburg-Meuschau, Aufmaß und Montage von KLOTZ.",
    priceSummary: "Zaun ab 59 €/lfm · Sichtschutz ab 180 €/lfm",
    inquiryTopic: "Zaun & Tor",
    sections: [
      {
        id: "grundstueck",
        title: "Sichtschutz, Abgrenzung oder bequeme Zufahrt?",
        paragraphs: [
          "Am Anfang steht die Frage, was Ihr Zaun leisten soll: die Grenze klar markieren, die Terrasse vor Blicken schützen oder die Einfahrt komfortabel machen. Oft ist es eine Kombination – ein offener Zaun zur Straße, Sichtschutz am Sitzplatz und ein Hoftor für das Auto.",
          "Denken Sie dabei an Ihren Alltag: Wo kommen Mülltonnen und Fahrräder hinaus, wo parkt das Auto, wo soll ein separates Gartentor hin? Und an die Optik – Farbe und Material sollten zu Haus, Fassade und vorhandenen Mauern passen.",
        ],
      },
      {
        id: "material",
        title:
          "Doppelstabmatten, WPC oder Aluminium: die Materialien im Überblick",
        paragraphs: [
          "Der Doppelstabmattenzaun ist die klassische, transparente Lösung und der günstigste Einstieg. WPC-Sichtschutz schirmt Garten und Terrasse ab und bringt eine wohnliche Holzoptik. Aluminium steht für eine moderne, klare Linie – zum Beispiel im Komplettpaket mit Pforte und elektrischem Flügeltor.",
          "Welche Höhe, welche Pfosten und welche Abschlüsse zu Ihrem Grundstück passen, legen wir beim Aufmaß fest. Ausführungen im Original sehen Sie vorher in unserer Innen- und Außenausstellung in Meuschau.",
        ],
      },
      {
        id: "torplanung",
        title:
          "Hoftor und elektrische Toranlage: bequem und sicher ins Grundstück",
        paragraphs: [
          "Ein Hoftor muss zur Zufahrt passen: Ein Flügeltor braucht Platz zum Öffnen, ein Schiebetor seitlichen Raum. Beim Termin vor Ort schauen wir uns Gefälle, Stellfläche und Laufwege an und empfehlen die Torart, die in Ihrem Alltag funktioniert.",
          "Soll das Tor elektrisch öffnen, planen wir Antrieb, Stromanschluss und Sicherheitseinrichtungen gleich mit. Und weil Wartung und Instandsetzung zu unseren Leistungen gehören, bleiben wir auch nach der Montage Ihr Ansprechpartner für die Toranlage.",
        ],
      },
      {
        id: "montage",
        title: "Aus einer Hand: Aufmaß, Montage und Abnahme",
        paragraphs: [
          "Gelände, Boden und vorhandene Fundamente bestimmen den Aufwand. Deshalb klären wir beim Aufmaß auch Grenzverlauf, Erdarbeiten und den Umgang mit dem alten Zaun – und ob für Höhe oder Lage örtliche Vorgaben gelten. In Ihrem Angebot steht dann alles, was Ihr Projekt braucht, nachvollziehbar Position für Position.",
          "Montiert wird von unseren eigenen Monteuren, die Bauabnahme machen wir gemeinsam mit Ihnen. Von Merseburg aus betreuen wir Projekte in Halle (Saale), Leipzig, im Saalekreis und Burgenlandkreis sowie in Weimar, Erfurt, Jena und Gera.",
        ],
      },
    ],
    checklist: [
      "Ungefähre Zaunlänge und gewünschte Höhe",
      "Breite der Einfahrt und gewünschte Torart",
      "Fotos von Grundstücksgrenze, Gefälle und vorhandenen Pfosten",
      "Wo Sichtschutz gewünscht ist – und wo Durchblick",
      "Wunsch nach elektrischem Antrieb und vorhandener Stromanschluss",
    ],
    faq: [
      {
        question: "Was kostet ein Zaun pro Meter bei KLOTZ?",
        answer:
          "Der Doppelstabmattenzaun beginnt bei 59 €, der WPC-Sichtschutzzaun bei 180 € pro laufendem Meter – also je Meter Zaunlänge. Höhe, Pfosten und Abschlüsse legen wir beim Aufmaß fest. Ihren verbindlichen Preis inklusive Montage erhalten Sie danach.",
      },
      {
        question: "Was ist im Alu-Zaun-Paket ab 7.999 € enthalten?",
        answer:
          "Das Paket umfasst Alu-Zaun, Pforte und ein elektrisches Flügeltor. Welche Länge und Torbreite für Ihr Grundstück passen, klären wir beim Termin vor Ort.",
      },
      {
        question: "Kann ein vorhandenes Tor elektrisch nachgerüstet werden?",
        answer:
          "Das prüfen wir gern vor Ort: Zustand, Beschläge und Bewegung des Tores entscheiden, ob sich ein Antrieb nachrüsten lässt. Danach sagen wir Ihnen, ob Nachrüsten oder ein neues Tor die bessere Lösung ist.",
      },
      {
        question: "Kann ich mir Zäune und Tore vorher ansehen?",
        answer:
          "Ja. In unserer Innen- und Außenausstellung in Merseburg-Meuschau, Zur Saale 16, sehen Sie Ausführungen im Original. Geöffnet ist montags bis freitags von 7:00 bis 16:00 Uhr oder nach Vereinbarung. Einen ersten Eindruck gibt der virtuelle Rundgang.",
      },
      {
        question: "Welche Angaben braucht KLOTZ für ein Angebot?",
        answer:
          "Für den Anfang genügen Projektort, ungefähre Länge und Höhe des Zauns, die Breite der Einfahrt und ein paar Fotos. Alles Weitere klären wir beim Aufmaß.",
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
      {
        label: "Anfahrt zur Ausstellung",
        href: "/kontakt",
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
      {
        title: "KLOTZ: Über uns",
        url: "https://www.klotz.mobi/ueber-uns",
      },
      {
        title: "KLOTZ: Kontakt und Öffnungszeiten",
        url: "https://www.klotz.mobi/kontakt",
      },
    ],
  },
  {
    id: "angebote-fenster-tueren-2026",
    slug: "fenster-tueren",
    kind: "products",
    title: "Fenster & Türen in Merseburg: Preise und Einbau",
    shortTitle: "Fenster & Türen",
    eyebrow: "Modernisieren & gestalten",
    excerpt:
      "Fenster ab 250 €/m², Aluminium-Haustür ab 2.900 €, Rollladen ab 199 €: sechs Angebote für Ihr Zuhause – beraten, aufgemessen und eingebaut von KLOTZ.",
    lead: "Neue Fenster, eine neue Haustür oder Rollläden verändern den Alltag im Haus spürbar. KLOTZ berät Sie, misst vor Ort auf und baut mit eigenem Team ein – und ist auch danach für Wartung und Instandsetzung da.",
    answer:
      "Kunststofffenster mit 3-fach-Verglasung gibt es bei KLOTZ ab 250 € pro Quadratmeter, eine Aluminium-Haustür (1,1 × 2,1 m) ab 2.900 € und Rollläden ab 199 € pro Stück. Dazu kommen Vordach, Innentür und Garagen-Sektionaltor. Die Aktion gilt bis 31. Dezember 2026. Ihren verbindlichen Preis erhalten Sie nach dem Aufmaß vor Ort – inklusive Einbau und allem, was dazugehört.",
    metaTitle: "Fenster & Haustüren Merseburg: Preise & Montage",
    metaDescription:
      "Fenster ab 250 €/m², Haustür ab 2.900 €, Rollladen ab 199 €: Beratung in der Ausstellung Merseburg-Meuschau, Aufmaß und Einbau von KLOTZ.",
    priceSummary: "Fenster ab 250 €/m² · Haustür ab 2.900 €",
    inquiryTopic: "Fenster & Türen",
    sections: [
      {
        id: "bestand",
        title: "Reparieren oder erneuern? Wir schauen uns Ihren Bestand an",
        paragraphs: [
          "Nicht jedes klemmende Fenster muss gleich ausgetauscht werden. Weil zu KLOTZ auch Wartung und Instandsetzung gehören, prüfen wir zuerst Beschläge, Dichtungen und Zustand – und sagen Ihnen dann, ob eine Reparatur genügt oder ein neues Bauelement die bessere Wahl ist.",
          "Für die Auswahl zählen Ihre Prioritäten: leichte Bedienung, Ruhe, Sonnenschutz, Sicherheit oder die Optik der Fassade. Erzählen Sie uns, was Sie heute stört – daraus entsteht die passende Lösung.",
        ],
      },
      {
        id: "vergleich",
        title: "Fenster nach Fläche, Türen und Rollläden nach Stück",
        paragraphs: [
          "Der Fensterpreis ist ein Flächenpreis: ab 250 € pro Quadratmeter für Kunststofffenster mit 3-fach-Verglasung. Wie viele Quadratmeter Ihr Projekt umfasst, hängt von Größe, Teilung und Öffnungsart ab – beim Aufmaß rechnen wir das für jedes Fenster genau aus.",
          "Rollläden gibt es ab 199 € pro Stück. Für Haustür, Vordach, Innentür und Garagentor gelten die Ab-Preise für die jeweils genannte Größe. Ihre Maße und Ihre Wunschausstattung übernehmen wir direkt in Ihr Angebot.",
        ],
      },
      {
        id: "haustuer",
        title: "Ihre neue Haustür: ansehen, konfigurieren, entscheiden",
        paragraphs: [
          "Die Haustür ist die Visitenkarte Ihres Hauses. In unserer Innen- und Außenausstellung in Merseburg-Meuschau sehen Sie Ausführungen im Original und prüfen Oberflächen und Farben im Tageslicht.",
          "Wer vorab stöbern möchte, stellt sich seine Wunschtür im Haustürkonfigurator von KLOTZ zusammen. Das passende Vordach planen wir auf Wunsch gleich mit.",
        ],
        link: {
          label: "Zum Haustürkonfigurator",
          href: "/konfigurator#haustuer",
        },
      },
      {
        id: "einbau",
        title: "Sauberer Einbau aus einer Hand",
        paragraphs: [
          "Neue Fenster und Türen müssen zum Gebäude passen. Beim Aufmaß klären wir Laibungen, Anschlussfugen, Fensterbänke und Rollladenkästen und besprechen, wie Ausbau und Entsorgung der alten Elemente ablaufen. Wird die Gebäudehülle dichter, sprechen wir auch über das richtige Lüften.",
          "Den Einbau übernehmen unsere eigenen Monteure, die Bauabnahme machen wir gemeinsam mit Ihnen. Mehrere Bauteile – etwa Fenster mit Rollläden oder Haustür mit Vordach – planen wir als ein Projekt, damit die Arbeiten gut ineinandergreifen. Von Merseburg aus betreuen wir Projekte in Halle (Saale), Leipzig, im Saalekreis und Burgenlandkreis sowie in Weimar, Erfurt, Jena und Gera.",
        ],
      },
    ],
    checklist: [
      "Anzahl und ungefähre Maße der Fenster und Türen",
      "Fotos von innen und außen",
      "Was Sie heute stört: Zugluft, Lärm, schwergängige Beschläge",
      "Wünsche zu Öffnungsart, Sonnenschutz und Sicherheit",
      "Ihr Wunschzeitraum für den Einbau",
    ],
    faq: [
      {
        question: "Was kostet ein neues Fenster bei KLOTZ?",
        answer:
          "Kunststofffenster mit 3-fach-Verglasung gibt es ab 250 € pro Quadratmeter. Der Preis Ihres Fensters ergibt sich aus Größe, Teilung und Ausstattung. Ihren verbindlichen Preis inklusive Einbau erhalten Sie nach dem Aufmaß vor Ort.",
      },
      {
        question: "Was kostet eine neue Haustür?",
        answer:
          "Eine Aluminium-Haustür in 1,1 × 2,1 m gibt es ab 2.900 €. Ihre Wunschtür können Sie vorab im Haustürkonfigurator zusammenstellen und in unserer Ausstellung in Merseburg-Meuschau im Original ansehen.",
      },
      {
        question: "Lohnt sich eine Reparatur statt eines neuen Fensters?",
        answer:
          "Das hängt vom Zustand ab. Weil wir auch Wartung und Instandsetzung anbieten, prüfen wir zuerst, was sich reparieren lässt, und beraten Sie dann. Mehr dazu lesen Sie in unserem Ratgeber.",
      },
      {
        question: "Gibt es eine Förderung für neue Fenster?",
        answer:
          "Für förderfähige Maßnahmen an der Gebäudehülle ist eine BEG-Grundförderung von 15 Prozent möglich. Ob Ihr Vorhaben dazugehört, prüft eine Energieeffizienz-Expertin oder ein Experte. Alles Wichtige dazu finden Sie auf unserer Seite zur Förderung.",
      },
      {
        question: "Wie lange gilt die Aktion?",
        answer:
          "Die Aktion gilt bis zum 31. Dezember 2026. Die Ab-Preise gelten für das Produkt ohne Montage; Ihren verbindlichen Preis inklusive Einbau erhalten Sie nach dem Aufmaß vor Ort.",
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
      {
        label: "Förderung für Fenster und Türen",
        href: "/angebote/energetisch-sanieren-foerderung",
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
        title: "KLOTZ: Haustürkonfigurator",
        url: "https://konfigurator.klotz.mobi/",
      },
      {
        title: "Verbraucherzentrale: Fenster sanieren oder austauschen",
        url: "https://www.verbraucherzentrale.de/wissen/energie/energetische-sanierung/fenster-sanieren-oder-austauschen-darauf-sollten-sie-achten-13878",
      },
      {
        title: "KLOTZ: Über uns",
        url: "https://www.klotz.mobi/ueber-uns",
      },
    ],
  },
  {
    id: "angebote-terrassendach-carport-2026",
    slug: "terrassendach-carport",
    kind: "products",
    title: "Terrassendach & Carport in Merseburg: Preise und Montage",
    shortTitle: "Terrassendach & Carport",
    eyebrow: "Draußen mehr Raum",
    excerpt:
      "Terrassenüberdachung und Carport jeweils ab 3.999 €: geschützt draußen sitzen, trocken parken – geplant und montiert von KLOTZ.",
    lead: "Ein Dach über der Terrasse, ein trockener Stellplatz fürs Auto: Mit einer Überdachung gewinnen Sie Platz, den Sie auch bei Regen nutzen. KLOTZ plant beides passend zu Haus und Grundstück und montiert mit eigenem Team.",
    answer:
      "Eine Terrassenüberdachung mit 3,0 × 3,0 m gibt es bei KLOTZ ab 3.999 €, einen Carport mit 3,3 × 5,0 m ebenfalls ab 3.999 €. Die Aktion gilt bis 31. Dezember 2026. Ihren verbindlichen Preis erhalten Sie nach dem Aufmaß vor Ort – inklusive Montage und allem, was dazugehört.",
    metaTitle: "Terrassendach & Carport Merseburg: Preise & Montage",
    metaDescription:
      "Terrassenüberdachung (3 × 3 m) und Carport (3,3 × 5 m) jeweils ab 3.999 €. Beratung in Merseburg-Meuschau, Aufmaß und Montage von KLOTZ.",
    priceSummary: "Terrassendach und Carport jeweils ab 3.999 €",
    inquiryTopic: "Terrasse & Garten",
    sections: [
      {
        id: "nutzung",
        title: "Terrasse oder Stellplatz: Was soll Ihr Dach leisten?",
        paragraphs: [
          "Auf der Terrasse geht es ums Draußensein: ein trockener Platz für den Esstisch und ein fließender Übergang vom Wohnzimmer nach draußen. Wir planen das Dach so, dass Türen, Fenster und Licht im Haus gut zusammenspielen.",
          "Beim Carport stehen Auto, Einfahrt und Bewegungsraum im Mittelpunkt: Türen sollen sich bequem öffnen lassen, der Weg zum Haus kurz bleiben. Auf Wunsch denken wir Platz für Fahrräder oder Stauraum gleich mit.",
        ],
      },
      {
        id: "masse",
        title: "Ihr Dach nach Maß und nach Geschmack",
        paragraphs: [
          "Die Ab-Preise gelten für eine Terrassenüberdachung mit 3,0 × 3,0 m und einen Carport mit 3,3 × 5,0 m. Ist Ihre Terrasse breiter oder Ihr Stellplatz tiefer, nehmen wir beim Aufmaß Ihre Wunschmaße auf und berechnen Ihr Dach genau.",
          "Dachmaterial, Farbe und Ausstattung wählen Sie am besten im Original aus: In unserer Innen- und Außenausstellung in Merseburg-Meuschau vergleichen Sie Ausführungen direkt am Beispiel.",
        ],
      },
      {
        id: "baugrund",
        title: "Fundamente, Regenwasser, Hausanschluss: Wir klären das vor Ort",
        paragraphs: [
          "Ob das Dach an der Hauswand befestigt wird oder frei steht, wo die Stützen stehen und wohin das Regenwasser läuft – das klären wir beim Aufmaß. So steht in Ihrem Angebot von Anfang an alles, was Ihr Projekt braucht, nachvollziehbar Position für Position.",
          "Ob eine Genehmigung nötig ist, hängt von Bundesland, Gemeinde, Größe und Lage ab. Worauf Sie achten sollten, besprechen wir beim Termin; verbindlich entscheidet die zuständige Bauaufsicht.",
        ],
      },
      {
        id: "erweiterung",
        title: "Vom Terrassendach zum Sommergarten",
        paragraphs: [
          "Mit Glasschiebewänden kann aus einem Terrassendach später ein geschützter Sommergarten werden. Sagen Sie es uns gleich beim ersten Gespräch – dann wählen wir ein System und eine Konstruktion, die diese Erweiterung vorsehen.",
        ],
      },
      {
        id: "ablauf",
        title: "Aus einer Hand bis zur Abnahme",
        paragraphs: [
          "Fachberatung, Aufmaß, Angebot, Montage durch unsere eigenen Monteure und die gemeinsame Bauabnahme: Bei KLOTZ bleibt Ihr Projekt in einer Hand. Auch danach sind wir mit Wartung und Instandsetzung für Sie da.",
          "Der Name KLOTZ ist in der Region seit Jahrzehnten bekannt. Von Merseburg aus betreuen wir Projekte in Halle (Saale), Leipzig, im Saalekreis und Burgenlandkreis sowie in Weimar, Erfurt, Jena und Gera.",
        ],
      },
    ],
    checklist: [
      "Wofür das Dach gedacht ist: Terrasse, Auto oder beides",
      "Ungefähre Wunschmaße und eine kleine Skizze von Haus und Zufahrt",
      "Fotos von Hauswand, Untergrund und vorhandenem Pflaster",
      "Wünsche wie Beleuchtung, Beschattung oder Seitenwände",
      "Ihr Wunschzeitraum für die Montage",
    ],
    faq: [
      {
        question: "Was kostet eine Terrassenüberdachung bei KLOTZ?",
        answer:
          "Eine Terrassenüberdachung mit 3,0 × 3,0 m gibt es ab 3.999 €. Das ist der Produktpreis ohne Montage. Ihren verbindlichen Gesamtpreis – inklusive Montage und allem, was Ihr Projekt braucht – erhalten Sie nach dem Aufmaß vor Ort.",
      },
      {
        question: "Was kostet ein Carport?",
        answer:
          "Einen Carport mit 3,3 × 5,0 m gibt es ab 3.999 €. Andere Maße planen wir passend zu Ihrem Grundstück; den verbindlichen Preis inklusive Montage erhalten Sie nach dem Aufmaß.",
      },
      {
        question: "Übernimmt KLOTZ auch die Montage?",
        answer:
          "Ja. Die Montage übernimmt KLOTZ mit eigenen Monteuren. Welche Fundamente und Anschlussarbeiten Ihr Grundstück braucht, klären wir beim Aufmaß und weisen sie in Ihrem Angebot nachvollziehbar aus.",
      },
      {
        question: "Kann aus dem Terrassendach später ein Sommergarten werden?",
        answer:
          "Wenn Sie das von Anfang an wünschen, planen wir es mit ein: Wir wählen ein System, das Glasschiebewände vorsieht, und legen Konstruktion und Anschlüsse entsprechend aus.",
      },
      {
        question: "Brauche ich eine Baugenehmigung?",
        answer:
          "Das hängt von Bundesland, Gemeinde, Größe und Lage ab. Die wichtigsten Punkte haben wir in unserem Ratgeber zusammengefasst. Verbindliche Auskunft gibt die zuständige Bauaufsicht; gern sprechen wir das Thema beim Aufmaß mit an.",
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
      {
        label: "Anfahrt zur Ausstellung",
        href: "/kontakt",
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
      {
        title: "KLOTZ: Über uns",
        url: "https://www.klotz.mobi/ueber-uns",
      },
      {
        title: "KLOTZ: Kontakt und Öffnungszeiten",
        url: "https://www.klotz.mobi/kontakt",
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
      "15 % BEG-Grundförderung für förderfähige Fenster und Außentüren: So bereiten Sie Ihr Vorhaben vor – mit KLOTZ und Ihrer Energieberatung.",
    lead: "Neue Fenster und Außentüren können staatlich gefördert werden. Damit das gelingt, gehören Maßnahme, Gebäude und Antrag von Anfang an zusammen – KLOTZ hilft Ihnen, Ihr Vorhaben gut vorzubereiten.",
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
        title: "Zuschuss und Angebot: wie beides zusammenhängt",
        paragraphs: [
          "Ein staatlicher Zuschuss wird über ein eigenes Verfahren beantragt und bezieht sich auf die förderfähigen Ausgaben. Unser Angebot beschreibt Bauteile und Arbeiten; die Ab-Preise auf unseren Angebotsseiten verstehen sich ohne Förderung. Beides lässt sich gut aufeinander abstimmen, wenn es von Anfang an zusammen geplant wird.",
        ],
      },
      {
        id: "zustand",
        title: "Zuerst die sinnvolle Maßnahme am Gebäude klären",
        paragraphs: [
          "Bei alten Fenstern oder Außentüren steht zunächst der Bestand im Mittelpunkt: Welche Bauteile sind beschädigt, was funktioniert noch und welche Anforderungen sollen künftig erfüllt werden? Weil Wartung und Instandsetzung zu unseren Leistungen gehören, prüfen wir auch, ob sich ein Bauteil reparieren lässt.",
          "Bei einem Austausch gehören Anschlüsse, Laibungen und Lüftung zum Gespräch. Die Auswahl eines Produktes allein beantwortet noch nicht, wie es sich in das bestehende Gebäude einfügt. KLOTZ bespricht mit Ihnen Bauelemente und Einbausituation; die energetische und förderrechtliche Bewertung übernimmt die dafür qualifizierte Energieberatung.",
        ],
      },
      {
        id: "foerderantrag",
        title: "Förderfähigkeit vor einer verbindlichen Beauftragung prüfen",
        paragraphs: [
          "Für Einzelmaßnahmen an der Gebäudehülle ist nach den offiziellen Informationen eine Energieeffizienz-Expertin oder ein Experte einzubeziehen. Lassen Sie dort das aktuell geltende Verfahren, die technischen Anforderungen und den richtigen Zeitpunkt für Antrag und Vertrag prüfen. Bedingungen können sich ändern.",
          "Bringen Sie vorhandene Unterlagen und ein zunächst klar abgegrenztes Vorhaben mit. Hilfreich sind die geplanten Bauteile, Fotos und die Beschreibung weiterer Sanierungsarbeiten. Die Energieberatung klärt, welche Nachweise und Vertragsbedingungen erforderlich sind.",
        ],
      },
      {
        id: "koordination",
        title: "Technisches Angebot und Förderprüfung aufeinander abstimmen",
        paragraphs: [
          "Halten Sie fest, welche Leistungen im Angebot stehen und welche Anforderungen für die Förderprüfung nachgewiesen werden sollen. Produktunterlagen, genaue Maße und ein abgegrenzter Montageumfang erleichtern die Abstimmung zwischen Auftraggebenden, Fachbetrieb und Energieberatung. Offene Punkte sollten vor der Entscheidung schriftlich geklärt sein.",
          "Gern strukturieren wir Ihr Fenster- oder Türenprojekt im ersten Gespräch – am Telefon, per WhatsApp oder in unserer Ausstellung in Merseburg-Meuschau. Von hier aus betreuen wir Vorhaben in Halle (Saale), Leipzig, im Saalekreis und Burgenlandkreis sowie in Weimar, Erfurt, Jena und Gera.",
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
          "Nein. Die Grundförderung ist an förderfähige Maßnahmen und die jeweils geltenden Voraussetzungen gebunden. Ob Ihr Vorhaben darunterfällt und auf welche Ausgaben sich ein Zuschuss beziehen kann, prüft die Energieberatung individuell.",
      },
      {
        question: "Ersetzt KLOTZ die unabhängige Energieberatung?",
        answer:
          "Nein. KLOTZ ist Ihr Fachbetrieb für Fenster, Türen und den Einbau. Für die energetische Beurteilung und das Förderverfahren binden Sie eine zugelassene Energieeffizienz-Expertin oder einen Experten ein. Maße und Produktangaben für diese Prüfung besprechen wir gern mit Ihnen.",
      },
      {
        question: "Gilt Förderung pauschal auch für Rollläden und Garagentore?",
        answer:
          "Eine pauschale Aussage ist nicht möglich: Maßnahme, Gebäude und technische Voraussetzungen müssen zum konkreten Programm passen. Lassen Sie jede geplante Maßnahme einzeln von der Energieberatung einordnen.",
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
      updatedAt: "2026-11-04",
      sourcePriceDate:
        definition.kind === "funding"
          ? "Förderinformationen geprüft: 03.11.2026"
          : "KLOTZ-Aktion 2026",
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
          "Gestaltungsbeispiel. Ausführungen im Original sehen Sie in unserer Ausstellung in Merseburg-Meuschau.",
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
          title: "KLOTZ: aktuelle Angebote",
          url: campaignAssets.sourcePage,
        },
        ...definition.sources,
      ],
    };
  }),
);
