import React from "react";
import { string } from "prop-types";
import styles from "./PaymentMethod.module.css";

const {
  paymentInfoContainer,
  paymentInfoHeader,
  paymentInfoMain,
  paymentInfoOption,
  paymentInfoCardWrapper,
} = styles;

export default function PaymentMethod({ visaCardNumber, masterCardNumber }) {
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

PaymentMethod.propTypes = {
  visaCardNumber: string.isRequired,
  masterCardNumber: string.isRequired,
};
