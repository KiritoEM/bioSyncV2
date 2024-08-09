import { extendVariants, Input as NextUiInput } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

const Input = extendVariants(NextUiInput, {
  variants: {
    color: {
      default: {
        inputWrapper: [
          "bg-gray01",
          "data-[hover=true]: bg-gray01",
          "group-data-[focus=true]:bg-gray01",
          "group-data-[focus=true]:ring-2",
          "group-data-[focus=true]:ring-primary",
          "border",
          "bordered-gray03",
          "h-[48px]",
        ],
        input: ["placeholder: text-gray-400", "text-secondary"],
        label: ["text-secondary"],
      },
      white: {
        inputWrapper: [
          "bg-white01",
          "data-[hover=true]: bg-white01",
          "group-data-[focus=true]:bg-white01",
          "group-data-[focus=true]:ring-2",
          "group-data-[focus=true]:ring-primary",
          "border",
          "h-[54px]",
        ],
        input: ["placeholder: text-gray-400", "text-secondary"],
        label: ["text-secondary"],
      },
    },
    textSize: {
      base: {
        input: "text-base",
      },
    },
    removeLabel: {
      true: {
        label: "hidden",
      },
      false: {},
    },
  },
  defaultVariants: {
    color: "default",
    textSize: "base",
    radius:"md"
  },
});

const SearchInput = () => {
  return (
    <div className="search-input">
      <Input
        placeholder="Recherchez"
        classNames={{
          input: ["w-[300px]"],
        }}
        endContent={<Image src="/icons/search.svg" className="w-[21px]" />}
      />
    </div>
  );
};

export { Input, SearchInput };
