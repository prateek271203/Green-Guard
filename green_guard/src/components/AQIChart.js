import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const AQIChart = ({ data }) => {
  const chartData = data
    .filter((item) => item.type === "Air Quality")
    .map((item) => ({ city: item.city, AQI: item.aqi }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="city" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="AQI" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AQIChart;
