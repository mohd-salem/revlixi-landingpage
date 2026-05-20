// ─── content/comparison.ts ────────────────────────────────────────────────────
// Feature-by-feature comparison of all three REVLIXI products.
// Used by the /compare page and any inline comparison component.
// ──────────────────────────────────────────────────────────────────────────────

import type { ComparisonRow } from "@/types";

export const comparisonRows: ComparisonRow[] = [
  {
    feature: "Starting price",
    stand:   "$25+",
    card:    "$23+",
    sticker: "$19+",
  },
  {
    feature: "Form factor",
    stand:   "Countertop display stand",
    card:    "Wallet-sized card",
    sticker: "Surface adhesive",
  },
  {
    feature: "Ideal placement",
    stand:   "Reception desk, checkout counter",
    card:    "Hand off in person",
    sticker: "Window, door, equipment",
  },
  {
    feature: "NFC tap-to-review",
    stand:   true,
    card:    true,
    sticker: true,
  },
  {
    feature: "QR code scan",
    stand:   true,
    card:    true,
    sticker: true,
  },
  {
    feature: "Works without an app",
    stand:   true,
    card:    true,
    sticker: true,
  },
  {
    feature: "Universal phone support",
    stand:   true,
    card:    true,
    sticker: true,
  },
  {
    feature: "Free link dashboard",
    stand:   true,
    card:    true,
    sticker: true,
  },
  {
    feature: "Update redirect any time",
    stand:   true,
    card:    true,
    sticker: true,
  },
  {
    feature: "Construction",
    stand:   "Durable acrylic",
    card:    "PVC",
    sticker: "Weatherproof vinyl",
  },
  {
    feature: "One-time purchase",
    stand:   true,
    card:    true,
    sticker: true,
    note:    "No subscription or recurring fees ever",
  },
  {
    feature: "12-month warranty",
    stand:   true,
    card:    true,
    sticker: true,
  },
];
