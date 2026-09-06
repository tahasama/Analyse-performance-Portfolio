import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { horizon } from "@/data/views";
import { dciomArchitecture } from "@/data/architecture";
import PillarGrid from "@/components/diagrams/PillarGrid";
import HandshakeList from "@/components/diagrams/HandshakeList";
import PrincipleGrid from "@/components/diagrams/PrincipleGrid";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";
import DocumentReader from "@/components/project/DocumentReader";
import { dciomReaderPages } from "@/data/dciomReader";

export default function ArchitecturePage() {
  const {
    fullName,
    positioningStatement,
    pillars,
    handshakes,
    principles,
    standardMeta,
    standardThemes,
  } = dciomArchitecture;

  return (
    <div>
      {/* DCIOM is the unmistakable hero of this page -- named and defined
          first, at full hero scale, so HORIZON and the architecture that
          follow read as parts of a named framework, not a build-up to it.
          "Behind The Work" rides as a compact kicker above it, same section,
          so it doesn't stack a second section's padding on top of the hero. */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-28">
        <p className="section-label mb-4 animate-fade-in">DCIOM</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-foreground mb-6 leading-[1.1] max-w-5xl animate-fade-up">
          {fullName}
        </h1>
        <p
          className="font-serif italic text-lg md:text-xl text-foreground/80 max-w-2xl mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          "How the six systems fit together."
        </p>
        <p
          className="text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {positioningStatement}
        </p>
        <p className="text-sm text-muted-foreground mt-4 animate-fade-up">
          Not an industry standard, not certified, not externally adopted.
        </p>
      </section>

      {/* Dark -- the framework's shape as one line, the same treatment the
          Standard page gives its own figures. Counts come from §1.6: three
          pillars define scope, six components and three handshakes define
          operation, six principles govern behaviour. */}
      <section className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground border-t border-border pt-4">
          {[
            `${pillars.length} Pillars`,
            `${handshakes.length} Handshakes`,
            `${principles.length} Principles`,
            "6 Components",
          ].join("  ·  ")}
        </p>
      </section>

      {/* From here down the page rolls dark/light/dark/light, same rhythm
          as Home -- not one hard dark-then-light split. */}

      {/* Light -- HORIZON, the architecture introduction and the standard
          sample. */}
      <div className="theme-editorial bg-background text-foreground mt-4">
        {/* The timeline is a thin band of content, so its padding is kept
            tighter than a text section's -- and the nodes are sized up to
            carry the width they're given rather than floating in it. */}
        <section className="max-w-5xl mx-auto px-6 pt-14 pb-14 border-t border-border">
          <p className="section-label mb-1">{horizon.name}</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
            {horizon.subtitle}
          </h2>
          <div className="relative flex items-start">
            <div
              className="absolute left-0 right-0 top-5 h-px bg-border"
              aria-hidden="true"
            />
            {horizon.stages.map((stage, i) => (
              <div
                key={stage.id}
                className="relative z-10 flex-1 flex flex-col items-center text-center px-1"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background font-mono text-sm font-semibold text-accent mb-3">
                  {i + 1}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wide text-muted-foreground leading-snug">
                  {stage.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16 border-t border-border pt-16">
          <p className="section-label mb-3">The Architecture</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Designed as a governed system, not six dashboards
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Three pillars define what's governed. Three handshakes connect them.
            Six principles set how the system behaves. And a version-controlled
            internal standard specifies all of it formally, rather than leaving
            it as an informal set of habits.
          </p>
          <p className="callout text-sm text-foreground/85 max-w-2xl">
            <span className="font-semibold text-foreground">
              What's shown here vs. what stays controlled.
            </span>{" "}
            This page shows what was designed and why: the pillars, the
            handshakes, the governing principles, and the existence and
            structure of the formal standard. The exact metric formulas, Health
            Score weighting, thresholds, routing and escalation logic, and
            simulation mechanics stay in the controlled specification.
          </p>
        </section>

        <section
          className="max-w-5xl mx-auto px-6 pb-16"
          aria-label="DCIOM Framework Standard sample"
        >
          <div className="mb-8">
            <h3 className="font-serif text-xl text-foreground mb-1">
              DCIOM Framework Standard Sample
            </h3>
            <p className="text-sm text-muted-foreground">
              5 page sample from Authority &amp; Purpose and System Foundations
            </p>
          </div>
          <DocumentReader
            title="DCIOM Framework Standard · Authority, Purpose & System Foundations"
            pages={dciomReaderPages}
          />
        </section>
      </div>

      {/* Dark -- the spatial diagram. */}
      <section className="hidden lg:flex items-center justify-center min-h-screen px-6 py-8">
        <div className="max-w-[90rem] w-full mx-auto">
          <div
            className="w-full mx-auto"
            style={{ maxWidth: "min(100%, calc(91vh * 1640 / 950))" }}
          >
            <p className="section-label mb-4 pl-[2.44%]">
              Framework Architecture
            </p>
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* Light -- Three Pillars, Three Handshakes */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <p className="section-label mb-3">Three Pillars</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            What the architecture governs, and what it doesn't
          </h2>
          <PillarGrid pillars={pillars} />
        </section>

        <section className="max-w-5xl mx-auto px-6 pt-12 pb-16 border-t border-border">
          <p className="section-label mb-3">Three Handshakes</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
            Where the pillars formally connect
          </h2>
          <HandshakeList handshakes={handshakes} />
        </section>
      </div>

      {/* Dark -- Six Principles, continuing the roll */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="section-label mb-3">Six Principles</p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
          The rules the system operates on
        </h2>
        <PrincipleGrid principles={principles} />
      </section>

      {/* Light -- Formal Specification and the closing statement */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-6 pb-16 pt-16">
          <p className="section-label mb-3">Formal Specification</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            DCIOM Framework Standard
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
            The architecture is formally specified as a version-controlled
            internal standard. It defines the framework's authority, governance
            model, six instruments, performance model, data architecture,
            thresholds and enforcement. Detailed implementation rules are
            intentionally not published on this portfolio.
          </p>

          <div className="relative w-full max-w-xs mb-10" aria-hidden="true">
            <div className="absolute inset-0 translate-x-2 translate-y-2 border border-border bg-card" />
            <div className="absolute inset-0 translate-x-1 translate-y-1 border border-border bg-card" />
            <div className="relative border border-border bg-card px-6 py-8">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-accent mb-6">
                DCIOM
              </p>
              <p className="font-serif text-2xl text-foreground mb-2">
                Framework Standard
              </p>
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                Version {standardMeta.version} · Controlled Specification
              </p>
            </div>
          </div>

          <ul className="divide-y divide-border border-y border-border mb-4">
            {standardThemes.map((theme, i) => (
              <li key={theme.label} className="flex gap-4 py-4">
                <span className="shrink-0 pt-0.5 font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-base font-medium text-foreground mb-1">
                    {theme.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {theme.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Structure shown as evidence of formal specification. Implementation
            detail remains controlled.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-24 border-t border-border pt-10">
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed max-w-2xl mb-6">
            The six systems are the visible products. DCIOM is the architecture
            that makes them one governed system.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-4">
            DCIOM measures from the register. What the register has to contain,
            and what makes it trustworthy, is specified separately in the
            Document Management Standard.
          </p>
          <Link
            to="/standard"
            className="text-sm font-medium text-accent hover:underline hover:underline-offset-2 inline-flex items-center gap-1.5"
          >
            Read the standard <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
