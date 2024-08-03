import { useNav } from "@/core/hooks/useNav";
import { landingMenuList } from "@/helpers/constant";

const LandingNavReponsive = (): JSX.Element => {
  const { openNav } = useNav();
  return (
    <section
      className={`landing-nav__responsive fixed bg-gray01 ${
        openNav
          ? " w-screen h-screen transition-all duration-700 ease-in-out overflow-hidden"
          : "w-0 h-0 overflow-hidden p-0 transition-all duration-700 ease-in-out"
      } flex justify-center mt-[76px] z-50`}
    >
      <ul className="menu-items gap-7 flex flex-col lg:hidden py-[25px] items-center">
        {landingMenuList.map((item, index) => (
          <li className="text-secondary relative cursor-pointer" key={index}>
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LandingNavReponsive;
