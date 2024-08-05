import type { AppProps } from "next/app";
import "cal-sans";
import "@fontsource/lato";
import "@/styles/index.scss";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";
import RootLayout from "@/layouts/RootLayout";
import Loading from "@/components/common/Loading";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";

export default function App({ Component, pageProps }: AppProps) {
  const loading = useSelector((state: RootState) => state.loading.loadingState);
  return (
    <RootLayout>
      <NextUIProvider>
        <ChakraProvider>
          <Component {...pageProps} />
          {loading === true && <Loading />}
        </ChakraProvider>
      </NextUIProvider>
    </RootLayout>
  );
}
