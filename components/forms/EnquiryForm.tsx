"use client";

import { useState, useRef, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";
import EnquirySuccess, { type EnquiryData } from "@/components/forms/EnquirySuccess";
import EnquiryError from "@/components/forms/EnquiryError";

type Status = "idle" | "loading" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedData, setSubmittedData] = useState<EnquiryData | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Extra guard against duplicate submissions beyond the disabled button
    // (e.g. rapid Enter-key presses before the re-render lands).
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const data: EnquiryData = {
      name: raw.name?.trim() || "",
      email: raw.email?.trim() || "",
      phone: raw.phone?.trim() || "",
      company: raw.company?.trim() || "",
      service: raw.service?.trim() || "",
      budget: raw.budget?.trim() || "",
      timeline: raw.timeline?.trim() || "",
      message: raw.message?.trim() || "",
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => null);

      // Only treat this as a success once the backend has actually
      // confirmed it — a network hiccup or a non-2xx response always
      // falls through to the error state below, never a fake success.
      if (!res.ok || !result?.success) {
        throw new Error(
          result?.error || "We couldn't send your enquiry right now. Please try again or contact us directly."
        );
      }

      setSubmittedData(data);
      setStatus("success");
    } catch (err) {
      setSubmittedData(data);
      setErrorMsg(
        err instanceof Error ? err.message : "We couldn't send your enquiry right now. Please try again or contact us directly."
      );
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setSubmittedData(null);
    setErrorMsg("");
    formRef.current?.reset();
  }

  if (status === "success" && submittedData) {
    return <EnquirySuccess data={submittedData} onReset={handleReset} />;
  }

  const inputClass =
    "w-full rounded-md border border-border bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-accent transition-colors outline-none disabled:opacity-60";

  return (
    <div className="space-y-5">
      {status === "error" && submittedData && (
        <EnquiryError message={errorMsg} data={submittedData} onRetry={() => setStatus("idle")} />
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" aria-busy={status === "loading"}>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm mb-2 text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              minLength={2}
              disabled={status === "loading"}
              className={inputClass}
              placeholder="Your name"
              defaultValue={submittedData?.name}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={status === "loading"}
              className={inputClass}
              placeholder="you@company.com"
              defaultValue={submittedData?.email}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm mb-2 text-muted">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              disabled={status === "loading"}
              className={inputClass}
              placeholder="Optional"
              defaultValue={submittedData?.phone}
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm mb-2 text-muted">
              Company / Business
            </label>
            <input
              id="company"
              name="company"
              disabled={status === "loading"}
              className={inputClass}
              placeholder="Optional"
              defaultValue={submittedData?.company}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm mb-2 text-muted">
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            disabled={status === "loading"}
            className={inputClass}
            defaultValue={submittedData?.service || ""}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="budget" className="block text-sm mb-2 text-muted">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              disabled={status === "loading"}
              className={inputClass}
              defaultValue={submittedData?.budget || ""}
            >
              <option value="">Select a range (optional)</option>
              <option value="Under ₹15,000">Under ₹15,000</option>
              <option value="₹15,000 – ₹40,000">₹15,000 – ₹40,000</option>
              <option value="₹40,000 – ₹1,00,000">₹40,000 – ₹1,00,000</option>
              <option value="₹1,00,000+">₹1,00,000+</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm mb-2 text-muted">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              disabled={status === "loading"}
              className={inputClass}
              defaultValue={submittedData?.timeline || ""}
            >
              <option value="">Select a timeline (optional)</option>
              <option value="ASAP">ASAP</option>
              <option value="Within 2 weeks">Within 2 weeks</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="1–3 months">1–3 months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-2 text-muted">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={5}
            disabled={status === "loading"}
            className={inputClass}
            placeholder="Tell me a bit about your project..."
            defaultValue={submittedData?.message}
          />
        </div>

        <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" && <Loader2 size={18} className="animate-spin" />}
          {status === "loading" ? "Sending..." : "Send Enquiry"}
        </Button>
      </form>
    </div>
  );
}
