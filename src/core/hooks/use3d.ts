import { useEffect, useState } from "react";

interface EarthModule {
  default: any;
}

const use3d = () => {
  const [Earth, setEarth] = useState<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://raw.githubusercontent.com/KiritoEM/World-connect/develop/src/components/commons/3d/Earth.tsx";
    script.async = true;
    script.onload = () => {
      import(
        //@ts-ignore
        "https://raw.githubusercontent.com/KiritoEM/World-connect/develop/src/components/commons/3d/Earth.tsx"
      )
        .then((module: EarthModule) => setEarth(module.default))
        .catch((err) => console.error(err));
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return { Earth };
};

export default use3d;
