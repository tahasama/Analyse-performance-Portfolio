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
    ["Document Intelligence", "Turning raw document-control activity into structured, usable signal."],
    ["Reporting", "Making current operational state visible on a fixed cadence."],
    ["Performance", "Converting state into comparable, measured performance."],
    ["Advisory", "Classifying failures and routing recommended action to an owner."],
    ["Strategy", "Modeling trajectory and the intervention required to change it."],
  ]),
};
