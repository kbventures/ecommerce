import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductsList.module.css";

import Product from "../Product";

export default function ProductsList({ cards }) {
  return (
    <div className={styles.wrapper}>
      {cards.map(({ name, default_price, quantity, images }, i) => (
        <Product
          key={i}
          name={name}
          default_price={default_price}
          quantity={quantity}
          images={images}
        />
      ))}
    </div>
  );
}

ProductsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      default_price: PropTypes.shape({
        unit_amount: PropTypes.number.isRequired,
      }),
      images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
};
