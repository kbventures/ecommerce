import React from "react";
import styles from "./container.module.css";

export default function Container({ children, white, backgroundColor }) {
  return (
    <div
      style={{ backgroundColor }}
      className={white ? styles.container_white : styles.container_primary}
    >
      {children}
    </div>
  );
}
