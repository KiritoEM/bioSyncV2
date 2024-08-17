import type { AppProps } from "next/app";
import "cal-sans";
import "@fontsource/lato";
import "@/styles/index.scss";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";
import RootLayout from "@/layouts/RootLayout";
import Loading from "@/components/common/SpinnerLoading";
import { useSelector } from "react-redux";
import { RootState } from "@/core/redux/store.config";

const AppLoading = () => {
  const loading = useSelector((state: RootState) => state.loading.loadingState);
  const type = useSelector((state: RootState) => state.loading.type);
  return <>{loading && type === "spinner" && <Loading />}</>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <ChakraProvider>
        <NextUIProvider>
          <Component {...pageProps} />
          <AppLoading />
        </NextUIProvider>
      </ChakraProvider>
    </RootLayout>
  );
}
