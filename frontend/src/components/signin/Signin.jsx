import React from 'react'
import "./Signin.css"

const Signin = () => {
  return (
    <div className="signin">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 column d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column w-100 p-5">
            <input
              className="p-2 my-3 input-signin"
              type="email"
              name="email"
              placeholder="Enter your Email"
            />
            <input
              className="p-2 my-3 input-signin"
              type="password"
              name="password"
              placeholder="Enter your Password"
            />
            <button className="btn-signin">SignIn</button>
          </div>
        </div>
        <div className="col-lg-4 column col-left d-flex justify-align-content-center align-items-center">
          <h1 className="text-center sign-in-heading">Sign In</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signin