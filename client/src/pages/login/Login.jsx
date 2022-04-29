import React, { useContext, useState } from "react";
import "./login.scss";
import { login } from "./../../authContext/apiCalls";
import { AuthContext } from "./../../authContext/AuthContext";
import { Link } from "react-router-dom";
import { emailValidation } from "../../assets/js/emailValidation";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (emailValidation(email)) {
      await login({ email, password }, dispatch);
    }
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
        <div className="mid">
          <div className="wrapper">
            <form action="">
              <h1>Sign In</h1>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="signIn" onClick={handleLogin}>
                Sign In
              </button>
              <Link to="/register">
                <button className="signUp">Sign up now</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
