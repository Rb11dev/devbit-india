import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Process",
  description: "How a project with Devbit India goes from first conversation to launch and support.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How a project comes together"
        description="A straightforward six-stage process, built for freelance timelines without unnecessary overhead."
      />
      <Section>
        <div className="space-y-0 max-w-3xl">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.05}>
              <div className="flex gap-8 py-8 border-b border-border last:border-b-0">
                <span className="font-display text-4xl text-accent w-16 shrink-0">{step.number}</span>
                <div>
                  <h2 className="text-xl font-medium">{step.title}</h2>
                  <p className="mt-2 text-muted leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <ButtonLink href="/contact" size="lg">
              Start a Project
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
