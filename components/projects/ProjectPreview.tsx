import { ShoppingBag, Building2, Gem, Gamepad2, Coffee } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const themeStyles: Record<Project["theme"], { gradient: string; icon: typeof ShoppingBag }> = {
  faishonfit: {
    gradient: "from-[#2a1f14] via-bg-elevated to-bg-elevated",
    icon: ShoppingBag,
  },
  techcorp: {
    gradient: "from-[#0f1f2e] via-bg-elevated to-bg-elevated",
    icon: Building2,
  },
  "haute-couture": {
    gradient: "from-[#241522] via-bg-elevated to-bg-elevated",
    icon: Gem,
  },
  "ricochet-nova": {
    gradient: "from-[#141033] via-bg-elevated to-bg-elevated",
    icon: Gamepad2,
  },
  elora: {
    gradient: "from-[#221a10] via-bg-elevated to-bg-elevated",
    icon: Coffee,
  },
};

// Not a screenshot — a stylized, per-project preview panel used where a real
// screenshot isn't available, so nothing here pretends to be captured UI.
export default function ProjectPreview({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const { gradient, icon: Icon } = themeStyles[project.theme];

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <Icon size={32} className="relative text-accent" strokeWidth={1.5} />
      <div className="relative text-center px-6">
        <p className="font-display text-2xl md:text-3xl tracking-tight">{project.name}</p>
        <p className="mt-1 text-xs text-muted-2">{project.category}</p>
      </div>
    </div>
  );
}
