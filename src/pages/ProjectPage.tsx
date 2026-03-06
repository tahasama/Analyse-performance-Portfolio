import { useParams, Link, ScrollRestoration } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import engL from "@/assets/eng.png";
import supD from "@/assets/supp.png";
import sub from "@/assets/sub1.png";
import rev from "@/assets/rev1.png";
import timeline from "@/assets/timeline1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

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
  images: string[];
  executive: {
    problem: string;
    insight: string;
    impact: string;
  };
}

const projectData: Record<string, ProjectData> = {
  "powerbi-dashboard": {
    label: "Power BI Dashboard",
    title: "Document Status & Workflow Monitoring",

    intro:
      "While the Enterprise Document Management System (EDMS) serves as the system of record, it lacks the analytical layer needed for strategic oversight. I developed a dual-context Power BI dashboard that transforms static weekly data extracts into a dynamic intelligence platform.",

    // 🔥 NEW — EXECUTIVE INSIGHT
    executive: {
      problem:
        "Lack of analytical visibility across document workflows and stakeholder performance.",
      insight:
        "The dashboard reveals bottlenecks and comparative metrics across disciplines, engineering teams, and suppliers.",
      impact:
        "Enabled proactive performance management by turning raw document data into actionable, decision-ready intelligence.",
    },
    impact:
      "Delivered a centralized source of truth that elevates raw document data into strategic performance metrics, empowering leadership to move from reactive tracking to proactive management.",

    // 👉 images stay but will be rendered AFTER executive in UI
    images: [engL, supD],

    sections: [
      {
        label: "Context",
        layerColor: "bg-layer-doc",
        title: "Environment & Background",
        content: [
          "Large-scale engineering project with multiple stakeholders including internal teams, clients, and suppliers.",
          "EDMS (e.g., Aconex) provided transactional data via weekly extracts.",
          "Different stakeholders required tailored views of performance.",
          "Leadership lacked a consolidated way to compare performance across disciplines and suppliers.",
        ],
      },

      {
        label: "Problem Statement",
        layerColor: "bg-layer-doc",
        title: "The Analytical Gap",
        content: [
          "The EDMS is a system of record, not a system of analysis.",
          "No consolidated analytical view of document health.",
          "Difficult to compare internal vs external performance.",
          "Limited ability to isolate workflow bottlenecks.",
        ],
      },

      // 🔥 MERGED SECTION
      {
        label: "Analytical Framework",
        layerColor: "bg-layer-doc",
        title: "Data Modeling & KPI Engineering",
        content: [
          "Built a structured Power BI data model based on standardized weekly EDMS extracts.",
          "Designed dual dashboard views tailored for internal teams and suppliers.",
          "Engineered KPIs using DAX such as cycle time, overdue days, and status aging.",
          "Enabled drill-down from executive KPIs to document-level detail.",
          "Integrated status distribution, discipline performance, and workload monitoring into a unified analytical layer.",
        ],
      },

      // 🔥 NEW FOCUSED SECTION
      {
        label: "Performance",
        layerColor: "bg-layer-perf",
        title: "Key Insights",
        content: [
          "Workflow bottlenecks can be isolated by comparing stage-level performance across stakeholders.",
          "Uneven workload distribution across disciplines directly impacts cycle time.",
          "Supplier performance variability becomes immediately visible through comparative KPIs.",
          "Review stages often represent the primary source of delays rather than submission stages.",
        ],
        insight:
          "The dashboard transforms static status data into comparative intelligence, allowing users to instantly identify where performance gaps originate and why they occur.",
      },

      {
        label: "Advisory",
        layerColor: "bg-layer-advisory",
        title: "Business Impact",
        content: [
          "Supports data-driven resource allocation decisions across disciplines.",
          "Provides an objective basis for supplier performance evaluation.",
          "Highlights systemic issues rather than isolated delays.",
          "Enables targeted action plans focused on high-impact bottlenecks.",
        ],
      },
    ],
  },

  // ===========================

  "document-analytics": {
    label: "React.js Web App",
    title: "Document Lifecycle & Timeline Analysis",

    intro:
      "While dashboards show what is delayed, they often fail to explain why. I developed a diagnostic web application that performs a forensic-level analysis of document workflows, transforming raw lifecycle data into clear, visual narratives.",

    // 🔥 NEW — EXECUTIVE INSIGHT
    executive: {
      problem:
        "Delays existed but root causes and accountability were unclear and difficult to communicate.",
      insight:
        "Timeline-based analysis reveals exactly where delays occur, eliminating ambiguity between submission and review responsibilities.",
      impact:
        "Enabled faster root-cause identification and supported objective, evidence-based performance discussions.",
    },

    impact:
      "Transforms complex document histories into intuitive visual stories, reducing analysis time and improving communication across stakeholders.",

    images: [sub, rev, timeline],

    sections: [
      {
        label: "Context",
        layerColor: "bg-layer-doc",
        title: "Environment & Background",
        content: [
          "Project relied heavily on supplier document delivery impacting critical path timelines.",
          "EDMS provided raw status data but lacked visualization capabilities.",
          "Manual tracing of document workflows was time-consuming and inefficient.",
          "Frequent disputes over delay responsibility required clearer analytical evidence.",
        ],
      },

      {
        label: "Problem Statement",
        layerColor: "bg-layer-doc",
        title: "The Interpretation Gap",
        content: [
          "Delay-related data existed but was not easily interpretable.",
          "Trend analysis required manual extraction and processing.",
          "No unified interface for combining multiple analytical dimensions.",
          "No automated way to generate concise performance summaries.",
        ],
      },

      // 🔥 MERGED
      {
        label: "Analytical Framework",
        layerColor: "bg-layer-doc",
        title: "Application Design & Data Structuring",
        content: [
          "Structured the application into three analytical modules: Submissions, Reviews, and Timeline.",
          "Built interactive visualizations including line charts, heatmaps, and timeline bar charts.",
          "Engineered an automated insights engine generating plain-language summaries.",
          "Combined document-level and workflow-level data for a multi-layered analysis.",
        ],
      },

      // 🔥 FOCUSED INSIGHTS
      {
        label: "Performance",
        layerColor: "bg-layer-perf",
        title: "Key Insights",
        content: [
          "Timeline visualization clearly distinguishes between submission delays and review delays.",
          "Recurring late submissions create predictable downstream bottlenecks.",
          "Review workload imbalances contribute significantly to cycle time delays.",
          "Trend analysis reveals systemic patterns rather than isolated issues.",
        ],
        insight:
          "By combining visual timelines with automated summaries, the application transforms complex workflow data into immediate, actionable insight accessible to both technical and non-technical users.",
      },

      {
        label: "Advisory",
        layerColor: "bg-layer-advisory",
        title: "Business Impact",
        content: [
          "Provides objective evidence for supplier performance discussions.",
          "Reduces time required for root-cause analysis.",
          "Supports process improvement initiatives with clear data-backed insights.",
          "Enables more effective communication with leadership through ready-to-use summaries.",
        ],
      },
    ],
  },

  // ===========================

  "jupyter-analysis": {
    label: "Jupyter Notebook (Python)",
    title: "Document Flow & Delay Intelligence",
    intro:
      "This notebook analyzes the full lifecycle of engineering document submissions and reviews. It combines workflow data and supplier submission data to measure performance, identify bottlenecks, and generate actionable insights for improving document flow efficiency. The analysis can also serve as the basis for a more interactive presentation or dashboard if desired.",
    executive: {
      problem:
        "Engineering and Management often lack a consolidated view of document flow performance. Delays may originate from suppliers, reviewers, discipline-specific issues, or growing backlog pressure, but the root causes are rarely quantified clearly.",
      insight:
        "By combining submission schedules, workflow timestamps, and reviewer activity, the analysis quantifies on-time performance, review efficiency, cycle times, backlog growth, and discipline risk areas.",
      impact:
        "Transforms raw data into a structured performance analysis with visual trends, risk indicators, and action recommendations, enabling teams to quickly understand operational issues and prioritize corrective actions.",
    },
    impact:
      "Delivered a structured performance assessment of the document workflow including supplier on-time performance, review SLA compliance, cycle time analysis, backlog tracking, discipline risk detection, reviewer throughput metrics, and a dynamic action plan highlighting operational priorities. This analysis can also be further translated into interactive dashboards or presentations for broader stakeholder engagement.",
    images: [""],
    sections: [
      {
        label: "Core Metrics",
        layerColor: "bg-layer-perf",
        title: "Workflow Performance KPIs",
        content: [
          "Supplier On-Time Submission %: Percentage of documents submitted on or before planned submission dates.",
          "Review On-Time (SLA) %: Percentage of documents approved before the workflow due date.",
          "Median Cycle Time: Typical number of days from planned submission to final approval.",
          "Backlog Pressure %: Share of documents currently overdue or exceeding SLA.",
        ],
      },
      {
        label: "Process Analysis",
        layerColor: "bg-layer-report",
        title: "Workflow Bottleneck & Trend Analysis",
        content: [
          "**Time Contribution Analysis:** Measures how much of total cycle time comes from supplier delays versus internal review duration.",
          "**Submission vs Approval Trend:** Weekly comparison of documents submitted, approved, and cumulative backlog.",
          "**Supplier Performance Table:** Highlights suppliers with frequent delays, average delay days, and on-time rates.",
        ],
      },
      {
        label: "Operational Risk Insights",
        layerColor: "bg-layer-advisory",
        title: "Risk & Efficiency Diagnostics",
        content: [
          "**Discipline Risk Analysis:** Identifies engineering disciplines with the highest SLA breach rates.",
          "**Reviewer Performance Metrics:** Measures reviewer throughput, average review duration, and on-time approval rates.",
          "**Review Duration Distribution:** Shows how documents are distributed across fast, normal, slow, and very slow review categories.",
        ],
      },
      {
        label: "Decision Support",
        layerColor: "bg-layer-advisory",
        title: "Dynamic Action Plan",
        content: [
          "Automatically detects workflow bottlenecks such as supplier delays, review capacity constraints, or backlog pressure.",
          "Highlights high-risk disciplines or reviewers with unusually low throughput.",
          "Generates prioritized operational recommendations to guide corrective actions and workflow improvements.",
        ],
      },
      {
        label: "Further Steps",
        layerColor: "bg-layer-report",
        title: "Interactive Presentation Potential",
        content: [
          "The notebook results can be extended into interactive visual summaries or dashboards for leadership or team reviews.",
          "Key metrics, tables, and action recommendations can be presented in a polished, stakeholder-ready format.",
          "This step allows teams to explore trends dynamically while maintaining the rigor of the notebook analysis.",
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
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const autoplay = useRef<any>(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">
            Project Not Found
          </h1>
          <Link to="/" className="text-accent hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const projectMap: Record<string, string> = {
    "powerbi-dashboard": "document-analytics",
    "document-analytics": "jupyter-analysis",
    "jupyter-analysis": "powerbi-dashboard",
  };

  const otherProjectId = projectId ? projectMap[projectId] : "";
  const otherProject = otherProjectId
    ? projectData[otherProjectId]
    : projectData["powerbi-dashboard"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
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
      <section className="max-w-4xl mx-auto pl-6 py-10">
        <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6 animate-fade-up">
          {project.title}
        </h1>
        <p
          className="text-lg text-muted-foreground leading-relaxed max-w-3xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {project.intro}
        </p>
      </section>

      {/* Executive Summary - Horizontal Flow */}
      <section className="max-w-4xl mx-auto px-6 pb-16 pt-8 animate-fade-up">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-6">
          {/* 1. Problem */}
          <div className="flex-1 bg-muted/20 border border-border rounded-lg p-6 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Problem
            </p>
            <p className="text-sm text-foreground/85 leading-relaxed flex-1">
              {project.executive.problem}
            </p>
          </div>

          {/* 2. Insight */}
          <div className="flex-1 bg-accent/10 border border-accent rounded-lg p-6 flex flex-col md:scale-[1.035]">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Insight
            </p>
            <p className="text-sm font-medium text-foreground leading-relaxed flex-1">
              {project.executive.insight}
            </p>
          </div>

          {/* 3. Impact */}
          <div className="flex-1 bg-muted/20 border border-border rounded-lg p-6 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Impact
            </p>
            <p className="text-sm text-foreground/85 leading-relaxed flex-1">
              {project.executive.impact}
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
        <section
          role="region"
          aria-label="Project screenshots"
          tabIndex={0}
          className="animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <Carousel
            className="w-full max-w-[12rem] sm:max-w-[50rem] mx-auto "
            plugins={[autoplay.current]}
            setApi={setApi}
          >
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        {image ? (
                          <img
                            src={image}
                            alt={`Analytics dashboard screenshot ${index + 1}`}
                            onClick={() => setActiveImage(image)}
                            className="w-full h-[420px] object-cover cursor-zoom-in"
                          />
                        ) : (
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex justify-center gap-2 mt-4 relative">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  current === index
                    ? "bg-accent scale-125"
                    : "bg-muted-foreground/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {project.sections.map((section, i) => (
          <section key={i}>
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
                <p className="text-sm font-semibold text-accent mb-1">
                  Key Insight
                </p>
                <p className="text-foreground/85 leading-relaxed">
                  {section.insight}
                </p>
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

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div className="absolute top-2 right-2 p-2 m-2">
            <button
              className="text-muted-foreground hover:text-foreground "
              aria-label="Close"
            >
              <X className="h-5 w-5 ring-2 ring-muted-foreground rounded-full" />
            </button>
          </div>
          <img
            src={activeImage}
            alt="Expanded view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
      {/* Footer */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">
          ← Back to Portfolio
        </Link>
      </footer>
    </div>
  );
}
