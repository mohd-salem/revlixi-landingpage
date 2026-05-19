"use client";

/**
 * ProductShowcase — interactive tabbed product-family section.
 *
 * The primary product discovery surface on the homepage and category pages.
 * A segmented tab switcher drives a smooth AnimatePresence transition between
 * three product families. Each family panel shows:
 *
 *   LEFT  — family identity: series name, tagline, description, "why choose"
 *           checklist, and best-for business-type pills.
 *   RIGHT — one or more ShowcaseVariantCards with pack-size selection.
 *
 * An optional collapsible micro-comparison table below the panel lets users
 * see all three formats side-by-side for the five key attributes.
 *
 * Architecture:
 *   • Stateless beyond activeId + comparisonOpen
 *   • `families` prop defaults to `showcaseFamilies` so any page can override
 *   • `initialFamily` allows category pages to pre-select their format
 *   • `showComparison` hides the comparison table on focused category pages
 *
 * Motion system:
 *   • FamilySwitcher — layoutId sliding indicator (family-switcher.tsx)
 *   • Family panel   — AnimatePresence mode="wait" + x-axis fade
 *   • Icon chip      — ScaleIn on each panel mount
 *   • Variant cards  — StaggerChildren + StaggerItem
 *   • Comparison     — AnimatePresence height: 0 → "auto" reveal
 *
 * @example
 * // Homepage
 * <ProductShowcase />
 *
 * // Category page pre-selected on Card
 * <ProductShowcase initialFamily="card" showComparison={false} />
 */

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { FamilySwitcher } from "@/components/ui/family-switcher";
import { ShowcaseVariantCard } from "@/components/ui/showcase-variant-card";
import { FadeIn } from "@/components/motion/fade-in";
import { ScaleIn } from "@/components/motion/scale-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { ease, duration as dur } from "@/components/motion/tokens";
import { showcaseFamilies, showcaseComparisonRows } from "@/content/showcase";
import { productIconMap } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { ProductId, ShowcaseFamily } from "@/types";

// ─── Static tab config ────────────────────────────────────────────────────────
// Display metadata for each tab button. Order is intentional: Stand first
// because it's the flagship, Card second (highest volume SKU), Sticker third.

const FAMILY_TABS = [
  { id: "stand"   as const, label: "Stand Series",   subtitle: "Counter-top stations" },
  { id: "card"    as const, label: "Card Series",    subtitle: "Wallet-ready cards"   },
  { id: "sticker" as const, label: "Sticker Series", subtitle: "Peel-and-place"       },
] as const;

// ─── Column header labels for the micro-comparison ───────────────────────────

const COL_LABELS: Record<"stand" | "card" | "sticker", string> = {
  stand:   "Stand",
  card:    "Card",
  sticker: "Sticker",
};

// ─── Props ────────────────────────────────────────────────────────────────────

export interface ProductShowcaseProps {
  /** Override the default showcaseFamilies (e.g. to pass a single family on a category page) */
  families?:       ShowcaseFamily[];
  /** Pre-select a family tab — useful on /stands, /cards, /stickers pages */
  initialFamily?:  ProductId;
  /** Show the collapsible three-format comparison table. Default: true */
  showComparison?: boolean;
  className?:      string;
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ProductShowcase({
  families       = showcaseFamilies,
  initialFamily  = "stand",
  showComparison = true,
  className,
}: ProductShowcaseProps) {
  const [activeId, setActiveId]             = useState<ProductId>(initialFamily);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const reduce = useReducedMotion();

  const family    = families.find((f) => f.id === activeId) ?? families[0];
  const FamilyIcon = productIconMap[family.icon];

  // Only show tabs that are represented in the families prop
  const visibleTabs = FAMILY_TABS.filter((t) =>
    families.some((f) => f.id === t.id)
  );

  return (
    <section
      id="product-showcase"
      className={cn("section-padding bg-white", className)}
      aria-labelledby="showcase-heading"
    >
      <div className="container">

        {/* ── Section header ───────────────────────────────────────────── */}
        <FadeIn className="mb-8 sm:mb-10 text-center">
          <p className="eyebrow mb-3 text-brand-600">Product Showcase</p>
          <h2
            id="showcase-heading"
            className="section-heading text-display-sm sm:text-display-md text-neutral-950"
          >
            Find the format that fits your business
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-base sm:text-lg leading-relaxed text-neutral-500">
            All three collect the same five-star reviews. The format you choose
            depends on how your customers experience you.
          </p>
        </FadeIn>

        {/* ── Family switcher ──────────────────────────────────────────── */}
        <FadeIn delay={0.07} className="mb-10 sm:mb-12 flex justify-center">
          <FamilySwitcher
            tabs={visibleTabs}
            activeId={activeId}
            onChange={(id) => {
              setActiveId(id);
              // Close comparison when switching families so the layout reset
              // feels intentional rather than leaving stale open state.
              setComparisonOpen(false);
            }}
            className="w-full max-w-lg"
          />
        </FadeIn>

        {/* ── Animated family panel ────────────────────────────────────── */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: reduce ? 0 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduce ? 0 : 20 }}
            transition={{ duration: dur.base, ease: ease.out }}
          >
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">

              {/* ── Left: Family identity panel ──────────────────────── */}
              <div className="flex flex-col gap-6 sm:gap-8">

                {/* Series icon + name */}
                <ScaleIn className="flex items-center gap-4">
                  <div
                    className="icon-chip-brand h-12 w-12 sm:h-14 sm:w-14 shrink-0"
                    aria-hidden="true"
                  >
                    <FamilyIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-neutral-950">
                      {family.name}
                    </h3>
                    <p className="text-sm font-semibold text-brand-600">
                      {family.seriesTagline}
                    </p>
                  </div>
                </ScaleIn>

                {/* Series description */}
                <p className="text-base leading-relaxed text-neutral-600 text-pretty">
                  {family.description}
                </p>

                {/* Why choose — structured reasons */}
                <div>
                  <p className="eyebrow mb-4 text-neutral-400">
                    Why {family.name}
                  </p>
                  <ul className="flex flex-col gap-5" role="list">
                    {family.whyChoose.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100"
                          aria-hidden="true"
                        >
                          <Check className="h-3 w-3 text-brand-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            {item.headline}
                          </p>
                          <p className="mt-0.5 text-sm leading-relaxed text-neutral-500">
                            {item.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best-for business pills */}
                <div>
                  <p className="eyebrow mb-3 text-neutral-400">Best for</p>
                  <div className="flex flex-wrap gap-2">
                    {family.bestFor.map((biz) => (
                      <span
                        key={biz}
                        className="rounded-full border border-brand-200/80 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                      >
                        {biz}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right: Variant cards ──────────────────────────────── */}
              <StaggerChildren
                className="flex flex-col gap-5"
                staggerDelay={0.08}
              >
                {family.variants.map((variant) => (
                  <StaggerItem key={variant.id}>
                    <ShowcaseVariantCard variant={variant} />
                  </StaggerItem>
                ))}
              </StaggerChildren>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Micro comparison ─────────────────────────────────────────── */}
        {showComparison && (
          <div className="mt-12 sm:mt-16 border-t border-neutral-100 pt-8 sm:pt-10">

            {/* Toggle button */}
            <div className="flex justify-center">
              <button
                onClick={() => setComparisonOpen((v) => !v)}
                className={cn(
                  "flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50",
                  "px-5 py-2.5 text-sm font-semibold text-neutral-600",
                  "transition-colors duration-[200ms]",
                  "hover:border-neutral-300 hover:bg-white hover:text-neutral-950",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                )}
                aria-expanded={comparisonOpen}
                aria-controls="showcase-comparison"
              >
                Compare all three formats
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    comparisonOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Animated comparison table */}
            <AnimatePresence>
              {comparisonOpen && (
                <motion.div
                  id="showcase-comparison"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: dur.base, ease: ease.out }}
                  className="overflow-hidden"
                >
                  <div className="mt-8">
                    <MicroComparisonTable activeId={activeId} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )}
      </div>
    </section>
  );
}

// ─── Micro comparison table ───────────────────────────────────────────────────
// Internal component — not exported. Renders showcaseComparisonRows in a
// clean 4-column table with the active family column highlighted in brand-50.

function MicroComparisonTable({ activeId }: { activeId: ProductId }) {
  const cols = ["stand", "card", "sticker"] as const;

  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-card">
      <table
        className="w-full min-w-[520px] border-separate border-spacing-0"
        aria-label="Three-format comparison"
      >
        {/* Column headers */}
        <thead>
          <tr>
            <th
              scope="col"
              className="rounded-tl-2xl border-b border-neutral-100 px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400"
            >
              Feature
            </th>
            {cols.map((col, i) => {
              const isActive  = col === activeId;
              const isLast    = i === cols.length - 1;
              return (
                <th
                  key={col}
                  scope="col"
                  className={cn(
                    "border-b px-6 py-4 text-center text-sm font-bold",
                    isActive
                      ? "border-brand-200/70 bg-brand-50 text-brand-700"
                      : "border-neutral-100 text-neutral-700",
                    isLast && "rounded-tr-2xl"
                  )}
                >
                  {COL_LABELS[col]}
                  {isActive && (
                    <span className="ml-2 inline-block rounded-full bg-brand-500 px-1.5 py-px text-[9px] font-bold leading-none text-white">
                      viewing
                    </span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>

        {/* Data rows */}
        <tbody>
          {showcaseComparisonRows.map((row, rowIdx) => {
            const isLastRow = rowIdx === showcaseComparisonRows.length - 1;
            return (
              <tr key={row.attribute}>
                <td
                  className={cn(
                    "px-6 py-3.5 text-sm font-medium text-neutral-700",
                    !isLastRow && "border-b border-neutral-100",
                    isLastRow  && "rounded-bl-2xl"
                  )}
                >
                  {row.attribute}
                </td>
                {cols.map((col, colIdx) => {
                  const isActive  = col === activeId;
                  const isLastCol = colIdx === cols.length - 1;
                  return (
                    <td
                      key={col}
                      className={cn(
                        "px-6 py-3.5 text-center text-sm",
                        isActive
                          ? "bg-brand-50/60 font-semibold text-brand-700"
                          : "text-neutral-600",
                        !isLastRow && "border-b border-neutral-100",
                        isLastRow && isLastCol && "rounded-br-2xl"
                      )}
                    >
                      {row[col]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
