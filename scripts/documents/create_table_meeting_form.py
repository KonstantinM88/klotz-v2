from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Flowable,
    Frame,
    HRFlowable,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "output" / "pdf"
OUT.mkdir(parents=True, exist_ok=True)
OUTPUT = OUT / "SaaleWeb_Gespraechsprotokoll_KLOTZ_Kaffeehaus_29-10-2026_DE.pdf"

PAGE_W, PAGE_H = A4
NAVY = colors.HexColor("#17213A")
PURPLE = colors.HexColor("#7256D8")
MAGENTA = colors.HexColor("#C64FB0")
INK = colors.HexColor("#20253A")
MUTED = colors.HexColor("#667085")
LINE = colors.HexColor("#D9DDE8")
PALE = colors.HexColor("#F6F5FB")
PALE_PURPLE = colors.HexColor("#F0EBFF")
PALE_GREEN = colors.HexColor("#EAF7F1")
GREEN = colors.HexColor("#17745A")
WHITE = colors.white

pdfmetrics.registerFont(TTFont("Arial", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", r"C:\Windows\Fonts\arialbd.ttf"))
pdfmetrics.registerFont(TTFont("Georgia-Bold", r"C:\Windows\Fonts\georgiab.ttf"))


base = getSampleStyleSheet()
S = {
    "kicker": ParagraphStyle(
        "kicker",
        parent=base["Normal"],
        fontName="Arial-Bold",
        fontSize=7.8,
        leading=10,
        textColor=PURPLE,
        tracking=1.1,
        spaceAfter=3,
    ),
    "title": ParagraphStyle(
        "title",
        parent=base["Heading1"],
        fontName="Georgia-Bold",
        fontSize=22,
        leading=27,
        textColor=NAVY,
        spaceAfter=7,
    ),
    "subtitle": ParagraphStyle(
        "subtitle",
        parent=base["BodyText"],
        fontName="Arial",
        fontSize=9,
        leading=13,
        textColor=MUTED,
        spaceAfter=7,
    ),
    "h2": ParagraphStyle(
        "h2",
        parent=base["Heading2"],
        fontName="Arial-Bold",
        fontSize=12.5,
        leading=16,
        textColor=PURPLE,
        spaceBefore=4,
        spaceAfter=5,
    ),
    "body": ParagraphStyle(
        "body",
        parent=base["BodyText"],
        fontName="Arial",
        fontSize=8.7,
        leading=12.2,
        textColor=INK,
        spaceAfter=4,
    ),
    "small": ParagraphStyle(
        "small",
        parent=base["BodyText"],
        fontName="Arial",
        fontSize=7.4,
        leading=9.8,
        textColor=MUTED,
    ),
    "question": ParagraphStyle(
        "question",
        parent=base["BodyText"],
        fontName="Arial-Bold",
        fontSize=8.8,
        leading=12.2,
        textColor=NAVY,
        spaceAfter=2,
    ),
    "option": ParagraphStyle(
        "option",
        parent=base["BodyText"],
        fontName="Arial",
        fontSize=8.2,
        leading=11.5,
        textColor=INK,
    ),
    "table_head": ParagraphStyle(
        "table_head",
        parent=base["BodyText"],
        fontName="Arial-Bold",
        fontSize=7.5,
        leading=9.5,
        textColor=WHITE,
    ),
    "table": ParagraphStyle(
        "table",
        parent=base["BodyText"],
        fontName="Arial",
        fontSize=7.5,
        leading=10,
        textColor=INK,
    ),
}


class NoteLines(Flowable):
    def __init__(self, height=25 * mm, lines=4, fill=colors.white, border=LINE):
        super().__init__()
        self.height = height
        self.lines = lines
        self.fill = fill
        self.border = border

    def wrap(self, avail_width, avail_height):
        self.width = avail_width
        return avail_width, self.height

    def draw(self):
        self.canv.setFillColor(self.fill)
        self.canv.setStrokeColor(self.border)
        self.canv.setLineWidth(0.55)
        self.canv.roundRect(0, 0, self.width, self.height, 2.2 * mm, stroke=1, fill=1)
        self.canv.setStrokeColor(colors.HexColor("#E3E6EF"))
        step = self.height / (self.lines + 1)
        for i in range(1, self.lines + 1):
            y = self.height - i * step
            self.canv.line(5 * mm, y, self.width - 5 * mm, y)


class SignatureLine(Flowable):
    def __init__(self, label: str, width=75 * mm):
        super().__init__()
        self.label = label
        self.line_width = width
        self.height = 14 * mm

    def wrap(self, avail_width, avail_height):
        self.width = min(avail_width, self.line_width)
        return self.width, self.height

    def draw(self):
        self.canv.setStrokeColor(MUTED)
        self.canv.line(0, 5 * mm, self.width, 5 * mm)
        self.canv.setFont("Arial", 7)
        self.canv.setFillColor(MUTED)
        self.canv.drawString(0, 1 * mm, self.label)


def p(text, style="body"):
    return Paragraph(text, S[style])


def section(kicker, title, intro=None):
    items = [p(kicker.upper(), "kicker"), p(title, "title")]
    if intro:
        items.append(p(intro, "subtitle"))
    items.append(HRFlowable(width="100%", thickness=0.7, color=LINE, spaceAfter=6))
    return items


def question(text, height=20 * mm, lines=3, hint=None):
    items = [p(text, "question")]
    if hint:
        items.append(p(hint, "small"))
        items.append(Spacer(1, 1.5 * mm))
    items.append(NoteLines(height=height, lines=lines))
    items.append(Spacer(1, 3 * mm))
    return KeepTogether(items)


def options(title, values, columns=2):
    cells = [p(f"[ ] {value}", "option") for value in values]
    while len(cells) % columns:
        cells.append(Paragraph("", S["option"]))
    rows = [cells[i : i + columns] for i in range(0, len(cells), columns)]
    width = 165 * mm / columns
    t = Table(rows, colWidths=[width] * columns, hAlign="LEFT")
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    return KeepTogether([p(title, "question"), Spacer(1, 1.5 * mm), t, Spacer(1, 4 * mm)])


def info_card(title, body, accent=PURPLE):
    t = Table([[p(title, "question")], [p(body, "body")]], colWidths=[80 * mm])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE_PURPLE),
                ("BOX", (0, 0), (-1, -1), 0.7, accent),
                ("LINEABOVE", (0, 0), (-1, 0), 3, accent),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]
        )
    )
    return t


class MeetingFormDoc(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(
            filename,
            pagesize=A4,
            leftMargin=20 * mm,
            rightMargin=20 * mm,
            topMargin=22 * mm,
            bottomMargin=18 * mm,
            title="Gesprächsprotokoll KLOTZ.mobi und Kaffeehaus Meuschau",
            author="SaaleWeb.de - Kostiantyn Mykhailov",
            subject="Arbeitsunterlage für den Termin am 29.10.2026",
        )
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="form")
        self.addPageTemplates(PageTemplate(id="main", frames=[frame], onPage=self.decorate))

    def decorate(self, canvas, doc):
        page = canvas.getPageNumber()
        canvas.saveState()
        canvas.setFillColor(NAVY)
        canvas.rect(0, PAGE_H - 13 * mm, PAGE_W, 13 * mm, stroke=0, fill=1)
        canvas.setFillColor(PURPLE)
        canvas.rect(0, PAGE_H - 13 * mm, 35 * mm, 13 * mm, stroke=0, fill=1)
        canvas.setFont("Arial-Bold", 7.5)
        canvas.setFillColor(WHITE)
        canvas.drawString(20 * mm, PAGE_H - 8.2 * mm, "SaaleWeb")
        canvas.setFont("Arial", 7.2)
        canvas.drawRightString(PAGE_W - 20 * mm, PAGE_H - 8.2 * mm, "KLOTZ.mobi + Kaffeehaus Meuschau · 29.10.2026")
        canvas.setStrokeColor(LINE)
        canvas.line(20 * mm, 12 * mm, PAGE_W - 20 * mm, 12 * mm)
        canvas.setFont("Arial", 7)
        canvas.setFillColor(MUTED)
        canvas.drawString(20 * mm, 8 * mm, "Gesprächsprotokoll · Arbeitsunterlage")
        canvas.drawRightString(PAGE_W - 20 * mm, 8 * mm, f"Seite {page}")
        canvas.restoreState()


story = []

# Page 1
story += section("Gesprächsprotokoll", "KLOTZ.mobi & Kaffeehaus Meuschau", "Arbeitsunterlage für Entscheidungen, Notizen und nächste Schritte. Festlegungen werden anschließend im verbindlichen Angebot bestätigt.")

meta = Table(
    [
        [p("Termin", "question"), p("29.10.2026 · ca. 14:00 Uhr"), p("Ort", "question"), p("Kaffeehaus Meuschau")],
        [p("Teilnehmer", "question"), p("Matthias Klotz · Kostiantyn Mykhailov"), p("Dauer", "question"), p("ca. 45-60 Minuten")],
    ],
    colWidths=[25 * mm, 68 * mm, 20 * mm, 52 * mm],
)
meta.setStyle(
    TableStyle(
        [
            ("BACKGROUND", (0, 0), (-1, -1), PALE),
            ("BOX", (0, 0), (-1, -1), 0.6, LINE),
            ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("LEFTPADDING", (0, 0), (-1, -1), 7),
            ("RIGHTPADDING", (0, 0), (-1, -1), 7),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ]
    )
)
story += [meta, Spacer(1, 6 * mm), p("Ziele des Gesprächs", "h2")]
story += [
    options(
        "Welche Ergebnisse sollen heute erreicht werden?",
        [
            "KLOTZ-Prioritäten bestätigen",
            "Kaffeehaus-Designrichtung wählen",
            "Eventplaner-Umfang abgrenzen",
            "Offene Inhalte und Zugänge zuordnen",
            "Budgetrahmen einordnen",
            "Nächsten Schritt terminieren",
        ],
        columns=2,
    ),
    question("Wichtigstes Ziel aus Sicht von KLOTZ", height=26 * mm, lines=4),
    question("Neue Entscheidungen seit Lastenheft / letzter Abstimmung", height=26 * mm, lines=4),
    p("Gesamteindruck zu Beginn", "h2"),
    options("", ["[ ] sehr positiv".replace("[ ] ", ""), "[ ] positiv".replace("[ ] ", ""), "[ ] offen".replace("[ ] ", ""), "[ ] kritisch".replace("[ ] ", "")], columns=4),
    PageBreak(),
]

# Page 2
story += section("01 · KLOTZ.mobi", "Geschäftliche Prioritäten", "Welche Leistungen, Zielgruppen und Anfragen sollen durch den Relaunch zuerst gestärkt werden?")
story += [
    question("Welche Leistungen haben 2027 höchste Vertriebspriorität?", height=29 * mm, lines=4, hint="Zum Beispiel: Terrassenüberdachungen, Lamellendächer, Fenster, Türen, Zäune, Tore, Gewerbe- oder Wohnungswirtschaft."),
    question("Welche Zielgruppen und Regionen sind wirtschaftlich am wichtigsten?", height=26 * mm, lines=4),
    question("Was wäre sechs Monate nach dem Launch ein messbarer Erfolg?", height=29 * mm, lines=4, hint="Mehr qualifizierte Anfragen, höhere Sichtbarkeit, weniger Erklärungsaufwand, bessere Projektanfragen oder andere Ziele."),
    question("Welche Kontaktwege sollen im Vordergrund stehen?", height=22 * mm, lines=3),
    options("Bevorzugte Kontaktwege", ["Formular", "E-Mail", "Telefon", "WhatsApp", "Rückruf", "Projektlotse"], columns=3),
    PageBreak(),
]

# Page 3
story += section("02 · KLOTZ.mobi", "Inhalte, Referenzen und Migration", "Die folgenden Punkte bestimmen Umfang, Verantwortung und Sicherheit des Relaunchs.")
story += [
    question("Welche 6-10 Projekte dürfen als Referenzen veröffentlicht werden?", height=30 * mm, lines=5, hint="Bitte Projektname/Ort, Leistung, Besonderheit, Ergebnis und verfügbare Fotos notieren."),
    question("Wer liefert und genehmigt Texte, Fotos und technische Aussagen?", height=23 * mm, lines=3),
    options(
        "Vorhandene Zugänge und Daten",
        [
            "Domain / DNS",
            "Drupal / aktuelles CMS",
            "Hosting",
            "Google Search Console",
            "Analytics",
            "Google-Unternehmensprofil",
            "Bild- und Herstellerrechte",
            "Bestehende URL-/SEO-Daten",
        ],
        columns=2,
    ),
    question("Welche bestehenden URLs, Rankings, Anfragen oder Tools müssen unbedingt erhalten bleiben?", height=28 * mm, lines=4),
    question("Offene Punkte KLOTZ", height=24 * mm, lines=4),
    PageBreak(),
]

# Page 4
story += section("03 · Kaffeehaus", "Designentscheidung", "Beide Varianten nutzen dieselben Inhalte und Funktionen. Entscheidend ist die gewünschte Markenwirkung.")

cards = Table(
    [
        [
            info_card("[ ] Variante A · Saale-Salon", "Warm, klassisch und elegant. Stärker für Familienfeiern, Tradition und eine vertraute Atmosphäre."),
            info_card("[ ] Variante B · Werkhalle", "Modern, industriell und unverwechselbar. Stärker für Seminare, Firmenkunden und ein eigenständiges Profil.", accent=MAGENTA),
        ]
    ],
    colWidths=[82.5 * mm, 82.5 * mm],
)
cards.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 3)]))
story += [cards, Spacer(1, 5 * mm)]
story += [
    options("Entscheidung", ["Variante A", "Variante B", "Kombination / Hybrid", "weitere Abstimmung"], columns=2),
    question("Welche Elemente aus Variante A sollen erhalten bleiben?", height=25 * mm, lines=4),
    question("Welche Elemente aus Variante B sollen erhalten bleiben?", height=25 * mm, lines=4),
    question("Welche Wirkung sollen Firmenkunden und private Gäste in den ersten zehn Sekunden erleben?", height=28 * mm, lines=4),
    question("Freigegebene Designrichtung / konkrete Kombination", height=27 * mm, lines=4),
    PageBreak(),
]

# Page 5
story += section("04 · Kaffeehaus", "Betrieb, Räume und Angebot", "Nur bestätigte Fakten werden später als verbindliche Angaben veröffentlicht.")
story += [
    question("Veranstaltungsstart und genaue Formulierung für Frühjahr 2027", height=21 * mm, lines=3),
    question("Kapazität: sitzend, stehend und Hofbereich", height=24 * mm, lines=3, hint="Aktuell bestätigt: 60-75 Personen zuzüglich Hofbereich. Bitte genauer differenzieren."),
    question("Bestuhlung, Leinwand, Beamer, WLAN, Audio, Licht, Küche und weitere Ausstattung", height=27 * mm, lines=4),
    question("Catering und Getränke: eigene Küche, Partner, externe Anbieter, Kaffeepausen, Buffets", height=27 * mm, lines=4),
    question("Wochenendcafé: Start, Öffnungstage, Zeiten, Frühstück/Brunch, Reservierung", height=27 * mm, lines=4),
    question("Adresse, Parken, ÖPNV, Barrierefreiheit und Zugang zum Hof", height=25 * mm, lines=4),
    PageBreak(),
]

# Page 6
story += section("05 · Eventplaner", "Anfrage, Belegung und Verantwortlichkeit", "Stufe 1 qualifiziert eine Anfrage. Reservierung, automatische Verfügbarkeit und Zahlung sind davon getrennte Ausbaustufen.")
story += [
    options("Gewünschter Umfang Stufe 1", ["3-Schritt-Anfrageassistent", "Vorausgefülltes Anfrageformular", "E-Mail-Übermittlung", "Manuelle Belegungsübersicht"], columns=2),
    question("Welche Informationen muss jede Anfrage enthalten?", height=20 * mm, lines=3),
    question("Soll eine 6-Monats-Übersicht angezeigt werden? Welche Statuswerte sind sichtbar?", height=21 * mm, lines=3, hint="Zum Beispiel: verfügbar, angefragt, reserviert, belegt. Keine automatische Zusage ohne definierte Regeln."),
    question("Wer pflegt Termine und wer bestätigt Anfragen?", height=17 * mm, lines=2),
    question("Welche Mailbox empfängt die Anfragen und welche Antwortzeit ist vorgesehen?", height=17 * mm, lines=2),
    question("Spätere Ausbaustufen: CRM, automatische Preise, Buchung, Zahlung, Erinnerungen", height=20 * mm, lines=3),
    PageBreak(),
]

# Page 7
story += section("06 · Technik und Betrieb", "Entscheidungen für Angebot und Umsetzung", "Die technische Basis bleibt offen dokumentiert und kann später von anderen qualifizierten Entwicklern weitergeführt werden.")
story += [
    options("Technische und organisatorische Punkte", ["Next.js / TypeScript", "maßgeschneidertes Redaktionssystem", "PostgreSQL / Neon", "Git-Repository und Dokumentation", "getrennte SEO-/Analytics-Einstellungen", "unabhängige Veröffentlichung beider Sites"], columns=2),
    question("Wer soll Inhalte später pflegen? Welche Rollen und Freigaben werden benötigt?", height=20 * mm, lines=3),
    question("Welche Analytics-Lösung und welche Conversions sollen gemessen werden?", height=20 * mm, lines=3),
    options("Betriebsmodell", ["Wartung 120 EUR netto/Monat", "Support nach Aufwand", "Hosting durch SaaleWeb", "Hosting durch KLOTZ", "30 Tage Stabilisierung", "zwei Korrekturrunden je Phase"], columns=2),
    question("Hinweise zu Datenschutz, Aufbewahrung, Impressum und Betreiber", height=20 * mm, lines=3),
    question("Budgetrahmen, Prioritäten oder gewünschte Staffelung", height=21 * mm, lines=3, hint="Vorläufiger Gesamtrahmen aus der Ersteinschätzung: 15.000-19.000 EUR netto, abhängig vom bestätigten Umfang."),
    PageBreak(),
]

# Page 8
story += section("07 · Ergebnis", "Entscheidungen und nächste Schritte", "Am Ende sollten Verantwortliche, Unterlagen und Termine eindeutig festgehalten sein.")

decision_rows = [
    [p("Entscheidung", "table_head"), p("Ergebnis / Notiz", "table_head")],
    [p("KLOTZ-Prioritäten", "table"), p("", "table")],
    [p("Kaffeehaus-Design", "table"), p("", "table")],
    [p("Eventplaner Stufe 1", "table"), p("", "table")],
    [p("Inhalte und Verantwortliche", "table"), p("", "table")],
    [p("Budget / Staffelung", "table"), p("", "table")],
]
decision_table = Table(decision_rows, colWidths=[50 * mm, 115 * mm], rowHeights=[8 * mm] + [14 * mm] * 5)
decision_table.setStyle(
    TableStyle(
        [
            ("BACKGROUND", (0, 0), (-1, 0), NAVY),
            ("GRID", (0, 0), (-1, -1), 0.5, LINE),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 6),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ("TOPPADDING", (0, 0), (-1, -1), 6),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ("BACKGROUND", (0, 2), (-1, 2), PALE),
            ("BACKGROUND", (0, 4), (-1, 4), PALE),
        ]
    )
)
story += [decision_table, Spacer(1, 7 * mm), p("Aufgabenliste", "h2")]

task_rows = [[p("Aufgabe / Unterlage", "table_head"), p("Verantwortlich", "table_head"), p("Bis", "table_head"), p("Erledigt", "table_head")]]
for _ in range(5):
    task_rows.append([p("", "table"), p("", "table"), p("", "table"), p("[ ]", "table")])
task_table = Table(task_rows, colWidths=[82 * mm, 38 * mm, 27 * mm, 18 * mm], rowHeights=[7 * mm] + [10 * mm] * 5)
task_table.setStyle(
    TableStyle(
        [
            ("BACKGROUND", (0, 0), (-1, 0), NAVY),
            ("GRID", (0, 0), (-1, -1), 0.5, LINE),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("ALIGN", (-1, 1), (-1, -1), "CENTER"),
            ("LEFTPADDING", (0, 0), (-1, -1), 5),
            ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ]
    )
)
story += [task_table, Spacer(1, 6 * mm)]
story += [
    question("Termin für Protokoll / verbindliches Angebot / nächste Abstimmung", height=14 * mm, lines=2),
    Table(
        [[SignatureLine("Notiz / Bestätigung KLOTZ"), SignatureLine("Notiz / Bestätigung SaaleWeb")]],
        colWidths=[82.5 * mm, 82.5 * mm],
        style=TableStyle([("VALIGN", (0, 0), (-1, -1), "BOTTOM"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 7)]),
    ),
    Spacer(1, 3 * mm),
    Table(
        [[p("Hinweis: Diese Arbeitsunterlage dokumentiert den Gesprächsstand. Verbindlich sind erst das nachfolgende Angebot und die darin vereinbarten Leistungen, Preise und Termine.", "small")]],
        colWidths=[165 * mm],
        style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), PALE_GREEN), ("BOX", (0, 0), (-1, -1), 0.6, GREEN), ("LEFTPADDING", (0, 0), (-1, -1), 8), ("RIGHTPADDING", (0, 0), (-1, -1), 8), ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7)]),
    ),
]

doc = MeetingFormDoc(str(OUTPUT))
doc.build(story)
print(OUTPUT)
