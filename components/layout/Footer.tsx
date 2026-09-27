import Link from "next/link";
import Image from "next/image";
import { AtSign, Mail, Phone } from "lucide-react";
import { site, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container-page py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/logo/devbit-mark-white.png"
              alt="Devbit India"
              width={655}
              height={424}
              className="h-7 w-auto"
            />
            <span className="font-display font-semibold text-lg tracking-tight">
              Devbit <span className="text-accent">India</span>
            </span>
          </Link>
          <p className="mt-3 text-sm text-muted max-w-sm leading-relaxed">
            Modern websites and digital experiences for businesses — designed
            and built by a focused freelance development studio.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium mb-4">Quick Links</p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-accent shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-accent shrink-0" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-accent transition-colors">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <AtSign size={16} className="text-accent shrink-0" />
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-2">
          <p>© {new Date().getFullYear()} Devbit India. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
