// ─── app/(marketing)/stickers/page.tsx ────────────────────────────────────────
// Dedicated product page for REVLIXI Sticker.
//
// Section expansion plan (later prompts will drop these in):
//   1. <StickerHero />     — placement photography, headline, variant selector, CTAs
//   2. <StickerVariants /> — pricing cards per SKU, quantity selector, CTA
//                            Data: content/products.ts → ProductFamily.variants
//   3. <StickerSpecs />    — icon list of key specs (adhesive type, weatherproof rating)
//                            Data: content/products.ts → ProductFamily.specs
//   4. <UseCaseCallout />  — filtered use cases for sticker (retail, restaurant tables)
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
  title: "REVLIXI Sticker — Adhesive NFC + QR Review Sticker",
  description:
    "A heavy-duty weatherproof NFC + QR review sticker that bonds to any surface. Stick it once, collect reviews forever. One-time purchase, free dashboard, no subscriptions.",
  path: "/stickers",
  keywords: [
    "NFC review sticker",
    "QR code review sticker",
    "Google review sticker",
    "weatherproof NFC sticker",
    "tap to review sticker",
    "review sticker for business",
  ],
});

const product = products.find((p) => p.id === "sticker")!;

export default function StickersPage() {
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
          TODO: Replace with <StickerHero product={product} /> once designed.
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
          TODO: Replace with <StickerVariants /> — pricing cards per SKU.
      ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── Specs placeholder ────────────────────────────────────────────────
          TODO: Replace with <StickerSpecs /> — adhesive type, surface compatibility.
      ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── Use case callout placeholder ─────────────────────────────────────
          TODO: Replace with <UseCaseCallout productId="sticker" />.
      ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── FAQ placeholder ──────────────────────────────────────────────────
          TODO: Replace with <ProductFaq /> — filtered or full FAQ accordion.
      ──────────────────────────────────────────────────────────────────────── */}
    </>
  );
}
