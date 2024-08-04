/**
 * Customs buttons avec next UI
 */

import { Button as NextButtonUI, extendVariants } from "@nextui-org/react";

const Button = extendVariants(NextButtonUI, {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-primary/80 hover:scale-95",
      secondary:
        "bg-secondary text-white  hover:bg-secondary/80 hover:scale-95",
      white: "bg-white text-secondary hover:scale-95 hover:bg-white/80",
      borderedSecondary:
        "bg-transparent border border-secondary text-secondary  hover:bg-secondary/90 hover:text-white hover:scale-95",
    },
    size: {
      xs: "px-2 text-tiny gap-1",
      sm: "px-3 text-small gap-3",
      md: "px-4 text-small md:text-medium gap-4",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
    radius: "full",
  },
  compoundVariants: [
    {
      isDisabled: "true",
      variant: "primary",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});

export { Button };
