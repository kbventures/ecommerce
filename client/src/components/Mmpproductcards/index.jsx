import React from "react";
import styles from "./mmpproductcards.modules.css";
import MmmProduct from "../Mmpproduct/Product";
import { useItems } from "../../contexts/ItemsContext";

export default function MmpProductsList() {
  const { items } = useItems();
  return (
    <div className={styles.container}>
      {items.map(({ name, default_price, quantity, images }, i) => (
        <MmmProduct
          key={i}
          name={name}
          default_price={default_price}
          quantity={quantity}
          images={images}
        />
      ))}
    </div>
  );
}
