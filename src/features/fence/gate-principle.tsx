/** Original schematic: opening principles only, without dimensions or product claims. */
export function GatePrinciple({ kind }: { kind: "swing" | "sliding" }) {
  return (
    <svg
      className={`fence-principle fence-principle--${kind}`}
      viewBox="0 0 360 150"
      role="img"
      aria-label={
        kind === "swing"
          ? "Prinzip des Drehtors: zwei Flügel schwenken in den Bereich hinter der Öffnung."
          : "Prinzip des Schiebetors: das Torblatt fährt seitlich entlang der Grenze."
      }
    >
      <path className="fence-principle__boundary" d="M20 28H85 M275 28H340" />
      <circle cx="85" cy="28" r="5" />
      <circle cx="275" cy="28" r="5" />
      {kind === "swing" ? (
        <>
          <path
            className="fence-principle__movement"
            d="M175 28A90 90 0 0 1 85 118 M185 28A90 90 0 0 0 275 118"
          />
          <path
            className="fence-principle__closed"
            d="M85 28H175 M185 28H275"
          />
          <path className="fence-principle__gate" d="M85 28V118 M275 28V118" />
          <path
            className="fence-principle__arrow"
            d="m89 106-4 12-7-10 m190 0 8 10 3-12"
          />
        </>
      ) : (
        <>
          <path className="fence-principle__closed" d="M88 28H270" />
          <path className="fence-principle__gate" d="M150 68H332V83H150Z" />
          <path className="fence-principle__movement" d="M88 105H330" />
          <path className="fence-principle__arrow" d="m318 99 12 6-12 6" />
        </>
      )}
    </svg>
  );
}
