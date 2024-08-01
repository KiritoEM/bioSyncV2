/**
 * Section about du landing
 * @returns {JSX.Element}
 */

import { Button } from "@/components/UI/button";
import { Fragment } from "react";

const LandingAbout = (): JSX.Element => {
  return (
    <section className="landing__about bg-gray01 relative z-4">
      <div className="container mx-auto flex gap-7 h-full items-center px-[80px] mt-[50px] pt-[35px]">
        <div className="about-content w-[45%] h-full flex flex-col gap-5">
          <div className="subtitle">
            <h5 className="text-primary font-medium relative left-3 before:content-[''] before:absolute before:h-full before:w-[2px] before:bg-primary before:top-0 before:-left-3">
              A propos
            </h5>
            <h2 className="font-calSans text-[35px] mt-3 leading-tight">
              Parlons un peu de notre application{" "}
              <span className="font-calSans text-primary">BioSync</span>
            </h2>
          </div>
          <p className="text-primary01">
            BioSync est une plateforme créée pour lutter contre la pollution de
            l’environnement, afin de le préserver grâce à la mise en place de
            diverses initiatives et en augmentant considérablement le taux de
            recyclage.
          </p>
          <div className="buttons">
            <Button variant="primary" className="w-max px-5 bg-linearPrimary">
              Découvrir
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
