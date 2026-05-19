/**
 * SectionShell — opinionated section wrapper for all homepage sections.
 *
 * Handles:
 *   • Section semantic element with id + aria-labelledby wiring
 *   • Surface colour (white / subtle / dark) with correct text token mapping
 *   • Optional dot-grid texture on dark surfaces
 *   • Eyebrow → h2 → body header block, FadeIn-wrapped
 *   • Container + consistent section-padding
 *   • Children slot for the section's body content
 *
 * Usage (light section):
 *   <SectionShell
 *     id="how-it-works"
 *     eyebrow="In three steps"
 *     heading="How REVLIXI works"
 *     body="Place it. Let customers tap. Watch reviews grow."
 *   >
 *     <StepGrid />
 *   </SectionShell>
 *
 * Usage (dark section):
 *   <SectionShell
 *     id="use-cases"
 *     surface="dark"
 *     eyebrow="Built for your business"
 *     heading={<>Works for every business that earns its reputation</>}
 *     headingWidth="lg"
 *   >
 *     <UseCaseCards />
 *   </SectionShell>
 *
 * Notes:
 *   • `heading` accepts ReactNode so you can pass gradient spans inside h2.
 *   • Section id and the derived `${id}-heading` id power accessible
 *     aria-labelledby on the <section> element.
 *   • The FadeIn wraps ONLY the header block — not children — so the
 *     consuming component controls its own reveal animation.
 */

import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type Surface      = "white" | "subtle" | "dark" | "neutral-dark";
type Align        = "center" | "left";
type HeadingWidth = "sm" | "md" | "lg" | "full";
type ContentGap   = "sm" | "md" | "lg" | "xl";

// ─── Token maps ───────────────────────────────────────────────────────────────

const surfaceTokens: Record<
  Surface,
  { wrapper: string; eyebrow: string; heading: string; body: string }
> = {
  white: {
    wrapper:  "bg-white",
    eyebrow:  "text-brand-600",
    heading:  "text-neutral-950",
    body:     "text-neutral-500",
  },
  subtle: {
    wrapper:  "bg-neutral-50/70",
    eyebrow:  "text-brand-600",
    heading:  "text-neutral-950",
    body:     "text-neutral-500",
  },
  dark: {
    // bg-dot-grid-light adds the white dot texture defined in globals.css
    wrapper:  "bg-navy-900 bg-dot-grid-light",
    eyebrow:  "text-brand-400",
    heading:  "text-white",
    body:     "text-neutral-400",
  },
  // Sections that sit on neutral-950 (Features) rather than navy-900
  "neutral-dark": {
    wrapper:  "bg-neutral-950",
    eyebrow:  "text-brand-500",
    heading:  "text-white",
    body:     "text-neutral-400",
  },
};

const headingWidths: Record<HeadingWidth, string> = {
  sm:   "max-w-xl",
  md:   "max-w-2xl",
  lg:   "max-w-3xl",
  full: "",
};

const contentGaps: Record<ContentGap, string> = {
  sm: "mt-10",
  md: "mt-12",
  lg: "mt-12 sm:mt-14",
  xl: "mt-12 sm:mt-16",
};

// ─── Component ────────────────────────────────────────────────────────────────

export interface SectionShellProps {
  id?:           string;
  eyebrow?:      string;
  /** Accepts ReactNode so callers can embed gradient spans inside the h2 */
  heading:       React.ReactNode;
  body?:         string;
  surface?:      Surface;
  align?:        Align;
  headingWidth?: HeadingWidth;
  contentGap?:   ContentGap;
  className?:    string;
  children?:     React.ReactNode;
}

export function SectionShell({
  id,
  eyebrow,
  heading,
  body,
  surface      = "white",
  align        = "center",
  headingWidth = "md",
  contentGap   = "md",
  className,
  children,
}: SectionShellProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const tokens    = surfaceTokens[surface];
  const isCenter  = align === "center";

  return (
    <section
      id={id}
      className={cn("section-padding", tokens.wrapper, className)}
      aria-labelledby={headingId}
    >
      <div className="container">
        {/* ── Header block ── */}
        <FadeIn
          className={cn(
            headingWidths[headingWidth],
            isCenter && "mx-auto text-center"
          )}
        >
          {eyebrow && (
            <p className={cn("eyebrow mb-3", tokens.eyebrow)}>
              {eyebrow}
            </p>
          )}

          <h2
            id={headingId}
            className={cn(
              "section-heading mb-4 text-balance text-display-sm sm:text-display-md",
              tokens.heading
            )}
          >
            {heading}
          </h2>

          {body && (
            <p className={cn("section-body", tokens.body)}>
              {body}
            </p>
          )}
        </FadeIn>

        {/* ── Body content ── */}
        {children && (
          <div className={contentGaps[contentGap]}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
