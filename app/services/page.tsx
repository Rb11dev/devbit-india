import type { Metadata } from "next";
import Link from "next/link";
import { Globe, ShoppingCart, Layout, Code2, RefreshCw, Wrench, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/services";

const icons = { Globe, ShoppingCart, Layout, Code2, RefreshCw, Wrench };

export const metadata: Metadata = {
  title: "Services",
  description: "Websites, e-commerce stores, landing pages and custom web projects built by Devbit India.",
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
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm group-hover:text-accent transition-colors">
                    View Service
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
