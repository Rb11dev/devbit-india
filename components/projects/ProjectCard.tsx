import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Project } from "@/lib/projects";
import ProjectPreview from "@/components/projects/ProjectPreview";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/50 hover:-translate-y-1">
      <ProjectPreview
        project={project}
        className="aspect-[16/10] border-b border-border transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="p-6">
        <p className="text-xs text-accent">{project.category}</p>
        <h3 className="mt-2 font-medium text-lg">{project.name}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{project.short}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-2"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
          >
            Live Website <ArrowUpRight size={14} />
          </a>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
          >
            Case Study <FileText size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
