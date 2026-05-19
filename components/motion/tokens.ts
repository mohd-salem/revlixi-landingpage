// ─── components/motion/tokens.ts ──────────────────────────────────────────────
// Centralized motion language for REVLIXI.
// All animation components import easing, duration, and variant presets from
// here — never hardcode animation values inside component files.
//
// Preset hierarchy:
//   tokens.ts          → raw values (ease curves, duration scale)
//   fade-in.tsx        → generic scroll-reveal wrapper (uses tokens)
//   stagger-children.tsx → grid stagger pair (uses tokens)
//   [future]           → hero parallax, page transitions (use tokens)
// ──────────────────────────────────────────────────────────────────────────────

import type { Variants, Transition } from "framer-motion";

// ─── Easing curves ────────────────────────────────────────────────────────────

export const ease = {
  /** Standard deceleration — default for scroll-triggered entries */
  out:   [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
  /** Standard acceleration — default for exits */
  in:    [0.55, 0.00, 0.85, 0.06] as [number, number, number, number],
  /** Symmetric in-out — use for section transitions and parallax */
  inOut: [0.76, 0.00, 0.24, 1.00] as [number, number, number, number],
} as const;

// ─── Duration scale ───────────────────────────────────────────────────────────

export const duration = {
  fast:  0.20, // micro-interactions, hover state changes
  base:  0.35, // standard UI transitions
  slow:  0.55, // scroll-triggered reveals (default for FadeIn)
  xslow: 0.80, // hero entrances, full-page transitions
} as const;

// ─── Preset transitions ───────────────────────────────────────────────────────

export const transition = {
  fast:  { duration: duration.fast,  ease: ease.out   } satisfies Transition,
  base:  { duration: duration.base,  ease: ease.out   } satisfies Transition,
  slow:  { duration: duration.slow,  ease: ease.out   } satisfies Transition,
  xslow: { duration: duration.xslow, ease: ease.inOut } satisfies Transition,
} as const;

// ─── Variant presets ──────────────────────────────────────────────────────────

/** Standard scroll-triggered fade-up — default reveal for most sections */
export const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,  transition: transition.slow },
};

/** Opacity-only fade — use where vertical translate is visually inappropriate */
export const fadeInVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: transition.slow },
};

/** Scale + fade — card hover reveals, modal entrances, tooltip popins */
export const scaleUpVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1,    transition: transition.base },
};

/** Slide from left — horizontal list items, side panels */
export const slideInLeftVariants: Variants = {
  hidden:  { opacity: 0, x: -28 },
  visible: { opacity: 1, x:   0, transition: transition.slow },
};

/** Slide from right — horizontal list items, side panels */
export const slideInRightVariants: Variants = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x:  0, transition: transition.slow },
};

/**
 * Reduced-motion safe fallback.
 * Swap in whenever useReducedMotion() returns true.
 * Always a pure instant fade — zero duration, zero translate.
 */
export const reducedMotionVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

/**
 * Stagger container variant factory.
 * Creates a container that sequences its children at even intervals.
 *
 * @param staggerDelay  - seconds between each child animation (default 0.1)
 * @param delayChildren - initial delay before first child fires (default 0.05)
 *
 * @example
 * <motion.ul variants={staggerContainerVariants(0.08)} initial="hidden" animate="visible">
 *   <motion.li variants={fadeUpVariants}>…</motion.li>
 * </motion.ul>
 */
export function staggerContainerVariants(
  staggerDelay = 0.1,
  delayChildren = 0.05,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

// ─── Hero choreography ────────────────────────────────────────────────────────

/**
 * Hero entrance transition factory.
 * Returns a Transition with the standard hero duration and brand easing,
 * parameterised by delay so each hero element can be sequenced precisely.
 *
 * Always import the delay from `heroDelays` — never pass a magic number.
 *
 * @example
 * <motion.h1
 *   initial={{ opacity: 0, y: 24 }}
 *   animate={{ opacity: 1, y: 0 }}
 *   transition={heroTransition(heroDelays.headline)}
 * />
 */
export function heroTransition(delay = 0): Transition {
  return { duration: 0.65, delay, ease: ease.out };
}

/**
 * Official delay sequence for the hero element choreography.
 * Elements are offset by ~90 ms each so the entrance feels like a
 * single fluid sweep rather than simultaneous or jittery pops.
 *
 *   eyebrow  → 0 s     first element, sets context
 *   headline → 0.09 s  follows immediately after eyebrow settles
 *   body     → 0.18 s  body copy trails the headline naturally
 *   cta      → 0.27 s  action appears once message is landed
 *   trust    → 0.38 s  social proof anchors the CTA
 *   visual   → 0.22 s  product visual enters in parallel with body copy
 */
export const heroDelays = {
  eyebrow:  0,
  headline: 0.09,
  body:     0.18,
  cta:      0.27,
  trust:    0.38,
  visual:   0.22,
} as const;
