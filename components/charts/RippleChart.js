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
    name: "Page A",
    uv: 900,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 1200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 800,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1700,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2400,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 2000,
    pv: 4300,
    amt: 2100,
  },
];

const RippleChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ left: 0, right: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorRipple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="60%" stopColor="#f39711" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#f39711" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Tooltip
          itemStyle={{ color: "#fff" }}
          labelFormatter={(label) => ""}
          formatter={(value, name, props) => ["$", value]}
          separator=""
          contentStyle={{
            backgroundColor: "#e8951dde",
            borderRadius: "6px",
            border: "none",
            padding: "5px",
          }}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#f39710"
          fillOpacity={1}
          fill="url(#colorRipple)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RippleChart;
