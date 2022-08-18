import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SliderCard.module.css";

function SliderCard({ title, desc, price, src, id }) {
  return (
    <Link to={`/items/${id}`} state={{ title, desc, price, src }}>
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
  price: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SliderCard;
