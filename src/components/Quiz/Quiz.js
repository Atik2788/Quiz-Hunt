import React from "react";
import { Link } from "react-router-dom";

const Quiz = (quiz) => {
  const { id, name, logo, total } = quiz.quiz;

  return <div className='rounded-lg mt-10 bg-white'>
            <div className='p-2'>
            <img className='bg-blue-100 rounded-lg' src={logo} alt="" />

            <div className='flex justify-between text-lg font-bold mt-3'>
                <h3>{name}</h3>
                <h3>Questions:{total}</h3>
            </div>
                <Link to={`/quizes/${id}`}>
                    <button className='p-1 bg-violet-500 w-full mt-5 mb-1 rounded-lg text-white text-xl font-bold'>Start Practice</button>
                    </Link>
            </div>

        </div>

};

export default Quiz;
