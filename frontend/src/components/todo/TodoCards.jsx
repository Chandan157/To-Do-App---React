import React from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const TodoCards = ({ title, body, id, delid, setShowBox }) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body}</p>
      </div>
      <div className="d-flex justify-content-around">
        <div
          className="d-flex justify-content-center align-item-center card-icon-head px-2 py-1"
          onClick={() => {
            setShowBox(true)
          }}
        >
          <FiEdit className="card-icons" />
          Update
        </div>
        <div
          className="d-flex justify-content-center align-item-center card-icon-head px-2 py-1 text-danger"
          onClick={() => {
            // console.log(id);
            delid(id);
          }}
        >
          <MdDelete className="card-icons del" />
          Delete
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TodoCards;
