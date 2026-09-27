import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ShoppingCart, Layout, Code2, RefreshCw, Wrench, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/services";

const icons = { Globe, ShoppingCart, Layout, Code2, RefreshCw, Wrench };

export const metadata: Metadata = {
  title: "Services",
  description: "Websites, e-commerce stores, landing pages and custom web projects built by Devbit India.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services built around what your business needs"
        description="From a single landing page to a full e-commerce store, every project is custom built and coded from scratch."
      />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full rounded-xl border border-border bg-surface p-6 hover:border-accent/60 hover:bg-surface-hover transition-colors"
                >
                  <Icon size={22} className="text-accent" />
                  <h2 className="mt-5 font-medium text-lg">{service.title}</h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{service.short}</p>
                  <p className="mt-4 text-sm text-accent">{service.startingPrice}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm group-hover:text-accent transition-colors">
                    View Service
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <p className="text-sm text-accent mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-lg">
            Starting-from pricing
          </h2>
          <p className="mt-5 text-muted leading-relaxed max-w-xl">
            Every project is scoped individually, so these are starting
            points, not fixed quotes — final pricing depends on pages,
            features and timeline. Get in touch for an exact quote.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-xl border border-border bg-surface divide-y divide-border overflow-hidden">
            {services.map((service) => (
              <div
                key={service.slug}
                className="flex flex-wrap items-center justify-between gap-4 px-6 py-5"
              >
                <div>
                  <p className="font-medium">{service.title}</p>
                  <p className="mt-1 text-sm text-muted">{service.short}</p>
                </div>
                <p className="text-accent font-medium whitespace-nowrap">{service.startingPrice}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8">
            <ButtonLink href="/contact" size="lg">
              Get a Quote
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
