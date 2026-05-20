import type { NavLink } from "@/types";

export const siteConfig = {
  name: "REVLIXI",
  description:
    "NFC + QR Review System that turns every customer interaction into a 5-star review opportunity.",
  url: "https://revlixi.com",
  nav: [
    { label: "Shop",          href: "#shop"          },
    { label: "How It Works",  href: "#how-it-works"  },
    { label: "Reviews",       href: "#testimonials"  },
    { label: "FAQ",           href: "#faq"           },
  ] satisfies NavLink[],
  cta: {
    primary:   { label: "Shop Now",           href: "#shop"          },
    secondary: { label: "See How It Works",   href: "#how-it-works"  },
  },
  social: {
    instagram: "#",
    twitter:   "#",
  },
} as const;

// ─── Hero trust chips ─────────────────────────────────────────────────────────
// Short guarantees displayed beneath the hero CTA row.

export const heroTrustItems = [
  "No app required",
  "Works on any phone",
  "One-time purchase",
  "Ships via Amazon FBA",
] as const;

// ─── CTA strip trust chips ────────────────────────────────────────────────────
// Short guarantees shown in the bottom CTA section.

export const ctaTrustItems = [
  "One-time purchase",
  "No monthly fees",
  "12-month warranty",
  "Free forever dashboard",
] as const;

// ─── Supported review platforms (LogoBar) ────────────────────────────────────

export const platforms = [
  { name: "Google Reviews", abbr: "G"  },
  { name: "Yelp",           abbr: "Y"  },
  { name: "Facebook",       abbr: "f"  },
  { name: "TripAdvisor",    abbr: "TA" },
  { name: "Trustpilot",     abbr: "TP" },
  { name: "Any URL",        abbr: "+"  },
] as const;

// ─── Footer navigation ────────────────────────────────────────────────────────
// Kept here alongside siteConfig so all site-wide navigation lives in one file.

export const footerNav = {
  products: [
    { label: "REVLIXI Stand",    href: "/stands"   },
    { label: "REVLIXI Card",     href: "/cards"    },
    { label: "REVLIXI Sticker",  href: "/stickers" },
    { label: "Compare Products", href: "/compare"  },
  ],
  company: [
    { label: "How It Works",     href: "#how-it-works" },
    { label: "Customer Reviews", href: "#testimonials" },
    { label: "FAQ",              href: "#faq"          },
  ],
  legal: [
    { label: "Privacy Policy",  href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Warranty",        href: "#" },
  ],
} as const;
