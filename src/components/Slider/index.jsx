import React from "react";
import PropTypes from "prop-types";
import styles from "./slider.module.css";
import SliderCard from "../SliderCard";
import ArrowIcon from "../../../public/assets/arrow-icon.svg";

export default function Slider({ cards }) {
  return (
    <div className={styles.slider}>
      <button type="button" className={styles.next_slide_button}>
        See more <ArrowIcon />
      </button>
      <div className={styles.slider_cards_list}>
        {cards.map(({ title, desc, price, src, link }, i) => (
          <SliderCard
            key={i}
            title={title}
            desc={desc}
            price={price}
            src={src}
            link={link}
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
      price: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
