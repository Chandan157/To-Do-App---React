import React, { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";

const Todo = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const [showBox, setShowBox] = useState(false);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = () => {
    if (Inputs.title && Inputs.body) {
      setArray([...Array, Inputs]);
      setInputs({ title: "", body: "" });
      toast.success("Your Task is Added !");
      toast.error("Your Task is not Saved ! Please Signup");
    }
  };

  const del = (id) => {
    // console.log(id);
    Array.splice(id, "1");
    setArray([...Array]);
  };
  // console.log(Array);
  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex align-items-center justify-content-center my-4 flex-column">
          <div className="d-flex flex-column todo-inputs-div w-50 p-1">
            <input
              type="text"
              placeholder="title"
              className="my-2 p-2 todo-inputs"
              onClick={show}
              name="title"
              value={Inputs.title}
              onChange={change}
            />
            <textarea
              id="textarea"
              type="text"
              placeholder="body"
              name="body"
              className="p-2 todo-inputs"
              value={Inputs.body}
              onChange={change}
            />
          </div>
          <div className="w-50 d-flex justify-content-end my-3">
            <button className="home-btn px-2 py-1" onClick={submit}>
              Add
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container">
            <div className="row bg-brimary">
              {Array &&
                Array.map((item, index) => (
                  <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                    <TodoCards
                      title={item.title}
                      body={item.body}
                      id={index}
                      delid={del}
                      setShowBox={setShowBox}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="todo-update"
        style={{ display: showBox ? "block" : "none" }}
      >
        <div className="container update">
          <Update setShowBox={setShowBox} />
        </div>
      </div>
    </>
  );
};

export default Todo;
