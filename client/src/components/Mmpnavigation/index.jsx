import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Dropdown from "./Dropdown";

export default function Navigation() {
  const handleMenuOne = () => {
    console.log("clickedOne");
  };

  const handleMenuTwo = () => {
    console.log("clicked two");
  };

  return (
    <ul className={styles.container}>
      <Dropdown
        trigger={<button type="button">Dropdown</button>}
        menu={[
          <button type="button" onClick={handleMenuOne}>
            Menu 1
          </button>,
          <button type="button" onClick={handleMenuTwo}>
            Menu 2
          </button>,
        ]}
      />
      <Link to="/">eRenaissance</Link>
      <Link to="/profile">Profile Icon</Link>
      <Link to="/basket">Basket Icon</Link>
    </ul>
  );
}
