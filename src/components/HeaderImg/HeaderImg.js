import React from "react";

const HeaderImg = () => {
  return (
    <div>
      <div className="hero py-20 bg-white w-10/12 mx-auto rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-vector/flat-young-businessman-sitting-huge-red-question-mark_126523-2881.jpg?w=826&t=st=1665575028~exp=1665575628~hmac=29d753eead5a7dc0745a8c5eff331b0260b29d1f6331e8ec218f95485282578b"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
