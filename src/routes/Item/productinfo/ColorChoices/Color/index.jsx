import React from "react";
import PropTypes from "prop-types";
import styles from "./color.module.css";

function Color({ color, hex, i }) {
  return (
    <li>
      <label className={styles.label} htmlFor={i}>
        {color}
        <input type="checkbox" className={styles.displaynone} name={i} />
      </label>
    </li>
  );
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
};

export default Color;
