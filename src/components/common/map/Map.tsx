import { Marker, TileLayer, useMapEvents } from "react-leaflet";
import { FC, useState } from "react";
import { MapContainer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import useLocalisation from "@/core/hooks/useLocalisation";
import { Imap } from "@/helpers/types";

const Map: FC<Imap> = ({ position, zoom, wheelZoom = false }): JSX.Element => {
  const { addCoords } = useLocalisation();
  const [markerPosition, setMarkerPosition] = useState(position);

  const MapEvents = () => {
    useMapEvents({
      click(e) {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
        addCoords(e.latlng.lat, e.latlng.lng);
      },
    });

    return null;
  };

  return (
    <MapContainer
      center={markerPosition}
      zoom={zoom}
      scrollWheelZoom={wheelZoom}
      className="w-full h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapEvents />
      <Marker position={markerPosition}>
        <Popup>Your default position</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
