// ─── components/ui/revlixi-logo.tsx ───────────────────────────────────────────
// REVLIXI brand mark and wordmark components.
//
// Brand palette:
//   Icon teal  → #14B8C4  (brand-500)
//   Wordmark   → currentColor (defaults to dark, adapts to dark backgrounds)
//
// Exports:
//   <RevlixiIcon />       — standalone NFC node mark SVG, currentColor
//   <RevlixiWordmark />   — "REVLIXI" text only, currentColor
//   <RevlixiLogo />       — PNG brand mark (icon + wordmark combined image)
// ──────────────────────────────────────────────────────────────────────────────

import Image from "next/image";
import { cn } from "@/lib/utils";

// ─── Icon mark ────────────────────────────────────────────────────────────────
// Hub-and-spoke NFC network node — the symbolic element of the REVLIXI mark.
// Three satellite nodes (upper-left, lower-left, right) connected to a central
// crosshair hub via lines.

interface IconProps {
  className?: string;
  /** Overrides the hub+node fill. Defaults to #14B8C4 (brand teal). */
  color?: string;
  size?: number;
}

export function RevlixiIcon({ className, color = "#14B8C4", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={Math.round(size * (20 / 26))}
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Lines — drawn first so hub and nodes render on top */}
      <line x1="13" y1="10" x2="3"  y2="2"  stroke={color} strokeWidth="2"   strokeLinecap="square" />
      <line x1="13" y1="10" x2="3"  y2="18" stroke={color} strokeWidth="2"   strokeLinecap="square" />
      <line x1="13" y1="10" x2="22" y2="10" stroke={color} strokeWidth="2"   strokeLinecap="square" />

      {/* Central crosshair hub */}
      <rect x="11" y="7.5" width="4"  height="5" fill={color} />  {/* vertical   */}
      <rect x="9"  y="9"   width="8"  height="3" fill={color} />  {/* horizontal */}

      {/* Satellite node squares */}
      <rect x="0"  y="0"  width="6" height="6" fill={color} />  {/* upper-left */}
      <rect x="0"  y="14" width="6" height="6" fill={color} />  {/* lower-left */}
      <rect x="20" y="7"  width="6" height="6" fill={color} />  {/* right      */}
    </svg>
  );
}

// ─── Wordmark ─────────────────────────────────────────────────────────────────

interface WordmarkProps {
  className?: string;
}

export function RevlixiWordmark({ className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-sans text-[1.1rem] font-extrabold leading-none tracking-[-0.02em]",
        className,
      )}
    >
      REVLIXI
    </span>
  );
}

// ─── Full logo (PNG image) ────────────────────────────────────────────────────
// Uses the brand PNG from /public/images/logo.png.
// object-cover crops the padding that surrounds the logo content in the
// square source file, ensuring the mark renders crisply at nav scale.

interface LogoProps {
  className?: string;
  /** Height in px — controls rendered size. Default 36. */
  height?: number;
  /** Optional accessible label override. */
  alt?: string;
}

export function RevlixiLogo({
  className,
  height = 36,
  alt = "REVLIXI",
}: LogoProps) {
  // The source image is 1080×1080 with the logo content centred in the middle
  // ~21% of the height. Displaying at a 4:1 aspect with object-cover zooms in
  // on that centre band so the wordmark is fully legible at small nav sizes.
  const width = Math.round(height * 4);

  return (
    <Image
      src="/images/logo.jpg"
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover", className)}
      style={{ width: `${width}px`, height: `${height}px` }}
      priority
    />
  );
}
