import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

function Auth() {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>SB Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <h1>Form</h1> */}
      {/* <SignUp /> */}
      {true ? <Login /> : <SignUp />}
    </div>
  );
}
function Login() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="userName"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account? Sign Up!
          </span>
          <button className="button infoButton" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="firstName"
            className="infoInput"
          />
          <input
            type="text"
            name="lastname"
            placeholder="lastName"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="userName"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="password"
            name="password"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="confirm password"
            name="cnfpassword"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account? Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
