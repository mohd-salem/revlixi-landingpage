import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";
import { RevlixiLogo } from "@/components/ui/revlixi-logo";
import { siteConfig, footerNav } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-neutral-200 bg-neutral-50"
      aria-label="Site footer"
    >
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex hover:opacity-75 transition-opacity"
              aria-label="REVLIXI — home"
            >
              <RevlixiLogo
                iconSize={18}
                wordmarkClassName="text-neutral-950"
              />
            </Link>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-neutral-500 text-pretty">
              NFC + QR review hardware for businesses that want more 5-star
              reviews — with zero friction.
            </p>
            {/* Social links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 hover:text-neutral-950 hover:border-neutral-300 transition-colors shadow-card-sm focus-visible:ring-2 focus-visible:ring-neutral-950"
                aria-label="REVLIXI on Instagram"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.twitter}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 hover:text-neutral-950 hover:border-neutral-300 transition-colors shadow-card-sm focus-visible:ring-2 focus-visible:ring-neutral-950"
                aria-label="REVLIXI on Twitter / X"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Products column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-neutral-400">
              Products
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerNav.products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-neutral-400">
              Company
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-neutral-400">
              Legal
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerNav.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} REVLIXI. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            NFC + QR review hardware for businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
