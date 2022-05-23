import React from "react";
import "../static/sass/components/list.scss";
import ListItem from "./ListItem";
import { MOVIE_GENRES, TV_GENRES } from "../utils/constants";
import { genreMapTitle } from "../utils";
import { SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperInit from "./SwiperInit";

function List({ list, type }) {
  return (
    <div className="list">
      {type && type === "movie"
        ? genreMapTitle(MOVIE_GENRES, list, "Movies")
        : genreMapTitle(TV_GENRES, list, "TV Shows")}
      <span className="listTitle">{list.title}</span>
      <SwiperInit>
        {list.results
          ? list.results?.map((movie, key) => (
              <SwiperSlide key={key}>
                <ListItem key={key} movie={movie} />
              </SwiperSlide>
            ))
          : list.items?.map((movie, key) => (
              <SwiperSlide key={key}>
                <ListItem key={key} movie={movie} />
              </SwiperSlide>
            ))}
      </SwiperInit>
    </div>
  );
}

export default List;
