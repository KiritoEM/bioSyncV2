/**
 * Section hero du landing
 * @returns {JSX.Element}
 */

import { Button } from "@/components/UI/button";
import useMask from "@/core/hooks/useMask";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { FC, Fragment } from "react";
import HorizontalScrollWrapper from "../../animations/HorizontalScrollWrapper";
import { Image } from "@nextui-org/react";
import { imageSliding } from "@/helpers/constant";

const LandingHero: FC = (): JSX.Element => {
  const { handleMouseDown, handleMouseEnter, hover, maskPosition, maskRef } =
    useMask();
  return (
    <section className="landing__hero w-full bg-gray01 relative z-6 top-[75px] pb-[10px] overflow-hidden">
      <Fragment>
        <div
          className="hero-bg absolute top-0 left-0 w-full h-screen hidden lg:flex"
          ref={maskRef}
          style={{
            backgroundImage: `url("/hero-bg.jpeg")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            maskPosition: hover
              ? `${maskPosition.x} ${maskPosition.y}`
              : "58% 40%",
            WebkitMaskPosition: hover
              ? `${maskPosition.x} ${maskPosition.y}`
              : "58% 40%",
            maskSize: hover ? "34%" : "38%",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseDown={handleMouseDown}
        />
      </Fragment>
      <div className="container mx-auto flex justify-start mt-[12vh] lg:mt-[21vh] relative z-4 px-7 lg:px-[80px]">
        <div className="hero-container  w-full flex flex-col md:flex-row justify-between items-start gap-5">
          <div className="content flex flex-col items-start gap-5 w-full lg:w-auto">
            <h2 className="text-[2em] lg:text-[3.4rem] text-start font-calSans text-secondary max-w-[400px] lg:max-w-[620px] leading-tight">
              Rejoignez la Révolution verte avec{" "}
              <span className="text-yellow01 font-calSans">BioSync</span>
            </h2>
            <p className="text-secondary01 text-start max-w-[370px] lg:w-[470px]">
              Notre application innovante vous permet de participer activement à
              la préservation de notre planète en faisant du recyclage tout en
              optimisant votre mode de vie.
            </p>
            <div className="w-full lg:w-max buttons mt-2 flex items-center gap-4 md:gap-8">
              <Button variant="primary" className="md:w-max px-5">
                Nous rejoindre
              </Button>
              <Button
                variant="borderedSecondary"
                className="md:w-max gap-1 items-center px-5"
              >
                Nous contacter
                <img
                  src="/icons/arrow-right.svg"
                  className="w-5 hidden md:flex"
                />
              </Button>
            </div>
          </div>
          <div className="lottie relative top-[20px] lg:-top-[11vh] flex justify-center">
            <DotLottiePlayer
              src="/lotties/earth2-lottie.json"
              autoplay
              loop
              className="w-[95%] md:w-[calc(20em+4vw)] lg:w-[calc(30em+4vw)] h-auto md:h-[calc(20em+4vw)] lg:h-[calc(30em+4vw)]"
            />
          </div>
        </div>
      </div>
      <HorizontalScrollWrapper direction={-800}>
        <div className="flex gap-7 w-max mt-[75px]">
          {imageSliding.map((img, index) => (
            <Image
              key={index}
              src={img}
              isZoomed
              className="w-[220px] lg:w-[320px] h-[195px] lg:h-[310px] object-cover"
            />
          ))}
        </div>
      </HorizontalScrollWrapper>
    </section>
  );
};

export default LandingHero;
