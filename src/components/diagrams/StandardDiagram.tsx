// What the Standard governs, drawn as the life of one piece of controlled
// information rather than listed as a table of contents. The twelve areas of
// Part 0.1 group into five stages; planning sits above them because it
// determines what must exist before work starts; the register sits beneath
// because it is the one record of all of it; conformance measures the
// register, which is why the checks attach there and nowhere else.
// Theme-agnostic: every colour is a semantic token, so this renders correctly
// in whichever scope it is placed in (same approach as ArchitectureDiagram).
const stages = [
  { n: "01", title: "Identity", sub: "Numbered and described" },
  { n: "02", title: "Revision", sub: "One current version" },
  { n: "03", title: "Approval", sub: "Released by authority" },
  { n: "04", title: "Issue", sub: "Sent, with obligation" },
  { n: "05", title: "Retirement", sub: "Withdrawn and retained" },
];

const BOX_W = 200;
const GAP = 30;
const X0 = 40;

export default function StandardDiagram() {
  return (
    <svg
      viewBox="0 0 1200 600"
      width={1200}
      height={600}
      className="w-auto h-auto max-w-full max-h-[78vh] mx-auto block"
      role="img"
      aria-label="What the Document Management Standard governs: planning, the five lifecycle stages, the register, and conformance measurement"
    >
      <defs>
        <marker
          id="std-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 9 5 L 0 9 z" className="fill-muted-foreground" />
        </marker>
      </defs>

      {/* Planning: what has to be ready before any of it starts */}
      <rect x="40" y="34" width="1120" height="62" className="fill-none stroke-border" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="600" y="61" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="15" letterSpacing="0.14em">
        PLANNING
      </text>
      <text x="600" y="83" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="15">
        What must be ready before work proceeds, and what is delivered together
      </text>

      {/* The five lifecycle stages */}
      {stages.map((s, i) => {
        const x = X0 + i * (BOX_W + GAP);
        return (
          <g key={s.n}>
            <rect x={x} y="140" width={BOX_W} height="150" className="fill-card stroke-border" strokeWidth="1.5" />
            <text x={x + 20} y="172" className="fill-accent font-mono" fontSize="15" letterSpacing="0.08em">
              {s.n}
            </text>
            <text x={x + BOX_W / 2} y="216" textAnchor="middle" className="fill-foreground font-serif" fontSize="26">
              {s.title}
            </text>
            <text x={x + BOX_W / 2} y="245" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="15">
              {s.sub}
            </text>
            {i < stages.length - 1 && (
              <line
                x1={x + BOX_W + 4}
                y1="215"
                x2={x + BOX_W + GAP - 6}
                y2="215"
                className="stroke-muted-foreground"
                strokeWidth="1.5"
                markerEnd="url(#std-arrow)"
              />
            )}
            {/* every stage writes to the register */}
            <line
              x1={x + BOX_W / 2}
              y1="290"
              x2={x + BOX_W / 2}
              y2="352"
              className="stroke-border"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </g>
        );
      })}

      {/* The register: the single record all of it lands in */}
      <rect x="40" y="354" width="1120" height="86" className="fill-none stroke-accent" strokeWidth="1.5" />
      <text x="600" y="388" textAnchor="middle" className="fill-accent font-serif" fontSize="26">
        The Register
      </text>
      <text x="600" y="415" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="15">
        One record of what exists, which revision is current, and what it may be used for
      </text>

      <line x1="600" y1="440" x2="600" y2="486" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

      {/* Conformance measures the register, not the practice */}
      <rect x="40" y="488" width="1120" height="72" className="fill-foreground" />
      <text x="600" y="521" textAnchor="middle" className="fill-background font-mono" fontSize="17" letterSpacing="0.1em">
        226 CONFORMANCE CHECKS
      </text>
      <text x="600" y="545" textAnchor="middle" className="fill-background font-mono" fontSize="15" opacity="0.7">
        Measured against the register, by severity, with a named owner for each defect
      </text>
    </svg>
  );
}
