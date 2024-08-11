import axios from "axios";

const userActions = () => {
  const getCurrentUser = async () => {
    try {
      const response = await axios.get("");
    } catch (err) {
      console.error(err);
    }
  };

  return { getCurrentUser };
};
export default userActions;
