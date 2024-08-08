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

interface IauthContext {
  accessToken: string | null;
  loadToken: boolean;
  addAccessToken: (token: string) => void;
  getAccessToken: () => "authentificated" | "unknown";
}

interface IdashboarsNavList {
  icon?: string;
  activeIcon?: string;
  url?: string[];
}

interface Imap {
  position: [number, number];
  zoom: number;
  wheelZoom?: boolean;
}

export type {
  IlandingMenuList,
  IfeaturesList,
  IhorizontalWrapper,
  Ifade,
  Itoast,
  Imodal,
  IauthContext,
  IdashboarsNavList,
  Imap,
};
