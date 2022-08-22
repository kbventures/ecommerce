import React from "react";
import PropTypes from "prop-types";
import styles from "./color.module.css";

function Color({ color, name, id }) {
  // console.log(color, nam i);
  // console.log("color", color);
  return (
    <li>
      <label className={styles.label} htmlFor={id}>
        {color}
        {name}
        <input
          type="radio"
          name="color"
          className={styles.displaynone}
          id={id}
        />
      </label>
    </li>
  );
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Color;
