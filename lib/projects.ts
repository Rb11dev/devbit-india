export type ProjectType = "Personal Project" | "Concept Project" | "Client Project";

export type Project = {
  slug: string;
  name: string;
  category: string;
  projectType: ProjectType;
  theme: "faishonfit" | "techcorp" | "haute-couture" | "ricochet-nova" | "elora" | "jainico";
  short: string;
  intro: string;
  overview: string;
  goal: string;
  whatWasBuilt: string;
  features: string[];
  technologies: string[];
  designApproach: string;
  highlights: string[];
  outcome: string;
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
    projectType: "Concept Project",
    theme: "faishonfit",
    short: "A full storefront concept for a fashion brand — catalog, collections, cart and editorial content.",
    intro:
      "FaishonFit is a from-scratch e-commerce storefront built to demonstrate a complete retail experience: multi-category product browsing, a cart flow, editorial lookbook content and account pages, deployed on Vercel.",
    overview:
      "FaishonFit takes on the scope of a real fashion retailer's site rather than a single landing page — six product collections, individual product pages, a cart, an editorial lookbook section and supporting pages like size guides, FAQs and a returns policy. The goal was to build something that reads and behaves like a production storefront, not a static mockup.",
    goal:
      "Show what a genuinely complete fashion e-commerce experience looks like when built from scratch — not just a product grid, but the full set of pages a real store needs to run.",
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
    designApproach:
      "A contemporary, catalog-first layout was chosen over a heavy editorial style — clear product photography, consistent card grids and minimal chrome, so the products stay the focus across category and product pages.",
    highlights: [
      "Structured as a full multi-page storefront rather than a single template page",
      "Deployed on Vercel with route-based metadata for each page",
      "Content organized to mirror how a real fashion e-commerce catalog is structured",
    ],
    outcome:
      "A complete, responsive multi-page storefront — live and browsable end to end, from category to cart — used to demonstrate e-commerce build capability for prospective clients.",
    liveUrl: "https://faishonfit.vercel.app/",
    featured: true,
  },
  {
    slug: "techcorp",
    name: "TechCorp",
    category: "Business Website",
    projectType: "Concept Project",
    theme: "techcorp",
    short: "A corporate enterprise-solutions website with services, leadership and a working contact section.",
    intro:
      "TechCorp is a corporate business website built around a services-led structure: what the company offers, who leads it, and a clear way to get in touch — the kind of site a consulting or enterprise-solutions business needs.",
    overview:
      "The site is a single-page corporate layout built around anchor navigation — Home, About, Services, Leadership and Contact — designed to move a visitor from what the company does to how to reach them without unnecessary pages.",
    goal:
      "Demonstrate a clean, trustworthy corporate/consulting site structure — the kind of layout a B2B or enterprise-services business would use to explain its offerings and build credibility quickly.",
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
    designApproach:
      "A conservative, high-contrast corporate palette and grid-based sections were used deliberately — the goal was credibility and clarity over visual flair, matching how enterprise/consulting sites are typically expected to look.",
    highlights: [
      "Clean single-page structure built for a corporate/consulting audience",
      "Deployed as a static site on GitHub Pages",
      "Section layout designed for a clear service → team → contact flow",
    ],
    outcome:
      "A complete, single-page corporate site that reads clearly from services through to leadership and contact — used to demonstrate business/consulting site structure and static-site build skill.",
    liveUrl: "https://rb11dev.github.io/techcorp/",
    featured: true,
  },
  {
    slug: "haute-couture",
    name: "Haute Couture",
    category: "E-commerce",
    projectType: "Concept Project",
    theme: "haute-couture",
    short: "A luxury fashion storefront concept with collections, a cart drawer and a search overlay.",
    intro:
      "Haute Couture is a luxury e-commerce concept site — built to explore a higher-end retail experience with a cart drawer, search overlay and editorial styling, distinct from FaishonFit's more contemporary catalog approach.",
    overview:
      "The site presents a curated luxury catalog rather than a large inventory — signature collections, a small set of featured products, and an editorial 'philosophy' section — paired with interactive shopping UI: a slide-out cart and a search overlay, both built client-side.",
    goal:
      "Explore a different tier of e-commerce presentation than FaishonFit — fewer products, more editorial framing, and richer interactive shopping UI (cart drawer, search overlay) — to show range across retail styles.",
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
    designApproach:
      "A restrained, editorial layout was used — generous whitespace, muted tones and serif-leaning type cues — to match the tone of a luxury retail brand rather than a high-volume storefront.",
    highlights: [
      "Interactive cart and search overlays built without a framework",
      "Editorial tone and layout distinct from a standard product-grid template",
      "Deployed as a static site on GitHub Pages",
    ],
    outcome:
      "A polished luxury-retail concept site with working client-side cart and search interactions — used to demonstrate interactive UI work built without relying on a framework.",
    liveUrl: "https://rb11dev.github.io/Haute-couture/",
    featured: true,
  },
  {
    slug: "ricochet-nova",
    name: "Ricochet Nova",
    category: "Web Game",
    projectType: "Personal Project",
    theme: "ricochet-nova",
    short: "An original neon brick-breaking puzzle game, built with HTML5 Canvas — no game engine, no copied assets.",
    intro:
      "Ricochet Nova is a browser-based brick-breaking puzzle game: aim, ricochet a ball off the walls, and shatter numbered bricks before they reach the danger line — built entirely with HTML5 Canvas and JavaScript.",
    overview:
      "Unlike the storefront projects, Ricochet Nova is an interactive game — level mode with staged progression and boss levels, an endless mode, a daily challenge, and an in-game upgrade shop. Every visual is drawn procedurally with gradients and glow effects, and sound is synthesized live rather than using external audio files.",
    goal:
      "A personal project built purely to push front-end skills into a different domain — real-time physics, canvas rendering and game-state management — outside of typical client-site work.",
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
    designApproach:
      "A neon, dark-arcade visual language was built entirely in code — gradients, glow and particle-style effects drawn on canvas rather than imported art — to keep the whole game self-contained and lightweight.",
    highlights: [
      "All artwork generated procedurally in code — no image assets",
      "Sound effects synthesized live via code rather than audio files",
      "Full game state (progress, coins, settings) handled client-side",
    ],
    outcome:
      "A fully playable browser game with 100 levels, an endless mode and daily challenges — used as a personal showcase of front-end capability beyond standard business-website work.",
    liveUrl: "https://rb11dev.github.io/ricochet.nova1/",
    featured: true,
  },
  {
    slug: "elora",
    name: "Élora Café",
    category: "Hospitality Website",
    projectType: "Concept Project",
    theme: "elora",
    short: "A single-page concept site for a fictional New Delhi café — story, menu, gallery and reservations.",
    intro:
      "Élora Café is a hospitality-focused concept website built around a fictional New Delhi café brand — designed to show how a restaurant or café site can move a visitor from atmosphere to a table booking.",
    overview:
      "Rather than a generic restaurant template, Élora is built around a full brand narrative: a story section, a signature-dish spotlight, a three-part daily 'experience' timeline (morning, afternoon, evening), a photo gallery and a reservation form — the structure a real café's marketing site would need.",
    goal:
      "Show how a hospitality brand — a category with very different needs from e-commerce or corporate sites — can be presented: atmosphere and story first, booking as the clear next step.",
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
    designApproach:
      "A warm, editorial café aesthetic was used — story-led sections and a daily-experience timeline — rather than a generic menu-and-hours template, so the brand feels considered rather than boilerplate.",
    highlights: [
      "Animated count-up statistics built without a framework",
      "Full single-page hospitality site structure, not just a landing page",
      "Deployed as a static site on GitHub Pages",
    ],
    outcome:
      "A complete hospitality-site concept — story, menu, experience, gallery and reservation flow — used to demonstrate range into the restaurant/café sector alongside the retail and corporate projects.",
    liveUrl: "https://rb11dev.github.io/Elora/",
    featured: true,
  },
  {
    slug: "jainico",
    name: "Jainico",
    category: "Corporate Website",
    projectType: "Client Project",
    theme: "jainico",
    short: "A multi-page corporate site for an established metal pretreatment and specialty chemicals manufacturer.",
    intro:
      "Jainico is a corporate/industrial website built for a metal pretreatment and specialty chemicals manufacturer operating since 1965 — organizing a large product range, served industries and technical credentials into a clear, navigable site.",
    overview:
      "The site covers a genuinely large scope for a B2B manufacturer: six product families (degreasing, derusting, phosphating, conversion coating, passivation/sealers, additives) each with their own catalogue page, seven served industries, a technology/R&D section, a company timeline, three manufacturing locations, and quality certifications (ISO 9001, RoHS, REACH).",
    goal:
      "Present a decades-old industrial chemicals manufacturer's full product and technical range in a structure a technical buyer can navigate quickly — from an industry or product family straight to the relevant formulation.",
    whatWasBuilt:
      "A multi-page site with nested routes for each product family and industry (for example /products/phosphating, /industries/automotive), a company timeline, plant and location listings with full addresses, certification callouts, and a contact section routing enquiries to the company's real regional emails and phone number.",
    features: [
      "Six product-family catalogue pages, from degreasing through additives",
      "Seven industry-specific pages (automotive, appliances, aluminium finishing and more)",
      "Company timeline and multi-plant location listings",
      "Technology/R&D section explaining the pretreatment process",
      "Certification section (ISO 9001, RoHS, REACH)",
      "Contact page with region-based enquiry routing",
    ],
    technologies: ["Next.js", "React"],
    designApproach:
      "A restrained, technical-industrial visual language with clear data hierarchy was used throughout — built for a technical buyer evaluating chemistry specifications, not a consumer browsing audience.",
    highlights: [
      "Large information architecture (products × industries × technology) organized into a clear, browsable structure",
      "Deployed on Vercel with nested category and sub-category routing",
      "Built around the manufacturer's real locations, certifications and product range",
    ],
    outcome:
      "A complete, navigable corporate site covering the manufacturer's full product range, served industries and technical credentials — currently live at the linked deployment.",
    liveUrl: "https://jainico.vercel.app/",
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
