import React from "react";
import "./Signup.css";
import { useState } from "react";

const Signup = () => {
  const [Inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(Inputs);
    setInputs({
      email: "",
      username: "",
      password: "",
    });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter your Email"
                onChange={change}
                value={Inputs.email}
              />
              <input
                className="p-2 my-3 input-signup"
                type="username"
                name="username"
                placeholder="Enter your Username"
                onChange={change}
                value={Inputs.username}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter your Password"
                onChange={change}
                value={Inputs.password}
              />
              <button className="btn-signup" onClick={submit}>
                SignUp
              </button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-flex justify-align-content-center align-items-center">
            <h1 className="text-center sign-up-heading">Sign Up</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
