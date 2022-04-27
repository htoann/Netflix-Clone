import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";

function Watch() {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div className="watch">
      <div className="back">
        <Link to="/">
          <ArrowBackOutlined className="m-2" />
          Home
        </Link>
      </div>
      <video
        className="video"
        loop
        autoPlay
        progress="true"
        controls
        muted
        src={movie.video}
      ></video>
    </div>
  );
}

export default Watch;
