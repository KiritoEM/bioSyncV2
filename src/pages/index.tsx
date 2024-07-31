import LandingNav from "@/components/common/navbars/LandingNav";
import Title from "@/components/meta/Title";
import { Fragment } from "react";

const Landing = (): JSX.Element => {
  return (
    <Fragment>
      <Title title="Bienvenue sur BioSync, contribuez à un avenir durable avec notre application" />
      <LandingNav />
      <section className="landing"></section>
    </Fragment>
  );
};

export default Landing;
