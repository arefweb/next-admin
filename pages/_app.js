import '../styles/globals.css';
import "../styles/styles.scss";
import Layout from '../components/layout';
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { storeWrapper } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { setAuthResponse, setIsAuth, setToken } from "../redux/slices/authenticationSlice";
import CircularProgress from "@mui/material/CircularProgress";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const hasAuthResponse = useSelector((state) => state.authReducer.hasAuthResponse);
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  useEffect(() => {
    if (location.pathname == "/login"){
      return
    }
     axios.get("/api/auth").then((resp) => {
       console.log(resp);
       let status = resp.status;
       let token = resp.config.headers["x-access-token"];
       if (status == 401 || status == 403) {
         dispatch(setAuthResponse(true));
         dispatch(setIsAuth(false));
         dispatch(setToken(""));
       }
       if (status == 200) {
         dispatch(setIsAuth(true));
         dispatch(setAuthResponse(true));
         dispatch(setToken(token));
         localStorage.setItem("token", token);
       }
     }).catch((err)=>{
       if(err.response.status == 403 || err.response.status == 401){
         dispatch(setAuthResponse(true));
         dispatch(setIsAuth(false));
         dispatch(setToken(""));
       }
     });
  }, [])

  useEffect(() => {
    if (hasAuthResponse && !isAuth) {
      router.push("/login");
    }
  }, [isAuth, hasAuthResponse]);

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

  if(router.pathname == "/login" ){
    return (
      <>
        <Head>
          <title>داشبورد - عارف موحدزاده</title>
          <meta
            name="description"
            content="داشبورد مدیریت ارتباط با مشتری عارف موحدزاده"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }


  return (
    <>
      {hasAuthResponse ? (
        <>
          {isAuth && (
            <Layout>
              <Head>
                <link rel="manifest" href="/manifest.json" />
              </Head>
              <Component {...pageProps} />
            </Layout>
          )}
        </>
      ) : (
        <div style={{height: "300px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <CircularProgress size={70} />
        </div>
      )}
    </>
  );
}

export default storeWrapper.withRedux(MyApp);
