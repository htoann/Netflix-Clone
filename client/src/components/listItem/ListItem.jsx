import {
  AddCircleOutlineRounded,
  PlayCircleFilledRounded,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./listItem.scss";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "./../../utils/capitalizeFirstLetter";
import { getMovieApi } from "../../utils/getApi";

function ListItem({ item }) {
  const [isClicked, setIsClicked] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieApi(item, setMovie);
  }, [item]);

  return (
    <div className="listItem" onClick={() => setIsClicked(!isClicked)}>
      <img className="listItem__img" src={movie.img} alt="" />
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
              <span className="text-green-500 text-xs match">98% Match</span>
              <span className="border p-1 limit">{movie.limit}</span>
              <span className="isSeries">
                {movie.isSeries ? "Series" : "Limited"}
              </span>
            </div>
            <div className="itemInfoBottom pb-2">
              <span className="listItem__itemInfoBottom_genre">
                {capitalizeFirstLetter(movie.genre)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItem;
