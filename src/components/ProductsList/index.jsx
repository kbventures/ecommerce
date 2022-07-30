import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductsList.module.css";

import Product from "../Product";

export default function ProductsList({ cards }) {
  return (
    <div className={styles.wrapper}>
      {cards.map(({ title, price, quantity, src }, i) => (
        <Product
          key={i}
          title={title}
          price={price}
          quantity={quantity}
          src={src}
        />
      ))}
    </div>
  );
}

ProductsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
