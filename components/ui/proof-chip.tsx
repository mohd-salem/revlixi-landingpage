/**
 * ProofChip — single stat/proof display unit.
 *
 * Used in the ProofRibbon (horizontal band of 5 stats) and anywhere else a
 * value + label + optional sublabel needs to be displayed consistently.
 *
 * Usage:
 *   <ProofChip value="4.9 ★" label="Average rating" sublabel="Google verified" />
 *   <ProofChip value="287%" label="Review growth" context="dark" divider />
 *
 * Rendered as <dl> semantics (pass as children of a <dl> wrapper).
 */

import { cn } from "@/lib/utils";

type ProofChipContext = "light" | "dark";

interface ProofChipProps {
  value:     string;
  label:     string;
  sublabel?: string;
  context?:  ProofChipContext;
  /** Show a left border divider (for ribbon-style horizontal lists, md+) */
  divider?:  boolean;
  className?: string;
}

export function ProofChip({
  value,
  label,
  sublabel,
  context  = "light",
  divider  = false,
  className,
}: ProofChipProps) {
  const isDark = context === "dark";

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        divider && (
          isDark
            ? "md:border-l md:border-navy-700/60"
            : "md:border-l md:border-neutral-100"
        ),
        className
      )}
    >
      <dt
        className={cn(
          "text-2xl font-extrabold tracking-tight md:text-[1.75rem]",
          isDark ? "text-white" : "text-neutral-950"
        )}
      >
        {value}
      </dt>

      <dd
        className={cn(
          "mt-1 text-xs font-semibold uppercase tracking-[0.08em]",
          isDark ? "text-neutral-400" : "text-neutral-500"
        )}
      >
        {label}
      </dd>

      {sublabel && (
        <dd
          className={cn(
            "mt-0.5 text-[10px] leading-snug",
            isDark ? "text-neutral-500" : "text-neutral-400"
          )}
        >
          {sublabel}
        </dd>
      )}
    </div>
  );
}
