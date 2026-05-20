// ─── types/index.ts ────────────────────────────────────────────────────────────
// Single source of truth for all content shapes used across the REVLIXI site.
// Every content file, component, and page imports types from here.
// Never define content types locally — keep all shapes deduplicated.
// ──────────────────────────────────────────────────────────────────────────────

// ─── Product ──────────────────────────────────────────────────────────────────

export type ProductId = "stand" | "card" | "sticker";

/** Maps to a Lucide icon component in the rendering layer */
export type ProductIcon = "monitor" | "credit-card" | "sticker";

/** Core product shape — used on the homepage product grid */
export interface Product {
  id: ProductId;
  name: string;
  tagline: string;
  description: string;
  /** Formatted starting price, e.g. "From $49" */
  price: string;
  badge?: string;
  features: string[];
  bestFor: string[];
  icon: ProductIcon;
  /** Canonical product page route, e.g. "/stands" */
  href: string;
}

/** A purchasable SKU within a product family — used on product-specific pages */
export interface ProductVariant {
  label: string;          // e.g. "Single", "3-Pack", "10-Pack"
  displayPrice: string;   // e.g. "$49"
  pricePerUnit?: string;  // e.g. "$16.33 / unit" — shown for multi-packs
  sku?: string;
  mostPopular?: boolean;
}

/**
 * Extended shape for dedicated product pages (/stands, /cards, /stickers).
 * Extends Product so homepage cards and product pages share a common base.
 * TODO: Populate longDescription, variants, and specs in content/products.ts
 *       when product pages are built out in a later prompt.
 */
export interface ProductFamily extends Product {
  longDescription: string;
  variants: ProductVariant[];
  specs: Array<{ icon: string; label: string; value: string }>;
}

// ─── Stats / Social Proof ─────────────────────────────────────────────────────

export interface ProofStat {
  value: string;      // e.g. "4.9/5", "<1 sec", "$0/mo"
  label: string;      // e.g. "Average rating"
  sublabel?: string;  // e.g. "Across 1,000+ customers"
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating: number;      // 1–5
  initials: string;
  platform?: string;   // e.g. "Google", "Yelp"
}

/** @deprecated Use TestimonialItem in new code */
export type Testimonial = TestimonialItem;

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

export interface CtaBlock {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// ─── Feature ──────────────────────────────────────────────────────────────────

export interface Feature {
  icon: string;   // Lucide icon name
  title: string;
  description: string;
}

// ─── How It Works Step ────────────────────────────────────────────────────────

export interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;   // Lucide icon name
}

// ─── Use Cases ────────────────────────────────────────────────────────────────

export interface UseCase {
  id: string;
  label: string;                    // Short display name, e.g. "Restaurants"
  icon: string;                     // Lucide icon name
  headline: string;
  description: string;
  recommendedProductId: ProductId;
}

// ─── Comparison ───────────────────────────────────────────────────────────────

export interface ComparisonRow {
  feature: string;
  stand: string | boolean;
  card: string | boolean;
  sticker: string | boolean;
  note?: string;
}

// ─── Product Showcase System ──────────────────────────────────────────────────
// Richer content model used by the interactive ProductShowcase section and
// individual category pages (/stands, /cards, /stickers).

/** A purchasable pack-size tier shown in the showcase variant card */
export interface ShowcasePackSize {
  qty: number;
  /** Display label, e.g. "Single", "3-Pack", "10-Pack" */
  label: string;
  /** Formatted price, e.g. "$49", "$129" */
  price: string;
  /** Per-unit cost string, e.g. "$43.00 / unit" */
  perUnit: string;
  /** Optional callout badge, e.g. "Most Popular", "Best Value" */
  badge?: string;
}

/** A detailed product variant (SKU tier) within a showcase family */
export interface ShowcaseVariant {
  id: string;
  name: string;
  tagline: string;
  /** Highlight badge, e.g. "Best Seller", "New" */
  badge?: string;
  packSizes: ShowcasePackSize[];
  /** Short tags for where/how this variant is used */
  useCaseTags: string[];
  /** 4–6 concise benefit statements for the checklist */
  benefits: string[];
  href: string;
}

/** A row in the three-format micro-comparison table inside the showcase */
export interface ShowcaseComparisonRow {
  attribute: string;
  stand: string;
  card: string;
  sticker: string;
}

/** A product family in the interactive showcase system */
export interface ShowcaseFamily {
  id: ProductId;
  /** E.g. "Stand Series" */
  name: string;
  /** Short descriptor below name, e.g. "Counter-top Review Stations" */
  seriesTagline: string;
  /** 1–2 sentence pitch for this format */
  description: string;
  icon: ProductIcon;
  /** Three structured reasons to choose this format */
  whyChoose: Array<{ headline: string; body: string }>;
  bestFor: string[];
  variants: ShowcaseVariant[];
}

// ─── Amazon Catalog ────────────────────────────────────────────────────────────
// Typed data model for the full Amazon product catalog.
// Used by ShopSection and the Product structured-data schema generator.

export type CatalogStatus      = "active" | "out-of-stock";
export type CatalogColor       = "black" | "white";
export type CatalogProductType = "stand-classic" | "stand-new" | "card" | "sticker";

/** An individual Amazon SKU (ASIN + pack size + price) */
export interface CatalogVariant {
  asin:         string;
  amazonURL:    string;
  qty:          number;
  packLabel:    string;     // "Single", "2-Pack", "10-Pack"
  price:        number;     // numeric, e.g. 29.99
  priceDisplay: string;     // "$29.99"
  perUnit:      string;     // "$14.99 each"
  color:        CatalogColor;
  status:       CatalogStatus;
  badge?:       string;     // "Best Seller" | "Most Popular" | "Best Value"
}

/** A product line (Stand / Card / Sticker) with Black and White variants */
export interface CatalogProduct {
  type:          CatalogProductType;
  label:         string;   // "Review Stand"
  tagline:       string;
  description:   string;
  icon:          ProductIcon;
  colorVariants: Record<CatalogColor, CatalogVariant[]>;
  /** Per-colour product images. Key is color, value is /public-relative path. */
  images?:       Partial<Record<CatalogColor, string>>;
}
