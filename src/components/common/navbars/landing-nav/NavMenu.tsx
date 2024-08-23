import { landingMenuList } from "@/helpers/constant";
import { scrollToSection } from "@/helpers/scrollHelper";
import React, { FC, Fragment } from "react";
import FadeReveal from "../../animations/FadeReveal";
import { NextRouter } from "next/router";
import { Button } from "@/components/UI/button";

const NavMenu: FC<{ responsive?: boolean; router?: NextRouter }> = ({
  responsive,
  router,
}): JSX.Element => {
  return (
    <Fragment>
      {!responsive ? (
        <ul className="menu-items gap-8 hidden lg:flex">
          {landingMenuList.map((item, index) => (
            <li
              className="text-secondary relative cursor-pointer"
              key={index}
              onClick={() => scrollToSection(item.sectionId as string)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="menu-items gap-7 flex flex-col lg:hidden py-[25px] items-center">
          {landingMenuList.map((item, index) => (
            <li className="text-secondary relative cursor-pointer" key={index}>
              <FadeReveal delay={0.54 * (index + 0.5 / 0.5)}>
                {item.label}
              </FadeReveal>
            </li>
          ))}
          <div className="actions flex  flex-col gap-3 items-center lg:hidden">
            <FadeReveal delay={0.7 * landingMenuList.length}>
              <Button
                variant="light"
                className="w-max font-medium text-green02"
                onClick={() => (router as NextRouter).push("/login")}
              >
                Se connecter
              </Button>
            </FadeReveal>
            <FadeReveal delay={0.8 * landingMenuList.length}>
              <Button
                variant="primary"
                className="w-max font-medium"
                onClick={() => scrollToSection("landing-contact")}
              >
                Nous contacter
              </Button>
            </FadeReveal>
          </div>
        </ul>
      )}
    </Fragment>
  );
};

export default NavMenu;
