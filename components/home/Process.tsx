import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

export default function Process() {
  return (
    <Section className="border-b border-border">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <Reveal>
          <p className="text-sm text-accent mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-lg">
            A clear process, start to finish
          </h2>
        </Reveal>
        <ButtonLink href="/process" variant="secondary">
          Full Process
        </ButtonLink>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
        {processSteps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.04}>
            <div className="bg-surface p-7 h-full">
              <span className="font-display text-3xl text-accent">{step.number}</span>
              <h3 className="mt-3 font-medium text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
