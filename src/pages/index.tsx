import LandingNav from "@/components/common/navbars/LandingNav";
import LandingAbout from "@/components/common/sections/landing/LandingAbout";
import LandingFeatures from "@/components/common/sections/landing/LandingFeatures";
import LandingFooter from "@/components/common/sections/landing/LandingFooter";
import LandingHero from "@/components/common/sections/landing/LandingHero";
import LandingJoin from "@/components/common/sections/landing/LandingJoin";
import Title from "@/components/meta/Title";
import { freeHOC } from "@/core/HOC/authHOC";
import { Fragment } from "react";

const Landing = (): JSX.Element => {
  return (
    <Fragment>
      <Title title="Bienvenue sur BioSync, contribuez à un avenir durable avec notre application" />
      <section className="landing">
        <LandingNav />
        <LandingHero />
        <LandingAbout />
        <LandingFeatures />
        <LandingJoin />
        <LandingFooter />
      </section>
    </Fragment>
  );
};

export default freeHOC(Landing);
