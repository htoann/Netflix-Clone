import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.scss";
import { AuthContextProvider } from "./authContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
