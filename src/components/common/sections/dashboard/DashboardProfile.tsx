import userActions from "@/actions/userActions";
import { UserCardSkeleton } from "@/components/UI/skeleton";
import useFetchCurrentUser from "@/core/hooks/useFetchCurrentUser";
import useResponsive from "@/core/hooks/useResponsive";
import { RootState } from "@/core/redux/store.config";
import {
  calculateLikes,
  getAllImages,
  totalPicture,
} from "@/helpers/profilHelper";
import { IpostCard } from "@/helpers/types";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { FC } from "react";
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
  const currentUser = useSelector((state: RootState) => state.user.user);
  const posts = currentUser?.posts as IpostCard[] | undefined;
  const { imageRef, imageWidth } = useResponsive();
  const { loading } = useFetchCurrentUser();

  return (
    <div className="dashboard-home__profile sticky top-0 w-[315px] 2xl:w-[370px] shrink-0 h-[calc(100vh-0.8rem)] rounded-lg overflow-x-hidden overflow-y-auto hidden lg:flex">
      {loading ? (
        <UserCardSkeleton />
      ) : (
        <Card className="w-full bg-white h-max rounded-lg p-1 mb-[20vh]">
          <CardHeader className="flex flex-col h-max">
            <div className="profile-content relative mt-4 px-[30px] flex flex-col gap-3 items-center">
              <img
                src={`https://ui-avatars.com/api/?name=${currentUser?.pseudo}&background=0D8ABC&color=fff`}
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
              <ProfileDetailsItem
                label="Likes"
                stat={calculateLikes(posts as IpostCard[]) as number}
              />
              <ProfileDetailsItem
                label="Photos"
                stat={totalPicture(posts as IpostCard[]) as number}
              />
            </div>
          </CardBody>
          <CardFooter className="flex flex-col items-start">
            <Divider />
            <div className="profile-pictures mt-3 w-full">
              {getAllImages(posts as IpostCard[])?.length !== 0 ? (
                <>
                  {" "}
                  <header>
                    <h5 className="font-medium">Vos photos</h5>
                  </header>
                  <div className="gallery grid grid-cols-3 mt-2 gap-1">
                    {getAllImages(posts as IpostCard[])?.map((image, index) => (
                      <img
                        key={index}
                        ref={imageRef}
                        src={image}
                        className="object-cover rounded-md"
                        style={{ height: imageWidth, width: "100%" }}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <h5 className="text-secondary01">Aucune image publiée</h5>
              )}
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default DashboardProfile;
