import { useLocation } from "@/core/hooks/useLocation";
import { FC, useEffect, useState } from "react";
import { Map } from "@/components/common/map/index";

const DashboardMap: FC = (): JSX.Element => {
  const { coords } = useLocation();
  const [isValidCoords, setIsValidCoords] = useState<boolean>(false);

  useEffect(() => {
    if (coords) {
      setIsValidCoords(coords[0] !== 0 && coords[1] !== 0);
    }
  }, [coords]);

  return (
    <div className="dashboard-home__map w-[300px] bg-white h-[calc(100vh-145px)] sticky top-0 rounded-lg overflow-hidden hidden xl:flex">
      {isValidCoords && <Map position={coords} zoom={10} events={false} />}
    </div>
  );
};

export default DashboardMap;
