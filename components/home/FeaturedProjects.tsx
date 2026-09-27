import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { ButtonLink } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/lib/projects";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();
  return (
    <Section className="border-b border-border">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <Reveal>
          <p className="text-sm text-accent mb-4">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-lg">
            Selected projects
          </h2>
        </Reveal>
        <ButtonLink href="/projects" variant="secondary">
          All Projects
        </ButtonLink>
      </div>
      <ProjectGrid projects={projects} />
    </Section>
  );
}
