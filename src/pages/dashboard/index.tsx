import DashboardHomePost from "@/components/common/sections/dashboard/DashboardHomePost";
import DashboardMap from "@/components/common/sections/dashboard/DashboardMap";
import DashboardProfile from "@/components/common/sections/dashboard/DashboardProfile";
import Title from "@/components/meta/Title";
import { protectedHOC } from "@/core/HOC/authHOC";
import DashboardLayout from "@/layouts/DashboardLayout";
import { FC, Fragment } from "react";

const DashboardHome: FC = (): JSX.Element => {
  return (
    <Fragment>
      <Title title="BioSync | Accueil" />
      <section className="dashboard-home bg-input h-screen overflow-x-hidden overflow-y-auto">
        <DashboardLayout addButton>
          <div className="dashboard-home__container container mx-auto flex gap-9 mt-8 px-7 lg:px-0">
            <DashboardMap />
            <DashboardHomePost />
            <DashboardProfile />
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(DashboardHome);
