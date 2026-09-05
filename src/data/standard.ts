export interface StandardAnnex {
  letter: string;
  title: string;
  /** Normative or Informative, plus the qualifier the document gives. */
  status: string;
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
  version: string;
  subtitle: string;
  positioningStatement: string;
  /** Headline figures. Structure and scale only, no clause text. */
  scale: Array<{ figure: string; label: string }>;
  /** The document's own three-layer structure (v1.0 cover: "Rules · Routes
   * · Checks, synchronized through traceability"). */
  layers: Array<{ name: string; text: string }>;
  /** What it does better than an in-house procedure. The counterpart to
   * `excludes` -- a boundary only reads well next to a claim. */
  strengths: Array<{ title: string; text: string }>;
  /** What it explicitly does not cover (Part 0.2). */
  excludes: string[];
  annexes: StandardAnnex[];
  conformanceLevels: ConformanceLevel[];
}

export const documentManagementStandard: StandardContent = {
  name: "Document Management Standard",
  version: "1.0",
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
      title: "It is traced",
      text: "Every requirement maps to a published source across ten international standards, so nothing in it rests on one author's preference.",
    },
  ],

  excludes: [
    "It does not prescribe a numbering structure, a discipline list, a status code set, a review outcome set, or a retention period. These differ legitimately between organizations, sectors and jurisdictions.",
    "It does not govern the content of documents, engineering process, procurement, or quality management.",
    "It does not replace records management. Where a records management programme exists, that programme governs retention and disposition.",
    "It does not describe how work is performed. Review sequence, escalation and judgement are shaped by contract and by circumstance.",
  ],


  annexes: [
    {
      letter: "A",
      title: "External Party Requirements",
      status: "Normative when invoked",
      purpose: "Requirements to place on contractors, vendors and third parties.",
    },
    {
      letter: "B",
      title: "System Configuration Profile",
      status: "Informative",
      purpose:
        "What a document management system needs to be able to do. Also usable as a procurement specification.",
    },
    {
      letter: "C",
      title: "Organization Configuration Instrument",
      status: "Normative",
      purpose:
        "What the organization must decide and publish before the Standard can be used.",
    },
    {
      letter: "D",
      title: "Reference Sets",
      status: "Informative",
      purpose: "Suggested code lists an organization can adopt or replace.",
    },
    {
      letter: "E",
      title: "Relationship to Adjacent Work",
      status: "Informative",
      purpose: "Where this sits against DBoK and DCIOM, and the publication map.",
    },
    {
      letter: "F",
      title: "Traceability Spine",
      status: "Normative",
      purpose:
        "The thread that ties every rule to the route that applies it and the check that tests it.",
    },
    {
      letter: "G",
      title: "Routes",
      status: "Informative",
      purpose: "Recurring document-control work, sequenced from trigger to evidence.",
    },
    {
      letter: "H",
      title: "Catalogue of Checks",
      status: "Normative",
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
