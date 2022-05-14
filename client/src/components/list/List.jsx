import React from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function List({ list }) {
  return (
    <div className="list">
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
        {list.content.map((item, key) => (
          <SwiperSlide key={key}>
            <ListItem key={key} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default List;
