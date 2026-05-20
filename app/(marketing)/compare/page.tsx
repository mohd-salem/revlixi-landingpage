// ─── app/(marketing)/compare/page.tsx ─────────────────────────────────────────
// Comparison page showing Stand vs Card vs Sticker side by side.
//
// Section expansion plan (later prompts will drop these in):
//   1. <CompareHero />         — centered headline, product thumbnail trio row
//   2. <ComparisonTable />     — responsive feature table
//                                Desktop: standard 4-col table (feature + 3 products)
//                                Mobile:  vertical card per product, features stacked
//                                Data: content/comparison.ts → comparisonRows
//   3. <CompareProductCards /> — 3 CTA cards, one per product, linking to product pages
//   4. <ProductCta />          — dark strip CTA before footer
// ──────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { products } from "@/content/products";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "Compare REVLIXI Products — Stand vs Card vs Sticker",
  description:
    "Find the right REVLIXI product for your business. Compare the Stand, Card, and Sticker side by side across price, form factor, construction, and features.",
  path: "/compare",
  keywords: [
    "REVLIXI stand vs card vs sticker",
    "NFC Review System comparison",
    "best Google review tool for business",
    "compare review stands cards stickers",
  ],
});

export default function ComparePage() {
  return (
    <>
      <JsonLd schema={itemListSchema(products)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
        ])}
      />
      {/* ─── Header placeholder ───────────────────────────────────────────────
          TODO: Replace with <CompareHero /> — headline + product thumbnail row.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center gap-4 px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
          Compare
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          Which REVLIXI is right for you?
        </h1>
        <p className="max-w-xl text-lg text-neutral-500">
          All three products share the same core NFC + QR technology. The
          difference is where and how you deploy them.
        </p>
      </section>

      {/* ─── Comparison table placeholder ─────────────────────────────────────
          TODO: Replace with <ComparisonTable rows={comparisonRows} />.
          Import comparisonRows from @/content/comparison.
      ──────────────────────────────────────────────────────────────────────── */}

      {/* ─── Product CTA cards ────────────────────────────────────────────────
          TODO: Replace with <CompareProductCards /> — 3 cards, one per product.
      ──────────────────────────────────────────────────────────────────────── */}
      <section className="flex flex-wrap items-center justify-center gap-4 px-6 pb-24">
        {products.map((p) => (
          <Button key={p.id} size="xl" variant="outline" asChild>
            <Link href={p.href}>View {p.name}</Link>
          </Button>
        ))}
      </section>
    </>
  );
}
