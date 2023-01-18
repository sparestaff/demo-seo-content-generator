import type { AppProps } from "next/app";
// components
import Header from "components/layout/Header";
import ContactBanner from "components/layout/ContactBanner";
import NavBar from "components/layout/NavBar";
import Footer from "components/layout/Footer";
// global css
import "../styles/globals.css";
import "../styles/custom-antd.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <ContactBanner />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
