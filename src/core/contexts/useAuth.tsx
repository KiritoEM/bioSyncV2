import { IauthContext } from "@/helpers/types";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext<IauthContext | null>(null);
const storageKey = "@biosync_token";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== null) {
      const token = localStorage.getItem(storageKey);
      setAccessToken(token);
    }
  }, []);

  const addAccessToken = (token: string) => {
    try {
      if (typeof window !== null) {
        setAccessToken(token as string);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAccessToken = () => {
    return accessToken ? "Authentificated" : "unknown";
  };

  return (
    <AuthContext.Provider
      value={{ accessToken, addAccessToken, getAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//exportation du hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    if (!context) throw new Error("hooks useAuth must be used in provider");
  }
  return context;
};
