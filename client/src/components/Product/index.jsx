import React from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.css";

export default function Product({ title, price, quantity, src }) {
  return (
    <div className={styles.mainWrapper}>
      <img src={src} className={styles.img} alt={title} />

      <div className={styles.informationWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.price}>${price}</span>

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
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};
