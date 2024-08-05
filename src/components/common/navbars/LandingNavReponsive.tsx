import { landingMenuList } from "@/helpers/constant";
import FadeReveal from "../animations/FadeReveal";
import { Button } from "@/components/UI/button";
import { scrollToSection } from "@/helpers/scrollHelper";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";

const LandingNavReponsive = (): JSX.Element => {
  const navState = useSelector((state: RootState) => state.nav.navState);
  return (
    <section
      className={`landing-nav__responsive fixed bg-gray01 ${
        navState
          ? " w-screen h-screen transition-all duration-700 ease-in-out overflow-hidden"
          : "w-0 h-0 overflow-hidden p-0 transition-all duration-700 ease-in-out"
      } flex justify-center mt-[76px] z-50`}
    >
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
              className="w-max font-medium text-secondary01"
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
    </section>
  );
};

export default LandingNavReponsive;
