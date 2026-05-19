"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  const [visible, setVisible]     = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const shouldReduceMotion        = useReducedMotion();

  useEffect(() => {
    const threshold = window.innerHeight * 0.75;

    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const slideTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "tween" as const, duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] as const };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={slideTransition}
          className="fixed bottom-4 sm:bottom-5 left-1/2 z-[90] w-full max-w-lg -translate-x-1/2 px-3 sm:px-4"
          role="complementary"
          aria-label="Shop shortcut"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 shadow-[0_8px_40px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.04)]">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-neutral-950">
                Start collecting more 5-star reviews
              </p>
              <p className="hidden sm:block text-xs text-neutral-400">
                From $19 · No subscription · Ships in 1–2 days
              </p>
            </div>

            <Button size="sm" variant="gold" asChild className="shrink-0">
              <Link href="#shop">
                Shop Now
                <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Button>

            <button
              onClick={() => setDismissed(true)}
              className="shrink-0 rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
