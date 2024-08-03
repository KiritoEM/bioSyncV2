import { motion, useAnimation } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeReveal: FC<{
  children: ReactNode;
  direction?: "left" | "right" | "top";
}> = ({ children, direction = "left" }) => {
  const { inView, ref } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
      y: direction === "top" ? -80 : 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeReveal;
