import { socialIcons } from "@/helpers/constant";
import Logo from "../../Logo";

const LandingFooter = (): JSX.Element => {
  return (
    <footer className="landing__footer overflow-hidden bg-gray01">
      <div className="container mx-auto px-7 lg:px-[80px] py-[35px] flex flex-col md:flex-row gap-7 justify-between md:items-center">
        <Logo />
        <p className="copyright text-secondary01">BioSync 2024 | by KiritoEM</p>
        <div className="social-icons flex gap-2">
          {socialIcons.map((icon, index) => (
            <img src={`${icon}.svg`} key={index} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
