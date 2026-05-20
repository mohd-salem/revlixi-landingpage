// ─── lib/schema.ts ────────────────────────────────────────────────────────────
// Schema.org JSON-LD generators for REVLIXI.
// These are pure data functions — no React/JSX.
// Render them with <JsonLd schema={...} /> from components/seo/json-ld.tsx.
// ─────────────────────────────────────────────────────────────────────────────

import type { FaqItem, Product, CatalogProduct } from "@/types";
import { siteConfig } from "@/content/site";

// ─── Organization ─────────────────────────────────────────────────────────────
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo.png`,
      width: 200,
      height: 50,
    },
    description: siteConfig.description,
  };
}

// ─── WebSite ──────────────────────────────────────────────────────────────────
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

// ─── FAQPage ──────────────────────────────────────────────────────────────────
export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ─── Product ──────────────────────────────────────────────────────────────────
// Parses "From $49" → "49"; falls back to "0" on unexpected format.
function parseStartingPrice(priceString: string): string {
  const match = priceString.match(/\$(\d+)/);
  return match ? match[1] : "0";
}

export function productSchema(product: Product) {
  const price = parseStartingPrice(product.price);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: price,
      offerCount: 1,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      url: `${siteConfig.url}${product.href}`,
    },
    url: `${siteConfig.url}${product.href}`,
  };
}

// ─── BreadcrumbList ───────────────────────────────────────────────────────────
export function breadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

// ─── ItemList (product family overview) ──────────────────────────────────────
export function itemListSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "REVLIXI Review System — Product Family",
    description:
      "NFC + QR Review System for businesses. Choose the format that fits your workflow.",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${siteConfig.url}${product.href}`,
    })),
  };
}

// ─── Amazon Catalog — Product schema for each active SKU ─────────────────────
// Generates a Product schema per active Amazon listing so Google can surface
// individual SKUs in Shopping results. Out-of-stock variants set availability
// to OutOfStock so Google doesn't suppress the listing entirely.
export function amazonCatalogSchema(catalog: CatalogProduct[]) {
  const items: object[] = [];

  for (const product of catalog) {
    for (const color of ["black", "white"] as const) {
      for (const variant of product.colorVariants[color] ?? []) {
        const availabilityUrl =
          variant.status === "active"
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock";

        items.push({
          "@type": "Product",
          name: `REVLIXI ${product.label} — ${color.charAt(0).toUpperCase() + color.slice(1)} ${variant.packLabel}`,
          description: product.description,
          brand: { "@type": "Brand", name: "REVLIXI" },
          // productID maps to the Amazon ASIN for Google Merchant Center
          productID: variant.asin,
          offers: {
            "@type": "Offer",
            price: variant.price.toFixed(2),
            priceCurrency: "USD",
            availability: availabilityUrl,
            url: variant.amazonURL,
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@type": "Organization",
              name: "REVLIXI",
              url: siteConfig.url,
            },
          },
        });
      }
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "REVLIXI Google Review System — Full Catalog",
    description:
      "NFC + QR Google Review System available on Amazon. Stands, cards, and stickers in black and white, multiple pack sizes.",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item,
    })),
  };
}
