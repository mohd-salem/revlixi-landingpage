import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";
import { SectionShell } from "@/components/ui/section-shell";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/content/products";

export function ProductFamily() {
  const featuredProduct   = products.find((p) => p.id === "stand")!;
  const secondaryProducts = products.filter((p) => p.id !== "stand");

  return (
    <SectionShell
      id="products"
      surface="subtle"
      eyebrow="Three formats, one mission"
      heading="One goal, three form factors"
      body="Whether you run a busy restaurant, service clients on the road, or want reviews anywhere customers pause — there is a REVLIXI built for that exact moment."
      contentGap="md"
    >
      {/* Featured Stand card */}
      <FadeIn>
        <ProductCard product={featuredProduct} variant="featured" />
      </FadeIn>

      {/* Secondary: Card + Sticker */}
      <StaggerChildren className="mt-6 grid gap-6 md:grid-cols-2" staggerDelay={0.1}>
        {secondaryProducts.map((product) => (
          <StaggerItem key={product.id}>
            <ProductCard product={product} />
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Bottom reassurance note */}
      <FadeIn className="mt-10 text-center" delay={0.2}>
        <p className="text-sm text-neutral-400">
          All REVLIXI hardware includes a{" "}
          <span className="font-semibold text-neutral-600">
            free link management dashboard
          </span>{" "}
          and a{" "}
          <span className="font-semibold text-neutral-600">
            12-month warranty
          </span>
          . No subscriptions, ever.
        </p>
      </FadeIn>
    </SectionShell>
  );
}


