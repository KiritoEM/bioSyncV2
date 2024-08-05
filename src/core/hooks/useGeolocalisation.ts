import { useEffect, useState } from "react";

const useGeolocalisation = () => {
  const [coords, setCoords] = useState<[number, number]>([-18.8792, 47.5079]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords([position.coords.latitude, position.coords.longitude]);
      }),
        () => {
          console.error("An error was occured");
        };
    }
  }, [navigator.geolocation]);

  return { coords };
};

export default useGeolocalisation;
