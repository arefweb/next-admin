import '../styles/globals.css';
import "../styles/styles.scss";
import Layout from '../components/layout';
import { useEffect } from "react";
import Head from "next/head";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);


  return (
    <Layout>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
