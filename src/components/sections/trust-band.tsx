import { trustFacts } from "@/content/trust";

export function TrustBand({ label = "KLOTZ in Zahlen" }: { label?: string }) {
  return (
    <section className="trust-band" aria-label={label}>
      <dl className="shell trust-band__grid">
        {trustFacts.map((fact) => (
          <div key={fact.label}>
            <dt>
              <span className="trust-band__value">{fact.value}</span>
              <span className="trust-band__label">{fact.label}</span>
            </dt>
            <dd>{fact.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
