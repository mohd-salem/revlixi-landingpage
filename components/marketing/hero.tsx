"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Easing } from "framer-motion";
import { heroTransition, heroDelays } from "@/components/motion/tokens";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroTrustItems } from "@/content/site";

// ─── NFC Demo Visual ─────────────────────────────────────────────────────────
// Stand product photo + animated phone sweeping left→right to simulate NFC tap.

function NfcDemoVisual({ reduce }: { reduce: boolean | null }) {
  // NFC rings fire when phone is near the stand's chip (timed with approach)
  // Phone cycle = 8.0s + 2.0s repeatDelay = 10.0s. Tap at t=2.24s (times[1]=0.28).
  // Ring base delay = 2.2s; repeatDelay = 10.0 - 1.3 = 8.7s → stays locked each cycle.
  const ringAnim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { scale: 0.35, opacity: 0.7 },
          animate: { scale: [0.35, 2.4], opacity: [0.55, 0] },
          transition: {
            duration: 1.3,
            delay: 2.2 + delay,
            repeat: Infinity,
            repeatDelay: 8.7,
            ease: "easeOut" as const,
          },
        };

  // Phone slides from left → right (approaches stand NFC chip) → HOLDS → back left
  // times: approach 0→28%, hold 28→55%, return 55→100%
  const phoneAnim = reduce
    ? {}
    : {
        animate: { x: [60, 180, 180, 50] },
        transition: {
          duration: 8.0,
          repeat: Infinity,
          repeatDelay: 2.0,
          ease: ["easeIn", "linear", "linear"] as Easing[],
          times: [0, 0.28, 0.55, 1],
        },
      };

  const badgeAnim = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 12, scale: 0.85 },
        animate: { opacity: [0, 1, 1, 0], y: [12, 0, 0, -14], scale: [0.85, 1, 1, 0.92] },
        transition: {
          duration: 1.5,
          delay: 2.4,
          repeat: Infinity,
          repeatDelay: 8.5,
          ease: "easeOut" as const,
        },
      };

  return (
    <div
      className="relative flex h-[520px] sm:h-[660px] lg:h-[780px] w-full items-center justify-center select-none overflow-visible"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-brand-400 opacity-[0.10] blur-[90px]" />
      </div>

      {/* Dot texture */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid-light" />

      <div className="relative flex items-center justify-center gap-1">
        {/* Phone — slides left→right to simulate NFC tap */}
        <motion.div className="relative z-20" {...phoneAnim}>
          {/* iPhone 17 Pro Max frame */}
          <div className="relative h-[390px] w-[180px] rounded-[38px] bg-zinc-900 shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_0_0_1.5px_rgba(255,255,255,0.12)]">
            {/* Volume buttons (left) */}
            <div className="absolute -left-[3px] top-[78px] h-7 w-[3px] rounded-l-full bg-zinc-700" />
            <div className="absolute -left-[3px] top-[116px] h-7 w-[3px] rounded-l-full bg-zinc-700" />
            {/* Power button (right) */}
            <div className="absolute -right-[3px] top-[100px] h-14 w-[3px] rounded-r-full bg-zinc-700" />
            {/* Screen */}
            <div className="absolute inset-[3px] overflow-hidden rounded-[35px] bg-white flex flex-col">
              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 z-10 h-[13px] w-[58px] -translate-x-1/2 rounded-full bg-black" />
              {/* Status bar */}
              <div className="flex shrink-0 items-center justify-between px-4 pt-3 pb-0">
                {/* Clock — "9:41" fades out when review posts, "9:42" fades in */}
                <div className="relative mt-3 h-[10px] w-[22px]">
                  <motion.span
                    className="absolute left-0 top-0 text-[8px] font-semibold text-black"
                    animate={reduce ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
                    transition={reduce ? {} : { duration: 8.0, repeat: Infinity, repeatDelay: 2.0, times: [0, 0.44, 0.49, 1], ease: "linear" }}
                  >9:41</motion.span>
                  <motion.span
                    className="absolute left-0 top-0 text-[8px] font-semibold text-black"
                    animate={reduce ? { opacity: 0 } : { opacity: [0, 0, 1, 1] }}
                    transition={reduce ? {} : { duration: 8.0, repeat: Infinity, repeatDelay: 2.0, times: [0, 0.44, 0.49, 1], ease: "linear" }}
                  >9:42</motion.span>
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <div className="flex items-end gap-[1.5px]">
                    {[4, 6, 8, 10].map((h) => (
                      <div key={h} className="w-[2px] rounded-sm bg-black" style={{ height: h }} />
                    ))}
                  </div>
                  <div className="relative h-[9px] w-[15px] rounded-[2px] border border-black">
                    <div className="absolute inset-[1.5px] right-[2px] rounded-[1px] bg-black" />
                    <div className="absolute -right-[3px] top-1/2 h-[4px] w-[2px] -translate-y-1/2 rounded-r-sm bg-black" />
                  </div>
                </div>
              </div>
              {/* Google Maps header */}
              <div className="flex shrink-0 items-center gap-1.5 border-b border-gray-100 px-3 py-1.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
                  <span className="text-[9px] font-black leading-none" style={{ background: 'linear-gradient(135deg,#4285F4 0%,#4285F4 40%,#EA4335 40%,#EA4335 70%,#FBBC05 70%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>G</span>
                </div>
                <span className="text-[8px] font-semibold text-gray-800">Google Maps</span>
                <div className="ml-auto flex gap-[3px]">
                  {[0, 1, 2].map((i) => <div key={i} className="h-[3px] w-[3px] rounded-full bg-gray-400" />)}
                </div>
              </div>
              {/* ── Animated screen layers (all duration=3.5 repeatDelay=0.4 = phone cycle) ── */}
              <div className="relative flex-1 overflow-hidden">

                {/* Layer 1 — Business listing (visible 0 → ~31%) */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3"
                  animate={reduce ? { opacity: 0 } : { opacity: [1, 1, 0, 0] }}
                  transition={reduce ? {} : { duration: 8.0, repeat: Infinity, repeatDelay: 2.0, times: [0, 0.26, 0.31, 1], ease: "linear" }}
                >
                  <div className="w-full rounded-xl bg-gray-50 p-2.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600">
                        <span className="text-[10px] font-black text-white">R</span>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-gray-900">REVLIXI</p>
                        <div className="mt-0.5 flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-2 w-2 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="ml-0.5 text-[6px] text-gray-400">4.9 (128)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-[7px] leading-tight text-gray-500">Tap your NFC card to share your experience</p>
                  <div className="flex h-7 w-full items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                    <span className="text-[8px] font-semibold text-blue-600">Write a review</span>
                  </div>
                </motion.div>

                {/* Layer 2 — Write review form (visible ~30 → ~46%) */}
                <motion.div
                  className="absolute inset-0 flex flex-col gap-2 p-3 pt-4"
                  animate={reduce ? { opacity: 0 } : { opacity: [0, 0, 1, 1, 0, 0] }}
                  transition={reduce ? {} : { duration: 8.0, repeat: Infinity, repeatDelay: 2.0, times: [0, 0.29, 0.34, 0.41, 0.46, 1], ease: "linear" }}
                >
                  <p className="text-center text-[9px] font-bold text-gray-800">Rate your experience</p>
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex h-[52px] w-full items-start rounded-lg border border-gray-200 bg-gray-50 p-2">
                    <p className="text-[7px] italic text-gray-400">Tell others about your visit…</p>
                  </div>
                  <div className="flex h-7 w-full items-center justify-center rounded-full bg-blue-500">
                    <span className="text-[8px] font-semibold text-white">Post</span>
                  </div>
                </motion.div>

                {/* Layer 3 — Review posted (visible ~47 → 100%) */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 pb-2"
                  animate={reduce ? { opacity: 1 } : { opacity: [0, 0, 0, 1, 1] }}
                  transition={reduce ? {} : { duration: 8.0, repeat: Infinity, repeatDelay: 2.0, times: [0, 0.43, 0.48, 0.52, 1], ease: "linear" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-7 w-7 text-green-500" />
                  </div>
                  <p className="text-center text-[11px] font-bold text-gray-900">Review posted!</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-center text-[8px] leading-tight text-gray-500">Thanks for sharing your experience</p>
                  <div className="mt-1 flex w-full items-center gap-2 rounded-xl bg-gray-50 p-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600">
                      <span className="text-[9px] font-black text-white">R</span>
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-gray-800">REVLIXI</p>
                      <p className="text-[7px] text-gray-500">NFC Smart Stand</p>
                    </div>
                  </div>
                  <div className="flex h-7 w-full items-center justify-center rounded-full bg-blue-500">
                    <span className="text-[8px] font-semibold text-white">Share your review</span>
                  </div>
                </motion.div>

              </div>
              {/* Home indicator */}
              <div className="flex h-4 shrink-0 items-center justify-center">
                <div className="h-1 w-16 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* NEW CARD product image with NFC rings */}
        <div className="relative z-10 h-[460px] w-[345px] sm:h-[580px] sm:w-[435px] lg:h-[700px] lg:w-[525px] -translate-y-[100px]">
          {/* Badge — floats above the card */}
          <motion.div
            className="absolute top-[calc(34%-50px)] left-[calc(28%+20px)] z-30 flex -translate-x-1/2 whitespace-nowrap items-center gap-2 rounded-xl border border-brand-500/25 bg-navy-800/95 px-3 py-2 shadow-card-lg backdrop-blur-sm"
            {...badgeAnim}
          >
            <div className="flex gap-[2px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-neutral-200">
              Review posted!
            </span>
          </motion.div>
          {/* NFC pulse rings — aligned with the tap icon on the card image */}
          <div className="absolute top-[55%] left-[calc(28%+20px)] z-20 -translate-x-1/2 -translate-y-1/2">
            {([0, 0.55, 1.1] as const).map((delay) => (
              <motion.div
                key={delay}
                className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400"
                {...ringAnim(delay)}
              />
            ))}
          </div>
          <Image
            src="/images/hero-card.png"
            alt="REVLIXI NEW CARD product photo"
            fill
            className="object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
            sizes="(max-width: 640px) 345px, (max-width: 1024px) 435px, 525px"
            quality={100}
            priority
          />
        </div>

        {/* Counter surface shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[5px] w-56 rounded-full bg-navy-700/60 blur-[3px]" />
      </div>
    </div>
  );
}

// ─── Hero stats ─────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: "30,000+",  label: "Businesses",          sub: "Across the US and counting" },
  { value: "4.9",      label: "Avg customer rating",  sub: "From 1,200+ verified reviews" },
  { value: "287%",     label: "Review growth",        sub: "Median lift within 60 days" },
  { value: "< 1 sec",  label: "Tap-to-review",        sub: "From NFC tap to open form" },
  { value: "$0 /mo",   label: "Ongoing fees",         sub: "One-time purchase. Always." },
] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-navy-900"
      aria-label="REVLIXI Review System"
      data-nav-theme="dark"
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
            REVLIXI NFC + QR Review System puts your review request in front of
            customers at the exact moment they’re happiest. One tap opens your
            Google page directly — no app, no friction, no follow-up.
          </p>

          {/* CTAs */}
          <div className="mb-7 sm:mb-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start animate-hero-fade-up [animation-delay:0.27s]">
            <Button size="xl" variant="gold" asChild>
              <Link href="#shop">
                Shop Review Review System
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

      {/* ── Stats strip ───────────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-navy-800/50" aria-label="REVLIXI by the numbers">
        <div className="container py-8 sm:py-10 lg:py-12">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
            {HERO_STATS.map(({ value, label, sub }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <dt className="text-2xl font-extrabold leading-none tracking-tight text-white sm:text-3xl">
                  {value}
                </dt>
                <dd className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.09em] text-brand-400">
                  {label}
                </dd>
                <span className="text-[11px] leading-snug text-neutral-500">{sub}</span>
              </div>
            ))}
          </dl>
        </div>
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
