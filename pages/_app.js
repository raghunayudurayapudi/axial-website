import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import HeaderProvider from "../contexts/HeaderContext"

import Script from "next/script";
import "../styles/globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "react-multi-carousel/lib/styles.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <HeaderProvider>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </HeaderProvider>
  );
};

export default MyApp;
