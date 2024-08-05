import DashboardHomePost from "@/components/common/sections/dashboard/DashboardHomePost";
import DashboardMap from "@/components/common/sections/dashboard/DashboardMap";
import DashboardProfile from "@/components/common/sections/dashboard/DashboardProfile";
import Title from "@/components/meta/Title";
import { protectedHOC } from "@/core/HOC/authHOC";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Fragment } from "react";

const dashboardHome = () => {
  return (
    <Fragment>
      <Title title="BioSync | Accueil" />
      <section className="dashboard-home bg-gray01 h-max">
        <DashboardLayout>
          <div className="dashboard-home__container container mx-auto flex gap-9 mt-8">
            <DashboardMap />
            <DashboardHomePost />
            <DashboardProfile />
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(dashboardHome);
