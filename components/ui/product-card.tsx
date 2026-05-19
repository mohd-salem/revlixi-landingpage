import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RevlixiIcon } from "@/components/ui/revlixi-logo";
import { productIconMap } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

// ─── Public API ───────────────────────────────────────────────────────────────

export interface ProductCardProps {
  product:   Product;
  variant?:  "featured" | "standard";
  className?: string;
}

export function ProductCard({
  product,
  variant   = "standard",
  className,
}: ProductCardProps) {
  if (variant === "featured") {
    return <FeaturedCard product={product} className={className} />;
  }
  return <StandardCard product={product} className={className} />;
}

// ─── Feature checklist shared fragment ───────────────────────────────────────

function FeatureList({
  features,
  productName,
  cols = 1,
}: {
  features: string[];
  productName: string;
  cols?: 1 | 2;
}) {
  return (
    <ul
      className={cn(
        "flex flex-col gap-2.5",
        cols === 2 && "grid grid-cols-1 sm:grid-cols-2"
      )}
      aria-label={`${productName} features`}
    >
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <Check
            className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
            aria-hidden="true"
          />
          <span className="text-sm text-neutral-700">{f}</span>
        </li>
      ))}
    </ul>
  );
}

// ─── BestFor pill row shared fragment ─────────────────────────────────────────

function BestForPills({ uses }: { uses: string[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-neutral-400">
        Best for
      </p>
      <div className="flex flex-wrap gap-1.5">
        {uses.map((use) => (
          <span
            key={use}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600"
          >
            {use}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Featured card ────────────────────────────────────────────────────────────

function FeaturedCard({
  product,
  className,
}: {
  product:   Product;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "card-featured overflow-hidden",
        "transition-shadow duration-[200ms] ease-[cubic-bezier(0.21,0.47,0.32,0.98)]",
        "hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(20,184,196,0.28)]",
        className
      )}
      aria-label={product.name}
    >
      <div className="grid sm:grid-cols-[280px_1fr]">
        {/* Dark left panel — brand mark + identity */}
        <div className="relative flex flex-col items-center justify-center gap-5 bg-navy-900 px-8 py-10 sm:px-10 sm:py-12">
          {/* Radial teal ambient glow */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.brand.500/0.12)_0%,transparent_70%)]"
            aria-hidden="true"
          />

          <div
            className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-navy-700 bg-navy-800"
            aria-hidden="true"
          >
            <RevlixiIcon size={42} color="#14B8C4" />
          </div>

          <div className="relative z-10 text-center">
            <p className="text-lg font-extrabold tracking-tight text-white">
              {product.name}
            </p>
            <p className="mt-1 text-sm font-semibold text-brand-400">
              {product.tagline}
            </p>
          </div>

          {product.badge && (
            <div className="relative z-10">
              <Badge variant="gold" className="px-3 py-1 text-xs font-bold shadow">
                {product.badge}
              </Badge>
            </div>
          )}
        </div>

        {/* White right panel — features + CTA */}
        <div className="flex flex-col bg-white p-6 sm:p-8">
          <p className="mb-6 text-sm leading-relaxed text-neutral-500 text-pretty">
            {product.description}
          </p>

          <div className="mb-7 flex-1">
            <FeatureList
              features={product.features}
              productName={product.name}
              cols={2}
            />
          </div>

          <div className="mb-6">
            <BestForPills uses={product.bestFor} />
          </div>

          <div className="flex items-center justify-between border-t border-neutral-100 pt-6">
            <span className="text-2xl font-extrabold tracking-tight text-neutral-950">
              {product.price}
            </span>
            <Button variant="gold" asChild size="sm">
              <Link href={product.href} aria-label={`Get started with ${product.name}`}>
                Get started
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── Standard card ────────────────────────────────────────────────────────────

function StandardCard({
  product,
  className,
}: {
  product:   Product;
  className?: string;
}) {
  const Icon = productIconMap[product.icon];

  return (
    <article
      className={cn(
        "card-base",
        "relative flex h-full flex-col p-6 md:p-8",
        "hover:-translate-y-1.5 hover:shadow-card-lg active:scale-[0.99]",
        className
      )}
      aria-label={product.name}
    >
      {/* Header row */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-neutral-950">
            {product.name}
          </h3>
          <p className="mt-0.5 text-sm font-semibold text-brand-600">
            {product.tagline}
          </p>
        </div>
        <div
          className="icon-chip-light h-11 w-11 shrink-0"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5 text-neutral-500" />
        </div>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-neutral-500 text-pretty">
        {product.description}
      </p>

      <div className="mb-8 flex-1">
        <FeatureList features={product.features} productName={product.name} />
      </div>

      <div className="mb-6">
        <BestForPills uses={product.bestFor} />
      </div>

      <div className="flex items-center justify-between border-t border-neutral-100 pt-6">
        <span className="text-2xl font-extrabold tracking-tight text-neutral-950">
          {product.price}
        </span>
        <Button variant="default" asChild size="sm">
          <Link href={product.href} aria-label={`Get started with ${product.name}`}>
            Get started
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
