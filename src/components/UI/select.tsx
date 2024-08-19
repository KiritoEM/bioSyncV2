import { extendVariants } from "@nextui-org/react";
import { Select as NextUISelect } from "@nextui-org/react";

const Select = extendVariants(NextUISelect, {
  variants: {
    color: {
      default: {
        trigger: "bg-white01",
        label: "text-secondary",
        value: "text-secondary pr-10",
      },
    },
    size: {
      sm: {
        trigger: "text-sm px-3 h-[52px]",
        label: "text-sm",
        value: "text-sm",
      },
      md: {
        trigger: "text-md px-4 h-[55px]",
        label: "text-md",
        value: "text-md",
      },
      lg: {
        trigger: "text-lg px-5 h-[60px]",
        label: "text-lg",
        value: "text-lg",
      },
    },
  },
  defaultVariants: {
    color: "default",
    size: "sm",
    radius: "md",
  },
});

export { Select };
