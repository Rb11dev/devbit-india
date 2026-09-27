"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong. Please try again.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full rounded-md border border-border bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-accent transition-colors outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm mb-2 text-muted">
          Name
        </label>
        <input id="name" name="name" required minLength={2} className={inputClass} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-2 text-muted">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-2 text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className={inputClass}
          placeholder="How can I help?"
        />
      </div>

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        Send Message
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-accent">
          <CheckCircle2 size={16} /> Message sent — thanks for reaching out.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-amber">
          <AlertCircle size={16} /> {errorMsg}
        </p>
      )}
    </form>
  );
}
