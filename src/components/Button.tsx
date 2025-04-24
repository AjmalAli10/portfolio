import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { FaArrowRight } from "react-icons/fa";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90 text-white",
        outline:
          "border border-primary hover:border-primary/90 hover:bg-primary/10 text-primary",
        ghost: "hover:bg-primary/10 text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-black text-white hover:bg-orange-600 uppercase tracking-wider font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg",
      },
      size: {
        default: "px-4 py-2 text-sm rounded-md",
        sm: "px-3 py-1.5 text-xs rounded",
        lg: "px-6 py-3 text-base rounded-md",
        icon: "p-2 rounded-full",
        cta: "px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg",
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
  withArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      withArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {withArrow && (
          <FaArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
