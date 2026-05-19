/**
 * StatCallout — large highlighted callout for a single key metric.
 *
 * Used in the GrowthSection ("287% median review growth within 60 days"),
 * potentially in the Hero stats bar, and anywhere a standalone data point
 * needs premium visual weight.
 *
 * Usage:
 *   <StatCallout
 *     icon={TrendingUp}
 *     stat="287% median review growth within 60 days"
 *     description="Based on active REVLIXI customers across all three hardware formats."
 *   />
 */

import { cn } from "@/lib/utils";

interface StatCalloutProps {
  icon?:        React.ComponentType<{ className?: string }>;
  stat:         string;
  description:  string;
  context?:     "light" | "dark";
  className?:   string;
}

export function StatCallout({
  icon: Icon,
  stat,
  description,
  context   = "light",
  className,
}: StatCalloutProps) {
  const isDark = context === "dark";

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-2xl px-8 py-7 sm:flex-row sm:gap-5",
        isDark
          ? "border border-brand-700/40 bg-brand-950/40"
          : "border border-brand-100 bg-brand-50",
        className
      )}
    >
      {Icon && (
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500"
          aria-hidden="true"
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
      )}

      <div className="text-center sm:text-left">
        <p
          className={cn(
            "text-xl font-extrabold tracking-tight",
            isDark ? "text-white" : "text-neutral-950"
          )}
        >
          {stat}
        </p>
        <p
          className={cn(
            "mt-0.5 text-sm",
            isDark ? "text-neutral-400" : "text-neutral-500"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
