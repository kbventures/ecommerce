import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

import HomeIcon from "../../../public/assets/home.svg";
import HeartIcon from "../../../public/assets/heart.svg";
import ProfileIcon from "../../../public/assets/profile.svg";
import BuyIcon from "../../../public/assets/buy.svg";
import MenuIcon from "../../../public/assets/menu-icon.svg";
import SearchIcon from "../../../public/assets/search.svg";

import Slider from "../../components/Slider";
import Container from "../../components/Container";
import { useItems } from "../../contexts/ItemsContext";
// import { useBasket } from "../../contexts/BasketContext";

export default function Home() {
  const { items } = useItems();
  const [searchInput, setSearchInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const input = searchInput.toLowerCase();

    const newFilteredItems = items.filter((item) => {
      const name = item.name.toLowerCase();
      return name.includes(input);
    });

    setFilteredItems(newFilteredItems);
  }, [searchInput, items]);

  return (
    <Container white>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <nav className={styles.navHeader}>
            <Link to="/menu">
              <MenuIcon />
            </Link>
            <div className={styles.search}>
              <button type="button" className={styles.searchButton}>
                <SearchIcon />
              </button>
              <input
                className={styles.searchInput}
                placeholder="Search"
                type="search"
                name="search"
                id="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.currentTarget.value)}
              />
            </div>
          </nav>
        </header>
        <main className={styles.pageMain}>
          <h2 className={styles.title}>Order online collect in store</h2>
          <div className={styles.sliderWrapper}>
            <ul className={styles.tabs}>
              <li className={styles.listItemActive}>Wearable</li>
              <li className={styles.listItem}>Laptops</li>
              <li className={styles.listItem}>Phones</li>
              <li className={styles.listItem}>Drones</li>
            </ul>
            <Slider cards={filteredItems} />
          </div>
        </main>
        <footer className={styles.pageFooter}>
          <nav>
            <ul className={styles.navList}>
              <li>
                <Link to="/home">
                  <HomeIcon
                    className={styles.footerNavItemActive}
                    title="home"
                  />
                </Link>
              </li>
              <li>
                <Link to="/favorite">
                  <HeartIcon
                    className={styles.footerNavItem}
                    title="favorite"
                  />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <ProfileIcon
                    className={styles.footerNavItem}
                    title="profile"
                  />
                </Link>
              </li>
              <li>
                <Link to="/basket">
                  <BuyIcon className={styles.footerNavItem} title="basket" />
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </Container>
  );
}
