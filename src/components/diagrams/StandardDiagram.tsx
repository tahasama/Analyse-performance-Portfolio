// The Standard's own three-layer architecture, drawn as one vertical descent:
// Rules define what controlled information must be, Routes sequence the work
// that produces evidence, the Register holds that evidence, and Checks test it.
// v1.0 states this on its cover ("Rules · Routes · Checks, synchronized through
// traceability"), so the diagram renders that structure rather than a second,
// competing mental model. Theme-agnostic: every colour is a semantic token, so
// it renders correctly in whichever scope it sits in.
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
const MID = 600;

/** Small mono tag naming the layer a band belongs to. */
function LayerTag({ y, label }: { y: number; label: string }) {
  return (
    <text
      x="40"
      y={y}
      className="fill-status-healthy font-mono"
      fontSize="14"
      letterSpacing="0.16em"
    >
      {label}
    </text>
  );
}

export default function StandardDiagram() {
  return (
    <svg
      viewBox="0 0 1200 700"
      width={1200}
      height={700}
      className="w-full h-auto max-w-full max-h-[90vh] mx-auto block"
      role="img"
      aria-label="The Standard's three layers: Rules define the information, Routes sequence the work, the Register holds the evidence, and Checks test it"
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

      {/* LAYER I -- RULES: what controlled information must be */}
      <LayerTag y={26} label="LAYER I · RULES" />

      <rect
        x="40"
        y="44"
        width="1120"
        height="52"
        className="fill-none stroke-border"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <text
        x={MID}
        y="68"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="15"
        letterSpacing="0.1em"
      >
        PLANNING
      </text>
      <text
        x={MID}
        y="88"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="14"
      >
        What must be ready before work proceeds, and what is delivered together
      </text>

      {stages.map((s, i) => {
        const x = X0 + i * (BOX_W + GAP);
        return (
          <g key={s.n}>
            <rect
              x={x}
              y="126"
              width={BOX_W}
              height="140"
              className="fill-card stroke-border"
              strokeWidth="1.5"
            />
            <text
              x={x + 20}
              y="156"
              className="fill-status-attention font-mono"
              fontSize="15"
              letterSpacing="0.08em"
            >
              {s.n}
            </text>
            <text
              x={x + BOX_W / 2}
              y="198"
              textAnchor="middle"
              className="fill-foreground font-serif"
              fontSize="26"
            >
              {s.title}
            </text>
            <text
              x={x + BOX_W / 2}
              y="226"
              textAnchor="middle"
              className="fill-muted-foreground font-mono"
              fontSize="14"
            >
              {s.sub}
            </text>
            {i < stages.length - 1 && (
              <line
                x1={x + BOX_W + 4}
                y1="196"
                x2={x + BOX_W + GAP - 6}
                y2="196"
                className="stroke-muted-foreground"
                strokeWidth="1.5"
                markerEnd="url(#std-arrow)"
              />
            )}
          </g>
        );
      })}

      <line
        x1={MID}
        y1="266"
        x2={MID}
        y2="316"
        className="stroke-border"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* LAYER II -- ROUTES: the work that turns rules into evidence */}
      <LayerTag y={306} label="LAYER II · ROUTES" />

      <rect
        x="40"
        y="322"
        width="1120"
        height="76"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />
      <text
        x={MID}
        y="352"
        textAnchor="middle"
        className="fill-foreground font-serif"
        fontSize="24"
      >
        Recurring work, sequenced from trigger to evidence
      </text>
      <text
        x={MID}
        y="378"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="14"
      >
        Create · Revise · Review · Issue · Receive · Withdraw · Close
      </text>

      <line
        x1={MID}
        y1="398"
        x2={MID}
        y2="440"
        className="stroke-border"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* The register: where the evidence lands */}
      <rect
        x="40"
        y="446"
        width="1120"
        height="80"
        className="fill-none stroke-accent"
        strokeWidth="1.5"
      />
      <text
        x={MID}
        y="478"
        textAnchor="middle"
        className="fill-accent font-serif"
        fontSize="26"
      >
        The Register
      </text>
      <text
        x={MID}
        y="504"
        textAnchor="middle"
        className="fill-muted-foreground font-mono"
        fontSize="14"
      >
        One record of what exists, which revision is current, and what it may be
        used for
      </text>

      <line
        x1={MID}
        y1="526"
        x2={MID}
        y2="568"
        className="stroke-border"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      {/* LAYER III -- CHECKS: what tests the evidence */}
      <LayerTag y={558} label="LAYER III · CHECKS" />

      <rect
        x="40"
        y="574"
        width="1120"
        height="72"
        className="fill-foreground"
      />
      <text
        x={MID}
        y="607"
        textAnchor="middle"
        className="fill-background font-mono"
        fontSize="17"
        letterSpacing="0.1em"
      >
        275 CONFORMANCE CHECKS
      </text>
      <text
        x={MID}
        y="631"
        textAnchor="middle"
        className="fill-background font-mono"
        fontSize="14"
        opacity="0.7"
      >
        Measured against the register, by severity, with a named owner for each
        defect
      </text>

      {/* The traceability spine: every rule threaded to its route and its check */}
      <line
        x1="20"
        y1="126"
        x2="20"
        y2="646"
        className="stroke-accent"
        strokeWidth="1"
        strokeDasharray="4 4"
        opacity="0.55"
      />
      <text
        x="14"
        y="386"
        textAnchor="middle"
        transform="rotate(-90 14 386)"
        className="fill-accent font-mono"
        fontSize="12"
        letterSpacing="0.2em"
        opacity="0.75"
      >
        TRACEABILITY
      </text>
    </svg>
  );
}
