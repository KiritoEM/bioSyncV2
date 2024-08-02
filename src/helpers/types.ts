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
  width?: number;
}

interface IhorizontalWrapper {
  children: ReactNode;
  direction: number;
}

export type { IlandingMenuList, IfeaturesList, IhorizontalWrapper };
