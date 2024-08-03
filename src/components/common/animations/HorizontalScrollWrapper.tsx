import { IhorizontalWrapper } from "@/helpers/types";
import { useScroll, useTransform, motion } from "framer-motion";
import { FC, useRef } from "react";

const HorizontalScrollWrapper: FC<IhorizontalWrapper> = ({
  children,
  direction,
  ...props
}): JSX.Element => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });

  const xtranslate = useTransform(scrollYProgress, [0, 1], [0, direction]);

  return (
    <section
      ref={wrapRef}
      className="w-full relative z-2 bg-transparent overflow-hidden"
      {...props}
    >
      <motion.div
        style={{
          translateX: xtranslate,
          position: "relative",
          zIndex: 6,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default HorizontalScrollWrapper;
