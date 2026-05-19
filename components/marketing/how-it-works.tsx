import { MapPin, Smartphone, Star } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionShell } from "@/components/ui/section-shell";
import { steps } from "@/content/how-it-works";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "map-pin": MapPin,
  smartphone: Smartphone,
  star: Star,
};

export function HowItWorks() {
  return (
    <SectionShell
      id="how-it-works"
      surface="white"
      eyebrow="Simple by design"
      heading="Three steps to a steady stream of reviews"
      body="No staff training. No follow-up texts. No reminders. Just hardware that works in the background while you serve your customers."
      contentGap="xl"
    >
      <StaggerChildren
        className="grid gap-5 md:grid-cols-3 md:gap-8"
        staggerDelay={0.12}
      >
        {steps.map((step) => {
          const Icon = iconMap[step.icon] ?? Star;
          return (
            <StaggerItem key={step.step}>
              <article className="group relative flex flex-col gap-5 rounded-2xl border border-neutral-100 bg-white p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-md hover:border-brand-100 hover:-translate-y-1">
                {/* Step number + icon */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 border border-brand-100"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 text-brand-600" />
                  </div>
                  <span
                    className="mt-1 text-5xl font-extrabold leading-none tracking-[-0.04em] text-neutral-100 select-none"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-base font-bold text-neutral-950">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500 text-pretty">
                    {step.description}
                  </p>
                </div>

                {/* Connector line — visible between cards on desktop */}
                {step.step < steps.length && (
                  <div
                    className="pointer-events-none absolute right-0 top-[3.5rem] hidden translate-x-1/2 md:block"
                    aria-hidden="true"
                  >
                    <svg
                      width="40"
                      height="2"
                      viewBox="0 0 40 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-neutral-200"
                    >
                      <line
                        x1="0"
                        y1="1"
                        x2="40"
                        y2="1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                    </svg>
                  </div>
                )}
              </article>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </SectionShell>
  );
}
