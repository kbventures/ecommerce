import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SliderCard.module.css";

function SliderCard({ title, desc, price, src, link }) {
  return (
    <Link to="/item" state={{ title, desc, price, src, link }}>
      <div className={styles.sliderCard}>
        <img className={styles.sliderCardImg} src={src} alt={title} />
        <h3 className={styles.sliderCardTitle}>{title}</h3>
        <p className={styles.sliderCardDesc}>{desc}</p>
        <span className={styles.sliderCardPrice}>{price}</span>
      </div>
    </Link>
  );
}

SliderCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SliderCard;
