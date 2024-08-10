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
  const { addAccessToken } = useAuth();

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

  const addInfoPost = (
    e: React.FormEvent<HTMLFormElement>,
    file: File | null,
    quantityType: "kilos" | "nombre"
  ) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const productName = form["product-name"].value;
      const description = form["product-description"].value;
      const price = form["price"].value;
      const productType = form["type"].value;
      const quantity = form["quantity"].value;

      if (
        productName !== "" &&
        description !== "" &&
        price !== 0 &&
        quantity !== 0 &&
        productType !== "" &&
        file !== null
      ) {
        const infoPost = {
          productName,
          description,
          price,
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
          quantityType,
          productType,
        };
        console.log(infoPost);
        router.push({
          pathname: "/dashboard/post/second",
          query: {
            infoPost: JSON.stringify(infoPost), //sérialisation de l' objet en JSON
          },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addPost = async (): Promise<boolean> => {
    try {
      const response = await axios.post("/api/post");

      if (response.status === 200) {
        console.log(response.data);
        return true;
      }
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  return { submitEmail, register, login, addInfoPost, addPost };
};
export default authActions;
