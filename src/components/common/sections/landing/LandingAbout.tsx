import { Button } from "@/components/UI/button";
import { Fragment } from "react";
import LandingSectionHeader from "../../headers/LandingSectionHeader";
import FadeReveal from "../../animations/FadeReveal";
import { scrollToSection } from "@/helpers/scrollHelper";

const LandingAbout = (): JSX.Element => {
  return (
    <section
      className="landing__about bg-input relative overflow-hidden"
      id="landing__about"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-7 h-full items-center px-7 lg:px-[80px] mt-[130px] lg:mt-[50px] pt-[5px]">
        <div className="about-content lg:w-[45%] h-full flex flex-col gap-6">
          <LandingSectionHeader
            subtitle="A propos"
            title={`Parlons un peu de notre application <span class="font-calSans text-yellow01">BioSync</span>`}
          />
          <FadeReveal delay={0.74}>
            <p className="text-primary01">
              BioSync est une plateforme créée pour lutter contre la pollution
              de l’environnement, afin de le préserver grâce à la mise en place
              de diverses initiatives et en augmentant considérablement le taux
              de recyclage.
            </p>
          </FadeReveal>
          <FadeReveal delay={0.74}>
            <div className="buttons flex">
              <Button
                variant="primary"
                className="md:w-max px-5"
                onClick={() => {
                  scrollToSection("landing-contact");
                }}
              >
                En savoir plus
              </Button>
              <Button
                variant="light"
                className="md:w-max gap-1 items-center px-5"
              >
                Nous rejoindre
                <img src="/icons/arrow-right.svg" className="w-5" />
              </Button>
            </div>
          </FadeReveal>
        </div>
        <div className="about-illustration lg:w-[55%] hidden lg:flex">
          <FadeReveal direction="right">
            <img src="/illustrations/about-illustration.svg" alt="" />
          </FadeReveal>
        </div>
      </div>
      <Fragment>
        <img
          src="/illustrations/Union.svg"
          className="absolute -mt-[230px] hidden lg:flex md:w-[95px]"
        />
      </Fragment>
    </section>
  );
};

export default LandingAbout;
