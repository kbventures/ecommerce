import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import ArrowIcon from "../../../public/assets/arrow-icon.svg";
import HeartIcon from "../../../public/assets/heart.svg";
import DeleteIcon from "../../../public/assets/delete.svg";

export default function Header({ title, icon, iconColor, link }) {
  const icons = {
    delete: <DeleteIcon className={styles[iconColor]} />,
    heart: <HeartIcon className={styles[iconColor]} />,
  };
  return (
    <header className={styles.header}>
      <Link to={link}>
        <ArrowIcon className={styles.arrowIcon} />
      </Link>
      <span>{title}</span>
      <div>{icons[icon] ?? null}</div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.oneOf(["heart", "delete", ""]),
  iconColor: PropTypes.string,
  link: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "",
  icon: "",
  iconColor: "",
};
