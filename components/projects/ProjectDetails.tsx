import Link from "next/link";
import { ArrowUpRight, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ProjectPreview from "@/components/projects/ProjectPreview";
import { getAdjacentProject } from "@/lib/projects";

export default function ProjectDetails({ project }: { project: Project }) {
  const next = getAdjacentProject(project.slug);

  return (
    <div>
      <div className="container-page pt-10">
        <Link href="/projects" className="text-sm text-muted hover:text-accent transition-colors">
          ← Back to Projects
        </Link>
      </div>

      <div className="container-page mt-6 flex flex-wrap items-start justify-between gap-6">
        <Reveal>
          <p className="text-sm text-accent">{project.category}</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-medium tracking-tight max-w-2xl">{project.name}</h1>
          <p className="mt-4 text-lg text-muted max-w-xl leading-relaxed">{project.intro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ButtonLink href={project.liveUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
            Live Project <ArrowUpRight size={16} />
          </ButtonLink>
        </Reveal>
      </div>

      <div className="container-page mt-10">
        <ProjectPreview project={project} className="aspect-[21/9] rounded-xl border border-border" />
      </div>

      <div className="container-page mt-16 grid md:grid-cols-[1fr_0.6fr] gap-14">
        <div className="space-y-12">
          <Reveal>
            <h2 className="text-xl font-medium mb-3">Overview</h2>
            <p className="text-muted leading-relaxed">{project.overview}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-xl font-medium mb-3">What was built</h2>
            <p className="text-muted leading-relaxed">{project.whatWasBuilt}</p>
          </Reveal>
          <Reveal>
            <h2 className="text-xl font-medium mb-3">Key features</h2>
            <ul className="space-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-muted">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h2 className="text-xl font-medium mb-3">Development highlights</h2>
            <ul className="space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-muted">
                  <Sparkles size={18} className="text-accent shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="space-y-10">
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface p-6 sticky top-24">
              <h3 className="text-sm font-medium text-muted-2 mb-3">Technology stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Interested in something similar for your business?
                </p>
                <ButtonLink href="/contact" className="w-full">
                  Start a Project
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container-page mt-16 pb-4">
        <div className="rounded-xl border border-border bg-surface p-8 md:p-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-medium">See it in action</h2>
            <p className="mt-2 text-muted max-w-md">
              The best way to review this project is on the live site itself — every interaction shown here is real.
            </p>
          </div>
          <ButtonLink href={project.liveUrl} size="lg" target="_blank" rel="noopener noreferrer">
            Visit {project.name} <ArrowUpRight size={18} />
          </ButtonLink>
        </div>
      </div>

      <div className="border-t border-border mt-16">
        <Link
          href={`/projects/${next.slug}`}
          className="group container-page flex items-center justify-between py-10"
        >
          <div>
            <p className="text-sm text-muted-2">Next project</p>
            <p className="mt-1 text-xl font-medium group-hover:text-accent transition-colors">{next.name}</p>
          </div>
          <ArrowRight size={22} className="text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
