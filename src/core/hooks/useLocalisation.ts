import { useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet";

const useLocalisation = () => {
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [selectedCoords, setSelectedCoords] = useState<[number, number]>([
    0, 0,
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newCoords: [number, number] = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          setCoords(newCoords);
          setSelectedCoords(newCoords);
        },
        () => {
          console.error("An error occurred while retrieving location.");
        }
      );
    }
  }, []);

  const addCoords = (lat: number, lng: number) => {
    setSelectedCoords([lat, lng]);
  };

  return { coords, selectedCoords, addCoords };
};

export default useLocalisation;
