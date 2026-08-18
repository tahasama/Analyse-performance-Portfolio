// Adapted from src/assets/dciom_architecture.svg -- same structure (three
// pillars, six components, three handshakes, principles strip) redrawn in
// the site's own palette/type via Tailwind fill-*/stroke-* utilities
// (which resolve against the same CSS-variable tokens as everything else).
// Rendered on the dark base theme, not .theme-editorial -- the accent
// resolves to amber and surfaces to navy/charcoal automatically since
// nothing here is hardcoded. Sized by height (max-h-[91vh]), not width, so
// there's room to run wide -- widened repeatedly for legible caption/label
// font sizes. Handshake labels are two-line (ID + name) so they stay
// readable without needing huge horizontal gaps between columns.
// Large-screen only (see the section wrapping this in ArchitecturePage.tsx)
// -- HORIZON and the PillarGrid/HandshakeList/PrincipleGrid card grids in
// the editorial section below remain the full responsive detail on every
// screen size.
export default function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 1640 950"
      width={1640}
      height={950}
      className="w-auto h-auto max-w-full max-h-[91vh] mx-auto block"
      role="img"
      aria-label="DCIOM architecture diagram"
    >
      <defs>
        <marker id="arch-arrow-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" className="fill-accent" />
        </marker>
        <marker id="arch-arrow-data" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" className="fill-data" />
        </marker>
      </defs>

      {/* Framework band */}
      <rect x="40" y="32" width="1560" height="56" className="fill-none stroke-accent" strokeWidth="1.5" />
      <text x="820" y="68" textAnchor="middle" className="fill-accent font-mono" fontSize="21" letterSpacing="0.13em">
        DOCUMENT CONTROL INTELLIGENCE &amp; OPERATIONS MANAGEMENT
      </text>

      {/* Pillar containers */}
      <rect x="40" y="110" width="320" height="610" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="520" y="110" width="460" height="610" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="1140" y="110" width="460" height="610" className="fill-card stroke-border" strokeWidth="1.5" />

      {/* Pillar 1 -- Document Management */}
      <g>
        <text x="200" y="152" textAnchor="middle" className="fill-foreground font-serif" fontSize="28">
          Document
        </text>
        <text x="200" y="180" textAnchor="middle" className="fill-foreground font-serif" fontSize="28">
          Management
        </text>
        <text x="200" y="202" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="17" letterSpacing="0.12em">
          PILLAR
        </text>

        <rect x="50" y="224" width="300" height="68" className="fill-none stroke-border" strokeWidth="1" />
        <text x="200" y="252" textAnchor="middle" className="fill-accent font-mono" fontSize="17" letterSpacing="0.02em">
          OUTSIDE DCIOM SCOPE
        </text>
        <text x="200" y="274" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="18">
          Governed by organization
        </text>

        <line x1="200" y1="292" x2="200" y2="540" className="stroke-border" strokeWidth="1" strokeDasharray="3 3" />

        <rect x="50" y="540" width="300" height="160" className="fill-background stroke-muted-foreground" strokeWidth="1" strokeDasharray="4 3" />
        <text x="200" y="610" textAnchor="middle" className="fill-foreground font-serif" fontSize="28">
          EDMS /
        </text>
        <text x="200" y="638" textAnchor="middle" className="fill-foreground font-serif" fontSize="28">
          Aconex
        </text>
      </g>

      {/* Pillar 2 -- Reporting */}
      <g>
        <text x="750" y="152" textAnchor="middle" className="fill-foreground font-serif" fontSize="28">
          Reporting Pillar
        </text>

        <rect x="540" y="190" width="420" height="150" className="fill-background stroke-border" strokeWidth="1" />
        <text x="560" y="222" textAnchor="start" className="fill-accent font-mono" fontSize="16" letterSpacing="0.08em">
          C1
        </text>
        <text x="750" y="256" textAnchor="middle" className="fill-foreground font-serif" fontSize="25">
          Status Report
        </text>
        <text x="750" y="284" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="20">
          Current operational state
        </text>

        <rect x="540" y="366" width="420" height="150" className="fill-background stroke-border" strokeWidth="1" />
        <text x="560" y="398" textAnchor="start" className="fill-accent font-mono" fontSize="16" letterSpacing="0.08em">
          C2
        </text>
        <text x="750" y="432" textAnchor="middle" className="fill-foreground font-serif" fontSize="25">
          Performance Report
        </text>
        <text x="750" y="460" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="20">
          KPI measurement &amp; thresholds
        </text>

        <rect x="540" y="542" width="420" height="150" className="fill-background stroke-border" strokeWidth="1" />
        <text x="560" y="574" textAnchor="start" className="fill-accent font-mono" fontSize="16" letterSpacing="0.08em">
          C3
        </text>
        <text x="750" y="608" textAnchor="middle" className="fill-foreground font-serif" fontSize="25">
          Findings &amp; Advisory
        </text>
        <text x="750" y="636" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="20">
          Constraint diagnosis
        </text>
      </g>

      {/* Pillar 3 -- Decision */}
      <g>
        <text x="1370" y="152" textAnchor="middle" className="fill-foreground font-serif" fontSize="28">
          Decision Pillar
        </text>

        <rect x="1160" y="190" width="420" height="150" className="fill-background stroke-border" strokeWidth="1" />
        <text x="1180" y="222" textAnchor="start" className="fill-accent font-mono" fontSize="16" letterSpacing="0.08em">
          C4
        </text>
        <text x="1370" y="256" textAnchor="middle" className="fill-foreground font-serif" fontSize="25">
          Process &amp; Action
        </text>
        <text x="1370" y="284" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="20">
          Quarter-over-quarter governance
        </text>

        <rect x="1160" y="366" width="420" height="150" className="fill-background stroke-border" strokeWidth="1" />
        <text x="1180" y="398" textAnchor="start" className="fill-accent font-mono" fontSize="16" letterSpacing="0.08em">
          C5
        </text>
        <text x="1370" y="432" textAnchor="middle" className="fill-foreground font-serif" fontSize="25">
          Strategy &amp; Impact
        </text>
        <text x="1370" y="460" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="20">
          Trajectory &amp; scenario modeling
        </text>

        <rect x="1160" y="542" width="420" height="150" className="fill-background stroke-border" strokeWidth="1" />
        <text x="1180" y="574" textAnchor="start" className="fill-accent font-mono" fontSize="16" letterSpacing="0.08em">
          C6
        </text>
        <text x="1370" y="608" textAnchor="middle" className="fill-foreground font-serif" fontSize="25">
          Tracking
        </text>
        <text x="1370" y="636" textAnchor="middle" className="fill-muted-foreground font-mono" fontSize="20">
          Commitment verification
        </text>
      </g>

      {/* H1: EDMS -> Status Report */}
      <path
        d="M 350 620 L 445 620 L 445 265 L 538 265"
        className="fill-none stroke-accent"
        strokeWidth="2"
        markerEnd="url(#arch-arrow-accent)"
      />
      <rect x="345" y="416" width="200" height="54" className="fill-background stroke-accent" strokeWidth="1" />
      <text x="445" y="438" textAnchor="middle" className="fill-accent font-mono font-semibold" fontSize="19">
        H1
      </text>
      <text x="445" y="461" textAnchor="middle" className="fill-accent font-mono" fontSize="16.5">
        Source Handshake
      </text>

      {/* H2: Findings & Advisory -> Process & Action */}
      <path
        d="M 960 617 L 1060 617 L 1060 265 L 1158 265"
        className="fill-none stroke-accent"
        strokeWidth="2"
        markerEnd="url(#arch-arrow-accent)"
      />
      <rect x="960" y="414" width="200" height="54" className="fill-background stroke-accent" strokeWidth="1" />
      <text x="1060" y="436" textAnchor="middle" className="fill-accent font-mono font-semibold" fontSize="19">
        H2
      </text>
      <text x="1060" y="459" textAnchor="middle" className="fill-accent font-mono" fontSize="16.5">
        Finding Handshake
      </text>

      {/* H3: Decision -> closure back into Document Management and Reporting */}
      <path
        d="M 1370 720 L 1370 770 L 200 770 L 200 722"
        className="fill-none stroke-data"
        strokeWidth="2"
        strokeDasharray="6 4"
        markerEnd="url(#arch-arrow-data)"
      />
      <path
        d="M 750 770 L 750 722"
        className="fill-none stroke-data"
        strokeWidth="2"
        strokeDasharray="6 4"
        markerEnd="url(#arch-arrow-data)"
      />
      <rect x="665" y="743" width="240" height="54" className="fill-background stroke-data" strokeWidth="1" />
      <text x="785" y="765" textAnchor="middle" className="fill-data font-mono font-semibold" fontSize="19">
        H3
      </text>
      <text x="785" y="788" textAnchor="middle" className="fill-data font-mono" fontSize="16.5">
        Closure &amp; Baseline
      </text>

      {/* Principles strip */}
      <rect x="40" y="827" width="1560" height="70" className="fill-foreground" />
      <text x="820" y="863" textAnchor="middle" className="fill-background font-mono" fontSize="25" letterSpacing="0.16em">
        P1 · P2 · P3 · P4 · P5 · P6
      </text>
      <text x="820" y="887" textAnchor="middle" className="fill-background font-mono" fontSize="18" opacity="0.65">
        Foundational principles — apply across all pillars and components
      </text>
    </svg>
  );
}
