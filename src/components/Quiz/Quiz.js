import React from "react";
import { Link } from "react-router-dom";

const Quiz = (quiz) => {
  const { id, name, logo, total } = quiz.quiz;
  // console.log(quiz)
  // console.log(id)
  return <div className='bg-white rounded-lg mt-10'>
            <div className='p-2'>
            <img className='bg-orange-300 rounded-lg' src={logo} alt="" />

            <div className='flex justify-between text-lg font-bold mt-2'>
                <h3>{name}</h3>
                <h3>Questions:{total}</h3>
            </div>
                <Link to={`/quizes/${id}`}>
                    <button className='p-1 bg-violet-500 w-full mt-3 mb-1 rounded-lg text-white text-xl font-bold'>Start Practice</button>
                    </Link>
            </div>

        </div>

};

export default Quiz;