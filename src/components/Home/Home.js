import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const quizs = useLoaderData();

  return <div className="home">{quizs.map}</div>;
};

export default Home;
