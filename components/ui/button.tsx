import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-950 text-white shadow hover:bg-neutral-800 active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-50 hover:border-neutral-300 text-neutral-950",
        secondary:
          "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-200",
        ghost: "hover:bg-neutral-100 hover:text-neutral-950",
        link: "text-neutral-950 underline-offset-4 hover:underline",
        gold: "bg-brand-500 text-white shadow hover:bg-brand-600 active:scale-[0.98]",
        // For use on dark/navy surfaces
        "ghost-dark": "text-neutral-300 hover:bg-navy-800/70 hover:text-white active:scale-[0.98]",
        // Secondary CTA on light surfaces — teal outline, transparent fill
        "outline-brand": "border border-brand-300/60 bg-transparent text-brand-600 hover:bg-brand-50 hover:border-brand-400 active:scale-[0.98]",
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-11 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-base font-bold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
