import DashboardNav from "@/components/common/navbars/DashboardNav";
import { FC, Fragment, ReactNode } from "react";

const DashboardLayout: FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  return (
    <Fragment>
      <DashboardNav />
      {children}
    </Fragment>
  );
};

export default DashboardLayout;
