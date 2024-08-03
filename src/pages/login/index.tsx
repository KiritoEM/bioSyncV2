import Logo from "@/components/common/Logo";
import Title from "@/components/meta/Title";
import { Fragment, useState } from "react";
import { Input } from "@/components/UI/input";
import { Image } from "@nextui-org/react";

const login = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Fragment>
      <Title title="Se connecter à votre compte" />
      <section className="login flex">
        <div className="login__form w-[50%] flex justify-center items-center">
          <div className="login__form-container max-w-[420px] md:w-[410px] flex flex-col items-start gap-6 my-12">
            <Logo />
            <h3 className="title text-4xl font-calSans">
              Se connecter à{" "}
              <span className="text-primary font-calSans">BioSync</span>
            </h3>
            <form action="post" className="w-full flex flex-col gap-5">
              <Input
                type="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Votre email"
              />
              <Input
                type="password"
                label="Mot de passe"
                labelPlacement="outside"
                placeholder="Votre mot de passe"
                endContent={
                  <Image
                    src={showPassword ? "/icons/eye-off.svg" : "/icons/eye.svg"}
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                  />
                }
              />
            </form>
          </div>
        </div>
        <div
          className="login_image w-[50%] h-screen bg-cover bg-center bg-no-repeat flex items-end justify-center p-7"
          style={{ backgroundImage: `url("/login-bg.svg")` }}
        >
          <p className="font-calSans text-white text-[26px] text-center leading-tight">
            <span className="font-calSans text-[40px]">“</span>Rejoignez{" "}
            <span className="text-yellow01 font-calSans">bioSync</span> et
            contibuez à un avenir plus durable pour notre planète.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default login;
