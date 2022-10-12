import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {
  const quizes = useLoaderData();

  return (
    <div className="bg-red-50">
      <div className=" sm:block lg:flex w-3/4 py-10 mx-auto items-center justify-center">
        <h2 className="text-5xl mr-5 font-bold">Test Youself with </h2>
        <h2 className="text-7xl text-orange-500 font-bold">Quiz Hunt</h2>
      </div>

      <div className="grid grid-cols-2 my-20 content-center  mx-20">
        <div className="text-left">
          <h1 className="text-3xl font-bold">Text Yourself</h1>
          <p>
            Test yourself and prepare for your future. There is no time to
            learn. But if you waste time you cant take it back
          </p>
        </div>

        <div>
          <img
            src="https://img.freepik.com/free-vector/flat-young-businessman-sitting-huge-red-question-mark_126523-2881.jpg?w=826&t=st=1665575028~exp=1665575628~hmac=29d753eead5a7dc0745a8c5eff331b0260b29d1f6331e8ec218f95485282578b"
            alt=""
          />
        </div>
      </div>
      <hr className="my-10" />

      <div className="lg:flex lg:gap-4 w-10/12 mx-auto pb-20">
        {quizes.data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
