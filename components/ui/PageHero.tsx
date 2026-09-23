import Reveal from "@/components/ui/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-border bg-grid">
      <div className="container-page py-20 md:py-28">
        <Reveal>
          {eyebrow && <p className="text-sm text-accent mb-4">{eyebrow}</p>}
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl">{title}</h1>
          {description && (
            <p className="mt-5 text-lg text-muted max-w-xl leading-relaxed">{description}</p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
