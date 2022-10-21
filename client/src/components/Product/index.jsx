import React from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.css";

export default function Product({ name, default_price, quantity, images }) {
  return (
    <div className={styles.mainWrapper}>
      <img src={images[0]} className={styles.img} alt={name} />

      <div className={styles.informationWrapper}>
        <h3 className={styles.title}>{name}</h3>
        <span className={styles.price}>${default_price.unit_amount / 100}</span>

        <div className={styles.quantityWrapper}>
          <span>Quantity</span>
          <div className={styles.quantityItems}>
            <button type="button" className={styles.counterButton}>
              -
            </button>
            <span className={styles.counterNumber}>{quantity}</span>
            <button type="button" className={styles.counterButton}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  default_price: PropTypes.shape({
    unit_amount: PropTypes.number.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
