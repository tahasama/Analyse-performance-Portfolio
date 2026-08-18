import { useParams, Link } from "react-router-dom";
import { getProject } from "@/data/projects";
import ProjectPageShell from "@/components/project/ProjectPageShell";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = getProject(projectId);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectPageShell project={project} />;
}
