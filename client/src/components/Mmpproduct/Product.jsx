import React from "react";
import PropTypes from "prop-types";
import styles from "./product.modules.css";

export default function Product({ name, default_price, images }) {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.imgWrapper}>
        <img src={images[0]} className={styles.img} alt={name} />
      </div>

      <div className={styles.informationWrapper}>
        <h3 className={styles.title}>{name}</h3>
        <p>(26 Reviews)</p>
        <p className={styles.price}>${default_price.unit_amount / 100}</p>
        {/* Check mark logo */}
        <p>Available to ship</p>
        <p>Availabble at nearby stores</p>
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
