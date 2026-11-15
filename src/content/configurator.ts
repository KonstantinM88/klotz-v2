import type { ConfiguratorPageContent } from "@/domain/content/configurator";
import { windowsMedia } from "./windows-media";

export const configuratorPageContent: ConfiguratorPageContent = {
  status: "draft",
  metaTitle: "Haustür-Konfigurator & Energiesparrechner | Merseburg",
  metaDescription:
    "Haustür gestalten, Fenster vergleichen: Entdecken Sie Ihre Möglichkeiten und bereiten Sie Ihr Projekt mit KLOTZ in Merseburg, Halle und Leipzig vor.",
  hero: {
    title: "Ihre Idee.",
    accent: "Schon ein Stück Zuhause.",
    lead: "Wie soll Ihr Eingang wirken? Was kann ein Fenstertausch verändern? Entdecken Sie Varianten, vergleichen Sie Ihre Möglichkeiten und nehmen Sie Ihre Ideen mit in die persönliche Beratung.",
    media: windowsMedia.haustueren,
  },
  door: {
    title: "Ein Eingang mit Charakter.",
    accent: "Ihrem Charakter.",
    lead: "Entdecken Sie den Originalkatalog: von klaren Aluminiumflächen bis zu ausdrucksstarken Glasdetails. Vergleichen Sie Modelle, planen Sie Maße, Seitenteile und Oberlicht und halten Sie Ihre Oberflächenwünsche fest. So gehen Sie mit einer konkreten Auswahl ins Gespräch mit KLOTZ.",
    externalUrl: "https://konfigurator.klotz.mobi/",
    note: "Originalmodelle und Maßrahmen aus dem Herstellerkatalog. Die Vorschau zeigt die jeweilige Katalogausführung; Farbwünsche werden separat dargestellt. Weitere Systemgrenzen, Ausstattung und das verbindliche Aufmaß werden technisch abgestimmt.",
    preparation: [
      {
        title: "Den Eingang als Ganzes sehen",
        text: "Fassade, Boden, Vordach und seitliches Glas bestimmen die Wirkung mit. Ein Foto Ihres Eingangs hilft, Proportionen und Licht gemeinsam zu besprechen.",
      },
      {
        title: "Alltag und Gestaltung verbinden",
        text: "Wer nutzt die Tür, wie viel Durchblick ist gewünscht und was soll bei der Bedienung einfacher werden? Diese Fragen helfen bei Griff, Verglasung und Ausstattung.",
      },
      {
        title: "Vom Modell zum passenden Eingang",
        text: "Speichern Sie Modellnummer und Planungsmaße in Ihrer Notiz. Im technischen Vollmodus lassen sich System, Glas und Beschläge ergänzen. KLOTZ klärt dazu Einbausituation, Anschlüsse und Montage.",
      },
    ],
  },
  energy: {
    title: "Mehr Klarheit beim Fenstertausch.",
    accent: "Wert für Wert.",
    lead: "Vergleichen Sie, wie sich ein besserer Uw-Wert auf die rechnerischen Wärmeverluste Ihrer Fensterfläche auswirkt. Tragen Sie bekannte Werte ein oder starten Sie mit den ausdrücklich gekennzeichneten Beispielen.",
    defaults: {
      area: "20",
      oldUw: "2,84",
      newUw: "1,20",
      degreeDays: "3239",
      factor: "0,75",
      price: "",
      system: "gas",
    },
    systems: [
      {
        id: "gas",
        label: "Erdgas",
        exampleFactor: "0,75",
        hint: "Nutzungsgrad als Beispiel: 0,75. Den Wert Ihrer Anlage können Sie unten anpassen.",
      },
      {
        id: "oel",
        label: "Heizöl",
        exampleFactor: "0,75",
        hint: "Nutzungsgrad als Beispiel: 0,75. Bitte den Arbeitspreis auf eine kWh Brennstoff beziehen, nicht auf einen Liter.",
      },
      {
        id: "fernwaerme",
        label: "Fernwärme",
        exampleFactor: "1",
        hint: "Beispielgrenze: gelieferte Wärme, Faktor 1. Verteilverluste und Grundpreis sind nicht angesetzt.",
      },
      {
        id: "strom",
        label: "Stromdirektheizung",
        exampleFactor: "1",
        hint: "Rechenbeispiel mit Faktor 1. Verwenden Sie Ihren Arbeitspreis für Heizstrom.",
      },
      {
        id: "waermepumpe",
        label: "Wärmepumpe",
        exampleFactor: "3",
        hint: "Jahresarbeitszahl als Beispiel: 3. Verwenden Sie die JAZ Ihrer Anlage und Ihren Strom-Arbeitspreis.",
      },
    ],
    oldExamples: [
      { label: "Beispiel Zweifachglas · Uw 2,84", value: "2,84" },
      { label: "Beispiel Einfachglas · Uw 4,72", value: "4,72" },
    ],
    newExamples: [
      { label: "Beispiel · Uw 1,20", value: "1,20" },
      { label: "Beispiel · Uw 0,95", value: "0,95" },
      { label: "Beispiel · Uw 0,80", value: "0,80" },
    ],
    scope:
      "Eine erste Orientierung zu den Transmissionswärmeverlusten der betrachteten Fensterfläche. Keine Prognose Ihrer gesamten Heizkosten: Sonne, Lüftung, Undichtigkeiten, Wärmebrücken, Nutzung und das Zusammenspiel des Gebäudes sind hier nicht bilanziert. Eine Energieberatung kann diese Zusammenhänge für Ihr Haus bewerten.",
  },
  process: [
    {
      title: "Ideen vergleichen",
      text: "Vergleichen Sie die Türmodelle mit Ihren Wunschmaßen oder rechnen Sie mit Ihren Fensterwerten. Auch offene Fragen sind ein guter Ausgangspunkt.",
    },
    {
      title: "Vorhaben besprechen",
      text: "Nehmen Sie Ihre Auswahl mit in die Anfrage. Fotos, Projektort und Wünsche helfen bei der persönlichen Einordnung.",
    },
    {
      title: "Vor Ort konkretisieren",
      text: "KLOTZ verbindet Beratung, Aufmaß und passende Ausführung. Material, Anschlüsse und Montage werden gemeinsam betrachtet.",
    },
  ],
  faq: [
    {
      question: "Finde ich hier alle Modelle und die passenden Maße?",
      answer:
        "Der übernommene Originalkatalog umfasst 503 Modellvarianten in neun Kollektionen. Sie können nach Name oder Artikelnummer suchen und die hinterlegten Maßrahmen ansehen. Die Angaben sind ein Katalogstand und keine Lieferzusage. Bei Varianten ohne eigenes Bild ist das verwendete Grundmodell gekennzeichnet. Die Originalabbildung bleibt unverändert, Ihre Farbwünsche erscheinen als separate Muster. Weitere System-, Glas- und Beschlagabhängigkeiten prüfen Sie im technischen Vollmodus und mit KLOTZ.",
      link: {
        label: "Haustüren und Planung kennenlernen",
        href: "/fenster-tueren/haustueren",
      },
    },
    {
      question: "Welche Angaben helfen bei der Planung meiner Haustür?",
      answer:
        "Ein Foto von außen und innen, grobe Öffnungsmaße und Angaben zur Nutzung erleichtern den Einstieg. Wichtig sind auch gewünschtes Tageslicht, Sichtschutz, Bedienung und vorhandene Anschlüsse. Das verbindliche Aufmaß und die technische Abstimmung folgen im Projekt; aus einer Bildschirmvorschau lassen sich keine Einbaumaße ableiten.",
    },
    {
      question: "Welchen U-Wert soll ich im Fensterrechner verwenden?",
      answer:
        "Tragen Sie den Uw-Wert des gesamten Fensters ein, also einschließlich Rahmen und Glas. Der Ug-Wert beschreibt allein die Verglasung und ergibt einen anderen Vergleich. Werte finden sich häufig in Produktunterlagen. Die Schaltflächen im Rechner enthalten vereinfachte Beispiele aus dem bisherigen KLOTZ-Rechner; Alter und Glasart allein bestimmen den tatsächlichen Uw-Wert nicht.",
    },
    {
      question: "Entspricht das Ergebnis meiner späteren Heizkostenersparnis?",
      answer:
        "Das Ergebnis ist eine lineare Abschätzung für die eingegebene Fensterfläche. Es vergleicht Transmissionswärmeverluste unter denselben Klimaannahmen. Die tatsächliche Gebäude- und Kostenbilanz hängt zusätzlich von Sonne, Lüftung, Anschlüssen, Nutzung und Heiztechnik ab. Ein Prozentwert im Ergebnis bezieht sich ausschließlich auf die betrachtete Fenstertransmission, nicht auf den Verbrauch des ganzen Hauses.",
    },
    {
      question: "Kann ich mit Wärmepumpe oder Fernwärme rechnen?",
      answer:
        "Ja. Bei einer Wärmepumpe wird die eingegebene Jahresarbeitszahl verwendet, um die Wärmedifferenz in eine Strommenge umzurechnen. Bei Fernwärme bezieht sich das Beispiel auf gelieferte Wärme. Alle Faktoren sind sichtbar und änderbar. Tragen Sie den passenden Arbeitspreis je kWh ein; Grundpreise und andere fixe Kosten verändern sich durch diesen Vergleich nicht.",
    },
    {
      question: "Was passiert mit meinen Eingaben?",
      answer:
        "Modellauswahl, Merkliste, Vergleich und Berechnung funktionieren lokal im Browser, ohne Anmeldung oder dauerhafte Speicherung. Über »Türplanung besprechen« oder »Fenstertausch besprechen« übernehmen Sie Ihre Angaben in die Demo-Anfrage. Sie werden dabei Teil der lokalen URL; teilen Sie diese nur bewusst. Die Anfrage wird hier nur geprüft, nicht versendet oder gespeichert. Erst beim Laden des technischen Vollmodus oder beim Öffnen im neuen Tab verbinden Sie sich mit dem externen Herstellerdienst. Ihre lokale Planung wird nicht automatisch dorthin übertragen.",
    },
    {
      question: "Kann ich mich auch ohne fertige Konfiguration beraten lassen?",
      answer:
        "Natürlich. Sie müssen weder ein Türmodell noch einen Uw-Wert kennen. Beschreiben Sie einfach, was Sie verändern möchten. In Merseburg-Meuschau besprechen Sie Ihr Vorhaben persönlich mit KLOTZ; auch Projekte in Halle (Saale), Leipzig und im Saalekreis lassen sich von hier aus vorbereiten.",
      link: { label: "Kontakt und Ausstellung", href: "/kontakt" },
    },
  ],
  sources: [
    {
      label: "ift Rosenheim · Uw des gesamten Fensters",
      url: "https://www.ift-rosenheim.de/2013/din-en-14351-1-produktnorm-fuer-fenster-und-aussentueren",
    },
    {
      label: "Passivhaus Institut · Heizgradstunden und Wärmebilanz",
      url: "https://passipedia.de/planung/energieeffizienz_ist_berechenbar/energiebilanzen_mit_dem_phpp/monatsv",
    },
    {
      label: "DWD · Gradtagzahlen für Ihren Standort",
      url: "https://www.dwd.de/DE/leistungen/gtz_kostenfrei/gtz_kostenfrei.html",
    },
  ],
  sourceRefs: [
    "https://konfigurator.klotz.mobi/",
    "https://www.klotz.mobi/energiesparrechner",
    "https://www.klotz.mobi/ueber-uns",
    "https://www.klotz.mobi/kontakt",
  ],
  reviewedAt: "2026-11-15",
};
