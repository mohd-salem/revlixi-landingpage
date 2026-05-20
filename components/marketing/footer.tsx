"use client";

import Link from "next/link";
import { RevlixiLogo } from "@/components/ui/revlixi-logo";
import { LegalModal } from "@/components/ui/legal-modal";
import { footerNav } from "@/content/site";
import {
  privacyPolicy,
  termsOfService,
  shippingPolicy,
  warrantyPolicy,
} from "@/content/legal";

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
              <RevlixiLogo height={30} variant="light" />
            </Link>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-neutral-500 text-pretty">
              NFC + QR Review System for businesses that want more 5-star
              reviews — with zero friction.
            </p>
            {/* Amazon store link */}
            <div className="mt-5">
              <a
                href="https://www.amazon.com/revlixi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-950 hover:border-neutral-300 transition-colors shadow-card-sm"
                aria-label="REVLIXI on Amazon"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.276-1.814-2.106-1.733 1.767-2.96 2.295-5.208 2.295-2.658 0-4.73-1.641-4.73-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.887 5.942-1.094v-.41c0-.753.06-1.642-.384-2.294-.385-.578-1.124-.816-1.774-.816-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.33c-.258-.059-.548-.266-.472-.66C5.97 1.959 8.812 1 11.37 1c1.305 0 3.011.347 4.042 1.336C16.716 3.587 16.6 5.22 16.6 6.994v4.74c0 1.425.591 2.052 1.147 2.82.196.275.239.603-.01.806l-1.593 1.435zm3.856 3.818C19.078 23.216 14.44 24 10.834 24 5.65 24 .79 22.142-2.997 18.941c-.276-.249-.03-.589.302-.396 4.357 2.536 9.742 4.061 15.31 4.061 3.753 0 7.882-.779 11.678-2.397.513-.219.943.336.707.804z"/>
                </svg>
                Shop on Amazon
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
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("shop")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors text-left"
                  >
                    {item.label}
                  </button>
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
              <li>
                <LegalModal doc={privacyPolicy}>Privacy Policy</LegalModal>
              </li>
              <li>
                <LegalModal doc={termsOfService}>Terms of Service</LegalModal>
              </li>
              <li>
                <LegalModal doc={shippingPolicy}>Shipping Policy</LegalModal>
              </li>
              <li>
                <LegalModal doc={warrantyPolicy}>Warranty</LegalModal>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} REVLIXI. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            NFC + QR Review System for businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
