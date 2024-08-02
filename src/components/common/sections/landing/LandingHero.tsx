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
          className="hero-bg absolute top-0 left-0 w-full h-screen"
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
      <div className="container mx-auto flex justify-start mt-[21vh] relative z-5 px-[80px]">
        <div className="hero-container  w-full flex justify-between items-start gap-5">
          <div className="content flex flex-col items-start gap-5">
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
          <div className="lottie relative -top-[11vh]">
            <DotLottiePlayer
              src="/lotties/earth2-lottie.json"
              autoplay
              loop
              style={{ width: "calc(30em + 4vw)", height: "calc(30em + 4vh)" }}
            />
          </div>
        </div>
      </div>
      <HorizontalScrollWrapper direction={-800}>
        <div className="flex gap-7 w-max">
          {imageSliding.map((img, index) => (
            <Image
              key={index}
              src={img}
              isZoomed
              style={{ width: "400px", height: "310px" }}
            />
          ))}
        </div>
      </HorizontalScrollWrapper>
    </section>
  );
};

export default LandingHero;
