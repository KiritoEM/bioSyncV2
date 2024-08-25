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
import { NextWithLayout } from "@/helpers/types";
import { Fragment } from "react";

type AppPropsWithLayout = AppProps & {
  Component: NextWithLayout;
};

const AppLoading = () => {
  const { loadingState, type } = useSelector(
    (state: RootState) => state.loading
  );

  return (
    <Fragment>{loadingState && type === "spinner" && <Loading />}</Fragment>
  );
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RootLayout>
      <ChakraProvider>
        <NextUIProvider>
          {getLayout(<Component {...pageProps} />)}
          <AppLoading />
        </NextUIProvider>
      </ChakraProvider>
    </RootLayout>
  );
}
