import { Toast } from "@/components/UI/toast";
import { emailValid } from "@/helpers/regex";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@/core/redux/slices/loadingSlice";

const authActions = () => {
  const router = useRouter();
  const { addToast } = Toast();
  const dispatch = useDispatch();

  const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    const email = form["email"].value;
    dispatch(startLoading());

    if (emailValid(email)) {
      router.push({
        pathname: "/signup/finalisation",
        query: {
          email: email,
        },
      });
    } else {
      addToast({
        title: "Erreur",
        description: "Veuillez vérifiez que votre adresse email est valide",
        status: "error",
      });
    }
    dispatch(stopLoading());
  };

  const register = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string | undefined
  ) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const pseudo = form["pseudo"].value;
      const userName = form["user-name"].value;
      console.log(email);
      const password = form["password"].value;
      dispatch(startLoading());

      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          pseudo: pseudo,
          name: userName,
          password: password,
          email: email,
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        addToast({
          title: "succés",
          description: "Compte créé avec succés",
          status: "success",
        });
      }
    } catch (err) {
      console.error(err);
      addToast({
        title: "Erreur",
        description: "Un erreur s' est produit",
        status: "error",
      });
    } finally {
      dispatch(stopLoading());
    }
  };

  return { submitEmail, register };
};
export default authActions;
