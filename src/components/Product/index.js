import React from "react";
import styles from "./Product.module.css";

export default function Product({ title, price, quantity, src }) {
  return (
    <div className={styles.mainWrapper}>
      <img src={src} className={styles.img} />

      <div className={styles.informationWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.price}>${price}</span>

        <div className={styles.quantityWrapper}>
          <span>Quantity</span>
          <div className={styles.quantityItems}>
            <button className={styles.counterButton}>-</button>
            <span className={styles.counterNumber}>{quantity}</span>
            <button className={styles.counterButton}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
