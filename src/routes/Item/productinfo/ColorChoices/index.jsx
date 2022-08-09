import React from "react";
import PropTypes from "prop-types";
// import styles from "./ColorChoices.module.css";
import Color from "./Color/index";

export default function ColorChoices({ colors }) {
  return (
    <div>
      <ul>
        {colors.map(([name, color], i) => (
          <Color colorName={name} hex={color} key={i} />
        ))}
      </ul>
    </div>
  );
}

ColorChoices.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      colorName: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
      key: PropTypes.number.isRequired,
    })
  ).isRequired,
};
