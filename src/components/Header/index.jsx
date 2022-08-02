import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import ArrowIcon from "../../../public/assets/arrow-icon.svg";
import HeartIcon from "../../../public/assets/Heart.svg";
import DeleteIcon from "../../../public/assets/Delete.svg";

export default function Header({ title, icon, iconColor }) {
  const icons = {
    delete: <DeleteIcon className={styles[iconColor]} />,
    heart: <HeartIcon className={styles[iconColor]} />,
  };

  return (
    <header className={styles.header}>
      <ArrowIcon className={styles.arrowIcon} />
      <span>{title}</span>
      <div>{icons[icon] ?? null}</div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  iconColor: PropTypes.string,
  icon: PropTypes.oneOf(["delete", "heart", ""]),
};

Header.defaultProps = {
  title: "",
  icon: "",
  iconColor: "",
};
