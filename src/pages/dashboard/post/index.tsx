import PostForm from "@/components/common/forms/PostForm";
import Title from "@/components/meta/Title";
import { Stepper } from "@/components/UI/stepper";
import { protectedHOC } from "@/core/HOC/authHOC";
import DashboardLayout from "@/layouts/DashboardLayout";

import { FC, Fragment } from "react";

export const ArLogo: FC = (): JSX.Element => {
  return <h5 className="text-secondary text-base"> Ar</h5>;
};

const DashboardPost: FC = (): JSX.Element => {
  return (
    <Fragment>
      <Title title="Biosync | créér un post" />
      <section className="dashboard-post bg-gray01 h-screen overflow-x-hidden overflow-y-auto">
        <DashboardLayout>
          <div className="dashboard-post__container container mx-auto mt-8 flex flex-col items-center justify-center mb-12 px-7">
            <div className="stepper w-[600px] lg:w-[800px] hidden md:block">
              <Stepper index={1} />
            </div>
            <div className="post-form mt-[60px] max-w-[400px] lg:max-w-[400px] w-full flex flex-col items-center gap-7">
              <h5 className="font-calSans text-[25px] text-secondary">
                Créer une publication
              </h5>
              <PostForm />
            </div>
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(DashboardPost);
