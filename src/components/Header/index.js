import React from "react";
import styles from "./Header.module.css"

import ArrowIcon from "../../../public/assets/arrow-icon.svg";
import HomeIcon from "../../../public/assets/Home.svg";
import HeartIcon from "../../../public/assets/Heart.svg";
import ProfileIcon from "../../../public/assets/Profile.svg";
import BuyIcon from "../../../public/assets/Buy.svg";
import MenuIcon from "../../../public/assets/menu-icon.svg";
import DeleteIcon from "../../../public/assets/Delete.svg";

export default function Header({title, icon}) {
    let icons = {
      'delete': <DeleteIcon/>,
      'heart': <HeartIcon/>
    }
    return (
        <header className={styles.header}>
                <ArrowIcon className={styles.arrowIcon}/>
                <span>{title}</span>
                <div>{icons[icon]}</div>
        </header>
    )
    
}