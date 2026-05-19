import { X, CheckCircle2, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionShell } from "@/components/ui/section-shell";
import { StatCallout } from "@/components/ui/stat-callout";
import { growthBefore, growthAfter } from "@/content/growth";

export function GrowthSection() {
  return (
    <SectionShell
      id="growth"
      surface="white"
      eyebrow="Before and after"
      heading="What changes when friction disappears"
      body="Most businesses have great customers who would happily leave a review — they just never get around to it. REVLIXI closes that gap."
      contentGap="lg"
    >
      {/* Before / After panels */}
      <FadeIn className="grid gap-4 lg:grid-cols-2" delay={0.08}>
        {/* Before */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6 md:p-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-neutral-400">
            Before REVLIXI
          </p>
          <ul className="flex flex-col gap-4" role="list">
            {growthBefore.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-200"
                  aria-hidden="true"
                >
                  <X className="h-3 w-3 text-neutral-400" />
                </span>
                <span className="text-sm leading-relaxed text-neutral-500 text-pretty">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="rounded-2xl border border-brand-200/50 bg-brand-50/40 p-6 md:p-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-brand-600">
            After REVLIXI
          </p>
          <ul className="flex flex-col gap-4" role="list">
            {growthAfter.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium leading-relaxed text-neutral-800 text-pretty">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      {/* Stat callout */}
      <FadeIn delay={0.14}>
        <StatCallout
          icon={TrendingUp}
          stat="287% median review growth within 60 days"
          description="Based on active REVLIXI customers across all three hardware formats."
          className="mt-8"
        />
      </FadeIn>
    </SectionShell>
  );
}
