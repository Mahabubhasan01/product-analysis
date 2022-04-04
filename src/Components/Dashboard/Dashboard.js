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
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 104010
    },
    {
        "month": "Apr",
        "investment": 245000,
        "sell": 423,
        "revenue": 200000
    },
    {
        "month": "May",
        "investment": 670100,
        "sell": 726,
        "revenue": 600000
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 500050
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 509000
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 610000
    }
];
  return (
    <div className="all-chart">
      <div>
        <h1>MONTH WISE SELL</h1>
        <LineChart
          width={400}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </div>
      <div>
        <h1>Investment VS Revenue</h1>
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
          <XAxis dataKey="month" />
          <CartesianGrid strokeDasharray="3 3" />

          <YAxis />
          <Area dataKey="investment" stroke="#8884d8" fill="#8884d8" />
          <Area dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
        </AreaChart>
      </div>
      <div>
      <h1>Investment VS Revenue</h1>
      <BarChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
      <h1>Investment VS Revenue</h1>
        <PieChart width={400} height={250}>
            <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60}   outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
