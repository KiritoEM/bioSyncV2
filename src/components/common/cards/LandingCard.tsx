import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FC } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";

const LandingCard: FC = () => {
  return (
    <Card className="col-span-2 bg-yellow01 p-4" radius="sm">
      <CardHeader>
        <DotLottiePlayer
          src="/lotties/UI-lottie.json"
          loop
          autoplay
          style={{ width: "6em", height: "6em" }}
        />
      </CardHeader>
      <CardBody className="mt-3">
        <h5 className="font-calSans text-xl">
          Interface utilisateur flexible et fluide
        </h5>
        <p className="text-secondary01 mt-2">
          Mise en place d’une interface utilisateur adaptée et utilisable sur
          tous les appareils.
        </p>
      </CardBody>
    </Card>
  );
};

export default LandingCard;
