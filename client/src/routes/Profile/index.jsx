import React from "react";
import styles from "./profile.module.css";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Button from "./Button/Button";

import Pin from "../../../public/assets/location.svg";

const {
  fixedWidth,
  profileContainer,
  img,
  name,
  address,
  pin,
  backdrop,
  buttonContainer,
} = styles;

export default function Profile() {
  return (
    <Container white>
      <Header title="Profile" />
      <div className={fixedWidth}>
        <section className={profileContainer}>
          <img
            className={img}
            src="../../assets/profile-picture.png"
            alt="Rosina smiling"
          />
          <span className={name}>Rosina Doe</span>
          <div className={address}>
            <span>Address: 43 Oxford Road</span>
            <span>M13 4GR</span>
            <span>Manchester, UK</span>
            <Pin className={pin} />
          </div>

          <div className={backdrop} />
        </section>

        <section className={buttonContainer}>
          <Button title="Edit Profile" />
          <Button title="Shopping address" />
          <Button title="Order History" />
          <Button title="Cards" />
          <Button title="Notifications" />
        </section>
      </div>
    </Container>
  );
}
