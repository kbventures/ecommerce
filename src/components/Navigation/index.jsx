import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <ul className={styles.container}>
      <Link to="/">splash</Link>
      <Link to="/home">home</Link>
      <Link to="/menu">menu</Link>
      <Link to="/login">login</Link>
      <Link to="/basket">basket</Link>
      <Link to="/checkout">checkout</Link>
      <Link to="/payment">payment</Link>
    </ul>
  );
}
