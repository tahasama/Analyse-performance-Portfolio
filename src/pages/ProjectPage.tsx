import { useParams, Link, ScrollRestoration } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import engL from "@/assets/eng.png";
import supD from "@/assets/supp.png";
import sub from "@/assets/sub1.png";
import rev from "@/assets/rev1.png";
import timeline from "@/assets/timeline1.png";

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
}

const projectData: Record<string, ProjectData> = {
  "powerbi-dashboard": {
    label: "Power BI Dashboard",
    title: "Document Status & Workflow Monitoring",
    intro:
      "While the Enterprise Document Management System (EDMS) serves as the system of record, it lacks the analytical layer needed for strategic oversight. I developed a dual-context Power BI dashboard that transforms static weekly data extracts into a dynamic intelligence platform, providing tailored, real-time visibility for both internal teams and external partners.",
    impact:
      "Delivered a centralized source of truth that elevates raw document data into strategic performance metrics, empowering project leadership to move from reactive status-checking to proactive, data-driven management.",
    images: [engL, supD],
    sections: [
      {
        label: "Context",
        layerColor: "bg-layer-doc",
        title: "Environment & Background",
        content: [
          "Large-scale engineering project with multiple stakeholders, including internal teams, clients, third parties, and key suppliers.",
          "The EDMS (e.g., Aconex) provided the necessary transactional data, through weekly data extracts.",
          "Each stakeholder group required a  view of the data to manage their specific responsibilities and performance.",
          "Leadership needed a way to effectively monitor and compare the performance of both internal disciplines and external suppliers without deep-diving into the EDMS.",
        ],
      },
      {
        label: "Problem Statement",
        layerColor: "bg-layer-doc",
        title: "The Analytical Gap",
        content: [
          "The EDMS is a system of record, not a system of analysis. It could not answer 'why' or 'how well' questions.",
          "No consolidated, analytical view of document health across the entire project ecosystem.",
          "Inability to easily compare performance between internal disciplines, suppliers, etc...",
          "Difficult to quickly isolate and assess the impact of workflow bottlenecks on specific stakeholder groups.",
        ],
        insight:
          "The core issue was not a lack of data, but a lack of accessible, role-specific intelligence. The EDMS provided the 'what,' but I built the solution to deliver the 'so what' for each audience.",
      },
      {
        label: "Document Intelligence",
        layerColor: "bg-layer-doc",
        title: "Data Modeling & Metric Engineering",
        content: [
          "Designed and built a robust data model in Power BI that ingests the standardized weekly data extract from the EDMS.",
          "Developed two distinct, yet consistent, dashboard interfaces: one tailored for internal engineering teams and another for external supplier management, each surfacing the most relevant KPIs for its audience.",
          "Engineered key performance indicators (KPIs) using DAX, such as cycle time, overdue days, and status aging, which do not exist in the source data.",
          "Structured the model to support self-service exploration, enabling users to drill down from high-level KPIs to individual document details.",
        ],
      },
      {
        label: "Reporting",
        layerColor: "bg-layer-report",
        title: "What Is Being Monitored",
        content: [
          "Executive KPIs: High-level metrics that dynamically adjust based on the selected context (e.g., 'Received from Suppliers' vs. 'Issued by Internal Teams').",
          "Status Distribution: Visual breakdowns of document statuses (e.g., 'For Review,' 'Approved') to provide an at-a-glance health check.",
          "Discipline/Supplier Performance: Comparative charts showing document volume, completion rates, and overdue counts across different groups.",
          "Workflow Ownership: A detailed view of reviewer workloads, highlighting the number of items assigned and the average aging of their queue.",
          "Advanced Filter: Enables analysts to quickly isolate specific suppliers, document types, or date ranges for targeted investigations across all pages.",
        ],
      },
      {
        label: "Performance",
        layerColor: "bg-layer-perf",
        title: "How Performance Is Analyzed",
        content: [
          "Enables direct comparison of document throughput and overdue rates between internal disciplines to identify capacity imbalances.",
          "Provides a clear view of supplier performance by comparing on-time submission rates and review turnaround times.",
          "Allows users to drill down into any discipline or supplier to see which reviewers or document types are contributing most to delays.",
          "Facilitates analysis of workflow stages to identify if bottlenecks are concentrated in internal review, client review, or supplier submission phases.",
        ],
        insight:
          "The dashboard's analytical power lies in its ability to frame performance. By allowing users to instantly switch contexts and compare groups, it transforms raw status data into clear, actionable intelligence about where and why performance issues exist.",
      },
      {
        label: "Advisory",
        layerColor: "bg-layer-advisory",
        title: "How It Drives Strategic Decisions",
        content: [
          "Equips project managers with the evidence needed to initiate data-driven discussions about resource allocation with discipline leads.",
          "Provides an objective basis for performance reviews with external suppliers and consultants.",
          "Supports leadership in making strategic decisions by highlighting systemic issues rather than isolated incidents.",
          "Enables the creation of targeted action plans, such as focusing on a specific workflow stage or underperforming group.",
        ],
      },
    ],
  },
  "document-analytics": {
    label: "React.js Web App",
    title: "Document Lifecycle & Timeline Analysis",
    intro:
      "While dashboards excel at showing *what* is delayed, they often can't explain *why*. I developed a diagnostic web application to perform a forensic-level analysis of the document journey. Built specifically for supplier documents, this tool provides the objective, visual evidence needed to pinpoint the exact source of delays and resolve accountability disputes.",
    impact:
      "Equips project teams with an investigative tool that transforms complex document histories into easily understandable stories, providing undeniable evidence to support performance discussions and process improvements.",
    images: [sub, rev, timeline],
    sections: [
      {
        label: "Context",
        layerColor: "bg-layer-doc",
        title: "Environment & Background",
        content: [
          "Project relied on multiple key suppliers, whose document delivery performance directly impacted the critical path.",
          "The EDMS provided raw data on document and workflow statuses, but its tabular format made it difficult to see the big picture or diagnose specific issues.",
          "Disputes over delay responsibility were common, as it was time-consuming to manually trace a document's journey through different statuses.",
          "Project leadership needed a faster, more intuitive way to understand and communicate the root cause of delays.",
        ],
      },
      {
        label: "Problem Statement",
        layerColor: "bg-layer-doc",
        title: "The Communication & Usability Gap",
        content: [
          "The raw data on delay separation existed in the EDMS, but it was not presented in a way that was easy to visualize or communicate to stakeholders.",
          "Analyzing submission and review patterns over time required manual data extraction and charting, which was inefficient and prone to error.",
          "Lacked a dedicated interface that could synthesize multiple data points (status, dates, counts) into a single, coherent diagnostic view.",
          "No mechanism to automatically generate a plain-language summary of performance for quick briefings.",
        ],
        insight:
          "The core problem was one of interpretation. The data was there, but it was locked away in a format that required significant time and effort to understand. The solution needed to bridge the gap between raw data and actionable insight.",
      },
      {
        label: "Document Intelligence",
        layerColor: "bg-layer-doc",
        title: "Structured Analysis & Automated Insights",
        content: [
          "Architected the application into three distinct, purpose-built pages: **Submissions**, **Reviews**, and **Timeline**, to guide the user through a logical diagnostic workflow.",
          "Engineered the data to power dynamic, interactive visualizations like timeline bar charts and trend line charts, making complex patterns immediately visible.",
          "Developed an automated insights engine that analyzes the data on the Submissions and Reviews pages, generating a dynamic, plain-language summary of key performance indicators and issues.",
          "Processed both document-level and workflow-level statuses to provide a complete, multi-layered view of the document lifecycle.",
        ],
      },
      {
        label: "Reporting",
        layerColor: "bg-layer-report",
        title: "What Is Being Monitored",
        content: [
          "**Submissions Page:** Features interactive line charts showing submission trends over time, paired with an automated insights panel that provides summaries and complemented by heatmap, also donut charts breaking down submission performances",
          "**Reviews Page:** Visualizes review workload and performance, with an insights panel that flags issues, the line chart also is complemented by a heatmap and bar chart of overdues ",
          "**Timeline Page:** The core diagnostic tool, showing the step-by-step journey of any selected document with an interactive timeline bar chart, making it easy to see where delays occurred.",
          "Advanced Search & Filter: Enables analysts to quickly isolate specific suppliers, document types, or date ranges for targeted investigations across all pages.",
        ],
      },
      {
        label: "Performance",
        layerColor: "bg-layer-perf",
        title: "How Performance Is Diagnosed",
        content: [
          "The visual timeline makes it instantly clear if a delay occurred before or after submission, settling accountability disputes with a single glance.",
          "The Submissions and Reviews pages allow users to spot trends and outliers, such as a supplier who consistently submits at the last minute, creating predictable bottlenecks.",
          "The automated insights panel provides an immediate, expert-level summary, saving hours of manual analysis and highlighting the most critical issues first.",
          "The three-page structure ensures that users can approach the problem from different angles—high-level trends, specific reviewer performance, or deep-dive forensics.",
        ],
        insight:
          "The application's power lies in its design. By separating analytical concerns and providing automated summaries, it makes complex performance analysis accessible to everyone, not just data experts. It transforms data investigation from a chore into an intuitive, visual experience.",
      },
      {
        label: "Advisory",
        layerColor: "bg-layer-advisory",
        title: "How It Informs Advisory",
        content: [
          "The automated insights panel provides ready-to-use text for reports and presentations, making it easy to communicate performance issues to leadership.",
          "The clear visual evidence from the Timeline page provides an objective basis for performance improvement plans with suppliers.",
          "Trend analysis from the Submissions and Reviews pages helps justify process changes, such as implementing staggered deadlines or reallocating review resources.",
          "Serves as the factual foundation for workshops, helping teams focus on fixing the most impactful systemic issues identified by the tool.",
        ],
      },
    ],
  },
  "jupyter-analysis": {
    label: "Jupyter Notebook (Python)",
    title: "Proactive Workflow & Escalation System",
    intro:
      "While dashboards and diagnostic apps empower users to *find* problems, I built an automated system to *push* critical issues directly to the people who can solve them. This Python-based service transforms document management from a reactive 'pull' model to a proactive 'push' model, ensuring no critical task falls through the cracks.",
    impact:
      "Drastically reduced the time-to-awareness for overdue and high-priority documents, accelerating review cycles and increasing individual accountability by delivering actionable intelligence directly into users' daily workflows.",

    images: [""],
    sections: [
      {
        label: "Context",
        layerColor: "bg-layer-doc",
        title: "Environment & Background",
        content: [
          "Document reviewers and discipline leads are often managing multiple projects and priorities, making it difficult to constantly monitor an EDMS or dashboard.",
          "The primary communication tools for project teams are email and chat platforms (e.g., Microsoft Teams).",
          "Critical delays were often discovered only during weekly meetings, meaning days were lost before action could be taken.",
          "There was a need for a 'hands-free' system that could monitor performance and alert stakeholders without requiring them to log in and check a report.",
        ],
      },
      {
        label: "Problem Statement",
        layerColor: "bg-layer-doc",
        title: "The Awareness & Accountability Gap",
        content: [
          "No mechanism existed to proactively alert individuals or managers to urgent or overdue items in real-time.",
          "Responsibility for delays was difficult to enforce, as there was no automated record of notification.",
          "Reviewers were unaware of newly assigned high-priority documents until they manually checked the system.",
          "Management lacked a simple, automated way to get a daily or weekly summary of their team's pressing issues.",
        ],
        insight:
          "The core problem was one of latency. The data was available, but the signal was too weak and too slow to drive immediate action. The solution needed to amplify the signal and deliver it with zero friction.",
      },
      {
        label: "Automation Intelligence",
        layerColor: "bg-layer-doc",
        title: "Rule-Based Processing & Targeted Delivery",
        content: [
          "I developed a scheduled Python script that ingests the same weekly data extract, processing it with the Pandas library.",
          "Engineered a sophisticated rules engine that scans the data for specific trigger conditions, such as documents overdue > 5 days, items stuck in a status for > 10 days, or high-priority documents assigned to a user.",
          "Built a modular notification system that formats clean, human-readable alerts and delivers them via email or a chat platform API.",
          "Designed different alert templates for different audiences, ensuring the message is relevant and actionable for the recipient.",
        ],
      },
      {
        label: "Reporting",
        layerColor: "bg-layer-report",
        title: "What Is Being Monitored & Alerted",
        content: [
          "**Individual Escalation Alerts:** Automated emails sent directly to a reviewer, listing their overdue documents and highlighting high-priority items.",
          "**Management Summary Alerts:** A daily or weekly digest sent to discipline leads, summarizing their team's total overdue count, average aging, and top problem areas.",
          "**Supplier Watchlist Alerts:** Notifications to supplier managers when a key supplier's performance metrics (e.g., average delay) cross a predefined threshold.",
          "**System Health Alerts:** Alerts for administrators if the data extract fails or if an unusually high number of documents are flagged, indicating a potential systemic issue.",
        ],
      },
      {
        label: "Performance",
        layerColor: "bg-layer-perf",
        title: "How Performance Is Accelerated",
        content: [
          "Reduces 'time to awareness' from days (when someone checks a dashboard) to hours (when the alert is sent), directly accelerating the start of the review process.",
          "Increases individual accountability by creating a clear, time-stamped digital paper trail of notifications for each overdue item.",
          "Helps managers balance team workloads by providing visibility into which team members are consistently overloaded with overdue tasks.",
          "Improves overall document cycle time by ensuring that bottlenecks are flagged and addressed as soon as they occur, not at the end of the week.",
        ],
        insight:
          "The system's power lies in its seamless integration into existing workflows. It works silently in the background, only surfacing when a critical threshold is crossed, delivering intelligence directly into the tools (email, chat) that people already use and monitor constantly.",
      },
      {
        label: "Advisory",
        layerColor: "bg-layer-advisory",
        title: "How It Drives Immediate Action",
        content: [
          "Enables real-time operational decisions, such as a manager immediately reassigning a task from an overloaded reviewer to someone with capacity.",
          "Provides the trigger for immediate outreach to a supplier about a late submission, preventing further downstream delays.",
          "Creates a data-backed foundation for performance conversations, as patterns of missed alerts can be discussed in reviews.",
          "Informs process improvement by identifying which rules trigger the most alerts, highlighting the most common and costly workflow failures.",
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
    "document-analytics": "powerbi-dashboard",
    "powerbi-dashboard": "jupyter-analysis",
    "jupyter-analysis": "document-analytics",
  };

  const otherProjectId = projectMap[projectId];
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
        <p
          className="text-lg text-muted-foreground leading-relaxed max-w-3xl animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {project.intro}
        </p>
      </section>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
        <section>
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Project visual ${i + 1}`}
              className="my-6 rounded-lg border border-border"
            />
          ))}
        </section>
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
      {/* Footer */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground transition-colors">
          ← Back to Portfolio
        </Link>
      </footer>
    </div>
  );
}
