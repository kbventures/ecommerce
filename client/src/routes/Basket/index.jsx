import React from "react";
import styles from "./basket.module.css";

import Container from "../../components/Container";
import Notification from "../../components/Notification";
import ProductsList from "../../components/ProductsList";
import TotalPrice from "../../components/TotalPrice";
import Button from "../../components/Button";
import Header from "../../components/Header";

// import { useBasket } from "../../contexts/BasketContext";

const cards = [
  {
    title: "Super Long Watch Name",
    price: 359,
    quantity: 1,
    src: "assets/apple-watch-red.png",
    link: "/home",
  },
  {
    title: "SAMSUNG Galaxy Watch",
    price: 159,
    quantity: 1,
    src: "assets/samsung-galaxy-watch.png",
    link: "/home",
  },
];

const amount = cards.reduce((acc, curr) => acc + curr.price, 0);

export default function Basket() {
  // const testBasketState = useBasket();
  // console.log(testBasketState);

  return (
    <Container white>
      <Header title="Basket" icon="delete" link="/home" />

      <main>
        <Notification title="Delivery for FREE until the end of the month" />
        <ProductsList cards={cards} />
        <div className={styles.totalPriceWrapper}>
          <TotalPrice amount={amount} />
        </div>
        <div className={styles.checkout}>
          <Button inverted>Checkout</Button>
        </div>
      </main>
    </Container>
  );
}
