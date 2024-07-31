import LandingNav from "@/components/common/navbars/LandingNav";
import LandingHero from "@/components/common/sections/landing/LandingHero";
import Title from "@/components/meta/Title";
import { Fragment } from "react";

const Landing = (): JSX.Element => {
  return (
    <Fragment>
      <Title title="Bienvenue sur BioSync, contribuez à un avenir durable avec notre application" />
      <LandingNav />
      <section className="landing">
        <LandingHero />
      </section>
    </Fragment>
  );
};

export default Landing;
