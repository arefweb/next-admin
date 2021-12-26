/**** Crypto Page *****/
import Head from "next/head";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BitcoinChart from "../components/charts/BitcoinChart";
import RippleChart from "../components/charts/RippleChart";
import EtheriumChart from "../components/charts/EtheriumChart";
import LitecoinChart from "../components/charts/LitecoinChart";
import EarningChart from "../components/charts/EarningChart";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RecentPayments from "../components/tables/RecentPayments";
import { useEffect, useState } from "react";
import callAPI from "../services/api";
import { useRouter } from "next/router";

function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    callAPI.getCustomers().then((resp) => {
      setName(resp.data.name);
    });
  }, [])

  return (
    <div>
      <Head>
        <title>داشبورد - رمز ارز</title>
        <meta name="description" content="داشبورد رمز ارز عارف موحدزاده" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="container crypto">
        <div className="row">
          <div className="col-md-6">
            <h2>رمز ارز</h2>
          </div>
        </div>
        <div className="row crypto-cards">
          <div className="col-md-3">
            <article className="crypto-card">
              <div className="crypto-card__head">
                <p>Bitcoin</p>
                <div className="crypto-card__head-prices">
                  <h4>$9,626</h4>
                  <div className="asc">
                    <span>23%</span>
                    <KeyboardArrowUpIcon />
                  </div>
                </div>
              </div>
              <div className="crypto-card__body">
                <BitcoinChart />
              </div>
            </article>
          </div>
          <div className="col-md-3">
            <article className="crypto-card">
              <div className="crypto-card__head">
                <p>Ripple</p>
                <div className="crypto-card__head-prices">
                  <h4>$9,626</h4>
                  <div className="dec">
                    <span>8%-</span>
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
              </div>
              <div className="crypto-card__body">
                <RippleChart />
              </div>
            </article>
          </div>
          <div className="col-md-3">
            <article className="crypto-card">
              <div className="crypto-card__head">
                <p>Etherium </p>
                <div className="crypto-card__head-prices">
                  <h4>$9,626</h4>
                  <div className="asc">
                    <span>0.7%</span>
                    <KeyboardArrowUpIcon />
                  </div>
                </div>
              </div>
              <div className="crypto-card__body">
                <EtheriumChart />
              </div>
            </article>
          </div>
          <div className="col-md-3">
            <article className="crypto-card">
              <div className="crypto-card__head">
                <p>Litecoin </p>
                <div className="crypto-card__head-prices">
                  <h4>$9,626</h4>
                  <div className="dec">
                    <span>1.4%-</span>
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
              </div>
              <div className="crypto-card__body">
                <LitecoinChart />
              </div>
            </article>
          </div>
        </div>

        <div className="row crypto-balance">
          <div className="col-md-6">
            <article className="crypto-balance-box">
              <h4>تراز حساب شما</h4>
              <div className="crypto-balance-box-info">
                <div className="crypto-balance-box-info-right">
                  <h3>179,626 تومان</h3>
                  <p>تراز کلی</p>
                  <Button variant="contained" className="variz">
                    واریز
                  </Button>
                  <Button variant="outlined" className="bardasht">
                    برداشت
                  </Button>
                  <Button
                    variant="text"
                    startIcon={<AddIcon />}
                    className="addWallet"
                  >
                    اضافه کردن کیف پول
                  </Button>
                </div>
                <div className="crypto-balance-box-info-left">
                  <p>توزیع حساب</p>

                  <div className="crypto-balance-box-info-left-cryp">
                    <div className="crypto-balance-box-info-left-cryp-title">
                      BTC | 8.75
                    </div>
                    <div className="crypto-balance-box-info-left-cryp-bar">
                      <div className="crypto-balance-box-info-left-cryp-bar-btc"></div>
                      <span>74%</span>
                    </div>
                  </div>

                  <div className="crypto-balance-box-info-left-cryp">
                    <div className="crypto-balance-box-info-left-cryp-title">
                      RPL | 1.23
                    </div>
                    <div className="crypto-balance-box-info-left-cryp-bar">
                      <div className="crypto-balance-box-info-left-cryp-bar-rpl"></div>
                      <span>18%</span>
                    </div>
                  </div>

                  <div className="crypto-balance-box-info-left-cryp">
                    <div className="crypto-balance-box-info-left-cryp-title">
                      LTE | 1.23
                    </div>
                    <div className="crypto-balance-box-info-left-cryp-bar">
                      <div className="crypto-balance-box-info-left-cryp-bar-lte"></div>
                      <span>8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-6">
            <article className="crypto-balance-box">
              <div className="crypto-balance-box-Etitle">
                <h3>2,950,400 تومان</h3>
                <span>درآمد امسال</span>
              </div>
              <div className="crypto-balance-box-Echart">
                <EarningChart />
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
}



export default Home;
