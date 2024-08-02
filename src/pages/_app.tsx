import type { AppProps } from "next/app";
import "cal-sans";
import "@fontsource/lato";
import "@/styles/index.scss";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavProvider } from "@/core/hooks/useNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ChakraProvider>
        <NavProvider>
          <Component {...pageProps} />
        </NavProvider>
      </ChakraProvider>
    </NextUIProvider>
  );
}
