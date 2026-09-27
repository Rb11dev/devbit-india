import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function AboutIntro() {
  return (
    <Section className="border-b border-border">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <Reveal>
          <p className="text-sm text-accent mb-4">About Devbit India</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-sm">
            A freelance studio focused on getting your business online properly.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted text-lg leading-relaxed max-w-xl">
            Devbit India is a freelance web development brand building
            websites and digital projects for businesses that need a real,
            working online presence — not a generic template. Every project
            is designed and coded individually, from a single landing page to
            a full e-commerce store.
          </p>
          <p className="mt-4 text-muted leading-relaxed max-w-xl">
            The work is approached the same way a client would want it
            handled: clear communication, honest timelines, and a finished
            site that actually represents the business behind it.
          </p>
          <div className="mt-8">
            <ButtonLink href="/about" variant="secondary">
              More About Devbit India
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
