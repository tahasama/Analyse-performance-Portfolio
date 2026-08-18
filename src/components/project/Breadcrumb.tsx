import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { ProjectContent } from "@/data/projects";

export default function Breadcrumb({ project }: { project: ProjectContent }) {
  const groupLabel = project.group === "reporting" ? "Reporting" : "Decision";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
      <Link to="/" className="hover:text-foreground transition-colors">
        Home
      </Link>
      <ChevronRight className="h-3.5 w-3.5 shrink-0" />
      <Link to={`/#${project.group}`} className="hover:text-foreground transition-colors">
        {groupLabel}
      </Link>
      <ChevronRight className="h-3.5 w-3.5 shrink-0" />
      <span className="text-foreground font-medium truncate">{project.title}</span>
    </nav>
  );
}
