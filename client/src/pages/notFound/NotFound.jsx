import React from "react";
import "../notFound/notFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <div className="wrapper">
        <Link to="/">
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="mid">
        <h1>Lost your way?</h1>
        <h2>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </h2>
        <Link to="/">
          <button>Netflix Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
