import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionShell } from "@/components/ui/section-shell";
import { faqItems } from "@/content/faq";

export function FAQ() {
  return (
    <SectionShell
      id="faq"
      surface="white"
      eyebrow="Common questions"
      heading="Questions, answered"
      body="Everything you need to decide with confidence."
      headingWidth="lg"
      contentGap="md"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-card"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none px-4 sm:px-6 first:rounded-t-2xl last:rounded-b-2xl"
              >
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-neutral-950 py-5 hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
