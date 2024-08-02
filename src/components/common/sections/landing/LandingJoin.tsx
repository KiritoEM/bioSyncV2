import { Button } from "@/components/UI/button";
import { Input } from "@nextui-org/react";

const LandingJoin = (): JSX.Element => {
  return (
    <section
      className="landing__join"
      style={{
        backgroundImage: `url("/community-bg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container mx-auto py-[165px] px-[82px] flex justify-between items-center">
        <h3 className="font-calSans text-4xl">Rejoignez la communauté</h3>
        <div className="input flex flex-col gap-4 w-[40%]">
          <label
            htmlFor=""
            className="text-secondary01 font-semibold text-[18px]"
          >
            Abonnez-vous à la newsletter
          </label>
          <Input
            radius="full"
            className="h-10"
            endContent={<Button variant="secondary"></Button>}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingJoin;
