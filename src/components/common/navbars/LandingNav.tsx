/**
 *Barre de navigation du landing
 * @return {JSX.element}
 */

import { landingMenuList } from "@/helpers/constant";

const LandingNav = (): JSX.Element => {
  return (
    <nav className="landing__nav absolute w-full">
      <div className="container mx-auto py-5 px-[80px] flex justify-between items-center overflow-hidden">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.svg" alt="" />
        </div>
        {/* Elements du menu */}
        <ul className="menu-items flex gap-8">
          {landingMenuList.map((item, index) => (
            <li className="text-green01" key={index}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default LandingNav;
