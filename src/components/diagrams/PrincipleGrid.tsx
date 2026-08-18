import type { Principle } from "@/data/architecture";

interface PrincipleGridProps {
  principles: Principle[];
}

/** Compact, always-expanded list -- same P-id/name/meaning as before, just
 * without accordion collapse. Matches the Formal Specification list's
 * register (numbered rows, thin dividers) but with P1-P6 instead of 01-06. */
export default function PrincipleGrid({ principles }: PrincipleGridProps) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {principles.map((p) => (
        <li key={p.id} className="flex gap-3 py-3">
          <span className="shrink-0 pt-0.5 font-mono text-xs text-accent w-7">{p.id}</span>
          <div>
            <p className="font-serif text-base text-foreground mb-0.5">{p.name}</p>
            <p className="text-sm text-foreground/80 leading-relaxed">{p.portfolioMeaning}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
