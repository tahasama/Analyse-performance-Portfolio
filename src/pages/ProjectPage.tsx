import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectSection {
  label: string;
  layerColor: string;
  title: string;
  content: string[];
  insight?: string;
}

interface ProjectData {
  label: string;
  title: string;
  intro: string;
  impact: string;
  sections: ProjectSection[];
}

const projectData: Record<string, ProjectData> = {
  "document-analytics": {
    label: "React Web App",
    title: "Document Submission & Review Analytics",
    intro:
      "In large-scale engineering projects, thousands of documents move through structured lifecycles — from initial submission through multi-stage reviews to final approval. Without visibility into this flow, delays compound silently. This project built a React-based analytics tool to track, visualize, and analyze document workflows end-to-end.",
    impact:
      "Enabled project leadership to identify review bottlenecks 3× faster and reduced average document cycle time by surfacing previously invisible delays in discipline-level workflows.",
    sections: [
      {
        label: "Context",
        layerColor: "bg-layer-doc",
        title: "Environment & Background",
        content: [
          "Engineering project environment with 5,000+ controlled documents across 8 disciplines.",
          "Documents follow a lifecycle: Draft → Internal Review → Submission → Client Review → Approval.",
          "Tracking was manual — spreadsheets updated weekly with no real-time status visibility.",
          "Project management had no structured way to measure review performance or predict delays.",
        ],
      },
      {
        label: "Problem Statement",
        layerColor: "bg-layer-doc",
        title: "What Was Missing",
        content: [
          "No visibility into where documents were stalling in the review pipeline.",
          "Delays between planned and actual submission dates were not measured or tracked.",
          "Discipline-level performance was opaque — no way to compare output across teams.",
          "Workflow inefficiencies compounded without detection, causing downstream schedule impact.",
        ],
        insight:
          "The core problem was not a lack of data — it was a lack of structured analysis to make document workflows transparent and measurable.",
      },
      {
        label: "Document Intelligence",
        layerColor: "bg-layer-doc",
        title: "Data Structure & Lifecycle Mapping",
        content: [
          "Structured data model capturing: document ID, discipline, revision, status, planned dates, actual dates, reviewer assignments.",
          "Mapped 5 lifecycle stages with transition timestamps enabling duration calculations.",
          "Tracked revision history to identify documents requiring excessive rework cycles.",
          "Normalized discipline naming conventions across 8 engineering disciplines for consistent analysis.",
        ],
      },
      {
        label: "Reporting",
        layerColor: "bg-layer-report",
        title: "What Is Being Monitored",
        content: [
          "Submission volumes by discipline and time period — identifying throughput patterns.",
          "Review status distribution showing pipeline health at any point in time.",
          "Heatmaps revealing submission and review activity patterns across weeks.",
          "Completion rates tracking approved vs. total documents per discipline milestone.",
        ],
      },
      {
        label: "Performance",
        layerColor: "bg-layer-perf",
        title: "Where Time Is Being Lost",
        content: [
          "Planned vs. actual submission analysis revealed an average 12-day delay in structural documents.",
          "Review stage duration analysis showed client review taking 2.3× longer than internal review.",
          "Throughput tracking exposed a 40% drop in processing during month-end periods.",
          "Bottleneck identification: 3 of 8 disciplines accounted for 67% of all delayed documents.",
        ],
        insight:
          "The structural discipline consistently showed the highest delays — not due to volume, but due to concentrated reviewer workload creating a single point of failure.",
      },
      {
        label: "Advisory",
        layerColor: "bg-layer-advisory",
        title: "Translating Insights Into Action",
        content: [
          "Recommended redistributing review workload across structural reviewers to eliminate bottleneck.",
          "Proposed staggered submission scheduling to smooth month-end processing spikes.",
          "Flagged documents exceeding 2× average review duration for escalation workflows.",
          "Suggested discipline coordination meetings driven by performance data rather than status updates.",
        ],
      },
    ],
  },
  "powerbi-dashboard": {
    label: "Power BI Dashboard",
    title: "Discipline-Level Performance Reporting",
    intro:
      "Project controls teams need consistent, structured reporting to monitor discipline-level output and workflow health. This Power BI dashboard replaced fragmented manual reports with a unified performance view — tracking KPIs, workflow ownership, and discipline comparisons in a single, regularly updated source of truth.",
    impact:
      "Transformed weekly reporting from a 4-hour manual compilation into an automated dashboard, enabling PMO leadership to make resource decisions based on real performance data rather than estimates.",
    sections: [
      {
        label: "Context",
        layerColor: "bg-layer-doc",
        title: "Environment & Background",
        content: [
          "Multi-discipline engineering project with centralized document control and distributed review teams.",
          "Weekly status reports were compiled manually from spreadsheet exports — time-consuming and error-prone.",
          "Each discipline reported independently with inconsistent metrics, making cross-discipline comparison impossible.",
          "PMO needed standardized KPIs to support resource allocation and milestone planning decisions.",
        ],
      },
      {
        label: "Problem Statement",
        layerColor: "bg-layer-doc",
        title: "What Was Missing",
        content: [
          "No unified view of discipline performance — data was siloed in individual team reports.",
          "Workflow ownership was unclear — documents stalled without accountability.",
          "Status distribution was reported inconsistently, making progress tracking unreliable.",
          "Weekly activity trends were not tracked, preventing identification of productivity patterns.",
        ],
        insight:
          "The problem wasn't reporting frequency — it was reporting consistency. Without standardized metrics, the same data told different stories depending on who compiled it.",
      },
      {
        label: "Document Intelligence",
        layerColor: "bg-layer-doc",
        title: "Data Structure & Lifecycle Mapping",
        content: [
          "Consolidated data from document control register, review tracker, and milestone schedule.",
          "Standardized fields: discipline, document type, current status, owner, planned date, actual date, revision count.",
          "Created calculated columns for cycle time, overdue days, and status aging.",
          "Linked document records to workflow stages for ownership-level tracking.",
        ],
      },
      {
        label: "Reporting",
        layerColor: "bg-layer-report",
        title: "What Is Being Monitored",
        content: [
          "Discipline comparison: approved, received, and remaining documents tracked against planned totals.",
          "Workflow ownership: which teams hold documents at each review stage — visibility into accountability.",
          "KPI donuts showing real-time status distribution (Draft, In Review, Approved, Overdue).",
          "Weekly activity trends tracking submissions, reviews completed, and approvals over rolling 8-week windows.",
        ],
      },
      {
        label: "Performance",
        layerColor: "bg-layer-perf",
        title: "Where Time Is Being Lost",
        content: [
          "Discipline comparison revealed mechanical completing at 85% while piping lagged at 52% — a 33-point gap.",
          "Workflow ownership analysis showed 28% of in-review documents had no assigned reviewer for 5+ days.",
          "Weekly trends exposed a consistent Monday-Tuesday submission spike creating reviewer backlogs mid-week.",
          "Overdue document aging analysis: 15% of overdue items had been stalled for 20+ days without escalation.",
        ],
        insight:
          "The performance gap between disciplines was not a matter of complexity — it was a matter of review capacity. Piping had 2× the document volume but the same reviewer count as mechanical.",
      },
      {
        label: "Advisory",
        layerColor: "bg-layer-advisory",
        title: "Translating Insights Into Action",
        content: [
          "Recommended reviewer rebalancing: assign additional review capacity to piping discipline based on volume-to-reviewer ratio.",
          "Proposed automated escalation for documents unassigned for 3+ days.",
          "Suggested spreading submission deadlines across the week to reduce Monday-Tuesday spikes.",
          "Introduced discipline health scoring to give PMO a single metric for weekly check-ins.",
        ],
      },
    ],
  },
};

const layerLabelColors: Record<string, string> = {
  Context: "text-layer-doc",
  "Problem Statement": "text-layer-doc",
  "Document Intelligence": "text-layer-doc",
  Reporting: "text-layer-report",
  Performance: "text-layer-perf",
  Advisory: "text-layer-advisory",
};

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectData[projectId || ""];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const otherProjectId =
    projectId === "document-analytics" ? "powerbi-dashboard" : "document-analytics";
  const otherProject = projectData[otherProjectId];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Portfolio
          </Link>
          <span className="section-label">{project.label}</span>
        </div>
      </header>

      {/* Title */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6 animate-fade-up">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {project.intro}
        </p>
      </section>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
        {project.sections.map((section, i) => (
          <section
            key={i}
            className="animate-fade-up"
            style={{ animationDelay: `${0.05 * i}s` }}
          >
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] mb-2 ${
                layerLabelColors[section.label] || "text-accent"
              }`}
            >
              {section.label}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.content.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-foreground/85 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {section.insight && (
              <div className="insight-card mt-6">
                <p className="text-sm font-semibold text-accent mb-1">Key Insight</p>
                <p className="text-foreground/85 leading-relaxed">{section.insight}</p>
              </div>
            )}
          </section>
        ))}

        {/* Impact Statement */}
        <section className="border-t border-border pt-12">
          <p className="section-label mb-3">Impact</p>
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
            {project.impact}
          </p>
        </section>

        {/* Next Project */}
        <section className="border-t border-border pt-12">
          <Link
            to={`/project/${otherProjectId}`}
            className="group flex items-center justify-between p-6 rounded-lg border border-border hover:border-accent/40 hover:shadow-md transition-all"
          >
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Next Project
              </p>
              <p className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                {otherProject.title}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
          </Link>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">
          ← Back to Portfolio
        </Link>
      </footer>
    </div>
  );
}
