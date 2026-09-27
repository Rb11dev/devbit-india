import type { Metadata } from "next";
import { Mail, Phone, AtSign, MessageCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Devbit India to start a website or digital project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start your project"
        description="Send an enquiry with a short description of what you need, and I'll follow up with next steps."
      />
      <Section>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14">
          <Reveal>
            <div className="space-y-6">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-accent/60 transition-colors"
              >
                <Mail size={20} className="text-accent shrink-0" />
                <div>
                  <p className="text-sm text-muted-2">Email</p>
                  <p className="font-medium">{site.email}</p>
                </div>
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-accent/60 transition-colors"
              >
                <Phone size={20} className="text-accent shrink-0" />
                <div>
                  <p className="text-sm text-muted-2">Phone</p>
                  <p className="font-medium">{site.phone}</p>
                </div>
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-accent/60 transition-colors"
              >
                <MessageCircle size={20} className="text-accent shrink-0" />
                <div>
                  <p className="text-sm text-muted-2">WhatsApp</p>
                  <p className="font-medium">{site.phone}</p>
                </div>
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-accent/60 transition-colors"
              >
                <AtSign size={20} className="text-accent shrink-0" />
                <div>
                  <p className="text-sm text-muted-2">Instagram</p>
                  <p className="font-medium">{site.instagramHandle}</p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-surface p-7 md:p-9">
              <h2 className="text-xl font-medium mb-6">Project Enquiry</h2>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
