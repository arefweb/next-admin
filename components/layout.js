import React, {useState, useEffect} from "react";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout({ children }) {
  

  return (
    <div className="wrapper">
      <Sidebar />
      <section className="content-area">
        <div id="overlay"></div>
        <HeaderAdmin />
        <main className="main">{children}</main>
      </section>
    </div>
  );
}
