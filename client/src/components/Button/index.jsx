import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

export default function Button({ children, onClick, inverted }) {
  if (onClick) {
    onClick();
  }
  return (
    <button
      type="button"
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
};

Button.defaultProps = {
  inverted: false,
};
