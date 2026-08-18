import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COMPONENT_NUMBER, projects, type ProjectContent } from "@/data/projects";
import { experience } from "@/data/experience";
import SystemLine from "@/components/project/SystemLine";
import { cn } from "@/lib/utils";

const reportingProjects = projects.filter((p) => p.group === "reporting");
const decisionProjects = projects.filter((p) => p.group === "decision");

const capabilitiesIndex = [
  {
    title: "Analytical Thinking",
    items:
      "Root cause analysis, bottleneck identification, performance analysis",
  },
  {
    title: "Framework Design",
    items: "Information framework design, KPI frameworks, workflow structuring",
  },
  {
    title: "Decision Support",
    items: "Information governance, performance reporting, corrective action",
  },
  { title: "Tools", items: "Power BI, SQL, Excel" },
];

/** Cadence verb for the layer-tag -- first segment of "OBSERVATION — Weekly". */
function cadenceVerb(label: string) {
  const [verb] = label.split(" — ");
  return verb.charAt(0) + verb.slice(1).toLowerCase();
}

// Decorative sparkline patterns for dash-cards -- not tied to real data (the
// reference mockup marks its spark bars aria-hidden), just enough variation
// so the three decision cards don't look like clones.
const sparkPatterns = [
  [40, 55, 35, 70, 50, 85],
  [60, 45, 65, 40, 75, 90],
  [30, 50, 42, 58, 38, 66],
];

/** Reporting-group card -- Direction A "file-card": tab, stamp, paper surface. */
function FileCard({ project }: { project: ProjectContent }) {
  const num = COMPONENT_NUMBER[project.id];
  return (
    <Link
      to={`/project/${project.id}`}
      className="group relative block bg-card border border-border pt-8 pb-6 px-6 transition-shadow duration-300 hover:shadow-lg"
    >
      <span className="absolute -top-[0.95rem] left-6 bg-foreground text-background font-mono text-[0.68rem] tracking-[0.08em] px-2.5 py-1">
        C{num}
      </span>
      <div className="flex justify-between">
        <span className="block font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">
          {cadenceVerb(project.typeCadenceLabel)}
        </span>
        <span className="inline-flex items-center font-mono text-[0.66rem] uppercase tracking-[0.1em] text-accent border-[1.5px] border-accent px-2.5 py-1.5 -rotate-[4deg] relative -top-3 left-2.5">
          {project.status === "live" ? "Live — In Use" : "Deployment Ready"}
        </span>
      </div>
      <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-[0.92rem] leading-relaxed text-foreground/80 mb-6">
        {project.roleOneLiner}
      </p>
      <span className="text-xs italic text-accent/70 absolute bottom-5 flex items-center gap-1.5 group-hover:underline-offset-2 group-hover:underline">
        See details <ArrowRight className="h-2.5 w-2.5" />
      </span>
    </Link>
  );
}

/** Decision-group card -- Direction B "dash-card": dash-code, pill, sparkline, layer-tag. */
function DashCard({
  project,
  index,
}: {
  project: ProjectContent;
  index: number;
}) {
  const num = COMPONENT_NUMBER[project.id];
  const spark = sparkPatterns[index % sparkPatterns.length];
  const isLive = project.status === "live";

  return (
    <Link
      to={`/project/${project.id}`}
      className="group relative block bg-card border border-border p-6 transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="font-mono text-[0.72rem] tracking-[0.05em] text-accent">
          C{num} · {cadenceVerb(project.typeCadenceLabel)}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-[3px] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.04em]",
            isLive
              ? "bg-status-healthy/[0.12] text-status-healthy"
              : "bg-muted-foreground/[0.14] text-muted-foreground",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {isLive ? "Live" : "Ready"}
        </span>
      </div>

      <h3 className="display-systems text-[1.08rem] text-foreground mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-[0.86rem] leading-relaxed text-muted-foreground mb-7">
        {project.roleOneLiner}
      </p>
      <div className="absolute bottom-0 flex justify-between items-center w-5/6">
        <span className="flex w-fit font-mono text-[0.55rem] uppercase tracking-[0.05em] text-muted-foreground border border-border px-2 py-1 group-hover:shadow-sm group-hover:shadow-accent/40 transition-shadow duration-300">
          See details <ArrowRight className="h-2.5 w-2.5" />
        </span>
        <span
          className="flex items-end gap-[3px] h-7 mb-4 group"
          aria-hidden="true"
        >
          {spark.map((h, i) => (
            <i
              key={i}
              className={cn(
                "block w-[5px] bg-accent transition-all duration-300",
                i === spark.length - 1 ? "opacity-100" : "opacity-55",
                "group-hover:opacity-100 group-hover:scale-y-[1.4] group-hover:origin-bottom",
              )}
              style={{
                height: `${h}%`,
                transitionDelay: `${i * 50}ms`, // staggered effect
              }}
            />
          ))}
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Dark intro */}
      <header className="pt-20 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-label mb-4 animate-fade-in">
            Portfolio — Document Control
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-[1.1] max-w-3xl animate-fade-up">
            Performance Systems for Document Control
          </h1>
          <p
            className="font-serif italic text-lg md:text-xl text-foreground/80 max-w-2xl mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            &ldquo;I design performance systems for Document Control.&rdquo;
          </p>
          <p
            className="text-muted-foreground max-w-2xl leading-relaxed mb-16 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {experience.positioningStatement}
          </p>

          <div
            className="border-t border-border pt-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="section-label mb-5">
              That work breaks down into six systems, one performance flow
            </p>
            <div className="flex justify-center items-center">
              <SystemLine />
            </div>
          </div>
        </div>
      </header>

      {/* Light band -- Reporting (C1-C3) */}
      <section className="mode-reporting bg-background text-foreground border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="section-label mb-3">Reporting</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 max-w-2xl">
            Turning raw activity into a shared, measured picture
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
            Three systems that observe current state, measure performance, and
            diagnose what&rsquo;s driving it.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-4">
            {reportingProjects.map((p) => (
              <FileCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Dark band -- Decision (C4-C6) */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="section-label mb-3">Decision</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 max-w-2xl">
            Turning diagnosis into evaluated action
          </h2>
          <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
            Three systems that judge quarter-over-quarter movement, model
            trajectory, and verify commitments actually held.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {decisionProjects.map((p, i) => (
              <DashCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Light outro -- editorial */}
      <section className="theme-editorial bg-background text-foreground border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground mb-8">
            Capabilities Index
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mb-16">
            {capabilitiesIndex.map((group) => (
              <div key={group.title}>
                <span className="block font-serif text-[0.95rem] text-foreground mb-2">
                  {group.title}
                </span>
                <span className="block text-[0.8rem] text-muted-foreground leading-relaxed">
                  {group.items}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div className="max-w-xl">
              <p className="font-serif text-xl text-foreground leading-relaxed mb-3">
                Behind these six systems is a broader architecture — and a
                research reference mapping the wider documentation profession.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  to="/architecture"
                  className="text-sm font-medium text-accent hover:underline hover:underline-offset-2 inline-flex items-center gap-1.5"
                >
                  See the architecture <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/research"
                  className="text-sm font-medium text-accent hover:underline hover:underline-offset-2 inline-flex items-center gap-1.5"
                >
                  Read the research <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
            <Link
              to="/experience#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors shrink-0"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
