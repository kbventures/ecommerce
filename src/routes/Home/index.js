import React from "react";
import Navigation from "../../components/Navigation";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import SliderCard from "../../components/SliderCard";

import HomeIcon from "../../../public/assets/Home.svg";
import HeartIcon from "../../../public/assets/Heart.svg";
import ProfileIcon from "../../../public/assets/Profile.svg";
import BuyIcon from "../../../public/assets/Buy.svg";
import MenuIcon from "../../../public/assets/menu-icon.svg";
import Slider from "../../components/Slider";

export default function Home() {
  let cards = [ {
    title: "Super Long Watch Name",
    desc: "Series 6. Red",
    price: "$ 359",
    src: "assets/apple-watch-red.png"
  }, {
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    price: "$ 159",
    src: "assets/samsung-galaxy-watch.png"
  }, {
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    price: "$ 159",
    src: "assets/samsung-galaxy-watch.png"
  }, {
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    price: "$ 159",
    src: "assets/samsung-galaxy-watch.png"
  }, {
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    price: "$ 159",
    src: "assets/samsung-galaxy-watch.png"
  }, ]

  return (
    <Container white={true}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <nav className={styles.nav_header}>
            <Link to="/menu">
              <MenuIcon />
            </Link>
            <div className={styles.search}>
              <input
                className={styles.search_input}
                placeholder="Search"
                type="search"
                name="search"
                id="search"
              />
            </div>
          </nav>
        </header>
        <main className={styles.page_main}>
          <h2 className={styles.title}>Order online collect in store</h2>
          <div className={styles.slider_wrapper}>
            <ul className={styles.tabs}>
              <li className={styles.list_item_active}>Wearable</li>
              <li className={styles.list_item}>Laptops</li>
              <li className={styles.list_item}>Phones</li>
              <li className={styles.list_item}>Drones</li>
            </ul>
            <Slider cards={cards} />
          </div>
        </main>
        <footer className={styles.page_footer}>
          <nav>
            <ul className={styles.nav_list}>
              <li>
                <Link to="/home">
                  <HomeIcon
                    className={styles.footer_nav_item_active}
                    title="home"
                  />
                </Link>
              </li>
              <li>
                <Link to="/favorite">
                  <HeartIcon
                    className={styles.footer_nav_item}
                    title="favorite"
                  />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <ProfileIcon
                    className={styles.footer_nav_item}
                    title="profile"
                  />
                </Link>
              </li>
              <li>
                <Link to="/orders">
                  <BuyIcon className={styles.footer_nav_item} title="orders" />
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </Container>
  );
}
