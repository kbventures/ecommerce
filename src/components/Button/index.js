import React from "react";
import styles from "./button.module.css";

export default function Button({ children, inverted }) {
  return (
    <button
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
