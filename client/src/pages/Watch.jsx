import React from "react";
import "../static/sass/pages/watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Watch() {
  // const location = useLocation();
  // const movie = location.state.movie;

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
        src="https://firebasestorage.googleapis.com/v0/b/netflix-16c38.appspot.com/o/items%2F1649760689070video?alt=media"
      ></video>
    </div>
  );
}

export default Watch;
