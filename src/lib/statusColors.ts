// Single source of truth for every semantic status -> Tailwind class mapping
// used across project pages. Previously each page kept its own ad-hoc color
// lookup (HomePage's layerColors, ProjectPage's layerLabelColors) and both
// had drifted out of sync with the labels actually in use. Keep it that way:
// add new statuses here, not inline in components.

export type Severity = "critical" | "attention" | "healthy";
export type QuarterStatus = "Resolved" | "Improving" | "Stagnant" | "Deteriorating";
export type CommitmentStatus = "On Track" | "At Risk" | "Missed";
export type ProjectStatus = "live" | "ready";

export const severityClasses: Record<Severity, string> = {
  critical: "bg-status-critical/15 text-status-critical border-status-critical/30",
  attention: "bg-status-attention/15 text-status-attention border-status-attention/30",
  healthy: "bg-status-healthy/15 text-status-healthy border-status-healthy/30",
};

export const quarterStatusClasses: Record<QuarterStatus, string> = {
  Resolved: "bg-status-healthy/15 text-status-healthy border-status-healthy/30",
  Improving: "bg-data/15 text-data border-data/30",
  Stagnant: "bg-status-attention/15 text-status-attention border-status-attention/30",
  Deteriorating: "bg-status-critical/15 text-status-critical border-status-critical/30",
};

export const commitmentStatusClasses: Record<CommitmentStatus, string> = {
  "On Track": "bg-status-healthy/15 text-status-healthy border-status-healthy/30",
  "At Risk": "bg-status-attention/15 text-status-attention border-status-attention/30",
  Missed: "bg-status-critical/15 text-status-critical border-status-critical/30",
};

export const projectStatusLabels: Record<ProjectStatus, string> = {
  live: "Live · In Use",
  ready: "Ready for Deployment",
};
