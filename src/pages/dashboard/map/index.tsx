import { Map } from "@/components/common/sections/dashboard/DashboardMap";
import Title from "@/components/meta/Title";
import useGeolocalisation from "@/core/hooks/useGeolocalisation";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";

const dashboardMap: FC = (): JSX.Element => {
  const { coords } = useGeolocalisation();
  const router = useRouter();
  const validCoords = coords[0] !== 0 && coords[1] !== 0;
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
            <Image src="/icons/close.svg" width={18} />
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

export default dashboardMap;
