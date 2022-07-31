import React from "react";
import { string, number } from "prop-types";
import styles from "./checkout.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Header from "../../components/Header";
import TotalPrice from "../../components/TotalPrice";

const {
  shippingInfoContainer,
  shippingInfoHeader,
  shippingInfoMain,
  shippingInfoItem,

  paymentInfoContainer,
  paymentInfoHeader,
  paymentInfoMain,
  paymentInfoOption,
  paymentInfoCardWrapper,
  totalPriceWrapper,
} = styles;

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

function PaymentMethod({ visaCardNumber, masterCardNumber }) {
  return (
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
              alt="visa"
            />
          </div>
          <span>{visaCardNumber}</span>
        </div>
        <div className={paymentInfoOption}>
          <input type="radio" name="payment-card" />
          <div className={paymentInfoCardWrapper}>
            <img
              alt="mastercard"
              src="../../assets/master-card.png"
              width="40px"
              height="auto"
            />
          </div>
          <span>{masterCardNumber}</span>
        </div>
      </div>
    </div>
  );
}

function ShippingInfo({ name, address, phoneNumber }) {
  return (
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
          <p>{name}</p>
        </div>
        <div className={shippingInfoItem}>
          <img
            src="../../assets/location.png"
            width="20px"
            height="auto"
            alt="shipping address"
          />
          <p>{address}</p>
        </div>
        <div className={shippingInfoItem}>
          <img
            src="../../assets/call.png"
            width="20px"
            height="auto"
            alt="telephone"
          />
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}

PaymentMethod.propTypes = {
  visaCardNumber: string.isRequired,
  masterCardNumber: string.isRequired,
};

ShippingInfo.propTypes = {
  name: string.isRequired,
  address: string.isRequired,
  phoneNumber: number.isRequired,
};
