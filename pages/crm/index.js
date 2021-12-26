/**** CRM Page *****/
import React from "react";
import Head from "next/head";
import MessageIcon from "@mui/icons-material/Message";
import EmailIcon from "@mui/icons-material/Email";
import CheckIcon from "@mui/icons-material/Check";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SiteVisits from "../../components/charts/SiteVisits";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TaskIcon from "@mui/icons-material/Task";
import GroupIcon from "@mui/icons-material/Group";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import RecentPayments from "../../components/tables/RecentPayments";
import { useEffect, useState } from "react";
import callAPI from "../../services/api";

const Crm = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    callAPI.getCustomers().then((resp) => {
      setName(resp.data.name);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>داشبورد - مدیریت مشتری</title>
        <meta
          name="description"
          content="داشبورد مدیریت ارتباط با مشتری عارف موحدزاده"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="container crm">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ fontFamily: "Montserrat" }}>CRM</h2>
          </div>
        </div>

        <div className="row welcome">
          <div className="col-md-12">
            <article className="welcome-box">
              <div className="welcome-box-head">
                <h4>خوش آمدید</h4>
              </div>

              <div className="row welcome-box-body">
                <div className="col-md-4 col-12 notifications">
                  <div>اعلانات</div>
                  <div className="notifications-item">
                    <MessageIcon />
                    <span>۵ پیام ناخوانده</span>
                  </div>
                  <div className="notifications-item">
                    <EmailIcon />
                    <span>۲ دعوت معلق</span>
                  </div>
                  <div className="notifications-item">
                    <CheckIcon />
                    <span>۷ کار انجام نشده</span>
                  </div>
                  <div className="notifications-item">
                    <NotificationsIcon />
                    <span>۳ اعلان دیگر</span>
                  </div>
                </div>
                <div className="col-md-4 col-12 visits">
                  <div>بازدید از سایت</div>
                  <div style={{ height: "120px" }}>
                    <SiteVisits />
                  </div>
                </div>
                <div className="col-md-4 col-12 audiance">
                  <div>مخاطبین سایت</div>

                  <div className="audiance-overview">
                    <div className="audiance-overview-title">مذکر</div>
                    <div className="audiance-overview-bar">
                      <div className="audiance-overview-bar-male"></div>
                      <span>51%</span>
                    </div>
                  </div>

                  <div className="audiance-overview">
                    <div className="audiance-overview-title">مونث</div>
                    <div className="audiance-overview-bar">
                      <div className="audiance-overview-bar-female"></div>
                      <span>44%</span>
                    </div>
                  </div>

                  <div className="audiance-overview">
                    <div className="audiance-overview-title">دیگر</div>
                    <div className="audiance-overview-bar">
                      <div className="audiance-overview-bar-other"></div>
                      <span>4%</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="row stats">
          <div className="col-md-3">
            <article className="stats-card proj">
              <div className="stats-card-icon">
                <EmojiObjectsIcon style={{ fontSize: "65px" }} />
              </div>
              <div className="stats-card-text">
                <h3>۹</h3>
                <div>پروژه</div>
              </div>
            </article>
          </div>
          <div className="col-md-3">
            <article className="stats-card task">
              <div className="stats-card-icon">
                <TaskIcon style={{ fontSize: "65px" }} />
              </div>
              <div className="stats-card-text">
                <h3>۴۵۷</h3>
                <div>تسک</div>
              </div>
            </article>
          </div>
          <div className="col-md-3">
            <article className="stats-card team">
              <div className="stats-card-icon">
                <GroupIcon style={{ fontSize: "65px" }} />
              </div>
              <div className="stats-card-text">
                <h3>۱۳</h3>
                <div>تیم</div>
              </div>
            </article>
          </div>
          <div className="col-md-3">
            <article className="stats-card file">
              <div className="stats-card-icon">
                <InsertDriveFileIcon style={{ fontSize: "65px" }} />
              </div>
              <div className="stats-card-text">
                <h3>۴۲</h3>
                <div>فایل</div>
              </div>
            </article>
          </div>
        </div>

        <div className="row crypto__recent-payments">
          <RecentPayments name={name} />
        </div>
      </section>
    </div>
  );
};

export default Crm;
