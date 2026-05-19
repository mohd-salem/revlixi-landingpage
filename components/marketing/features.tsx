import {
  Zap,
  Repeat2,
  ShieldCheck,
  Globe,
  Smartphone,
  LayoutDashboard,
} from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionShell } from "@/components/ui/section-shell";
import { features } from "@/content/features";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zap: Zap,
  "repeat-2": Repeat2,
  "shield-check": ShieldCheck,
  globe: Globe,
  smartphone: Smartphone,
  "layout-dashboard": LayoutDashboard,
};

export function Features() {
  return (
    <SectionShell
      id="features"
      surface="neutral-dark"
      eyebrow="Built differently"
      heading="Everything that matters, nothing that doesn’t"
      body="One outcome: your customers tap once and leave a review. Every REVLIXI feature exists to make that outcome as reliable, frictionless, and permanent as possible."
      contentGap="lg"
    >
      <StaggerChildren
        className="grid gap-px rounded-2xl overflow-hidden bg-neutral-800/60 border border-neutral-800 sm:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.07}
      >
        {features.map((feature) => {
          const Icon = iconMap[feature.icon] ?? Zap;
          return (
            <StaggerItem key={feature.title}>
              <article className="group flex flex-col gap-4 bg-neutral-950 p-6 md:p-8 transition-colors duration-200 hover:bg-neutral-900">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 group-hover:border-brand-900/60 group-hover:bg-brand-950/30 transition-colors duration-200"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-400 text-pretty">
                    {feature.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </SectionShell>
  );
}
