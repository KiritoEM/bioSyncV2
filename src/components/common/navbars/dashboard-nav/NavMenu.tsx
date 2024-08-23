import { dashboardNavList } from "@/helpers/constant";
import { useRouter } from "next/router";
import { FC } from "react";

const NavMenu: FC = (): JSX.Element => {
  const router = useRouter();
  return (
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
  );
};

export default NavMenu;
