import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";

const Sidebar = () => {
  const router = useRouter();

  useEffect(() => {
    let links = document.getElementsByClassName("nav-menu-link");
    Array.from(links).forEach(function (item) {
      item.classList.remove("active");
      if (item.pathname == router.pathname) {
        item.classList.add("active");
      }
    });
  }, [router.pathname]);


  return (
    <aside className="sidebar menuHide">
      <div className="sidebar__header">
        <figure className="sidebar__header-profile-pic">
          <Image
            src="/assets/images/avatar4.jpg"
            alt="profile-pic"
            width="64"
            height="64"
          />
        </figure>
        <div className="sidebar__header-profile-name">
          <h5>پارسا پرهیزکار</h5>
        </div>
      </div>
      <div className="sidebar__body">
        <div className="sidebar__body-dashboards">
          <p>داشبوردها</p>
        </div>
        <div className="nav-menu-item">
          <Link href="/">
            <a className="nav-menu-link" id="crypto">
              <MonetizationOnIcon />
              <span>رمز ارز</span>
            </a>
          </Link>
        </div>

        <div className="nav-menu-item">
          <Link href="/crm">
            <a className="nav-menu-link" id="crm">
              <PeopleIcon />
              <span style={{ fontFamily: "Montserrat" }}>CRM</span>
            </a>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
