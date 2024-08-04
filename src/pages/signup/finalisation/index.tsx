import authActions from "@/actions/authActions";
import Google from "@/components/common/Google";
import SignupHeader from "@/components/common/headers/SignupHeader";
import Title from "@/components/meta/Title";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { RootState } from "@/core/redux/store.config";
import SignupLayout from "@/layouts/SignupLayout";
import { Divider, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC, Fragment, useState } from "react";
import { useSelector } from "react-redux";

const signupFinalisation: FC = (): JSX.Element => {
  const { register } = authActions();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const loading = useSelector((state: RootState) => state.loading.loadingState);
  const router = useRouter();

  const { email } = router.query;
  console.log(email);
  return (
    <Fragment>
      <Title title="Créez votre compte BioSync" />
      <SignupLayout>
        <SignupHeader title={`Finalisez la création de votre compte`} />
        <form
          className="signup__form w-full flex flex-col gap-6"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            register(e, email as string);
          }}
        >
          <Input
            placeholder="Créez votre pseudo"
            label="Pseudo"
            labelPlacement="outside"
            name="pseudo"
            autoComplete="off"
          />
          <Input
            placeholder="Votre nom complet"
            label="Nom complet"
            labelPlacement="outside"
            name="user-name"
            autoComplete="off"
          />
          <Divider orientation="horizontal" />
          <Input
            type={showPassword ? "text" : "password"}
            label="Mot de passe"
            labelPlacement="outside"
            placeholder="Créer votre mot de passe"
            name="password"
            endContent={
              <Image
                src={showPassword ? "/icons/eye-off.svg" : "/icons/eye.svg"}
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              />
            }
          />
          {loading ? (
            <Button
              className="h-[48px] w-full"
              radius="md"
              isLoading
              isDisabled
            >
              Création du compte...
            </Button>
          ) : (
            <Button className="h-[48px] w-full" radius="md" type="submit">
              Créer un compte
            </Button>
          )}
        </form>
      </SignupLayout>
    </Fragment>
  );
};

export default signupFinalisation;