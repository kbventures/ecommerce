import React from "react";
import PropTypes from "prop-types";
// import styles from "./ColorChoices.module.css";
import Color from "../Color";

export default function ColorChoices({ colors }) {
  return (
    <div>
      <ul>
        {colors.map(([name, color], i) => (
          <Color name={name} color={color} key={i} id={i} />
        ))}
      </ul>
    </div>
  );
}

ColorChoices.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
