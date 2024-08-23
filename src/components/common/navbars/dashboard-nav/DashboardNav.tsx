import React, { FC, useEffect } from "react";
import Logo from "../../Logo";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";
import userActions from "@/actions/userActions";
import useLazyLoad from "@/core/hooks/useLazyLoad";
import { useAuth } from "@/core/contexts/authContext";
import NavMenu from "./NavMenu";
import ProfileMenu from "../../headers/ProfileMenu";
import { SearchInput } from "@/components/UI/input";

const DashboardNav: FC = (): JSX.Element => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const { getCurrentUser } = userActions();
  const { loading } = useLazyLoad(getCurrentUser);
  const { logout } = useAuth();

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

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
          <SearchInput />
          <div className="notif p-2 rounded-lg bg-input h-[48px] w-[48px] items-center justify-center hidden lg:flex">
            <img src="/icons/bell.svg" className="w-5" />
          </div>
          <ProfileMenu loading={loading} onLogout={handleLogout} user={user} />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
