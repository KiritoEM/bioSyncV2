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
}) => {
  const gridClass = clsx({
    "md:col-span-1 lg:col-span-2": grid === 2,
    "md:col-span-1 lg:col-span-3": grid === 3,
    "md:col-span-1 lg:col-span-4": grid === 4,
  });

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
          className="w-[7em] md:w-[8.5em] h-[7em] md:h-[8.5em]"
        />
      </CardHeader>
      <CardBody className="mt-3">
        <h5 className="font-calSans text-xl lg:text-2xl">{title}</h5>
        <p className="text-green02 mt-1">{describ}</p>
      </CardBody>
    </Card>
  );
};

export default LandingCard;
