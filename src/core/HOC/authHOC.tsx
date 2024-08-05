import { useRouter } from "next/router";
import { ComponentType, FC, useEffect } from "react";

const protectedHOC = (Component: ComponentType<any>) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
        
    }, [router]);
  };
};

export { protectedHOC };
