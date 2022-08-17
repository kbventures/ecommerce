import React from "react";
import PropTypes from "prop-types";
import styles from "./container.module.css";

export default function Container({ children, white, backgroundColor }) {
  return (
    <div
      style={{ backgroundColor }}
      className={white ? styles.containerWhite : styles.containerPrimary}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  white: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Container.defaultProps = {
  white: false,
  backgroundColor: "",
};
