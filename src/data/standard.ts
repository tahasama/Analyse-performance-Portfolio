export interface StandardInstrument {
  letter: string;
  title: string;
  /** What a reader goes to this Annex for. */
  purpose: string;
}

export interface ConformanceLevel {
  name: string;
  parts: string;
  establishes: string;
  silentOn?: string;
}

export interface StandardContent {
  name: string;
  subtitle: string;
  positioningStatement: string;
  /** Headline figures. Structure and scale only, no clause text. */
  scale: Array<{ figure: string; label: string }>;
  /** The document's own three-layer structure (v1.0 cover: "Rules · Routes
   * · Checks, synchronized through traceability"). */
  layers: Array<{ name: string; text: string }>;
  /** The structural qualities that make the Standard executable. */
  strengths: Array<{ title: string; text: string }>;
  /** What it explicitly does not cover (Part 0.2). */
  excludes: string[];
  featuredInstruments: StandardInstrument[];
  conformanceLevels: ConformanceLevel[];
}

export const documentManagementStandard: StandardContent = {
  name: "Document Management Standard",
  subtitle:
    "An executable standard for controlled project information",
  positioningStatement:
    "An independently defined standard for controlled project information. It sets what information must satisfy, without prescribing how an organization works.\nEach organization retains its own numbering, codes, and implementation approach.",

  scale: [
    { figure: "18", label: "Parts" },
    { figure: "141", label: "Numbered clauses" },
    { figure: "275", label: "Conformance checks" },
    { figure: "8", label: "Annexes" },
  ],
  layers: [
    {
      name: "Rules",
      text: "Defines what controlled information must be, and how it is configured.",
    },
    {
      name: "Routes",
      text: "Sequences recurring document-control work from trigger to evidence.",
    },
    {
      name: "Checks",
      text: "Verifies the evidence, exposes defects and measures integrity.",
    },
  ],

  strengths: [
    {
      title: "It can be tested",
      text: "275 checks, each carrying a severity and a named owner for the fix. Conformance is measured against the register rather than declared.",
    },
    {
      title: "It can be adopted",
      text: "It sets the properties each requirement must have and leaves the numbering, code lists and retention periods to the organization, so it does not fight an existing way of working.",
    },
    {
      title: "It is synchronized",
      text: "It distinguishes sourced requirements from four authored additions—the register, issue-status codes, deliverable baseline and conformance checking—and synchronizes Rules, Routes and Checks through the Traceability Spine.",
    },
  ],

  excludes: [
    "It does not prescribe a numbering structure, a discipline list, a status code set, a review outcome set, or a retention period. These differ legitimately between organizations, sectors and jurisdictions.",
    "It does not govern the content of documents, engineering process, procurement, or quality management.",
    "It does not replace records management. Where a records management programme exists, that programme governs retention and disposition.",
    "It does not prescribe engineering, procurement or project-delivery methods. Annex G sequences document-management tasks only; contractual workflows and professional judgement remain organization-specific.",
  ],
  featuredInstruments: [
    {
      letter: "C",
      title: "Organization Configuration Instrument",
      purpose:
        "What the organization must decide and publish before the Standard can be used.",
    },
    {
      letter: "F",
      title: "Traceability Spine",
      purpose:
        "The thread that ties every rule to the route that applies it and the check that tests it.",
    },
    {
      letter: "G",
      title: "Routes",
      purpose: "Recurring document-control work, sequenced from trigger to evidence.",
    },
    {
      letter: "H",
      title: "Catalogue of Checks",
      purpose:
        "Every defect this Standard can produce, with the check that detects it, its severity, and the party accountable for the fix.",
    },
  ],

  conformanceLevels: [
    {
      name: "Core: identity and control",
      parts: "Parts 1 to 9, 16, 17",
      establishes:
        "Every item is named without ambiguity, described, classified, has one current revision, and is approved by someone with authority. Review results are recorded and countable.",
      silentOn:
        "How information is issued, whether obsolete versions were withdrawn, how long it is kept, or whether what a job needs is ready.",
    },
    {
      name: "Full",
      parts: "All Parts",
      establishes:
        "All of the above, plus issue, obsolescence, retention, format and planning.",
    },
  ]
};
