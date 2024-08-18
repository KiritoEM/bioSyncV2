import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../redux/slices/loadingSlice";

const useLoadMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
  }, [dispatch]);

  useEffect(() => {
    if (mapLoaded) {
      dispatch(stopLoading());
    }
  }, [mapLoaded, dispatch]);

  const stopMapLoad = () => {
    setTimeout(() => {
      setMapLoaded(true);
    }, 1000); //Await 1s
  };

  return { mapLoaded, stopMapLoad };
};
export default useLoadMap;
