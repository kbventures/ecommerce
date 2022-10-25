import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import ArrowIcon from "../../../public/assets/arrow-icon.svg";
import HeartIcon from "../../../public/assets/heart.svg";
import DeleteIcon from "../../../public/assets/delete.svg";

export default function Header({ title, icon, iconColor }) {
  const navigate = useNavigate();
  const icons = {
    delete: <DeleteIcon className={styles[iconColor]} />,
    heart: <HeartIcon className={styles[iconColor]} />,
  };
  return (
    <header className={styles.header}>
      <ArrowIcon className={styles.arrowIcon} onClick={() => navigate(-1)} />
      <span>{title}</span>
      <div>{icons[icon] ?? null}</div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.oneOf(["heart", "delete", ""]),
  iconColor: PropTypes.string,
};

Header.defaultProps = {
  title: "",
  icon: "",
  iconColor: "",
};
