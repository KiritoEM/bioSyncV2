import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FC } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { IfeaturesList } from "@/helpers/types";
import clsx from "clsx";

const LandingCard: FC<IfeaturesList> = ({
  bg,
  grid,
  describ,
  lottieSrc,
  title,
  width,
}) => {
  const gridClass = clsx({
    "lg:col-span-2": grid === 2,
    "lg:col-span-3": grid === 3,
    "lg:col-span-4": grid === 4,
  });

  const widthStyle = width ? { width: `${width}%` } : {};

  return (
    <Card
      className={`${gridClass} col-span-2 p-4`}
      radius="sm"
      style={{ backgroundColor: `${bg}` }}
    >
      <CardHeader>
        <DotLottiePlayer
          src={`/lotties/${lottieSrc}`}
          loop
          autoplay
          style={{ width: "8.5em", height: "8.5em" }}
        />
      </CardHeader>
      <CardBody className={`mt-3`} style={widthStyle}>
        <h5 className="font-calSans text-2xl">{title}</h5>
        <p className="text-secondary01 mt-1">{describ}</p>
      </CardBody>
    </Card>
  );
};

export default LandingCard;
