import { Toast } from "@/components/UI/toast";
import { useAuth } from "@/core/contexts/useAuth";
import { startLoading, stopLoading } from "@/core/redux/slices/loadingSlice";
import { getUser } from "@/core/redux/slices/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const userActions = () => {
  const { accessToken, getAccessToken } = useAuth();
  const dispatch = useDispatch();
  const { addToast } = Toast();

  const getCurrentUser = async () => {
    try {
      if (getAccessToken() === "authentificated") {
        const response = await axios.get("/api/user/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          if (response.status === 200) {
            setTimeout(() => {
              dispatch(getUser(response.data.user));
            }, 3000); //await 1.5s
          }
        }
      }
    } catch (err) {
      console.error(err);
      addToast({
        title: "Erreur",
        description: "Un erreur s' est produit",
        status: "error",
      });
    }
  };

  return { getCurrentUser };
};
export default userActions;
