import Title from "@/components/meta/Title";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Stepper } from "@/components/UI/stepper";
import { protectedHOC } from "@/core/HOC/authHOC";
import DashboardLayout from "@/layouts/DashboardLayout";
import { FC, Fragment } from "react";

const DashboardPost: FC = (): JSX.Element => {
  return (
    <Fragment>
      <Title title="Biosync | créér un post" />
      <section className="dashboard-post bg-gray01 h-screen overflow-x-hidden overflow-y-auto">
        <DashboardLayout>
          <div className="dashboard-post__container container mx-auto mt-8 flex flex-col items-center mb-12">
            <div className="stepper w-[700px]">
              <Stepper index={1} />
            </div>
            <div className="post-form mt-[60px] w-[360px] flex flex-col items-center gap-7">
              <h5 className="font-calSans text-[25px] text-secondary">
                Créer une publication
              </h5>
              <form action="post" className="w-full flex flex-col gap-6">
                <Input color="white" label="Nom de votre produit" />
                <Input color="white" label="Prix du produit" type="number" />
                <textarea
                  className="h-[125px] border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none px-4 py-3 text-base"
                  placeholder="Description du produit"
                />
                <Button radius="md">Continuer</Button>
              </form>
            </div>
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(DashboardPost);
