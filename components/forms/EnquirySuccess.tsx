import { CheckCircle2, Mail, MessageCircle, RotateCcw } from "lucide-react";
import { site } from "@/lib/content";

export type EnquiryData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
};

export function buildWhatsAppEnquiryMessage(data: EnquiryData) {
  const lines = [
    "Hello Devbit India,",
    "",
    "I just submitted a project enquiry.",
    "",
    `Name: ${data.name}`,
  ];
  if (data.company) lines.push(`Company: ${data.company}`);
  lines.push(`Project: ${data.service}`);
  if (data.budget) lines.push(`Budget: ${data.budget}`);
  if (data.timeline) lines.push(`Timeline: ${data.timeline}`);
  lines.push("", "Project details:", data.message, "", `Email: ${data.email}`);
  if (data.phone) lines.push(`Phone: ${data.phone}`);
  lines.push("", "I'd like to discuss this project further.");
  return lines.join("\n");
}

export function whatsAppUrlFor(data: EnquiryData) {
  const message = buildWhatsAppEnquiryMessage(data);
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export default function EnquirySuccess({
  data,
  onReset,
}: {
  data: EnquiryData;
  onReset: () => void;
}) {
  return (
    <div className="text-center py-4">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 border border-accent/30">
        <CheckCircle2 size={28} className="text-accent" />
      </div>
      <h3 className="mt-5 text-xl font-medium">Enquiry received</h3>
      <p className="mt-2 text-muted leading-relaxed max-w-sm mx-auto">
        Thank you, {data.name.split(" ")[0]} — your project details have been
        sent to Devbit India. We&apos;ll review them and get back to you shortly.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-sm mx-auto">
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent(
            `Following up: ${data.service} enquiry`
          )}`}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          <Mail size={16} /> Email Devbit India
        </a>
        <a
          href={whatsAppUrlFor(data)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent text-[#05130f] px-4 py-3 text-sm font-medium hover:bg-accent-strong transition-colors"
        >
          <MessageCircle size={16} /> Continue on WhatsApp
        </a>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-7 inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
      >
        <RotateCcw size={14} /> Send another enquiry
      </button>
    </div>
  );
}
