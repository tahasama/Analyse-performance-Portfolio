import { Link } from "react-router-dom";
import { projects, type ProjectId } from "@/data/projects";
import { cn } from "@/lib/utils";

interface SystemLineProps {
  currentId?: ProjectId;
}

// The portfolio's own product-navigation motif -- plain full titles, numbered,
// current page highlighted. Not a formal DCIOM sequence (that's HORIZON /
// METHOD / OPERATION, shown only on /architecture).
export default function SystemLine({ currentId }: SystemLineProps) {
  return (
    <nav
      aria-label="Six systems"
      className="flex flex-wrap justify-between items-center gap-x-2 gap-y-3 text-sm"
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
                <span className="mr-1 text-xs tabular-nums ring-1 p-2 rounded-full mb-2.5 hover:bg-accent/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{project.title}</span>
              </div>
            </Link>
            {i < projects.length - 1 && (
              <span className="text-muted-foreground/40 scale-150 text-2xl mb-8">
                →
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
