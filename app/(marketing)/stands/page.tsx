// ─── app/(marketing)/stands/page.tsx ──────────────────────────────────────────
// Dedicated product page for REVLIXI Stand.
//
// Section expansion plan (later prompts will drop these in):
//   1. <StandHero />       — full-bleed product shot, headline, variant selector,
//                            trust badge row, anchor to #stand-specs
//   2. <StandVariants />   — pricing cards per SKU, quantity selector, CTA
//                            Data: content/products.ts → ProductFamily.variants
//   3. <StandSpecs />      — icon list of key specs and material callouts
//                            Data: content/products.ts → ProductFamily.specs
//   4. <UseCaseCallout />  — filtered use cases for stand (restaurant, salon, healthcare)
//                            Data: content/use-cases.ts
//   5. <ProductFaq />      — product-specific FAQ accordion
//                            Data: content/faq.ts
//   6. <ProductCta />      — dark strip CTA before footer
// ──────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { products } from "@/content/products";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { productSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "REVLIXI Stand — Countertop NFC + QR Review Stand",
  description:
    "A premium countertop NFC + QR review stand built for high-traffic businesses. Tap-to-review in under one second. One-time purchase, free dashboard, 12-month warranty.",
  path: "/stands",
  keywords: [
    "NFC review stand",
    "countertop Google review stand",
    "QR review stand for business",
    "tap to review stand",
    "review stand restaurant",
    "review stand salon",
  ],
});

const product = products.find((p) => p.id === "stand")!;

export default function StandsPage() {
  return (
    <>
      <JsonLd schema={productSchema(product)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: product.name, href: product.href },
        ])}
      />
      {/* ─── Hero placeholder ─────────────────────────────────────────────────
          TODO: Replace with <StandHero product={product} /> once designed.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
          Product
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
          {product.name}
        </h1>
        <p className="max-w-xl text-lg text-neutral-500">{product.tagline}</p>
        <p className="max-w-xl text-base text-neutral-500">
          {product.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="xl" variant="gold" asChild>
            <Link href="#">Shop Now — {product.price}</Link>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <Link href="/compare">Compare all products</Link>
          </Button>
        </div>
      </section>

      {/* ─── Variants placeholder ─────────────────────────────────────────────
          TODO: Replace with <StandVariants /> — pricing cards per SKU.
      ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── Specs placeholder ────────────────────────────────────────────────
          TODO: Replace with <StandSpecs /> — icon spec list + material callouts.
      ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── Use case callout placeholder ─────────────────────────────────────
          TODO: Replace with <UseCaseCallout productId="stand" />.
      ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── FAQ placeholder ──────────────────────────────────────────────────
          TODO: Replace with <ProductFaq /> — filtered or full FAQ accordion.
      ──────────────────────────────────────────────────────────────────────── */}
    </>
  );
}
