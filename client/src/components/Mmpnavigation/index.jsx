import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import Dropdown from "./Dropdown";

// import Logo from "./Logo";
import ProfileIcon from "../../../public/assets/profile.svg";
import BuyIcon from "../../../public/assets/buy.svg";
// import MenuIcon from "../../../public/assets/menu-icon.svg";
// import SearchIcon from "../../../public/assets/search.svg";
// import Hamburger from "../../../public/assets/hamburger.png";

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
        trigger={
          <button type="button">
            <img src="/assets/hamburger.png" alt="" />
          </button>
        }
        menu={[
          <button type="button" onClick={handleMenuOne}>
            Menu 1
          </button>,
          <button type="button" onClick={handleMenuTwo}>
            Menu 2
          </button>,
        ]}
      />
      <Link className={styles.companyName} to="/">
        eRenaissance
      </Link>
      <Link to="/profile">
        <ProfileIcon />
      </Link>
      <Link to="/basket">
        <BuyIcon />
      </Link>
    </ul>
  );
}
