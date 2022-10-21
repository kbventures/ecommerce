import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SliderCard.module.css";

function SliderCard({ name, description, default_price, images, id }) {
  return (
    <Link to={`/items/${id}`} className={styles.sliderCardLink}>
      <div className={styles.sliderCard}>
        <img className={styles.sliderCardImg} src={images[0]} alt={name} />
        <h3 className={styles.sliderCardTitle}>{name}</h3>
        <p className={styles.sliderCardDesc}>{description}</p>
        <span className={styles.sliderCardPrice}>
          ${default_price.unit_amount / 100}
        </span>
      </div>
    </Link>
  );
}

SliderCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  default_price: PropTypes.shape({
    unit_amount: PropTypes.number.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  id: PropTypes.string.isRequired,
};

export default SliderCard;
