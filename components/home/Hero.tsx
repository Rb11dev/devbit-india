"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowUpRight, Braces, Layers, MonitorSmartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/90 to-bg pointer-events-none" />
      <div className="container-page relative py-24 md:py-32 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm text-accent mb-5">Freelance Web Development Studio</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] max-w-xl">
            Modern websites.{" "}
            <span className="text-gradient">Powerful digital experiences.</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
            Devbit India designs and builds professional websites, e-commerce
            stores and custom digital projects for businesses that need more
            than a template.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/projects" size="lg" variant="secondary">
              View My Work
            </ButtonLink>
            <ButtonLink href="/contact" size="lg">
              Start a Project
              <ArrowUpRight size={18} />
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative aspect-square max-w-md mx-auto w-full"
        >
          <div className="absolute inset-0 rounded-2xl border border-border bg-surface/60 backdrop-blur-sm" />
          <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-3xl -z-10" />

          <div className="relative h-full w-full p-8 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-2/60" />
              <span className="ml-2">devbitindia.com</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-bg-elevated px-4 py-3">
                <Layers size={18} className="text-accent shrink-0" />
                <div className="h-2 w-3/4 rounded bg-border" />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-bg-elevated px-4 py-3">
                <Braces size={18} className="text-accent shrink-0" />
                <div className="h-2 w-1/2 rounded bg-border" />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-bg-elevated px-4 py-3">
                <MonitorSmartphone size={18} className="text-accent shrink-0" />
                <div className="h-2 w-2/3 rounded bg-border" />
              </div>
            </div>

            <p className="text-xs text-muted-2">Built with Next.js &amp; TypeScript</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
