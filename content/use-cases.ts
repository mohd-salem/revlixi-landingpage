// ─── content/use-cases.ts ─────────────────────────────────────────────────────
// Business-type use cases that map customer segments to recommended products.
// Used by the homepage use-case section and individual product pages.
// ──────────────────────────────────────────────────────────────────────────────

import type { UseCase } from "@/types";

export const useCases: UseCase[] = [
  {
    id: "restaurant",
    label: "Restaurants & Cafés",
    icon: "utensils",
    headline: "Turn every table into a review opportunity",
    description:
      "Place a REVLIXI Stand at your checkout counter or host stand. When customers leave happy, a single tap captures their experience before they walk out the door.",
    recommendedProductId: "stand",
  },
  {
    id: "contractor",
    label: "Contractors & Trades",
    icon: "hard-hat",
    headline: "Get the review while the job is still fresh",
    description:
      "Hand your REVLIXI Card to the customer the moment you pack up your tools. The job is complete, satisfaction is high — that's the precise moment to capture a review.",
    recommendedProductId: "card",
  },
  {
    id: "salon",
    label: "Salons & Spas",
    icon: "scissors",
    headline: "Make every checkout a five-star moment",
    description:
      "Clients are relaxed, happy, and reaching for their phones. A REVLIXI Stand on the front desk catches them at the perfect moment — effortlessly, without any staff prompt.",
    recommendedProductId: "stand",
  },
  {
    id: "retail",
    label: "Retail Stores",
    icon: "shopping-bag",
    headline: "Passive reviews from every surface",
    description:
      "REVLIXI Stickers on your window, counter, and fitting room doors generate reviews consistently — with zero staff effort and no follow-up friction.",
    recommendedProductId: "sticker",
  },
  {
    id: "healthcare",
    label: "Healthcare & Dental",
    icon: "stethoscope",
    headline: "Build trust before patients even visit",
    description:
      "A REVLIXI Stand at the front desk gives satisfied patients a frictionless way to support your practice. Your reputation grows while your team focuses on care.",
    recommendedProductId: "stand",
  },
  {
    id: "real-estate",
    label: "Real Estate Agents",
    icon: "home",
    headline: "Capture satisfaction at its highest point",
    description:
      "Present your REVLIXI Card at closing or after a successful showing. A sleek, professional touch that converts client happiness into lasting online credibility.",
    recommendedProductId: "card",
  },
];
