import React from "react";
import './Dashboard.css'
import {
    Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
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
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];
  return (
    <div className="all-chart">
      <div>
        <LineChart
          width={400}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div>
        <AreaChart
          width={400}
          height={250}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="uv" />
          <YAxis />
          <Area dataKey="pv" stroke="#8884d8" fill="#8884d8" />
          <Area dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
        </AreaChart>
      </div>
      <div>
      <BarChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <PieChart width={400} height={250}>
            <Pie data={data} dataKey="pv" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={60}   outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
