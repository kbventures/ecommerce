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
      loop={cards.length >= 4}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={4000}
    >
      {cards.map(({ name, description, default_price, images, id }) => (
        <SwiperSlide key={id} className={styles.swiperSlide}>
          <SliderCard
            description={description}
            default_price={default_price}
            images={images}
            id={id}
            name={name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      default_price: PropTypes.shape({
        unit_amount: PropTypes.number.isRequired,
      }),
      images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
};
