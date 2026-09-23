import { MessageCircle } from "lucide-react";
import { site } from "@/lib/content";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Devbit India on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-[#05130f] shadow-lg shadow-black/30 hover:bg-accent-strong transition-colors"
    >
      <MessageCircle size={22} />
    </a>
  );
}
