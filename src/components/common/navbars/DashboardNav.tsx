import React, { FC } from "react";
import Logo from "../Logo";
import { dashboardNavList } from "@/helpers/constant";
import { useRouter } from "next/router";
import { Input } from "@/components/UI/input";
import { Image } from "@nextui-org/react";

const DashboardNav: FC = (): JSX.Element => {
  const router = useRouter();
  return (
    <nav className="dashboard__nav w-full overflow-hidden">
      <div className="container mx-auto px-[35px] flex justify-between items-center py-6">
        <Logo />
        <ul className="menu-items flex gap-4">
          {dashboardNavList.map((item, index) => (
            <li
              key={index}
              className={`p-[10px] ${
                router.pathname === item.url ? "bg-primary rounded-lg" : ""
              }`}
            >
              <img
                src={
                  router.pathname === item.url
                    ? `/icons/${item.activeIcon}`
                    : `/icons/${item.icon}`
                }
                className="w-[24px]"
                alt=""
              />
            </li>
          ))}
        </ul>
        <div className="actions flex items-center gap-3">
          <div className="search-bar">
            <Input
              placeholder="Recherchez"
              endContent={
                <Image src="/icons/search.svg" className="w-[21px]" />
              }
            />
          </div>
          <div className="notif p-2 rounded-lg bg-gray01 h-[48px] w-[48px] flex items-center justify-center">
            <img src="/icons/bell.svg" className="w-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
