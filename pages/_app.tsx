import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";
import Header from "@/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Header />
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
