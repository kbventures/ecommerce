import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faBolt,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navigation.module.css";
import Dropdown from "./Dropdown";
import Hamburger from "../../../public/assets/icons/hamburger-menu.svg";
// import Search from "../Search";

// import Logo from "./Logo";
import ProfileIcon from "../../../public/assets/profile.svg";
import BuyIcon from "../../../public/assets/buy.svg";

// const element = <FontAwesomeIcon icon={faCoffee} />;
// import MenuIcon from "../../../public/assets/menu-icon.svg";
// import SearchIcon from "../../../public/assets/search.svg";
// import Hamburger from "../../../public/assets/hamburger.png";

export default function Navigation() {
  const handleMenuOne = () => {
    // eslint-disable-next-line no-console
    console.log("clickedOne");
  };

  const handleMenuTwo = () => {
    // eslint-disable-next-line no-console
    console.log("clicked two");
  };

  return (
    <ul className={styles.container}>
      <div className={styles.flexCenter}>
        <Dropdown
          trigger={
            <button className={styles.hamburgerbutton} type="button">
              <Hamburger />
            </button>
          }
          menu={[
            <button type="button" onClick={handleMenuOne}>
              <FontAwesomeIcon icon={faTv} />
              Best Seller
            </button>,
            <button type="button" onClick={handleMenuTwo}>
              <FontAwesomeIcon icon={faBolt} />
              Top Deals
            </button>,
            <button type="button" onClick={handleMenuTwo}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Our Products
            </button>,
          ]}
        />
        <Link className={styles.logo} to="/">
          eRenaissance
        </Link>
      </div>
      <div className={styles.flexCenter}>
        <Link to="/profile">
          <ProfileIcon className={styles.icon} />
        </Link>
        <Link to="/basket">
          <BuyIcon className={styles.icon} />
        </Link>
      </div>
    </ul>
    // <Search/>
  );
}
