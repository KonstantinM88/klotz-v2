import type { BusinessServiceContent } from "@/domain/content/business";
import { businessMedia, businessWorkMedia } from "./business-media";
import { serviceImage } from "./service-images";

const company = "https://www.klotz.mobi/ueber-uns";
const contact = "https://www.klotz.mobi/kontakt";
const service = "https://www.klotz.mobi/portfolio/wartung-service";
const gate = "https://www.klotz.mobi/produkte/stahlhoftore";
const hospitality =
  "https://www.klotz.mobi/inspirationen-f%C3%BCr-die-hotellerie-gastronomiebranche";
const dguv =
  "https://www.dguv.de/fbhl/sachgebiete/bauliche-einrichtungen-handel/fenster-tueren-tore/fachwissen-fachfragen/pruefung-an-tueren-und-toren/index.jsp";

export const businessServicePages: BusinessServiceContent[] = [
  {
    slug: "wohnungswirtschaft",
    title: "Wohnungswirtschaft & Hausverwaltungen",
    audience: "Für Wohnungsgesellschaften & Hausverwaltungen",
    overview:
      "Fenster, Türen und Außenanlagen im Bestand: den Bedarf je Objekt erfassen, Reparatur und Erneuerung abwägen und den Zugang mit den Menschen vor Ort abstimmen.",
    metaTitle: "Bauelemente für Hausverwaltungen & Wohnungswirtschaft",
    metaDescription:
      "Fenster, Türen, Reparaturen und Außenanlagen für Ihren Wohnungsbestand. KLOTZ in Merseburg: Bestandsaufnahme, Aufmaß und abgestimmte Montage in der Region.",
    hero: {
      title: "Ihr Bestand.",
      accent: "Gezielt weitergedacht.",
      lead: "KLOTZ unterstützt Wohnungsgesellschaften und Hausverwaltungen bei Fenstern, Türen und Außenanlagen – von der einzelnen Reparatur bis zur abgestimmten Erneuerung. Im Mittelpunkt stehen der Zustand des Objekts, seine Bewohner und ein klar beschriebener Auftrag.",
      cta: "Mein Objekt besprechen",
    },
    media: businessMedia.wohnungswirtschaft,
    inquiryTopic: "Gewerbe / Wohnungswirtschaft",
    benefits: [
      {
        title: "Bedarf je Objekt",
        text: "Bauteile und Maßnahmen zuordnen, damit aus einzelnen Meldungen ein nachvollziehbarer Leistungsumfang wird.",
      },
      {
        title: "Bestand mit Augenmaß",
        text: "Reparatur, Teilersatz und Erneuerung anhand des vorhandenen Zustands gemeinsam einordnen.",
      },
      {
        title: "Zugang mitgedacht",
        text: "Ansprechpartner, Bewohner und nutzbare Montagebereiche früh in die Abstimmung einbeziehen.",
      },
    ],
    story: {
      title: "Gute Maßnahmen beginnen mit einem klaren Bild vom Gebäude.",
      paragraphs: [
        "Eine klemmende Wohnungstür, mehrere auffällige Fenster oder ein erneuerungsbedürftiger Zugang: Im Wohnungsbestand kommen sehr unterschiedliche Aufgaben zusammen. Für eine belastbare Entscheidung brauchen Sie eine Zuordnung zum Objekt, eine verständliche Beschreibung des Zustands und einen abgegrenzten Arbeitsumfang. Genau hier setzt das erste Gespräch mit KLOTZ an.",
        "Bringen Sie einzelne Meldungen oder eine vorhandene Objektliste mit. Wir besprechen, welche Elemente betroffen sind und welche Informationen für die weitere Beurteilung fehlen. Eine große Anzahl ähnlicher Fenster bedeutet beispielsweise noch nicht, dass alle dieselbe Reparatur benötigen. Zustand, Nutzung und Einbausituation werden am jeweiligen Bauteil betrachtet.",
        "Für Wohnungsgesellschaften und Hausverwaltungen verbindet KLOTZ Beratung, technische Vorbereitung und Montage. Für Ihr Vorhaben stimmen wir die nächsten Schritte auf das konkrete Gebäude ab: vom Aufmaß und Angebot bis zur vereinbarten Ausführung und Abnahme. Liegen bereits Objektlisten oder ein Leistungsverzeichnis vor, erwähnen Sie diese in Ihrer Anfrage. Gemeinsam klären wir, welche Angaben für die weitere Vorbereitung benötigt werden.",
      ],
    },
    variants: [
      {
        title: "Reparatur im Bestand",
        description:
          "Wenn ein Fenster schwer schließt, eine Dichtung auffällt oder ein Beschlag verschlissen ist, beginnt die Lösung mit dem Fehlerbild. Geeignete Reparaturmöglichkeiten und verfügbare Komponenten werden geprüft.",
        suitable:
          "Für einzelne Schadensmeldungen und gezielte Instandsetzung vorhandener Elemente.",
      },
      {
        title: "Fenster und Türen erneuern",
        description:
          "Beim Austausch zählen neben dem Element auch Anschlüsse, Öffnungsrichtung, Nutzung und der Umgang mit angrenzenden Flächen. Diese Punkte gehören in die Leistungsabgrenzung vor der Bestellung.",
        suitable:
          "Für geplante Maßnahmen an Wohnungen, Hauseingängen und gemeinschaftlich genutzten Bereichen.",
      },
      {
        title: "Außenanlagen ergänzen",
        description:
          "Zäune, Tore, Sichtschutz und Geländer beeinflussen Wege und Zugänge am Objekt. Verlauf, Befestigung und vorhandene Anlagen werden mit dem jeweiligen Einsatzbereich zusammen betrachtet.",
        suitable:
          "Für Grundstücksabschlüsse und Übergänge zwischen Gebäude und Außenraum.",
      },
    ],
    detail: {
      title: "Die Montage muss zum bewohnten Haus passen.",
      image: businessWorkMedia.image,
      caption: businessWorkMedia.caption,
      paragraphs: [
        "Ein bewohntes Gebäude braucht eine andere Vorbereitung als eine frei zugängliche Baustelle. Wer öffnet die Wohnung? Welche Bereiche müssen zugänglich sein? Gibt es feste Hausmeisterzeiten oder bereits andere Arbeiten? Diese Informationen helfen, einen sinnvollen Ablauf für die vereinbarte Maßnahme festzulegen.",
        "Benennen Sie eine zuständige Person für technische Rückfragen und die Freigabe des Angebots. Die Kommunikation mit Mietern, Eigentümern und weiteren Beteiligten wird auftragsbezogen vereinbart. So bleibt erkennbar, welche Abstimmungen die Verwaltung übernimmt und wo die Montage eine Rückmeldung benötigt.",
        "Auch die Übergänge verdienen Aufmerksamkeit: Demontage, Entsorgung, Anschlussarbeiten und die Wiederherstellung angrenzender Flächen sollten vorab beschrieben sein. Ob und in welchem Umfang diese Arbeiten zum Auftrag gehören, wird im Angebot geklärt. Ein gemeinsam besprochener Abschluss hilft, ausgeführte Leistungen und offene Punkte einzuordnen.",
      ],
    },
    planning: [
      {
        title: "Objekte zuordnen",
        text: "Projektort, Gebäudeabschnitt, betroffene Einheit und ungefähre Stückzahl nennen. Personenbezogene Mieterdaten werden für eine erste Einordnung nicht benötigt.",
      },
      {
        title: "Zustand zeigen",
        text: "Gesamtansicht, Detail und Fehlerbeschreibung zusammenstellen. Maße und bekannte Hersteller ergänzen, soweit vorhanden.",
      },
      {
        title: "Zugang klären",
        text: "Bewohnte Bereiche, Schlüsselübergabe, Ansprechpartner und mögliche Montageflächen besprechen.",
      },
      {
        title: "Auftrag abgrenzen",
        text: "Gewünschte Maßnahme, Zuständigkeit für Freigaben und Schnittstellen zu Putz, Maler- oder Elektroarbeiten festhalten.",
      },
    ],
    costs: {
      lead: "Ein Angebot für den Wohnungsbestand wird dann vergleichbar, wenn Leistungen und Objekte klar zugeordnet sind. Neben Stückzahl und Ausführung wirken sich Zugang, Zustand und ergänzende Arbeiten auf den Umfang aus. Ein Budgetrahmen kann bei der Priorisierung helfen; genaue Kosten entstehen aus der abgestimmten Maßnahme.",
      factors: [
        "Anzahl, Abmessungen und Zustand der Elemente",
        "Reparatur, Teilersatz oder vollständige Erneuerung",
        "Zutritt, Montagebedingungen und vereinbarte Abschnitte",
        "Demontage, Entsorgung und Anschlussarbeiten nach Vereinbarung",
      ],
    },
    brief: {
      title: "Ihre Objektanfrage kann klein anfangen.",
      items: [
        "Objekt oder Gebäudeabschnitt mit PLZ",
        "Betroffene Bauelemente und Fehlerbild",
        "Ungefähre Stückzahl, Fotos und bekannte Maße",
        "Zuständige Person und gewünschter Zeitraum",
      ],
    },
    responsibility: {
      title: "Das Ergebnis beginnt bei der Abstimmung.",
      text: "Für größere Bestände lassen sich die gewünschten Maßnahmen zunächst nach Objekt und Anlass ordnen. Ob mehrere Termine, Abschnitte oder weitere Unterlagen benötigt werden, wird im konkreten Gespräch vereinbart.",
    },
    productLinks: [
      {
        title: "Fenster im Bestand",
        text: "Materialien und Einbausituation verstehen.",
        href: "/fenster-tueren/fenster",
      },
      {
        title: "Türen und Eingänge",
        text: "Nutzung und Gestaltung gemeinsam planen.",
        href: "/fenster-tueren/haustueren",
      },
      {
        title: "Zäune und Zugänge",
        text: "Grundstück und Wege zusammen betrachten.",
        href: "/zaun-tor",
      },
    ],
    faq: [
      {
        question: "Können wir auch eine einzelne Reparatur anfragen?",
        answer:
          "Ja. Beschreiben Sie das betroffene Fenster, die Tür oder das Tor und nennen Sie den Projektort. Eine Einzelmeldung ist ebenso ein sinnvoller Einstieg wie eine Objektliste. Welche Arbeit möglich ist, hängt vom Zustand und den verfügbaren Teilen ab.",
      },
      {
        question: "Welche Angaben braucht KLOTZ zu unserem Wohnungsbestand?",
        answer:
          "Für den Einstieg genügen Objektort, betroffene Bauteile, ungefähre Stückzahl und Anlass der Maßnahme. Fotos oder vorhandene Listen helfen, den Bedarf zuzuordnen. Vollständige Mieterlisten und persönliche Unterlagen sind für die erste Anfrage nicht nötig.",
      },
      {
        question: "Wie wird der Zutritt zu bewohnten Wohnungen abgestimmt?",
        answer:
          "Zutritt, Ansprechpartner und gewünschte Zeitfenster werden vor der Ausführung besprochen. Legen Sie fest, wer die Bewohner informiert und wer vor Ort öffnet. Eine direkte Terminabstimmung mit jedem Mieter ist nur Teil des Auftrags, wenn sie vereinbart wurde.",
      },
      {
        question: "Müssen alle auffälligen Fenster ausgetauscht werden?",
        answer:
          "Nicht unbedingt. Beschläge, Dichtungen oder einzelne Gläser lassen sich je nach Zustand und System ersetzen. Wir prüfen das vor Ort und empfehlen Ihnen die wirtschaftlichste Lösung – Reparatur oder Austausch.",
      },
      {
        question: "Sind Arbeiten in mehreren Gebäuden möglich?",
        answer:
          "Nennen Sie die Objektorte und den gewünschten Umfang. Dann können Zuständigkeiten, notwendige Besichtigungen und eine mögliche Aufteilung besprochen werden. Verfügbare Termine und die konkrete Organisation werden für das Vorhaben vereinbart.",
      },
    ],
    related: ["wartung-service", "industrie-gewerbe", "hotellerie-gastronomie"],
    guideSlug: "fenster-reparieren-oder-austauschen",
    requestMessage:
      "Ich vertrete eine Hausverwaltung oder Wohnungsgesellschaft und möchte Arbeiten an unserem Bestand besprechen.\n\nObjekt / PLZ:\nBetroffene Bauelemente und Stückzahl:\nFehlerbild oder gewünschte Maßnahme:\nZugang und gewünschter Zeitraum:",
    sourceRefs: [
      company,
      contact,
      service,
      "https://www.klotz.mobi/portfolio/fenster",
      "https://www.klotz.mobi/portfolio/tueren",
    ],
    status: "draft",
  },
  {
    slug: "industrie-gewerbe",
    title: "Industrie & Gewerbe",
    audience: "Für Unternehmen & gewerblich genutzte Objekte",
    overview:
      "Fenster, Türen, Zäune und Tore für Ihren Standort: Nutzung, Verkehrswege und Montagebedingungen als Grundlage für ein abgestimmtes Vorhaben.",
    metaTitle: "Bauelemente für Gewerbe & Industrie in Merseburg",
    metaDescription:
      "Fenster, Türen, Zäune und Tore für Ihr Unternehmen. KLOTZ in Merseburg begleitet Bestandsaufnahme, Aufmaß und Montage für gewerblich genutzte Objekte.",
    hero: {
      title: "Ihr Standort.",
      accent: "Im Betrieb gedacht.",
      lead: "Ein Zugang muss zum Gebäude passen – und zu den Menschen, die ihn täglich nutzen. KLOTZ plant mit Unternehmen Bauelemente und Grundstücksabschlüsse anhand der Nutzung, des Bestands und der Montagebedingungen vor Ort.",
      cta: "Unser Vorhaben besprechen",
    },
    media: businessMedia["industrie-gewerbe"],
    inquiryTopic: "Gewerbe / Wohnungswirtschaft",
    benefits: [
      {
        title: "Nutzung zuerst",
        text: "Fußwege, Lieferverkehr und betriebliche Anforderungen geben der Auswahl eine klare Richtung.",
      },
      {
        title: "Umfang beschreiben",
        text: "Bauelement, Anschluss und erforderliche Vorarbeiten vor der Ausführung miteinander abstimmen.",
      },
      {
        title: "Schnittstellen klären",
        text: "Eigene Verantwortliche und beteiligte Gewerke in die Vorbereitung des Vorhabens einbeziehen.",
      },
    ],
    story: {
      title: "Bauelemente sind Teil Ihres täglichen Ablaufs.",
      paragraphs: [
        "Ein Tor wird anders genutzt als eine Besuchertür. Eine Zufahrt für Lieferungen stellt andere Fragen als der Zugang zum Büro. Deshalb beginnt ein gewerbliches Vorhaben bei der Nutzung: Wer kommt wann ins Gebäude, welche Wege müssen frei bleiben und wie lässt sich ein Montagebereich abgrenzen? Aus diesen Antworten entstehen die Anforderungen an die Auswahl.",
        "KLOTZ begleitet mittelständische Firmenkunden mit Leistungen rund um Fenster, Türen, Zäune und Tore. Das erste Gespräch verbindet die gewünschte Veränderung mit dem vorhandenen Objekt. Ob Sie ein einzelnes Element erneuern, eine Zufahrt neu ordnen oder mehrere Maßnahmen bündeln möchten: Entscheidend ist eine nachvollziehbare Beschreibung des vorgesehenen Leistungsumfangs.",
        "Für industrielle Standorte sind die Anforderungen immer anlagen- und nutzungsbezogen zu klären. Besondere Nachweise, elektrische Anschlüsse und sicherheitsrelevante Funktionen werden früh angesprochen. Welche Leistungen KLOTZ für die konkrete Anlage übernehmen kann und welche Fachbeteiligten hinzukommen, wird vor der Beauftragung festgelegt.",
      ],
    },
    variants: [
      {
        title: "Gebäude und Eingänge",
        description:
          "Fenster und Türen werden nach Nutzung, vorhandenem Anschluss und gewünschter Bedienung ausgewählt. Verglasung, Öffnungsrichtung und Übergänge zum Gebäude gehören in die Planung.",
        suitable:
          "Für bestehende Büro-, Geschäfts- und sonstige gewerblich genutzte Gebäude.",
      },
      {
        title: "Grundstück und Zufahrt",
        description:
          "Zaun, Gehtür und Tor sollten Verkehrswege und Grundstücksgrenzen zusammenführen. Bei einer möglichen Automatisierung werden Mechanik, Bedienung und Schutzfunktionen als Gesamtheit betrachtet.",
        suitable:
          "Für klar gegliederte Zugänge und Zufahrten am Unternehmensstandort.",
      },
      {
        title: "Bestehendes instand setzen",
        description:
          "Auffällige Beschläge, schwergängige Elemente oder beschädigte Verglasungen werden anhand des Fehlerbilds eingeordnet. Ersatzteilverfügbarkeit und Zustand bestimmen die nächsten Möglichkeiten.",
        suitable:
          "Für gezielte Reparatur- und Modernisierungsaufgaben nach Bestandsaufnahme.",
      },
    ],
    detail: {
      title: "Eine Montage braucht Platz. Und eine gute Vereinbarung.",
      image: serviceImage(
        "/images/business-industry-detail.webp",
        "Tor- und Zaunanlage mit offenem Zufahrtsbereich an einem Gebäude",
      ),
      caption:
        "Tor und Verkehrsfläche zusammen planen · Produktbeispiel aus der KLOTZ-Torengalerie",
      paragraphs: [
        "Anlieferung, Arbeitsfläche und verfügbare Zugänge gehören zur Vorbereitung. Zeigen Sie mögliche Aufstellflächen und nennen Sie Zeiten, in denen bestimmte Bereiche besonders stark genutzt werden. Auch interne Regeln für den Zutritt und die Anmeldung von Monteuren sollten bekannt sein.",
        "Je nach Vorhaben sind Fundamente, Pflaster, Stromversorgung oder Arbeiten an der Fassade betroffen. Diese Schnittstellen werden mit den zuständigen Beteiligten besprochen. Das Angebot sollte erkennbar machen, was enthalten ist und welche Voraussetzungen durch andere geschaffen werden müssen.",
        "Ob wir in Abschnitten arbeiten oder Bereiche zeitweise sperren, planen wir gemeinsam mit Ihnen vor Ort. So kennen Sie Ablauf und Auswirkungen auf Ihren Betrieb schon vor der Beauftragung. Wie ein größeres Objekt umgesetzt wird, zeigt die Einzäunung des Stadtstadions Merseburg: über 1,1 Kilometer Doppelstabmatten-Zaun mit Toren, montiert vom eigenen KLOTZ-Team.",
      ],
    },
    planning: [
      {
        title: "Standort und Nutzung",
        text: "Gebäudeart, Projektort und tägliche Nutzung benennen. Zeigen Sie die Wege von Mitarbeitenden, Besuchern und Lieferverkehr.",
      },
      {
        title: "Anlage und Unterlagen",
        text: "Fotos, Maße, Typenschilder und vorhandene Pläne bereithalten. Besondere Anforderungen früh nennen.",
      },
      {
        title: "Betriebliche Bedingungen",
        text: "Zutrittsregeln, Ansprechpartner, Anlieferung und mögliche Einschränkungen für Arbeiten abstimmen.",
      },
      {
        title: "Gewerke und Freigabe",
        text: "Zuständigkeiten für Fundamente, elektrische Versorgung, Anschlüsse und technische oder kaufmännische Freigaben klären.",
      },
    ],
    costs: {
      lead: "Für ein gewerbliches Objekt zählt ein klar abgegrenztes Angebot. Neben Abmessungen und Ausführung beeinflussen die Nutzung, vorhandene Bausubstanz und betriebliche Bedingungen den Aufwand. Besondere technische Anforderungen werden vorab benannt und für das konkrete Vorhaben eingeordnet.",
      factors: [
        "Bauelemente, Ausführung und erforderliche Funktionen",
        "Stückzahl, Geometrie und vorhandene Einbausituation",
        "Vorarbeiten, Versorgung und Schnittstellen zu anderen Gewerken",
        "Zugangsbedingungen und vereinbarte Montageabschnitte",
      ],
    },
    brief: {
      title: "Geben Sie Ihrem Standortprojekt eine klare Richtung.",
      items: [
        "Standort / PLZ und Art der betrieblichen Nutzung",
        "Gewünschte Veränderung und betroffene Elemente",
        "Fotos, grobe Maße und vorhandene Unterlagen",
        "Ansprechpartner, Einschränkungen und Terminwunsch",
      ],
    },
    responsibility: {
      title: "Betriebssicherheit gehört in die Aufgabenklärung.",
      text: "Bei gewerblich genutzten Türen und Toren sind Instandhaltung und sicherheitstechnische Prüfung unterschiedliche Aufgaben. Besprechen Sie mit KLOTZ, welche Unterlagen vorliegen, welche Arbeiten gewünscht sind und wer die erforderlichen Aufgaben übernimmt. Anforderungen und benötigte Qualifikation werden für die konkrete Anlage geklärt.",
      href: dguv,
      label: "Fachinformation der DGUV zu Türen und Toren",
    },
    productLinks: [
      {
        title: "Hof- und Schiebetore",
        text: "Öffnungsart und Zufahrt zusammen planen.",
        href: "/zaun-tor/schiebetore",
      },
      {
        title: "Elektrische Toranlagen",
        text: "Antrieb und Schutzfunktionen im Zusammenhang betrachten.",
        href: "/zaun-tor/elektrische-toranlagen",
      },
      {
        title: "Fenster und Türen",
        text: "Bauelemente passend zum Gebäude wählen.",
        href: "/fenster-tueren",
      },
    ],
    faq: [
      {
        question: "Welche Leistungen bietet KLOTZ für gewerbliche Objekte?",
        answer:
          "KLOTZ bietet Fenster, Türen, Zaun- und Toranlagen sowie Wartung und Instandsetzung. Welche Ausführung und welche Arbeiten für Ihren Standort übernommen werden können, wird anhand der konkreten Nutzung und Anlage besprochen.",
      },
      {
        question: "Kann der Betrieb während der Montage weiterlaufen?",
        answer:
          "Ja, wir richten die Montage nach Ihrem Betrieb aus. Nennen Sie uns wichtige Betriebszeiten und Wege – dann stimmen wir Abschnitte und notwendige Einschränkungen vorab mit Ihnen ab.",
      },
      {
        question: "Übernimmt KLOTZ auch elektrische Anschlüsse und Fundamente?",
        answer:
          "Das klären wir gleich zu Beginn und weisen es im Angebot klar aus: bestehende Versorgung, Untergrund und eventuell beteiligte Fachfirmen. So wissen Sie genau, welche Vorarbeiten enthalten sind.",
      },
      {
        question:
          "Welche Angaben helfen bei einer Toranfrage für den Standort?",
        answer:
          "Zeigen Sie Zufahrt und seitlichen Bewegungsraum. Ergänzen Sie grobe Abmessungen, die Art der Nutzung, Fotos und vorhandene Unterlagen zur Anlage. Bei einer Nachrüstung sind Hersteller, Zustand und gewünschte Bedienung hilfreich.",
      },
      {
        question: "Sind besondere Sicherheitsanforderungen Teil der Planung?",
        answer:
          "Nennen Sie bekannte Vorgaben und vorhandene Unterlagen bereits bei der Anfrage. Technische Anforderungen, notwendige Nachweise und Zuständigkeiten werden für die einzelne Anlage geklärt. Besondere Schutzklassen oder Prüfleistungen sind nur enthalten, wenn sie ausdrücklich vereinbart werden.",
      },
    ],
    related: [
      "wartung-service",
      "wohnungswirtschaft",
      "hotellerie-gastronomie",
    ],
    guideSlug: "vom-aufmass-bis-zur-abnahme",
    requestMessage:
      "Ich möchte ein Vorhaben an unserem Unternehmensstandort besprechen.\n\nStandort / PLZ und Nutzung:\nBetroffene Bauelemente:\nGewünschte Arbeiten:\nBetriebliche Bedingungen und Zeitraum:",
    sourceRefs: [company, contact, gate, service, dguv],
    status: "draft",
  },
  {
    slug: "hotellerie-gastronomie",
    title: "Hotellerie & Gastronomie",
    audience: "Für Hotels, Restaurants & gastliche Außenbereiche",
    overview:
      "Überdachung, Beschattung und seitliche Elemente als zusammenhängendes Konzept: angenehm für Ihre Gäste, sinnvoll für Servicewege und abgestimmt auf den Standort.",
    metaTitle: "Terrassenlösungen für Gastronomie & Hotels | Merseburg",
    metaDescription:
      "Überdachungen, Lamellendächer und Sonnenschutz für Hotel- und Gastronomieterrassen. KLOTZ in Merseburg plant mit Ihnen Gästeplätze, Wege und Ausstattung.",
    hero: {
      title: "Draußen Platz nehmen.",
      accent: "Gerne länger bleiben.",
      lead: "Ein guter Außenbereich verbindet angenehme Gästeplätze mit einem durchdachten Serviceablauf. KLOTZ entwickelt mit Hotels und Gastronomiebetrieben passende Ideen für Überdachung, Beschattung und seitlichen Schutz – ausgehend von Ihrer Terrasse und ihrer Nutzung.",
      cta: "Unsere Terrasse besprechen",
    },
    media: businessMedia["hotellerie-gastronomie"],
    inquiryTopic: "Gewerbe / Wohnungswirtschaft",
    benefits: [
      {
        title: "Gäste im Mittelpunkt",
        text: "Sonne, Blickachsen und Sitzbereiche als Ausgangspunkt für eine angenehme Atmosphäre nutzen.",
      },
      {
        title: "Servicewege mitgedacht",
        text: "Stützen, Durchgänge und Bedienung mit den täglichen Abläufen auf der Terrasse abstimmen.",
      },
      {
        title: "Ausstattung im Zusammenhang",
        text: "Dach, Beschattung und seitliche Elemente gemeinsam betrachten, bevor Details festgelegt werden.",
      },
    ],
    story: {
      title: "Mehr Qualität im Außenbereich beginnt bei der Nutzung.",
      paragraphs: [
        "Auf einer Hotelterrasse, vor einem Café oder im Restaurantgarten sollen sich Gäste wohlfühlen. Gleichzeitig brauchen Mitarbeitende freie Wege, die Bestuhlung eine sinnvolle Ordnung und der Betrieb ein handhabbares Konzept für den Alltag. Eine Terrassenlösung wird deshalb nicht allein nach der überdeckten Fläche ausgewählt.",
        "Zeigen Sie, wann und wie der Außenbereich genutzt wird: Frühstück, Mittagsgeschäft, Abendservice oder wechselnde Veranstaltungen stellen unterschiedliche Fragen an Licht, Schatten und Offenheit. KLOTZ bespricht mit Ihnen Überdachungen, Lamellen- und Pergolalösungen sowie mögliche seitliche Glas- und Sonnenschutzelemente. Maßgeblich sind Standort und gewähltes System.",
        "Eine geschützte Terrasse lässt sich an mehr Tagen nutzen. Welche Jahreszeiten und Wetterlagen Ihre Ausführung abdecken soll, legen wir gemeinsam fest – vom offenen Dach bis zum seitlich geschlossenen Außenbereich. Ein Beispiel aus der Region: Am Störmthaler See hat KLOTZ einen großzügigen Außenbereich an einem Gebäudekomplex überdacht und seitlich verglast – geschützt vor Wind und Regen, mit freiem Blick aufs Wasser.",
      ],
    },
    variants: [
      {
        title: "Ein festes Dach als Basis",
        description:
          "Eine Terrassenüberdachung gibt dem Sitzbereich einen dauerhaften Rahmen. Licht unter dem Dach, Beschattung und der Übergang zum Gebäude werden von Beginn an gemeinsam betrachtet.",
        suitable:
          "Für einen klar gefassten Außenbereich mit fest geplanter Dachfläche.",
      },
      {
        title: "Licht und Schatten steuern",
        description:
          "Lamellen- oder textile Pergolasysteme eröffnen je nach Ausführung unterschiedliche Möglichkeiten der Beschattung. Bedienung, Entwässerung und die gewünschte Offenheit gehören zum Vergleich.",
        suitable:
          "Für Terrassen, auf denen sich Lichtverhältnisse und Nutzung im Tagesverlauf verändern.",
      },
      {
        title: "Seitliche Bereiche ergänzen",
        description:
          "Glaselemente oder textile Beschattung können bestimmte Seiten gezielt verändern. Öffnungswege, Windverhältnisse und Systemkompatibilität müssen zur gewählten Konstruktion passen.",
        suitable:
          "Für abgestimmte Erweiterungen, wenn seitlicher Schutz oder eine flexiblere Einteilung gewünscht ist.",
      },
    ],
    detail: {
      title: "Ein Platz für Gäste. Ein Arbeitsplatz für Ihr Team.",
      image: serviceImage(
        "/images/business-hospitality-detail.webp",
        "Weiße überdachte Terrasse mit gedeckten Tischen und geöffneten Seiten",
      ),
      caption:
        "Dach, Bestuhlung und Wege · Produktbeispiel aus der KLOTZ-Gastronomiegalerie",
      paragraphs: [
        "Eine Skizze mit Tischen, Stühlen und Laufwegen macht viele Fragen früh sichtbar. Wo wird serviert? Welche Wege führen zur Küche oder ins Gebäude? An welcher Stelle würden Stützen oder geöffnete Glaselemente den Ablauf beeinflussen? Auch Reinigungs- und Pflegezugänge gehören in dieses Bild.",
        "Die Bedienung sollte zur Zuständigkeit im Betrieb passen. Besprechen Sie, wer Beschattung oder bewegliche Elemente nutzt und welche Handgriffe im Alltag gewünscht sind. Zusätzliche Ausstattung wie Beleuchtung oder elektrische Versorgung wird nur für die konkret geeignete Ausführung und mit klaren Zuständigkeiten geplant.",
        "Ebenso früh sind bauliche und örtliche Rahmenbedingungen zu klären: Untergrund, Befestigung, Entwässerung, Grenzen und die Einbindung in das Gebäude. Genehmigung, Nutzung, Fluchtwege und weitere örtliche Anforderungen werden mit den zuständigen Beteiligten geprüft.",
      ],
    },
    planning: [
      {
        title: "Nutzung und Saison",
        text: "Gästegruppen, Tageszeiten und gewünschte Nutzungsmonate beschreiben. So wird klar, welche Aufgabe die Terrasse übernehmen soll.",
      },
      {
        title: "Plätze und Wege",
        text: "Bestuhlung, Zugang zum Gebäude, Servicewege und Bereiche für Reinigung oder Lagerung in einer Skizze zeigen.",
      },
      {
        title: "Lage und Bestand",
        text: "Himmelsrichtung, angrenzende Bebauung, Untergrund und bisherige Wettererfahrungen besprechen. Fotos aus mehreren Blickrichtungen helfen.",
      },
      {
        title: "Realisierung vorbereiten",
        text: "Saisonplanung, Genehmigungsfragen und weitere Gewerke früh einbeziehen. Einen möglichen Montagezeitraum mit dem Betrieb abstimmen.",
      },
    ],
    costs: {
      lead: "Für Ihre Kalkulation zählt der gesamte vereinbarte Umfang: Konstruktion, Ausstattung und Montagebedingungen. KLOTZ bespricht die passende Ausführung anhand Ihres Außenbereichs. So erhalten Sie eine belastbare Grundlage für Ihre eigene Betriebsplanung.",
      factors: [
        "Fläche, Geometrie und gewähltes Dach- oder Beschattungssystem",
        "Seitliche Elemente und abgestimmte Bedienung",
        "Untergrund, Anschlüsse, Entwässerung und notwendige Vorarbeiten",
        "Zugänglichkeit und vereinbarter Montageumfang",
      ],
    },
    brief: {
      title: "Lassen Sie uns Ihre Terrasse im Betrieb verstehen.",
      items: [
        "Betrieb, Projektort und Nutzung des Außenbereichs",
        "Fotos, grobe Maße und eine Bestuhlungsskizze",
        "Gewünschte Saison, Beschattung und seitlicher Schutz",
        "Ansprechpartner und gewünschter Realisierungszeitraum",
      ],
    },
    responsibility: {
      title: "Inspiration wird erst vor Ort zum passenden Konzept.",
      text: "Die gezeigten Gastronomieterrassen zeigen, was möglich ist. Nutzbarkeit, Genehmigung, Ausstattung und Montage planen wir für Ihren Standort.",
    },
    productLinks: [
      {
        title: "Terrassenüberdachungen",
        text: "Ein festes Dach mit passender Beschattung planen.",
        href: "/terrasse-garten/terrassenueberdachungen",
      },
      {
        title: "Lamellendächer",
        text: "Lichteinfall und Luftigkeit bewusst wählen.",
        href: "/terrasse-garten/lamellendaecher",
      },
      {
        title: "Glasschiebewände",
        text: "Offene und geschützte Seiten zusammen denken.",
        href: "/terrasse-garten/glasschiebewaende",
      },
    ],
    faq: [
      {
        question: "Welche Terrassenlösungen kommen für Gastronomie infrage?",
        answer:
          "Zum Spektrum gehören Überdachungen, Lamellen- und Pergolasysteme sowie seitliche Glas- und Sonnenschutzelemente. Welches Konzept passt, hängt von Nutzung, Lage, Untergrund und dem gewünschten Maß an Offenheit ab. Die Systeme werden für das konkrete Vorhaben verglichen.",
      },
      {
        question: "Wird unsere Terrasse damit ganzjährig nutzbar?",
        answer:
          "Das hängt von Dach, seitlichem Abschluss und Nutzung ab. Nennen Sie uns die gewünschten Nutzungsmonate – wir zeigen Ihnen, welche Ausführung dazu passt.",
      },
      {
        question: "Wie berücksichtigen wir Servicewege und Bestuhlung?",
        answer:
          "Eine einfache Skizze mit Tischen, Eingängen und Wegen hilft im ersten Gespräch. Daraus lassen sich Fragen zu Stützen, Durchgängen und beweglichen Elementen ableiten. Die konkrete Planung muss zu Ihrer Betriebsorganisation und den örtlichen Anforderungen passen.",
      },
      {
        question: "Lässt sich eine vorhandene Überdachung erweitern?",
        answer:
          "Das hängt von Konstruktion, Zustand und geeigneten Komponenten ab. Fotos, Herstellerangaben und vorhandene Unterlagen sind hilfreich. Eine Erweiterung mit Glas oder Beschattung wird erst nach Prüfung des bestehenden Systems eingeordnet.",
      },
      {
        question: "Was sollten wir vor einer geplanten Saison vorbereiten?",
        answer:
          "Stellen Sie Fotos, grobe Maße, gewünschte Nutzung und einen Terminwunsch zusammen. Klären Sie Zuständigkeiten für Genehmigung und Vorarbeiten möglichst früh. Verfügbare Termine werden individuell abgestimmt. Je früher Sie anfragen, desto besser lässt sich die Montage vor Saisonbeginn planen.",
      },
    ],
    related: ["wartung-service", "industrie-gewerbe", "wohnungswirtschaft"],
    guideSlug: "lamellendach-oder-glasdach",
    requestMessage:
      "Ich plane einen Außenbereich für einen Hotel- oder Gastronomiebetrieb.\n\nBetrieb / Projektort:\nTerrasse: grobe Maße und bisherige Nutzung:\nGewünschter Schutz und Nutzungszeitraum:\nServicewege, Vorarbeiten und Terminwunsch:",
    sourceRefs: [
      hospitality,
      company,
      contact,
      "https://www.klotz.mobi/portfolio/terrassenueberdachung",
      "https://www.klotz.mobi/produkte/glasschiebe-faltw%C3%A4nde",
    ],
    status: "draft",
  },
  {
    slug: "wartung-service",
    title: "Wartung & Service",
    audience: "Für bestehende Fenster, Türen, Tore & Rollläden",
    overview:
      "Eine Störung gezielt beschreiben, den Bestand beurteilen und geeignete Arbeiten abstimmen. KLOTZ bietet Wartung und Instandsetzung rund um Ihre Bauelemente.",
    metaTitle: "Fenster, Türen & Tore: Reparatur und Wartung | Merseburg",
    metaDescription:
      "Wartung und Reparatur von Fenstern, Türen und Toren mit KLOTZ in Merseburg. Fehlerbild, Ersatzteile und mögliche Instandsetzung für Ihr Objekt besprechen.",
    hero: {
      title: "Bestehendes erhalten.",
      accent: "Gezielt instand setzen.",
      lead: "Ein Fenster schließt schwer, eine Tür fällt auf oder ein Tor arbeitet ungewohnt? KLOTZ bietet Wartung und Instandsetzung von Bauelementen. Mit Fehlerbeschreibung, Fotos und Angaben zum Bestand lässt sich Ihr Anliegen sinnvoll vorbereiten.",
      cta: "Mein Serviceanliegen schildern",
    },
    media: businessMedia["wartung-service"],
    inquiryTopic: "Wartung & Service",
    benefits: [
      {
        title: "Fehlerbild verstehen",
        text: "Beobachtungen und Bauteildaten zusammenführen, bevor eine Maßnahme festgelegt wird.",
      },
      {
        title: "Erhalten prüfen",
        text: "Reparatur und Austausch einzelner Komponenten als mögliche Wege im Bestand betrachten.",
      },
      {
        title: "Umfang abstimmen",
        text: "Diagnose, Teile und auszuführende Arbeiten nachvollziehbar für Ihre Anlage vereinbaren.",
      },
    ],
    story: {
      title: "Nicht jede Auffälligkeit verlangt ein neues Bauelement.",
      paragraphs: [
        "Schwergängige Beschläge, auffällige Dichtungen oder beschädigtes Glas haben unterschiedliche Ursachen. Deshalb steht am Anfang die Beurteilung des vorhandenen Elements und des beobachteten Problems. KLOTZ bietet Wartung, Reparatur und Instandsetzung von Fenstern, Türen und Toren. So können passende Maßnahmen besprochen werden, bevor Sie sich für eine Erneuerung entscheiden.",
        "Je nach Zustand kann eine Einstellung, der Austausch einzelner Komponenten oder eine weitergehende Erneuerung infrage kommen. Ob passende Teile verfügbar sind und ob eine Arbeit sinnvoll ausführbar ist, wird am konkreten System geprüft. So investieren Sie nur dort, wo es für Ihr Objekt wirklich nötig ist – und verlängern die Nutzungsdauer vorhandener Bauelemente, wo das möglich ist.",
        "Auch ein planmäßiges Serviceanliegen beginnt mit einer Bestandsbeschreibung. Welche Elemente sollen betrachtet werden, welche Unterlagen liegen vor und wer ist am Objekt zuständig? Diese Angaben helfen, einen geeigneten nächsten Schritt zu besprechen.",
      ],
    },
    variants: [
      {
        title: "Fenster und Türen",
        description:
          "Schließverhalten, Beschläge, Dichtungen und Verglasung können Anlass für eine Beurteilung sein. Beschreiben Sie, wann das Problem auftritt und ob bereits Arbeiten am Element ausgeführt wurden.",
        suitable:
          "Für schwergängige, undichte oder beschädigte Elemente im vorhandenen Gebäude.",
      },
      {
        title: "Tore und Rollläden",
        description:
          "Ungewohnte Bewegung, Geräusche oder eine Störung der Bedienung sollten konkret beschrieben werden. Mechanik, Antrieb und vorhandene Unterlagen helfen bei der Einordnung des weiteren Vorgehens.",
        suitable:
          "Für vorhandene Anlagen, deren Zustand und Instandsetzungsmöglichkeiten besprochen werden sollen.",
      },
      {
        title: "Glas und einzelne Komponenten",
        description:
          "Oft nicht. Glas, Beschlag oder andere Bauteile lassen sich je nach Bauart und Zustand einzeln ersetzen – wir prüfen das vor Ort.",
        suitable:
          "Für gezielten Teilersatz nach Prüfung des Elements und der Einbausituation.",
      },
    ],
    detail: {
      title: "Eine gute Fehlerbeschreibung hilft vor dem ersten Termin.",
      image: businessWorkMedia.image,
      caption: businessWorkMedia.caption,
      paragraphs: [
        "Eine Gesamtaufnahme zeigt, wo das Element sitzt. Ein Detailbild macht die auffällige Stelle erkennbar. Ergänzen Sie, seit wann Sie die Veränderung bemerken und ob sie ständig oder nur in bestimmten Situationen auftritt. Ein bekanntes Fabrikat, ein Typenschild oder ältere Unterlagen können die Vorbereitung unterstützen.",
        "Bitte führen Sie für ein Foto keine riskanten Tests durch und öffnen Sie keine Antriebs- oder Elektrogehäuse. Bei erkennbarer Gefahr sollte die Anlage nicht weiter benutzt und der Bereich gesichert werden. Den Rest übernehmen wir vor Ort.",
        "Für Hausverwaltungen und Betriebe ist außerdem wichtig, wer Zugang gewährt und wer Arbeiten freigeben kann. Werden nach der Bestandsaufnahme weitere Teile oder Leistungen nötig, ist deren Umfang zu besprechen. Diagnose, Beschaffung und Ausführung weisen wir Ihnen nachvollziehbar aus.",
      ],
    },
    planning: [
      {
        title: "Element benennen",
        text: "Fenster, Tür, Tor oder Rollladen sowie Projektort und ungefähre Anzahl nennen. Hersteller und Alter ergänzen, soweit bekannt.",
      },
      {
        title: "Problem beschreiben",
        text: "Beobachtung, Beginn und Häufigkeit in eigenen Worten schildern. Vorhandene Fotos und Unterlagen zuordnen.",
      },
      {
        title: "Zugang vorbereiten",
        text: "Ansprechpartner, Erreichbarkeit des Elements und besondere Bedingungen am Objekt mitteilen.",
      },
      {
        title: "Nächsten Schritt vereinbaren",
        text: "Bestandsaufnahme, mögliche Teile und gewünschte Arbeiten besprechen. Umfang und Termin werden individuell abgestimmt.",
      },
    ],
    costs: {
      lead: "Ein Serviceauftrag hängt vom tatsächlichen Fehler und vom Zustand des Elements ab. Für eine Einordnung sind Informationen zum Bestand entscheidend. Diagnose, Anfahrt, Ersatzteile und Arbeitsumfang weisen wir in der Vereinbarung transparent aus.",
      factors: [
        "Anfahrt, Zugänglichkeit und erforderliche Bestandsaufnahme",
        "Bauart, Zustand und Ursache der Auffälligkeit",
        "Geeignete Ersatzteile und deren Verfügbarkeit",
        "Vereinbarte Arbeiten und gegebenenfalls weitere Termine",
      ],
    },
    brief: {
      title: "Was ist Ihnen an der Anlage aufgefallen?",
      items: [
        "Bauelement und Projektort / PLZ",
        "Fehlerbild, Beginn und betroffene Stückzahl",
        "Fotos, Typenschild und vorhandene Unterlagen",
        "Zugang, zuständige Person und Terminwunsch",
      ],
    },
    responsibility: {
      title: "Wartung und sicherheitstechnische Prüfung unterscheiden.",
      text: "Bei gewerblich genutzten Anlagen können besondere Prüfanforderungen gelten. Herstellerunterlagen, Nutzung und technische Ausführung sind dafür maßgeblich. Umfang und Zuständigkeiten für Prüfungen klären wir objektbezogen mit Ihnen.",
      href: dguv,
      label: "DGUV: Fachinformation zur Prüfung an Türen und Toren",
    },
    productLinks: [
      {
        title: "Fenster weiterdenken",
        text: "Reparatur und mögliche Erneuerung einordnen.",
        href: "/fenster-tueren/fenster",
      },
      {
        title: "Rollläden",
        text: "Bedienung und Bestand gemeinsam betrachten.",
        href: "/fenster-tueren/rolllaeden",
      },
      {
        title: "Torautomatik",
        text: "Mechanik, Antrieb und Schutzfunktionen zusammen planen.",
        href: "/zaun-tor/elektrische-toranlagen",
      },
    ],
    faq: [
      {
        question: "Welche Bauelemente kann ich für den Service anfragen?",
        answer:
          "Sie können Fenster, Türen, Tore sowie Anliegen zu Rollläden, Glas und einzelnen Komponenten anfragen. Ob KLOTZ die gewünschte Arbeit an Ihrer konkreten Anlage übernehmen kann, wird anhand von Bauart, Zustand und Aufgabenstellung geklärt. Angaben zum Hersteller und vorhandene Unterlagen helfen bei der Vorbereitung.",
      },
      {
        question: "Welche Fotos helfen bei einer Reparaturanfrage?",
        answer:
          "Hilfreich sind die Gesamtansicht, ein Detail der auffälligen Stelle und ein vorhandenes Typenschild. Fotografieren Sie nur sicher zugängliche Bereiche. Beschreiben Sie zusätzlich, wann das Problem auftritt; Fotos allein liefern noch keine vollständige Diagnose.",
      },
      {
        question: "Kann KLOTZ Ersatzteile für ältere Elemente beschaffen?",
        answer:
          "Die Möglichkeiten hängen vom Hersteller, System und der Verfügbarkeit geeigneter Komponenten ab. Ein Fabrikat, Typenschild oder frühere Unterlagen unterstützen die Prüfung.",
      },
      {
        question: "Ist eine Reparatur auch bei Fremdfabrikaten möglich?",
        answer:
          "Nennen Sie Hersteller und Bauart, soweit bekannt. Dann kann geklärt werden, ob KLOTZ die gewünschte Arbeit übernehmen kann und ob geeignete Teile verfügbar sind.",
      },
      {
        question: "Wie kläre ich ein dringendes Serviceanliegen?",
        answer:
          "Rufen Sie KLOTZ direkt an und beschreiben Sie die betroffene Anlage und das Problem. So lassen sich die verfügbaren Möglichkeiten und ein nächster Schritt besprechen. Termine werden individuell vereinbart. Bei Gefahr die betroffene Anlage nicht weiter benutzen und den Bereich sichern.",
      },
    ],
    related: [
      "wohnungswirtschaft",
      "industrie-gewerbe",
      "hotellerie-gastronomie",
    ],
    guideSlug: "fenster-reparieren-oder-austauschen",
    requestMessage:
      "Ich möchte ein Service- oder Reparaturanliegen besprechen.\n\nBauelement / Projektort:\nFehlerbild und seit wann es auftritt:\nHersteller, Alter und vorhandene Unterlagen:\nZugänglichkeit und gewünschter Zeitraum:",
    sourceRefs: [
      service,
      "https://www.klotz.mobi/Wartung-und-Service",
      company,
      contact,
      dguv,
    ],
    status: "draft",
  },
];
