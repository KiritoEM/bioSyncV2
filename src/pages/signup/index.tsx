import authActions from "@/actions/authActions";
import Google from "@/components/common/Google";
import SignupHeader from "@/components/common/headers/SignupHeader";
import Title from "@/components/meta/Title";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { freeHOC } from "@/core/HOC/authHOC";
import { RootState } from "@/core/redux/store.config";
import SignupLayout from "@/layouts/SignupLayout";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";
import { useSelector } from "react-redux";

const signup: FC = (): JSX.Element => {
  const { submitEmail } = authActions();
  const loading = useSelector((state: RootState) => state.loading.loadingState);
  const router = useRouter();

  return (
    <Fragment>
      <Title title="Créez votre compte BioSync" />
      <SignupLayout>
        <SignupHeader
          title={`Créez un compte et rejoignez  <span class="text-primary font-calSans">BioSync</span>`}
        />
        <form
          className="signup__form w-full flex flex-col gap-6"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            submitEmail(e);
          }}
        >
          <Input
            placeholder="Votre email"
            label="Email"
            labelPlacement="outside"
            name="email"
            autoComplete="off"
          />
          {loading ? (
            <Button
              className="h-[48px] w-full"
              radius="md"
              isLoading
              isDisabled
            >
              Envoie...
            </Button>
          ) : (
            <Button className="h-[48px] w-full" radius="md" type="submit">
              Envoyer
            </Button>
          )}
        </form>
        <Google />
        <div className="signup w-full flex justify-center">
          <p className="mt-4 text-center text-secondary">
            Vous avez déja compte?{" "}
            <span
              className="font-semibold text-blue-500 cursor-pointer"
              onClick={() => router.replace("/login")}
            >
              Se connecter
            </span>
          </p>
        </div>
      </SignupLayout>
    </Fragment>
  );
};

export default freeHOC(signup);
