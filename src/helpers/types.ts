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

export type {
  IlandingMenuList,
  IfeaturesList,
  IhorizontalWrapper,
  InavContext,
};
