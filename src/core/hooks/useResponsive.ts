import { useEffect, useRef, useState } from "react";

const useResponsive = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageWidth, setImageWidth] = useState<number>(0);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  }, [imageRef.current]);

  return { imageRef, imageWidth };
};

export default useResponsive;
