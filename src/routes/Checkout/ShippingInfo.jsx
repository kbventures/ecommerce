import React from "react";
import { string, number } from "prop-types";
import styles from "./ShippingInfo.module.css";

const {
  shippingInfoContainer,
  shippingInfoHeader,
  shippingInfoMain,
  shippingInfoItem,
} = styles;

export default function ShippingInfo({ name, address, phoneNumber }) {
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

ShippingInfo.propTypes = {
  name: string.isRequired,
  address: string.isRequired,
  phoneNumber: number.isRequired,
};
