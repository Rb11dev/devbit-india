import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={i * 0.05}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
