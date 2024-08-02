import { IhorizontalWrapper } from "@/helpers/types";
import { useScroll, useTransform, motion } from "framer-motion";
import { FC, useRef } from "react";

const HorizontalScrollWrapper: FC<IhorizontalWrapper> = ({
  children,
  direction,
}): JSX.Element => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });

  const xtranslate = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );
  return (
    // wrapper
    <section ref={scrollRef}>
      {/* container */}
      <motion.div
        style={{
          translateX: xtranslate,
          position: "relative",
          zIndex: 6,
          height: "max-content",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default HorizontalScrollWrapper;
