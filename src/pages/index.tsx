import LandingNav from "@/components/common/navbars/LandingNav";
import LandingAbout from "@/components/common/sections/landing/LandingAbout";
import LandingHero from "@/components/common/sections/landing/LandingHero";
import Title from "@/components/meta/Title";
import { Fragment } from "react";

const Landing = (): JSX.Element => {
  return (
    <Fragment>
      <Title title="Bienvenue sur BioSync, contribuez à un avenir durable avec notre application" />
      <section className="landing">
        <LandingNav />
        <LandingHero />
        <LandingAbout />
      </section>
    </Fragment>
  );
};

export default Landing;
