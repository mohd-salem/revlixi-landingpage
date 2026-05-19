import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { testimonials } from "@/content/testimonials";
import type { TestimonialItem } from "@/types";

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const cls = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? `${cls} fill-brand-400 text-brand-400`
              : `${cls} fill-navy-700 text-navy-700`
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <StaggerItem>
      <figure className="break-inside-avoid rounded-2xl border border-navy-700/60 bg-navy-800/50 p-6 transition-all duration-300 hover:border-brand-700/50">
        <StarRating rating={testimonial.rating} />
        <blockquote className="mt-4">
          <p className="text-sm leading-relaxed text-neutral-300 text-pretty">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-700/50 pt-4">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-900/60 text-xs font-bold text-brand-300"
            aria-hidden="true"
          >
            {testimonial.initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">
              {testimonial.author}
            </p>
            <p className="truncate text-xs text-neutral-500">
              {testimonial.role}
              {testimonial.company ? `, ${testimonial.company}` : ""}
            </p>
          </div>
        </figcaption>
      </figure>
    </StaggerItem>
  );
}

function FeaturedTestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <FadeIn>
        <figure className="rounded-2xl border border-brand-500/30 bg-brand-950/40 p-6 md:p-8 ring-1 ring-brand-500/20">
        <StarRating rating={testimonial.rating} size="lg" />
        <blockquote className="mt-5">
          <p className="text-lg font-medium leading-relaxed text-white text-pretty">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4 border-t border-navy-700/50 pt-5">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-800/60 text-sm font-bold text-brand-300"
            aria-hidden="true"
          >
            {testimonial.initials}
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.author}</p>
            <p className="text-sm text-neutral-400">
              {testimonial.role}
              {testimonial.company ? `, ${testimonial.company}` : ""}
            </p>
          </div>
        </figcaption>
      </figure>
    </FadeIn>
  );
}

export function Testimonials() {
  const featured   = testimonials.find((t) => t.id === "1")!;
  const supporting = testimonials.filter((t) => t.id !== "1");

  return (
    <section
      id="testimonials"
      className="section-padding bg-navy-900 bg-dot-grid-light"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        {/* Aggregate score */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-400">
            Verified customer reviews
          </p>
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              4.9
            </span>
            <div className="flex flex-col items-start gap-1">
              <StarRating rating={5} size="lg" />
              <span className="text-xs text-neutral-400">
                from 1,200+ verified reviews
              </span>
            </div>
          </div>
          <h2
            id="testimonials-heading"
            className="mb-4 text-balance text-display-sm sm:text-display-md font-extrabold tracking-tight text-white"
          >
            Real businesses. Real results.
          </h2>
          <p className="text-pretty text-base sm:text-lg text-neutral-400 leading-relaxed">
            Thousands of owners across restaurants, trades, salons, and retail
            use REVLIXI as their passive review engine.
          </p>
        </FadeIn>

        {/* Featured testimonial */}
        <div className="mx-auto mt-10 sm:mt-12 max-w-2xl">
          <FeaturedTestimonialCard testimonial={featured} />
        </div>

        {/* Supporting wall */}
        <StaggerChildren
          className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3"
          staggerDelay={0.07}
        >
          {supporting.map((t) => (
            <div key={t.id} className="mb-4">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
