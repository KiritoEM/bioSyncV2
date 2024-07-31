import type { AppProps } from "next/app";
import "cal-sans";
import "@fontsource/lato";
import "@/styles/index.scss";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextUIProvider>
  );
}
