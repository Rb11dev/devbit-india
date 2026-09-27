import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <Section className="border-b border-border">
      <Reveal>
        <p className="text-sm text-accent mb-4">Technologies</p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-lg">
          Tools used to build your project
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-border text-sm text-muted hover:text-accent hover:border-accent/60 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
