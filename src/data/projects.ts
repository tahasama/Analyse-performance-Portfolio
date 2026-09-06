import c1 from "@/assets/c1.png";
import c2_1 from "@/assets/c2-1.png";
import c2_2 from "@/assets/c2-2.png";
import c3 from "@/assets/c3.png";
import c4 from "@/assets/c4.png";
import c5 from "@/assets/c5.png";
import c6 from "@/assets/c6.png";
import c6Worksheet from "@/assets/c6-2.png";

export type ProjectId =
  | "c1-status"
  | "c2-performance"
  | "c3-findings-advisory"
  | "c4-process-action"
  | "c5-strategy-impact"
  | "c6-questionnaire-tracking";

export type ProjectStatus = "live" | "ready";

export interface ProjectImage {
  src: string;
  alt: string;
  /** Must describe only what is literally visible in the image. */
  caption: string;
}

export interface StatusSnapshotData {
  kind: "status-snapshot";
  counters: Array<{ label: string; value: string; note?: string }>;
  queue: Array<{ stage: string; share: number }>;
}

export interface PerformanceBreakdownData {
  kind: "performance-breakdown";
  healthScore: { value: number; label: string };
  kpis: Array<{ label: string; value: string }>;
  breakdownNote: string;
}

export interface FindingsAdvisoryData {
  kind: "findings-advisory";
  findings: Array<{
    label: string;
    severity: "critical" | "attention" | "healthy";
    detail: string;
  }>;
  advisories: Array<{
    classification: "Capacity" | "Execution" | "Control";
    recommendedAction: string;
    routedTo: string;
  }>;
}

export interface QuarterComparisonData {
  kind: "quarter-comparison";
  areas: Array<{
    name:
      | "Process Health"
      | "Supplier Compliance"
      | "Intake Flow"
      | "Review Compliance"
      | "Throughput Capacity";
    currentQ: string;
    previousQ: string;
    concludedStatus: "Resolved" | "Improving" | "Stagnant" | "Deteriorating";
    diagnosis: string;
    escalated: boolean;
  }>;
  note: string;
}

export interface ScenarioTrajectoryData {
  kind: "scenario-trajectory";
  horizonLabel: string;
  scenarios: Array<{
    name: string;
    assumption: string;
    projectedOutcome: string;
  }>;
  hedgeNote: string;
}

export interface MeetingWorksheetData {
  kind: "meeting-worksheet";
  packSummary: {
    healthScore: string;
    reviewCommitment: string;
    supplierCommitment: string;
    headline: string;
  };
  /** Field names the live worksheet captures -- schema only, no invented row data. */
  worksheetFields: string[];
  worksheetNote: string;
}

export type ProjectVisualData =
  | StatusSnapshotData
  | PerformanceBreakdownData
  | FindingsAdvisoryData
  | QuarterComparisonData
  | ScenarioTrajectoryData
  | MeetingWorksheetData;

export interface ProjectContent {
  id: ProjectId;
  status: ProjectStatus;
  group: "reporting" | "decision";
  title: string;
  typeCadenceLabel: string;
  /** One-line role, used on the Home discovery panels -- not the full narrative. */
  roleOneLiner: string;
  /** The deliverable-style artifact name, e.g. "Status Report / operational snapshot". */
  artifactName: string;
  theProblem: string;
  whatIBuilt: string;
  whatItDelivers: string[];
  whyItMatters: string;
  images: ProjectImage[];
  visual: ProjectVisualData;
}

export const projects: ProjectContent[] = [
  {
    id: "c1-status",
    status: "live",
    group: "reporting",
    title: "Status & Visibility",
    typeCadenceLabel: "OBSERVATION · Weekly",
    roleOneLiner:
      "A live, consolidated picture of every document's current state. No scoring, no judgment, just what's true right now.",
    artifactName: "Status Report / operational snapshot",
    theProblem:
      "Document status only existed at the transaction level: one record, one submission, one comment. No one had a consolidated view of where the full document set stood, so teams argued from different reconstructed pictures of the same reality.",
    whatIBuilt:
      "A weekly status layer built directly on the EDMS (Aconex): live counts, pending queues, and per-discipline pipeline position, refreshed on the same rhythm as the operational cycle.",
    whatItDelivers: [
      "Live counts: total documents, supplier-pending, review-pending, and what arrived this week",
      "Discipline-by-discipline pipeline showing where documents are queued, in review, or held by contractors",
      "Reviewer workload, broken out per reviewer with average days late",
      "Submission and review status split into completed, in-progress, and not-started shares",
    ],
    whyItMatters:
      "Every later layer (performance measurement, diagnosis, decisions) depends on a shared, undisputed starting picture. This is that picture: an observation layer, not a verdict.",
    images: [
      {
        src: c1,
        alt: "Weekly document status dashboard showing counters, discipline pipeline, reviewer workload, and submission status",
        caption:
          "Dashboard · Power BI — Weekly snapshot: total document counts, supplier/review pending queues, per-discipline pipeline (Electrical, Civil, QA/QC, Architectural, HVAC, Piping/Layouts), reviewer workload with days late, and review/submission status splits.",
      },
    ],
    visual: {
      kind: "status-snapshot",
      counters: [
        { label: "Total Documents", value: "1,999", note: "32% completed" },
        { label: "Supplier Pending", value: "1,188", note: "97% overdue" },
        { label: "Review Pending", value: "124", note: "100% overdue" },
        { label: "Received This Week", value: "0", note: "of 1 planned" },
      ],
      queue: [
        { stage: "Electrical", share: 681 },
        { stage: "Civil", share: 258 },
        { stage: "QA/QC", share: 198 },
        { stage: "Architectural", share: 196 },
        { stage: "HVAC", share: 171 },
        { stage: "Piping/Layouts", share: 137 },
      ],
    },
  },

  {
    id: "c2-performance",
    status: "live",
    group: "reporting",
    title: "Flow & Performance",
    typeCadenceLabel: "MEASUREMENT · Monthly",
    roleOneLiner:
      "Converts operational state into one comparable performance signal per discipline, contractor, and reviewer.",
    artifactName: "Performance Report",
    theProblem:
      "Performance was discussed by impression, not measured. There was no shared basis to compare suppliers, reviewers, or disciplines, and no single number showing whether things were actually improving.",
    whatIBuilt:
      "A monthly layer scoring submission and review activity (on-schedule rate, backlog, SLA breaches, first-time acceptance, revision rate) into one composite Health Score, attributable down to discipline, contractor, and reviewer.",
    whatItDelivers: [
      "A composite Health Score (0–100) combining six performance dimensions into one comparable signal",
      "On-schedule and backlog percentages for both submissions and reviews",
      "A breakdown of where cycle time is actually being lost: supplier delay vs. review duration",
      "Per-discipline SLA breach rates, per-reviewer performance, and submission quality/rework rates",
    ],
    whyItMatters:
      "Within the designed system, this is the cycle's formal performance record, the number every other layer reacts to. The first image is the composite view. The second image is the detail breakdown, showing where supplier, discipline, and reviewer performance are driving the result.",
    images: [
      {
        src: c2_1,
        alt: "Performance overview dashboard showing Health Score, on-schedule percentages, backlog, and weekly flow trend",
        caption:
          "Dashboard · Power BI — What the performance is: Health Score (46/100), submission/review on-schedule %, review and supply backlog %, a split of where cycle time is lost, supplier compliance against an 80% target, and the weekly documents flow trend.",
      },
      {
        src: c2_2,
        alt: "Performance detail dashboard showing discipline SLA breach, reviewer performance, and submission quality",
        caption:
          "Dashboard · Power BI — What's driving it: SLA breach % by discipline (submission vs. review), reviews completed and on-time rate per reviewer, and submission quality split into first-time acceptance vs. 1–2 vs. 3+ revisions.",
      },
    ],
    visual: {
      kind: "performance-breakdown",
      healthScore: { value: 46, label: "Health Score" },
      kpis: [
        { label: "Submission On-Schedule", value: "3.5%" },
        { label: "Review On-Schedule", value: "41.7%" },
        { label: "Reviews Backlog", value: "7.2%" },
        { label: "Supply Backlog", value: "75.9%" },
      ],
      breakdownNote:
        "The second image isn't a separate scorecard. It's the same Health Score broken down by discipline and reviewer, showing exactly where the composite number comes from.",
    },
  },

  {
    id: "c3-findings-advisory",
    status: "ready",
    group: "reporting",
    title: "Findings & Advisory",
    typeCadenceLabel: "DIAGNOSIS · Monthly",
    roleOneLiner:
      "Diagnoses performance failures by type (capacity, execution, or control) and routes ranked findings to the function positioned to respond.",
    artifactName: "Findings & Advisory",
    theProblem:
      "Performance data showed what was failing, not why or what to do next. The same drop could have several causes, with no consistent way to tell a capacity shortage, an execution failure, and a control breakdown apart.",
    whatIBuilt:
      "A monthly layer that turns performance data into ranked, severity-coded findings, classifies each against a constraint type (Capacity, Execution, or Control) and routes each finding to the function positioned to respond.",
    whatItDelivers: [
      "Ranked findings, severity-coded (critical / attention / healthy), with a concise explanation for each",
      "Constraint classification (Capacity, Execution, or Control) for every finding not already on track",
      "A defined routing to the function positioned to respond, such as Discipline Leads or Department Managers.",
      "A single headline statement naming the dominant constraint type for the period",
    ],
    whyItMatters:
      "This is diagnosis plus response, not findings alone. Every finding either resolves as healthy or comes with a classified cause and defined routing to the function positioned to respond.",
    images: [
      {
        src: c3,
        alt: "Findings and Advisory dashboard with ranked findings and a Capacity, Execution, Control advisory breakdown",
        caption:
          "Dashboard · Power BI — Findings (left): four ranked, severity-coded findings, including 'Submission Backlog Critical' and 'Review Backlog Under Control'. Advisory (right): each open finding classified as Capacity, Execution, or Control, with a recommended action and named routing (Department Managers, Discipline Leads, Project Management).",
      },
    ],
    visual: {
      kind: "findings-advisory",
      findings: [
        {
          label: "Supplier Delays Contributing to Cycle Time",
          severity: "attention",
          detail: "Supplier delay accounts for 94% of cycle time; 68 submissions received late.",
        },
        {
          label: "Review Backlog Under Control",
          severity: "healthy",
          detail: "Backlog within acceptable limits at 7.2%.",
        },
        {
          label: "Submission Backlog Critical",
          severity: "critical",
          detail: "75.9% of planned submissions not yet received, trending up.",
        },
        {
          label: "Discipline SLA Breach",
          severity: "critical",
          detail: "Review breach at 58.8% of documents, concentrated in specific disciplines.",
        },
      ],
      advisories: [
        {
          classification: "Capacity",
          recommendedAction: "Rebalance reviewer throughput against the active document pipeline.",
          routedTo: "Management & Department Managers",
        },
        {
          classification: "Execution",
          recommendedAction: "Address non-compliant suppliers in the coordination meeting.",
          routedTo: "Discipline Leads",
        },
        {
          classification: "Control",
          recommendedAction: "Enforce SLA compliance with discipline counterparts.",
          routedTo: "Discipline Leads & Project Management",
        },
      ],
    },
  },

  {
    id: "c4-process-action",
    status: "ready",
    group: "decision",
    title: "Process & Action",
    typeCadenceLabel: "ACTION · Quarterly",
    roleOneLiner:
      "Compares this quarter against last, concludes what actually moved, and determines what that movement justifies.",
    artifactName: "Quarterly Performance Assessment",
    theProblem:
      "Performance metrics moved, stalled, or slipped from quarter to quarter, but that movement was rarely evaluated on its own terms. Whether a metric was genuinely stuck, recovering, or worsening across periods wasn't tracked consistently, so the same underlying problems could resurface unnoticed.",
    whatIBuilt:
      "A quarterly assessment comparing current vs. previous-quarter performance per tracked area, classifying the movement (Resolved, Improving, Stagnant, Deteriorating) and stating in one line what it means and whether it justifies escalation.",
    whatItDelivers: [
      "Current vs. previous quarter for each of five tracked dimensions (Process Health, Supplier Compliance, Intake Flow, Review Compliance, Throughput Capacity)",
      "A concluded status per area: Resolved, Improving, Stagnant, or Deteriorating",
      "A one-line diagnosis explaining what the movement means",
      "Escalation flagged when movement stays flat or worsens across consecutive periods",
    ],
    whyItMatters:
      "This is a quarterly performance assessment, not a commitment tracker. It evaluates whether things actually moved and what that movement justifies. Verifying whether specific commitments were kept is a separate, later step (see Commitment & Tracking).",
    images: [
      {
        src: c4,
        alt: "Quarterly Process and Action assessment showing current vs. previous quarter status for three tracked areas",
        caption:
          "Report · Power BI — Three of the framework's five tracked dimensions this quarter: Process Health (46/100, stagnant, unchanged across periods), Intake Flow (39.4%, deteriorating, with 262 planned submissions never received), and Throughput Capacity (83.7%, resolved, review throughput at target).",
      },
    ],
    visual: {
      kind: "quarter-comparison",
      areas: [
        {
          name: "Process Health",
          currentQ: "46/100",
          previousQ: "44/100",
          concludedStatus: "Stagnant",
          diagnosis: "Health score unchanged across consecutive periods; prior advisories haven't produced a measurable shift.",
          escalated: true,
        },
        {
          name: "Intake Flow",
          currentQ: "39.4%",
          previousQ: "45.5%",
          concludedStatus: "Deteriorating",
          diagnosis: "262 planned submissions never received this period; pipeline feed reducing.",
          escalated: true,
        },
        {
          name: "Throughput Capacity",
          currentQ: "83.7%",
          previousQ: "83.7%",
          concludedStatus: "Resolved",
          diagnosis: "Review throughput holding at target; pipeline processed at expected rate.",
          escalated: false,
        },
      ],
      note: "Shown here: 3 of the 5 dimensions this assessment tracks. Supplier Compliance and Review Compliance are part of the same quarterly assessment but aren't pictured in this evidence sample.",
    },
  },

  {
    id: "c5-strategy-impact",
    status: "ready",
    group: "decision",
    title: "Strategy & Impact",
    typeCadenceLabel: "PROJECTION · Real-time / on demand",
    roleOneLiner:
      "Projects current trajectory forward and simulates what intervention would be required to hit a target.",
    artifactName: "Strategy & Impact / simulation",
    theProblem:
      "Resource and capacity decisions were made without a quantified view of where current trends were heading, or what it would concretely take to change that trajectory.",
    whatIBuilt:
      "A modeling capability projecting current backlog trajectory forward and simulating the effect of intervention (required compliance and throughput) against a stated horizon, for both reviewer- and supplier-side dynamics.",
    whatItDelivers: [
      "Forward projection of review and submission backlog under current, no-intervention trajectory",
      "An intervention scenario stating the compliance and throughput levels required to hit a target",
      "Separate reviewer-side and supplier-side trajectories, since they move independently",
      "A stated horizon (e.g. 4 months) and explicit reachability against it",
    ],
    whyItMatters:
      "This compares scenarios under stated assumptions. It doesn't claim certainty, forecast the future as fact, or make the final call. It's a decision-support input reviewed alongside quarterly governance decisions, not a prediction.",
    images: [
      {
        src: c5,
        alt: "Strategy and Impact simulation showing backlog trajectories, reviewer and supplier scenarios, and target reachability",
        caption:
          "Dashboard · Power BI — A 4-month projection: historical, simulated, and projected backlog curves for reviews and submissions; reviewer backlog trending toward 7.8% (deteriorating) against a 0.7% target reachable at 49% compliance; supplier backlog trending toward 88.3% (deteriorating) against a 7.6% target reachable at 76% compliance.",
      },
    ],
    visual: {
      kind: "scenario-trajectory",
      horizonLabel: "4-month projection",
      scenarios: [
        {
          name: "Reviewers, no intervention",
          assumption: "Current trajectory continues, +0.16%/month",
          projectedOutcome: "Backlog moves 7.2% → 7.8%",
        },
        {
          name: "Reviewers, with intervention",
          assumption: "49% compliance + 1 review/day",
          projectedOutcome: "Backlog reduces 7.2% → 0.6%, target reachable in 4 months",
        },
        {
          name: "Suppliers, no intervention",
          assumption: "Current trajectory continues, +3.10%/month",
          projectedOutcome: "Backlog moves 75.9% → 88.3%",
        },
        {
          name: "Suppliers, with intervention",
          assumption: "76% compliance + 2 submissions/day",
          projectedOutcome: "Backlog reduces 75.9% → 0.0%, target reachable in 4 months",
        },
      ],
      hedgeNote:
        "Projections apply only forward and don't correct for past performance; the simulation is capped at maximum modeled capacity. These are scenarios under stated assumptions, not forecasts.",
    },
  },

  {
    id: "c6-questionnaire-tracking",
    status: "ready",
    group: "decision",
    title: "Commitment & Tracking",
    typeCadenceLabel: "VERIFICATION · Per governance meeting",
    roleOneLiner:
      "Turns governance meetings into binding, named commitments, then reconciles them against what actually happened.",
    artifactName: "Meeting Pack / working worksheet",
    theProblem:
      "Commitments made in performance meetings were tracked informally, if at all, and rarely checked against what actually happened, so the same misses could repeat across cycles unnoticed.",
    whatIBuilt:
      "A two-part commitment layer: a Meeting Pack opening each governance meeting with the current health picture and prior-commitment status, and a working worksheet, filled in live, that captures new commitments with named owners and reconciles them next cycle.",
    whatItDelivers: [
      "A Meeting Pack cover summarizing health score, review/supplier commitment status, and recovery figures at a glance",
      "A live worksheet completed during the meeting: metric, last month, this month, delta, status, and named owner",
      "Next-cycle outcome classification against the prior commitment",
      "A standing record that carries unresolved commitments forward instead of losing them between meetings",
    ],
    whyItMatters:
      "The worksheet is filled in during the meeting, not assembled afterward. Commitments get a named owner and a target in the room, and the next cycle's data is what actually verifies them.",
    images: [
      {
        src: c6,
        alt: "Meeting Pack cover showing health score, commitment status, recovery figures, and an entry point into the full pack",
        caption:
          "Report · Power BI — The Meeting Pack cover, the entry point into a governance meeting: health score (46/100), review and supplier commitment status (pending, no prior meeting yet), recovery figures, and a headline, with an export into the full pack of findings and commitment tracking.",
      },
      {
        src: c6Worksheet,
        alt: "Working worksheet spreadsheet with one row per tracked metric: status, last/this month, delta, a standing question, a response field, and a named owner",
        caption:
          "Worksheet · Excel — The working worksheet the Meeting Pack opens into, with one row per tracked metric (Review Compliance, Supplier Compliance, Intake Flow, Throughput Capacity, and others), each with status, last/this month values, delta, a standing question for the room, a response field, and a named owner (Management or Discipline Lead).",
      },
    ],
    visual: {
      kind: "meeting-worksheet",
      packSummary: {
        healthScore: "46/100",
        reviewCommitment: "Pending",
        supplierCommitment: "Pending",
        headline: "Insufficient prior data to assess commitment performance.",
      },
      worksheetFields: ["Metric", "Status", "Last Month", "This Month", "Delta", "Question", "Response", "Owner"],
      worksheetNote:
        "Completed live during the meeting, not assembled afterward. The next cycle's data reconciles each row against the prior commitment.",
    },
  },
];

/** C-number (1-6) for a component id, used wherever a component is referenced
 * outside its own card -- diagrams, pillar grids, handshake endpoints. */
export const COMPONENT_NUMBER: Record<ProjectId, number> = {
  "c1-status": 1,
  "c2-performance": 2,
  "c3-findings-advisory": 3,
  "c4-process-action": 4,
  "c5-strategy-impact": 5,
  "c6-questionnaire-tracking": 6,
};

export function getProject(id: string | undefined): ProjectContent | undefined {
  return projects.find((p) => p.id === id);
}

export function getNextProject(currentId: ProjectId): ProjectContent {
  const i = projects.findIndex((p) => p.id === currentId);
  return projects[(i + 1) % projects.length];
}
