/**** Earning & Expense Chart *****/
import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  {
    name: "فروردین",
    uv: 1400,
    pv: 1400,
    amt: 2400,
  },
  {
    name: "اردیبهشت",
    uv: 1300,
    pv: 1000,
    amt: 2210,
  },
  {
    name: "خرداد",
    uv: 2500,
    pv: 2000,
    amt: 2290,
  },
  {
    name: "تیر",
    uv: 1480,
    pv: 1780,
    amt: 2000,
  },
  {
    name: "مرداد",
    uv: 2390,
    pv: 2890,
    amt: 2181,
  },
  {
    name: "شهریور",
    uv: 2000,
    pv: 1390,
    amt: 2500,
  },
  {
    name: "مهر",
    uv: 3090,
    pv: 2500,
    amt: 2100,
  },
];

const EarningChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ left: 0, right: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="daramad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#6200ee" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#b819d2" stopOpacity={0.5} />
          </linearGradient>
          <linearGradient id="hazine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#ff8c00" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#ff8c00" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Tooltip
          // itemStyle={{ color: "#fff" }}
          // labelStyle={{ color: "purple" }}
          // labelFormatter={(label) => ""}
          formatter={(value, name, props) => {
            if(name == "uv"){
              return ["درآمد", value];
            }
            if (name == "pv") {
              return ["هزینه", value];
            }
          }}
          // separator=""
          contentStyle={{
            backgroundColor: "rgb(244, 255, 244)",
            borderRadius: "6px",
            direction: "ltr",
            padding: "5px",
          }}
        />
        <Area
          type="linear"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#daramad)"
        />
        <Area
          type="linear"
          dataKey="pv"
          stroke="#ff8c00"
          fillOpacity={1}
          fill="url(#hazine)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default EarningChart
