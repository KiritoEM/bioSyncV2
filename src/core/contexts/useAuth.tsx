import { IauthContext } from "@/helpers/types";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../redux/slices/loadingSlice";

const AuthContext = createContext<IauthContext | null>(null);
export const storageKey = "@biosync_token";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loadToken, setLoadToken] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(storageKey);
      setAccessToken(token);
    }
    setLoadToken(false);
    dispatch(stopLoading());
  }, [dispatch]);

  const addAccessToken = (token: string) => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, token);
        setAccessToken(token);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAccessToken = () => {
    return accessToken ? "authentificated" : "unknown";
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, addAccessToken, getAccessToken, loadToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Exportation du hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("hooks useAuth must be used in provider");
  }
  return context;
};
