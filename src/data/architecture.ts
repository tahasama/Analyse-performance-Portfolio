import type { ProjectId } from "./projects";

export type PillarId = "document-management" | "reporting" | "decision";

export interface PillarComponent {
  id: ProjectId | "edms";
  label: string;
  description: string;
}

export interface Pillar {
  id: PillarId;
  name: string;
  description: string;
  scopeNote?: string;
  components: PillarComponent[];
}

export interface Handshake {
  id: "h1" | "h2" | "h3";
  name: string;
  from: string;
  to: string[];
  description: string;
}

export interface Principle {
  id: "P1" | "P2" | "P3" | "P4" | "P5" | "P6";
  name: string;
  portfolioMeaning: string;
}

export interface StandardTheme {
  label: string;
  /** One brief line -- what this band covers, not how. */
  description: string;
}

export interface DciomArchitecture {
  fullName: string;
  positioningStatement: string;
  pillars: Pillar[];
  handshakes: Handshake[];
  principles: Principle[];
  standardMeta: { version: string };
  standardThemes: StandardTheme[];
}

export const dciomArchitecture: DciomArchitecture = {
  fullName: "Document Control Intelligence & Operations Management",
  positioningStatement:
    "An independently designed document-control performance and governance framework connecting six systems from visibility to governance. It turns operational data into performance insight and decision support.",

  pillars: [
    {
      id: "document-management",
      name: "Document Management",
      description:
        "The governed document-management layer where documents are captured, stored, controlled, and moved.",
      scopeNote: "Outside DCIOM scope. Governed by the organization, not by this framework.",
      components: [
        {
          id: "edms",
          label: "EDMS / Aconex",
          description: "The system of record DCIOM measures from. It doesn't replace or govern it.",
        },
      ],
    },
    {
      id: "reporting",
      name: "Reporting",
      description: "Turns raw document-control activity into observed state and measured performance.",
      components: [
        {
          id: "c1-status",
          label: "Status Report",
          description: "Observe stage: state, not judgment.",
        },
        {
          id: "c2-performance",
          label: "Performance Report",
          description: "Measure stage: composite score, not impression.",
        },
        {
          id: "c3-findings-advisory",
          label: "Findings & Advisory",
          description: "Diagnose stage: classified cause, not opinion.",
        },
      ],
    },
    {
      id: "decision",
      name: "Decision",
      description: "Turns diagnosis into evaluated action, modeled scenarios, and verified commitments.",
      components: [
        {
          id: "c4-process-action",
          label: "Process & Action System",
          description: "Act stage: what the movement justifies, not what was attempted.",
        },
        {
          id: "c5-strategy-impact",
          label: "Strategy & Impact Simulation",
          description: "Predict stage: modeled trajectory, not forecast.",
        },
        {
          id: "c6-questionnaire-tracking",
          label: "Questionnaire & Tracking",
          description: "Verify stage: reconciled commitment, not memory.",
        },
      ],
    },
  ],

  handshakes: [
    {
      id: "h1",
      name: "Source Handshake",
      from: "EDMS / Aconex",
      to: ["C1 · Status Report"],
      description:
        "Operational data enters the framework from the governed source system into the Status Report, the formal boundary where governed source data enters the framework's Reporting layer.",
    },
    {
      id: "h2",
      name: "Finding Handshake",
      from: "C3 · Findings & Advisory",
      to: ["C4 · Process & Action"],
      description:
        "Classified diagnosis crosses from the Reporting pillar into the Decision pillar, becoming the input the quarterly assessment evaluates.",
    },
    {
      id: "h3",
      name: "Closure & Baseline Handshake",
      from: "Decision",
      to: ["Document Management", "Reporting"],
      description:
        "Closure verification and governance-approved threshold updates cross back into the EDMS and Components 1–3, closing the loop rather than ending it.",
    },
  ],

  principles: [
    {
      id: "P1",
      name: "Single Source of Truth",
      portfolioMeaning: "The system measures from the governed source rather than manually reconstructed numbers.",
    },
    {
      id: "P2",
      name: "Separation of Accountability Domains",
      portfolioMeaning: "Different parties' responsibilities never blend into one unexplained performance number.",
    },
    {
      id: "P3",
      name: "Supplier–Reviewer Duality",
      portfolioMeaning: "Performance problems identify the responsible side rather than treating all delay as generic document-control failure.",
    },
    {
      id: "P4",
      name: "Intelligence Layering",
      portfolioMeaning: "Each capability has a distinct job; observation, measurement, diagnosis, action, projection, and verification never collapse into one dashboard.",
    },
    {
      id: "P5",
      name: "Non-Adjustability of Derived Outputs",
      portfolioMeaning: "A computed performance result is never manually changed to produce a preferred narrative.",
    },
    {
      id: "P6",
      name: "Data Integrity as Governance Prerequisite",
      portfolioMeaning: "Bad source data isn't a technical nuisance. It undermines every governance conclusion built on top of it.",
    },
  ],

  standardMeta: { version: "1.0" },

  standardThemes: [
    {
      label: "Authority & Scope",
      description: "Why the framework exists, what it governs, and where it sits relative to external standards.",
    },
    {
      label: "Governance & Accountability",
      description: "Who owns decisions, how escalation works, and the standing responsibilities per role.",
    },
    {
      label: "Six Governance Instruments",
      description: "The six components and three handshakes that make up the operational core.",
    },
    {
      label: "Health Score & Performance Model",
      description: "The composite Health Score, its governance rules, and non-adjustability.",
    },
    {
      label: "Data & Metrics",
      description: "Data-quality requirements and the definitions behind every published metric.",
    },
    {
      label: "Thresholds, Enforcement & Technical Reference",
      description: "The baseline that triggers governance behavior, resilience under non-compliance, and glossary.",
    },
  ],
};
