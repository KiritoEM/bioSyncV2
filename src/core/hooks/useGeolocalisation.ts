import { useEffect, useState } from "react";

const useGeolocalisation = () => {
  const [coords, setCoords] = useState<[number, number]>([0, 0]);

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
