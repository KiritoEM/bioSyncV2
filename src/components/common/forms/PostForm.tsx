import { FC, useState } from "react";
import { ButtonGroup } from "@chakra-ui/react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Select,
  Selection,
  SelectItem,
} from "@nextui-org/react";
import { ArLogo } from "@/pages/dashboard/post";
import { labels, productLabels } from "@/helpers/constant";
import { Button } from "@/components/UI/button";
import { Input, UploadInput } from "@/components/UI/input";
import postActions from "@/actions/postActions";

const PostForm: FC = (): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedOption, setOption] = useState(new Set<string>([labels[0]]));
  const [reset, setReset] = useState<boolean>(false);
  const { addPost } = postActions();

  let quantityType: "kilos" | "nombre" =
    Array.from(selectedOption).toString() === "continuer(en kilos)"
      ? "kilos"
      : "nombre";

  const handleSelectionChange = (keys: Selection) => {
    const selectedValues = Array.from(keys) as string[];
    setOption(new Set<string>(selectedValues));
  };

  const uploadInputKey = file ? "file-uploaded" : "file-reset";

  return (
    <form
      action="post"
      className="w-full flex flex-col gap-6"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
        addPost(e, file, quantityType)
      }
    >
      <Input
        isClearable
        color="white"
        label="Nom de votre produit"
        required
        name="product-name"
      />
      <Input
        color="white"
        label="Prix du produit"
        type="number"
        endContent={<ArLogo />}
        name="price"
        required
      />
      <Input
        color="white"
        label="Quantité du produit (en kilos ou en nombre)"
        type="number"
        name="quantity"
        required
      />
      <Select
        classNames={{
          label: "font-secondary",
          trigger: "h-[52px] bg-white01",
          value: "text-secondary pr-10",
        }}
        label="Type de produit"
        name="type"
      >
        {productLabels.map((label) => (
          <SelectItem key={label}>{label}</SelectItem>
        ))}
      </Select>
      <textarea
        required
        className="h-[125px] border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none px-4 py-3 text-base shadow-sm"
        placeholder="Description du produit"
        name="product-description"
      />
      {!file ? (
        <UploadInput
          key={uploadInputKey}
          onChange={(file: File | null) => setFile(file)}
          reset={reset}
        />
      ) : (
        <div
          className="picture-preview bg-white w-full h-[400px] rounded-xl overflow-hidden p-5 flex justify-end"
          style={{
            backgroundImage: `url(${URL.createObjectURL(file)})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="close-btn bg-yellow01 opacity-85 w-[42px] h-[42px] flex items-center justify-center rounded-full"
            style={{ zIndex: 60 }}
            onClick={() => {
              setFile(null);
              setReset(true);
            }}
          >
            <Image
              src="/icons/close.svg"
              className="cursor-pointer"
              width={16}
            />
          </div>
        </div>
      )}

      <ButtonGroup variant="flat" className="w-full">
        <Button className="w-full" radius="md" type="submit">
          {Array.from(selectedOption).join(", ")}
        </Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly radius="md">
              <svg
                fill="none"
                height="14"
                viewBox="0 0 24 24"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            selectedKeys={selectedOption}
            selectionMode="single"
            onSelectionChange={handleSelectionChange}
          >
            {labels.map((label) => (
              <DropdownItem key={label}>{label}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </form>
  );
};

export default PostForm;
