import {
  AddCircleOutlineRounded,
  PlayCircleFilledRounded,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./listItem.scss";
import { axiosInstance } from "../../assets/js/axiosInstance";
import { configHeaderToken } from "../../assets/js/configHeaderToken";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "./../../assets/js/capitalizeFirstLetter";

function ListItem({ item }) {
  const [isClicked, setIsClicked] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axiosInstance.get(
          "movies/find/" + item,
          configHeaderToken
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
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
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop py-1">
              <span className="text-green-500 text-xs">98% Match</span>
              <span className="border p-1">{movie.limit}</span>
              <span>{movie.isSeries ? "Series" : "Limited"}</span>
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
