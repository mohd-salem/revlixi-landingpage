import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, webSiteSchema } from "@/lib/schema";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://revlixi.com"),
  title: {
    default: "REVLIXI — NFC + QR Review System for Businesses",
    template: "%s | REVLIXI",
  },
  description:
    "Premium NFC + QR Review System for businesses. Turn every customer interaction into a 5-star review with REVLIXI stands, cards, and stickers. No app required.",
  keywords: [
    "NFC review stand",
    "QR review card",
    "Review System",
    "Google reviews NFC",
    "review stand for business",
    "NFC review sticker",
    "get more Google reviews",
    "tap to review",
    "contactless review",
  ],
  authors: [{ name: "REVLIXI" }],
  creator: "REVLIXI",
  publisher: "REVLIXI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revlixi.com",
    siteName: "REVLIXI",
    title: "REVLIXI — NFC + QR Review System for Businesses",
    description:
      "Premium NFC + QR Review System for businesses. Turn every customer interaction into a 5-star review.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "REVLIXI — NFC + QR Review System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REVLIXI — NFC + QR Review System for Businesses",
    description:
      "Premium NFC + QR Review System for businesses. Turn every customer interaction into a 5-star review.",
    images: ["/og.png"],
    creator: "@revlixi",
  },
  icons: [
    { rel: "icon", url: "/images/hero-ico-black.ico", media: "(prefers-color-scheme: light)" },
    { rel: "icon", url: "/images/hero-ico-white.ico", media: "(prefers-color-scheme: dark)" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <JsonLd schema={organizationSchema()} />
        <JsonLd schema={webSiteSchema()} />
        {children}
      </body>
    </html>
  );
}
