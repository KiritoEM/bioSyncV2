import React, { FC } from "react";
import Logo from "../../Logo";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";
import { useAuth } from "@/core/hooks/useAuth";
import NavMenu from "./NavMenu";
import ProfileMenu from "./ProfileMenu";
import useFetchCurrentUser from "@/core/hooks/useFetchCurrentUser";

const DashboardNav: FC = (): JSX.Element => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const { logout } = useAuth();
  const { loading } = useFetchCurrentUser();

  const handleLogout = async () => {
    if (logout() === "can logout") {
      router.replace("/");
    }
  };

  return (
    <nav className="dashboard__nav w-full overflow-hidden bg-white">
      <div className="container mx-auto px-7 lg:px-[35px] flex justify-between items-center py-4">
        <Logo />
        <NavMenu />
        <div className="actions flex items-center gap-7">
          {/* <SearchInput />
          <div className="notif p-2 rounded-lg bg-input h-[48px] w-[48px] items-center justify-center hidden lg:flex">
            <img src="/icons/bell.svg" className="w-5" />
          </div> */}

          <ProfileMenu loading={loading} onLogout={handleLogout} user={user} />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
