"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { heroTransition, heroDelays } from "@/components/motion/tokens";
import { ArrowRight, CheckCircle2, Star, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevlixiIcon } from "@/components/ui/revlixi-logo";
import { heroTrustItems } from "@/content/site";
import { cn } from "@/lib/utils";

// ─── NFC Demo Visual ─────────────────────────────────────────────────────────
// Pure CSS + Framer Motion illustration. Communicates: hardware → NFC tap →
// phone opens browser → five-star review posted. No external images.

function NfcDemoVisual({ reduce }: { reduce: boolean | null }) {
  const ringAnim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { scale: 0.35, opacity: 0.7 },
          animate: { scale: [0.35, 2.4], opacity: [0.55, 0] },
          transition: {
            duration: 1.9,
            delay,
            repeat: Infinity,
            repeatDelay: 1.0,
            ease: "easeOut" as const,
          },
        };

  const phoneAnim = reduce
    ? {}
    : {
        animate: { y: [0, -14, 0] },
        transition: {
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  const badgeAnim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18, scale: 0.88 },
        animate: { opacity: [0, 1, 1, 0], y: [18, 4, -6, -28], scale: [0.88, 1, 1, 0.9] },
        transition: {
          duration: 2.6,
          delay: 1.6,
          repeat: Infinity,
          repeatDelay: 2.0,
          ease: "easeOut" as const,
        },
      };

  return (
    <div
      className="relative flex h-[300px] sm:h-[380px] lg:h-[460px] w-full items-center justify-center select-none overflow-visible"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-brand-400 opacity-[0.10] blur-[90px]" />
      </div>

      {/* Dot texture */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-light" />

      <div className="relative flex flex-col items-center">
        {/* Phone */}
        <motion.div className="relative z-20 mb-6" {...phoneAnim}>
          <div className="relative h-[130px] w-[78px] overflow-hidden rounded-[14px] border border-navy-600 bg-navy-800 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-[3px] flex flex-col items-center justify-center gap-1.5 rounded-[11px] bg-navy-700 p-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-2 w-2 fill-brand-400 text-brand-400" />
                ))}
              </div>
              <div className="h-1 w-10 rounded-full bg-neutral-600" />
              <div className="h-1 w-8 rounded-full bg-neutral-700" />
              <div className="mt-1 flex h-5 w-14 items-center justify-center rounded bg-brand-600">
                <span className="text-[7px] font-bold tracking-wide text-white">
                  Leave Review
                </span>
              </div>
            </div>
            <div className="absolute top-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-navy-600" />
          </div>
        </motion.div>

        {/* NFC pulse rings — centered at top of stand */}
        <div
          className="absolute z-10"
          style={{ top: "6.4rem", left: "50%", transform: "translateX(-50%)" }}
        >
          {([0, 0.55, 1.1] as const).map((delay) => (
            <motion.div
              key={delay}
              className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400"
              {...ringAnim(delay)}
            />
          ))}
        </div>

        {/* REVLIXI Stand card */}
        <div className="relative z-10 w-[176px] rounded-2xl border border-brand-500/45 bg-navy-800 px-5 py-5 shadow-[0_0_0_1px_rgba(20,184,196,0.10),0_16px_48px_rgba(0,0,0,0.50)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-500/[0.06] to-transparent" />
          <div className="relative flex flex-col items-center gap-3">
            <RevlixiIcon size={30} color="#14b8c4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-400">
              REVLIXI Stand
            </span>
            {/* Stylised QR stub */}
            <div className="grid grid-cols-5 gap-[3px] opacity-75">
              {[1,1,0,1,1, 1,0,0,0,1, 0,0,1,0,0, 1,0,0,0,1, 1,1,0,1,1].map((on, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-[5px] w-[5px] rounded-[1px]",
                    on ? "bg-brand-300" : "bg-navy-700"
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-brand-500/25 bg-brand-500/10 px-2.5 py-[3px]">
              <Wifi className="h-2.5 w-2.5 text-brand-400" />
              <span className="text-[9px] font-bold uppercase tracking-wide text-brand-400">
                NFC Active
              </span>
            </div>
          </div>
        </div>

        {/* Floating "Review posted" confirmation toast */}
        <motion.div
          className="absolute right-0 top-6 z-30 hidden sm:flex translate-x-[110%] items-center gap-2 rounded-xl border border-brand-500/25 bg-navy-800/95 px-3 py-2 shadow-card-lg backdrop-blur-sm"
          {...badgeAnim}
        >
          <div className="flex gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-2.5 w-2.5 fill-brand-400 text-brand-400" />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-neutral-200">
            Review posted!
          </span>
        </motion.div>

        {/* Counter surface shadow */}
        <div className="mt-4 h-[5px] w-56 rounded-full bg-navy-700/60 blur-[3px]" />
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-navy-900"
      aria-label="REVLIXI review hardware"
    >
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute -top-48 right-0 h-[700px] w-[700px] rounded-full bg-brand-500 opacity-[0.08] blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-[500px] w-[500px] rounded-full bg-brand-700 opacity-[0.06] blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 flex min-h-svh flex-col items-center justify-center gap-10 pt-20 pb-12 sm:gap-14 sm:pt-24 sm:pb-16 lg:flex-row lg:gap-20 lg:pt-0 lg:pb-0">
        {/* ── Left: text content ───────────────────────────────────────── */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-800/60 bg-brand-950/70 px-4 py-1.5 text-sm font-medium text-brand-300 animate-hero-fade-in">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-brand-400" />
            Get more Google reviews — without asking
          </div>

          {/* Headline */}
          <h1 className="mb-5 sm:mb-6 text-balance text-[clamp(2rem,5.5vw,4.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white animate-hero-fade-up [animation-delay:0.09s]">
            Every tap is a potential{" "}
            <span className="text-gradient-brand">five-star review.</span>
          </h1>

          {/* Sub */}
          <p className="mb-7 sm:mb-9 text-pretty text-base sm:text-lg leading-relaxed text-neutral-400 lg:max-w-[480px] animate-hero-fade-up [animation-delay:0.18s]">
            REVLIXI NFC + QR hardware puts your review request in front of
            customers at the exact moment they’re happiest. One tap opens your
            Google page directly — no app, no friction, no follow-up.
          </p>

          {/* CTAs */}
          <div className="mb-7 sm:mb-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start animate-hero-fade-up [animation-delay:0.27s]">
            <Button size="xl" variant="gold" asChild>
              <Link href="#shop">
                Shop Review Hardware
                <ArrowRight className="ml-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              size="xl"
              className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-navy-800 hover:text-white hover:border-neutral-600"
              variant="outline"
              asChild
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>

          {/* Trust pills */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5 lg:justify-start animate-hero-fade-in [animation-delay:0.38s]"
            aria-label="Product guarantees"
          >
            {heroTrustItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-500"
              >
                <CheckCircle2
                  className="h-3.5 w-3.5 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: NFC demo ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={heroTransition(heroDelays.visual)}
          className="w-full max-w-xs sm:max-w-md flex-1"
        >
          <NfcDemoVisual reduce={shouldReduceMotion} />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-hidden="true"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-neutral-700 p-[5px]">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-brand-400"
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
