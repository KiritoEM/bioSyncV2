import { ReactNode } from "react";

interface IlandingMenuList {
  label: string;
  sectionId?: string;
}

interface IfeaturesList {
  lottieSrc: string;
  title: string;
  describ: string;
  bg: string;
  grid: number;
}

interface IhorizontalWrapper {
  children: ReactNode;
  direction: number;
}

interface InavContext {
  openNav: boolean;
  changeNavState: (state: boolean) => void;
  toogleNav: () => void;
}

interface Ifade {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  className?: string;
}

type Itoast = {
  title: string;
  description: string;
  status: "error" | "warning" | "success";
};

interface Imodal {
  title: string;
  describ: string;
  action?: () => void;
  open: boolean;
}

export type {
  IlandingMenuList,
  IfeaturesList,
  IhorizontalWrapper,
  InavContext,
  Ifade,
  Itoast,
  Imodal,
};
