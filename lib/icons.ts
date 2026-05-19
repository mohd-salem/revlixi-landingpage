// ─── lib/icons.ts ─────────────────────────────────────────────────────────────
// Shared icon resolver for the ProductIcon string union → Lucide component.
//
// Both ProductCard and ProductShowcase render product icons; keeping the map
// here prevents the two files from going out of sync when new ProductIcon
// values are added to types/index.ts.
//
// Usage:
//   const Icon = productIconMap[product.icon];
//   <Icon className="h-5 w-5 text-brand-400" />
// ──────────────────────────────────────────────────────────────────────────────

import { Monitor, CreditCard, Layers } from "lucide-react";
import type { ProductIcon } from "@/types";

export const productIconMap: Record<
  ProductIcon,
  React.ComponentType<{ className?: string }>
> = {
  monitor:       Monitor,
  "credit-card": CreditCard,
  sticker:       Layers,
};
