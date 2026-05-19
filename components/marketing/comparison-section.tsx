import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionShell } from "@/components/ui/section-shell";
import { comparisonRows } from "@/content/comparison";
import { products } from "@/content/products";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProductId } from "@/types";

const columns = products.map((p) => ({
  key:     p.id as ProductId,
  label:   p.name.replace("REVLIXI ", ""),
  href:    p.href,
  price:   p.price,
  popular: p.badge === "Most Popular",
}));

function CellValue({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <CheckCircle2
        className="mx-auto h-5 w-5 text-brand-500"
        aria-label="Included"
      />
    );
  if (value === false)
    return (
      <span className="text-neutral-300" aria-label="Not included">
        —
      </span>
    );
  return (
    <span className="text-sm text-neutral-700">{value}</span>
  );
}

export function ComparisonSection() {
  return (
    <SectionShell
      id="comparison"
      surface="subtle"
      eyebrow="Format comparison"
      heading="Three formats. One purpose."
      body="Every REVLIXI product captures reviews the same way — the format changes to fit how you work."
      contentGap="md"
    >
      {/* Mobile: stacked product cards (below md) */}
      <FadeIn className="md:hidden" delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-3">
            {columns.map((col) => (
              <div
                key={col.key}
                className={cn(
                  "rounded-2xl border bg-white p-5",
                  col.popular
                    ? "border-brand-200 ring-1 ring-brand-200/40"
                    : "border-neutral-200"
                )}
              >
                {col.popular && (
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-brand-500">
                    Most Popular
                  </p>
                )}
                <p
                  className={cn(
                    "text-base font-bold",
                    col.popular ? "text-brand-700" : "text-neutral-950"
                  )}
                >
                  {col.label}
                </p>
                <p
                  className={cn(
                    "mb-4 text-sm font-medium",
                    col.popular ? "text-brand-500" : "text-neutral-400"
                  )}
                >
                  {col.price}
                </p>
                <ul className="mb-5 flex flex-col gap-3">
                  {comparisonRows.map((row) => (
                    <li
                      key={row.feature}
                      className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-neutral-600">
                        {row.feature}
                      </span>
                      <CellValue value={row[col.key]} />
                    </li>
                  ))}
                </ul>
                <Button
                  size="sm"
                  variant={col.popular ? "gold" : "outline"}
                  asChild
                  className="w-full"
                >
                  <Link href={col.href} aria-label={`Shop REVLIXI ${col.label}`}>
                    Shop {col.label}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </FadeIn>

      {/* Desktop: full comparison table (md+) */}
      <FadeIn className="hidden md:block overflow-x-auto" delay={0.08}>
          <table
            className="w-full min-w-[560px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card"
            aria-label="REVLIXI product comparison"
          >
            {/* Column headers */}
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b border-neutral-200 px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.08em] text-neutral-400"
                >
                  Feature
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className={cn(
                      "border-b px-6 py-5 text-center",
                      col.popular
                        ? "border-brand-200 bg-brand-50"
                        : "border-neutral-200"
                    )}
                  >
                    {col.popular && (
                      <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-wide text-brand-500">
                        Most Popular
                      </span>
                    )}
                    <span
                      className={cn(
                        "block text-sm font-bold",
                        col.popular ? "text-brand-700" : "text-neutral-950"
                      )}
                    >
                      {col.label}
                    </span>
                    <span
                      className={cn(
                        "block text-xs font-medium",
                        col.popular ? "text-brand-500" : "text-neutral-400"
                      )}
                    >
                      {col.price}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={cn(
                    "transition-colors duration-[150ms] hover:bg-[rgba(20,184,196,0.035)]",
                    i === comparisonRows.length - 1 ? "" : "border-b border-neutral-100"
                  )}
                >
                  <td className="border-b border-neutral-100 px-6 py-4">
                    <span className="text-sm font-medium text-neutral-700">
                      {row.feature}
                    </span>
                    {row.note && (
                      <span className="ml-2 text-[10px] text-neutral-400">
                        ({row.note})
                      </span>
                    )}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={cn(
                        "border-b border-neutral-100 px-6 py-4 text-center",
                        col.popular && "bg-brand-50/40"
                      )}
                    >
                      <CellValue value={row[col.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            {/* CTA row */}
            <tfoot>
              <tr>
              <td className="rounded-bl-2xl px-6 py-5 text-sm font-medium text-neutral-400">
                Ready to choose?
              </td>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-6 py-5 text-center",
                      col.popular && "bg-brand-50/40",
                      col.key === "sticker" && "rounded-br-2xl"
                    )}
                  >
                    <Button
                      size="sm"
                      variant={col.popular ? "gold" : "outline"}
                      asChild
                    >
                      <Link href={col.href} aria-label={`Shop REVLIXI ${col.label}`}>
                        Shop {col.label}
                        <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </FadeIn>

      {/* Reassurance strip */}
      <FadeIn
        className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8"
        delay={0.14}
      >
          {[
            "All formats include a free link dashboard",
            "Update your redirect any time",
            "No subscription, ever",
          ].map((note) => (
            <span
              key={note}
              className="flex items-center gap-1.5 text-xs text-neutral-400"
            >
              <CheckCircle2
                className="h-3.5 w-3.5 shrink-0 text-brand-400"
                aria-hidden="true"
              />
              {note}
            </span>
          ))}
      </FadeIn>
    </SectionShell>
  );
}
