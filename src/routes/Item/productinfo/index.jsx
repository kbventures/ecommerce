import React from "react";
import PropTypes from "prop-types";
import styles from "./Productinfo.module.css";

export default function ProductInfo({ product }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.colorChoice}>Colors</p>
      <form action="">
        <ul className={styles.list}>
          <li>
            <label className={styles.label} htmlFor="color1">
              Sky Blue
              <input
                type="checkbox"
                className={styles.displaynone}
                name="color1"
              />
            </label>
          </li>
          <li>
            <label className={styles.label} htmlFor="color2">
              Rose Gold
              <input
                type="checkbox"
                className={styles.displaynone}
                name="color2"
              />
            </label>
          </li>
          <li>
            <label className={styles.label} htmlFor="color3">
              Green
              <input
                type="checkbox"
                className={styles.displaynone}
                name="color3"
              />
            </label>
          </li>
        </ul>
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
  }).isRequired,
};
