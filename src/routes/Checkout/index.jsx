import React from "react";
import styles from "./checkout.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button";

const {
  header,
  header_title: headerTitle,

  shipping_info_container: shippingInfoContainer,
  shipping_info_header: shippingInfoHeader,
  shipping_info_main: shippingInfoMain,
  shipping_info_item: shippingInfoItem,

  payment_info_container: paymentInfoContainer,
  payment_info_header: paymentInfoHeader,
  payment_info_main: paymentInfoMain,
  payment_info_option: paymentInfoOption,
  payment_info_card_wrapper: paymentInfoCardWrapper,

  payment_total: paymentTotal,
  payment_total_amount: paymentTotalAmount,
} = styles;

export default function Checkout() {
  return (
    <Container backgroundColor="rgb(245, 245, 248)">
      <div className={header}>
        <img src="../../assets/arrow-left.png" alt="back arrow" />
        <h1 className={headerTitle}>Checkout</h1>
      </div>

      <div className={shippingInfoContainer}>
        <div className={shippingInfoHeader}>
          <h2>Shiping Information</h2>
          <span>change</span>
        </div>
        <div className={shippingInfoMain}>
          <div className={shippingInfoItem}>
            <img
              src="../../assets/profile.png"
              width="18px"
              height="auto"
              alt="profile"
            />
            <p>Rosina Doe</p>
          </div>
          <div className={shippingInfoItem}>
            <img
              src="../../assets/location.png"
              width="20px"
              height="auto"
              alt="shipping address"
            />
            <p>43 Oxford Road M13 4GR Manchester, UK</p>
          </div>
          <div className={shippingInfoItem}>
            <img
              src="../../assets/call.png"
              width="20px"
              height="auto"
              alt="telephone"
            />
            <p>+234 9011039271</p>
          </div>
        </div>
      </div>

      <div className={paymentInfoContainer}>
        <h2 className={paymentInfoHeader}>Payment Method</h2>
        <div className={paymentInfoMain}>
          <div className={paymentInfoOption}>
            <input type="radio" name="payment-card" />
            <div className={paymentInfoCardWrapper}>
              <img
                src="../../assets/visa.png"
                width="40px"
                height="auto"
                alt=""
              />
            </div>
            <span>**** **** **** 1234</span>
          </div>
          <div className={paymentInfoOption}>
            <input type="radio" name="payment-card" />
            <div className={paymentInfoCardWrapper}>
              <img
                src="../../assets/master-card.png"
                alt="mastercard"
                width="40px"
                height="auto"
              />
            </div>
            <span>**** **** **** 1234</span>
          </div>
        </div>
      </div>

      <div className={paymentTotal}>
        <span>Total</span>
        <span className={paymentTotalAmount}>$954</span>
      </div>

      <Button inverted>Confirm and Pay</Button>
    </Container>
  );
}
