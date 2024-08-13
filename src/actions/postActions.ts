import { Toast } from "@/components/UI/toast";
import { useAuth } from "@/core/contexts/useAuth";
import { setPost } from "@/core/redux/slices/postSlice";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const postActions = () => {
  const router = useRouter();
  const { addToast } = Toast();
  const dispatch = useDispatch();
  const { accessToken, getAccessToken } = useAuth();

  const addPost = async (
    e: React.FormEvent<HTMLFormElement>,
    file: File | null,
    quantityType: "kilos" | "nombre"
  ) => {
    try {
      if (getAccessToken() === "authentificated") {
        e.preventDefault();
        const form = e.currentTarget;
        const productName = form["product-name"].value;
        const description = form["product-description"].value;
        const price = form["price"].value;
        const productType = form["type"].value;
        const quantity = form["quantity"].value;

        let formData = new FormData();

        formData.append("image", file!);
        formData.append("name", productName);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("productType", productType);
        formData.append("quantity", quantity);
        formData.append("quantityType", quantityType);

        const response = await axios.post("/api/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          console.log(response.data);
          router.push({
            pathname: "/dashboard/post/second",
            query: {
              id: response.data.newPost._id,
            },
          });
        }
      } else {
        addToast({
          status: "error",
          title: "Aucun accés",
          description: "Veuillez assurer que vous avez accés à l' application",
        });
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

  const addLocation = async (
    e: React.FormEvent<HTMLFormElement>,
    location: [number, number],
    id: string
  ): Promise<any> => {
    try {
      e.preventDefault();

      const response = await axios.post(`/api/post/location/${id}`, {
        location: location,
      });

      if (response.status === 200) {
        console.log(response.data);
        return response.data.post;
      }

      return null;
    } catch (err) {
      console.error(err);
      addToast({
        title: "Erreur",
        description: "Un erreur s' est produit",
        status: "error",
      });
      return null;
    }
  };

  const getAllPosts = useCallback(async () => {
    try {
      if (getAccessToken() === "authentificated") {
        const response = await axios.get("/api/post", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          dispatch(setPost(response.data.allPost));
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
  }, [dispatch]);

  const likePost = async (postID: string) => {
    try {
      if (getAccessToken() === "authentificated") {
        const response = await axios.post(
          `/api/post/like/${postID}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          console.log(response.data);
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

  const dislikePost = async (postID: string) => {
    try {
      if (getAccessToken() === "authentificated") {
        const response = await axios.post(
          `/api/post/dislikes/${postID}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status === 200) {
          console.log(response.data);
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

  const deletePost = async (postID: string) => {
    try {
      if (getAccessToken() === "authentificated") {
        const response = await axios.delete(`/api/post/delete/${postID}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          addToast({
            title: "Publication",
            description: "Publication postée avec succés",
            status: "success",
          });
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

  return {
    addLocation,
    addPost,
    getAllPosts,
    likePost,
    dislikePost,
    deletePost,
  };
};

export default postActions;
