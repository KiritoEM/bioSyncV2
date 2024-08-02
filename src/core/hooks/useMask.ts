/**
 * custom hook pour le mask
 * @return {object}
 */

import { useEffect, useRef, useState } from "react";

const useMask = () => {
  const [maskPosition, setMaskPosition] = useState<{ x: string; y: string }>({
    x: "53%",
    y: "30%",
  });
  const [hover, setHover] = useState<boolean>(false);
  const maskRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (maskRef.current) {
      const rect = maskRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100 - 8;
      const y = ((e.clientY - rect.top) / rect.height) * 100 - 8;

      setMaskPosition({ x: `${x}%`, y: `${y}%` });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hover]);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseDown = () => {
    setHover(false);
  };

  return { maskPosition, hover, handleMouseDown, handleMouseEnter, maskRef };
};

export default useMask;
