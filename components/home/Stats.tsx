import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { highlights } from "@/lib/content";

export default function Stats() {
  return (
    <Section className="py-14 md:py-16 border-b border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-medium">{item.title}</p>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
