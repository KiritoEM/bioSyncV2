import type { AppProps } from "next/app";
import "cal-sans";
import "@fontsource/lato";
import "@/styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
