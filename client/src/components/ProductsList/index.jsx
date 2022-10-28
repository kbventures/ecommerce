import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductsList.module.css";

import Product from "../Product";

// const { items } = useItems();
// const { favorite, setFavorite } = useFavorite();
// const singleProduct = items.find((item) => item.id === id);

// <ProductsList function={setFavorites}

export default function ProductsList({ context, updateContext }) {
  const handleDelete = (name) => {
    const newContext = context.filter((item) => item.name !== name);
    updateContext(newContext);
  };

  return (
    <div className={styles.wrapper}>
      {context.map(({ name, default_price, quantity, images }, i) => (
        <Product
          key={i}
          name={name}
          default_price={default_price}
          quantity={quantity}
          images={images}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

ProductsList.propTypes = {
  context: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      default_price: PropTypes.shape({
        unit_amount: PropTypes.number.isRequired,
      }),
      images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })
  ).isRequired,
  updateContext: PropTypes.func.isRequired,
};
