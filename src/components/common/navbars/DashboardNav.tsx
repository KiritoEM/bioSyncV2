import React, { FC } from "react";
import Logo from "../Logo";
import { dashboardNavList } from "@/helpers/constant";
import { useRouter } from "next/router";
import { SearchInput } from "@/components/UI/input";
import { Avatar } from "@nextui-org/react";

const DashboardNav: FC = (): JSX.Element => {
  const router = useRouter();
  return (
    <nav className="dashboard__nav w-full overflow-hidden bg-white">
      <div className="container mx-auto px-[35px] flex justify-between items-center py-4">
        <Logo />
        <ul className="menu-items flex gap-4">
          {dashboardNavList.map((item, index) => (
            <li
              key={index}
              className={`p-[10px] hover:bg-primary/90 hover:rounded-lg cursor-pointer ${
                router.pathname === item.url ? "bg-primary rounded-lg" : ""
              }`}
            >
              <img
                src={
                  router.pathname === item.url
                    ? `/icons/${item.activeIcon}`
                    : `/icons/${item.icon}`
                }
                className="w-[22px]"
              />
            </li>
          ))}
        </ul>
        <div className="actions flex items-center gap-7">
          <SearchInput />
          <div className="notif p-2 rounded-lg bg-gray01 h-[48px] w-[48px] flex items-center justify-center">
            <img src="/icons/bell.svg" className="w-5" />
          </div>
          <div className="profile flex items-center gap-3">
            <Avatar
              radius="lg"
              src="/avatar.png"
              className="h-[45px] w-[45px]"
            />
            <p className="text-secondary flex items-center gap-2">
              Johan <img src="/icons/chevron-down.svg" className="w-3" />
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
