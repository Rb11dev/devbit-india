import Link from "next/link";
import { Globe, ShoppingCart, Layout, Code2, RefreshCw, Wrench, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/services";

const icons = { Globe, ShoppingCart, Layout, Code2, RefreshCw, Wrench };

export default function Services() {
  return (
    <Section className="border-b border-border">
      <Reveal>
        <p className="text-sm text-accent mb-4">Services</p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-lg">
          What I can build for your business
        </h2>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <Reveal key={service.slug} delay={i * 0.05}>
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full rounded-xl border border-border bg-surface p-6 hover:border-accent/60 hover:bg-surface-hover transition-colors"
              >
                <Icon size={22} className="text-accent" />
                <h3 className="mt-5 font-medium text-lg">{service.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{service.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground group-hover:text-accent transition-colors">
                  View Service
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
