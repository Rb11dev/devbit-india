import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";
import { whyDevbit } from "@/lib/content";

export default function WhyDevbit() {
  return (
    <Section className="border-b border-border">
      <Reveal>
        <p className="text-sm text-accent mb-4">Why Devbit India</p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-lg">
          What working together looks like
        </h2>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyDevbit.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <div className="flex gap-3">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
