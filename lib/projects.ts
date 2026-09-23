export type Project = {
  slug: string;
  name: string;
  category: string;
  theme: "faishonfit" | "techcorp" | "haute-couture" | "ricochet-nova" | "elora";
  short: string;
  intro: string;
  overview: string;
  whatWasBuilt: string;
  features: string[];
  technologies: string[];
  highlights: string[];
  liveUrl: string;
  featured: boolean;
};

// Project data below reflects what could be directly confirmed by reviewing
// each live deployment. Where a technology couldn't be verified from the
// live site, it isn't listed. These are portfolio/demo builds used to
// showcase development range across different site types — not claims of
// employment by the brands referenced in their concept content (e.g.
// FaishonFit's "About" copy, reviews and pricing are demo storefront
// content, not a real retailer).
export const projects: Project[] = [
  {
    slug: "faishonfit",
    name: "FaishonFit",
    category: "E-commerce",
    theme: "faishonfit",
    short: "A full storefront concept for a fashion brand — catalog, collections, cart and editorial content.",
    intro:
      "FaishonFit is a from-scratch e-commerce storefront built to demonstrate a complete retail experience: multi-category product browsing, a cart flow, editorial lookbook content and account pages, deployed on Vercel.",
    overview:
      "FaishonFit takes on the scope of a real fashion retailer's site rather than a single landing page — six product collections, individual product pages, a cart, an editorial lookbook section and supporting pages like size guides, FAQs and a returns policy. The goal was to build something that reads and behaves like a production storefront, not a static mockup.",
    whatWasBuilt:
      "A multi-page Next.js application covering the homepage, category pages, individual product pages, a lookbook/editorial section, cart and account areas, and standard e-commerce support pages (FAQ, sizing, returns, privacy). Routing, metadata and page structure follow the same patterns used on real e-commerce sites.",
    features: [
      "Six-collection product catalog with category pages",
      "Individual product pages with pricing and variants",
      "Cart flow and account section",
      "Editorial lookbook with seasonal features",
      "Newsletter signup and support pages (FAQ, sizing, returns)",
    ],
    technologies: ["Next.js", "React"],
    highlights: [
      "Structured as a full multi-page storefront rather than a single template page",
      "Deployed on Vercel with route-based metadata for each page",
      "Content organized to mirror how a real fashion e-commerce catalog is structured",
    ],
    liveUrl: "https://faishonfit.vercel.app/",
    featured: true,
  },
  {
    slug: "techcorp",
    name: "TechCorp",
    category: "Business Website",
    theme: "techcorp",
    short: "A corporate enterprise-solutions website with services, leadership and a working contact section.",
    intro:
      "TechCorp is a corporate business website built around a services-led structure: what the company offers, who leads it, and a clear way to get in touch — the kind of site a consulting or enterprise-solutions business needs.",
    overview:
      "The site is a single-page corporate layout built around anchor navigation — Home, About, Services, Leadership and Contact — designed to move a visitor from what the company does to how to reach them without unnecessary pages.",
    whatWasBuilt:
      "A static HTML, CSS and JavaScript site with a fixed navigation bar, a services grid covering six offerings (web development, mobile, cloud, cybersecurity, analytics, consulting), a leadership section, and a contact section with a full enquiry form.",
    features: [
      "Six-service offering grid with individual descriptions",
      "Company story and leadership team section",
      "Contact form with service-of-interest selection",
      "Anchor-based single-page navigation",
      "Newsletter signup in the footer",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Clean single-page structure built for a corporate/consulting audience",
      "Deployed as a static site on GitHub Pages",
      "Section layout designed for a clear service → team → contact flow",
    ],
    liveUrl: "https://rb11dev.github.io/techcorp/",
    featured: true,
  },
  {
    slug: "haute-couture",
    name: "Haute Couture",
    category: "E-commerce",
    theme: "haute-couture",
    short: "A luxury fashion storefront concept with collections, a cart drawer and a search overlay.",
    intro:
      "Haute Couture is a luxury e-commerce concept site — built to explore a higher-end retail experience with a cart drawer, search overlay and editorial styling, distinct from FaishonFit's more contemporary catalog approach.",
    overview:
      "The site presents a curated luxury catalog rather than a large inventory — signature collections, a small set of featured products, and an editorial 'philosophy' section — paired with interactive shopping UI: a slide-out cart and a search overlay, both built client-side.",
    whatWasBuilt:
      "A static HTML, CSS and JavaScript site with a product grid, category filtering controls, a cart drawer and search modal, and supporting sections for brand story and value propositions (craftsmanship, sustainability, made-to-measure, worldwide service).",
    features: [
      "Signature collections and featured product grid",
      "Client-side search overlay and shopping cart drawer",
      "Category filtering (dresses, suits, accessories, shoes)",
      "Brand story and value-proposition sections",
      "Newsletter signup",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Interactive cart and search overlays built without a framework",
      "Editorial tone and layout distinct from a standard product-grid template",
      "Deployed as a static site on GitHub Pages",
    ],
    liveUrl: "https://rb11dev.github.io/Haute-couture/",
    featured: true,
  },
  {
    slug: "ricochet-nova",
    name: "Ricochet Nova",
    category: "Web Game",
    theme: "ricochet-nova",
    short: "An original neon brick-breaking puzzle game, built with HTML5 Canvas — no game engine, no copied assets.",
    intro:
      "Ricochet Nova is a browser-based brick-breaking puzzle game: aim, ricochet a ball off the walls, and shatter numbered bricks before they reach the danger line — built entirely with HTML5 Canvas and JavaScript.",
    overview:
      "Unlike the storefront projects, Ricochet Nova is an interactive game — level mode with staged progression and boss levels, an endless mode, a daily challenge, and an in-game upgrade shop. Every visual is drawn procedurally with gradients and glow effects, and sound is synthesized live rather than using external audio files.",
    whatWasBuilt:
      "A full game loop built on HTML5 Canvas: swipe-to-aim controls, collision and physics handling for ricocheting balls, a scoring and coin system, level select, a settings menu (sound, music, vibration, reduced motion) and a daily-reward system — all running client-side with no backend.",
    features: [
      "Level mode (100 stages with boss levels) and an endless mode",
      "Daily challenge and daily reward system",
      "In-game upgrade shop (skins, themes, launcher upgrades)",
      "Swipe-based aiming with real-time ball physics",
      "Accessibility settings including a reduced-motion mode",
    ],
    technologies: ["HTML5 Canvas", "JavaScript", "CSS"],
    highlights: [
      "All artwork generated procedurally in code — no image assets",
      "Sound effects synthesized live via code rather than audio files",
      "Full game state (progress, coins, settings) handled client-side",
    ],
    liveUrl: "https://rb11dev.github.io/ricochet.nova1/",
    featured: true,
  },
  {
    slug: "elora",
    name: "Élora Café",
    category: "Hospitality Website",
    theme: "elora",
    short: "A single-page concept site for a fictional New Delhi café — story, menu, gallery and reservations.",
    intro:
      "Élora Café is a hospitality-focused concept website built around a fictional New Delhi café brand — designed to show how a restaurant or café site can move a visitor from atmosphere to a table booking.",
    overview:
      "Rather than a generic restaurant template, Élora is built around a full brand narrative: a story section, a signature-dish spotlight, a three-part daily 'experience' timeline (morning, afternoon, evening), a photo gallery and a reservation form — the structure a real café's marketing site would need.",
    whatWasBuilt:
      "A static HTML, CSS and JavaScript single-page site with anchor navigation (Story, Menu, Experience, Gallery, Contact), animated count-up stats, a reservation form with guest-count and time selection, and an FAQ section — clearly labeled as a portfolio demo with no real booking system behind it.",
    features: [
      "Brand story and signature-dish spotlight sections",
      "Three-part daily experience timeline with a photo for each",
      "Reservation form with date, time and guest-count fields",
      "Photo gallery and guest-feedback section",
      "FAQ and contact section with map link",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Animated count-up statistics built without a framework",
      "Full single-page hospitality site structure, not just a landing page",
      "Deployed as a static site on GitHub Pages",
    ],
    liveUrl: "https://rb11dev.github.io/Elora/",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getAdjacentProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
