import useUpload from "@/core/hooks/useUpload";
import { extendVariants, Input as NextUiInput } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { FC, useRef } from "react";

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
    radius: "md",
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

const UploadInput: FC<{ onChange: (file: File) => void }> = ({ onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { handleDragEnter, drag, handleDragLeave, handleDragOver, handleDrop } =
    useUpload(onChange);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`upload-input bg-white border border-dashed ${
        drag ? "border-primary" : "border-gray-300"
      } focus:border-primary rounded-xl w-full h-[185px] flex flex-col items-center justify-center cursor-pointer`}
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Image src="/icons/upload.svg" width={40} />
      <label htmlFor="upload" className="flex flex-col items-center">
        <h5 className="text-secondary mt-4 text-base">Ajouter une image</h5>
        <p className="text-green02 text-small">ou la déposer ici</p>
      </label>
      <input
        type="file"
        className="hidden"
        id="upload"
        ref={fileInputRef}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          e.target.files && onChange(e.target.files[0])
        }
      />
    </div>
  );
};

export { Input, SearchInput, UploadInput };
