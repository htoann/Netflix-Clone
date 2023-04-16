import { PersonOutline, VpnKey } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login({ email, password }, dispatch);
  };

  return (
    <div className="align">
      <div className="grid">
        <h1>Admin Login</h1>
        <form action="/" method="POST" className="form login">
          <div className="form__field">
            <label htmlFor="login__username">
              <PersonOutline />
              <span className="hidden">Username</span>
            </label>
            <input
              autoComplete="username"
              id="login__username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form__field">
            <label htmlFor="login__password">
              <VpnKey />
              <span className="hidden">Password</span>
            </label>
            <input
              id="login__password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form__field">
            <input
              type="submit"
              value="Sign In"
              onClick={handleLogin}
              disabled={isFetching}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
