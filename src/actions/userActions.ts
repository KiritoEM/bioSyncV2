import { useAuth } from "@/core/hooks/useAuth";
import { getUser } from "@/core/redux/slices/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const userActions = () => {
  const { accessToken, getAccessToken } = useAuth();
  const dispatch = useDispatch();

  const getCurrentUser = async () => {
    if (getAccessToken() === "authentificated") {
      const response = await axios.get("/api/user/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        dispatch(getUser(response.data.user));
      }
    }
  };

  return { getCurrentUser };
};

export default userActions;
