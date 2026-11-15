"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import type { ConfiguratorPageContent } from "@/domain/content/configurator";
import {
  calculateWindowPotential,
  energyPlanningText,
  energyRequestUrl,
  numberDe,
  validateEnergyInput,
  type EnergyDraft,
  type EnergyField,
  type EnergyInput,
  type HeatingSystem,
} from "@/domain/configurator/planning";
import { savePlanningNote } from "./planning-note";

type Props = { content: ConfiguratorPageContent["energy"] };

export function EnergyCalculator({ content }: Props) {
  const [draft, setDraft] = useState<EnergyDraft>(content.defaults);
  const [calculation, setCalculation] = useState<EnergyInput | null>(() => {
    const parsed = validateEnergyInput(content.defaults);
    return parsed.success ? parsed.input : null;
  });
  const [errors, setErrors] = useState<Partial<Record<EnergyField, string>>>(
    {},
  );
  const [dirty, setDirty] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);
  const system = content.systems.find((s) => s.id === draft.system)!;
  const result = calculation ? calculateWindowPotential(calculation) : null;
  const factorLabel =
    draft.system === "waermepumpe"
      ? "Jahresarbeitszahl (JAZ)"
      : "Nutzungsgrad der Heizung";

  function update<K extends EnergyField>(key: K, value: EnergyDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    setDirty(true);
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateEnergyInput(draft);
    if (!validation.success) {
      setErrors(validation.errors);
      setCalculation(null);
      requestAnimationFrame(() => errorRef.current?.focus());
      return;
    }
    setErrors({});
    setCalculation(validation.input);
    setDirty(false);
    setHasCalculated(true);
    requestAnimationFrame(() => {
      resultRef.current?.focus({ preventScroll: true });
      if (window.matchMedia("(max-width: 760px)").matches)
        resultRef.current?.scrollIntoView({
          block: "start",
          behavior: "instant",
        });
    });
  }
  function field(
    key: Exclude<EnergyField, "system">,
    label: string,
    unit: string,
    hint?: string,
  ) {
    return (
      <div className="energy-field">
        <label htmlFor={`energy-${key}`}>{label}</label>
        <div className="energy-field__input">
          <input
            id={`energy-${key}`}
            name={key}
            type="text"
            inputMode="decimal"
            value={draft[key]}
            onChange={(e) => update(key, e.target.value)}
            aria-invalid={!!errors[key]}
            aria-describedby={`energy-${key}-hint${errors[key] ? ` energy-${key}-error` : ""}`}
            autoComplete="off"
            maxLength={12}
          />
          <span aria-hidden="true">{unit}</span>
        </div>
        <small id={`energy-${key}-hint`}>{hint ?? unit}</small>
        {errors[key] && (
          <p className="energy-error" id={`energy-${key}-error`}>
            {errors[key]}
          </p>
        )}
      </div>
    );
  }
  return (
    <div className="energy-workbench">
      <form
        className="energy-form configurator-interactive"
        noValidate
        onSubmit={submit}
        aria-label="Fenster-Energiesparrechner"
      >
        {Object.keys(errors).length > 0 && (
          <div
            className="energy-errors"
            role="alert"
            tabIndex={-1}
            ref={errorRef}
          >
            <h3>Bitte prüfen Sie Ihre Angaben.</h3>
            <ul>
              {Object.entries(errors).map(([key, error]) => (
                <li key={key}>
                  <a href={`#energy-${key}`}>{error}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <fieldset className="energy-group">
          <legend>
            <span>01</span> Ihre Fenster
          </legend>
          {field(
            "area",
            "Gesamte Fensterfläche",
            "m²",
            "Außenmaße einschließlich Rahmen. Beispiel: 20 m², kein Gebäudewert.",
          )}
          <div className="energy-form__pair">
            <div>
              {field(
                "oldUw",
                "Uw-Wert Bestand",
                "W/(m²·K)",
                "Gesamtes Fenster, nicht nur Ug des Glases.",
              )}
              <div
                className="energy-presets"
                aria-label="Beispiele für bestehende Fenster"
              >
                {content.oldExamples.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => update("oldUw", item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              {field(
                "newUw",
                "Uw-Wert neues Fenster",
                "W/(m²·K)",
                "Aus Produktunterlagen oder als Rechenannahme.",
              )}
              <div
                className="energy-presets"
                aria-label="Beispiele für neue Fenster"
              >
                {content.newExamples.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => update("newUw", item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="energy-group">
          <legend>
            <span>02</span> Ihre Heizung
          </legend>
          <div className="energy-field">
            <label htmlFor="energy-system">Heizsystem</label>
            <select
              id="energy-system"
              name="system"
              value={draft.system}
              onChange={(e) => {
                const next = e.target.value as HeatingSystem;
                setDraft((current) => ({
                  ...current,
                  system: next,
                  factor: content.systems.find((s) => s.id === next)!
                    .exampleFactor,
                  price: "",
                }));
                setDirty(true);
              }}
              aria-describedby="energy-system-hint"
              aria-invalid={!!errors.system}
            >
              {content.systems.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
            <small id="energy-system-hint">{system.hint}</small>
            {errors.system && <p className="energy-error">{errors.system}</p>}
          </div>
          {field(
            "price",
            "Ihr Arbeitspreis (optional)",
            "€/kWh",
            "Aus Ihrer Abrechnung, ohne Grundpreis. Komma oder Punkt möglich. Kein Tarif vorgegeben.",
          )}
        </fieldset>
        <details
          className="energy-assumptions"
          open={!!errors.degreeDays || !!errors.factor || undefined}
        >
          <summary>
            Klima & Rechenannahmen anpassen <span aria-hidden="true">+</span>
          </summary>
          <div className="energy-assumptions__fields">
            {field(
              "degreeDays",
              "Gradtagzahl G20/15 pro Jahr",
              "K·d/a",
              "Startwert 3.239 aus dem bisherigen Rechner. Kein ermittelter Standortwert für Merseburg; bitte passende Klimadaten verwenden.",
            )}
            {field(
              "factor",
              factorLabel,
              "Faktor",
              draft.system === "waermepumpe"
                ? "JAZ = bereitgestellte Wärme / eingesetzter Strom über ein Jahr. Beispiel 3, anlagenspezifisch ersetzen."
                : "Verhältnis von Nutzwärme zu eingesetzter Energie. Beispielwert, keine Bewertung Ihrer Anlage.",
            )}
          </div>
        </details>
        <p className="energy-example-note">
          Alle Startwerte sind Rechenbeispiele. Die Uw-Beispiele aus dem
          bisherigen KLOTZ-Rechner beschreiben kein bestimmtes heute angebotenes
          Fenster.
        </p>
        <div className="energy-form__actions">
          <button type="submit" className="button button--primary">
            Potenzial berechnen <span aria-hidden="true">↗</span>
          </button>
          <button
            className="configurator-text-button"
            type="button"
            onClick={() => {
              setDraft(content.defaults);
              setErrors({});
              const parsed = validateEnergyInput(content.defaults);
              setCalculation(parsed.success ? parsed.input : null);
              setDirty(false);
              setHasCalculated(false);
            }}
          >
            Beispiel zurücksetzen
          </button>
        </div>
      </form>
      <aside
        className="energy-result"
        aria-label="Ergebnis des Fenstervergleichs"
      >
        <div className="energy-result__heading">
          <p className="index-label">
            {hasCalculated
              ? "Mit Ihren Eingaben"
              : "Startbeispiel / Werte anpassen"}
          </p>
          <h3 ref={resultRef} tabIndex={-1}>
            Ihr Fenstervergleich.
          </h3>
        </div>
        {dirty && (
          <p className="energy-result__notice" role="status">
            Werte geändert. Bitte neu berechnen, um das Ergebnis zu
            aktualisieren.
          </p>
        )}
        {result && calculation ? (
          <>
            <p className="energy-result__label">
              Rechnerisch geringere Wärmeverluste über Ihre Fenster
            </p>
            <p className="energy-result__number">
              <strong data-testid="saved-heat">
                {numberDe(result.savedHeat)}
              </strong>
              <span>kWh Wärme / Jahr</span>
            </p>
            {result.heatDifference > 0 ? (
              <p className="energy-result__reduction">
                <span>{numberDe(result.reduction, 1)} %</span> weniger
                Fenstertransmission in diesem Modell. Kein Prozentwert für das
                ganze Haus.
              </p>
            ) : (
              <p className="energy-result__reduction">
                Mit diesen Uw-Werten ergibt sich keine Verringerung der
                Transmissionswärmeverluste. Bitte prüfen Sie den Vergleich.
              </p>
            )}
            <figure className="energy-bars">
              <figcaption>
                Wärmeverlust der betrachteten Fensterfläche
              </figcaption>
              {[
                { label: "Bestand", value: result.oldLoss, className: "old" },
                { label: "Neu", value: result.newLoss, className: "new" },
              ].map((item) => (
                <div className="energy-bar" key={item.label}>
                  <div>
                    <span>{item.label}</span>
                    <span>{numberDe(item.value)} kWh/a</span>
                  </div>
                  <div className="energy-bar__track">
                    <span
                      className={`energy-bar__fill energy-bar__fill--${item.className}`}
                      style={{
                        width: `${(item.value / Math.max(result.oldLoss, result.newLoss)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </figure>
            <div className="energy-result__secondary">
              <div>
                <span>Zugeordnete Endenergiedifferenz</span>
                <strong data-testid="saved-energy">
                  {numberDe(result.savedEnergy)} <small>kWh/a</small>
                </strong>
              </div>
              <div>
                <span>Zugeordnete Kostendifferenz</span>
                {result.savedCost === undefined ? (
                  <p>Mit Ihrem Arbeitspreis berechenbar.</p>
                ) : (
                  <strong data-testid="saved-cost">
                    {numberDe(result.savedCost, 2)} <small>€/a</small>
                  </strong>
                )}
              </div>
            </div>
            <p className="energy-result__basis">
              Berechnet mit {numberDe(calculation.area, 4)} m² · Uw{" "}
              {numberDe(calculation.oldUw, 4)} →{" "}
              {numberDe(calculation.newUw, 4)} ·{" "}
              {numberDe(calculation.degreeDays, 4)} K·d/a ·{" "}
              {calculation.system === "waermepumpe" ? "JAZ" : "Nutzungsgrad"}{" "}
              {numberDe(calculation.factor, 4)}
              {calculation.price !== undefined
                ? ` · ${numberDe(calculation.price, 4)} €/kWh`
                : " · ohne Tarif"}
              .
            </p>
            <div className="energy-result__actions configurator-interactive">
              {dirty ? (
                <button className="button button--light" disabled>
                  Erst neu berechnen
                </button>
              ) : (
                <Link
                  className="button button--light"
                  href={energyRequestUrl(calculation)}
                  prefetch={false}
                >
                  Fenstertausch besprechen <span aria-hidden="true">↗</span>
                </Link>
              )}
              <button
                type="button"
                className="configurator-text-button"
                disabled={dirty}
                onClick={() =>
                  savePlanningNote(
                    "Fenstervergleich",
                    energyPlanningText(
                      calculation,
                      content.systems.find((s) => s.id === calculation.system)!
                        .label,
                    ),
                  )
                }
              >
                Vergleich herunterladen <span aria-hidden="true">↓</span>
              </button>
            </div>
          </>
        ) : (
          <p className="energy-result__empty">
            Nach gültigen Angaben erscheint hier Ihr Vergleich. Es wird kein
            Ergebnis aus unvollständigen Werten geschätzt.
          </p>
        )}
        <p className="energy-result__scope">{content.scope}</p>
      </aside>
    </div>
  );
}
