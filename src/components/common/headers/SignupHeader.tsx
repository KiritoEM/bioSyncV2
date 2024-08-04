import { FC } from "react";
import Logo from "../Logo";

const SignupHeader: FC<{ title: string }> = ({ title }) => {
  return (
    <header className="signup-header flex flex-col items-center gap-4">
      <Logo />
      <h5
        className="font-calSans text-[31px] text-center"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </header>
  );
};

export default SignupHeader;
