import DashboardNav from "@/components/common/navbars/DashboardNav";
import { Image } from "@nextui-org/react";
import { FC, Fragment, ReactNode } from "react";

const DashboardBottomButtons: FC = (): JSX.Element => {
  return (
    <div
      className="fixed flex flex-col gap-5"
      style={{ right: "30px", bottom: "30px" }}
    >
      <button
        className="bg-yellow01 flex items-center justify-center rounded-full"
        style={{ width: "54px", height: "54px" }}
      >
        <Image src="/icons/map.svg" width={30} />
      </button>
    </div>
  );
};

const DashboardLayout: FC<{ children: ReactNode; addButton?: boolean }> = ({
  children,
  addButton = false,
}): JSX.Element => {
  return (
    <Fragment>
      <DashboardNav />
      {children}
      {addButton && <DashboardBottomButtons />}
    </Fragment>
  );
};

export default DashboardLayout;
