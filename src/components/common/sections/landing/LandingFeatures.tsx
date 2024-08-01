import { FC } from "react";
import LandingSectionHeader from "../../headers/LandingSectionHeader";
import { Button } from "@/components/UI/button";

const LandingFeatures: FC = () => {
  return (
    <section className="landing__features">
      <div className="container mx-auto px-[80px] pt-[15px]">
        <header className="flex justify-between items-end">
          <LandingSectionHeader
            subtitle="Avantages"
            title={`A la découverte de <span class="font-calSans text-yellow01">BioSync</span>`}
          />
          <Button variant="light" className="w-max gap-1 items-center px-5">
            En savoir plus
            <img src="/icons/arrow-right.svg" className="w-5" />
          </Button>
        </header>
      </div>
    </section>
  );
};

export default LandingFeatures;
