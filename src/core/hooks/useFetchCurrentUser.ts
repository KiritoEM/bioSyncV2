import userActions from "@/actions/userActions";
import { Toast } from "@/components/UI/toast";
import { useEffect, useState } from "react";

const useFetchCurrentUser = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { getCurrentUser } = userActions();

  const { addToast } = Toast();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await getCurrentUser();
      } catch (err) {
        console.error(err);
        addToast({
          title: "Erreur",
          description: "Une erreur s'est produite",
          status: "error",
        });
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    fetchUserData();
  }, []);

  return { loading };
};
export default useFetchCurrentUser;
