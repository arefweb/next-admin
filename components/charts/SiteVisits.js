/**** Earning & Expense Chart *****/
import React from "react";
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
    pv: 780,
    amt: 2000,
  },
  {
    name: "مرداد",
    uv: 2890,
    pv: 1500,
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
    uv: 1090,
    pv: 700,
    amt: 2100,
  },
];

const SiteVisits = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ left: 0, right: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="visits" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#9be7fd" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#9be7fd" stopOpacity={0.5} />
          </linearGradient>
          <linearGradient id="query" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#0795f4" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#0795f4" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Tooltip
          // itemStyle={{ color: "#fff" }}
          // labelStyle={{ color: "purple" }}
          // labelFormatter={(label) => ""}
          formatter={(value, name, props) => {
            if (name == "uv") {
              return ["جستجو", value];
            }
            if (name == "pv") {
              return ["بازدید", value];
            }
          }}
          // separator=""
          contentStyle={{
            backgroundColor: "rgb(255, 255, 254)",
            borderRadius: "6px",
            direction: "ltr",
            padding: "5px",
          }}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#9be7fd"
          fillOpacity={1}
          fill="url(#visits)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#0795f4"
          fillOpacity={1}
          fill="url(#query)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SiteVisits;
