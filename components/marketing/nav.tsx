"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevlixiLogo } from "@/components/ui/revlixi-logo";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true); // hero is dark on initial load

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 24);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Switch logo variant based on whether the nav is over a dark-background section.
  // When above the fold the hero is always dark; when scrolled, observe dark sections.
  useEffect(() => {
    if (!isScrolled) {
      setIsDarkSection(true);
      return;
    }

    const darkEls = document.querySelectorAll<HTMLElement>('[data-nav-theme="dark"]');
    if (!darkEls.length) {
      setIsDarkSection(false);
      return;
    }

    // Track which dark sections currently occupy the top ~15 % of the viewport
    // (where the fixed nav bar sits). A Set lets us handle multiple observers
    // firing in separate batches correctly.
    const intersecting = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) intersecting.add(e.target);
          else intersecting.delete(e.target);
        });
        setIsDarkSection(intersecting.size > 0);
      },
      // Shrink the root from the bottom so only the top ~15 % fires — this
      // covers the 64 px nav height on any reasonable viewport.
      { rootMargin: "0px 0px -85% 0px", threshold: 0 }
    );

    darkEls.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      intersecting.clear();
    };
  }, [isScrolled]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out",
        isScrolled
          ? "glass shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      )}
      role="banner"
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
          aria-label="REVLIXI — home"
        >
          <RevlixiLogo height={34} variant={isDarkSection ? "dark" : "light"} />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors rounded-lg hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" variant="gold" asChild>
            <Link href="#shop">Shop Now</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors focus-visible:ring-2 focus-visible:ring-neutral-950"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden overflow-hidden glass border-t border-neutral-200/60"
          >
            <nav
              className="container py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 pt-3 border-t border-neutral-100">
                <Button className="w-full" asChild>
                  <Link href="#shop" onClick={closeMobileMenu}>
                    Shop Now
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
