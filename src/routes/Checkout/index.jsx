import React from "react";
import styles from "./checkout.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Header from "../../components/Header";
import TotalPrice from "../../components/TotalPrice";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import ShippingInfo from "./ShippingInfo/ShippingInfo";

const { totalPriceWrapper } = styles;

export default function Checkout() {
  return (
    <Container backgroundColor="rgb(245, 245, 248)">
      <Header title="Checkout" />
      <ShippingInfo
        name="Rosina Doe"
        address="43 Oxford Road M13 4GR Manchester, UK"
        phoneNumber={+2349011039271}
      />
      <PaymentMethod
        visaCardNumber="**** **** **** 1234"
        masterCardNumber="**** **** **** 1234"
      />
      <div className={totalPriceWrapper}>
        <TotalPrice amount={954} />
      </div>
      <Button inverted>Confirm and Pay</Button>
    </Container>
  );
}
