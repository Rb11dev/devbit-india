import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Globe, ShoppingCart, Layout, Code2, RefreshCw, Wrench } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const icons = { Globe, ShoppingCart, Layout, Code2, RefreshCw, Wrench };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = icons[service.icon];

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.description} />
      <Section>
        <div className="grid md:grid-cols-[1fr_0.7fr] gap-14">
          <div>
            <Reveal>
              <Icon size={28} className="text-accent" />
              <h2 className="mt-5 text-2xl font-medium">What&apos;s included</h2>
              <ul className="mt-5 space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-3 text-muted">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-14 text-2xl font-medium">Process</h2>
              <ol className="mt-5 space-y-3">
                {service.process.map((step, i) => (
                  <li key={step} className="flex gap-4 text-muted">
                    <span className="text-accent font-display">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-xl border border-border bg-surface p-7 sticky top-24">
              <h3 className="font-medium text-lg">Interested in this service?</h3>
              <p className="mt-2 text-sm text-accent font-medium">{service.startingPrice}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Final pricing depends on scope — get in touch with a short
                description of your project and I&apos;ll follow up with next steps.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact" className="w-full">
                  Get a Quote
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
