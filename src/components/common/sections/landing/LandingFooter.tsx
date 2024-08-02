import { socialIcons } from "@/helpers/constant";
import Logo from "../../Logo";

const LandingFooter = (): JSX.Element => {
  return (
    <footer className="landing__footer">
      <div className="container mx-auto px-[80px] py-[35px] flex justify-between items-center">
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
