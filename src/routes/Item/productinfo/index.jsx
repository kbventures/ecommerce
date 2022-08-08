import React from "react";
import PropTypes from "prop-types";
import styles from "./Productinfo.module.css";
import ColorChoices from "./ColorChoices/index";

export default function ProductInfo({ product }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.colorChoice}>Colors</p>
      <form action="">
        <ColorChoices color={product.color} />
      </form>

      <div>
        <h4 className={styles.desc}>{product.desc}</h4>
        <p className={styles.longDesc}>{product.longDesc}</p>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    longDesc: PropTypes.string.isRequired,
    color: PropTypes.arrayOf.isRequired,
  }).isRequired,
};
