import { useRouter } from "next/router";
import { ComponentType, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../redux/slices/loadingSlice";

const protectedHOC = (Component: ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);
    const { getAccessToken, loadToken } = useAuth();
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState<boolean>(false);

    if (loading) {
      dispatch(startLoading("spinner"));
    } else {
      dispatch(stopLoading());
    }

    useEffect(() => {
      setIsClient(true);
      if (!loadToken && getAccessToken() === "unknown") {
        if (router.pathname !== "/") {
          router.replace("/");
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 700);
        }
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 700);
      }
      dispatch(startLoading("spinner"));
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
    const [loading, setLoading] = useState<boolean>(true);

    if (loading) {
      dispatch(startLoading("spinner"));
    } else {
      dispatch(stopLoading());
    }

    useEffect(() => {
      setIsClient(true);
      dispatch(startLoading("spinner"));

      if (!loadToken && getAccessToken() === "authentificated") {
        if (router.pathname !== "/dashboard") {
          router.replace("/dashboard");
        } else {
          setTimeout(() => {
            setLoading(false);
          }, 700);
        }
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 700);
      }
    }, [router, getAccessToken, loadToken, dispatch]);

    if (!isClient) {
      return null; //pour éviter l' erreur rendu SSR
    }

    return <Component {...props} />;
  };
};

export { protectedHOC, freeHOC };
