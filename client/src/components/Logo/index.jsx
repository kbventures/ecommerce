import React from "react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src="../../assets/logo.svg" alt="Logo" className={styles.img} />
      <span className={styles.companyName}>eRenaissance</span>
    </div>
  );
}
