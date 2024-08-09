import Title from "@/components/meta/Title";
import { Stepper } from "@/components/UI/stepper";
import { protectedHOC } from "@/core/HOC/authHOC";
import DashboardLayout from "@/layouts/DashboardLayout";
import { FC, Fragment } from "react";

const second: FC = (): JSX.Element => {
  return (
    <Fragment>
      <Title title="Biosync | créér un post" />
      <section className="dashboard-post bg-gray01 h-screen overflow-x-hidden overflow-y-auto">
        <DashboardLayout>
          <div className="dashboard-post__container container mx-auto mt-8">
            <div className="stepper px-[22%]">
              <Stepper index={2} />
            </div>
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default second;
