import { FadeIn } from "@/components/motion/fade-in";
import { ProofChip } from "@/components/ui/proof-chip";
import { proofStats } from "@/content/proof-stats";

export function ProofRibbon() {
  return (
    <section
      className="border-b border-neutral-100 bg-white py-10 sm:py-12"
      aria-label="Key performance metrics"
    >
      <div className="container">
        <FadeIn direction="none" duration={0.45}>
          <dl className="flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-8 md:gap-x-0">
            {proofStats.map((stat, i) => (
              <ProofChip
                key={stat.value}
                value={stat.value}
                label={stat.label}
                sublabel={stat.sublabel}
                divider={i > 0}
                className="basis-[42%] sm:basis-[28%] md:basis-auto"
              />
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

