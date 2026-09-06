import dciomGovernanceArchitecture from "@/assets/dciom-governance-architecture-page.png";
import dciomSystemFoundations from "@/assets/dciom-system-foundations-page.png";
import dbokProfessionMap from "@/assets/dbok-profession-map-page.png";
import dbokDocumentControlEntry from "@/assets/dbok-document-control-entry.png";
import dbokRfiWalkthrough from "@/assets/dbok-rfi-walkthrough-page.png";
import documentManagementStandardNavigation from "@/assets/document-management-standard-navigation-page.png";
import documentManagementStandardTraceability from "@/assets/document-management-standard-traceability-page.png";
import standardChecksIdentity from "@/assets/standard-checks-page-2.png";
import c2Full from "@/assets/c2 -full.png";
import type { ProjectImage } from "@/data/projects";

export const dciomEvidence: ProjectImage[] = [
  {
    src: dciomGovernanceArchitecture,
    alt: "Page 8 of the DCIOM Framework Standard showing the governance architecture, its three pillars, six components, and three handshakes",
    caption:
      "Document · Standard — DCIOM Framework Standard, §1.6: the authored governance architecture linking document management, reporting, and decision through three formal handshakes.",
  },
  {
    src: dciomSystemFoundations,
    alt: "Page 9 of the DCIOM Framework Standard showing HORIZON, METHOD, OPERATION, six foundational principles, and the operating cycle",
    caption:
      "Document · Standard — DCIOM Framework Standard, §2: HORIZON, METHOD, and OPERATION establish the capability ladder, cognitive anchor, closed loop, and six governing principles.",
  },
];

export const standardEvidence: ProjectImage[] = [
  {
    src: documentManagementStandardNavigation,
    alt: "Page 2 of the Document Management Standard showing how Rules, Routes, and Checks connect requirements, recurring work, and verification",
    caption:
      "Document · Standard — DMS, p. 2: the navigation model links Rules, Routes and Checks to requirements, recurring work and verification.",
  },
  {
    src: documentManagementStandardTraceability,
    alt: "Page 109 of the Document Management Standard showing the normative Traceability Spine between Rules, Routes, and Checks",
    caption:
      "Document · Standard — DMS, Annex F: the normative Traceability Spine synchronizes requirements, applicable routes and executable checks.",
  },
  {
    src: standardChecksIdentity,
    alt: "Standard Checks conformance assessment for Document Identity showing 17 executable checks, exceptions, conformity, and severity",
    caption:
      "Dashboard · Power BI — Standard Checks, H.1: Document Identity clauses become results, exceptions, conformity and severity.",
  },
];

export const dbokEvidence: ProjectImage[] = [
  {
    src: dbokProfessionMap,
    alt: "Page 8 of the Documentation Body of Knowledge showing the profession map and its twelve connected chapters",
    caption:
      "Document · Body of Knowledge — DBoK profession map: twelve chapters locate the disciplines and their relationships.",
  },
  {
    src: dbokDocumentControlEntry,
    alt: "Page from DBoK entry 6.1 showing the position, definition, purpose, relationships, and mechanism of Document Control",
    caption:
      "Document · Body of Knowledge — DBoK 6.1: Document Control’s position, definition, purpose, relationships and mechanism.",
  },
  {
    src: dbokRfiWalkthrough,
    alt: "Page 224 of the Documentation Body of Knowledge showing the beginning of the end-to-end Request for Information walkthrough",
    caption:
      "Document · Worked example — DBoK, Appendix A: an RFI followed end to end through a recognizable project-information workflow.",
  },
];

export const homeEvidence: ProjectImage[] = [
  dciomEvidence[0],
  {
    src: c2Full,
    alt: "Full Power BI Flow and Performance dashboard showing health score, schedule compliance, cycle-time loss, document flow, SLA breaches, reviewer performance, and rework",
    caption:
      "Dashboard · Power BI — DCIOM’s complete Flow & Performance view connects the Health Score to schedule compliance, cycle-time loss, weekly flow, SLA breaches, reviewer performance, and rework.",
  },
  standardEvidence[0],
  standardEvidence[2],
  dbokEvidence[0],
];
