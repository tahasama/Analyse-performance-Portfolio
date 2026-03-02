import { Link, ScrollRestoration } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const projects = [
  {
    id: "powerbi-dashboard",
    label: "Power BI Dashboard",
    title: "Document Status & Workflow Monitoring",
    description:
      "Dual dashboard tracking document status, review progress, and workflow ownership across disciplines for both engineering and supplier contexts.",
    insights: [
      "Provides a unified view of KPIs, status distribution, and workflow ownership for immediate situational awareness.",
      "Enables direct follow-up on overdue, pending, and critical documents by assigning clear ownership.",
    ],
    layers: ["Reporting", "Performance"],
  },
  {
    id: "document-analytics",
    label: "React.js Web App",
    title: "Document Lifecycle & Timeline Analysis",
    description:
      "Lifecycle analysis of supplier documents from submission to approval statuses, centered on timeline visualization, flow tracking, delay understanding.",
    insights: [
      "Timeline per document shows full lifecycle from planned to final",
      "Combines flow, status, and review data to diagnose bottlenecks and delay causes",
    ],
    layers: ["Document Intelligence", "Reporting", "Performance"],
  },
  {
    id: "jupyter-analysis",
    label: "Jupyter Notebook (Python)",
    title: "Document Flow & Delay Intelligence",
    description:
      "Analytical model that breaks down document cycle time to understand how workflow stages contribute to overall delays.",
    insights: [
      "Quantifies the delay contribution of each workflow stage (submission, review, etc.) to pinpoint primary bottlenecks.",
      "Establishes a statistical framework for moving from reactive reporting to proactive risk flagging.",
    ],
    layers: ["Performance", "Advisory"],
  },
];

const layerColors: Record<string, string> = {
  "Document Intelligence": "bg-layer-doc/15 text-layer-doc",
  Reporting: "bg-layer-report/15 text-layer-report",
  Performance: "bg-layer-perf/15 text-accent-foreground",
  Advisory: "bg-layer-advisory/15 text-layer-advisory",
};

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <Link
    to={`/project/${project.id}`}
    className="group block bg-card rounded-lg border border-border p-8 hover:shadow-lg hover:border-accent/40 transition-all duration-300"
  >
    <p className="section-label mb-3">{project.label}</p>
    <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground leading-relaxed mb-6">
      {project.description}
    </p>

    <div className="space-y-2 mb-6">
      {project.insights.map((insight, i) => (
        <div
          key={i}
          className="flex items-start gap-2 text-sm text-foreground/80"
        >
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
          <span>{insight}</span>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap gap-2 mb-6 project-layers">
      {project.layers.map((layer) => (
        <span key={layer} className={`layer-badge ${layerColors[layer] || ""}`}>
          {layer}
        </span>
      ))}
    </div>

    <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
      View Full Analysis <ArrowRight className="h-4 w-4" />
    </span>
  </Link>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-gradient)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60 mb-4 animate-fade-in">
            Portfolio
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-6 animate-fade-up">
            Reporting &amp; Performance Analyst
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Specialized in analyzing and improving document-driven workflows
            through reporting and performance insights.
          </p>
        </div>
      </header>

      {/* Progression Bar */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            {[
              "Document Intelligence",
              "Reporting",
              "Performance",
              "Advisory",
            ].map((stage, i) => (
              <div key={stage} className="flex items-center">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {stage}
                  </span>
                </div>
                {i < 3 && (
                  <ArrowRight className="hidden sm:block h-4 w-4 text-muted-foreground mx-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Core Projects</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Selected Work
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Each project follows a consistent analytical framework — from
          understanding document workflows to extracting performance insights
          and recommending improvements.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="section-label mb-3">Capabilities</p>
          <h2 className="font-serif text-3xl text-foreground mb-12">
            Skills &amp; Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Data Analysis",
                items: [
                  "Data structuring & cleansing",
                  "Trend identification",
                  "Root cause analysis",
                  "Statistical reasoning",
                ],
              },
              {
                title: "Reporting",
                items: [
                  "Dashboard design",
                  "KPI frameworks",
                  "Automated reporting",
                  "Stakeholder communication",
                ],
              },
              {
                title: "Performance Monitoring",
                items: [
                  "Delay analysis",
                  "Throughput tracking",
                  "Bottleneck detection",
                  "SLA compliance",
                ],
              },
              {
                title: "Tools",
                items: ["Power BI", "React / TypeScript", "Excel / VBA", "SQL"],
              },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="font-serif text-lg text-foreground mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p>
          Reporting &amp; Performance Analytics Portfolio •{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
