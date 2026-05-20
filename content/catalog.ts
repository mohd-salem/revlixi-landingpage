// ─── content/catalog.ts ───────────────────────────────────────────────────────
// Full REVLIXI Amazon product catalog — 2 stand models + card + sticker,
// 2 colours, all packs.
//
// Stand models:
//   stand-classic  — Original series. Black 2-pack promoted as "1+1 FREE".
//   stand-new      — New series. Standard 2 / 3 / 5 / 10-pack.
//
// Rules applied:
//   • Out-of-stock listings are included with status: "out-of-stock" so the
//     UI shows a "Notify me on Amazon" CTA.
//   • All Amazon URLs include ?ref=revlixi_lp for landing-page attribution.
//
// Data last verified: 2026-05-20
// ──────────────────────────────────────────────────────────────────────────────

import type { CatalogProduct, CatalogVariant } from "@/types";

const ref = "?ref=revlixi_lp";
const amz = (asin: string): string => `https://www.amazon.com/dp/${asin}${ref}`;

// ─── Classic Stand variants ───────────────────────────────────────────────────
// Original series — the flagship "1+1 Free" 2-pack deal.

const classicStandBlack: CatalogVariant[] = [
  {
    asin: "B0DPDFMLT8", amazonURL: amz("B0DPDFMLT8"),
    qty: 2, packLabel: "1 + 1 Free",
    price: 29.99, priceDisplay: "$29.99", perUnit: "$14.99 each",
    color: "black", status: "active", badge: "Best Seller",
  },
  {
    asin: "B0GK57LQ5F", amazonURL: amz("B0GK57LQ5F"),
    qty: 3, packLabel: "3-Pack",
    price: 35.99, priceDisplay: "$35.99", perUnit: "$12.00 each",
    color: "black", status: "active",
  },
  {
    asin: "B0GKK8CZJG", amazonURL: amz("B0GKK8CZJG"),
    qty: 5, packLabel: "5-Pack",
    price: 59.99, priceDisplay: "$59.99", perUnit: "$12.00 each",
    color: "black", status: "active",
  },
  {
    asin: "B0GKLP6M5H", amazonURL: amz("B0GKLP6M5H"),
    qty: 10, packLabel: "10-Pack",
    price: 99.99, priceDisplay: "$99.99", perUnit: "$10.00 each",
    color: "black", status: "active", badge: "Best Value",
  },
];

const classicStandWhite: CatalogVariant[] = [
  {
    asin: "B0FDX2YJBZ", amazonURL: amz("B0FDX2YJBZ"),
    qty: 2, packLabel: "1 + 1 Free",
    price: 25.90, priceDisplay: "$25.90", perUnit: "$12.95 each",
    color: "white", status: "active", badge: "Best Seller",
  },
  {
    asin: "B0GKCWTY7V", amazonURL: amz("B0GKCWTY7V"),
    qty: 3, packLabel: "3-Pack",
    price: 35.99, priceDisplay: "$35.99", perUnit: "$12.00 each",
    color: "white", status: "active",
  },
  {
    asin: "B0GKJB7PSN", amazonURL: amz("B0GKJB7PSN"),
    qty: 5, packLabel: "5-Pack",
    price: 59.99, priceDisplay: "$59.99", perUnit: "$12.00 each",
    color: "white", status: "active",
  },
  {
    asin: "B0GKJ5NQ3M", amazonURL: amz("B0GKJ5NQ3M"),
    qty: 10, packLabel: "10-Pack",
    price: 99.99, priceDisplay: "$99.99", perUnit: "$10.00 each",
    color: "white", status: "active", badge: "Best Value",
  },
];

// ─── New Stand variants ───────────────────────────────────────────────────────
// New series — standard 2 / 3 / 5 / 10-pack.

const newStandBlack: CatalogVariant[] = [
  {
    asin: "B0GK54LRZW", amazonURL: amz("B0GK54LRZW"),
    qty: 2, packLabel: "2-Pack",
    price: 25.99, priceDisplay: "$25.99", perUnit: "$13.00 each",
    color: "black", status: "active", badge: "Most Popular",
  },
  {
    asin: "B0GK57LQ5F", amazonURL: amz("B0GK57LQ5F"),
    qty: 3, packLabel: "3-Pack",
    price: 35.99, priceDisplay: "$35.99", perUnit: "$12.00 each",
    color: "black", status: "active",
  },
  {
    asin: "B0GKK8CZJG", amazonURL: amz("B0GKK8CZJG"),
    qty: 5, packLabel: "5-Pack",
    price: 59.99, priceDisplay: "$59.99", perUnit: "$12.00 each",
    color: "black", status: "active",
  },
  {
    asin: "B0GKLP6M5H", amazonURL: amz("B0GKLP6M5H"),
    qty: 10, packLabel: "10-Pack",
    price: 99.99, priceDisplay: "$99.99", perUnit: "$10.00 each",
    color: "black", status: "active", badge: "Best Value",
  },
];

const newStandWhite: CatalogVariant[] = [
  {
    asin: "B0GKC61JVM", amazonURL: amz("B0GKC61JVM"),
    qty: 2, packLabel: "2-Pack",
    price: 25.99, priceDisplay: "$25.99", perUnit: "$13.00 each",
    color: "white", status: "active", badge: "Most Popular",
  },
  {
    asin: "B0GKCWTY7V", amazonURL: amz("B0GKCWTY7V"),
    qty: 3, packLabel: "3-Pack",
    price: 35.99, priceDisplay: "$35.99", perUnit: "$12.00 each",
    color: "white", status: "active",
  },
  {
    asin: "B0GKJB7PSN", amazonURL: amz("B0GKJB7PSN"),
    qty: 5, packLabel: "5-Pack",
    price: 59.99, priceDisplay: "$59.99", perUnit: "$12.00 each",
    color: "white", status: "active",
  },
  {
    asin: "B0GKJ5NQ3M", amazonURL: amz("B0GKJ5NQ3M"),
    qty: 10, packLabel: "10-Pack",
    price: 99.99, priceDisplay: "$99.99", perUnit: "$10.00 each",
    color: "white", status: "active", badge: "Best Value",
  },
];

// ─── Card variants ────────────────────────────────────────────────────────────
// White: all Active. Black: all Out of Stock (shown with notify-me CTA).

const cardWhite: CatalogVariant[] = [
  {
    asin: "B0FWFF1GTW", amazonURL: amz("B0FWFF1GTW"),
    qty: 3, packLabel: "3-Pack",
    price: 23.99, priceDisplay: "$23.99", perUnit: "$8.00 each",
    color: "white", status: "active", badge: "Most Popular",
  },
  {
    asin: "B0FWDWWHYK", amazonURL: amz("B0FWDWWHYK"),
    qty: 5, packLabel: "5-Pack",
    price: 35.99, priceDisplay: "$35.99", perUnit: "$7.20 each",
    color: "white", status: "active",
  },
  {
    asin: "B0FWDMTZ6W", amazonURL: amz("B0FWDMTZ6W"),
    qty: 10, packLabel: "10-Pack",
    price: 65.99, priceDisplay: "$65.99", perUnit: "$6.60 each",
    color: "white", status: "active", badge: "Best Value",
  },
];

const cardBlack: CatalogVariant[] = [
  {
    asin: "B0FWDVD9KJ", amazonURL: amz("B0FWDVD9KJ"),
    qty: 3, packLabel: "3-Pack",
    price: 29.99, priceDisplay: "$29.99", perUnit: "$10.00 each",
    color: "black", status: "out-of-stock",
  },
  {
    asin: "B0FWDX2N1W", amazonURL: amz("B0FWDX2N1W"),
    qty: 5, packLabel: "5-Pack",
    price: 39.99, priceDisplay: "$39.99", perUnit: "$8.00 each",
    color: "black", status: "out-of-stock",
  },
  {
    asin: "B0FWFFLYRX", amazonURL: amz("B0FWFFLYRX"),
    qty: 10, packLabel: "10-Pack",
    price: 79.99, priceDisplay: "$79.99", perUnit: "$8.00 each",
    color: "black", status: "out-of-stock",
  },
];

// ─── Sticker variants ─────────────────────────────────────────────────────────
// Both White and Black are Active.

const stickerWhite: CatalogVariant[] = [
  {
    asin: "B0GKQTVJGD", amazonURL: amz("B0GKQTVJGD"),
    qty: 3, packLabel: "3-Pack",
    price: 21.99, priceDisplay: "$21.99", perUnit: "$7.33 each",
    color: "white", status: "active",
  },
  {
    asin: "B0GKR37KCY", amazonURL: amz("B0GKR37KCY"),
    qty: 5, packLabel: "5-Pack",
    price: 27.99, priceDisplay: "$27.99", perUnit: "$5.60 each",
    color: "white", status: "active", badge: "Most Popular",
  },
  {
    asin: "B0GKR7SJ2F", amazonURL: amz("B0GKR7SJ2F"),
    qty: 10, packLabel: "10-Pack",
    price: 39.99, priceDisplay: "$39.99", perUnit: "$4.00 each",
    color: "white", status: "active", badge: "Best Value",
  },
];

const stickerBlack: CatalogVariant[] = [
  {
    asin: "B0GKQKKRZY", amazonURL: amz("B0GKQKKRZY"),
    qty: 3, packLabel: "3-Pack",
    price: 19.99, priceDisplay: "$19.99", perUnit: "$6.67 each",
    color: "black", status: "active", badge: "Best Value",
  },
  {
    asin: "B0GKQPMPNH", amazonURL: amz("B0GKQPMPNH"),
    qty: 5, packLabel: "5-Pack",
    price: 23.99, priceDisplay: "$23.99", perUnit: "$4.80 each",
    color: "black", status: "active", badge: "Most Popular",
  },
  {
    asin: "B0GKR43PH4", amazonURL: amz("B0GKR43PH4"),
    qty: 10, packLabel: "10-Pack",
    price: 39.99, priceDisplay: "$39.99", perUnit: "$4.00 each",
    color: "black", status: "active",
  },
];

// ─── Assembled catalog ────────────────────────────────────────────────────────

export const catalog: CatalogProduct[] = [
  {
    type: "stand-classic",
    label: "Classic Stand",
    tagline: "Original series — 1+1 free deal",
    description:
      "Our original countertop stand. The black 2-pack ships as 1+1 Free — you get two stands for the price of one. Perfect for businesses that want maximum value at the counter.",
    icon: "monitor",
    colorVariants: { black: classicStandBlack, white: classicStandWhite },
    images: {
      black: "/images/classic-stand/black.jpg",
      white: "/images/classic-stand/white.jpg",
    },
  },
  {
    type: "stand-new",
    label: "New Stand",
    tagline: "New model — cleaner design",
    description:
      "The latest REVLIXI stand with a refined design. Available in 2, 3, 5, and 10-pack sizes in black and white — ships via Amazon FBA with free returns.",
    icon: "monitor",
    colorVariants: { black: newStandBlack, white: newStandWhite },
    images: {
      black: "/images/new-stand/black.jpg",
      white: "/images/new-stand/white.jpg",
    },
  },
  {
    type: "card",
    label: "Review Card",
    tagline: "Your review request, in your pocket",
    description:
      "Credit-card-sized NFC + QR card for service pros. Hand it over at job completion — customers tap and review on the spot, no app required.",
    icon: "credit-card",
    colorVariants: { black: cardBlack, white: cardWhite },
    images: {
      black: "/images/cards/black.jpg",
      white: "/images/cards/white.jpg",
    },
  },
  {
    type: "sticker",
    label: "Review Sticker",
    tagline: "Stick it anywhere, reviews everywhere",
    description:
      "Weatherproof NFC + QR sticker with industrial adhesive. Bonds permanently to windows, counters, equipment, and vehicles — review capture wherever customers pause.",
    icon: "sticker",
    colorVariants: { black: stickerBlack, white: stickerWhite },
    images: {
      black: "/images/stickers/black.jpg",
      white: "/images/stickers/white.jpg",
    },
  },
];
