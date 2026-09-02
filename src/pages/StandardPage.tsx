import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { documentManagementStandard as std } from "@/data/standard";
import StandardDiagram from "@/components/diagrams/StandardDiagram";

export default function StandardPage() {
  return (
    <div>
      {/* Dark -- hero, same treatment as Architecture and Research. */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="section-label mb-4 animate-fade-in">
          Standard
          {/* · Version {std.version} */}
        </p>
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
          className="text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {std.positioningStatement}
        </p>
      </section>

      {/* Dark -- scale as one line rather than a four-cell stat board. The
          figures still register the weight; they no longer claim a section. */}
      <section className="max-w-5xl mx-auto px-6 pb-16 mt-10">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground border-t border-border pt-4">
          {std.scale.map((s) => `${s.figure} ${s.label}`).join("  ·  ")}
        </p>
      </section>

      {/* Light -- what it does, then what it does not. The boundary only
          reads as confidence when it sits next to the claim. */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <p className="section-label mb-3">What It Does</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 max-w-2xl">
            Three things an in-house procedure does not
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

      {/* Dark -- placed after the claim and the boundary so the "226 checks"
          bar reads as a payoff rather than a bare number. Generous vertical
          room keeps it a distinct moment even though Conformance follows in
          the same dark scope. Large screens only. */}
      <section className="hidden lg:flex items-center justify-center px-6 py-24">
        <div className="max-w-6xl w-full mx-auto">
          <StandardDiagram />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <p className="section-label mb-3">Conformance</p>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 max-w-2xl">
          Two levels, and what each one lets you claim
        </h2>
        <ul className="divide-y divide-border border-y border-border">
          {std.conformanceLevels.map((lvl) => (
            <li
              key={lvl.name}
              className="flex flex-col md:flex-row gap-2 md:gap-8 py-4"
            >
              <div className="md:w-56 shrink-0">
                <p className="font-serif text-lg text-foreground">{lvl.name}</p>
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-accent">
                  {lvl.parts}
                </p>
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed">
                {lvl.establishes}
                {lvl.silentOn && (
                  <span className="text-muted-foreground">
                    {" "}
                    Says nothing about {lvl.silentOn.charAt(0).toLowerCase()}
                    {lvl.silentOn.slice(1)}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Light -- the parts an organization actually picks up and uses, framed
          as instruments rather than as an annex listing. */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <p className="section-label mb-3">The Instruments</p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8 max-w-2xl">
            What an organization picks up and uses
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {std.annexes.slice(0, 4).map((a) => (
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
          <p className="section-label mb-3">Where It Sits</p>
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
