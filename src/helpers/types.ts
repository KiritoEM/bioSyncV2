import { ReactNode } from "react";

type IlandingMenuList = {
  label: string;
  sectionId?: string;
};

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
  currentUserId: string | null;
  loadToken: boolean;
  addAccessToken: (token: string) => void;
  addCurrentId: (id: string) => void;
  logout: () => void;
  getAccessToken: () => "authentificated" | "unknown";
}

interface ILocalisationContext {
  coords: [number, number];
  selectedCoords: [number, number];
  addCoords: (lat: number, lng: number) => void;
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
  posts?: IpostCard[];
  geolocalisation?: boolean;
  events: boolean;
}

interface IpostCard {
  _id?: string;
  poster: {
    pseudo: string;
    name: string;
    email: string;
    posts?: any[];
    password: string;
    localisation?: string;
  };
  picture?: any;
  name: string;
  description: string;
  price: string;
  likers: any[];
  location: [number, number];
  productType: string;
  quantityType: string;
  quantity: number;
}

interface Iuser {
  pseudo: string;
  name: string;
  email: string;
  posts?: IpostCard[];
  password: string;
  localisation?: string;
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
  IpostCard,
  Iuser,
  ILocalisationContext,
};
