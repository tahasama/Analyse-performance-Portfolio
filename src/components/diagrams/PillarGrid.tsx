import { Card, CardContent } from "@/components/ui/card";
import type { Pillar } from "@/data/architecture";
import { COMPONENT_NUMBER } from "@/data/projects";

interface PillarGridProps {
  pillars: Pillar[];
}

export default function PillarGrid({ pillars }: PillarGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pillars.map((pillar) => (
        <Card key={pillar.id} className="border-border bg-card">
          <CardContent className="p-6">
            <h3 className="font-serif text-xl text-foreground mb-2">
              {pillar.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {pillar.description}
            </p>
            {pillar.scopeNote && (
              <p className="text-xs uppercase tracking-wide text-accent mb-4">
                {pillar.scopeNote}
              </p>
            )}
            <div className="space-y-3 pt-4 border-t border-border">
              {pillar.components.map((c) => {
                const num =
                  COMPONENT_NUMBER[c.id as keyof typeof COMPONENT_NUMBER];
                return (
                  <div key={c.id}>
                    <p className="text-sm font-medium text-foreground">
                      {num ? `C${num} · ${c.label}` : c.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {c.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
