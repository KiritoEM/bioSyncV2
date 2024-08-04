import { Itoast } from "@/helpers/types";
import { useToast } from "@chakra-ui/react";

const Toast = () => {
  const toast = useToast();

  const addToast = (props: Itoast) => {
    toast({
      title: props.title,
      description: props.description,
      status: props.status,
      duration: 3000,
      isClosable: true,
    });
  };

  return { addToast };
};

export { Toast };
