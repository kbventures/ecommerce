import React from "react";
import styles from "./SliderCard.module.css";

const SliderCard = ({ title, desc, price, src }) => {
  return (
    <div className={styles.slider_card}>
      <img className={styles.slider_card_img} src={src} alt={title} />
      <h3 className={styles.slider_card_title}>{title}</h3>
      <p className={styles.slider_card_desc}>{desc}</p>
      <span className={styles.slider_card_price}>$ {price}</span>
    </div>
  );
};

export default SliderCard;
