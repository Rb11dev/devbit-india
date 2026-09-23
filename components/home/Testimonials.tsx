import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section className="border-b border-border">
      <Reveal>
        <p className="text-sm text-accent mb-4">Client Feedback</p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-lg">
          What clients say
        </h2>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.05}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <p className="text-muted leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted-2">{t.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
