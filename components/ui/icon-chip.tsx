/**
 * IconChip — standardized icon container with size and context variants.
 *
 * Usage:
 *   <IconChip icon={Wifi} context="dark" size="md" aria-hidden />
 *   <IconChip icon={CheckCircle2} context="brand" size="sm" aria-label="Verified" />
 *
 * Sizes:  sm (h-8 w-8 / icon h-4 w-4)
 *         md (h-11 w-11 / icon h-5 w-5)  ← default
 *         lg (h-14 w-14 / icon h-6 w-6)
 *
 * Contexts:
 *   light — neutral-50 bg, neutral-100 border, neutral-500 icon
 *   brand — brand-50 bg,   brand-200 border,   brand-600 icon
 *   dark  — navy-900 bg,   navy-600 border,    brand-400 icon
 */

import { cn } from "@/lib/utils";

type IconChipSize    = "sm" | "md" | "lg";
type IconChipContext = "light" | "brand" | "dark";

const sizeMap: Record<IconChipSize, { container: string; icon: string }> = {
  sm: { container: "h-8  w-8",  icon: "h-4 w-4" },
  md: { container: "h-11 w-11", icon: "h-5 w-5" },
  lg: { container: "h-14 w-14", icon: "h-6 w-6" },
};

const contextMap: Record<IconChipContext, { container: string; icon: string }> = {
  light: { container: "icon-chip-light", icon: "text-neutral-500" },
  brand: { container: "icon-chip-brand", icon: "text-brand-600"   },
  dark:  { container: "icon-chip-dark",  icon: "text-brand-400"   },
};

interface IconChipProps {
  icon: React.ComponentType<{ className?: string }>;
  size?:    IconChipSize;
  context?: IconChipContext;
  className?: string;
  /** Pass true for decorative icons, or a descriptive string for meaningful ones */
  "aria-hidden"?: boolean | "true" | "false";
  "aria-label"?:  string;
}

export function IconChip({
  icon: Icon,
  size    = "md",
  context = "light",
  className,
  "aria-hidden": ariaHidden,
  "aria-label":  ariaLabel,
}: IconChipProps) {
  const s = sizeMap[size];
  const c = contextMap[context];

  return (
    <div
      className={cn(s.container, c.container, className)}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      <Icon className={cn(s.icon, c.icon)} />
    </div>
  );
}
