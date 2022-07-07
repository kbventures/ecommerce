import React from "react";
import styles from "./container.module.css"

export default function Container({ children, white }) {
  return (
    <div className={white ? styles.container_white : styles.container_primary}>
      {children}
    </div>
    )
}