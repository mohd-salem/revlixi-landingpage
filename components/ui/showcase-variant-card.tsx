"use client";

/**
 * ShowcaseVariantCard — the core product card in the ProductShowcase system.
 *
 * Features:
 *   • Pack-size selector with interactive buttons and per-unit pricing
 *   • Use-case tags for context setting
 *   • Benefits checklist
 *   • CTA footer that reflects the selected pack size
 *
 * The pack selection state is local — selecting a pack updates the
 * displayed price and label in the footer without a round-trip.
 *
 * @example
 * <ShowcaseVariantCard variant={family.variants[0]} />
 */

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ShowcaseVariant, ShowcasePackSize } from "@/types";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function defaultPackIndex(packSizes: ShowcasePackSize[]): number {
  const popular = packSizes.findIndex((p) => p.badge === "Most Popular");
  return popular >= 0 ? popular : 0;
}

// ─── Component ────────────────────────────────────────────────────────────────

export interface ShowcaseVariantCardProps {
  variant:   ShowcaseVariant;
  className?: string;
}

export function ShowcaseVariantCard({
  variant,
  className,
}: ShowcaseVariantCardProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(
    () => defaultPackIndex(variant.packSizes)
  );

  const selectedPack = variant.packSizes[selectedIdx];

  return (
    <article
      className={cn("card-base flex h-full flex-col p-5 sm:p-7", className)}
      aria-label={variant.name}
    >
      {/* ─── Header ──────────────────────────────────────────────────── */}
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-extrabold tracking-tight text-neutral-950">
              {variant.name}
            </h3>
            {variant.badge && (
              <Badge variant="gold-subtle" className="text-[10px] font-bold">
                {variant.badge}
              </Badge>
            )}
          </div>
          <p className="mt-0.5 text-sm text-neutral-500">{variant.tagline}</p>
        </div>
      </div>

      {/* ─── Pack-size selector ──────────────────────────────────────── */}
      <div className="mb-6">
        <p className="eyebrow mb-2.5 text-neutral-400">Pack size</p>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Select pack size"
        >
          {variant.packSizes.map((pack, i) => {
            const isSelected = selectedIdx === i;
            return (
              <button
                key={i}
                onClick={() => setSelectedIdx(i)}
                aria-pressed={isSelected}
                className={cn(
                  "flex flex-col rounded-xl border px-3.5 py-2.5 text-left",
                  "transition-colors duration-[150ms]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                  isSelected
                    ? "border-brand-400 bg-brand-50"
                    : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/80"
                )}
              >
                <span
                  className={cn(
                    "text-xs font-bold leading-none",
                    isSelected ? "text-brand-700" : "text-neutral-700"
                  )}
                >
                  {pack.label}
                </span>

                <span
                  className={cn(
                    "mt-0.5 text-[11px] leading-none",
                    isSelected ? "text-brand-600" : "text-neutral-400"
                  )}
                >
                  {pack.price}
                </span>

                {pack.badge && (
                  <span
                    className={cn(
                      "mt-1 w-fit rounded-full px-1.5 py-px text-[9px] font-bold leading-none",
                      isSelected
                        ? "bg-brand-500 text-white"
                        : "bg-neutral-200 text-neutral-600"
                    )}
                    aria-label={pack.badge}
                  >
                    {pack.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {selectedPack.perUnit && (
          <p className="mt-2 text-[11px] text-neutral-400">
            {selectedPack.perUnit} per unit
          </p>
        )}
      </div>

      {/* ─── Use-case tags ───────────────────────────────────────────── */}
      <div className="mb-6">
        <p className="eyebrow mb-2.5 text-neutral-400">Perfect for</p>
        <div className="flex flex-wrap gap-1.5">
          {variant.useCaseTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Benefits checklist ──────────────────────────────────────── */}
      <ul
        className="mb-7 flex flex-1 flex-col gap-2.5"
        aria-label={`${variant.name} benefits`}
      >
        {variant.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
              aria-hidden="true"
            />
            <span className="text-sm leading-snug text-neutral-700">
              {benefit}
            </span>
          </li>
        ))}
      </ul>

      {/* ─── CTA footer ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between border-t border-neutral-100 pt-6">
        <div>
          <span className="text-2xl font-extrabold tracking-tight text-neutral-950">
            {selectedPack.price}
          </span>
          <span className="ml-1.5 text-xs text-neutral-400">
            {selectedPack.label}
          </span>
        </div>
        <Button
          variant="gold"
          asChild
          size="sm"
          className="cta-glow shrink-0"
        >
          <Link
            href={variant.href}
            aria-label={`Order ${variant.name} — ${selectedPack.label}`}
          >
            Order Now
            <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
