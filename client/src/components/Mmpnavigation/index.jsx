import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Hamburger from "./Hamburger";

export default function Navigation() {
  return (
    <ul className={styles.container}>
      <Hamburger />
      <Link to="/">eRenaissance</Link>
      <Link to="/profile" />
      <Link to="/basket" />
    </ul>
  );
}
