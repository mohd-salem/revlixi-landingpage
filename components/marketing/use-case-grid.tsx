import Link from "next/link";
import {
  UtensilsCrossed,
  HardHat,
  Scissors,
  ShoppingBag,
  Stethoscope,
  Home,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionShell } from "@/components/ui/section-shell";
import { products } from "@/content/products";
import { useCases } from "@/content/use-cases";
import { cn } from "@/lib/utils";
import type { ProductId } from "@/types";

type UseCaseIconKey =
  | "utensils"
  | "hard-hat"
  | "scissors"
  | "shopping-bag"
  | "stethoscope"
  | "home";

const iconMap: Record<UseCaseIconKey, LucideIcon> = {
  utensils:       UtensilsCrossed,
  "hard-hat":     HardHat,
  scissors:       Scissors,
  "shopping-bag": ShoppingBag,
  stethoscope:    Stethoscope,
  home:           Home,
};

const productMeta = Object.fromEntries(
  products.map((p) => [p.id, { label: p.name, href: p.href }])
) as Record<ProductId, { label: string; href: string }>;

export function UseCaseGrid() {
  return (
    <SectionShell
      id="use-cases"
      surface="dark"
      eyebrow="Built for your business"
      heading="Every business that earns its reputation"
      body="Whether you serve customers face-to-face or door-to-door, REVLIXI fits naturally into how you already operate."
      contentGap="lg"
    >
      <StaggerChildren
        className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.07}
      >
          {useCases.map((useCase) => {
            const Icon =
              iconMap[useCase.icon as UseCaseIconKey] ?? HardHat;
            const meta = productMeta[useCase.recommendedProductId];

            return (
              <StaggerItem key={useCase.id}>
                <article className="group flex h-full flex-col gap-4 rounded-2xl border border-navy-700/60 bg-navy-800/50 p-5 sm:p-7 transition-all duration-300 hover:border-brand-700/50 hover:bg-navy-800">
                  {/* Icon */}
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-600 bg-navy-900 transition-colors group-hover:border-brand-800/60 group-hover:bg-brand-950/40"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-brand-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-neutral-500">
                      {useCase.label}
                    </p>
                    <h3 className="mb-2 text-sm font-bold leading-snug text-white">
                      {useCase.headline}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-400 text-pretty">
                      {useCase.description}
                    </p>
                  </div>

                  {/* Recommended product + link */}
                  <div className="flex items-center justify-between border-t border-navy-700/50 pt-4">
                    <span className="rounded-full border border-brand-700/50 bg-brand-950/60 px-2.5 py-0.5 text-[10px] font-semibold text-brand-300">
                      {meta?.label}
                    </span>
                    {meta && (
                      <Link
                        href={meta.href}
                        className={cn(
                          "flex items-center gap-1 text-[11px] font-semibold text-brand-400",
                          "hover:text-brand-300 transition-colors"
                        )}
                        aria-label={`Explore ${meta.label}`}
                      >
                        Explore
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
      </StaggerChildren>
    </SectionShell>
  );
}
