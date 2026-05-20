import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { ctaTrustItems } from "@/content/site";

export function CTAStrip() {
  return (
    <section
      className="relative overflow-hidden bg-neutral-950 py-20 md:py-28 lg:py-32"
      aria-labelledby="cta-heading"
      data-nav-theme="dark"
    >
      {/* Background orbs */}
      <div
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-950/30 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-brand-900/20 blur-[80px]"
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <FadeIn direction="none">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-700/40 bg-brand-950/50 px-4 py-1.5 text-sm font-medium text-brand-400">
              <span
                className="flex h-1.5 w-1.5 rounded-full bg-brand-400"
                aria-hidden="true"
              />
              Your next 5-star review is already out there
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.08}>
            <h2
              id="cta-heading"
              className="mb-5 text-balance text-display-md sm:text-display-lg font-extrabold tracking-[-0.025em] text-white"
            >
              Every customer interaction is a{" "}
              <span className="text-gradient-brand">review waiting to happen.</span>
            </h2>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.16}>
            <p className="mb-10 text-pretty text-base sm:text-lg text-neutral-400 leading-relaxed">
              Customers who have a great experience with you are happy to say so — they just
              need a frictionless path. REVLIXI puts that path in their hands at exactly the right moment.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.24}>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="xl" variant="gold" asChild>
                <Link href="#shop">
                  Shop Now — From $19
                  <ArrowRight className="ml-1 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="xl"
                className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-600"
                variant="outline"
                asChild
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </FadeIn>

          {/* Inline trust */}
          <FadeIn delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
              {ctaTrustItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-neutral-500"
                >
                  <Star
                    className="h-3.5 w-3.5 fill-brand-600 text-brand-600"
                    aria-hidden="true"
                  />
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
