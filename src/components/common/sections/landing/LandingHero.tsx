/**
 * Section hero du landing
 * @returns {JSX.Element}
 */

import { Button } from "@/components/UI/button";
import { FC } from "react";

const LandingHero: FC = (): JSX.Element => {
  return (
    <section className="landing__hero w-full bg-gray01 relative top-[75px] overflow-hidden">
      <div className="container mx-auto flex justify-center mt-[21vh]">
        <div className="hero-container  flex flex-col items-center gap-5">
          <h2 className="text-[3.4rem] text-center font-calSans text-secondary max-w-[700px] leading-tight">
            Rejoignez la Révolution verte avec BioSync
          </h2>
          <p className="text-secondary01 text-center w-[600px]">
            Notre application innovante vous permet de participer activement à
            la préservation de notre planète en faisant du recyclage tout en
            optimisant votre mode de vie.
          </p>
          <div className="buttons mt-2 flex items-center gap-8">
            <Button variant="primary" className="w-max px-5">
              Nous rejoindre
            </Button>
            <Button
              variant="borderedSecondary"
              className="w-max gap-1 items-center px-5"
            >
              Nous rejoindre
              <img src="/icons/arrow-right.svg" className="w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="hero-illustration w-full">
        <img src="/hero-frame.svg" className="object-cover w-full" />
      </div>
    </section>
  );
};

export default LandingHero;
