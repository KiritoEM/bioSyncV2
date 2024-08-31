import { ILocalisationContext } from "@/helpers/types";
import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

const LocalisationContext = createContext<ILocalisationContext | null>(null);

const LocalisationProvider: FC<{ children: ReactNode }> = ({ children }) => {
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

  return (
    <LocalisationContext.Provider value={{ coords, selectedCoords, addCoords }}>
      {children}
    </LocalisationContext.Provider>
  );
};

export { LocalisationContext, LocalisationProvider };
