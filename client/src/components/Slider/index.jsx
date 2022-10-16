import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styles from "./slider.module.css";
import SliderCard from "../SliderCard";

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  600: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  980: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};
export default function Slider({ cards }) {
  return (
    <Swiper
      breakpoints={breakpoints}
      simulateTouch
      grabCursor
      modules={[Autoplay]}
      className={styles.swiper}
      slideClass={styles.swiperSlide}
      loop={cards.length !== 1}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={4000}
    >
      {cards.map(({ title, desc, price, src, id }) => (
        <SwiperSlide key={id} className={styles.swiperSlide}>
          <SliderCard
            desc={desc}
            price={price}
            src={src}
            id={id}
            title={title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
