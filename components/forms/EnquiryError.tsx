import { AlertTriangle, Mail, MessageCircle, RotateCcw } from "lucide-react";
import { site } from "@/lib/content";
import { whatsAppUrlFor, type EnquiryData } from "@/components/forms/EnquirySuccess";

export default function EnquiryError({
  message,
  data,
  onRetry,
}: {
  message: string;
  data: EnquiryData;
  onRetry: () => void;
}) {
  return (
    <div className="rounded-lg border border-amber/30 bg-amber/5 p-5">
      <div className="flex gap-3">
        <AlertTriangle size={20} className="text-amber shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-medium text-foreground">We couldn&apos;t send your enquiry</p>
          <p className="mt-1 text-sm text-muted leading-relaxed">{message}</p>
          <p className="mt-1 text-sm text-muted leading-relaxed">
            Your details are still filled in below — you can try again, or reach us directly.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <RotateCcw size={14} /> Try again
            </button>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <Mail size={14} /> Email us
            </a>
            <a
              href={whatsAppUrlFor(data)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-accent text-[#05130f] px-3.5 py-2 text-sm font-medium hover:bg-accent-strong transition-colors"
            >
              <MessageCircle size={14} /> WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
