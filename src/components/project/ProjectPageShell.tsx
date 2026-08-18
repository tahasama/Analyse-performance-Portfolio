import { projects, type ProjectContent } from "@/data/projects";
import { projectStatusLabels } from "@/lib/statusColors";
import EvidenceGallery from "./EvidenceGallery";
import NextProjectNav from "./NextProjectNav";
import SystemLine from "./SystemLine";
import Breadcrumb from "./Breadcrumb";
import { cn } from "@/lib/utils";

// Diagnostic-shaped products (findings/quarter-comparison) read as one
// continuous situation rather than two separate Problem/Built beats.
const DIAGNOSTIC_KINDS = new Set(["findings-advisory", "quarter-comparison"]);

export default function ProjectPageShell({ project }: { project: ProjectContent }) {
  const isReporting = project.group === "reporting";
  const componentNumber = projects.findIndex((p) => p.id === project.id) + 1;
  const isDiagnostic = DIAGNOSTIC_KINDS.has(project.visual.kind);

  const problemBlock = (
    <div>
      <p className="section-label mb-2">The Problem</p>
      <p className="text-lg text-muted-foreground leading-relaxed">{project.theProblem}</p>
    </div>
  );

  const builtBlock = (
    <div>
      <p className="section-label mb-2">What I Built</p>
      <p className="text-lg text-foreground/90 leading-relaxed">{project.whatIBuilt}</p>
    </div>
  );

  const situationBlock = (
    <div className="space-y-4">
      <p className="section-label mb-2">The Situation</p>
      <p className="text-lg text-muted-foreground leading-relaxed">{project.theProblem}</p>
      <p className="text-lg text-foreground/90 leading-relaxed">{project.whatIBuilt}</p>
    </div>
  );

  const deliversBlock = (
    <div>
      <p className="section-label mb-3">What It Delivers</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {project.whatItDelivers.map((item, i) => (
          <div key={i} className="border border-border bg-card p-4 text-sm text-foreground/85 leading-relaxed">
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {/* Dark first: title, status, the situation -- same dark-then-light
          pattern as Architecture, Research, and Home. */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Breadcrumb project={project} />
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-6 pt-12 pb-10">
        <p className="section-label mb-3">
          C{componentNumber} · {project.typeCadenceLabel}
        </p>
        <h1
          className={cn(
            "text-3xl md:text-5xl text-foreground mb-5 animate-fade-up",
            isReporting ? "display-editorial" : "display-systems",
          )}
        >
          {project.title}
        </h1>
        {/* Dark hero uses the dark theme's own accent regardless of group --
            the reporting group's red stamp only belongs on its light pages. */}
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-[3px] px-2.5 py-1 font-mono text-xs uppercase tracking-[0.04em]",
            project.status === "live"
              ? "bg-status-healthy/[0.12] text-status-healthy"
              : "bg-muted-foreground/[0.14] text-muted-foreground",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {projectStatusLabels[project.status]}
        </span>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16 space-y-10">
        {isDiagnostic ? (
          situationBlock
        ) : (
          <>
            {problemBlock}
            {builtBlock}
          </>
        )}
      </section>

      {/* Light for the rest: what it delivers, the real evidence, why it
          matters, and where it sits in the system. */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-16">{deliversBlock}</section>

        <section className="max-w-4xl mx-auto px-6 pb-16 pt-6">
          <EvidenceGallery images={project.images} artifactName={project.artifactName} />
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-16 border-t border-border pt-12">
          <p className="section-label mb-3">Why It Matters</p>
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">{project.whyItMatters}</p>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-8">
          <p className="section-label mb-3">The Full System</p>
          <SystemLine currentId={project.id} />
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-20">
          <NextProjectNav currentId={project.id} />
        </section>
      </div>
    </div>
  );
}
