import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import { useAuth } from "../contexts/useAuth";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../redux/slices/loadingSlice";

const protectedHOC = (Component: ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();
    const { getAccessToken } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
      if (getAccessToken() === "unknown") {
        dispatch(startLoading());
        router.replace("/");
        dispatch(stopLoading());
      }
    }, [router, getAccessToken, dispatch]);

    return <Component {...props} />;
  };
};

const freeHOC = (Component: ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();
    const { getAccessToken } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(startLoading());
      if (getAccessToken() === "authentificated") {
        router.push("/dashboard");
      }
      dispatch(stopLoading());
    }, [router, getAccessToken, dispatch]);

    return <Component {...props} />;
  };
};

export { protectedHOC, freeHOC };
