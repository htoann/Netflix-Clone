import React, { useContext, useRef, useState } from "react";
import "./register.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { login } from "./../../authContext/apiCalls";
import { AuthContext } from "./../../authContext/AuthContext";
import { emailValidation } from "./../../assets/js/emailValidation";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { dispatch } = useContext(AuthContext);

  const emailRef = useRef();

  const handleStart = (e) => {
    if (emailValidation(emailRef)) {
      setEmail(emailRef.current.value);
    }
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      await axios.post("auth/register", {
        email,
        username,
        password,
      });

      login({ email, password }, dispatch);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
        <div className="mid">
          <h1 className="text-7xl font-semibold">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-2xl font-normal">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-lg font-normal">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="Email address" ref={emailRef} />
              <button onClick={handleStart}>Get Started</button>
            </div>
          ) : (
            <form className="input">
              <input
                type="username"
                placeholder="Username"
                // ref={usernameRef}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                // ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleFinish}>Start</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
