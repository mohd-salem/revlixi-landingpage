"use client";

/**
 * HoverLift — whileHover + whileTap interaction wrapper.
 *
 * Wraps any element to add a premium press-and-lift feel using Framer Motion.
 * Use for interactive cards, feature tiles, CTA containers, and any surface
 * that benefits from tactile feedback beyond CSS :hover.
 *
 * CSS hover already handles simple colour/shadow transitions efficiently.
 * Use HoverLift when you want the y-translate + press-scale combination,
 * which CSS cannot reliably coordinate in a single interaction state.
 *
 * Reduced-motion: all transforms are suppressed when the system preference
 * is set — the element stays stationary.
 *
 * @example
 * // Wrap a card
 * <HoverLift>
 *   <article className="card-base p-8">…</article>
 * </HoverLift>
 *
 * // Custom lift and press
 * <HoverLift lift={8} tapScale={0.97} className="w-full">
 *   <CTABlock />
 * </HoverLift>
 */

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { duration, ease } from "@/components/motion/tokens";

export interface HoverLiftProps {
  children:  ReactNode;
  className?: string;
  /** Pixels to rise on hover. Default: 5 */
  lift?:      number;
  /** Scale factor while pressed. Default: 0.98 */
  tapScale?:  number;
}

export function HoverLift({
  children,
  className,
  lift     = 5,
  tapScale = 0.98,
}: HoverLiftProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -lift }}
      whileTap={reduce ? undefined : { scale: tapScale }}
      transition={{ duration: duration.fast, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
}
