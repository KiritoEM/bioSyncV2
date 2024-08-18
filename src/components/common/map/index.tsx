import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapStatic"), {
  ssr: false,
});

export { Map };
