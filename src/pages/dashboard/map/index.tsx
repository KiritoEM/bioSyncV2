import { Map } from "@/components/common/sections/dashboard/DashboardMap";
import Title from "@/components/meta/Title";
import { protectedHOC } from "@/core/HOC/authHOC";
import useGeolocalisation from "@/core/hooks/useGeolocalisation";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC, Fragment, useEffect, useState } from "react";

const dashboardMap: FC = (): JSX.Element => {
  const { coords } = useGeolocalisation();
  const router = useRouter();
  const [validCoords, setCoords] = useState<boolean>(false);

  useEffect(() => {
    if (coords) {
      setCoords(coords[0] !== 0 && coords[1] !== 0);
    }
  }, [coords]);
  return (
    <Fragment>
      <Title title="BioSync | map" />
      <section className="dashboard-map">
        <DashboardLayout>
          <div
            className="close-btn fixed right-5 mt-4 bg-yellow01 opacity-85 w-[47px] h-[47px] flex items-center justify-center rounded-full"
            style={{ zIndex: 60 }}
            onClick={() => router.push("/dashboard/")}
          >
            <Image
              src="/icons/close.svg"
              className="cursor-pointer"
              width={18}
            />
          </div>
          <div
            className="map w-screen h-screen relative"
            style={{ zIndex: 20 }}
          >
            {validCoords && <Map position={coords} zoom={14} wheelZoom />}
          </div>
        </DashboardLayout>
      </section>
    </Fragment>
  );
};

export default protectedHOC(dashboardMap);
