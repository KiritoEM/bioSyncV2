/**
 * Section about du landing
 * @returns {JSX.Element}
 */

import { Button } from "@/components/UI/button";
import { Fragment } from "react";
import LandingSectionHeader from "../../headers/LandingSectionHeader";

const LandingAbout = (): JSX.Element => {
  return (
    <section className="landing__about bg-gray01 relative overflow-hidden">
      <div className="container mx-auto flex gap-7 h-full items-center px-[80px] mt-[50px] pt-[5px]">
        <div className="about-content w-[45%] h-full flex flex-col gap-6">
          <LandingSectionHeader
            subtitle="A propos"
            title={`Parlons un peu de notre application <span class="font-calSans text-yellow01">BioSync</span>`}
          />
          <p className="text-primary01">
            BioSync est une plateforme créée pour lutter contre la pollution de
            l’environnement, afin de le préserver grâce à la mise en place de
            diverses initiatives et en augmentant considérablement le taux de
            recyclage.
          </p>
          <div className="buttons">
            <Button variant="primary" className="w-max px-5">
              En savoir plus
            </Button>
            <Button variant="light" className="w-max gap-1 items-center px-5">
              Nous rejoindre
              <img src="/icons/arrow-right.svg" className="w-5" />
            </Button>
          </div>
        </div>
        <div className="about-illustration w-[55%]">
          <img src="/illustrations/about-illustration.svg" alt="" />
        </div>
      </div>
      <Fragment>
        <img
          src="/illustrations/Union.svg"
          className="absolute -mt-[230px] w-[95px]"
        />
      </Fragment>
    </section>
  );
};

export default LandingAbout;
