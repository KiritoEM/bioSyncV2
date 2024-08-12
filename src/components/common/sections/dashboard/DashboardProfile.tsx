import userActions from "@/actions/userActions";
import { RootState } from "@/core/redux/store.config";
import { imageSliding } from "@/helpers/constant";
import { IpostCard } from "@/helpers/types";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import path from "path";
import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const ProfileDetailsItem: FC<{
  stat: number | string;
  label: string;
}> = ({ stat, label }) => {
  return (
    <div className="profile-details__item flex flex-col items-center">
      <h4 className="text-primary text-3xl font-calSans">{stat}</h4>
      <p className="text-secondary01 text-small">{label}</p>
    </div>
  );
};

const DashboardProfile: FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const { getCurrentUser } = userActions();
  const currentUser = useSelector((state: RootState) => state.user.user);
  const totalLikes = (currentUser?.posts as IpostCard[]).reduce(
    (acc, post) => acc + post.likers.length,
    0
  );
  const totalPictures = (currentUser?.posts as IpostCard[]).length;
  const allImages = (currentUser?.posts as IpostCard[]).map(
    (post) => `/uploads/${path.basename(post.picture.file_path)}`
  );

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  }, [imageRef.current]);

  return (
    <div className="dashboard-home__profile sticky top-0 w-[370px] h-[calc(100vh-0.8rem)] rounded-lg overflow-x-hidden overflow-y-auto">
      <Card className="w-full bg-white h-max rounded-lg p-1 mb-[20vh]">
        <CardHeader className="flex flex-col h-max">
          <img
            src="/cover.jpg"
            className="cover object-cover w-full h-[154px] rounded-lg"
          />
          <div className="profile-content relative -mt-[44px] px-[30px] flex flex-col gap-3 items-center">
            <img
              src="/avatar.png"
              className="profile-picture w-[84px] h-[81px] rounded-full object-cover border-2 border-white"
            />
            <div className="flex flex-col items-center">
              <h5 className="text-secondary font-calSans text-[18px]">
                {currentUser?.name}
              </h5>
              <p className="text-green02 -mt-1">{currentUser?.pseudo}</p>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="profile-details flex justify-between mt-3 px-4">
            <ProfileDetailsItem
              label="Publications"
              stat={currentUser?.posts?.length as number}
            />
            <ProfileDetailsItem label="Likes" stat={totalLikes} />
            <ProfileDetailsItem label="Photos" stat={totalPictures} />
          </div>
        </CardBody>
        <CardFooter className="flex flex-col items-start">
          <Divider />
          <div className="profile-pictures mt-3 w-full">
            <header>
              <h5 className="font-medium">Vos photos</h5>
            </header>
            {allImages.length !== 0 ? (
              <div className="gallery grid grid-cols-3 mt-2 gap-1">
                {allImages.map((image, index) => (
                  <img
                    key={index}
                    ref={imageRef}
                    src={image}
                    className="object-cover rounded-md"
                    style={{ height: imageWidth, width: "100%" }}
                  />
                ))}
              </div>
            ) : (
              <h5 className="text-secondary01">Aucun image</h5>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardProfile;
