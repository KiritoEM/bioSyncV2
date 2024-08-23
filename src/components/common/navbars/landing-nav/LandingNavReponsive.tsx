import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";
import { useRouter } from "next/router";
import NavMenu from "./NavMenu";

const LandingNavReponsive = (): JSX.Element => {
  const navState = useSelector((state: RootState) => state.nav.navState);
  const router = useRouter();
  return (
    <section
      className={`landing-nav__responsive fixed bg-input ${
        navState
          ? " w-screen h-screen transition-all duration-700 ease-in-out overflow-hidden"
          : "w-0 h-0 overflow-hidden p-0 transition-all duration-700 ease-in-out"
      } flex justify-center mt-[76px] z-50`}
    >
      <NavMenu responsive router={router} />
    </section>
  );
};

export default LandingNavReponsive;
