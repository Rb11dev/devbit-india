export type Service = {
  slug: string;
  title: string;
  icon: "Globe" | "ShoppingCart" | "Layout" | "Code2" | "RefreshCw" | "Wrench";
  short: string;
  description: string;
  features: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    icon: "Globe",
    short: "Professional websites that represent your business clearly online.",
    description:
      "A custom-built website that communicates what your business does, builds trust with visitors and makes it easy to get in touch — designed and coded from scratch around your brand.",
    features: [
      "Custom design matched to your brand",
      "Fast, responsive pages",
      "Clear navigation and structure",
      "Contact and enquiry forms",
      "SEO-friendly foundation",
    ],
    process: ["Discovery call", "Site map & content plan", "Design", "Development", "Launch"],
  },
  {
    slug: "ecommerce-websites",
    title: "E-commerce Websites",
    icon: "ShoppingCart",
    short: "Online stores built to showcase products and handle real transactions.",
    description:
      "A complete online store — product catalog, cart, checkout and order flow — built to be easy for customers to shop and simple for you to manage.",
    features: [
      "Product catalog & categories",
      "Cart and checkout flow",
      "Mobile-first shopping experience",
      "Secure payment integration",
      "Order and inventory structure",
    ],
    process: ["Discovery call", "Store structure & catalog planning", "Design", "Development", "Testing & launch"],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    icon: "Layout",
    short: "Focused, high-converting pages built around a single goal.",
    description:
      "A single-purpose page designed to convert — for a campaign, product launch or lead-generation goal, built for speed and clarity.",
    features: [
      "Conversion-focused layout",
      "Fast load times",
      "Clear single call-to-action",
      "Mobile optimized",
      "Analytics-ready structure",
    ],
    process: ["Goal & audience review", "Copy & layout plan", "Design", "Development", "Launch"],
  },
  {
    slug: "custom-web-projects",
    title: "Custom Web Projects",
    icon: "Code2",
    short: "Web applications and tools built around a specific requirement.",
    description:
      "For needs that don't fit a standard website — internal tools, dashboards, booking systems or other custom-built web applications.",
    features: [
      "Requirement-based architecture",
      "Custom UI components",
      "API and backend integration",
      "Scalable code structure",
      "Ongoing iteration support",
    ],
    process: ["Requirements discussion", "Technical planning", "Development", "Testing", "Deployment"],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    icon: "RefreshCw",
    short: "A rebuild of your existing site with modern design and code.",
    description:
      "Your current site is reviewed for design, performance and usability issues, then rebuilt with modern tools while keeping what already works.",
    features: [
      "Current site audit",
      "Updated visual design",
      "Improved performance",
      "Content migration",
      "Mobile responsiveness fixes",
    ],
    process: ["Audit existing site", "Redesign plan", "Design", "Rebuild", "Launch"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    icon: "Wrench",
    short: "Ongoing support to keep your site updated and running smoothly.",
    description:
      "Continued support after launch — content updates, fixes, small feature additions and general upkeep so the site keeps working as intended.",
    features: [
      "Content and copy updates",
      "Bug fixes",
      "Small feature additions",
      "Performance checks",
      "Direct communication for requests",
    ],
    process: ["Support request", "Review", "Implementation", "Confirmation"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
