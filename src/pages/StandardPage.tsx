import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { documentManagementStandard as std } from "@/data/standard";
import { standardAutomationEvidence } from "@/data/evidence";
import StandardDiagram from "@/components/diagrams/StandardDiagram";
import DocumentReader from "@/components/project/DocumentReader";
import EvidenceGallery from "@/components/project/EvidenceGallery";
import { standardReaderPages } from "@/data/standardReader";

// Six alternating bands, matching the Architecture page's rhythm: no band runs
// much past one screen, and the diagram gets its own dark moment between the
// section that names the three layers and the claim that follows.
export default function StandardPage() {
  return (
    <div>
      {/* Dark -- hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-16">
        {/* No version here: DCIOM and DBoK carry none either, and versioning
            one product only would read as inconsistent. */}
        <p className="section-label mb-4 animate-fade-in">Standard</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-foreground mb-6 leading-[1.1] max-w-3xl animate-fade-up">
          {std.name}
        </h1>
        <p
          className="font-serif italic text-lg md:text-xl text-foreground/80 max-w-2xl mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          &ldquo;{std.subtitle}.&rdquo;
        </p>
        <p
          className="text-muted-foreground max-w-2xl leading-relaxed animate-fade-up whitespace-pre-line"
          style={{ animationDelay: "0.15s" }}
        >
          {std.positioningStatement}
        </p>
        <p className="text-sm text-muted-foreground mt-4 animate-fade-up">
          Not an industry standard, not certified, not externally adopted.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 mt-16">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground border-t border-border pt-4">
          {std.scale.map((s) => `${s.figure} ${s.label}`).join("  ·  ")}
        </p>
      </section>

      {/* Light -- the three layers, named. The diagram below draws them. */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-16">
          <p className="section-label mb-3">How It Is Built</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3 max-w-2xl">
            Rules, routes and checks, tied together by traceability
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Every normative Rule links to at least one Check, applicable Routes
            show where recurring work uses it, and the organization&rsquo;s
            configuration supplies local values. The Traceability Spine keeps
            those elements synchronized, making conformance testable.
          </p>
          <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
            {std.layers.map((l, i) => (
              <div key={l.name} className="bg-background p-6">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent mb-2">
                  Layer {["I", "II", "III"][i]}
                </p>
                <p className="font-serif text-xl text-foreground mb-2">
                  {l.name}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {l.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="mb-8">
              <h3 className="font-serif text-xl text-foreground mb-1">
                Document Management Standard Sample
              </h3>
              <p className="text-sm text-muted-foreground">
                5 page sample from Part 1 Scope, Accountability and Conformance
              </p>
            </div>
            <DocumentReader
              title="Document Management Standard · Part 1"
              pages={standardReaderPages}
            />
          </div>
        </section>
      </div>

      {/* Dark -- the diagram as its own moment, the way the Architecture page
          treats its own. Desktop and phone landscape show the full diagram. */}
      <section className="px-6 py-10 lg:px-4 lg:py-20">
        <div className="mobile-diagram-prompt mx-auto max-w-sm items-center justify-center gap-3 border-y border-border py-5 text-center">
          <span
            className="shrink-0 font-mono text-2xl leading-none text-accent"
            aria-hidden="true"
          >
            ↻
          </span>
          <div>
            <p className="diagram-label mb-1">Standard Composition</p>
            <p className="text-sm text-muted-foreground">
              Turn your phone sideways to view it.
            </p>
          </div>
        </div>
        <div className="responsive-diagram mx-auto w-full max-w-[86rem] items-center justify-center">
          <div className="standard-diagram-frame mx-auto w-full">
            <p className="diagram-label mb-4 pl-[3.34%]">
              Standard Composition
            </p>
            <StandardDiagram />
          </div>
        </div>
      </section>

      {/* Light -- the claim, then the boundary. */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <p className="section-label mb-3">What It Does</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 max-w-2xl">
            What makes the Standard executable
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {std.strengths.map((s) => (
              <div key={s.title}>
                <p className="font-serif text-lg text-foreground mb-2">
                  {s.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pt-12 pb-16 border-t border-border">
          <p className="section-label mb-3">Deliberate Boundaries</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 max-w-2xl">
            What it does not do
          </h2>
          <ul className="space-y-3 max-w-3xl">
            {std.excludes.map((x, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed"
              >
                <span
                  className="mt-2 h-1 w-1 rounded-full bg-accent/60 shrink-0"
                  aria-hidden="true"
                />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Dark -- how conformance is checked, then what adoption asserts. */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Automation</p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 max-w-2xl">
          How checks become results
        </h2>

        <div className="grid md:grid-cols-[minmax(0,1fr)_18rem] gap-8 md:gap-10 items-start mt-8">
          <div className="max-w-2xl">
            <p className="text-base text-foreground/90 leading-relaxed">
              Checks use reported input, register and reporting data, or that
              data evaluated against approved organization or project
              configuration. Each check produces a result, with every exception
              traceable to the affected record and its cause.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              The Standard defines the universal conformance requirements while
              each organization defines its own sets, values and local rules.
              Those choices may vary, but they cannot contradict its clauses.
              The examples show this model implemented in Excel and Power BI.
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.2fr)_auto_minmax(0,0.8fr)_auto_minmax(0,1fr)] items-center gap-2 border-y border-border py-4 mt-7"
              role="img"
              aria-label="Register and reporting data plus organization and project configuration lead to automated checks, which produce results and exceptions"
            >
              {[
                "Register and reporting data",
                "Organization and project configuration",
                "Automated checks",
                "Results and exceptions",
              ].map((label, index) => (
                <div key={label} className="contents">
                  {index === 1 && (
                    <span
                      className="font-mono text-sm text-accent text-center"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  )}
                  {index > 1 && (
                    <ArrowRight
                      className="h-3.5 w-3.5 text-accent mx-auto rotate-90 md:rotate-0"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`border px-2 py-2 text-center font-mono text-[0.58rem] uppercase tracking-[0.06em] leading-relaxed ${
                      index === 2
                        ? "border-status-healthy/50 bg-status-healthy/[0.06] text-status-healthy"
                        : "border-border text-foreground/85"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:-mt-8">
            <EvidenceGallery
              images={standardAutomationEvidence}
              artifactName="Standard Checks"
              compact
            />
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-12">
          <p className="section-label mb-3">Conformance</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3 max-w-2xl">
            Two levels, and what each one lets you claim
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
            An organization adopts the Standard at one of two levels: Core for
            identity and control, or Full for the complete set of requirements.
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {std.conformanceLevels.map((lvl) => (
              <li
                key={lvl.name}
                className="flex flex-col md:flex-row gap-3 md:gap-10 py-8"
              >
                <div className="md:w-64 shrink-0">
                  <p className="font-serif text-2xl text-foreground mb-1">
                    {lvl.name}
                  </p>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-accent">
                    {lvl.parts}
                  </p>
                </div>
                <div>
                  <p className="text-base text-foreground/90 leading-relaxed">
                    {lvl.establishes}
                  </p>
                  {lvl.silentOn && (
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      <span className="font-medium text-foreground/70">
                        Says nothing about:
                      </span>{" "}
                      {lvl.silentOn.charAt(0).toLowerCase()}
                      {lvl.silentOn.slice(1)}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Light -- what an organization picks up, and where this sits. */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <p className="section-label mb-3">The Instruments</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 max-w-2xl">
            What an organization picks up and uses
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {std.featuredInstruments.map((a) => (
              <div key={a.letter} className="border border-border bg-card p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-sm text-accent">
                    {a.letter}
                  </span>
                  <p className="font-serif text-lg text-foreground">
                    {a.title}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {a.purpose}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Named, not described. DBoK and DCIOM are what a reader should
            leave remembering. */}
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-24 border-t border-border">
          <h2 className="section-label mb-3">Where It Sits</h2>
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed max-w-2xl mb-6">
            <span className="text-accent">DBoK</span> maps the profession. This
            Standard states what controlled information must satisfy.{" "}
            <span className="text-accent">DCIOM</span> measures whether it does.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
            DCIOM calculates from register data. These requirements are what
            make that data exist.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/research"
              className="text-sm font-medium text-accent hover:underline hover:underline-offset-2 inline-flex items-center gap-1.5"
            >
              DBoK <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/architecture"
              className="text-sm font-medium text-accent hover:underline hover:underline-offset-2 inline-flex items-center gap-1.5"
            >
              DCIOM <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
