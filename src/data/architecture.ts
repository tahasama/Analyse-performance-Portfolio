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
  definition: string;
  portfolioMeaning: string;
}

export interface StandardOutlineEntry {
  section: string;
  title: string;
  gloss: string;
}

export interface StandardTheme {
  label: string;
  /** One brief line -- what this band covers, not how. */
  description: string;
  /** Section IDs from standardOutline this theme consolidates. */
  sections: string[];
}

export interface DciomArchitecture {
  fullName: string;
  positioningStatement: string;
  pillars: Pillar[];
  handshakes: Handshake[];
  principles: Principle[];
  standardMeta: { version: string; status: string };
  standardOutline: StandardOutlineEntry[];
  standardThemes: StandardTheme[];
}

export const dciomArchitecture: DciomArchitecture = {
  fullName: "Document Control Intelligence & Operations Management",
  positioningStatement:
    "An independently designed documentation-specific performance-governance framework — not an industry standard, not certified, not externally adopted. It turns existing document-control data into measured performance, diagnosis, and decision support, and is formally specified as a version-controlled internal standard rather than left as an informal set of habits.",

  pillars: [
    {
      id: "document-management",
      name: "Document Management",
      description:
        "The governed source system documents actually live in and move through.",
      scopeNote: "Outside DCIOM scope — governed by the organization, not by this framework.",
      components: [
        {
          id: "edms",
          label: "EDMS / Aconex",
          description: "The system of record DCIOM measures from — it doesn't replace or govern it.",
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
          description: "Observe stage — state, not judgment.",
        },
        {
          id: "c2-performance",
          label: "Performance Report",
          description: "Measure stage — composite score, not impression.",
        },
        {
          id: "c3-findings-advisory",
          label: "Findings & Advisory",
          description: "Diagnose stage — classified cause, not opinion.",
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
          description: "Act stage — evaluated movement, not activity.",
        },
        {
          id: "c5-strategy-impact",
          label: "Strategy & Impact Simulation",
          description: "Predict stage — modeled trajectory, not forecast.",
        },
        {
          id: "c6-questionnaire-tracking",
          label: "Questionnaire & Tracking",
          description: "Verify stage — reconciled commitment, not memory.",
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
        "Operational data enters the framework from the governed source system into the Status Report — the one point where raw document-control data becomes framework input.",
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
        "Decisions branch back down into both the source system, as closure artifacts, and the reporting baseline, as updated figures — closing the loop instead of ending it.",
    },
  ],

  principles: [
    {
      id: "P1",
      name: "Single Source of Truth",
      definition: "All performance data is derived exclusively from the EDMS. No parallel tracking is recognized.",
      portfolioMeaning: "The system measures from the governed source rather than manually reconstructed numbers.",
    },
    {
      id: "P2",
      name: "Separation of Accountability Domains",
      definition: "Supplier, engineering, and reviewer metrics are measured independently from their proper data sources.",
      portfolioMeaning: "Different parties' responsibilities never blend into one unexplained performance number.",
    },
    {
      id: "P3",
      name: "Supplier–Reviewer Duality",
      definition: "Every delay is attributed to a specific party in a specific domain.",
      portfolioMeaning: "Performance problems identify the responsible side rather than treating all delay as generic document-control failure.",
    },
    {
      id: "P4",
      name: "Intelligence Layering",
      definition:
        "Six stages — Observe, Measure, Diagnose, Act, Predict, Verify — each produce an output the others cannot, and each is operationalized by exactly one component.",
      portfolioMeaning: "Each capability has a distinct job; observation, measurement, diagnosis, action, projection, and verification never collapse into one dashboard.",
    },
    {
      id: "P5",
      name: "Non-Adjustability of Derived Outputs",
      definition: "Outputs are calculated from source data and stand as the system's measurement. They are not manually set.",
      portfolioMeaning: "A computed performance result is never manually changed to produce a preferred narrative.",
    },
    {
      id: "P6",
      name: "Data Integrity as Governance Prerequisite",
      definition: "Data-quality failures are governance failures.",
      portfolioMeaning: "Bad source data isn't a technical nuisance — it undermines every governance conclusion built on top of it.",
    },
  ],

  standardMeta: { version: "1.0", status: "Controlled document — amendments require formal review and approval." },

  standardOutline: [
    { section: "1", title: "Authority & Purpose", gloss: "Why DCIOM exists, its authority, scope, and governance role." },
    { section: "2", title: "System Foundations", gloss: "The six principles and rules the framework operates on." },
    { section: "3", title: "Governance Model", gloss: "Who owns decisions, and how escalation operates." },
    { section: "4", title: "Governance Instruments", gloss: "The six components and three handshakes — the operational core." },
    { section: "5", title: "Health Score Governance", gloss: "How the composite Health Score is built, and why it can't be manually overridden." },
    { section: "6", title: "Roles & Governance Accountability", gloss: "Standing responsibilities attached to each role." },
    { section: "7", title: "Data Governance", gloss: "Requirements for the data the framework depends on." },
    { section: "8", title: "Data Architecture", gloss: "How measurements are derived from governed source data." },
    { section: "9", title: "Key Metrics & Analytical Definitions", gloss: "The formulas and business meaning behind every published metric." },
    { section: "10", title: "Performance Thresholds & Targets", gloss: "The baseline that triggers governance behavior." },
    { section: "11", title: "Governance Resilience & Enforcement", gloss: "How the framework holds up under non-compliance or disputed data." },
    { section: "A", title: "Simulation Model Technical Reference", gloss: "Projection model, simulation model, assumptions, and limitations." },
    { section: "B", title: "Glossary", gloss: "Controlled terminology used across the framework." },
    { section: "C", title: "DCIOM in the Standards Landscape", gloss: "Where DCIOM sits relative to established external frameworks." },
  ],

  // The 14 standardOutline entries consolidated into thematic bands for
  // public display -- proves the standard is formally specified without
  // reproducing its full table of contents.
  standardThemes: [
    {
      label: "Authority & Scope",
      description: "Why the framework exists, what it governs, and where it sits relative to external standards.",
      sections: ["1", "2", "C"],
    },
    {
      label: "Governance & Accountability",
      description: "Who owns decisions, how escalation works, and the standing responsibilities per role.",
      sections: ["3", "6"],
    },
    {
      label: "Six Governance Instruments",
      description: "The six components and three handshakes that make up the operational core.",
      sections: ["4"],
    },
    {
      label: "Health Score & Performance Model",
      description: "How the composite Health Score is built, and why it can't be manually overridden.",
      sections: ["5"],
    },
    {
      label: "Data & Metrics",
      description: "Data-quality requirements and the definitions behind every published metric.",
      sections: ["7", "8", "9"],
    },
    {
      label: "Thresholds, Enforcement & Technical Reference",
      description: "The baseline that triggers governance behavior, resilience under non-compliance, and glossary.",
      sections: ["10", "11", "A", "B"],
    },
  ],
};
