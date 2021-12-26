import React from 'react'
import Image from "next/image";

const RecentPayments = ({ name }) => {
  return (
    <div className="col-md-12">
      <article className="crypto__recent-payments-box">
        <div className="crypto__recent-payments-box-head">
          <h4>پرداخت های اخیر</h4>
        </div>
        <div className="crypto__recent-payments-box-body">
          <table>
            <thead>
              <tr>
                <th>صاحب حساب</th>
                <th>آخرین پرداخت</th>
                <th>مبلغ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="account-holder">
                    <div className="account-holder-picture">
                      <Image
                        src="/assets/images/avatar3.jpg"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="account-holder-name">
                      <p>{name}</p>
                    </div>
                  </div>
                </td>
                <td>۱ سال قبل</td>
                <td>5000 تومان</td>
              </tr>
              <tr>
                <td>
                  <div className="account-holder">
                    <div className="account-holder-picture">
                      <Image
                        src="/assets/images/avatar4.jpg"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="account-holder-name">
                      <p>داوود شکری</p>
                    </div>
                  </div>
                </td>
                <td>۱ سال قبل</td>
                <td>3433 تومان</td>
              </tr>
              <tr>
                <td>
                  <div className="account-holder">
                    <div className="account-holder-picture">
                      <Image
                        src="/assets/images/avatar5.jpg"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="account-holder-name">
                      <p>راضیه صولتی</p>
                    </div>
                  </div>
                </td>
                <td>۱ سال قبل</td>
                <td>3500 تومان</td>
              </tr>
              <tr>
                <td>
                  <div className="account-holder">
                    <div className="account-holder-picture">
                      <Image
                        src="/assets/images/avatar7.jpg"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="account-holder-name">
                      <p>محمد بابایی</p>
                    </div>
                  </div>
                </td>
                <td>۱ سال قبل</td>
                <td>3600 تومان</td>
              </tr>
              <tr>
                <td>
                  <div className="account-holder">
                    <div className="account-holder-picture">
                      <Image
                        src="/assets/images/avatar6.jpg"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="account-holder-name">
                      <p>مونا اکبرنژاد</p>
                    </div>
                  </div>
                </td>
                <td>۱ سال قبل</td>
                <td>3600 تومان</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
};

export default RecentPayments
