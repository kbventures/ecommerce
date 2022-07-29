import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

import ArrowIcon from "../../../public/assets/arrow-icon.svg";
import HeartIcon from "../../../public/assets/Heart.svg";
import DeleteIcon from "../../../public/assets/Delete.svg";

const icons = {
  delete: <DeleteIcon className={styles.icon} />,
  heart: <HeartIcon className={styles.icon} />,
};

export default function Header({ title, icon }) {
  return (
    <header className={styles.header}>
      <ArrowIcon className={styles.arrowIcon} />
      <span>{title}</span>
      <div>{icons[icon]}</div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(icons)),
};

Header.defaultProps = {
  title: "",
  icon: "",
};
