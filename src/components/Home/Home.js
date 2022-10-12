import React from "react";
import { useLoaderData } from "react-router-dom";
import HeaderImg from "../HeaderImg/HeaderImg";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {
  const quizes = useLoaderData();

  return (
    <div className="bg-red-50 pt-20">

     <HeaderImg></HeaderImg>
      
      <hr className="my-10 w-10/12 mx-auto" />

      <h2 className="text-4xl font-bold">Learn By Itms </h2>

      <div className="lg:flex lg:gap-4 w-10/12 mx-auto pb-20">
        {quizes.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;