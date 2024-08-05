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
    dispatch(startLoading());

    useEffect(() => {
      if (getAccessToken() === "unknown") {
        router.push("/");
        dispatch(stopLoading());
      }
    }, [router, getAccessToken]);

    return <Component {...props} />;
  };
};

const freeHOC = (Component: ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();
    const { getAccessToken } = useAuth();
    const dispatch = useDispatch();
    dispatch(startLoading());

    useEffect(() => {
      if (getAccessToken() === "authentificated") {
        router.push("/dashboard");
        dispatch(stopLoading());
      }
    }, [router, getAccessToken]);

    return <Component {...props} />;
  };
};

export { protectedHOC, freeHOC };
