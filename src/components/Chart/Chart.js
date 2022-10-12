import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {

  const quizes = useLoaderData();
  const quizData = quizes.data;

  return <div className="bg-red-50">

      <div className="pt-[150px] lg:w-2/4 w-[200px] lg:mx-auto pb-[100px] ">
        <LineChart width={360} height= {400} data={quizData}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
          </LineChart>
      </div>

  </div>;
};

export default Chart;
