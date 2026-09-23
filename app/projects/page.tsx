import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of websites and digital projects built by Devbit India.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A look at recent builds"
        description="Five projects spanning e-commerce, a corporate site, a luxury retail concept, a hospitality brand and an original browser game — each built from scratch."
      />
      <Section>
        <ProjectGrid projects={projects} />
      </Section>
    </>
  );
}
