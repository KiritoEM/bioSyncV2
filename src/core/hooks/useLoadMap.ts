import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../redux/slices/loadingSlice";
import { RootState } from "../redux/store.config";

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
