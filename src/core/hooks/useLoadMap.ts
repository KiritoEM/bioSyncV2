import { useState } from "react";

const useLoadMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  console.log(mapLoaded)

  const stopMapLoad = () => {
    setTimeout(() => {
      setMapLoaded(true);
    }, 1000); //Await 1s
  };

  const startMapLoad = () => {
    setMapLoaded(false);
  };

  return { mapLoaded, stopMapLoad, startMapLoad };
};
export default useLoadMap;
