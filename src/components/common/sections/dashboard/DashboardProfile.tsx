import { imageSliding } from "@/helpers/constant";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { FC } from "react";

export const ProfileDetailsItem: FC<{
  stat: number | string;
  label: string;
}> = ({ stat, label }): JSX.Element => {
  return (
    <div className="profile-details__item flex flex-col items-center">
      <h4 className="text-primary text-3xl font-calSans">{stat}</h4>
      <p className="text-secondary01 text-small">{label}</p>
    </div>
  );
};

const DashboardProfile: FC = (): JSX.Element => {
  return (
    <Card className="dashboard-home__profile sticky top-0 w-[350px] bg-white h-max rounded-lg overflow-x-hidden overflow-y-auto p-1">
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
              Emadisson Loick
            </h5>
            <p className="text-green02 -mt-1">KiritoEM</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="profile-details flex justify-between mt-3 px-4">
          <ProfileDetailsItem label="Publications" stat={4} />
          <ProfileDetailsItem label="Likes" stat={100} />
          <ProfileDetailsItem label="Contributeurs" stat={4} />
        </div>
      </CardBody>
      <CardFooter className="flex flex-col items-start">
        <Divider />
        <div className="profile-pictures mt-3">
          <header>
            <h5>Vos photos</h5>
          </header>
          <div className="gallery grid grid-cols-3">
            {imageSliding.map((image, index) => (
              <img key={index} src={image} />
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DashboardProfile;
