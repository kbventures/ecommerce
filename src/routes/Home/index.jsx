import React from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.css";

import HomeIcon from "../../../public/assets/Home.svg";
import HeartIcon from "../../../public/assets/Heart.svg";
import ProfileIcon from "../../../public/assets/Profile.svg";
import BuyIcon from "../../../public/assets/Buy.svg";
import MenuIcon from "../../../public/assets/menu-icon.svg";

import Slider from "../../components/Slider";
import Container from "../../components/Container";

const cards = [
  {
    title: "Super Long Watch Name",
    desc: "Series 6. Red",
    price: 359,
    src: "assets/apple-watch-red.png",
  },
  {
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    price: 159,
    src: "assets/samsung-galaxy-watch.png",
  },
  {
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    price: 159,
    src: "assets/samsung-galaxy-watch.png",
  },
  {
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    price: 159,
    src: "assets/samsung-galaxy-watch.png",
  },
  {
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    price: 159,
    src: "assets/samsung-galaxy-watch.png",
  },
];
export default function Home() {
  return (
    <Container white>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <nav className={styles.navHeader}>
            <Link to="/menu">
              <MenuIcon />
            </Link>
            <div className={styles.search}>
              <input
                className={styles.searchInput}
                placeholder="Search"
                type="search"
                name="search"
                id="search"
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
            <Slider cards={cards} />
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
