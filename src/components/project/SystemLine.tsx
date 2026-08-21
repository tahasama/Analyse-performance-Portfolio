import { Link } from "react-router-dom";
import { projects, type ProjectId } from "@/data/projects";
import { cn } from "@/lib/utils";

interface SystemLineProps {
  currentId?: ProjectId;
  /** Slightly smaller type for secondary placements (project pages), where
   * this is a footer-style index rather than the page's own hero motif.
   * Rings keep their size -- only the labels step down. */
  compact?: boolean;
}

// The portfolio's own product-navigation motif -- plain full titles, numbered,
// current page highlighted. Not a formal DCIOM sequence (that's HORIZON /
// METHOD / OPERATION, shown only on /architecture).
export default function SystemLine({ currentId, compact = false }: SystemLineProps) {
  return (
    <nav
      aria-label="Six systems"
      className={cn(
        "flex flex-wrap justify-center lg:justify-between items-center gap-y-6",
        compact
          ? "gap-x-5 lg:gap-x-1 text-[0.785rem]"
          : "gap-x-6 lg:gap-x-2 text-sm",
      )}
    >
      {projects.map((project, i) => {
        const isCurrent = project.id === currentId;
        return (
          <span key={project.id} className="flex items-center gap-2">
            <Link
              to={`/project/${project.id}`}
              className={cn(
                "whitespace-nowrap transition-colors",
                isCurrent
                  ? "font-medium text-accent"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <div className="flex flex-col items-center justify-evenly">
                <span className="system-line-ring mr-1 text-xs tabular-nums ring-1 p-2 rounded-full mb-2.5 hover:bg-blue-500/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{project.title}</span>
              </div>
            </Link>
            {/* The arrows only read correctly when all six sit on one line
                (lg and up) -- below that the row wraps and any arrow landing
                at a row's end points into empty space, so they're dropped and
                the numbered items stand on their own. */}
            {i < projects.length - 1 && (
              <span className="system-line-arrow hidden lg:inline-block text-muted-foreground/40 scale-150 text-2xl mb-8">
                →
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
