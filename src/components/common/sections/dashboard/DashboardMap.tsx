import useLocalisation from "@/core/hooks/useLocalisation";
import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";

export const Map = dynamic(() => import("./../../map/Map"), { ssr: false });
const DashboardMap: FC = (): JSX.Element => {
  const { coords } = useLocalisation();
  const [validCoords, setCoords] = useState<boolean>(false);

  useEffect(() => {
    if (coords) {
      setCoords(coords[0] !== 0 && coords[1] !== 0);
    }
  }, [coords]);

  return (
    <div className="dashboard-home__map w-[300px] bg-white h-[calc(100vh-145px)] sticky top-0 rounded-lg overflow-hidden">
      {validCoords && <Map position={coords} zoom={7} />}
    </div>
  );
};

export default DashboardMap;
