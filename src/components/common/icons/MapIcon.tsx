import L from "leaflet";

const plasticIcon = new L.Icon({
  iconUrl: process.env.NEXT_PUBLIC_GREEN,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const ferIcon = new L.Icon({
  iconUrl: process.env.NEXT_PUBLIC_GRAY,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const defaultIcon = new L.Icon({
  iconUrl: process.env.NEXT_PUBLIC_DEFAULT,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export { plasticIcon, ferIcon, defaultIcon };
