import React from "react";
import { Link } from "react-router-dom";
import styles from "./mmpproductcards.modules.css";
import MmmProduct from "../Mmpproduct/Product";
import { useItems } from "../../contexts/ItemsContext";

export default function MmpProductsList() {
  const { items } = useItems();

  return (
    <div className={styles.container}>
      {items.map(({ name, default_price, quantity, images, id }, i) => (
        <Link to={`/mmp/items/${id}`} key={i}>
          <MmmProduct
            name={name}
            default_price={default_price}
            quantity={quantity}
            images={images}
          />
        </Link>
      ))}
    </div>
  );
}
