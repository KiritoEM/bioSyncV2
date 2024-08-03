import { Button } from "@/components/UI/button";
import { landingMenuList } from "@/helpers/constant";
import { FC, Fragment } from "react";
import Logo from "../Logo";
import LandingNavReponsive from "./LandingNavReponsive";
import { useNav } from "@/core/contexts/useNav";
import { motion } from "framer-motion";
import { scrollToSection } from "@/helpers/scrollHelper";
import { useRouter } from "next/router";

const LandingNav: FC = (): JSX.Element => {
  const { toogleNav } = useNav();
  const router = useRouter()
  return (
    <Fragment>
      <motion.nav
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="landing__nav fixed lg:absolute z-50 w-full top-0 bg-white lg:bg-gray01 overflow-hidden"
      >
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
          <div className="actions gap-3 items-center hidden lg:flex">
            <Button
              variant="light"
              className="w-max font-medium text-secondary01 hidden lg:flex"
              onClick={()=>router.push("/login")}
            >
              Se connecter
            </Button>
            <Button
              variant="primary"
              className="w-max font-medium"
              onClick={() => scrollToSection("landing-contact")}
            >
              Nous contacter
            </Button>
          </div>
          <img
            src="/icons/menu.svg"
            className="w-[27px] lg:hidden"
            onClick={() => {
              toogleNav();
            }}
          />
        </div>
      </motion.nav>
      <LandingNavReponsive />
    </Fragment>
  );
};

export default LandingNav;
