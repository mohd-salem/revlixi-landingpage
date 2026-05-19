"use client";

/**
 * ParallaxDrift — scroll-linked vertical parallax wrapper.
 *
 * Tracks the element's own viewport journey (start-enters-bottom → end-exits-top)
 * and applies a smooth y transform offset. The result is that the element
 * scrolls at a slightly different rate from the page, creating perceived depth.
 *
 * Usage guidelines:
 *   - depth 20–40   → subtle ambient backgrounds, section orbs, decorative SVGs
 *   - depth 40–80   → mid-ground content panels
 *   - Avoid on text — readability suffers above depth ~15
 *   - Always reduced-motion safe (y stays 0 when prefers-reduced-motion)
 *
 * @example
 * // Slow-drifting background orb
 * <ParallaxDrift depth={30} className="pointer-events-none absolute inset-0">
 *   <div className="h-[500px] w-[500px] rounded-full bg-brand-500 blur-[120px] opacity-10" />
 * </ParallaxDrift>
 *
 * // Product showcase visual that drifts upward into view
 * <ParallaxDrift depth={50}>
 *   <NfcDemoVisual />
 * </ParallaxDrift>
 */

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { type ReactNode } from "react";

export interface ParallaxDriftProps {
  children: ReactNode;
  className?: string;
  /**
   * Total vertical drift range in pixels across the element's viewport journey.
   * Positive = element drifts upward (slower scroll feel, recedes into bg).
   * Negative = element drifts downward (faster than scroll, approaches fg).
   * Default: 40
   */
  depth?: number;
}

export function ParallaxDrift({
  children,
  className,
  depth = 40,
}: ParallaxDriftProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Track the wrapper element's journey through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map 0 (element enters bottom) → 1 (element exits top) to a y range.
  // Half offset on each side so the element is centred in its resting position.
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [depth / 2, -(depth / 2)]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
