import useUpload from "@/core/hooks/useUpload";
import { extendVariants, Input as NextUiInput } from "@nextui-org/react";
import { FC, useEffect, useRef } from "react";
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
        input: ["placeholder:text-gray-400", "text-secondary"],
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
        input: ["placeholder:text-gray-400", "text-secondary"],
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
    radius: "md",
  },
});

const SearchInput: FC = () => {
  return (
    <div className="search-input hidden lg:flex">
      <Input
        placeholder="Recherchez"
        classNames={{
          input: ["w-[300px]", "hidden lg:flex"],
        }}
        endContent={<Image src="/icons/search.svg" className="w-[21px]" />}
      />
    </div>
  );
};

const UploadInput: FC<{
  onChange: (file: File | null) => void;
  reset: boolean;
}> = ({ onChange, reset }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    handleDragEnter,
    drag,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    resetDrop,
  } = useUpload(onChange);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    resetDrop();
  }, [reset]);

  return (
    <div
      className={`upload-input bg-white border border-dashed ${
        drag ? "border-primary" : "border-gray-300"
      } focus:border-primary rounded-xl w-full h-[185px] flex flex-col items-center justify-center cursor-pointer`}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => {
        handleDrop(e);
      }}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => {
          const selectedFile = e.target.files?.[0];
          if (selectedFile) {
            onChange(selectedFile);
          }
        }}
      />
      <Image src="/icons/upload.svg" alt="upload" className="w-[42px]" />
      <p className="text-secondary font-semibold">Ajouter une photo</p>
      <span className="text-gray-500 font-secondary">
        (jpg, png, svg, webp)
      </span>
    </div>
  );
};

export { Input, SearchInput, UploadInput };
