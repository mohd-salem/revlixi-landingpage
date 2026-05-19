"use client";

// ─── components/marketing/shop-section.tsx ────────────────────────────────────
// Interactive "Shop on Amazon" section. Displays the full REVLIXI product
// catalog — all active SKUs with real Amazon prices, per-unit math, and
// direct Buy on Amazon links. Out-of-stock items are shown with a disabled
// state and a "Notify me on Amazon" link.
//
// Layout:
//   • Product type tabs: Stand | Card | Sticker
//   • Colour toggle: Black | White
//   • Pack grid: each card shows price, per-unit, badge, and CTA button
// ──────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import {
  Monitor,
  CreditCard,
  Layers,
  ShoppingCart,
  Bell,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionShell } from "@/components/ui/section-shell";
import { catalog } from "@/content/catalog";
import type { CatalogColor, CatalogProductType, CatalogVariant } from "@/types";

// ─── Icon resolver ────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  monitor:       Monitor,
  "credit-card": CreditCard,
  sticker:       Layers,
};

// ─── Badge colour tokens ──────────────────────────────────────────────────────

const BADGE_TOKENS: Record<string, string> = {
  "Best Seller":  "bg-amber-50   text-amber-700   border-amber-200",
  "Most Popular": "bg-brand-50   text-brand-700   border-brand-200",
  "Best Value":   "bg-emerald-50 text-emerald-700 border-emerald-200",
};

// ─── PackCard ─────────────────────────────────────────────────────────────────

function PackCard({ variant }: { variant: CatalogVariant }) {
  const isOOS = variant.status === "out-of-stock";

  return (
    <article
      className={cn(
        "relative flex flex-col gap-4 rounded-2xl border p-4 sm:p-5 transition-all duration-200",
        isOOS
          ? "border-neutral-200 bg-neutral-50/80"
          : variant.badge
          ? "border-brand-200/60 bg-white shadow-card hover:shadow-card-md hover:-translate-y-0.5"
          : "border-neutral-200 bg-white shadow-card hover:shadow-card-md hover:border-brand-200/60 hover:-translate-y-0.5"
      )}
    >
      {/* Badge */}
      {variant.badge && (
        <span
          className={cn(
            "absolute -top-2.5 left-3.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
            BADGE_TOKENS[variant.badge] ?? "bg-neutral-100 text-neutral-600 border-neutral-200"
          )}
        >
          {variant.badge}
        </span>
      )}

      {/* Price block */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-400">
          {variant.packLabel}
        </p>
        <p
          className={cn(
            "mt-1 text-[1.65rem] font-extrabold leading-none tracking-tight",
            isOOS ? "text-neutral-400" : "text-neutral-950"
          )}
        >
          {variant.priceDisplay}
        </p>
        <p className="mt-1 text-xs text-neutral-400">{variant.perUnit}</p>
      </div>

      {/* Feature list */}
      <ul className="flex flex-col gap-1.5" aria-label="What's included">
        {["Dual NFC + QR", "Free dashboard", "FBA shipping"].map((f) => (
          <li
            key={f}
            className={cn(
              "flex items-center gap-1.5 text-[11px]",
              isOOS ? "text-neutral-400" : "text-neutral-500"
            )}
          >
            <Check
              className={cn("h-3 w-3 shrink-0", isOOS ? "text-neutral-300" : "text-brand-500")}
              aria-hidden="true"
            />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      {isOOS ? (
        <div className="mt-auto flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            Out of Stock
          </span>
          <a
            href={variant.amazonURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-neutral-300 bg-white px-3 py-2.5 text-xs font-semibold text-neutral-500 transition-colors hover:bg-neutral-50"
            aria-label={`${variant.packLabel} is out of stock — get notified on Amazon`}
          >
            <Bell className="h-3 w-3" aria-hidden="true" />
            Notify me on Amazon
          </a>
        </div>
      ) : (
        <a
          href={variant.amazonURL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-[#FF9900] px-4 py-2.5 text-sm font-bold text-neutral-900 transition-all hover:bg-[#e8a000] active:scale-[0.98]"
          aria-label={`Buy ${variant.packLabel} for ${variant.priceDisplay} on Amazon`}
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          Buy on Amazon
        </a>
      )}
    </article>
  );
}

// ─── ShopSection ─────────────────────────────────────────────────────────────

export function ShopSection() {
  const [activeType, setActiveType]   = useState<CatalogProductType>("stand");
  const [activeColor, setActiveColor] = useState<CatalogColor>("black");

  const activeProduct = catalog.find((p) => p.type === activeType) ?? catalog[0];
  const ProductIcon   = ICON_MAP[activeProduct.icon] ?? Monitor;
  const packs         = activeProduct.colorVariants[activeColor] ?? [];

  // Determine the grid column count: up to 5 for stands, 3 for cards/stickers
  const colClass =
    packs.length >= 5
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      : packs.length === 4
      ? "grid-cols-2 sm:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3";

  function handleTypeChange(type: CatalogProductType) {
    setActiveType(type);
    const product = catalog.find((p) => p.type === type);
    if (!product) return;
    // Default to Black if it has any active stock, otherwise White
    const blackHasActive = product.colorVariants.black.some((v) => v.status === "active");
    setActiveColor(blackHasActive ? "black" : "white");
  }

  return (
    <SectionShell
      id="shop"
      surface="subtle"
      eyebrow="Shop on Amazon"
      heading="Choose your format and pack size"
      body="Every REVLIXI includes dual NFC + QR capture, a free link management dashboard, and ships via Amazon FBA. Pick the format that fits your business."
      contentGap="lg"
    >
      <div className="space-y-6">

        {/* ── Product type tabs ── */}
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Product type"
        >
          {catalog.map((product) => {
            const TabIcon = ICON_MAP[product.icon] ?? Monitor;
            const isActive = product.type === activeType;
            return (
              <button
                key={product.type}
                role="tab"
                aria-selected={isActive}
                aria-controls={`shop-panel-${product.type}`}
                onClick={() => handleTypeChange(product.type)}
                className={cn(
                  "flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-150",
                  isActive
                    ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-brand-300 hover:text-neutral-900"
                )}
              >
                <TabIcon className="h-4 w-4" aria-hidden="true" />
                {product.label}
              </button>
            );
          })}
        </div>

        {/* ── Active product panel ── */}
        <div
          id={`shop-panel-${activeType}`}
          role="tabpanel"
          aria-label={`${activeProduct.label} variants`}
          className="space-y-5"
        >
          {/* Description + colour toggle row */}
          <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="flex items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50"
                aria-hidden="true"
              >
                <ProductIcon className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-950">
                  {activeProduct.tagline}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-neutral-500 text-pretty max-w-sm">
                  {activeProduct.description}
                </p>
              </div>
            </div>

            {/* Colour toggle */}
            <div
              className="flex shrink-0 gap-1 rounded-xl border border-neutral-200 bg-neutral-50 p-1"
              role="group"
              aria-label="Colour"
            >
              {(["black", "white"] as const).map((color) => {
                const allOOS = (activeProduct.colorVariants[color] ?? []).every(
                  (v) => v.status === "out-of-stock"
                );
                return (
                  <button
                    key={color}
                    onClick={() => setActiveColor(color)}
                    aria-pressed={activeColor === color}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-150",
                      activeColor === color
                        ? "bg-neutral-900 text-white shadow-sm"
                        : "text-neutral-500 hover:text-neutral-900"
                    )}
                  >
                    <span
                      className={cn(
                        "h-3 w-3 rounded-full border",
                        color === "black"
                          ? "bg-neutral-900 border-neutral-600"
                          : "bg-white border-neutral-300 shadow-sm"
                      )}
                      aria-hidden="true"
                    />
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                    {allOOS && (
                      <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" aria-label="currently out of stock" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pack grid */}
          {packs.length > 0 ? (
            <div className={cn("grid gap-3 pt-2", colClass)}>
              {packs.map((variant) => (
                <PackCard key={variant.asin} variant={variant} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-neutral-300 py-10 text-sm text-neutral-400">
              No variants available in this colour.
            </div>
          )}

          {/* Amazon trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 pt-1">
            {[
              "Fulfilled by Amazon (FBA)",
              "Free returns on eligible items",
              "Sold by REVLIXI",
            ].map((note) => (
              <span
                key={note}
                className="flex items-center gap-1.5 text-[11px] text-neutral-400"
              >
                <Check className="h-3 w-3 shrink-0 text-brand-400" aria-hidden="true" />
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
