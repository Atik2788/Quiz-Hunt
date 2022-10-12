import React from "react";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";

const HeaderImg = () => {
  return (
    <div>
      <div className="hero py-20 bg-white w-10/12 mx-auto rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.pinimg.com/originals/4d/95/59/4d95590502072858b77182e41a1a6259.gif"
            className="md:max-w-sm  rounded-lg shadow-2xl" alt=""
          />
          <div className="lg:text-left text-center mt-10">
            <h1 className="text-5xl font-bold">Test Yourself</h1>
            <p className="py-6">
            Test yourself and prepare for your future. There is no time to
            learn. But if you waste time you cant take it backProvident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.              
            </p>
            <Link to = '/blog'><button className="btn btn-outline btn-primary"> Learn More.. </button></Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
