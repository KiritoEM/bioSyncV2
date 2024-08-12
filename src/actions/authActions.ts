import { Toast } from "@/components/UI/toast";
import { emailValid } from "@/helpers/regex";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@/core/redux/slices/loadingSlice";
import { useAuth } from "@/core/contexts/useAuth";

const authActions = () => {
  const router = useRouter();
  const { addToast } = Toast();
  const dispatch = useDispatch();
  const { addAccessToken, addCurrentId } = useAuth();

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
      const password = form["password"].value;
      dispatch(startLoading());

      const response = await axios.post("/api/auth/register", {
        pseudo: pseudo,
        name: userName,
        password: password,
        email: email,
      });

      if (response.status === 200) {
        addAccessToken(response.data.token as string);
        addCurrentId(response.data.newUser._id);
        router.replace("/dashboard");
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

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const email = form["email"].value;
      const password = form["password"].value;

      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        addAccessToken(response.data.token as string);
        addCurrentId(response.data.user._id);
        router.replace("/dashboard");
        addToast({
          title: "succés",
          description: "Ravis de vous revoir",
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

  return { submitEmail, register, login };
};
export default authActions;
