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
    name: "Page A",
    uv: 1400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 1200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 1780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 2890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BitcoinChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ left: 0, right: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="50%" stopColor="#6200ee" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#b819d2" stopOpacity={0.9} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Tooltip
          itemStyle={{ color: "#fff" }}
          labelStyle={{ color: "purple" }}
          labelFormatter={(label) => ""}
          formatter={(value, name, props) => ["$", value]}
          separator=""
          contentStyle={{
            backgroundColor: "rgba(125, 28, 236, 0.86)",
            borderRadius: "6px",
            border: "none",
            padding: "5px",
          }}
        />
        <Area
          type="linear"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default BitcoinChart
