import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/content";

export default function CTASection() {
  return (
    <section className="border-b border-border bg-grid">
      <div className="container-page py-24 md:py-28 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl mx-auto">
            Have a project in mind?
          </h2>
          <p className="mt-5 text-lg text-muted max-w-lg mx-auto">
            Let&apos;s build something professional for your business.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Start a Project
            </ButtonLink>
            <ButtonLink href={site.whatsappHref} size="lg" variant="secondary" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
