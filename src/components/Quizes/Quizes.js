import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizesEach from '../QuizesEach/QuizesEach';

const Quizes = () => {

    const quizLoaderData = useLoaderData();
    const quiz = quizLoaderData.data.questions;
    const quizName = quizLoaderData.data.name;


    return (
        <div className='bgc-red-200'>
            <h2 className='mt-14 text-3xl font-bold'>Quiz: {quizName}</h2>
        
        <div className='gap-5'>
        {
            quiz.map((qui, index) => 
            <QuizesEach
            key = {qui.id}
            qui={qui}
            index = {index}
            ></QuizesEach>)   
           }  
        </div>

        </div>
    );
};

export default Quizes;