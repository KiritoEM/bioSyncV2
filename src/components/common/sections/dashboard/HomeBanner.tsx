import { Button } from "@/components/UI/button";
import { Image } from "@nextui-org/react";
import React, { FC } from "react";

const HomeBanner: FC = (): JSX.Element => {
  return (
    <div className="dashboard-home__banner h-max bg-blue01 w-full rounded-lg flex items-end overflow-hidden">
      <div className="banner-content w-[98%] p-6 py-8">
        <h3 className="text-white font-calSans text-[26px]">
          Bienvenue <span className="text-yellow01 font-calSans">KiritoEM</span>
        </h3>
        <p className="text-white/80">
          Contribuez à la révolution verte grâce à BioSync, commencez à poster.
        </p>
        <Button
          variant="solid"
          className="w-max bg-yellow01 text-secondary mt-[20px] pr-0"
          size="sm"
        >
          Commencer
          <Image src="/icons/chevron-right.svg" className="-ml-2 w-[31px]" />
        </Button>
      </div>
      <div className="banner-illustration h-full flex items-end relative -right-2">
        <Image
          src="/illustrations/map.svg"
          className="object-cover"
          width={280}
        />
      </div>
    </div>
  );
};

export default HomeBanner;
