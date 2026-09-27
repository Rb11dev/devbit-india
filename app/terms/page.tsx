import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for working with Devbit India.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" />
      <Section>
        <div className="prose-content max-w-2xl space-y-8 text-muted leading-relaxed">
          <p>
            These terms outline the basis on which Devbit India provides
            freelance web development services. By enquiring about or
            commissioning a project, you agree to the terms below.
          </p>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Services</h2>
            <p>
              Devbit India provides custom website design and development
              services, including business websites, e-commerce stores,
              landing pages, custom web projects, redesigns and ongoing
              maintenance, as agreed on a per-project basis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Project Scope</h2>
            <p>
              Project scope, timeline and pricing are agreed with each client
              individually before work begins, based on the discovery and
              planning stages of the process.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Payment</h2>
            <p>
              Payment terms are agreed on a per-project basis and communicated
              directly with the client prior to project start.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Revisions & Support</h2>
            <p>
              The scope of revisions and post-launch support is defined per
              project and communicated as part of the project agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="text-accent">
                {site.email}
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-muted-2">Last updated: {new Date().getFullYear()}</p>
        </div>
      </Section>
    </>
  );
}
