import React from "react";
import PropTypes from "prop-types";
import styles from "./slider.module.css";
import SliderCard from "../SliderCard";
import ArrowIcon from "../../../public/assets/arrow-icon.svg";

export default function Slider({ cards }) {
  return (
    <div className={styles.slider}>
      <button type="button" className={styles.nextSlideButton}>
        See more <ArrowIcon />
      </button>
      <div className={styles.sliderCardsList}>
        {cards.map(({ title, desc, price, src, id }, i) => (
          <SliderCard
            key={i}
            title={title}
            desc={desc}
            price={price}
            src={src}
            id={id}
          />
        ))}
      </div>
    </div>
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
