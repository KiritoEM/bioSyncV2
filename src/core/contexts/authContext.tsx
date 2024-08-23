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
import { useRouter } from "next/router";

const AuthContext = createContext<IauthContext | null>(null);
export const storageKey = "@biosync_token";
export const currentUserKey = "@biosync_current";

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loadToken, setLoadToken] = useState<boolean>(true);
  const [currentUserId, setId] = useState<string | null>(null);
  const router = useRouter();
  console.log(currentUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading("spinner"));
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(storageKey);
      const id = localStorage.getItem(currentUserKey);
      setAccessToken(token);
      setId(id);
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

  const logout = () => {
    if (typeof window !== null) {
      localStorage.removeItem(storageKey);
      localStorage.removeItem(currentUserKey);

      return "can logout";
    }

    return "error";
  };

  const addCurrentId = (id: string) => {
    if (typeof window !== null) {
      localStorage.setItem(currentUserKey, id);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        currentUserId,
        addAccessToken,
        getAccessToken,
        loadToken,
        addCurrentId,
        logout,
      }}
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
