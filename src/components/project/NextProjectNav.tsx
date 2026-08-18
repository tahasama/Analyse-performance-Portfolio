import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getNextProject, type ProjectId } from "@/data/projects";

export default function NextProjectNav({ currentId }: { currentId: ProjectId }) {
  const nextProject = getNextProject(currentId);

  return (
    <Link
      to={`/project/${nextProject.id}`}
      className="group flex items-center justify-between p-6 border border-border hover:border-accent/40 transition-colors"
    >
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Next</p>
        <p className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
          {nextProject.title}
        </p>
      </div>
      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
    </Link>
  );
}
