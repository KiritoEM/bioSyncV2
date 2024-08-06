import { FC } from "react";
import HomeBanner from "./HomeBanner";

const DashboardHomePost: FC = (): JSX.Element => {
  return (
    <div className="dashboard-home__post w-[calc(100%-600px)]">
      <HomeBanner />
    </div>
  );
};

export default DashboardHomePost;
