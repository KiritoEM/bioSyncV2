import Title from "@/components/meta/Title";
import { protectedHOC } from "@/core/HOC/authHOC";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Fragment } from "react";

const dashboardHome = () => {
  return (
    <Fragment>
      <Title title="BioSync | Accueil" />
      <section className="dashboard__home">
        <DashboardLayout>
          <div></div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(dashboardHome);
