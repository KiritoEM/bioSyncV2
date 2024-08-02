import { FC } from "react";
import LandingSectionHeader from "../../headers/LandingSectionHeader";
import { Button } from "@/components/UI/button";
import LandingCard from "../../cards/LandingCard";
import { featuresList } from "@/helpers/constant";

const LandingFeatures: FC = () => {
  return (
    <section className="landing__features overflow-hidden bg-gray01">
      <div className="container mx-auto px-7 lg:px-[80px] pt-[72px] lg:pt-[15px] pb-10">
        <header className="features-header flex justify-between items-end">
          <LandingSectionHeader
            subtitle="Fonctionnalités"
            title={`A la découverte de <span class="font-calSans text-yellow01">BioSync</span>`}
          />
          <Button
            variant="light"
            className="w-max gap-1 items-center px-5 hidden md:flex"
          >
            En savoir plus
            <img src="/icons/arrow-right.svg" className="w-5" />
          </Button>
        </header>
        <div className="features-content grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 mt-10 gap-x-7 gap-y-8">
          {featuresList.map((feature, index) => (
            <LandingCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
