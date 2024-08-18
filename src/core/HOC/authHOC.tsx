import { useRouter } from "next/router";
import { ComponentType, useEffect, useState } from "react";
import { useAuth } from "../contexts/useAuth";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../redux/slices/loadingSlice";

const protectedHOC = (Component: ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();
    const { getAccessToken, loadToken } = useAuth();
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
      setIsClient(true);
      dispatch(startLoading("spinner"));

      if (!loadToken && getAccessToken() === "unknown") {
        if (router.pathname !== "/") {
          router.replace("/");
        } else {
          dispatch(stopLoading());
        }
      } else {
        dispatch(stopLoading());
      }
    }, [router, getAccessToken, loadToken, dispatch]);

    if (!isClient) {
      return null; //pour éviter l' erreur rendu SSR
    }

    return <Component {...props} />;
  };
};

const freeHOC = (Component: ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();
    const { getAccessToken, loadToken } = useAuth();
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
      dispatch(startLoading("spinner"));

      if (!loadToken && getAccessToken() === "authentificated") {
        if (router.pathname !== "/dashboard") {
          router.push("/dashboard");
        } else {
          dispatch(stopLoading());
        }
      } else {
        dispatch(stopLoading());
      }
    }, [router, getAccessToken, loadToken, dispatch]);

    if (!isClient) {
      return null; //pour éviter l' erreur rendu SSR
    }

    return <Component {...props} />;
  };
};

export { protectedHOC, freeHOC };
