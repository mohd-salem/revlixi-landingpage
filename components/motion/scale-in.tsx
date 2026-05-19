"use client";

/**
 * ScaleIn — viewport-triggered scale + fade reveal.
 *
 * Use for elements that should appear to grow into place on scroll:
 * stat callouts, proof chips, icon-chips, modal entrances.
 *
 * Pairs with FadeIn (directional fade) and StaggerChildren (grid sequences).
 * All durations and easing values come from motion/tokens to stay in sync
 * with the rest of the design system.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { ease, duration as dur } from "@/components/motion/tokens";

export interface ScaleInProps {
  children: ReactNode;
  className?: string;
  /** Extra delay in seconds before the animation starts. Default: 0 */
  delay?: number;
  /** Animation duration in seconds. Default: duration.base (0.35 s) */
  duration?: number;
  /** Fire once when element enters viewport, then stay visible. Default: true */
  once?: boolean;
  /** Fraction of element that must be visible to trigger. Default: 0.2 */
  amount?: number | "all" | "some";
  /** Starting scale factor before reveal. Default: 0.96 */
  initialScale?: number;
}

export function ScaleIn({
  children,
  className,
  delay       = 0,
  duration    = dur.base,
  once        = true,
  amount      = 0.2,
  initialScale = 0.96,
}: ScaleInProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale:   reduce ? 1 : initialScale,
    },
    visible: {
      opacity: 1,
      scale:   1,
      transition: {
        duration: reduce ? 0 : duration,
        delay:    reduce ? 0 : delay,
        ease:     ease.out,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
