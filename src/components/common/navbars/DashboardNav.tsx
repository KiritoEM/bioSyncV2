import React, { FC, useEffect } from "react";
import Logo from "../Logo";
import { dashboardNavList } from "@/helpers/constant";
import { useRouter } from "next/router";
import { SearchInput } from "@/components/UI/input";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Skeleton,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";
import userActions from "@/actions/userActions";
import useLazyLoad from "@/core/hooks/useLazyLoad";
import { useAuth } from "@/core/contexts/useAuth";

const DashboardNav: FC = (): JSX.Element => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const { getCurrentUser } = userActions();
  const { loading } = useLazyLoad(getCurrentUser);
  const { logout } = useAuth();

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <nav className="dashboard__nav w-full overflow-hidden bg-white">
      <div className="container mx-auto px-7 lg:px-[35px] flex justify-between items-center py-4">
        <Logo />
        <ul className="menu-items gap-4 hidden lg:flex">
          {dashboardNavList.map((item, index) => (
            <li
              key={index}
              className={`p-[10px] hover:bg-primary/90 hover:rounded-lg cursor-pointer ${
                Array.isArray(item.url) && item.url.includes(router.pathname)
                  ? "bg-primary rounded-lg"
                  : ""
              }`}
              onClick={() => router.push(item.url ? item.url[0] : "")}
            >
              <img
                src={
                  Array.isArray(item.url) && item.url.includes(router.pathname)
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
          <div className="notif p-2 rounded-lg bg-gray01 h-[48px] w-[48px] items-center justify-center hidden lg:flex">
            <img src="/icons/bell.svg" className="w-5" />
          </div>
          {loading ? (
            <div className="profile flex items-center gap-3">
              <Skeleton className="h-[39px] w-[39px] rounded-lg" />
              <Skeleton className="h-[39px] w-[60px] rounded-lg" />
            </div>
          ) : (
            <div className="profile flex items-center gap-3">
              <Avatar src="/avatar.png" className="h-[39px] w-[39px]" />
              <p className="text-secondary flex items-center gap-2">
                <span className="hidden md:flex">{user?.pseudo} </span>
                <Dropdown>
                  <DropdownTrigger className="cursor-pointer">
                    <Image src="/icons/chevron-down.svg" className="w-3" />
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => {
                        logout();
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src="/icons/logout.svg"
                          width={21}
                          radius="none"
                        />{" "}
                        Se déconnecter
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
