import { IprofileMenu } from "@/helpers/types";
import { Avatar } from "@chakra-ui/react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Skeleton,
} from "@nextui-org/react";
import { FC, Fragment } from "react";

const ProfileMenu: FC<IprofileMenu> = ({
  loading,
  onLogout,
  user,
}): JSX.Element => {
  return (
    <Fragment>
      {loading ? (
        <div className="profile flex items-center gap-3">
          <Skeleton className="h-[39px] w-[39px] rounded-full" />
          <Skeleton className="h-[39px] w-[64px] rounded-lg" />
        </div>
      ) : (
        <div className="profile flex items-center gap-3">
          <Avatar
            src={`https://ui-avatars.com/api/?name=${user?.pseudo}&background=0D8ABC&color=fff`}
            className="!h-[39px] !w-[39px]"
          />

          <p className="text-secondary flex items-center gap-2">
            <span className="hidden md:flex">{user?.pseudo} </span>
            <Dropdown>
              <DropdownTrigger className="cursor-pointer">
                <Image src="/icons/chevron-down.svg" className="w-3" />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onClick={onLogout}>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/logout.svg" width={21} radius="none" />{" "}
                    Se déconnecter
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default ProfileMenu;
