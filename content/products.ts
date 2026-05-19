import type { Product, ProductIcon } from "@/types";

export const products: Product[] = [
  {
    id: "stand",
    href: "/stands",
    name: "REVLIXI Stand",
    tagline: "The countertop that converts",
    description:
      "A premium countertop NFC + QR review stand engineered for high-traffic environments. Built to sit exactly where your customers will see it after a great experience.",
    price: "From $49",
    badge: "Most Popular",
    features: [
      "Dual NFC + QR review capture",
      "Heavy-gauge aluminum construction",
      "Adjustable angle display",
      "Works with all major review platforms",
      "Free link management dashboard",
      "Redirect destination updates any time",
    ],
    bestFor: ["Restaurants", "Salons & Spas", "Retail Stores", "Healthcare Offices"],
    icon: "monitor",
  },
  {
    id: "card",
    href: "/cards",
    name: "REVLIXI Card",
    tagline: "Your review request, in your pocket",
    description:
      "A slim, durable review card built for service professionals who earn their reputation on the road. Hand it over at job's end — reviews follow.",
    price: "From $29",
    features: [
      "Credit-card dimensions — fits any wallet",
      "Tap or scan in under a second",
      "Epoxy-coated for lasting durability",
      "Works with all major review platforms",
      "Free link management dashboard",
      "Redirect destination updates any time",
    ],
    bestFor: [
      "Contractors & Tradespeople",
      "Freelancers",
      "Mobile Service Providers",
      "Real Estate Agents",
    ],
    icon: "credit-card",
  },
  {
    id: "sticker",
    href: "/stickers",
    name: "REVLIXI Sticker",
    tagline: "Stick it anywhere, reviews everywhere",
    description:
      "Heavy-duty NFC + QR review sticker that adheres to virtually any surface. From window glass to kitchen equipment — wherever customers pause.",
    price: "From $19",
    features: [
      "Industrial-grade permanent adhesive",
      "Weatherproof and waterproof rated",
      "Bonds to glass, metal, wood, and plastic",
      "Tap or scan — any smartphone",
      "Free link management dashboard",
      "Redirect destination updates any time",
    ],
    bestFor: [
      "Restaurant Tables & Windows",
      "Shop Counters",
      "Equipment & Tools",
      "Reception Desks",
    ],
    icon: "sticker",
  },
];
