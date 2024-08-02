import { Button } from "@/components/UI/button";
import { landingMenuList } from "@/helpers/constant";
import { FC, Fragment } from "react";
import Logo from "../Logo";
import LandingNavReponsive from "./LandingNavReponsive";
import { useNav } from "@/core/hooks/useNav";

const LandingNav: FC = (): JSX.Element => {
  const { toogleNav } = useNav();
  return (
    <Fragment>
      <nav className="landing__nav fixed lg:absolute z-50 w-full top-0 bg-white lg:bg-gray01 overflow-hidden">
        <div className="container mx-auto py-5 px-7 lg:px-[80px] flex justify-between items-center overflow-hidden">
          <Logo />
          <ul className="menu-items gap-8 hidden lg:flex">
            {landingMenuList.map((item, index) => (
              <li
                className="text-secondary relative cursor-pointer"
                key={index}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <Button
            variant="primary"
            className="w-max font-medium hidden lg:flex"
          >
            Nous contacter
          </Button>
          <img
            src="/icons/menu.svg"
            className="w-[27px] lg:hidden"
            onClick={() => {
              toogleNav();
            }}
          />
        </div>
      </nav>
      <LandingNavReponsive />
    </Fragment>
  );
};

export default LandingNav;
