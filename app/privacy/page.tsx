import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Devbit India website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <div className="prose-content max-w-2xl space-y-8 text-muted leading-relaxed">
          <p>
            This policy explains what information Devbit India collects
            through this website and how it is used. Devbit India is a
            freelance web development brand operated as an individual
            business.
          </p>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Information Collected</h2>
            <p>
              When you submit the contact or enquiry form, the name, email
              address, phone number (if provided), service interest, budget
              range (if provided) and message you enter are collected in
              order to respond to your request.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">How Information Is Used</h2>
            <p>
              Submitted information is used only to respond to enquiries and
              communicate about a potential or ongoing project. It is not
              sold or shared with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Data Storage</h2>
            <p>
              Form submissions are transmitted securely and used to send a
              notification email. Data is not stored in a public database by
              this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-foreground mb-3">Contact</h2>
            <p>
              For any questions about this policy or your data, contact{" "}
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
