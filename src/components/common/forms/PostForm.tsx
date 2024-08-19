import { FC, useState } from "react";
import { Image, SelectItem } from "@nextui-org/react";
import { ArLogo } from "@/pages/dashboard/post";
import { productLabels } from "@/helpers/constant";
import { Button } from "@/components/UI/button";
import { Input, UploadInput } from "@/components/UI/input";
import postActions from "@/actions/postActions";
import { Select } from "@/components/UI/select";

const PostForm: FC = (): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [reset, setReset] = useState<boolean>(false);
  const { addPost } = postActions();

  return (
    <form
      action="post"
      className="w-full flex flex-col gap-6"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
        addPost(e, file, "nombre")
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
        label="Quantité du produit"
        type="number"
        name="quantity"
        required
      />
      <Select label="Type de produit" name="type" color="default">
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

      <Button className="w-full" radius="md" type="submit">
        Continuer
      </Button>
    </form>
  );
};

export default PostForm;
