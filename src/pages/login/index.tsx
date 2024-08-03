import Title from "@/components/meta/Title";
import { Fragment } from "react";

const login = (): JSX.Element => {
  return (
    <Fragment>
      <Title title="Se connecter à votre compte" />
      <section className="login flex">
        <div className="login__content w-[50%]"></div>
        <div
          className="login_image w-[50%] h-screen bg-cover bg-center bg-no-repeat flex items-end justify-center p-7"
          style={{ backgroundImage: `url("/login-bg.svg")` }}
        >
          <p className="font-calSans text-white text-[26px] text-center leading-tight">
            <span className="font-calSans text-[40px]">“</span>Rejoignez{" "}
            <span className="text-primary font-calSans">bioSync</span> et
            contibuez à un avenir plus durable pour notre planète.
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default login;
