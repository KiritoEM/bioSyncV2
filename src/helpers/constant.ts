/**
 *données statiques utilisées dans toutes l' application stockées avec des Structure de données
 */

import { IfeaturesList, IlandingMenuList } from "./types";

const landingMenuList: IlandingMenuList[] = [
  {
    label: "Accueil",
  },
  {
    label: "A propos",
  },
  {
    label: "Découvrir",
  },
  {
    label: "FAQ",
  },
];

const featuresList: IfeaturesList[] = [
  {
    lottieSrc: "UI-lottie.json",
    title: "Interface utilisateur flexible et fluide",
    describ:
      "Mise en place d’une interface utilisateur adaptée et utilisable sur tous les appareils.",
    bg: "#FFC957",
    grid: 2,
  },
  {
    lottieSrc: "map-lottie.json",
    title:
      "Recherche de produits recyclables efficace grâce à l’intégration de map",
    describ:
      "Intégration de map dans l’ application pour effectuer les recherches de produits recyclables à proximité, avec précision pour éviter une perte de temps.",
    bg: "#FF9B85",
    grid: 3,
    width: 85,
  },
  {
    lottieSrc: "bell-lottie.json",
    title: "Notifications en temps réel",
    describ:
      "Ajout de fonctionnalités de realtime dans l' application pour une amélioration de l' expérience utilisateur.",
    bg: "#59B9FF",
    grid: 3,
    width: 85,
  },
  {
    lottieSrc: "heart-lottie.json",
    title: "Rejoindre une communauté active",
    describ: "BioSync a une communauté active.",
    bg: "#AAF683",
    grid: 2,
  },
];

export { landingMenuList, featuresList };
