import Title from "@/components/meta/Title";
import { Stepper } from "@/components/UI/stepper";
import { protectedHOC } from "@/core/HOC/authHOC";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";

const DashboardPost: FC = (): JSX.Element => {
  const router = useRouter();
  const { step } = router.query;

  return (
    <Fragment>
      <Title title="Biosync | créér un post" />
      <section className="dashboard-post bg-gray01 h-screen overflow-x-hidden overflow-y-auto">
        <DashboardLayout>
          <div className="dashboard-post__container container mx-auto mt-8">
            <div className="stepper px-[22%]">
              <Stepper />
            </div>
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(DashboardPost);
