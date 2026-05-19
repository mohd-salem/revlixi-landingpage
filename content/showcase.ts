import type { ShowcaseFamily, ShowcaseComparisonRow } from "@/types";

// ─── Product families ─────────────────────────────────────────────────────────
// Rich content model for the interactive ProductShowcase section.
// Each family maps to a ProductId so it integrates with existing product data.

export const showcaseFamilies: ShowcaseFamily[] = [
  // ─── Stand Series ──────────────────────────────────────────────────────────
  {
    id: "stand",
    name: "Stand Series",
    seriesTagline: "Counter-top Review Stations",
    description:
      "Built for high-traffic environments where maximum visibility drives consistent review volume. The Stand anchors your review strategy with a permanent, professional presence customers notice at the moment of decision — no staff involvement required.",
    icon: "monitor",
    whyChoose: [
      {
        headline: "Maximum passive visibility",
        body: "Positioned at eye level at checkout counters, host stands, and reception desks. Every customer who walks past your counter is a potential review.",
      },
      {
        headline: "Premium build signals quality",
        body: "Heavy-gauge aluminum construction sits alongside your other professional equipment. Customers tap hardware they trust.",
      },
      {
        headline: "Captures reviews all day, every day",
        body: "Once placed, the Stand works continuously. No carry-around, no handoff, no follow-up — just consistent review volume on autopilot.",
      },
    ],
    bestFor: [
      "Restaurants & Cafés",
      "Salons & Spas",
      "Retail Stores",
      "Healthcare Practices",
      "Hotels & Hospitality",
    ],
    variants: [
      {
        id: "stand-standard",
        name: "REVLIXI Stand",
        tagline: "Single-sided counter station",
        badge: "Best Seller",
        packSizes: [
          { qty: 1,  label: "Single",  price: "$49",  perUnit: "$49.00" },
          { qty: 3,  label: "3-Pack",  price: "$129", perUnit: "$43.00", badge: "Most Popular" },
          { qty: 10, label: "10-Pack", price: "$380", perUnit: "$38.00", badge: "Best Value"   },
        ],
        useCaseTags: [
          "Checkout Counter",
          "Host Stand",
          "Reception Desk",
          "Bar Top",
          "POS Area",
        ],
        benefits: [
          "Dual NFC tap + QR scan — works on any smartphone in under a second",
          "Heavy-gauge aluminum frame — resists daily counter wear",
          "Adjustable display angle — optimised for any sightline",
          "Free link management dashboard — update destinations any time",
        ],
        href: "/stands",
      },
    ],
  },

  // ─── Card Series ───────────────────────────────────────────────────────────
  {
    id: "card",
    name: "Card Series",
    seriesTagline: "Wallet-Ready Review Requests",
    description:
      "Designed for service professionals who build their reputation in the field. Hand a Card over at job completion and the review comes to you — no chasing, no follow-up texts, no awkward ask.",
    icon: "credit-card",
    whyChoose: [
      {
        headline: "The perfect handoff moment",
        body: "A physical card at project completion signals thoroughness. The review tap follows naturally from that final impression of quality.",
      },
      {
        headline: "Fits every workflow",
        body: "Credit-card dimensions mean it lives in your wallet, badge holder, apron pocket, or van glovebox — always within reach when you need it.",
      },
      {
        headline: "Built to survive the field",
        body: "Epoxy coating over a rigid PVC core handles pocket wear, summer heat, and the same job-site conditions you do every day.",
      },
    ],
    bestFor: [
      "Contractors & Tradespeople",
      "Mobile Service Providers",
      "Real Estate Agents",
      "Personal Trainers & Coaches",
      "Freelancers",
    ],
    variants: [
      {
        id: "card-standard",
        name: "REVLIXI Card",
        tagline: "Standard credit-card format",
        badge: "Best Seller",
        packSizes: [
          { qty: 1,  label: "Single",  price: "$29",  perUnit: "$29.00" },
          { qty: 5,  label: "5-Pack",  price: "$119", perUnit: "$23.80", badge: "Most Popular" },
          { qty: 25, label: "25-Pack", price: "$499", perUnit: "$19.96", badge: "Best Value"   },
        ],
        useCaseTags: [
          "Job Completion Handoff",
          "Client Meetings",
          "After-service Close",
          "Wallet Carry",
        ],
        benefits: [
          "Credit-card dimensions — fits any wallet or badge holder",
          "Dual NFC tap + QR scan in under a second",
          "Epoxy-coated rigid PVC — survives daily pocket use",
          "Free link management dashboard — update destinations any time",
        ],
        href: "/cards",
      },
    ],
  },

  // ─── Sticker Series ────────────────────────────────────────────────────────
  {
    id: "sticker",
    name: "Sticker Series",
    seriesTagline: "Peel-and-Place Review Triggers",
    description:
      "The most flexible format in the REVLIXI family. When you can't place a Stand and a Card isn't enough, the Sticker turns any surface — window, table, equipment, packaging — into a permanent review capture point.",
    icon: "sticker",
    whyChoose: [
      {
        headline: "Any surface is fair game",
        body: "Industrial adhesive bonds permanently to glass, metal, wood, ceramic, and plastic. Install indoors or outdoors — it stays put.",
      },
      {
        headline: "Deploy at scale without the Stand price",
        body: "Cover multiple locations, tables, or vehicles at a fraction of the cost. Review capture everywhere your customers pause.",
      },
      {
        headline: "Built for the long haul",
        body: "Weatherproof and waterproof rated. Whether it's a restaurant window or a contractor's van door, it holds and stays readable for years.",
      },
    ],
    bestFor: [
      "Restaurant Windows & Tables",
      "Contractor Vans & Equipment",
      "Shop Counters",
      "Waiting Room Walls",
      "Retail Packaging",
    ],
    variants: [
      {
        id: "sticker-standard",
        name: "REVLIXI Sticker",
        tagline: "Standard 3\u2033 \u00d7 3\u2033 square format",
        badge: "Best Value",
        packSizes: [
          { qty: 1,  label: "Single",  price: "$19",  perUnit: "$19.00" },
          { qty: 10, label: "10-Pack", price: "$159", perUnit: "$15.90", badge: "Most Popular" },
          { qty: 50, label: "50-Pack", price: "$599", perUnit: "$11.98", badge: "Best Value"   },
        ],
        useCaseTags: [
          "Window Placement",
          "Table Surface",
          "Equipment Label",
          "Counter Decal",
          "Van Door",
        ],
        benefits: [
          "Industrial-grade permanent adhesive — bonds to virtually any surface",
          "Weatherproof and waterproof rated for indoor and outdoor use",
          "Dual NFC tap + QR scan on any smartphone",
          "Free link management dashboard — update destinations any time",
        ],
        href: "/stickers",
      },
    ],
  },
];

// ─── Micro-comparison rows ────────────────────────────────────────────────────
// Rendered inside the collapsible comparison table in ProductShowcase.
// Each row compares one attribute across all three formats.

export const showcaseComparisonRows: ShowcaseComparisonRow[] = [
  {
    attribute: "Best environment",
    stand:   "Counter or desk",
    card:    "On-person carry",
    sticker: "Any fixed surface",
  },
  {
    attribute: "Install method",
    stand:   "Place anywhere",
    card:    "Carry in wallet",
    sticker: "Peel & stick",
  },
  {
    attribute: "Passive capture",
    stand:   "All day long",
    card:    "At handoff only",
    sticker: "All day long",
  },
  {
    attribute: "Build & durability",
    stand:   "Aluminum, 5+ yr",
    card:    "Epoxy PVC, 3+ yr",
    sticker: "Weatherproof, 3+ yr",
  },
  {
    attribute: "Starting price",
    stand:   "$49",
    card:    "$29",
    sticker: "$19",
  },
];
