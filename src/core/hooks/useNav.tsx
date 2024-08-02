import { InavContext } from "@/helpers/types";
import { createContext, FC, ReactNode, useContext, useState } from "react";

const NavContext = createContext<InavContext | null>(null);

export const NavProvider: FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  const [openNav, setNav] = useState<boolean>(false);

  const changeNavState = (state: boolean) => {
    setNav(state);
  };

  const toogleNav = () => {
    setNav(!openNav);
  };

  return (
    <NavContext.Provider value={{ openNav, toogleNav, changeNavState }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("Context must be used in provider");
  return context;
};
