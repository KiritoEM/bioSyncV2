import { Imap } from "@/helpers/types";
import { Marker, TileLayer } from "react-leaflet";
import { FC } from "react";
import { MapContainer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map: FC<Imap> = ({ position, zoom }): JSX.Element => {
  console.log(position);
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      className="w-full h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Your default position</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
