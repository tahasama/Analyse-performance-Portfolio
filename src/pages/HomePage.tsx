import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  COMPONENT_NUMBER,
  projects,
  type ProjectContent,
} from "@/data/projects";
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

// The three authored bodies of work, as homepage entrances. Figures are the
// real counts from each data file, not claims -- they are what makes each
// entry legible before the click.
const portfolioIndex = [
  {
    to: "/architecture",
    kind: "Independent architecture",
    title: "DCIOM",
    subtitle: "Document Control Intelligence & Operations Management",
    body: "The performance-governance framework the six systems implement. It defines what is governed, where the pillars formally connect, and the rules the whole system operates on.",
    facts: ["3 pillars", "3 handshakes", "6 principles"],
  },
  {
    to: "/standard",
    kind: "Independent standard",
    title: "Document Management Standard",
    subtitle: "Version 0.9",
    body: "Requirements for identifying, describing, controlling, issuing and retaining project information. It states what controlled information must satisfy, and leaves each organization to publish its own code lists.",
    facts: ["18 parts", "140 clauses", "226 checks"],
  },
  {
    to: "/research",
    kind: "Independent research",
    title: "DBoK",
    subtitle: "Documentation Body of Knowledge",
    body: "The architectural map of the documentation profession: how the disciplines relate, where each sits, and when to reach for one over another. Both the architecture and the standard are drawn from it.",
    facts: ["12 chapters", "8 knowledge types", "5 patterns"],
  },
];

/** Homepage entrance to one of the three authored bodies of work. */
function IndexCard({ item }: { item: (typeof portfolioIndex)[number] }) {
  return (
    <Link
      to={item.to}
      className="group flex h-full flex-col border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg"
    >
      <p className="section-label mb-3">{item.kind}</p>
      <h3 className="font-serif text-2xl text-foreground mb-1 group-hover:text-accent transition-colors">
        {item.title}
      </h3>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground mb-4">
        {item.subtitle}
      </p>
      <p className="text-[0.92rem] leading-relaxed text-foreground/80 mb-6 max-w-2xl">
        {item.body}
      </p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          {item.facts.map((f) => (
            <span
              key={f}
              className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground"
            >
              {f}
            </span>
          ))}
        </span>
        <span className="text-xs italic text-accent flex items-center gap-1.5 group-hover:underline group-hover:underline-offset-2">
          Explore <ArrowRight className="h-2.5 w-2.5" />
        </span>
      </div>
    </Link>
  );
}

/** Cadence verb for the layer-tag -- first segment of "OBSERVATION · Weekly". */
function cadenceVerb(label: string) {
  const [verb] = label.split(" · ");
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
          {project.status === "live" ? "Live · In Use" : "Deployment Ready"}
        </span>
      </div>
      <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-[0.92rem] leading-relaxed text-foreground/80 mb-6">
        {project.roleOneLiner}
      </p>
      <span className="text-xs italic text-accent absolute bottom-5 flex items-center gap-1.5 group-hover:underline-offset-2 group-hover:underline">
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
        <span className="font-mono text-[0.78rem] tracking-[0.05em] text-accent">
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

      {/* Sized to match FileCard's optical weight -- the serif/sans split is
          the intended difference between the two card types, a quieter,
          smaller card is not. */}
      <h3 className="display-systems text-[1.25rem] text-foreground mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-[0.92rem] leading-relaxed text-foreground/80 mb-7">
        {project.roleOneLiner}
      </p>
      <div className="absolute bottom-0 flex justify-between items-center w-5/6">
        <span className="flex w-fit font-mono text-[0.55rem] uppercase tracking-[0.05em] text-foreground/75 gap-1.5  border border-muted-foreground/35 px-2 py-1 group-hover:shadow-sm group-hover:shadow-accent/40 transition-shadow duration-300 items-center">
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
      <header className="pt-20 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-label mb-4 animate-fade-in">
            Portfolio · Document Control
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-foreground mb-6 leading-[1.1] max-w-3xl animate-fade-up">
            Performance Systems, Standards &amp; Knowledge
          </h1>
          <p
            className="font-serif italic text-lg md:text-xl text-foreground/80 max-w-2xl mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            &ldquo;I design performance systems, and develop standards and
            structured knowledge for documentation practice.&rdquo;
          </p>
          {/* Names the three authored bodies in the same order as the index
              further down the page, so the hero previews the page rather than
              describing the practitioner -- that stays on Experience. */}
          <p
            className="text-muted-foreground max-w-2xl leading-relaxed mb-32 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Applied performance systems, and independent work in performance
            governance, document management, and professional research.
          </p>

          <div
            className="border-t border-border pt-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* The strip used to appear with no introduction. It needs to say
                what the six are and why they are a sequence before showing
                them, or the arrows mean nothing. */}
            <p className="section-label mb-3">The Applied Work</p>
            <p className="text-foreground/80 leading-relaxed max-w-2xl mb-8">
              Six Power BI systems over the same document set, each answering
              the question the one before it raises: observe, measure, diagnose,
              act, project, verify.
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

      {/* Light -- the rest of the portfolio. The six systems above are the
          applied work; these are the three authored bodies behind them.
          Architecture and Standard sit side by side because they are
          siblings (each is a framework with its own implementation);
          Research spans both because it underpins them. */}
      <section className="theme-editorial bg-background text-foreground border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="section-label mb-3">Behind The Systems</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12 max-w-2xl">
            Three independently authored bodies of work
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {portfolioIndex.slice(0, 2).map((item) => (
              <IndexCard key={item.to} item={item} />
            ))}
          </div>
          <IndexCard item={portfolioIndex[2]} />
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

          {/* The index above already links all three bodies of work, so this
              closes rather than repeating them. */}
          <div className="border-t border-border pt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <p className="font-serif text-xl text-foreground leading-relaxed max-w-xl">
              All of it started as a gap in day-to-day document control work,
              and was built to close it.
            </p>
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
