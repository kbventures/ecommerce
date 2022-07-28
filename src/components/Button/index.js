import React from "react";
import styles from "./button.module.css"

export default function Button({children, white}) {
    return (
        <button className={white ? styles.button_white : styles.button_primary}>
            {children}
        </button>
    )
}