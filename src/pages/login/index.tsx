"use client";

import Logo from "@/components/common/Logo";
import Title from "@/components/meta/Title";
import { FC, Fragment, useState } from "react";
import { Input } from "@/components/UI/input";
import { Image } from "@nextui-org/react";
import { Button } from "@/components/UI/button";
import Google from "@/components/common/Google";

const Login: FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Fragment>
      <Title title="Se connecter à votre compte" />
      <section className="login flex w-full min-h-screen items-center lg:items-stretch overflow-x-hidden">
        <div className="login__form w-full min-h-screen h-full lg:w-[50%] flex justify-center items-center">
          <div className="login__form-container px-4 lg:px-0 max-w-[420px] md:w-[400px] flex flex-col items-center lg:items-start gap-9 my-[5vh] lg:my-12">
            <Logo />
            <h3 className="title text-[31px] md:text-3xl lg:text-4xl font-calSans text-center lg:text-start">
              Se connecter à{" "}
              <span className="text-primary font-calSans">BioSync</span>
            </h3>
            <form method="post" className="w-full flex flex-col gap-6">
              <Input
                type="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Votre email"
              />
              <Input
                type={showPassword ? "text" : "password"}
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
              <Button radius="md" className="h-[48px] mt-5">
                Se connecter
              </Button>
            </form>
            <Google />
            <div className="signup w-full flex justify-center">
              <p className="mt-4 text-center text-secondary">
                Pas encore de compte?{" "}
                <span className="font-semibold text-blue-500">
                  Créer un compte
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="login_image w-[50%] min-h-screen bg-cover bg-center bg-no-repeat hidden lg:flex items-end justify-center p-7"
          style={{ backgroundImage: `url("/login-bg.svg")` }}
        >
          <p className="font-calSans text-white text-[26px] text-center leading-tight">
            <span className="font-calSans text-[40px]">“</span>Rejoignez{" "}
            <span className="text-yellow01 font-calSans">bioSync</span> et
            contribuez à un avenir plus durable pour notre planète.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
