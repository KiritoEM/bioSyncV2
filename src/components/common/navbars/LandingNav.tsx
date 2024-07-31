/**
 *Barre de navigation du landing
 * @return {JSX.element}
 */

import { Button } from "@/components/UI/button";
import { landingMenuList } from "@/helpers/constant";
import { FC } from "react";

const LandingNav: FC = (): JSX.Element => {
  return (
    <nav
      className="landing__nav absolute w-full top-0 bg-gray01"
      style={{ position: "absolute", top: 0 }}
    >
      <div className="container mx-auto py-5 px-[80px] flex justify-between items-center overflow-hidden">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        {/* Elements du menu */}
        <ul className="menu-items flex gap-8">
          {landingMenuList.map((item, index) => (
            <li className="text-secondary relative cursor-pointer" key={index}>
              {item.label}
            </li>
          ))}
        </ul>
        {/* navbar actions */}
        <Button variant="primary" className="w-max font-medium">
          Nous contacter
        </Button>
      </div>
    </nav>
  );
};

export default LandingNav;
