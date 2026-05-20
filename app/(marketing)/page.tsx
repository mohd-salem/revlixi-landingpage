import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import dynamic from "next/dynamic";
// ProductShowcase is the largest client bundle on the page (tab state,
// AnimatePresence, FamilySwitcher, ShowcaseVariantCard). Dynamic import splits
// it into a separate JS chunk deferred until after above-fold content hydrates.
const ProductShowcase = dynamic(
  () =>
    import("@/components/marketing/product-showcase").then((m) => ({
      default: m.ProductShowcase,
    }))
);
// ShopSection is a sizable interactive client bundle. Defer it so the critical
// path (hero, proof ribbon, how it works) hydrates first.
const ShopSection = dynamic(
  () =>
    import("@/components/marketing/shop-section").then((m) => ({
      default: m.ShopSection,
    }))
);
import { GrowthSection } from "@/components/marketing/growth-section";
import { Testimonials } from "@/components/marketing/testimonials";
import { FAQ } from "@/components/marketing/faq";
import { CTAStrip } from "@/components/marketing/cta-strip";
import { StickyCTA } from "@/components/marketing/sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema, itemListSchema, amazonCatalogSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import { faqItems } from "@/content/faq";
import { products } from "@/content/products";
import { catalog } from "@/content/catalog";

export const metadata: Metadata = generatePageMetadata({
  title: "REVLIXI — NFC + QR Google Review Stands, Cards & Stickers",
  description:
    "Get more Google reviews on autopilot. REVLIXI NFC + QR stands, cards, and stickers let customers review your business in one tap — no app, no friction. Available on Amazon.",
  path: "/",
  keywords: [
    "NFC review stand",
    "QR review card",
    "Google review stand",
    "NFC review sticker",
    "Review System for business",
    "tap to review",
    "no subscription review tool",
    "google review NFC card",
    "buy google review stand amazon",
    "review kiosk for business",
    "NFC tap to review",
    "google Review System",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={faqPageSchema(faqItems)} />
      <JsonLd schema={itemListSchema(products)} />
      <JsonLd schema={amazonCatalogSchema(catalog)} />
      <Hero />
      <ShopSection />
      <HowItWorks />
      {/* <ProductShowcase /> */}
      <GrowthSection />
      <Testimonials />
      <FAQ />
      <CTAStrip />
      <StickyCTA />
    </>
  );
}
