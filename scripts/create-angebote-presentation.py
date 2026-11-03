"""Create the two-page, print-friendly SaaleWeb / KLOTZ concept presentation."""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image
from pypdf import PdfReader, PdfWriter
from pypdf.generic import DictionaryObject, NameObject, TextStringObject
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output/pdf/SaaleWeb_KLOTZ_Angebote_Designkonzept.pdf"
TEMP = ROOT / "tmp/pdfs/angebote-presentation"
MASTERS = ROOT / "output/angebote-2026/masters"
OUT.parent.mkdir(parents=True, exist_ok=True)
TEMP.mkdir(parents=True, exist_ok=True)

W, H = landscape(A4)
MARGIN = 14.0
COL = 83.0
GAP = 10.0
IMAGE_TOP = 61.0
IMAGE_HEIGHT = COL * 4 / 3
INK = colors.HexColor("#202822")
MUTED = colors.HexColor("#59615a")
PURPLE = colors.HexColor("#6D28D9")
LIME = colors.HexColor("#d9ed97")
LINE = colors.HexColor("#d0d3c8")
PALE = colors.HexColor("#f6f4fa")

pdfmetrics.registerFont(TTFont("Arial", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", r"C:\Windows\Fonts\arialbd.ttf"))
pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="Arial-Bold")

draft = TEMP / "draft.pdf"
c = canvas.Canvas(str(draft), pagesize=(W, H), pageCompression=1)
c.setTitle("KLOTZ. Neu inszeniert. | SaaleWeb")
c.setAuthor("SaaleWeb")
c.setSubject("Fünf Angebotsmotive und die Empfehlung für einen durchgängigen Website-Relaunch")
c.setCreator("SaaleWeb")
checks: list[dict] = []


def para(text, x, top, width, size=10, leading=None, bold=False, color=INK, max_height=None):
    style = ParagraphStyle(
        "block",
        fontName="Arial-Bold" if bold else "Arial",
        fontSize=size,
        leading=leading or size * 1.28,
        textColor=color,
        spaceBefore=0,
        spaceAfter=0,
    )
    paragraph = Paragraph(text, style)
    _, height = paragraph.wrap(width * mm, H)
    if max_height is not None:
        assert height <= max_height * mm + 0.1, (text, height / mm, max_height)
    assert (top * mm + height) <= H - 9 * mm, text
    paragraph.drawOn(c, x * mm, H - top * mm - height)
    return height / mm


def line(x1, top, x2, color=LINE, thickness=0.5):
    c.setStrokeColor(color)
    c.setLineWidth(thickness)
    c.line(x1 * mm, H - top * mm, x2 * mm, H - top * mm)


def rectangle(x, top, width, height, fill, stroke=None):
    c.setFillColor(fill)
    if stroke is not None:
        c.setStrokeColor(stroke)
        c.setLineWidth(0.45)
    c.rect(x * mm, H - (top + height) * mm, width * mm, height * mm, fill=1, stroke=int(stroke is not None))


def header(title, intro):
    c.setFillColor(PURPLE)
    c.setFont("Arial-Bold", 17)
    c.drawString(MARGIN * mm, H - 17 * mm, "SaaleWeb")
    c.setFont("Arial", 8.5)
    c.setFillColor(MUTED)
    c.drawRightString((297 - MARGIN) * mm, H - 16.5 * mm, "KLOTZ / VISUELLES KONZEPT / 29.10.2026")
    line(MARGIN, 22, 297 - MARGIN)
    para(title, MARGIN, 27.2, 269, size=30, leading=33, bold=True, max_height=13)
    para(intro, MARGIN, 42.7, 269, size=10.5, leading=13.5, color=MUTED, max_height=10)


def footer(page):
    line(MARGIN, 190.5, 297 - MARGIN)
    para(
        "Gestaltungskonzept von SaaleWeb auf Basis der KLOTZ-Materialien. Abbildungen dienen der Veranschaulichung.",
        MARGIN, 193.0, 250, size=7, leading=8.5, color=MUTED, max_height=3.2,
    )
    para(
        "Preis- und Förderangaben dienen der Gestaltungsvorschau und sind vor Veröffentlichung zu bestätigen.",
        MARGIN, 197.0, 235, size=7, leading=8.5, color=MUTED, max_height=3.2,
    )
    c.setFont("Arial-Bold", 7.5)
    c.setFillColor(PURPLE)
    c.drawRightString((297 - MARGIN) * mm, H - 199.1 * mm, f"saaleweb.de  /  {page} von 2")


def poster(filename, index, label, column):
    x = MARGIN + column * (COL + GAP)
    para(f"{index:02d}  {label}", x, 54.2, COL, size=7.8, leading=9, bold=True, color=MUTED, max_height=3.5)
    path = MASTERS / filename
    with Image.open(path) as img:
        assert img.size == (1086, 1448), (path, img.size)
    c.drawImage(ImageReader(str(path)), x * mm, H - (IMAGE_TOP + IMAGE_HEIGHT) * mm, width=COL * mm, height=IMAGE_HEIGHT * mm)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.45)
    c.rect(x * mm, H - (IMAGE_TOP + IMAGE_HEIGHT) * mm, COL * mm, IMAGE_HEIGHT * mm, fill=0, stroke=1)
    checks.append({"file": filename, "placedWidthMM": COL, "placedHeightMM": IMAGE_HEIGHT, "effectiveDPI": round(1086 / (COL / 25.4), 1)})


header(
    "KLOTZ. Neu inszeniert.",
    "So sieht SaaleWeb Ihre Angebote: klar, hochwertig und auf eine persönliche Beratung ausgerichtet.",
)
poster("01-lamellendach-pergola.png", 1, "LAMELLENDACH & PERGOLA", 0)
poster("02-zaun-tor.png", 2, "ZAUN & TOR", 1)
poster("03-fenster-tueren.png", 3, "FENSTER & TÜREN", 2)
captions = [
    ("Produkt sichtbar machen.", "Eine starke Bildidee statt vieler Einzelmotive."),
    ("Vergleichen erleichtern.", "Preise und Varianten auf einen Blick."),
    ("Zur Beratung einladen.", "Ein verständlicher nächster Schritt."),
]
for index, (title, description) in enumerate(captions):
    x = MARGIN + index * (COL + GAP)
    para(title, x, 175.2, COL, size=9.6, leading=12, bold=True, max_height=4.5)
    para(description, x, 180.1, COL, size=8.5, leading=10.5, color=MUTED, max_height=5)
footer(1)
c.showPage()

header(
    "Ein Auftritt, der zusammenpasst.",
    "Unsere Empfehlung: Angebote, Leistungen und Anfragewege in einem durchgängigen Website-Relaunch zusammenführen.",
)
poster("04-terrassendach-carport.png", 4, "TERRASSENDACH & CARPORT", 0)
poster("05-sanierung-foerderung.png", 5, "SANIERUNG & FÖRDERUNG", 1)
right = MARGIN + 2 * (COL + GAP)
para("UNSERE EMPFEHLUNG", right, 54.2, COL, size=7.8, leading=9, bold=True, color=PURPLE, max_height=3.5)
rectangle(right, IMAGE_TOP, COL, IMAGE_HEIGHT, PALE)
para("Den Webauftritt<br/>als Ganzes erneuern.", right + 6, 67, COL - 12, size=20, leading=23, bold=True, max_height=20)
para(
    "Die neue Gestaltung sollte sich durch den gesamten Webauftritt ziehen: von der ersten Orientierung bis zur passenden Projektanfrage.",
    right + 6, 88, COL - 12, size=9.6, leading=13, color=MUTED, max_height=20,
)
items = [
    "Angebote und Leistungen klar gliedern.",
    "Inhalte und Bedingungen verständlich erklären.",
    "Mobil zur passenden Projektanfrage führen.",
    "Bilder und Texte prüfen und aktuell halten.",
]
cursor = 113.0
for number, text in enumerate(items, 1):
    para(f"{number:02d}", right + 6, cursor + 0.3, 6, size=7.8, leading=10, bold=True, color=PURPLE, max_height=4)
    used = para(text, right + 14, cursor, COL - 20, size=9.2, leading=12.5, bold=True, max_height=9)
    cursor += used + 4.0
assert cursor <= IMAGE_TOP + IMAGE_HEIGHT - 3, cursor

rectangle(MARGIN, 177, 269, 9.2, LIME)
para("Nächster Schritt: die Angebotsseite im neuen KLOTZ-Auftritt konkretisieren.", MARGIN + 4, 179.4, 250, size=10.4, leading=13, bold=True, max_height=5)
c.setStrokeColor(INK)
c.setLineWidth(1)
c.line(276 * mm, H - 183.2 * mm, 279.6 * mm, H - 179.6 * mm)
c.line(276.7 * mm, H - 179.6 * mm, 279.6 * mm, H - 179.6 * mm)
c.line(279.6 * mm, H - 179.6 * mm, 279.6 * mm, H - 182.5 * mm)
footer(2)
c.save()

reader = PdfReader(draft)
assert len(reader.pages) == 2
writer = PdfWriter()
writer.clone_document_from_reader(reader)
writer.root_object[NameObject("/Lang")] = TextStringObject("de-DE")
writer.root_object[NameObject("/ViewerPreferences")] = DictionaryObject({NameObject("/PrintScaling"): NameObject("/None")})
with OUT.open("wb") as stream:
    writer.write(stream)

verified = PdfReader(OUT)
assert len(verified.pages) == 2
assert [len(page.images) for page in verified.pages] == [3, 2]
assert "Website-Relaunch" in verified.pages[1].extract_text()
for page in verified.pages:
    assert abs(float(page.mediabox.width) - W) < 0.1
    assert abs(float(page.mediabox.height) - H) < 0.1
assert all(check["effectiveDPI"] >= 300 for check in checks)
summary = {"output": str(OUT), "pages": 2, "format": "A4 landscape", "imagesByPage": [3, 2], "printScaling": "None", "bytes": OUT.stat().st_size, "images": checks}
(TEMP / "validation.json").write_text(json.dumps(summary, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(json.dumps(summary, ensure_ascii=False))
