import { FC } from "react";
import FadeReveal from "../animations/FadeReveal";

const LandingSectionHeader: FC<{ subtitle: string; title: string }> = ({
  subtitle,
  title,
}): JSX.Element => {
  return (
    <header>
      <FadeReveal>
        <h5 className="text-primary font-medium relative left-3 before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-primary before:top-0 before:-left-3 before:radius-full">
          {subtitle}
        </h5>
      </FadeReveal>
      <FadeReveal delay={0.64}>
        <h2
          className="font-calSans text-[26px] lg:text-[33px] mt-3 leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </FadeReveal>
    </header>
  );
};

export default LandingSectionHeader;
