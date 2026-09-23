import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { skills } from "@/lib/content";
import { whyDevbit } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Devbit India is a freelance web development studio building professional websites and digital projects for businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A freelance studio built around real, working websites."
        description="Devbit India exists to give businesses a website that actually does its job — clear, fast, and built with modern tools rather than a template."
      />

      <Section className="border-b border-border">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight max-w-sm">
              What Devbit India does
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted leading-relaxed text-lg max-w-xl">
              Devbit India is an independent freelance brand focused on web
              development — building business websites, e-commerce stores,
              landing pages and custom web projects for clients who need a
              proper, working digital presence.
            </p>
            <p className="mt-4 text-muted leading-relaxed max-w-xl">
              Each project is handled directly, from the first conversation
              through to launch and support afterward — no account managers,
              no outsourced work, no page-builder shortcuts.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-b border-border">
        <Reveal>
          <p className="text-sm text-accent mb-4">Approach</p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight max-w-lg">
            How projects are handled
          </h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyDevbit.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <p className="text-sm text-accent mb-4">Technologies</p>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight max-w-lg">
            Tools used day to day
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full border border-border text-sm text-muted">
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12">
            <ButtonLink href="/contact" size="lg">
              Start a Project
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
