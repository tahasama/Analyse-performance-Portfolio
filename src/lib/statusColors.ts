// Shared labels for the project readiness states shown on detail pages.
export type ProjectStatus = "live" | "ready";

export const projectStatusLabels: Record<ProjectStatus, string> = {
  live: "Live · In Use",
  ready: "Ready for Deployment",
};
