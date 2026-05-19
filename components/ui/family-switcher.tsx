"use client";

/**
 * FamilySwitcher — segmented tab control for the ProductShowcase section.
 *
 * Uses Framer Motion layoutId to animate a sliding white indicator pill
 * between tabs rather than abruptly swapping active styles. The sliding
 * effect communicates continuity: the same product family concept moves
 * across formats.
 *
 * Accessibility:
 *   • role="tablist" + role="tab" + aria-selected wiring
 *   • Focus ring using brand-500 — visible on both light and dark bg
 *   • Reduced-motion: layoutId transition collapses to instant swap
 *
 * @example
 * <FamilySwitcher
 *   tabs={FAMILY_TABS}
 *   activeId={activeId}
 *   onChange={setActiveId}
 *   className="w-full max-w-lg"
 * />
 */

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ease, duration as dur } from "@/components/motion/tokens";
import type { ProductId } from "@/types";

export interface FamilySwitcherTab {
  id:       ProductId;
  label:    string;   // "Stand Series"
  subtitle: string;   // "Counter-top stations"
}

export interface FamilySwitcherProps {
  tabs:      FamilySwitcherTab[];
  activeId:  ProductId;
  onChange:  (id: ProductId) => void;
  className?: string;
}

export function FamilySwitcher({
  tabs,
  activeId,
  onChange,
  className,
}: FamilySwitcherProps) {
  const reduce = useReducedMotion();

  return (
    <div
      role="tablist"
      aria-label="Product family"
      className={cn(
        "flex gap-1 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-1.5",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              // Layout
              "relative flex flex-1 flex-col items-center gap-0.5 rounded-[10px] px-2 py-3 text-center",
              // Smooth text-colour crossfade (CSS-only, no FM needed)
              "transition-colors duration-[200ms]",
              // Focus ring
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-50",
              isActive ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-700"
            )}
          >
            {/* Sliding white background indicator */}
            {isActive && (
              <motion.span
                layoutId="showcase-tab-bg"
                className="absolute inset-0 rounded-[10px] border border-neutral-200/80 bg-white shadow-card-sm"
                aria-hidden="true"
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: dur.base, ease: ease.out }
                }
              />
            )}

            {/* Primary label */}
            <span
              className={cn(
                "relative z-10 text-sm font-bold leading-none tracking-tight",
                isActive ? "text-brand-700" : "text-neutral-500"
              )}
            >
              {tab.label}
            </span>

            {/* Subtitle — hidden on xs to keep the pill compact */}
            <span
              className={cn(
                "relative z-10 hidden text-[11px] font-medium leading-none sm:block",
                isActive ? "text-neutral-500" : "text-neutral-400"
              )}
            >
              {tab.subtitle}
            </span>
          </button>
        );
      })}
    </div>
  );
}
