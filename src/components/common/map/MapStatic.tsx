import { Marker, TileLayer, useMapEvents } from "react-leaflet";
import { FC, useState, useEffect, Fragment } from "react";
import { MapContainer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Imap } from "@/helpers/types";
import { Image } from "@nextui-org/react";
import path from "path";
import { defaultIcon, ferIcon, plasticIcon } from "../icons/MapIcon";
import { useLocation } from "@/core/hooks/useLocation";
import { MapSkeleton } from "@/components/UI/skeleton";
import useLoadMap from "@/core/hooks/useLoadMap";

const MapStatic: FC<Imap> = ({
  position,
  zoom,
  wheelZoom = false,
  posts,
  geolocalisation = true,
  events = false,
}): JSX.Element => {
  const { addCoords } = useLocation();
  const [markerPosition, setMarkerPosition] = useState(position);
  const { stopMapLoad, mapLoaded } = useLoadMap();
  console.log(mapLoaded);

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
    <Fragment>
      {!mapLoaded ? (
        <MapSkeleton size={{ width: "full", height: "screen" }} />
      ) : (
        <MapContainer
          center={markerPosition ? markerPosition : position}
          zoom={zoom}
          scrollWheelZoom={wheelZoom}
          className="w-full h-full"
          whenReady={() => stopMapLoad()}
        >
          <TileLayer url={process.env.NEXT_PUBLIC_OPEN_STREETMAP as string} />
          {events && <MapEvents />}
          {geolocalisation && (
            <Marker
              position={markerPosition as [number, number]}
              icon={defaultIcon}
            >
              <Popup>Votre position actuelle</Popup>
            </Marker>
          )}
          {posts?.map((post, index) => (
            <Marker
              key={index}
              position={post.location}
              icon={post.productType === "plastique" ? plasticIcon : ferIcon}
            >
              <Popup maxWidth={500}>
                <Image
                  src={`/uploads/${path.basename(post.picture.file_path)}`}
                  width={300}
                  height={150}
                  isZoomed
                  className="object-cover"
                  radius="md"
                />
                <div className="post__info mt-2 flex flex-col gap-4">
                  <h3 className="text-scondary01 text-lg font-calSans">
                    {post.name}{" "}
                    <span className="border-2 border-yellow01 text-[14px] rounded-md p-[3px] ml-1">
                      {post.price}Ar/{" "}
                      {post.quantityType === "nombre" ? "pièce" : "kilos"}
                    </span>
                  </h3>
                  <h5 className="text-secondary01 p-0 -mt-3">
                    {post.description}
                  </h5>
                  <h5 className="text-secondary01">
                    Quantité dispo:{" "}
                    <span className="text-primary">{post.quantity}</span>
                  </h5>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </Fragment>
  );
};

export default MapStatic;
