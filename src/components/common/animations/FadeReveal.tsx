import { Ifade } from "@/helpers/types";
import { motion, useAnimation } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeReveal: FC<Ifade> = ({
  children,
  direction = "left",
  delay = 0.54,
  className,
}) => {
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
      y: direction === "top" ? -80 : direction === "bottom" ? 80 : 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={controls}
      transition={{ delay: delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeReveal;
