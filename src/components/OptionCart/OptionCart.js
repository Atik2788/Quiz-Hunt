import React from "react";
import { NavLink } from "react-router-dom";
import './OptionCart.css'

const OptionCart = ({ opti, correctAnswer }) => {
  return <div>
    
    <button className='active'>
    <div className='flex items-center rounded-lg  border-2 w-80 h-20 p-3 border-indigo-600'>
            <p>{opti}</p>
        </div>
    </button>



  </div>;
};

export default OptionCart;
