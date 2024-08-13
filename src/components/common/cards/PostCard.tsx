import postActions from "@/actions/postActions";
import { Button } from "@/components/UI/button";
import { timeAgo } from "@/helpers/date";
import { IpostCard } from "@/helpers/types";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import path from "path";
import { FC, useEffect, useState } from "react";

interface InewPostCard extends IpostCard {
  id?: string;
  createdAt?: Date;
}

const PostCard: FC<InewPostCard> = ({
  _id,
  poster,
  picture,
  name,
  description,
  price,
  likers,
  quantityType,
  quantity,
  id,
  createdAt,
}): JSX.Element => {
  const postPicture = path.basename(picture.file_path);
  const [currentLikes, setCurrentLikes] = useState(likers.length);
  const [liked, setIsLiked] = useState<boolean>(false);
  const { likePost, dislikePost } = postActions();
  const { deletePost } = postActions();

  useEffect(() => {
    setIsLiked(likers.includes(id));
  }, [likers, id]);

  const handleLike = async () => {
    if (!liked) {
      setCurrentLikes((prevLike) => prevLike + 1);
      setIsLiked(true);
      await likePost(_id as string);
    } else {
      setCurrentLikes((prevLike) => prevLike - 1);
      setIsLiked(false);
      await dislikePost(_id as string);
    }
  };

  return (
    <Card radius="sm" className="post-card shadow-none p-1">
      <CardHeader className="flex justify-between">
        <div className="user flex items-center gap-3">
          <Avatar src="/avatar.png" className="w-[48px] h-[48px]" />
          <div className="user__info flex flex-col gap-1">
            <h5 className="text-secondary font-semibold">{poster.pseudo}</h5>
            <p className="text-[13px] text-gray02">
              il y a {timeAgo(createdAt as Date)}
            </p>
          </div>
        </div>
        <Dropdown>
          <DropdownTrigger className="cursor-pointer">
            <Image src="/icons/more.svg" className="w-6" />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem
              key="delete"
              onClick={() => deletePost(_id as string)}
            >
              <div className="flex items-center gap-2">
                <Image src="/icons/trash.svg" width={20} />{" "}
                <p className="text-red-500">Supprimer</p>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
            <Image
              src={`${liked ? "/icons/liked.svg" : "/icons/like.svg"} `}
              className="cursor-pointer"
              width={21}
              onClick={handleLike}
            />
            <p className="text-secondary01">
              {currentLikes !== 0 && currentLikes}
            </p>
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
