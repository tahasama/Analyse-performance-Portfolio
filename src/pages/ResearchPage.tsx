import { dbok } from "@/data/research";
import DbokDiagram from "@/components/diagrams/DbokDiagram";

const chapter0 = dbok.chapters.find((c) => c.number === "0")!;

export default function ResearchPage() {
  return (
    <div>
      {/* Dark -- hero, same treatment as Home/Architecture: eyebrow, large
          h1, italic one-line quote, supporting paragraph. */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <p className="section-label mb-4 animate-fade-in">Research</p>
        <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-[1.1] max-w-3xl animate-fade-up">
          {dbok.name}
        </h1>
        <p
          className="font-serif italic text-lg md:text-xl text-foreground/80 max-w-2xl mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          &ldquo;The broader architectural / research work that maps the
          documentation profession and its surrounding governance
          disciplines.&rdquo;
        </p>
        <p
          className="text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          {dbok.positioningStatement}
        </p>
      </section>

      {/* Dark -- why it exists, for who, where it fits: three short answers,
          not another restatement of the positioning paragraph above */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        {/* A faint accent wash runs left-to-right across the three cells so
            the block reads as one surface rather than three empty boxes.
            The gradient sits on the grid itself and the cells stay
            transparent, so `divide-*` draws the hairlines instead of the
            gap-px/parent-background trick, which would otherwise show the
            gradient through the gaps instead of the border colour. */}
        <div className="grid sm:grid-cols-3 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border bg-gradient-to-b sm:bg-gradient-to-r from-cyan-900/[0.04] via-cyan-900/[0.15] to-transparent">
          {dbok.orientation.map((item) => (
            <div key={item.label} className="p-6">
              <p className="section-label mb-2">{item.label}</p>
              <p className="text-foreground/90 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Light -- Chapter 0's patterns */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-6 py-16">
          <p className="section-label mb-3">
            Chapter 0 · How This Is Organized
          </p>
          <h2 className="font-serif text-2xl text-foreground mb-3">
            {chapter0.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
            {chapter0.gloss}
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {dbok.architecturalPatterns.map((pattern, i) => (
              <li key={pattern.term} className="flex gap-4 py-4">
                <span className="shrink-0 pt-0.5 font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-base font-medium text-foreground mb-1">
                    {pattern.term}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pattern.explanation}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Dark -- the real structural diagram: a nested containment tree
          built from each chapter's actual gloss data, not a summary of it */}
      <section className="px-6 py-20">
        <DbokDiagram />
      </section>

      {/* Light -- the knowledge-type vocabulary every chapter is built from */}
      <div className="theme-editorial bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-6 pb-16 pt-16">
          <p className="section-label mb-3">Eight Recurring Knowledge Types</p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Every chapter is decomposed into the same eight kinds of entity, so
            disciplines stay comparable instead of each reading like its own
            taxonomy.
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {dbok.knowledgeTypes.map((type) => (
              <div key={type.name} className="bg-background p-5">
                <span className="inline-block rounded-full bg-accent/10 border border-accent/30 text-accent px-3 py-1 text-xs font-semibold mb-2.5">
                  {type.name}
                </span>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-24 border-t border-border pt-10">
          <p className="section-label mb-4">Worked Examples</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {dbok.appendices.map((a) => (
              <div key={a.label}>
                <p className="text-sm font-medium text-foreground">{a.label}</p>
                <p className="text-sm text-muted-foreground">{a.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
