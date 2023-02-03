import type { AppProps } from "next/app";
// components
import { Poppins } from "@next/font/google";
import ContactBanner from "components/layout/ContactBanner";
import NavBar from "components/layout/NavBar";
import Footer from "components/layout/Footer";
import FloatButton from "antd/lib/float-button";
// global css
import "../styles/globals.css";
import "../styles/custom-antd.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "fallback",
  weight: "100",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ContactBanner />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <FloatButton.BackTop duration={0} />
    </>
  );
}
