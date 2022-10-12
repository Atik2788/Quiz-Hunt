import React from "react";
import { useLoaderData } from "react-router-dom";
import './Chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {

  const quizes = useLoaderData();
  const quizData = quizes.data;
  // console.log(quizData)

  return <div className="chart">

      <div>
        <LineChart width={500} height= {400} data={quizData}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
          </LineChart>
      </div>

  </div>;
};

export default Chart;
