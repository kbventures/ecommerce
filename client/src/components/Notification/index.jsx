import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";
import NotificationIcon from "../../../public/assets/notification.svg";

export default function Notification({ title }) {
  return (
    <div className={styles.wrapper}>
      <NotificationIcon className={styles.icon} />
      <span className={styles.text}>{title}</span>
    </div>
  );
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
