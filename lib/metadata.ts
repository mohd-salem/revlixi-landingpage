// ─── lib/metadata.ts ───────────────────────────────────────────────────────────
// Generates consistent Next.js Metadata objects for every page.
// Use generatePageMetadata() in each route's `export const metadata` instead of
// manually duplicating OpenGraph, Twitter, and canonical fields per-page.
// ──────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

interface PageMetaOptions {
  title: string;
  description?: string;
  /** Relative path for the canonical URL, e.g. "/stands". Defaults to "/" */
  path?: string;
  /** OG image path (relative or absolute). Defaults to "/og.png" */
  image?: string;
  /** Additional keywords for this specific page */
  keywords?: string[];
  /** OG type — defaults to "website". Use "article" for editorial content. */
  ogType?: "website" | "article";
  /** Set true to exclude this page from search engine indexing */
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path = "/",
  image = "/og.png",
  keywords,
  ogType = "website",
  noIndex = false,
}: PageMetaOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const desc = description ?? siteConfig.description;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description: desc,
    ...(keywords && { keywords }),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
