from __future__ import annotations

from pathlib import Path
from typing import Iterable, Sequence

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    LongTable,
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

PAGE_W, PAGE_H = A4

NAVY = colors.HexColor("#17213A")
PURPLE = colors.HexColor("#7054D9")
MAGENTA = colors.HexColor("#C54FB0")
MINT = colors.HexColor("#DDF5E9")
GREEN = colors.HexColor("#17745A")
INK = colors.HexColor("#20253A")
MUTED = colors.HexColor("#667085")
LINE = colors.HexColor("#D9DDE8")
PALE = colors.HexColor("#F6F5FB")
PALE_PURPLE = colors.HexColor("#F0EBFF")
PALE_ORANGE = colors.HexColor("#FFF3E8")
ORANGE = colors.HexColor("#A34B16")
WHITE = colors.white


pdfmetrics.registerFont(TTFont("Arial", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", r"C:\Windows\Fonts\arialbd.ttf"))
pdfmetrics.registerFont(TTFont("Georgia", r"C:\Windows\Fonts\georgia.ttf"))
pdfmetrics.registerFont(TTFont("Georgia-Bold", r"C:\Windows\Fonts\georgiab.ttf"))


def styles(language: str) -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "cover_kicker": ParagraphStyle(
            "cover_kicker",
            parent=base["Normal"],
            fontName="Arial-Bold",
            fontSize=10,
            leading=13,
            textColor=colors.HexColor("#BFD5FF"),
            tracking=1.2,
            spaceAfter=8,
        ),
        "cover_title": ParagraphStyle(
            "cover_title",
            parent=base["Title"],
            fontName="Georgia-Bold",
            fontSize=29 if language == "de" else 27,
            leading=34,
            textColor=WHITE,
            spaceAfter=16,
        ),
        "cover_sub": ParagraphStyle(
            "cover_sub",
            parent=base["Normal"],
            fontName="Arial",
            fontSize=12,
            leading=18,
            textColor=colors.HexColor("#E7E9F4"),
            spaceAfter=8,
        ),
        "h1": ParagraphStyle(
            "h1",
            parent=base["Heading1"],
            fontName="Georgia-Bold",
            fontSize=22,
            leading=27,
            textColor=NAVY,
            spaceBefore=0,
            spaceAfter=9,
        ),
        "h2": ParagraphStyle(
            "h2",
            parent=base["Heading2"],
            fontName="Arial-Bold",
            fontSize=13.5,
            leading=17,
            textColor=PURPLE,
            spaceBefore=9,
            spaceAfter=5,
        ),
        "h3": ParagraphStyle(
            "h3",
            parent=base["Heading3"],
            fontName="Arial-Bold",
            fontSize=10.5,
            leading=14,
            textColor=NAVY,
            spaceBefore=7,
            spaceAfter=3,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["BodyText"],
            fontName="Arial",
            fontSize=9.2,
            leading=13.1,
            textColor=INK,
            spaceAfter=5,
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["BodyText"],
            fontName="Arial",
            fontSize=7.8,
            leading=10.4,
            textColor=MUTED,
            spaceAfter=3,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            parent=base["BodyText"],
            fontName="Arial",
            fontSize=9.0,
            leading=12.6,
            leftIndent=12,
            firstLineIndent=-7,
            bulletIndent=4,
            textColor=INK,
            spaceAfter=3.5,
        ),
        "number": ParagraphStyle(
            "number",
            parent=base["BodyText"],
            fontName="Arial",
            fontSize=9.0,
            leading=12.6,
            leftIndent=16,
            firstLineIndent=-12,
            textColor=INK,
            spaceAfter=4,
        ),
        "quote": ParagraphStyle(
            "quote",
            parent=base["BodyText"],
            fontName="Georgia",
            fontSize=10.5,
            leading=15,
            textColor=NAVY,
            leftIndent=8,
            rightIndent=8,
            spaceAfter=5,
        ),
        "callout": ParagraphStyle(
            "callout",
            parent=base["BodyText"],
            fontName="Arial",
            fontSize=9,
            leading=13,
            textColor=INK,
            spaceAfter=0,
        ),
        "table": ParagraphStyle(
            "table",
            parent=base["BodyText"],
            fontName="Arial",
            fontSize=7.6,
            leading=10.1,
            textColor=INK,
        ),
        "table_bold": ParagraphStyle(
            "table_bold",
            parent=base["BodyText"],
            fontName="Arial-Bold",
            fontSize=7.6,
            leading=10.1,
            textColor=INK,
        ),
        "table_head": ParagraphStyle(
            "table_head",
            parent=base["BodyText"],
            fontName="Arial-Bold",
            fontSize=7.6,
            leading=9.6,
            textColor=WHITE,
        ),
        "tag": ParagraphStyle(
            "tag",
            parent=base["BodyText"],
            fontName="Arial-Bold",
            fontSize=7.3,
            leading=9,
            textColor=PURPLE,
        ),
    }


def p(text: str, st: ParagraphStyle) -> Paragraph:
    return Paragraph(text, st)


def bullet_list(items: Iterable[str], st: ParagraphStyle) -> list[Paragraph]:
    return [Paragraph(f"• {item}", st) for item in items]


def numbered(items: Iterable[str], st: ParagraphStyle) -> list[Paragraph]:
    return [Paragraph(f"{idx}. {item}", st) for idx, item in enumerate(items, 1)]


def callout(text: str, st: ParagraphStyle, kind: str = "info") -> Table:
    if kind == "warn":
        bg, border = PALE_ORANGE, ORANGE
    elif kind == "good":
        bg, border = MINT, GREEN
    else:
        bg, border = PALE_PURPLE, PURPLE
    t = Table([[Paragraph(text, st)]], colWidths=[165 * mm])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), bg),
                ("BOX", (0, 0), (-1, -1), 0.8, border),
                ("LINEBEFORE", (0, 0), (0, -1), 4, border),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 9),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
            ]
        )
    )
    return t


def table(
    rows: Sequence[Sequence[str]],
    widths: Sequence[float],
    st: dict[str, ParagraphStyle],
    header: bool = True,
    compact: bool = False,
) -> LongTable:
    data = []
    for r_idx, row in enumerate(rows):
        row_data = []
        for cell in row:
            if r_idx == 0 and header:
                row_data.append(Paragraph(cell, st["table_head"]))
            else:
                row_data.append(Paragraph(cell, st["table"]))
        data.append(row_data)
    t = LongTable(data, colWidths=widths, repeatRows=1 if header else 0, hAlign="LEFT")
    commands = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.35, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4 if compact else 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4 if compact else 6),
    ]
    if header:
        commands.append(("BACKGROUND", (0, 0), (-1, 0), NAVY))
    start = 1 if header else 0
    for i in range(start, len(rows)):
        if (i - start) % 2 == 1:
            commands.append(("BACKGROUND", (0, i), (-1, i), PALE))
    t.setStyle(TableStyle(commands))
    return t


def section_title(st: dict[str, ParagraphStyle], kicker: str, title: str, intro: str | None = None):
    items = [p(kicker.upper(), st["tag"]), Spacer(1, 2 * mm), p(title, st["h1"])]
    if intro:
        items.append(p(intro, st["body"]))
    items.append(HRFlowable(width="100%", thickness=0.7, color=LINE, spaceBefore=2, spaceAfter=8))
    return items


class MeetingDocTemplate(BaseDocTemplate):
    def __init__(self, filename: str, title: str, language: str):
        super().__init__(
            filename,
            pagesize=A4,
            leftMargin=20 * mm,
            rightMargin=20 * mm,
            topMargin=22 * mm,
            bottomMargin=18 * mm,
            title=title,
            author="SaaleWeb.de - Kostiantyn Mykhailov",
            subject="Interner Gesprächsleitfaden für den Termin KLOTZ.mobi und Kaffeehaus Meuschau",
        )
        self.language = language
        self.doc_title = title
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="normal")
        self.addPageTemplates(PageTemplate(id="main", frames=[frame], onPage=self._decorate))

    def _decorate(self, canvas, doc):
        page = canvas.getPageNumber()
        canvas.saveState()
        if page == 1:
            canvas.setFillColor(NAVY)
            canvas.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
            canvas.setFillColor(PURPLE)
            canvas.circle(PAGE_W - 26 * mm, PAGE_H - 26 * mm, 38 * mm, stroke=0, fill=1)
            canvas.setFillColor(MAGENTA)
            canvas.circle(PAGE_W - 2 * mm, PAGE_H - 2 * mm, 23 * mm, stroke=0, fill=1)
            canvas.setStrokeColor(colors.HexColor("#3A4564"))
            canvas.setLineWidth(0.6)
            for y in range(28, 170, 14):
                canvas.line(18 * mm, y * mm, PAGE_W - 18 * mm, y * mm)
        else:
            canvas.setStrokeColor(LINE)
            canvas.setLineWidth(0.5)
            canvas.line(20 * mm, PAGE_H - 14 * mm, PAGE_W - 20 * mm, PAGE_H - 14 * mm)
            canvas.setFont("Arial-Bold", 7.5)
            canvas.setFillColor(MUTED)
            header = "KLOTZ.mobi + Kaffeehaus Meuschau | Interner Gesprächsleitfaden"
            canvas.drawString(20 * mm, PAGE_H - 10.8 * mm, header)
            canvas.setFont("Arial", 7.5)
            canvas.drawRightString(PAGE_W - 20 * mm, PAGE_H - 10.8 * mm, "Stand 28.10.2026")
            canvas.setStrokeColor(LINE)
            canvas.line(20 * mm, 12 * mm, PAGE_W - 20 * mm, 12 * mm)
            canvas.setFont("Arial", 7.3)
            canvas.setFillColor(MUTED)
            note = "Intern - nicht zur Weitergabe" if self.language == "de" else "Внутренний документ - не передавать клиенту"
            canvas.drawString(20 * mm, 8 * mm, note)
            canvas.drawRightString(PAGE_W - 20 * mm, 8 * mm, f"{page}")
        canvas.restoreState()


def cover(st: dict[str, ParagraphStyle], language: str) -> list:
    if language == "de":
        kicker = "INTERNER GESPRÄCHSLEITFADEN"
        title = "Termin mit KLOTZ und Kaffeehaus Meuschau"
        sub = "Ablauf, Präsentationsdramaturgie, Fragen, Einwandbehandlung und Abschluss für den 29. Oktober 2026, ca. 14:00 Uhr"
        badges = "KLOTZ-Relaunch  |  Kaffeehaus-Designentscheidung  |  Scoping  |  nächster Schritt"
        owner = "Vorbereitet für Kostiantyn Mykhailov · SaaleWeb.de"
    else:
        kicker = "ВНУТРЕННИЙ СЦЕНАРИЙ ВСТРЕЧИ"
        title = "Встреча с KLOTZ и Kaffeehaus Meuschau"
        sub = "Порядок разговора, презентация демо, вопросы, ответы на возражения и закрытие встречи 29 октября 2026 года, около 14:00"
        badges = "KLOTZ Relaunch  |  выбор дизайна кафе  |  уточнение объёма  |  следующий шаг"
        owner = "Подготовлено для Kostiantyn Mykhailov · SaaleWeb.de"
    return [
        Spacer(1, 30 * mm),
        p(kicker, st["cover_kicker"]),
        p(title, st["cover_title"]),
        p(sub, st["cover_sub"]),
        Spacer(1, 10 * mm),
        callout(f"<b>{badges}</b>", st["callout"], "good"),
        Spacer(1, 57 * mm),
        p(owner, st["cover_sub"]),
        p("Stand: 28.10.2026", st["cover_sub"]),
        PageBreak(),
    ]


def build_german(path: Path):
    st = styles("de")
    story = cover(st, "de")

    story += section_title(st, "01 · Ziel", "Was morgen erreicht werden soll", "Der Termin ist kein reiner Design-Pitch. Er soll aus Interesse eine belastbare Entscheidungsgrundlage für ein verbindliches Angebot machen.")
    story += bullet_list(
        [
            "Verstehen, welche geschäftlichen Ziele bei KLOTZ und beim Kaffeehaus wirklich Priorität haben.",
            "Für das Kaffeehaus eine Designrichtung wählen: Variante A, Variante B oder eine klar definierte Kombination.",
            "Die offenen Inhalte, Zuständigkeiten, technischen Zugänge und Betriebsregeln klären.",
            "Den Eventplaner sauber abgrenzen: Anfragequalifizierung heute, echte Belegungslogik erst nach bestätigten Regeln.",
            "Den Budgetrahmen von 15.000 bis 19.000 EUR netto grundsätzlich bestätigen oder ein priorisiertes Alternativpaket vereinbaren.",
            "Einen konkreten nächsten Schritt mit Termin, Verantwortlichen und benötigten Unterlagen festhalten.",
        ],
        st["bullet"],
    )
    story.append(Spacer(1, 4 * mm))
    story.append(callout("<b>Erfolgskriterium:</b> Nicht zwingend eine sofortige Unterschrift. Erfolg ist, wenn am Ende keine wesentlichen Unklarheiten mehr bestehen und der Weg zum verbindlichen Festpreis vereinbart ist.", st["callout"], "good"))
    story += [p("Empfohlener Ablauf für 60 Minuten", st["h2"])]
    story.append(
        table(
            [
                ["Zeit", "Thema", "Ziel"],
                ["0-5 Min.", "Begrüßung und Zielbild", "Gesprächsrahmen setzen, Erwartungen abgleichen"],
                ["5-15 Min.", "KLOTZ-Demo", "Strategie, Referenzen, Anfrageweg, Migration greifbar machen"],
                ["15-30 Min.", "Kaffeehaus A/B", "Varianten erleben, Richtung oder Hybrid festlegen"],
                ["30-45 Min.", "Scoping-Fragen", "Inhalte, Betrieb, Rechte, Zugänge, Eventplaner klären"],
                ["45-53 Min.", "Technik, SEO, Betrieb", "Vertrauen schaffen, Lock-in und Risiken erklären"],
                ["53-60 Min.", "Budget und nächster Schritt", "Rahmen bestätigen, Aufgaben und Termin festhalten"],
            ],
            [25 * mm, 54 * mm, 86 * mm],
            st,
        )
    )
    story.append(PageBreak())

    story += section_title(st, "02 · Vorbereitung", "30 Minuten vor dem Termin", "Ein ruhiger, vorbereiteter Ablauf wirkt stärker als zusätzliche Funktionen.")
    story += bullet_list(
        [
            "Laptop vollständig laden; Netzteil, Maus, HDMI/USB-C-Adapter und mobilen Hotspot mitnehmen.",
            "Beide Demo-Links vor Abfahrt öffnen; Startseiten, Anfrageformulare, Menü und je eine Unterseite in separaten Tabs vorbereiten.",
            "PDFs lokal speichern; zusätzlich Screenshots der wichtigsten Ansichten bereithalten, falls WLAN oder Vercel nicht verfügbar sind.",
            "Browser-Zoom auf 100 %, Benachrichtigungen aus, private Tabs und Zugangsdaten schließen.",
            "Einen mobilen Viewport zeigen: nicht nur behaupten, dass die Seiten mobil funktionieren.",
            "Dieses Dokument, einen Notizblock und die Liste der offenen Fragen ausdrucken.",
            "Nicht live programmieren. Wünsche notieren, einordnen und nach dem Termin kalkulieren.",
        ],
        st["bullet"],
    )
    story += [p("Vorzeigbare Stationen", st["h2"])]
    story.append(
        table(
            [
                ["KLOTZ", "Kaffeehaus"],
                ["Startseite und klare Leistungswege", "Startseite Variante A: warm und klassisch"],
                ["Eine Leistungsseite", "Startseite Variante B: Werkhalle und Scroll-Inszenierung"],
                ["Eine echte Referenzgalerie", "Räume/Galerie mit sichtbarer Kennzeichnung Visualisierung"],
                ["Ein Wissensartikel", "Eventplaner Stufe 1 und Anfrageformular"],
                ["Anfrageweg / Projektlotse", "Vorläufige Speisekarte und opt-in Video"],
            ],
            [82.5 * mm, 82.5 * mm],
            st,
        )
    )
    story.append(callout("<b>Vor dem Öffnen der Demos sagen:</b> „Die Prototypen zeigen Gestaltung, Nutzerführung und technische Qualität. Inhalte, Bilder, Preise und Betriebsregeln werden vor der Veröffentlichung gemeinsam final geprüft.“", st["callout"], "warn"))
    story.append(PageBreak())

    story += section_title(st, "03 · Einstieg", "So eröffnen Sie das Gespräch", "Kurz, verbindlich und ohne sofort über Technik zu sprechen.")
    story.append(callout("„Vielen Dank, Herr Klotz, dass Sie sich heute die Zeit nehmen und dass ich die Räume persönlich kennenlernen darf. Ich möchte Ihnen nicht einfach zwei Websites verkaufen. Mein Ziel ist, dass wir heute drei Dinge klären: welche Richtung zu Ihren beiden Marken passt, welche Funktionen im ersten Schritt wirklich wirtschaftlich sinnvoll sind und welche Informationen wir für ein verbindliches Festpreisangebot noch brauchen. Ich zeige zuerst kurz KLOTZ, danach beide Kaffeehaus-Varianten. Anschließend gehen wir gemeinsam die offenen Punkte durch.“", st["quote"], "info"))
    story += [p("Drei Einstiegsfragen", st["h2"])]
    story += numbered(
        [
            "„Was wäre für Sie sechs Monate nach dem Launch ein klarer Erfolg - mehr qualifizierte Anfragen, bessere Sichtbarkeit, weniger Erklärungsaufwand oder etwas anderes?“",
            "„Welche der beiden Marken hat zeitlich und wirtschaftlich zuerst Priorität?“",
            "„Gibt es seit dem Lastenheft neue Entscheidungen, die ich heute unbedingt berücksichtigen sollte?“",
        ],
        st["number"],
    )
    story.append(callout("Hören Sie hier länger zu, als Sie sprechen. Die Antworten bestimmen, welche Demo-Teile Sie betonen und ob Sie später über den vollen Umfang oder über Prioritäten sprechen.", st["callout"], "good"))
    story += [p("Übergang zur Präsentation", st["h2"]), p("„Dann zeige ich Ihnen jetzt nicht jede Seite, sondern die Stellen, an denen sich Strategie, Gestaltung und Anfragegewinnung konkret verbinden.“", st["quote"])]
    story.append(PageBreak())

    story += section_title(st, "04 · Demo KLOTZ", "KLOTZ in acht bis zehn Minuten zeigen", "Nicht durch jede Seite klicken. Eine nachvollziehbare Kundengeschichte erzählen.")
    story.append(
        table(
            [
                ["Station", "Was zeigen", "Was sagen"],
                ["1. Startseite", "Positionierung, Leistungswege, regionale Ausrichtung", "„Besucher erkennen schneller, ob KLOTZ für ihr Vorhaben passt und welcher nächste Schritt sinnvoll ist.“"],
                ["2. Leistung", "Eine repräsentative Leistungsseite", "„Jede Leistung bekommt genug Substanz für Menschen, klassische Suche und KI-gestützte Antwortsysteme - ohne Keyword-Textwüste.“"],
                ["3. Referenz", "Galerie und Projektstruktur", "„Referenzen sollen nicht nur schön aussehen, sondern Leistung, Ort, Aufgabe und Ergebnis nachvollziehbar machen.“"],
                ["4. Wissen", "Einen vollständigen Artikel", "„Wissensinhalte beantworten echte Kauf- und Planungsfragen und stärken fachliche Autorität.“"],
                ["5. Anfrage", "Formular und optional Projektlotse", "„Die Seite führt zu einer qualifizierten Anfrage. Der Projektlotse ist eine Option, kein Ersatz für persönliche Beratung.“"],
            ],
            [27 * mm, 55 * mm, 83 * mm],
            st,
        )
    )
    story += [p("Vier Punkte, die Sie aktiv nennen", st["h2"])]
    story += bullet_list(
        [
            "Bestehende wertvolle URLs und Rankings werden vor dem Relaunch inventarisiert; Redirects entstehen aus einer echten URL-Matrix, nicht pauschal.",
            "Die Demo ist absichtlich nicht indexierbar. Production erhält erst nach Freigabe die endgültigen Canonicals, Sitemap, strukturierte Daten und Messung.",
            "Legacy-Fotos dürfen für die Präsentation genutzt werden; Nutzungsrechte und Aktualität für Production werden einzeln bestätigt.",
            "Ein historischer Labortest vom 26.09.2026 zeigte 99 Punkte für den damaligen Prototyp und 37 für die damalige Website. Das ist ein Vergleichswert, keine Garantie für einen späteren festen Score.",
        ],
        st["bullet"],
    )
    story.append(PageBreak())

    story += section_title(st, "05 · Demo Kaffeehaus", "Zwei Wege zum selben Ziel", "Beide Varianten haben dieselben Inhalte, Funktionen und Qualitätsziele. Die Entscheidung betrifft Markenwirkung und Dramaturgie.")
    story.append(
        table(
            [
                ["", "Variante A - Saale-Salon", "Variante B - Werkhalle"],
                ["Wirkung", "Warm, klassisch, elegant, einladend", "Modern, industriell, eigenständig, B2B-stark"],
                ["Stärke", "Familienfeiern, Tradition, vertraute Atmosphäre", "Seminare, Firmenkunden, unverwechselbare Positionierung"],
                ["Risiko", "Kann bei zu viel Klassik weniger differenzierend wirken", "Kann bei zu viel Dunkelheit/kühler Optik Distanz erzeugen"],
                ["Empfehlung", "Wenn emotionale Wärme klar im Vordergrund steht", "Als strategische Basis; mit warmen Flächen und ruhiger Bewegung kombinieren"],
            ],
            [29 * mm, 68 * mm, 68 * mm],
            st,
        )
    )
    story += [p("Präsentationsfolge", st["h2"])]
    story += numbered(
        [
            "Variante A zwei bis drei Minuten zeigen: Hero, Wege Seminare/Feiern/Café, Raumwirkung.",
            "Variante B vier bis fünf Minuten zeigen: Hero-Fenster, Rundgang, mobile Ansicht und reduced-motion/fallback erklären.",
            "Gleiche Funktionen zeigen: Eventplaner, Anfrage, Menü, FAQ. Damit wird klar, dass Designentscheidung und Funktionsumfang getrennt sind.",
            "Nicht fragen „Welche gefällt Ihnen besser?“, sondern: „Welche Wirkung soll ein Firmenkunde und welche Wirkung soll eine Familie in den ersten zehn Sekunden erleben?“",
        ],
        st["number"],
    )
    story.append(callout("<b>SaaleWeb-Empfehlung:</b> Variante B als Grundlage, aber mit den warmen Elfenbein- und Holztönen der Variante A. So bleibt die Seite für Seminare eigenständig, ohne zu schwarz oder zu kühl zu wirken.", st["callout"], "good"))
    story.append(callout("<b>Ehrliche Abgrenzung:</b> Bearbeitete Raumbilder bleiben als „Visualisierung“ gekennzeichnet. Menü, Preise und Food-Medien sind vorläufige Beispiele und werden vor Production ersetzt oder bestätigt.", st["callout"], "warn"))
    story.append(PageBreak())

    story += section_title(st, "06 · Scoping KLOTZ", "Diese Entscheidungen brauchen Sie für das Festpreisangebot")
    story.append(
        table(
            [
                ["Priorität", "Frage", "Warum sie wichtig ist"],
                ["Muss", "Welche Leistungen und Kundengruppen haben 2027 höchste Vertriebspriorität?", "Bestimmt Navigation, Startseite und Content-Reihenfolge"],
                ["Muss", "Welche 6-10 Projekte dürfen mit Fotos, Ort, Aufgabe und Ergebnis veröffentlicht werden?", "Referenzstruktur und Glaubwürdigkeit"],
                ["Muss", "Wer liefert und genehmigt Texte, Fotos und technische Aussagen?", "Vermeidet Verzögerungen und Haftungsrisiken"],
                ["Muss", "Wer besitzt Domain, DNS, Drupal-Zugang, Hosting, Search Console und bestehende Analytics?", "Migration, Messung und Go-live"],
                ["Muss", "Welche Kontaktwege sollen Anfragen erhalten: E-Mail, Formular, Telefon, WhatsApp?", "Formularlogik, Datenschutz, Zuständigkeit"],
                ["Muss", "Welche URLs/Anfragen bringen heute bereits Geschäft?", "Ranking- und Redirect-Priorisierung"],
                ["Danach", "Welche Konfiguratoren, Rechner oder externen Tools müssen erhalten bleiben?", "Technischer Umfang"],
                ["Danach", "Wer ist fachlicher Autor/Prüfer für Ratgeber und FAQ?", "E-E-A-T und nachhaltige Redaktion"],
                ["Danach", "Welche Partner, Zertifikate und Bewertungen sind aktuell und belegbar?", "Nur bestätigte Vertrauenssignale veröffentlichen"],
            ],
            [22 * mm, 83 * mm, 60 * mm],
            st,
            compact=True,
        )
    )
    story.append(PageBreak())

    story += section_title(st, "07 · Scoping Kaffeehaus", "Was vor Design-Freigabe und Production geklärt werden muss")
    story.append(
        table(
            [
                ["Bereich", "Konkrete Fragen"],
                ["Marke", "Bleibt „Kaffeehaus Meuschau“ der endgültige Name? Welches Logo ist verbindlich? Welche Variante bzw. Kombination wird freigegeben?"],
                ["Start", "Ab welchem konkreten Zeitraum dürfen Veranstaltungen angenommen werden? Wie wird „Frühjahr 2027“ formuliert?"],
                ["Kapazität", "Wie viele Gäste sitzend, stehend und im Hof? Aktuell bestätigt ist nur 60-75 Personen plus Hofbereich."],
                ["Räume/Technik", "Welche Bestuhlung, Leinwand, Beamer, WLAN, Audio, Licht und Küche dürfen verbindlich genannt werden?"],
                ["Catering", "Eigene Küche, feste Partner, externe Caterer, Getränkebindung, Kaffeepausen, Buffets - was gilt wirklich?"],
                ["Wochenendcafé", "Startdatum, Öffnungstage, Zeiten, Frühstück/Brunch, Reservierung und finale Karte?"],
                ["Anreise", "Adresse, Parken, ÖPNV, Barrierefreiheit und Zugang zum Hof - was ist bestätigt?"],
                ["Eventplaner", "Welche Statuswerte und Sperrregeln soll eine 6-Monats-Belegungsübersicht zeigen? Wer pflegt sie?"],
                ["Anfragen", "Welche Mailbox empfängt Formulare? Wer antwortet in welcher Zeit? Wie lange werden Daten gespeichert?"],
                ["Recht", "Wer ist Betreiber und Verantwortlicher für Impressum, Datenschutz, Inhalte und Bildrechte?"],
            ],
            [39 * mm, 126 * mm],
            st,
            compact=True,
        )
    )
    story.append(callout("<b>Besonders morgen entscheiden:</b> Designrichtung, finale Namens-/Logo-Basis, Kapazitätsdefinition, Eventplaner-Stufe 1 und Verantwortlicher für Inhalte. Alles andere kann mit klaren Fristen in das Protokoll.", st["callout"], "good"))
    story.append(PageBreak())

    story += section_title(st, "08 · Technik", "Komplexes einfach und glaubwürdig erklären")
    story.append(
        table(
            [
                ["Thema", "Kurze Antwort für den Kunden"],
                ["Warum Next.js?", "„Weil wir damit sehr schnelle, mobile und suchmaschinenfreundliche Seiten bauen und beide Marken unabhängig weiterentwickeln können. Die Technologie ist offen und breit dokumentiert.“"],
                ["Was ist das Redaktionssystem?", "„Eine auf Ihre Inhalte zugeschnittene Oberfläche. Sie pflegen Seiten, Projekte, Artikel, FAQ, Menü und später Termine, ohne sich durch ein allgemeines Baukastensystem arbeiten zu müssen.“"],
                ["Abhängigkeit von SaaleWeb?", "„Nein. Nach vollständiger Bezahlung übergeben wir Git-Repository, Dokumentation, Zugänge, Datenbankexport sowie Content und Medien. Ein anderer Next.js-/PostgreSQL-Entwickler kann übernehmen.“"],
                ["Zwei Sites, eine Basis?", "„Gemeinsame technische Qualitätsbausteine, aber unabhängiges Design, Inhalte, SEO, Analytics, Veröffentlichung und Weiterentwicklung.“"],
                ["SEO/GEO/AIO?", "„Wir schaffen technische Sauberkeit, klare Entitäten, strukturierte Daten und beantwortbare Inhalte. Das verbessert die Voraussetzungen, garantiert aber keine Platzierung in Google oder KI-Systemen.“"],
                ["Messbarkeit?", "„Wir richten Search Console und eine abgestimmte Analytics-Lösung ein und messen Formulare, Telefon-/E-Mail-Klicks und wichtige Nutzerwege. Datenschutz und Einwilligung werden vorher geklärt.“"],
                ["Hosting/Daten?", "„Frontend und Hosting werden passend zum Betrieb gewählt; PostgreSQL/Neon wird getrennt betrachtet. Hostinger- und Datenbankkosten bleiben transparent und sind nicht proprietär gebunden.“"],
                ["Barrierefreiheit?", "„Semantische Struktur, Tastaturbedienung, Kontrast, Fokus und automatisierte Axe-Prüfungen sind Teil der Qualitätssicherung.“"],
            ],
            [42 * mm, 123 * mm],
            st,
            compact=True,
        )
    )
    story.append(PageBreak())

    story += section_title(st, "09 · Einwände", "Wahrscheinliche Fragen und belastbare Antworten - Teil 1")
    story.append(
        table(
            [
                ["Frage / Einwand", "Antwort"],
                ["„Warum 15.000 bis 19.000 EUR?“", "„Weil der Umfang zwei eigenständige Websites, Strategie, individuelles UX/UI, Entwicklung, Content-Struktur, SEO, Migration, Tracking und Qualitätssicherung umfasst. Wir kalkulieren nicht nur Seitenzahl, sondern einen messbaren Vertriebs- und Anfrageprozess.“"],
                ["„Eine andere Agentur ist günstiger.“", "„Das kann sein. Entscheidend ist, ob Migration, Redirects, Content, Performance, Übergabe, Messung und beide Marken im Vergleich enthalten sind. Ich vergleiche gern Position für Position.“"],
                ["„Warum nicht WordPress?“", "„WordPress kann für viele Projekte gut funktionieren. Für Ihre Anforderungen empfehlen wir die Basis, mit der wir Performance, individuelle Prozesse und spätere Erweiterungen am saubersten beherrschen. Wichtig ist nicht das Etikett, sondern Wartbarkeit und Übergabefähigkeit.“"],
                ["„Garantieren Sie PageSpeed 99?“", "„Nein, einen festen Laborscore seriös zu garantieren wäre falsch. Wir definieren Performance-Budgets, testen repräsentative Seiten und optimieren Bilder, Code und Fonts. Die bisherigen Werte zeigen die technische Richtung.“"],
                ["„Garantieren Sie Google- oder KI-Rankings?“", "„Nein. Wir garantieren saubere Umsetzung und nachvollziehbare Maßnahmen, keine fremden Algorithmen. Rankings hängen auch von Wettbewerb, Inhalten, Autorität und laufender Pflege ab.“"],
                ["„Sind 12-16 Wochen sicher?“", "„Das ist realistisch, wenn Inhalte, Zugänge und Freigaben termingerecht kommen. Verzögerungen auf Kundenseite verschieben den Plan; deshalb legen wir Zuständigkeiten und Freigabefristen fest.“"],
            ],
            [54 * mm, 111 * mm],
            st,
            compact=True,
        )
    )
    story.append(PageBreak())

    story += section_title(st, "10 · Einwände", "Wahrscheinliche Fragen und belastbare Antworten - Teil 2")
    story.append(
        table(
            [
                ["Frage / Einwand", "Antwort"],
                ["„Ist der Eventplaner eine Buchung?“", "„Nein. Stufe 1 qualifiziert die Anfrage und überträgt Wünsche in das Formular. Eine echte Reservierung oder automatische Verfügbarkeit braucht bestätigte Regeln, Datenhaltung und Verantwortlichkeiten.“"],
                ["„Ist die 6-Monats-Belegung im Bonus?", "„Im finalen Angebot definieren wir Stufe 1 eindeutig. Eine einfache, manuell gepflegte Übersicht kann dazugehören; automatische Preis-/Verfügbarkeitslogik, Buchung und Zahlung sind eine separate Stufe.“"],
                ["„Sendet das Formular schon echte E-Mails?“", "„Der Prototyp validiert den vollständigen Ablauf im sicheren Preview-Modus. Echte SMTP-Zugangsdaten und End-to-End-Zustellung werden erst nach Freigabe eingerichtet und getestet.“"],
                ["„Was enthält die Wartung für 120 EUR/Monat?“", "„Updates, Monitoring, Backups, Sicherheitsprüfung und bis zu 30 Minuten kleinere Korrekturen pro Monat. Neue Funktionen und größere Inhalte werden transparent nach Aufwand angeboten.“"],
                ["„Was, wenn wir die Agentur wechseln?“", "„Sie erhalten die vereinbarten Nutzungsrechte, Repository, Dokumentation, Zugänge, Datenbankdump sowie Content- und Medienexport. Standardtechnologien ermöglichen die Fortführung.“"],
                ["„Können wir später CRM, Kalender oder Automatisierung ergänzen?“", "„Ja. Die Architektur bereitet das vor. Wir bauen es aber erst, wenn Prozesse, Datenschutz, Rollen und Nutzen konkret feststehen.“"],
                ["„Was kostet der KI-Projektlotse?“", "„Der Prototyp zeigt den möglichen Nutzen. Vor Production klären wir Modell, Datenschutz, Kostenlimit, Fehlerbehandlung und ob die Funktion wirtschaftlich sinnvoll ist.“"],
            ],
            [54 * mm, 111 * mm],
            st,
            compact=True,
        )
    )
    story.append(PageBreak())

    story += section_title(st, "11 · Preisgespräch", "Den wirtschaftlichen Rahmen souverän führen")
    story += [p("Aktueller vorläufiger Rahmen", st["h2"])]
    story.append(
        table(
            [
                ["Position", "Netto"],
                ["Strategie, Konzeption, SEO-Bestandsanalyse", "1.200-1.500 EUR"],
                ["Relaunch KLOTZ.mobi", "4.000-5.000 EUR"],
                ["Website Kaffeehaus Meuschau", "2.000-2.600 EUR"],
                ["UX/UI und individuelles Webdesign", "2.300-2.900 EUR"],
                ["Redaktionssystem und technische Entwicklung", "2.800-3.500 EUR"],
                ["SEO, Local SEO, strukturierte Daten", "1.100-1.400 EUR"],
                ["Migration und 301-Weiterleitungen", "1.000-1.300 EUR"],
                ["Analytics, Search Console, Conversion-Tracking", "600-800 EUR"],
                ["Gesamtrahmen", "15.000-19.000 EUR"],
            ],
            [120 * mm, 45 * mm],
            st,
            compact=True,
        )
    )
    story += [p("Laufende Kosten und Bedingungen", st["h2"])]
    story += bullet_list(
        [
            "Wartung und Support: 120 EUR netto/Monat; Reaktionszeit und enthaltene Leistungen schriftlich festhalten.",
            "Zusatzleistungen: 60 EUR/Stunde oder 480 EUR/Tag, soweit nicht im Festpreis enthalten.",
            "Hostinger-Angebot in der Ersteinschätzung: 191,52 EUR netto für 48 Monate. Preisstand 28.09.2026 - vor Bestellung neu prüfen.",
            "Neon/PostgreSQL, Domainverlängerungen und variable Drittanbieter-/KI-Kosten separat und nutzungsabhängig.",
        ],
        st["bullet"],
    )
    story.append(callout("<b>Interne Verhandlungsregel:</b> Den möglichen Nachlass von bis zu 30 % nicht freiwillig eröffnen. Erst Umfang und Entscheidungsgründe klären. Falls nötig, Rabatt an Gegenleistungen binden: beide Websites, Wartungsvertrag, schnelle Freigaben, definierter Umfang und Erlaubnis als Referenzprojekt. Nie sagen, dass SaaleWeb den Auftrag „unbedingt braucht“.", st["callout"], "warn"))
    story.append(PageBreak())

    story += section_title(st, "12 · Grenzen", "Was Sie nicht versprechen sollten")
    story += bullet_list(
        [
            "Keine garantierten Rankings, AI-Overview-/ChatGPT-Sichtbarkeit oder festen PageSpeed-Werte.",
            "Kein Go-live-Datum ohne bestätigte Inhalte, Zugänge, Freigaben und Migrationsinventar.",
            "Keine automatische Buchung, Zahlung oder Verfügbarkeit, solange Betriebsregeln und Verantwortlichkeiten nicht feststehen.",
            "Keine Aussage, dass visualisierte Räume den fertigen Zustand exakt zeigen.",
            "Keine ungeprüften Preise, Öffnungszeiten, Kapazitäten, Parkplätze, Barrierefreiheit, Ausstattung, Partner oder Zertifikate.",
            "Keine reale Formularzustellung behaupten, solange nur Preview-Modus getestet wurde.",
            "Keine unbegrenzten Änderungen im Festpreis. Zwei Korrekturrunden pro Phase und klare Change-Requests sind angemessen.",
            "Keine Zusage, dass Hostinger allein PostgreSQL/Neon ersetzt. Hosting und Datenbank sind getrennte Bausteine.",
        ],
        st["bullet"],
    )
    story.append(callout("Wenn Sie etwas nicht sicher wissen: „Das möchte ich Ihnen nicht aus dem Bauch heraus versprechen. Ich nehme den Punkt auf und bestätige ihn Ihnen schriftlich im finalen Angebot.“ Das wirkt professioneller als eine spontane Zusage.", st["callout"], "good"))
    story += [p("Historische Messwerte korrekt einordnen", st["h2"])]
    story.append(p("Die Zahlen in den Präsentationen sind dokumentierte Labormessungen zu bestimmten Daten und Zuständen. SEO 69 beim Kaffeehaus entstand durch bewusstes noindex im Demo. Spätere Inhalte, Hosting, Drittanbieter und reale Nutzerbedingungen verändern Werte. Deshalb immer von Ziel, Budget und laufender Prüfung sprechen - nicht von Garantie.", st["body"]))
    story.append(PageBreak())

    story += section_title(st, "13 · Abschluss", "So führen Sie zu einem verbindlichen nächsten Schritt")
    story.append(callout("„Ich fasse kurz zusammen, was wir heute entschieden haben: [Designrichtung], [Prioritäten], [Eventplaner-Umfang] und [offene Unterlagen]. Auf dieser Basis erstelle ich Ihnen bis [Datum] ein verbindliches Angebot mit genauer Leistungsabgrenzung, Meilensteinen, Festpreis und laufenden Kosten. Von Ihnen benötige ich bis [Datum] [Unterlagen/Zugänge]. Passt dieser Ablauf für Sie?“", st["quote"], "info"))
    story += [p("Vor dem Aufstehen abhaken", st["h2"])]
    story += bullet_list(
        [
            "[ ] Kaffeehaus-Designrichtung oder konkreter Hybrid festgelegt",
            "[ ] KLOTZ-Vertriebsprioritäten benannt",
            "[ ] Eventplaner Stufe 1 und spätere Kalenderlogik abgegrenzt",
            "[ ] Inhaltsverantwortliche und Freigabefristen benannt",
            "[ ] Fehlende Fotos, Projektdaten, Zugänge und Rechtstexte zugeordnet",
            "[ ] Budgetrahmen grundsätzlich akzeptiert oder Prioritäten zur Reduktion festgelegt",
            "[ ] Termin für Protokoll und verbindliches Angebot vereinbart",
            "[ ] Nächster persönlicher/online Termin nur bei echtem Bedarf festgelegt",
        ],
        st["bullet"],
    )
    story += [p("Nach dem Termin - innerhalb von 24 Stunden", st["h2"])]
    story += numbered(
        [
            "Kurzes Protokoll mit Entscheidungen, offenen Punkten, Verantwortlichen und Terminen senden.",
            "Keine neuen Leistungen „nebenbei“ versprechen; Unklarheiten als Option oder Ausschluss markieren.",
            "Festpreis erst nach bestätigtem Scope nennen; Abweichungsmechanismus und Korrekturrunden dokumentieren.",
            "Demos bis zur Entscheidung geschützt/noindex lassen und keine Production-Schaltung ohne gesonderte Freigabe vornehmen.",
        ],
        st["number"],
    )
    story.append(PageBreak())

    story += section_title(st, "14 · Kurzkarte", "Eine Seite für den Tisch")
    story.append(
        table(
            [
                ["Moment", "Merksatz"],
                ["Start", "Erst Ziele verstehen, dann Demo zeigen."],
                ["KLOTZ", "Vom Besucherproblem zur qualifizierten Anfrage - nicht nur neues Design."],
                ["Kaffeehaus", "B als Basis, Wärme aus A; Wirkung für Firmenkunden und Familien testen."],
                ["Eventplaner", "Stufe 1 qualifiziert. Belegung/Buchung braucht Regeln, Daten und Zuständigkeit."],
                ["Technik", "Offene Standards, dokumentierte Übergabe, unabhängige Sites."],
                ["SEO/GEO/AIO", "Voraussetzungen verbessern, keine Rankings versprechen."],
                ["Preis", "15-19k netto für zwei Sites und kompletten Relaunch-Prozess; nur vergleichbare Leistungen vergleichen."],
                ["Rabatt", "Nicht freiwillig. Nur gegen klaren Umfang und strategische Gegenleistung."],
                ["Unsicherheit", "Aufnehmen und schriftlich bestätigen - nicht spontan versprechen."],
                ["Abschluss", "Entscheidungen + Verantwortliche + Daten + Termin für Festpreisangebot."],
            ],
            [38 * mm, 127 * mm],
            st,
        )
    )
    story.append(Spacer(1, 6 * mm))
    story.append(callout("<b>Die stärkste Haltung:</b> ruhig, konkret und ehrlich. Die Demos beweisen Initiative. Das Gespräch beweist, dass SaaleWeb nicht nur gestaltet, sondern geschäftliche, technische und betriebliche Risiken beherrscht.", st["callout"], "good"))

    doc = MeetingDocTemplate(str(path), "Gesprächsleitfaden KLOTZ und Kaffeehaus Meuschau", "de")
    doc.build(story)


def build_russian(path: Path):
    st = styles("ru")
    story = cover(st, "ru")

    story += section_title(st, "01 · Главная цель", "Какой результат считать успешным", "Это не просто показ дизайна. Встреча должна превратить интерес клиента в согласованный объём работ и понятный путь к договору.")
    story += bullet_list(
        [
            "Понять, какие бизнес-результаты клиент ждёт от KLOTZ и кафе в первую очередь.",
            "Выбрать направление дизайна кафе: A, B или конкретную комбинацию элементов.",
            "Собрать недостающие факты, доступы, права на контент и правила работы площадки.",
            "Чётко разделить демо, production, первый этап Eventplaner и будущую автоматизацию.",
            "Проверить готовность клиента к бюджету 15 000-19 000 EUR netto или договориться о приоритетном сокращённом объёме.",
            "Закончить встречу конкретными действиями, ответственными и датами.",
        ],
        st["bullet"],
    )
    story.append(callout("Не пытайтесь любой ценой получить подпись на месте. Более реалистичный успех: клиент выбрал направление, подтвердил рамки и согласился получить окончательное Festpreis-Angebot после фиксации объёма.", st["callout"], "good"))
    story += [p("План на 60 минут", st["h2"])]
    story.append(
        table(
            [
                ["Время", "Блок", "Результат"],
                ["0-5", "Приветствие и цели", "Понять ожидания, задать рамку"],
                ["5-15", "KLOTZ", "Показать стратегию, путь заявки, миграцию"],
                ["15-30", "Кафе A/B", "Получить выбор или критерии гибрида"],
                ["30-45", "Уточнение объёма", "Контент, функции, доступы, права"],
                ["45-53", "Техника и SEO", "Снять страхи, не перегрузить терминологией"],
                ["53-60", "Цена и следующий шаг", "Зафиксировать рамки, задачи и дату предложения"],
            ],
            [24 * mm, 53 * mm, 88 * mm],
            st,
        )
    )
    story.append(PageBreak())

    story += section_title(st, "02 · Подготовка", "Что сделать до выезда")
    story += bullet_list(
        [
            "Зарядить ноутбук; взять блок питания, мышь, HDMI/USB-C адаптер и телефон с мобильным интернетом.",
            "Заранее открыть обе версии кафе и KLOTZ; подготовить вкладки: главная, услуга, референс, статья, Eventplaner, форма, меню.",
            "Сохранить презентации и ключевые скриншоты локально на случай отсутствия интернета.",
            "Отключить уведомления, закрыть личные вкладки и секреты, проверить масштаб браузера 100 %.",
            "Показать хотя бы один мобильный viewport, а не только desktop.",
            "Распечатать список вопросов и оставить место для ответов.",
            "Не программировать на встрече. Любое пожелание сначала записать и оценить после встречи.",
        ],
        st["bullet"],
    )
    story += [p("Что показать, если интернет нестабилен", st["h2"])]
    story.append(
        table(
            [
                ["Проект", "Минимальный набор"],
                ["KLOTZ", "Главная, одна услуга, одна референсная страница, статья, форма/Projektlotse"],
                ["Kaffeehaus A", "Hero, три сценария использования, помещения, Eventplaner"],
                ["Kaffeehaus B", "Hero-окно, Rundgang, мобильный вид, меню и заявка"],
            ],
            [42 * mm, 123 * mm],
            st,
        )
    )
    story.append(callout("Перед показом скажите: „Die Prototypen zeigen Gestaltung, Nutzerführung und technische Qualität. Inhalte, Bilder, Preise und Betriebsregeln werden vor der Veröffentlichung gemeinsam final geprüft.“", st["callout"], "warn"))
    story.append(PageBreak())

    story += section_title(st, "03 · Начало разговора", "Готовый текст на немецком")
    story.append(callout("„Vielen Dank, Herr Klotz, dass Sie sich heute die Zeit nehmen und dass ich die Räume persönlich kennenlernen darf. Ich möchte Ihnen nicht einfach zwei Websites verkaufen. Mein Ziel ist, dass wir heute drei Dinge klären: welche Richtung zu Ihren beiden Marken passt, welche Funktionen im ersten Schritt wirklich wirtschaftlich sinnvoll sind und welche Informationen wir für ein verbindliches Festpreisangebot noch brauchen. Ich zeige zuerst kurz KLOTZ, danach beide Kaffeehaus-Varianten. Anschließend gehen wir gemeinsam die offenen Punkte durch.“", st["quote"], "info"))
    story += [p("Зачем такая формулировка", st["h2"])]
    story += bullet_list(
        [
            "Вы показываете, что пришли обсуждать бизнес, а не только внешний вид.",
            "Вы заранее объясняете, почему после встречи ещё нужен финальный расчёт.",
            "Вы получаете право управлять порядком разговора и не уходить сразу в детали.",
        ],
        st["bullet"],
    )
    story += [p("Три диагностических вопроса", st["h2"])]
    story += numbered(
        [
            "„Was wäre für Sie sechs Monate nach dem Launch ein klarer Erfolg - mehr qualifizierte Anfragen, bessere Sichtbarkeit, weniger Erklärungsaufwand oder etwas anderes?“",
            "„Welche der beiden Marken hat zeitlich und wirtschaftlich zuerst Priorität?“",
            "„Gibt es seit dem Lastenheft neue Entscheidungen, die ich heute unbedingt berücksichtigen sollte?“",
        ],
        st["number"],
    )
    story.append(callout("Не перебивайте. Записывайте словами клиента. Позже используйте именно эти формулировки в предложении: они покажут, что вы услышали его приоритеты.", st["callout"], "good"))
    story.append(PageBreak())

    story += section_title(st, "04 · Показ KLOTZ", "Рассказывайте историю, а не список функций")
    story.append(
        table(
            [
                ["Шаг", "Что показать", "Ключевая фраза"],
                ["1", "Главная и пути к услугам", "„Besucher erkennen schneller, ob KLOTZ für ihr Vorhaben passt und welcher nächste Schritt sinnvoll ist.“"],
                ["2", "Одну страницу услуги", "„Jede Leistung bekommt genug Substanz für Menschen, klassische Suche und KI-gestützte Antwortsysteme.“"],
                ["3", "Одну референсную страницу", "„Referenzen erklären Aufgabe, Leistung und Ergebnis - nicht nur schöne Bilder.“"],
                ["4", "Одну полноценную статью", "„Wissensinhalte beantworten echte Planungsfragen und stärken fachliche Autorität.“"],
                ["5", "Форму и Projektlotse", "„Der Weg endet in einer qualifizierten Anfrage; KI bleibt eine optionale Unterstützung.“"],
            ],
            [15 * mm, 56 * mm, 94 * mm],
            st,
        )
    )
    story += [p("Что обязательно проговорить", st["h2"])]
    story += bullet_list(
        [
            "Сохранение SEO начинается с инвентаризации URL, запросов и ценных страниц; 301-карта создаётся до запуска.",
            "Демо закрыто от индексации. Production-метаданные и structured data появятся после подтверждения фактов.",
            "Старые фотографии разрешены для презентации, но production-права и актуальность нужно подтвердить по каждому материалу.",
            "Сравнение 99 против 37 было лабораторным измерением 26.09.2026. Это доказательство направления, но не гарантия фиксированного будущего результата.",
        ],
        st["bullet"],
    )
    story.append(PageBreak())

    story += section_title(st, "05 · Показ кафе", "Как привести клиента к осмысленному выбору")
    story.append(
        table(
            [
                ["Критерий", "A - Saale-Salon", "B - Werkhalle"],
                ["Ощущение", "Тепло, классика, элегантность", "Современность, индустриальность, характер"],
                ["Сильнее для", "Семейных праздников и традиции", "Семинаров, компаний и отличимости"],
                ["Риск", "Может выглядеть менее уникально", "Может стать слишком тёмным и холодным"],
                ["Решение", "Использовать тепло и доверие", "Взять за основу, осветлить и смягчить элементами A"],
            ],
            [36 * mm, 64.5 * mm, 64.5 * mm],
            st,
        )
    )
    story += [p("Правильный порядок показа", st["h2"])]
    story += numbered(
        [
            "A: 2-3 минуты - атмосфера, три направления, помещения.",
            "B: 4-5 минут - hero, scroll-сценарий, Rundgang, mobile и fallback/reduced motion.",
            "Общие функции: Eventplaner, форма, меню, FAQ. Это отделяет выбор дизайна от выбора функций.",
            "Спросить не „что красивее?“, а „какое впечатление должен получить корпоративный клиент и семья в первые 10 секунд?“",
        ],
        st["number"],
    )
    story.append(callout("Ваша рекомендация: B как основа, но с тёплыми светлыми поверхностями и спокойной анимацией. Это сохраняет сильное B2B-позиционирование и не делает сайт мрачным.", st["callout"], "good"))
    story.append(callout("Не скрывайте границы: улучшенные изображения помещений отмечаются как Visualisierung; меню, цены и food-media пока примерные. До production клиент должен их подтвердить или заменить.", st["callout"], "warn"))
    story.append(PageBreak())

    story += section_title(st, "06 · Вопросы по KLOTZ", "Без этих ответов нельзя обещать точный Festpreis")
    story.append(
        table(
            [
                ["Приоритет", "Вопрос", "Что определяет"],
                ["Высокий", "Какие услуги и клиенты дают наибольший бизнес-приоритет в 2027?", "Навигацию, главную, контент"],
                ["Высокий", "Какие 6-10 проектов можно публиковать с фактами и фотографиями?", "Референсы и доверие"],
                ["Высокий", "Кто утверждает тексты, фото и технические данные?", "Сроки и ответственность"],
                ["Высокий", "Кто владеет доменом, DNS, Drupal, hosting, Search Console и Analytics?", "Миграцию и запуск"],
                ["Высокий", "Какие URL и запросы уже приносят обращения?", "301 и SEO-приоритеты"],
                ["Средний", "Какие конфигураторы/калькуляторы нужно сохранить?", "Технический scope"],
                ["Средний", "Кто будет автором и редактором статей/FAQ?", "Долгосрочное SEO"],
                ["Средний", "Какие партнёры, сертификаты и отзывы подтверждены?", "Доверительные элементы"],
            ],
            [23 * mm, 88 * mm, 54 * mm],
            st,
            compact=True,
        )
    )
    story.append(PageBreak())

    story += section_title(st, "07 · Вопросы по кафе", "Что нужно выяснить завтра")
    story.append(
        table(
            [
                ["Тема", "Вопросы"],
                ["Марка", "Финальное название? Утверждённый логотип? A, B или гибрид?"],
                ["Открытие", "С какого месяца реально принимаются мероприятия? Как формулировать Frühjahr 2027?"],
                ["Вместимость", "Сидя, стоя, двор? Сейчас подтверждено только 60-75 человек плюс Hofbereich."],
                ["Оснащение", "Столы/стулья, Leinwand, Beamer, WLAN, звук, свет, кухня - что можно обещать?"],
                ["Питание", "Собственная кухня, партнёры, внешние caterer, напитки, Kaffeepause, Buffet?"],
                ["Кафе", "Выходные дни, часы, Frühstück/Brunch, бронирование, окончательное меню?"],
                ["Доступ", "Адрес, парковка, ÖPNV, Barrierefreiheit, двор?"],
                ["Eventplaner", "Какие статусы видит посетитель на 6 месяцев? Кто обновляет календарь?"],
                ["Формы", "Куда приходят заявки? Кто отвечает? Срок хранения персональных данных?"],
                ["Право", "Кто Betreiber и Verantwortlicher для Impressum, Datenschutz, контента и фото?"],
            ],
            [38 * mm, 127 * mm],
            st,
            compact=True,
        )
    )
    story.append(callout("Минимум, который надо унести со встречи: дизайн-направление, границы Eventplaner Stufe 1, ответственное лицо за контент, список недостающих материалов и подтверждение, что бюджетный диапазон в принципе реалистичен.", st["callout"], "good"))
    story.append(PageBreak())

    story += section_title(st, "08 · Технические ответы", "Как объяснять без лишнего жаргона")
    story.append(
        table(
            [
                ["Вопрос", "Короткий ответ по-немецки", "Ваш внутренний смысл"],
                ["Почему Next.js?", "„Schnell, mobil, suchmaschinenfreundlich und offen dokumentiert.“", "Вы используете знакомый стек и сохраняете гибкость."],
                ["Что за CMS?", "„Ein maßgeschneidertes Redaktionssystem für Ihre tatsächlichen Inhalte.“", "Не обещать интерфейс до согласования ролей/типов контента."],
                ["Зависимость?", "„Repository, Dokumentation, Zugänge und Datenexport werden übergeben.“", "Другой разработчик сможет продолжить."],
                ["Два сайта?", "„Gemeinsame Qualitätsbasis, aber getrennte Designs, Inhalte, SEO und Veröffentlichung.“", "Не смешивать бренды и аналитику."],
                ["SEO/GEO/AIO?", "„Wir verbessern die Voraussetzungen, garantieren aber keine Platzierungen.“", "Структура, entities, schema, полезный контент."],
                ["Статистика?", "„Wir messen Formulare und wichtige Nutzerwege datenschutzkonform.“", "Выбор аналитики только после consent/privacy решения."],
                ["Смена агентства?", "„Standardtechnologien und vollständige Übergabe ermöglichen die Fortführung.“", "Git + docs + PostgreSQL dump + media/content export."],
            ],
            [35 * mm, 70 * mm, 60 * mm],
            st,
            compact=True,
        )
    )
    story.append(PageBreak())

    story += section_title(st, "09 · Возражения", "Цена, WordPress, сроки и показатели")
    story.append(
        table(
            [
                ["Возражение", "Рекомендуемый ответ"],
                ["Почему 15-19 тысяч?", "„Der Umfang umfasst zwei eigenständige Websites, Strategie, individuelles UX/UI, Entwicklung, Content-Struktur, SEO, Migration, Tracking und Qualitätssicherung.“"],
                ["Другая фирма дешевле", "„Ich vergleiche gern Position für Position. Entscheidend ist, ob Migration, Redirects, Content, Messung und Übergabe wirklich enthalten sind.“"],
                ["Почему не WordPress?", "„WordPress kann gut funktionieren. Für Ihre Anforderungen empfehlen wir die Basis, mit der wir Performance und individuelle Prozesse am saubersten beherrschen.“"],
                ["Гарантия PageSpeed 99?", "„Einen festen Laborscore seriös zu garantieren wäre falsch. Wir arbeiten mit Performance-Budgets und testen repräsentative Seiten.“"],
                ["Гарантия Google/AI?", "„Wir garantieren saubere Umsetzung und nachvollziehbare Maßnahmen, keine fremden Algorithmen.“"],
                ["12-16 недель точно?", "„Realistisch bei pünktlichen Inhalten, Zugängen und Freigaben; Abhängigkeiten werden im Plan festgehalten.“"],
            ],
            [51 * mm, 114 * mm],
            st,
            compact=True,
        )
    )
    story.append(PageBreak())

    story += section_title(st, "10 · Возражения", "Eventplaner, форма, обслуживание и права")
    story.append(
        table(
            [
                ["Вопрос", "Рекомендуемый ответ"],
                ["Это уже booking?", "„Nein. Stufe 1 qualifiziert die Anfrage. Echte Reservierung und automatische Verfügbarkeit brauchen bestätigte Regeln und Datenhaltung.“"],
                ["Календарь на 6 месяцев входит?", "„Im finalen Angebot definieren wir Stufe 1 eindeutig. Eine einfache manuelle Übersicht ist etwas anderes als automatische Buchungslogik.“"],
                ["Форма уже отправляет письма?", "„Der Ablauf ist im sicheren Preview-Modus validiert. Echte SMTP-Zustellung wird nach Freigabe eingerichtet und getestet.“"],
                ["Что в 120 EUR/месяц?", "„Updates, Monitoring, Backups, Sicherheitsprüfung und bis zu 30 Minuten kleinere Korrekturen.“"],
                ["Если сменим агентство?", "„Repository, Dokumentation, Zugänge, Datenbankdump sowie Content- und Medienexport werden vollständig übergeben.“"],
                ["Можно добавить CRM/автоматизацию?", "„Ja, sobald Prozesse, Rollen, Datenschutz und wirtschaftlicher Nutzen klar sind.“"],
                ["AI-Projektlotse?", "„Vor Production klären wir Datenschutz, Kostenlimit, Fehlerbehandlung und konkreten Nutzen.“"],
            ],
            [52 * mm, 113 * mm],
            st,
            compact=True,
        )
    )
    story.append(callout("Критический нюанс: текущий Eventplaner - это квалификация заявки, а не календарь и не бронь. Текущая форма работает в preview до подключения настоящих SMTP-параметров. Нельзя говорить, что письмо реально доставляется.", st["callout"], "warn"))
    story.append(PageBreak())

    story += section_title(st, "11 · Цена", "Как вести коммерческую часть")
    story.append(
        table(
            [
                ["Позиция", "Netto"],
                ["Стратегия, концепция, SEO-анализ", "1 200-1 500 EUR"],
                ["Relaunch KLOTZ.mobi", "4 000-5 000 EUR"],
                ["Website Kaffeehaus", "2 000-2 600 EUR"],
                ["UX/UI и индивидуальный дизайн", "2 300-2 900 EUR"],
                ["CMS/Redaktionssystem и разработка", "2 800-3 500 EUR"],
                ["SEO, Local SEO, structured data", "1 100-1 400 EUR"],
                ["Миграция и 301", "1 000-1 300 EUR"],
                ["Analytics, Search Console, tracking", "600-800 EUR"],
                ["Итого", "15 000-19 000 EUR"],
            ],
            [118 * mm, 47 * mm],
            st,
            compact=True,
        )
    )
    story += [p("Постоянные расходы", st["h2"])]
    story += bullet_list(
        [
            "Поддержка: 120 EUR netto/месяц - updates, monitoring, backups, security и до 30 минут мелких правок.",
            "Дополнительные работы: 60 EUR/час или 480 EUR/день.",
            "Hostinger: в предложении 191,52 EUR netto за 48 месяцев по цене от 28.09.2026; перед покупкой перепроверить.",
            "Neon/PostgreSQL, домены и сторонние/AI-сервисы оплачиваются отдельно по фактическому тарифу.",
        ],
        st["bullet"],
    )
    story.append(callout("Стратегия скидки: возможные 30 % не озвучивать заранее. Сначала определить точный scope. Если без уступки не закрывается, связать её с двумя сайтами, Wartungsvertrag, быстрыми согласованиями, фиксированными границами и разрешением использовать проект как референс. Никогда не говорить, что заказ нужен вам любой ценой.", st["callout"], "warn"))
    story += [p("Если бюджет ниже", st["h2"])]
    story += bullet_list(
        [
            "Не снижать цену при том же объёме - сокращать scope.",
            "Вариант 1: сначала KLOTZ, кафе вторым этапом.",
            "Вариант 2: оба сайта, но меньше initial content и без сложной автоматизации.",
            "Вариант 3: Eventplaner только как Anfrage-Assistent; календарь/CRM позже.",
            "Не сокращать миграцию, security, accessibility и базовое SEO - это создаст скрытый риск.",
        ],
        st["bullet"],
    )
    story.append(PageBreak())

    story += section_title(st, "12 · Красные линии", "Что нельзя обещать на встрече")
    story += bullet_list(
        [
            "Гарантированные позиции в Google, AI Overviews, ChatGPT или Gemini.",
            "Фиксированные Lighthouse/PageSpeed 95-100 на любой странице и при любых сторонних сервисах.",
            "Точную дату запуска без контента, доступов, утверждений и миграционной карты.",
            "Автоматическую бронь, оплату или достоверную доступность без бизнес-правил и базы данных.",
            "Что визуализированные помещения точно соответствуют будущему состоянию.",
            "Непроверенные цены, часы, вместимость, парковку, доступность, оборудование, партнёров.",
            "Что заявка реально доставлена, пока SMTP работает только в preview.",
            "Неограниченные правки в Festpreis.",
            "Что Hostinger полностью заменяет PostgreSQL/Neon: hosting и database - разные части.",
        ],
        st["bullet"],
    )
    story.append(callout("Лучший ответ при сомнении: „Das möchte ich Ihnen nicht aus dem Bauch heraus versprechen. Ich nehme den Punkt auf und bestätige ihn Ihnen schriftlich im finalen Angebot.“", st["callout"], "good"))
    story += [p("Как говорить о метриках", st["h2"])]
    story.append(p("Цифры из презентаций - лабораторные измерения на конкретную дату. SEO 69 у кафе связан с обязательным noindex демо. После контента, hosting, аналитики и сторонних интеграций показатели меняются. Поэтому обещаем процесс измерения и performance budget, а не магическое число.", st["body"]))
    story.append(PageBreak())

    story += section_title(st, "13 · Закрытие", "Готовый финальный текст")
    story.append(callout("„Ich fasse kurz zusammen, was wir heute entschieden haben: [Designrichtung], [Prioritäten], [Eventplaner-Umfang] und [offene Unterlagen]. Auf dieser Basis erstelle ich Ihnen bis [Datum] ein verbindliches Angebot mit genauer Leistungsabgrenzung, Meilensteinen, Festpreis und laufenden Kosten. Von Ihnen benötige ich bis [Datum] [Unterlagen/Zugänge]. Passt dieser Ablauf für Sie?“", st["quote"], "info"))
    story += [p("Перед окончанием встречи", st["h2"])]
    story += bullet_list(
        [
            "[ ] Выбран A, B или конкретный гибрид",
            "[ ] Названы коммерческие приоритеты KLOTZ",
            "[ ] Разделены Eventplaner Stufe 1 и будущий календарь/booking",
            "[ ] Названы ответственные за контент и сроки утверждений",
            "[ ] Распределены недостающие фото, факты, доступы и legal-данные",
            "[ ] Бюджет в принципе принят или согласовано сокращение scope",
            "[ ] Названа дата протокола и окончательного предложения",
        ],
        st["bullet"],
    )
    story += [p("В течение 24 часов после встречи", st["h2"])]
    story += numbered(
        [
            "Отправить короткий протокол: решения, открытые вопросы, ответственные, даты.",
            "Любую новую функцию обозначить как включённую, опцию или исключение.",
            "Festpreis давать только после подтверждения scope; отдельно указать изменения и коррекционные раунды.",
            "Не публиковать production, не включать индексацию, SMTP, Analytics, DNS или CRM без отдельного согласования.",
        ],
        st["number"],
    )
    story.append(PageBreak())

    story += section_title(st, "14 · Шпаргалка", "Одна страница на стол")
    story.append(
        table(
            [
                ["Момент", "Главная мысль"],
                ["Начало", "Сначала бизнес-цели, потом демо."],
                ["KLOTZ", "Не просто редизайн: путь от потребности к квалифицированной заявке."],
                ["Кафе", "B как основа, тепло из A; проверить реакцию B2B и семейной аудитории."],
                ["Eventplaner", "Stufe 1 квалифицирует; календарь/бронь требует правил, данных и ответственного."],
                ["Техника", "Открытые стандарты, документация, передача Git/данных, независимые сайты."],
                ["SEO/GEO/AIO", "Улучшаем условия видимости, не гарантируем чужие алгоритмы."],
                ["Цена", "15-19k за две отдельные системы и полный relaunch-процесс."],
                ["Скидка", "Не предлагать первой; только за фиксированный объём и стратегические условия."],
                ["Не знаю", "Записать и подтвердить письменно, а не обещать на месте."],
                ["Финал", "Решения, ответственные, материалы, даты, Festpreis-Angebot."],
            ],
            [38 * mm, 127 * mm],
            st,
        )
    )
    story.append(Spacer(1, 6 * mm))
    story.append(callout("Ваша сильная позиция: вы уже инвестировали время, сделали работающие прототипы и показали инициативу. Теперь важно показать не уступчивость любой ценой, а способность управлять проектом, рисками и результатом.", st["callout"], "good"))

    doc = MeetingDocTemplate(str(path), "Подготовка к встрече KLOTZ и Kaffeehaus Meuschau", "ru")
    doc.build(story)


if __name__ == "__main__":
    de = OUT / "SaaleWeb_Gespraechsleitfaden_KLOTZ_Kaffeehaus_DE.pdf"
    ru = OUT / "SaaleWeb_Podgotovka_k_vstreche_KLOTZ_Kaffeehaus_RU.pdf"
    build_german(de)
    build_russian(ru)
    print(de)
    print(ru)
