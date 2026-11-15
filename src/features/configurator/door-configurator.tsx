"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { ConfiguratorPageContent } from "@/domain/content/configurator";
import {
  defaultDoorPlan,
  doorForms,
  doorPlanText,
  doorPlanUrl,
  validateDoorPlan,
  type DoorModel,
  type DoorPlan,
  type ManufacturerDoorCatalog,
} from "@/domain/configurator/door-catalog";
import { savePlanningNote } from "./planning-note";
import "@/styles/door-configurator.css";

function ModelImage({
  model,
  sizes = "180px",
}: {
  model: DoorModel;
  sizes?: string;
}) {
  return model.image ? (
    <Image
      src={model.image.src}
      alt={`Haustür ${model.family} · ${model.imageModelId ?? model.id}`}
      width={model.image.width}
      height={model.image.height}
      sizes={sizes}
    />
  ) : (
    <div className="door-no-image">
      {model.family}
      <small>Keine Modellabbildung im Original verfügbar.</small>
    </div>
  );
}

function DimensionDrawing({ plan }: { plan: DoorPlan }) {
  const form = doorForms.find((f) => f.id === plan.form)!;
  const doorWidth = Number(plan.width) || 1100,
    doorHeight = Number(plan.height) || 2150;
  const left = form.left ? Number(plan.leftWidth) || 400 : 0,
    right = form.right ? Number(plan.rightWidth) || 400 : 0,
    top = form.top ? Number(plan.topHeight) || 400 : 0;
  const totalWidth = doorWidth + left + right,
    totalHeight = doorHeight + top;
  const scale = Math.min(270 / totalWidth, 240 / totalHeight);
  const w = totalWidth * scale,
    h = totalHeight * scale,
    x = (390 - w) / 2,
    y = 42;
  const dx = x + left * scale,
    dy = y + top * scale;
  return (
    <svg
      viewBox="0 0 390 340"
      className="door-dimensions"
      role="img"
      aria-label={`Maßskizze: Gesamtbreite ${totalWidth} mm, Gesamthöhe ${totalHeight} mm; ${form.label}`}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="#e3e8dd"
        stroke="#576654"
        strokeWidth="3"
      />
      <rect
        x={dx}
        y={dy}
        width={doorWidth * scale}
        height={doorHeight * scale}
        fill="#697b6d"
        stroke="#f3f2eb"
        strokeWidth="2"
      />
      {top > 0 && (
        <path d={`M${x} ${dy}h${w}`} stroke="#576654" strokeWidth="2" />
      )}
      <path
        d={
          plan.din === "rechts"
            ? `M${dx + 9} ${dy + 5}L${dx + doorWidth * scale - 6} ${dy + (doorHeight * scale) / 2}L${dx + 9} ${dy + doorHeight * scale - 5}`
            : `M${dx + doorWidth * scale - 9} ${dy + 5}L${dx + 6} ${dy + (doorHeight * scale) / 2}L${dx + doorWidth * scale - 9} ${dy + doorHeight * scale - 5}`
        }
        fill="none"
        stroke="#c5d3c2"
        strokeDasharray="4 4"
      />
      <path
        d={`M${x} 16v16M${x + w} 16v16M${x} 24h${w}M${x + w + 12} ${y}h16M${x + w + 12} ${y + h}h16M${x + w + 20} ${y}v${h}`}
        fill="none"
        stroke="#394a3b"
      />
      <text x="195" y="15" textAnchor="middle">
        {totalWidth} mm
      </text>
      <text
        transform={`translate(${x + w + 34},${y + h / 2}) rotate(90)`}
        textAnchor="middle"
      >
        {totalHeight} mm
      </text>
      <text x="195" y="312" textAnchor="middle">
        Türelement {plan.width} × {plan.height} mm
      </text>
      <text x="195" y="331" textAnchor="middle">
        DIN {plan.din} · nach {plan.opening}
      </text>
    </svg>
  );
}

export function DoorConfigurator({
  catalog,
  content,
}: {
  catalog: ManufacturerDoorCatalog;
  content: ConfiguratorPageContent["door"];
}) {
  const [plan, setPlan] = useState<DoorPlan>(() => defaultDoorPlan(catalog));
  const [collection, setCollection] = useState("all");
  const [query, setQuery] = useState("");
  const [glazing, setGlazing] = useState("all");
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [shown, setShown] = useState(24);
  const [fullMode, setFullMode] = useState(false);
  const [dimensionsTouched, setDimensionsTouched] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const result = validateDoorPlan(catalog, plan);
  const model = catalog.models.find((m) => m.id === plan.modelId)!;
  const form = doorForms.find((f) => f.id === plan.form)!;
  const leaf = catalog.colors.find((c) => c.id === plan.leafColor)!;
  const frame = catalog.colors.find((c) => c.id === plan.frameColor)!;
  const filtered = useMemo(
    () =>
      catalog.models.filter(
        (m) =>
          (collection === "all" || m.collections.includes(collection)) &&
          (!favoriteOnly || favorites.includes(m.id)) &&
          (glazing === "all" || m.hasGlass === (glazing === "glass")) &&
          `${m.family} ${m.id} ${m.title} ${m.description}`
            .toLocaleLowerCase("de")
            .includes(query.trim().toLocaleLowerCase("de")),
      ),
    [catalog, collection, query, favoriteOnly, favorites, glazing],
  );
  const related = catalog.models
    .filter(
      (m) =>
        m.collections.some((id) => model.collections.includes(id)) &&
        m.image &&
        !m.parentModel,
    )
    .slice(0, 6);
  const note = result.success ? doorPlanText(catalog, result.plan) : undefined;

  function update<K extends keyof DoorPlan>(key: K, value: DoorPlan[K]) {
    setPlan((p) => ({ ...p, [key]: value }));
    if (
      ["width", "height", "leftWidth", "rightWidth", "topHeight"].includes(key)
    )
      setDimensionsTouched(true);
  }
  function select(id: string) {
    setPlan((p) => ({ ...p, modelId: id }));
    setDimensionsTouched(true);
    dialog.current?.close();
    requestAnimationFrame(() => {
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ block: "center", behavior: "instant" });
    });
  }
  function openCatalog() {
    dialog.current?.showModal();
    document.getElementById("door-catalog-title")?.focus();
  }
  function toggleFavorite(id: string) {
    setFavorites((items) =>
      items.includes(id) ? items.filter((i) => i !== id) : [...items, id],
    );
  }
  function dimension(
    key: "width" | "height" | "leftWidth" | "rightWidth" | "topHeight",
    label: string,
  ) {
    const error = !result.success ? result.errors[key] : undefined;
    return (
      <div className="door-size-field">
        <label htmlFor={`door-${key}`}>{label}</label>
        <div>
          <input
            id={`door-${key}`}
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={plan[key]}
            onChange={(e) => update(key, e.target.value)}
            aria-invalid={dimensionsTouched && !!error}
            aria-describedby={
              error && dimensionsTouched ? `door-${key}-error` : undefined
            }
          />
          <span aria-hidden="true">mm</span>
        </div>
        {error && dimensionsTouched && (
          <p id={`door-${key}-error`} className="door-plan-error">
            {error}
          </p>
        )}
      </div>
    );
  }
  function colorSelect(key: "leafColor" | "frameColor", label: string) {
    const selected = key === "leafColor" ? leaf : frame;
    return (
      <div className="door-color-field">
        <label htmlFor={`door-${key}`}>{label}</label>
        <div>
          <span style={{ background: selected.hex }} aria-hidden="true" />
          <select
            id={`door-${key}`}
            value={plan[key]}
            onChange={(e) => update(key, e.target.value)}
          >
            {catalog.colors.map((color) => (
              <option key={color.id} value={color.id}>
                {color.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="door-configurator">
      <div className="door-catalog-proof">
        <div>
          <strong>{catalog.models.length}</strong>
          <span>Modellvarianten</span>
        </div>
        <div>
          <strong>{catalog.collections.length}</strong>
          <span>Kollektionen</span>
        </div>
        <div>
          <strong>{catalog.colors.length}</strong>
          <span>Farbmuster</span>
        </div>
        <p>
          Originalkatalog entdecken.
          <br />
          Ihr Projekt konkret vorbereiten.
        </p>
      </div>
      <div className="door-workbench">
        <div className="door-plan-controls configurator-interactive">
          <div className="door-selected-model">
            <p className="index-label">01 / Ihr Türmodell</p>
            <h3 ref={heading} tabIndex={-1}>
              {model.family}
              <span>{model.id}</span>
            </h3>
            <p>{model.description}</p>
            <div className="door-selected-actions">
              <button
                className="button button--primary"
                ref={trigger}
                type="button"
                onClick={openCatalog}
              >
                Alle {catalog.models.length} Varianten ansehen{" "}
                <span aria-hidden="true">↗</span>
              </button>
              <button
                type="button"
                className="door-favorite-button"
                aria-pressed={favorites.includes(model.id)}
                onClick={() => toggleFavorite(model.id)}
                aria-label={`Modell ${model.id} merken`}
              >
                {favorites.includes(model.id) ? "★" : "☆"}
              </button>
            </div>
          </div>
          <details className="door-plan-group" open>
            <summary>
              02 / Grundform & Maße <span aria-hidden="true">+</span>
            </summary>
            <div>
              <label htmlFor="door-form">Grundform</label>
              <select
                id="door-form"
                value={plan.form}
                onChange={(e) => update("form", e.target.value)}
              >
                {doorForms.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
              <div className="door-size-pair">
                {dimension("width", "Breite Türelement")}
                {dimension("height", "Höhe Türelement")}
              </div>
              {model.dimensions ? (
                <p className="door-range">
                  Modellrahmen aus dem Katalog: {model.dimensions.minWidth}–
                  {model.dimensions.maxWidth} mm breit ·{" "}
                  {model.dimensions.minHeight}–{model.dimensions.maxHeight} mm
                  hoch. Weitere Systemgrenzen im technischen Vollmodus prüfen.
                </p>
              ) : (
                <p className="door-range">
                  Für diese Variante enthält der Katalog keine vollständigen
                  Maßgrenzen. Bitte mit KLOTZ technisch abstimmen.
                </p>
              )}
              {form.left && dimension("leftWidth", "Breite Seitenteil links")}
              {form.right &&
                dimension("rightWidth", "Breite Seitenteil rechts")}
              {form.top && dimension("topHeight", "Höhe Oberlicht")}
              <p className="door-range">
                Seitenteil- und Oberlichtmaße sind Planungswünsche. Die
                konstruktive Aufteilung und das verbindliche Aufmaß werden
                abgestimmt.
              </p>
            </div>
          </details>
          <details className="door-plan-group">
            <summary>
              03 / Öffnung & Oberfläche <span aria-hidden="true">+</span>
            </summary>
            <div>
              <div className="door-size-pair">
                <div>
                  <label htmlFor="door-din">DIN-Richtung</label>
                  <select
                    id="door-din"
                    value={plan.din}
                    onChange={(e) =>
                      update("din", e.target.value as DoorPlan["din"])
                    }
                  >
                    <option value="rechts">DIN rechts</option>
                    <option value="links">DIN links</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="door-opening">Öffnen nach</label>
                  <select
                    id="door-opening"
                    value={plan.opening}
                    onChange={(e) =>
                      update("opening", e.target.value as DoorPlan["opening"])
                    }
                  >
                    <option value="innen">Innen</option>
                    <option value="aussen">Außen</option>
                  </select>
                </div>
              </div>
              {colorSelect("leafColor", "Flügel außen · Farbwunsch")}
              {colorSelect("frameColor", "Blendrahmen außen · Farbwunsch")}
              <p className="door-range">
                Farbmuster am Bildschirm sind unverbindlich. Verfügbarkeit und
                Materialkombination hängen vom Modell und System ab. Die
                Originalabbildung zeigt die Katalogausführung.
              </p>
            </div>
          </details>
          <div className="door-plan-summary">
            <p className="index-label">Ihre Auswahl auf einen Blick</p>
            <p role="status">
              {model.family} / {model.id} · {plan.width} × {plan.height} mm
              <br />
              {form.label} · DIN {plan.din}
            </p>
            {result.success ? (
              <>
                <Link
                  className="button button--primary"
                  href={doorPlanUrl(result.plan)}
                  prefetch={false}
                >
                  Türplanung besprechen <span aria-hidden="true">↗</span>
                </Link>
                <button
                  className="configurator-text-button"
                  type="button"
                  onClick={() =>
                    savePlanningNote(`Haustuer-${model.key}`, note!)
                  }
                >
                  Planungsnotiz herunterladen ↓
                </button>
              </>
            ) : (
              <p className="door-plan-error" role="status">
                Bitte die Maße an das gewählte Modell anpassen, bevor Sie Ihre
                Planung übernehmen.
              </p>
            )}
          </div>
        </div>
        <figure className="door-model-preview">
          <div className="door-model-preview__header">
            <span className="index-label">KLOTZ / {model.family}</span>
            <span>{model.id}</span>
          </div>
          <div className="door-model-preview__photo">
            <ModelImage model={model} sizes="(max-width: 760px) 90vw, 45vw" />
          </div>
          <figcaption>
            {!model.image
              ? "Für diese Variante liefert der Originalkatalog keine Modellabbildung."
              : model.imageModelId && model.imageModelId !== model.id
                ? `Abbildung Grundmodell ${model.imageModelId}. Gewählte Ausführung: ${model.id}; Variantenbeschreibung beachten.`
                : `Original-Modellabbildung ${model.id} · Katalogausführung.`}
          </figcaption>
          <div className="door-preview-color">
            <span style={{ backgroundColor: leaf.hex }} aria-hidden="true" />
            <div>
              <small>Gewünschte Flügeloberfläche</small>
              <strong>{leaf.label}</strong>
            </div>
            <span style={{ backgroundColor: frame.hex }} aria-hidden="true" />
            <div>
              <small>Gewünschter Blendrahmen</small>
              <strong>{frame.label}</strong>
            </div>
          </div>
        </figure>
      </div>
      <div className="door-plan-detail">
        <div>
          <p className="index-label">Maße & Proportionen</p>
          <h3>Das ganze Element im Blick.</h3>
          <p>
            Tür, Seitenteile und Oberlicht bilden zusammen Ihren Eingang. Die
            Skizze zeigt Ihre Planungsmaße und die Aufteilung; Produktdetails
            und Anschlüsse klären wir anschließend mit Ihnen.
          </p>
          {result.success && (
            <p className="door-total-dimension">
              <strong>
                {result.totalWidth} × {result.totalHeight}
              </strong>{" "}
              mm Gesamtmaß
            </p>
          )}
          <p className="door-range">
            Ansicht von außen · vereinfachte Maßskizze, keine
            Fertigungszeichnung. Die Original-Modellabbildung wird nicht auf
            Ihre Wunschmaße verzerrt.
          </p>
        </div>
        {result.success ? (
          <DimensionDrawing plan={result.plan} />
        ) : (
          <p className="door-dimensions-empty">
            Bitte gültige Maße eingeben, um die Maßskizze zu sehen.
          </p>
        )}
      </div>
      <div className="door-discovery configurator-interactive">
        <div>
          <h3>Weiter entdecken.</h3>
          <button
            type="button"
            className="configurator-text-button"
            onClick={openCatalog}
          >
            Zum vollständigen Modellkatalog ↗
          </button>
        </div>
        <div className="door-discovery__grid">
          {related.map((item) => (
            <button type="button" key={item.id} onClick={() => select(item.id)}>
              <ModelImage model={item} />
              <span>
                {item.family}
                <small>{item.id}</small>
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="door-technical configurator-interactive">
        <div>
          <p className="index-label">Technischer Vollmodus</p>
          <h3>Jedes Detail. Im Originalsystem.</h3>
          <p>
            System, Wärmeschutz, Beschläge, Glas, Sonderprofile und Zubehör
            konfigurieren Sie hier mit der vollständigen Herstellerlogik. Die
            Auswahl aus unserer Planung wird nicht automatisch in das
            Fremdsystem übertragen.
          </p>
          <p className="door-range">
            Beim Laden wird eine Verbindung zu konfigurator.klotz.mobi
            aufgebaut. Für diesen externen Dienst gelten dessen
            Datenschutzbedingungen.
          </p>
        </div>
        <button
          type="button"
          className="button button--secondary"
          aria-expanded={fullMode}
          onClick={() => setFullMode(!fullMode)}
        >
          {fullMode
            ? "Technischen Vollmodus schließen"
            : "Vollständigen Hersteller-Konfigurator laden"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
        {fullMode && (
          <div className="door-technical__frame">
            <p>
              Sie arbeiten jetzt im externen Originalsystem. Auf schmalen
              Geräten kann der Arbeitsbereich seitlich gescrollt werden.{" "}
              <a
                href={content.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                In eigenem Tab öffnen ↗
              </a>
            </p>
            <div>
              <iframe
                src={content.externalUrl}
                title="Vollständiger KLOTZ Haustürkonfigurator des Herstellers"
                referrerPolicy="no-referrer"
                sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups"
              />
            </div>
          </div>
        )}
      </div>
      <dialog
        ref={dialog}
        className="door-catalog-dialog"
        aria-labelledby="door-catalog-title"
        onClose={() => trigger.current?.focus()}
        onKeyDown={(e) => {
          if (e.key !== "Tab") return;
          const controls = [
            ...e.currentTarget.querySelectorAll<HTMLElement>(
              'button:not([disabled]), input, select, a[href], [tabindex="0"]',
            ),
          ].filter((el) => el.getClientRects().length > 0);
          const first = controls[0],
            last = controls[controls.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }}
      >
        <div className="door-catalog-dialog__heading">
          <div>
            <p className="index-label">
              Originalkatalog / {catalog.models.length} Varianten
            </p>
            <h2 id="door-catalog-title" tabIndex={-1}>
              Welche Tür ist Ihre?
            </h2>
          </div>
          <button
            type="button"
            aria-label="Modellkatalog schließen"
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
        </div>
        <div
          className="door-catalog-dialog__body"
          tabIndex={0}
          role="region"
          aria-label="Türmodelle und Filter"
        >
          <div className="door-catalog-filters">
            <div>
              <label htmlFor="door-search">
                Modell oder Artikelnummer suchen
              </label>
              <input
                id="door-search"
                type="search"
                placeholder="z. B. ABELIA, DAPHNE, DA01 …"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShown(24);
                }}
              />
            </div>
            <div>
              <label htmlFor="door-collection">Kollektion</label>
              <select
                id="door-collection"
                value={collection}
                onChange={(e) => {
                  setCollection(e.target.value);
                  setShown(24);
                }}
              >
                <option value="all">Alle Kollektionen</option>
                {catalog.collections.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="door-glazing">Glasausschnitt im Modell</label>
              <select
                id="door-glazing"
                value={glazing}
                onChange={(e) => {
                  setGlazing(e.target.value);
                  setShown(24);
                }}
              >
                <option value="all">Alle Varianten</option>
                <option value="glass">Mit Glasausschnitt</option>
                <option value="closed">Ohne erfassten Glasausschnitt</option>
              </select>
            </div>
          </div>
          <div className="door-catalog-toolbar">
            <p role="status">
              {filtered.length}{" "}
              {filtered.length === 1 ? "Variante" : "Varianten"} gefunden
            </p>
            <button
              type="button"
              aria-pressed={favoriteOnly}
              onClick={() => {
                setFavoriteOnly(!favoriteOnly);
                setShown(24);
              }}
            >
              ★ Merkliste ({favorites.length})
            </button>
          </div>
          {compare.length > 0 && (
            <section
              className="door-comparison"
              aria-labelledby="door-compare-title"
            >
              <div>
                <h3 id="door-compare-title">Ihr Modellvergleich</h3>
                <button type="button" onClick={() => setCompare([])}>
                  Vergleich leeren
                </button>
              </div>
              <div className="door-comparison__grid">
                {compare.map((id) => {
                  const item = catalog.models.find((m) => m.id === id)!;
                  return (
                    <article key={id}>
                      <ModelImage model={item} />
                      <h4>
                        {item.family} / {id}
                      </h4>
                      <p>{item.description}</p>
                      <p>
                        {item.dimensions
                          ? `${item.dimensions.minWidth}–${item.dimensions.maxWidth} mm breit · ${item.dimensions.minHeight}–${item.dimensions.maxHeight} mm hoch`
                          : "Maße technisch abstimmen"}
                      </p>
                      <button type="button" onClick={() => select(id)}>
                        Dieses Modell wählen ↗
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
          <div className="door-model-grid">
            {filtered.slice(0, shown).map((item) => (
              <article
                key={item.id}
                className={item.id === model.id ? "is-selected" : undefined}
              >
                <button
                  className="door-model-select"
                  type="button"
                  onClick={() => select(item.id)}
                  aria-label={`${item.family} ${item.id} auswählen`}
                >
                  <ModelImage model={item} />
                  <strong>
                    {item.family}
                    <span>{item.id}</span>
                  </strong>
                  <small>{item.title}</small>
                  {item.imageModelId && item.imageModelId !== item.id && (
                    <small className="door-base-image">
                      Abbildung Grundmodell {item.imageModelId}
                    </small>
                  )}
                </button>
                <div className="door-model-card-actions">
                  <button
                    type="button"
                    aria-label={`${item.id} merken`}
                    aria-pressed={favorites.includes(item.id)}
                    onClick={() => toggleFavorite(item.id)}
                  >
                    {favorites.includes(item.id) ? "★" : "☆"}
                  </button>
                  <button
                    type="button"
                    aria-pressed={compare.includes(item.id)}
                    disabled={!compare.includes(item.id) && compare.length >= 3}
                    onClick={() =>
                      setCompare((items) =>
                        items.includes(item.id)
                          ? items.filter((id) => id !== item.id)
                          : [...items, item.id],
                      )
                    }
                  >
                    {compare.includes(item.id)
                      ? "Im Vergleich ✓"
                      : "Vergleichen"}
                  </button>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="door-catalog-empty">
              Kein passendes Modell gefunden. Ändern Sie die Suche oder die
              Filter.
            </p>
          )}
          {shown < filtered.length && (
            <button
              type="button"
              className="button button--primary door-load-more"
              onClick={() => setShown(shown + 24)}
            >
              Weitere 24 Varianten zeigen ({filtered.length - shown}{" "}
              verbleibend)
            </button>
          )}
          <p className="door-catalog-footnote">
            Katalogstand{" "}
            {new Intl.DateTimeFormat("de-DE").format(
              new Date(catalog.capturedAt),
            )}
            . Varianten sind getrennt aufgeführt, auch beidseitige Ausführungen.
            Wo eine Variantenabbildung im Original fehlt, wird das zugehörige
            Grundmodell ausdrücklich gekennzeichnet; fehlende Bilder werden
            nicht durch erfundene Türen ersetzt. Merkliste und Vergleich gelten
            für diese Sitzung.
          </p>
        </div>
      </dialog>
    </div>
  );
}
