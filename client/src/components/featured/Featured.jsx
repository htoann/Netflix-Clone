import "./featured.scss";
import { InfoOutlined, PlayArrowRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getImg, getRandomMovie } from "../../services/getApi";
import { MOVIE_GENRES, TV_GENRES } from "../../utils/constants";
import { capitalizeFirstLetter } from "../../utils";

function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    getRandomMovie(setContent);
  }, [type]);

  const genresMapOptions = (genres) => {
    return genres.map((genre) => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ));
  };

  return (
    <div className="featured">
      {type && type !== "popular" && (
        <div className="category">
          <span>{capitalizeFirstLetter(type)}</span>
          <select name="genre" onChange={(e) => setGenre(e.target.value)}>
            {type === "movie"
              ? genresMapOptions(MOVIE_GENRES)
              : genresMapOptions(TV_GENRES)}
          </select>
        </div>
      )}
      <div className="linear"></div>
      {content ? (
        <img width="100%" src={getImg(content)} alt="" />
      ) : (
        <div className="loading">Loading...</div>
      )}

      <div className="info">
        <div className="title">{content.title || content.name}</div>
        <div className="desc">{content.overview}</div>
        <div className="buttons">
          <Link to={{ pathname: "/watch" }} state={{ movie: content }}>
            <button className="play">
              <PlayArrowRounded className="icon" />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined className="icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
      <div className="fadeBottom"></div>
    </div>
  );
}

export default Featured;
