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
  version: "0.9",
  subtitle:
    "Requirements for identifying, describing, controlling, issuing and retaining project information",
  positioningStatement:
    "It states what controlled information must satisfy, not how an organization should work. Each organization publishes its own numbering, codes and retention periods, so it can be adopted without replacing an existing way of working.",

  scale: [
    { figure: "18", label: "Parts" },
    { figure: "140", label: "Numbered clauses" },
    { figure: "226", label: "Conformance checks" },
    { figure: "7", label: "Annexes" },
  ],


  strengths: [
    {
      title: "It can be tested",
      text: "226 checks, each carrying a severity and a named owner for the fix. Conformance is measured against the register rather than declared.",
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
      status: "Normative on invocation",
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
      title: "Catalogue of Checks",
      status: "Normative",
      purpose:
        "The conformance tests of this Standard, with severity and who fixes what.",
    },
    {
      letter: "E",
      title: "Reference Sets and Sources",
      status: "Informative",
      purpose: "Suggested code lists, and where each requirement comes from.",
    },
    {
      letter: "F",
      title: "Relationship to Adjacent Work",
      status: "Informative",
      purpose: "How this Standard relates to the wider research and to DCIOM.",
    },
    {
      letter: "G",
      title: "Paths",
      status: "Informative",
      purpose: "The requirements, sequenced by task.",
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
