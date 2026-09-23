# Devbit India — Freelance Portfolio Website

A production-ready Next.js 16 + TypeScript + Tailwind CSS website for the
Devbit India freelance web development brand.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values to enable email
notifications from the contact and enquiry forms:

```bash
cp .env.example .env.local
```

- `RESEND_API_KEY` — API key from https://resend.com. Without it, form
  submissions are validated and accepted but no email is sent (a warning is
  logged instead) — useful for local development.
- `CONTACT_TO_EMAIL` — inbox that receives notifications (defaults to
  devbitindia@gmail.com).
- `CONTACT_FROM_EMAIL` — the verified "from" address in your Resend account.

## What to replace before launch

- **Project data** (`lib/projects.ts`): FAISHONFIT, Ricochet Nova and the
  Devbit India portfolio entries use general, honest descriptions since no
  detailed case-study content or screenshots were provided. Replace the
  `description`, `challenge`, `solution`, `liveUrl` and add real screenshots
  under `public/projects/` once available.
- **Testimonials** (`lib/content.ts`): the `testimonials` array is
  intentionally empty — the section only renders once real client
  testimonials are added.
- **Site URL**: update `site.url` in `lib/content.ts` to your real domain
  once deployed (used for metadata, sitemap and robots.txt).
- **Logo**: `public/logo/` is ready for a logo file if you'd like to swap
  the text logo in `components/layout/Navbar.tsx` for an image.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npx tsc --noEmit` — type-check
- `npx eslint .` — lint

## Structure

See `app/`, `components/`, and `lib/` — organized by route, UI area, and
shared content/data respectively, per the project's original brief.
