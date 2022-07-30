import React from "react";
import PropTypes from "prop-types";
import styles from "./TotalPrice.module.css";

export default function TotalPrice({ amount }) {
  return (
    <div className={styles.wrapper}>
      <span>Total</span>
      <span className={styles.price}>$ {amount}</span>
    </div>
  );
}

TotalPrice.propTypes = {
  amount: PropTypes.number.isRequired,
};
