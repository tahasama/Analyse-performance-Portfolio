export interface DbokChapter {
  number: string;
  title: string;
  gloss: string;
}

export interface DbokKnowledgeType {
  name: string;
  description: string;
}

export interface DbokPattern {
  term: string;
  explanation: string;
}

export interface DbokReference {
  name: string;
  positioningStatement: string;
  orientation: Array<{ label: string; text: string }>;
  knowledgeTypes: DbokKnowledgeType[];
  architecturalPatterns: DbokPattern[];
  chapters: DbokChapter[];
  appendices: Array<{ label: string; description: string }>;
}

export const dbok: DbokReference = {
  name: "Documentation Body of Knowledge (DBoK)",
  positioningStatement:
    "An independently authored architectural reference mapping the wider documentation and information-governance landscape — from enterprise governance down to document control — as a structured map of disciplines, frameworks, concepts, artifacts, technologies, standards, and roles, not a single-discipline manual.",
  orientation: [
    {
      label: "Why",
      text: "The map connecting every documentation discipline — so none has to be understood alone.",
    },
    {
      label: "For Who",
      text: "Anyone whose job touches documentation without a name for the discipline they practice.",
    },
    {
      label: "Where It Fits",
      text: "ISO 19650/15489 own implementation detail — this explains why it matters and where it fits.",
    },
  ],
  knowledgeTypes: [
    {
      name: "Discipline",
      description: "A named field of practice within the landscape — e.g. Records Management, Document Control.",
    },
    {
      name: "Framework",
      description: "A structured methodology or model, external or independently designed — e.g. DCIOM.",
    },
    {
      name: "Framework Component",
      description: "A named working part of a framework — e.g. a pillar, a handshake, a principle.",
    },
    {
      name: "Concept",
      description: "A recurring idea or distinction used to reason across disciplines — e.g. governance vs. management.",
    },
    {
      name: "Artifact",
      description: "A tangible output a discipline actually produces — e.g. a register, a transmittal, a report.",
    },
    {
      name: "Technology",
      description: "A tool or system category that implements a discipline's practice — e.g. EDMS, CDE.",
    },
    {
      name: "Standard",
      description: "An external published reference the landscape maps against — e.g. ISO 19650.",
    },
    {
      name: "Role",
      description: "A named responsibility accountable for part of the work — e.g. Document Controller.",
    },
  ],
  architecturalPatterns: [
    {
      term: "Governance vs. management vs. operations",
      explanation:
        "Who sets the rule, who manages compliance with it, and who actually performs the work — three different roles, easy to blur.",
    },
    {
      term: "Enterprise vs. project",
      explanation:
        "What applies across the whole organization permanently, versus what's scoped to one project and ends when it does.",
    },
    {
      term: "Policy vs. execution",
      explanation: "What's written down as the rule, versus what actually happens when it's applied.",
    },
    {
      term: "Information vs. document vs. data vs. record",
      explanation:
        "Four related but distinct things — a document is a container, data is what's inside it, a record is what can't be changed once created.",
    },
    {
      term: "Lifecycle vs. workflow",
      explanation:
        "The stages something passes through over its life, versus the steps required to move it through any one stage.",
    },
  ],
  chapters: [
    {
      number: "0",
      title: "Architectural Patterns",
      gloss: "Five recurring distinctions used throughout the book, applied consistently across every chapter below.",
    },
    {
      number: "1",
      title: "Enterprise Documentation Ecosystem",
      gloss: "Enterprise governance, corporate governance, risk management, and compliance — the root authority everything else sits inside.",
    },
    {
      number: "2",
      title: "Information Governance",
      gloss: "Information lifecycle, information security, access control, data governance, and knowledge management.",
    },
    {
      number: "3",
      title: "Records Management",
      gloss: "Recordkeeping requirements, retention & disposition, legal hold, archives, digital preservation.",
    },
    {
      number: "4",
      title: "Project Information Management",
      gloss: "Data management, model/BIM information management, digital twins, meeting minutes, action logs.",
    },
    {
      number: "5",
      title: "Document Management",
      gloss: "EDMS, metadata, taxonomy & classification, version control, workflows, distribution, controlled records.",
    },
    {
      number: "6",
      title: "Document Control",
      gloss: "Supplier management, review management, submittals, transmittals, deliverables, MDR, RFI, NCR, CAR, operational reporting — the author's own operational domain.",
    },
    {
      number: "7",
      title: "Performance Governance",
      gloss: "Verifying whether governance is actually working — where DCIOM itself is formally situated, alongside the Three Handshakes and the six components.",
    },
    {
      number: "8",
      title: "Standards",
      gloss: "Maps external references (ISO 19650, ISO 15489/30301, ISO/IEC 27001, ISO 9001, GDPR, DAMA-DMBOK, ISO 30401, ISO/IEC 42001 & the EU AI Act) to the disciplines they inform, rather than treating standards as disciplines of their own.",
    },
    {
      number: "9",
      title: "Technologies",
      gloss: "Common Data Environments, BIM authoring/coordination tools, workflow automation, ECM, master data management, enterprise search, AI-assisted document intelligence.",
    },
    {
      number: "10",
      title: "Roles",
      gloss: "Document Controller, Document Manager, Records Manager, Information Manager, Project Information Manager, BIM Manager, Data Steward, Quality Manager.",
    },
    {
      number: "11",
      title: "Maturity",
      gloss: "Maturity models across information governance, BIM/information management, data governance, and document control — measured per discipline, never once.",
    },
  ],
  appendices: [
    { label: "Appendix A", description: "One RFI, start to finish." },
    { label: "Appendix B", description: "One record, creation to destruction." },
    { label: "Appendix C", description: "One supplier document, tender to handover." },
  ],
};
