import { Card, CardContent } from "@/components/ui/card";
import type { Handshake } from "@/data/architecture";

interface HandshakeListProps {
  handshakes: Handshake[];
}

export default function HandshakeList({ handshakes }: HandshakeListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {handshakes.map((h) => (
        <Card key={h.id} className="border-border bg-card">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              {h.id.toUpperCase()} — {h.name}
            </p>
            <div className="mb-2">
              <p className="text-sm text-foreground leading-snug">{h.from}</p>
              <div className="flex items-center mt-1">
                <svg
                  width="28"
                  height="24"
                  viewBox="0 0 20 24"
                  className="text-accent shrink-0"
                  aria-hidden="true"
                >
                  <defs>
                    <marker
                      id={`hs-arrow-${h.id}`}
                      viewBox="0 0 10 10"
                      refX="7"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M0 0L10 5L0 10z" fill="currentColor" />
                    </marker>
                  </defs>
                  <path
                    d="M4 0 V16 H17"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    markerEnd={`url(#hs-arrow-${h.id})`}
                  />
                </svg>
                <p className="text-sm text-foreground leading-snug ml-1">
                  {h.to.join(" · ")}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {h.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
