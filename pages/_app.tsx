import type { AppProps } from 'next/app'
import Head from 'next/head';
import "../styles/globals.css";
import '../styles/custom-antd.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SEO Content Generator</title>
        <meta name="description" content="Developed by Safemode" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
