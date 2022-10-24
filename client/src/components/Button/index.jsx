import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

export default function Button({ children, onClick, inverted, type }) {
  return (
    <button
      /* eslint-disable */
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: inverted ? "#5956e9" : "white",
        color: inverted ? "white" : "#5956e9",
      }}
      className={styles.button}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  inverted: false,
  onClick: undefined,
  type: "button",
};
