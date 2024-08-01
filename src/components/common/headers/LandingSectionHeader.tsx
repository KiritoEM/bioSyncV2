import { FC } from "react";

const LandingSectionHeader: FC<{ subtitle: string; title: string }> = ({
  subtitle,
  title,
}): JSX.Element => {
  return (
    <header>
      <h5 className="text-primary font-medium relative left-3 before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-primary before:top-0 before:-left-3 before:radius-full">
        {subtitle}
      </h5>
      <h2
        className="font-calSans text-[33px] mt-3 leading-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </header>
  );
};

export default LandingSectionHeader;
