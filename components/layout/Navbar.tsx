"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav className="container-page flex items-center justify-between h-16">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo/devbit-mark-white.png"
            alt="Devbit India"
            width={655}
            height={424}
            priority
            className="h-7 w-auto sm:h-8"
          />
          <span className="font-display font-semibold text-lg tracking-tight">
            Devbit <span className="text-accent">India</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors",
                    active ? "text-accent" : "text-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <ButtonLink href="/contact" size="md">
            Start a Project
          </ButtonLink>
        </div>

        <button
          className="md:hidden text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <ul className="container-page py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "block py-3 text-base border-b border-border/60",
                    pathname === link.href ? "text-accent" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-page pb-8">
            <ButtonLink href="/contact" size="lg" className="w-full" onClick={closeMenu}>
              Start a Project
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
