import Title from "@/components/meta/Title";
import { Stepper } from "@/components/UI/stepper";
import { protectedHOC } from "@/core/HOC/authHOC";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useRouter } from "next/router";
import { FC, Fragment, useEffect, useState } from "react";
import { Map } from "@/components/common/sections/dashboard/DashboardMap";
import useLocalisation from "@/core/hooks/useLocalisation";
import dynamic from "next/dynamic";
import { Button } from "@/components/UI/button";

const second: FC = (): JSX.Element => {
  const router = useRouter();
  const { infoPost } = router.query;

  useEffect(() => {
    if (router.isReady && infoPost) {
      console.log(JSON.parse(infoPost as string));
    }
  }, [router]);

  const { selectedCoords } = useLocalisation();
  const [validCoords, setCoords] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCoords) {
      setCoords(selectedCoords[0] !== 0 && selectedCoords[1] !== 0);
    }
  }, [selectedCoords]);
  return (
    <Fragment>
      <Title title="Biosync | créér un post" />
      <section className="dashboard-post bg-gray01 h-screen overflow-x-hidden overflow-y-auto">
        <DashboardLayout>
          <div className="dashboard-post__container container mx-auto mt-8 mb-12 flex flex-col items-center">
            <div className="stepper w-[700px]">
              <Stepper index={1} />
            </div>
            <div className="map mt-8 w-[700px] h-[400px] rounded-lg overflow-hidden">
              {validCoords && (
                <Map wheelZoom position={selectedCoords} zoom={12} />
              )}
            </div>
            <Button className="mt-6" radius="md">
              {" "}
              Créer la publication
            </Button>
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(second);
