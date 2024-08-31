import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

// Exportation du hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("hooks useAuth must be used in provider");
  }
  return context;
};
