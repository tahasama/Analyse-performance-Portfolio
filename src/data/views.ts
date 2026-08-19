export interface ViewStage {
  id: string;
  label: string;
  description: string;
}

export interface FrameworkView {
  key: "horizon";
  name: string;
  subtitle: string;
  stages: ViewStage[];
}

const toStages = (entries: Array<[string, string]>): ViewStage[] =>
  entries.map(([label, description]) => ({
    id: label.toLowerCase().replace(/\s+/g, "-"),
    label,
    description,
  }));

// The one official DCIOM view shown publicly. Formal terminology -- appears
// only on /architecture, never on Home or the product pages.
export const horizon: FrameworkView = {
  key: "horizon",
  name: "HORIZON",
  subtitle: "What the framework offers",
  stages: toStages([
    ["Document Intelligence", "Turning document-control data into structured, usable intelligence."],
    ["Reporting", "Making current operational state visible and measurable."],
    ["Performance", "Converting operational state into comparable, measured performance."],
    ["Advisory", "Turning measured failures into classified diagnosis and routed response."],
    ["Strategy", "Modeling trajectory and intervention scenarios to support forward decisions."],
  ]),
};
