import React from "react";
import "./OptionCart.css";
import Swal from "sweetalert2";

const OptionCart = ({ opti, correctAnswer }) => {
  const handelForCorrect = () => {
    if (opti === correctAnswer) {
      Swal.fire("Good job!", "Right Answer!", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Answer",
        text: "You Miss The Biriany!",
        footer: '<a href="">Keep Learning..</a>',
      });
    }
  };

  return (
    <div className="mt-5 lg:mt-0">
      <button onClick={handelForCorrect} className="active">
        <div className="flex items-center rounded-lg  border-2 w-60 h-20 p-3 border-indigo-600">
          {opti}
        </div>
      </button>
    </div>
  );
};

export default OptionCart;
