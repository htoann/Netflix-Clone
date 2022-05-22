import React from "react";
import ListItem from "../listItem/ListItem";
import { MOVIE_GENRES, TV_GENRES } from "../../utils/constants";
import "./list.scss";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const genreMapTitle = (genres, list, type) => {
  return genres.map((genre, key) => (
    <span key={key} className="listTitle">
      {genre.id === +list.id && `${genre.name} ${type}`}
    </span>
  ));
};

function List({ list, type }) {
  return (
    <div className="list">
      {type && type === "movie"
        ? genreMapTitle(MOVIE_GENRES, list, "Movies")
        : genreMapTitle(TV_GENRES, list, "TV Series")}

      <span className="listTitle">{list.title}</span>
      <Swiper
        className="movieShowcase__container"
        navigation={true}
        grabCursor={false}
        draggable={false}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={8}
        preventClicksPropagation={true}
        preventClicks={true}
        scrollbar={{ draggable: false, hide: true }}
        slideToClickedSlide={false}
        pagination={{ clickable: true }}
      >
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
      </Swiper>
    </div>
  );
}

export default List;
