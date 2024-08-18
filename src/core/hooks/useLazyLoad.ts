import { useEffect, useState } from "react";

const useLazyLoad = (get: () => Promise<void>) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      await get();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    fetchUserData();
  }, []);

  return { loading };
};
export default useLazyLoad;
