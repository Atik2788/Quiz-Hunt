import React from "react";

const Modal = ({ correctAnswer }) => {
  const correct = correctAnswer;
  // console.log(correctAnswer);
  return (
    <div>
      <div className="mt-5">
        <span className="mr-5">See Corect Ans:</span>

        <div class="dropdown">
          <label tabindex="0" class="btn m-0 ">
            Click
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <p>{correctAnswer}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
