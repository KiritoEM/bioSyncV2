import React, { FC, Fragment } from "react";
import { Button } from "@/components/UI/button";

const Google: FC = (): JSX.Element => {
  return (
    <Fragment>
      <div className="or w-full flex items-center gap-4">
        <div className="line h-[1px] flex-1 bg-gray03"></div>
        <p className="text-secondary01">OU</p>
        <div className="line h-[1px] flex-1 bg-gray03"></div>
      </div>
      <Button
        className="h-[48px] w-full"
        variant="borderedSecondary"
        radius="md"
      >
        <img src="/icons/google-icon.svg" className="w-6" /> Continuer avec
        Google
      </Button>
    </Fragment>
  );
};

export default Google;
