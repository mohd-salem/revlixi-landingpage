import { FadeIn } from "@/components/motion/fade-in";
import { platforms } from "@/content/site";

export function LogoBar() {
  return (
    <section
      className="border-b border-neutral-100 bg-neutral-50/50 py-8 sm:py-10"
      aria-label="Supported review platforms"
    >
      <div className="container">
        <FadeIn direction="none" duration={0.5}>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
            Redirect to any platform. Google, Yelp, Facebook, Trustpilot — or any URL.
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-8"
            role="list"
            aria-label="Review platforms"
          >
            {platforms.map((platform) => (
              <div
                key={platform.name}
                role="listitem"
                className="flex items-center gap-2.5 text-neutral-400 transition-colors duration-200 hover:text-neutral-700"
                aria-label={platform.name}
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-xs font-bold text-neutral-600 shadow-card-sm"
                  aria-hidden="true"
                >
                  {platform.abbr}
                </span>
                <span className="text-xs sm:text-sm font-semibold">{platform.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
