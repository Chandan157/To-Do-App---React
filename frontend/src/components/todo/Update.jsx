import React from "react";
import { FaWindowClose } from "react-icons/fa";

const Update = ({setShowBox}) => {
  return (
    <div className="p-5 bg-primary d-flex justify-content-center align-items-start flex-column">
      <div className="d-flex w-100 justify-content-between align-items-center">
        <h3>Update your Task</h3>
        <div onClick={
          ()=>{
            setShowBox(false);
          }
        }>
          <FaWindowClose />
        </div>
      </div>
      <input type="text" className="todo-inputs my-4 w-100 p-3" />
      <textarea className="todo-inputs w-100 p-3" />
      <button className="btn btn-dark my-4">UPDATE</button>
    </div>
  );
};

export default Update;
