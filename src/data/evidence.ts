import dciomPerformanceReport from "@/assets/dciom-performance-report-page.png";
import dbokProfessionMap from "@/assets/dbok-profession-map-page.png";
import documentManagementStandardNavigation from "@/assets/document-management-standard-navigation-page.png";
import standardChecksIdentity from "@/assets/standard-checks-page-2.png";
import c2Full from "@/assets/c2 -full.png";
import type { ProjectImage } from "@/data/projects";

export const homeEvidence: ProjectImage[] = [
  {
    src: dciomPerformanceReport,
    alt: "Page 17 of the DCIOM Framework Standard defining Component 2, Performance Report, including its purpose, output, trigger, and decision owner",
    caption:
      "Document · Standard. DCIOM Framework Standard, §4.2: the Performance Report defines its purpose, output, cadence, trigger, decision owner and the performance signals it evaluates.",
  },
  {
    src: c2Full,
    alt: "Full Power BI Flow and Performance dashboard showing health score, schedule compliance, cycle-time loss, document flow, SLA breaches, reviewer performance, and rework",
    caption:
      "Dashboard · Power BI. DCIOM’s complete Flow & Performance view connects the Health Score to schedule compliance, cycle-time loss, weekly flow, SLA breaches, reviewer performance, and rework.",
  },
  {
    src: documentManagementStandardNavigation,
    alt: "Page 2 of the Document Management Standard showing how Rules, Routes, and Checks connect requirements, recurring work, and verification",
    caption:
      "Document · Standard. DMS, p. 2: the navigation model links Rules, Routes and Checks to requirements, recurring work and verification.",
  },
  {
    src: standardChecksIdentity,
    alt: "Standard Checks conformance assessment for Document Identity showing 17 executable checks, exceptions, conformity, and severity",
    caption:
      "Dashboard · Power BI. Standard Checks, H.1: Document Identity clauses become results, exceptions, conformity and severity.",
  },
  {
    src: dbokProfessionMap,
    alt: "Page 8 of the Documentation Body of Knowledge mapping the documentation disciplines and showing where the Document Management Standard and DCIOM sit",
    caption:
      "Document · Body of Knowledge. DBoK profession map: the relationships among the documentation disciplines and the position of the Document Management Standard and DCIOM.",
  },
];
