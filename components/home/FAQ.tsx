"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="border-b border-border">
      <Reveal>
        <p className="text-sm text-accent mb-4">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-lg">
          Common questions
        </h2>
      </Reveal>

      <div className="mt-10 max-w-2xl divide-y divide-border border-t border-b border-border">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={cn("text-accent shrink-0 transition-transform", isOpen && "rotate-180")}
                />
              </button>
              {isOpen && (
                <p className="pb-5 text-sm text-muted leading-relaxed max-w-xl">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
