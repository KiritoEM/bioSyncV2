import { useContext } from "react";
import { LocalisationContext } from "../contexts/localisationContext";

export const useLocation = () => {
  const context = useContext(LocalisationContext);

  if (!context) {
    throw new Error("useLocation must be used in provider");
  }
  return context;
};
