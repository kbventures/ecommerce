import React from "react";
import styles from "./basket.module.css";

import Container from "../../components/Container";
import Notification from "../../components/Notification";
import ProductsList from "../../components/ProductsList";
import TotalPrice from "../../components/TotalPrice";
import Button from "../../components/Button";
import Header from "../../components/Header";

import { useBasket } from "../../contexts/BasketContext";

async function handleSubmit(e, basket) {
  e.preventDefault();
  const url = await fetch(
    "https://kdaa-ecommerce-back-end.herokuapp.com/create-checkout-session",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(basket),
    }
  ).then((i) => i.json());
  window.location.href = url;
}

// What is best practice? Send basket array as is to back end or only send id to back end
// Ask question to senior dev later...
export default function Basket() {
  const { basket, setBasket } = useBasket();
  const amount = basket.reduce(
    (acc, curr) => acc + curr.default_price.unit_amount / 100,
    0
  );
  return (
    <Container white>
      <Header title="Basket" icon="delete" />

      <main>
        <Notification title="Delivery for FREE until the end of the month" />
        <ProductsList cards={basket} />
        <div className={styles.totalPriceWrapper}>
          <TotalPrice amount={amount} />
        </div>
        <div className={styles.checkout}>
          <form onSubmit={(e) => handleSubmit(e, basket)}>
            <Button inverted type="submit">
              Checkout
            </Button>
          </form>
        </div>
      </main>
    </Container>
  );
}
