import { Button } from "@/components/UI/button";
import { Input } from "@nextui-org/react";

const LandingJoin = (): JSX.Element => {
  return (
    <section className="landing__join w-full">
      <div className="container mx-auto w-full py-[180px] md:py-[165px] px-7 lg:px-[82px] flex flex-col md:flex-row gap-5 justify-between items-center overflow-hidden">
        <h3 className="font-calSans text-3xl lg:text-4xl">
          Rejoignez la communauté
        </h3>
        <div className="input flex flex-col gap-4 md:w-[45%] :w-[40%]">
          <label
            htmlFor=""
            className="text-secondary01 font-semibold text-[18px]"
          >
            Abonnez-vous à la newsletter
          </label>
          <Input
            radius="full"
            size="lg"
            classNames={{
              input: "h-[50px] pr-[5px] mr-[4px]",
            }}
            placeholder="Entrez votre email"
            endContent={
              <Button
                variant="secondary"
                className="h-[70%] relative left-3 px-7 lg:w-max flex gap-[5px]"
              >
                Envoyer
                <img src="/icons/arrow-right-white.svg" className="w-4" />
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default LandingJoin;
