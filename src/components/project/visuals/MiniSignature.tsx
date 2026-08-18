import type { ProjectVisualData } from "@/data/projects";

const severityDotClass: Record<string, string> = {
  critical: "bg-status-critical",
  attention: "bg-status-attention",
  healthy: "bg-status-healthy",
};

// Compact echo of VisualBlock's data, for the Home discovery panels -- same
// switch/dispatch shape, 2-4 real data points instead of the full breakdown.
export default function MiniSignature({ data }: { data: ProjectVisualData }) {
  switch (data.kind) {
    case "status-snapshot":
      return (
        <div className="flex gap-2">
          {data.counters.slice(0, 2).map((c) => (
            <div key={c.label} className="rounded-md border border-border bg-card px-3 py-2">
              <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">{c.label}</p>
              <p className="font-serif text-lg text-foreground">{c.value}</p>
            </div>
          ))}
        </div>
      );

    case "performance-breakdown":
      return (
        <div className="flex gap-2">
          <div className="rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-center">
            <p className="text-[0.65rem] uppercase tracking-wide text-accent">{data.healthScore.label}</p>
            <p className="font-serif text-lg text-foreground">{data.healthScore.value}/100</p>
          </div>
          {data.kpis[0] && (
            <div className="rounded-md border border-border bg-card px-3 py-2">
              <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">{data.kpis[0].label}</p>
              <p className="font-serif text-lg text-foreground">{data.kpis[0].value}</p>
            </div>
          )}
        </div>
      );

    case "findings-advisory":
      return (
        <div className="space-y-1.5">
          {data.findings.slice(0, 3).map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full shrink-0 ${severityDotClass[f.severity]}`} />
              <span className="text-xs text-muted-foreground truncate">{f.label}</span>
            </div>
          ))}
        </div>
      );

    case "quarter-comparison": {
      const area = data.areas[0];
      if (!area) return null;
      return (
        <div className="rounded-md border border-border bg-card px-3 py-2 inline-block">
          <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">{area.name}</p>
          <p className="font-serif text-lg text-foreground">
            {area.previousQ} <span className="text-sm text-muted-foreground">→</span> {area.currentQ}
          </p>
        </div>
      );
    }

    case "scenario-trajectory": {
      const scenario = data.scenarios[0];
      return (
        <div className="rounded-md border border-border bg-card px-3 py-2">
          <p className="text-[0.65rem] uppercase tracking-wide text-data">{data.horizonLabel}</p>
          {scenario && <p className="mt-1 text-sm text-foreground">{scenario.projectedOutcome}</p>}
        </div>
      );
    }

    case "meeting-worksheet":
      return (
        <div className="flex gap-2">
          <div className="rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-center">
            <p className="text-[0.65rem] uppercase tracking-wide text-accent">Health</p>
            <p className="font-serif text-lg text-foreground">{data.packSummary.healthScore}</p>
          </div>
          <div className="rounded-md border border-border bg-card px-3 py-2">
            <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">Review</p>
            <p className="text-sm text-foreground">{data.packSummary.reviewCommitment}</p>
          </div>
        </div>
      );
  }
}
