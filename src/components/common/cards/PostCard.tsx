import { Button } from "@/components/UI/button";
import { IpostCard } from "@/helpers/types";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import path from "path";
import { FC } from "react";

const PostCard: FC<IpostCard> = ({
  poster,
  picture,
  name,
  description,
  price,
  likes,
  quantityType,
  quantity,
}): JSX.Element => {
  const postPicture = path.basename(picture.file_path);
  return (
    <Card radius="sm" className="post-card shadow-none p-1">
      <CardHeader className="flex justify-between">
        <div className="user flex items-center gap-3">
          <Avatar src="/avatar.png" radius="sm" className="w-[48px] h-[48px]" />
          <div className="user__info flex flex-col gap-1">
            <h5 className="text-secondary font-semibold">{poster.pseudo}</h5>
            <p className="text-[13px] text-gray02">il y a 3 minutes</p>
          </div>
        </div>
        <Image src="/icons/more.svg" className="w-6" />
      </CardHeader>
      <CardBody>
        <div
          className="post-card__image h-[400px] flex items-end justify-end p-3"
          style={{
            backgroundImage: `url("/uploads/${postPicture}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "8px",
          }}
        >
          <div className="price p-2 border-2 border-yellow01 w-max rounded-md">
            <p className="text-white01 font-calSans">
              Prix: {price}Ar / {quantityType === "nombre" ? "pièce" : "kilos"}
            </p>
          </div>
        </div>
        <div className="post-card__details mt-4">
          <h3 className="text-secondary text-lg font-semibold">{name}</h3>
          <p className="text-secondary01 mt-1">{description}</p>
          <h5 className="text-secondary01 mt-1">
            Quantité dispo: <span className="text-primary">{quantity}</span>
          </h5>
        </div>
      </CardBody>
      <CardFooter>
        <div className="post-card__footer flex gap-16">
          <div className="likes flex items-center gap-2">
            <Image src="/icons/like.svg" width={21} />
            <p className="text-secondary01">{likes !== 0 && likes}</p>
          </div>
          <Button
            radius="md"
            startContent={
              <Image
                src="/icons/location-active.svg"
                width={22}
                className="ml-1"
              />
            }
          >
            Voir sur map
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
