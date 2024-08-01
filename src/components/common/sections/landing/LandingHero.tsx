/**
 * Section hero du landing
 * @returns {JSX.Element}
 */

import { Button } from "@/components/UI/button";
import useMask from "@/hooks/useMask";
import { FC, Fragment } from "react";

const LandingHero: FC = (): JSX.Element => {
  const { handleMouseDown, handleMouseEnter, hover, maskPosition, maskRef } =
    useMask();
  return (
    <section className="landing__hero w-full bg-gray01 relative  z-6 top-[75px] overflow-hidden">
      <Fragment>
        <img
          src="/hero-bg.jpeg"
          className="hero-bg absolute top-0 left-0"
          ref={maskRef}
          style={{
            maskPosition: hover
              ? `${maskPosition.x} ${maskPosition.y}`
              : "calc(100% - 80px) top",
            WebkitMaskPosition: hover
              ? `${maskPosition.x} ${maskPosition.y}`
              : "calc(100% - 80px) top",
            maskSize: hover ? "40%" : "50%",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseDown={handleMouseDown}
        />
        <img
          src="/splash.png"
          className="hero-bg absolute top-0 left-0 z-4 mix-blend-screen"
        />
      </Fragment>
      <div className="container mx-auto flex justify-start mt-[21vh] relative z-5 px-[80px]">
        <div className="hero-container  flex flex-col items-start gap-5">
          <h2 className="text-[3.4rem] text-start font-calSans text-secondary max-w-[620px] leading-tight">
            Rejoignez la Révolution verte avec{" "}
            <span className="text-yellow01 font-calSans">BioSync</span>
          </h2>
          <p className="text-secondary01 text-start w-[470px]">
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
              Nous contacter
              <img src="/icons/arrow-right.svg" className="w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="hero-illustration w-full relative z-6 mt-[14vh]">
        <img src="/hero-frame.svg" className="object-cover w-full" />
      </div>
    </section>
  );
};

export default LandingHero;
