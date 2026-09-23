import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/content";

export default function EnquirySection() {
  return (
    <Section id="enquiry" className="border-b border-border">
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14">
        <Reveal>
          <p className="text-sm text-accent mb-4">Project Enquiry</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-sm">
            Tell me about your project
          </h2>
          <p className="mt-5 text-muted leading-relaxed max-w-sm">
            Share a few details below and I&apos;ll reply with next steps —
            usually within a day. Prefer to talk directly?
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              <MessageCircle size={16} className="text-accent" /> Message on WhatsApp
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
            >
              <Mail size={16} className="text-accent" /> {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface p-7 md:p-9">
            <EnquiryForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
