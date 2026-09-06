export interface ViewStage {
  id: string;
  label: string;
}

export interface FrameworkView {
  key: "horizon";
  name: string;
  subtitle: string;
  stages: ViewStage[];
}

const toStages = (labels: string[]): ViewStage[] =>
  labels.map((label) => ({
    id: label.toLowerCase().replace(/\s+/g, "-"),
    label,
  }));

// The one official DCIOM view shown publicly. Formal terminology -- appears
// only on /architecture, never on Home or the product pages.
export const horizon: FrameworkView = {
  key: "horizon",
  name: "HORIZON",
  subtitle: "What the framework offers",
  stages: toStages([
    "Document Intelligence",
    "Reporting",
    "Performance",
    "Advisory",
    "Strategy",
  ]),
};
