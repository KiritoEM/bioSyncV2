import { useCallback } from "react";
import { Toast } from "@/components/UI/toast";
import { useAuth } from "@/core/hooks/useAuth";
import { startLoading, stopLoading } from "@/core/redux/slices/loadingSlice";
import { getUser } from "@/core/redux/slices/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const userActions = () => {
  const { accessToken, getAccessToken } = useAuth();
  const dispatch = useDispatch();
  const { addToast } = Toast();

  const getCurrentUser = useCallback(async () => {
    try {
      if (getAccessToken() === "authentificated") {
        const response = await axios.get("/api/user/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          setTimeout(() => {
            dispatch(getUser(response.data.user));
          }, 3000); // 3 seconds delay
        }
      }
    } catch (err) {
      console.error(err);
      addToast({
        title: "Erreur",
        description: "Une erreur s'est produite",
        status: "error",
      });
    }
  }, [accessToken, getAccessToken]);

  return { getCurrentUser };
};

export default userActions;
