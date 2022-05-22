import {
  AddCircleOutlineRounded,
  PlayCircleFilledRounded,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listItem.scss";
import { Link } from "react-router-dom";

function ListItem({ movie }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="listItem" onClick={() => setIsClicked(!isClicked)}>
      <img
        className="listItem__img"
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : "https://cdn.tgdd.vn/2020/04/content/1.thumb1-800x450-5.jpg"
        }
        alt=""
      />
      {isClicked && (
        <div className={isClicked ? "listItem__active" : ""}>
          <div className="itemInfo">
            <h1 className="listItem__active_title">{movie.title}</h1>
            <div className="icons">
              <Link to={{ pathname: "/watch" }} state={{ movie: movie }}>
                <PlayCircleFilledRounded className="icon" />
              </Link>
              <AddCircleOutlineRounded className="icon" />
              <ThumbUpAltOutlined className="icon like" />
              <ThumbDownOutlined className="icon dislike" />
            </div>
            <div className="itemInfoTop py-1">
              <span className="text-green-500 text-xs match">
                {movie.vote_average} Rating
              </span>
              {/* <span className="border p-1 limit">Hello</span> */}
              <span className="isSeries">{movie.release_date}</span>
            </div>
            {/* <div className="itemInfoBottom pb-2">
              <span className="listItem__itemInfoBottom_genre">Genre</span>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItem;
