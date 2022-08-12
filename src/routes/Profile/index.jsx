import React from "react";
import styles from "./profile.module.css";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Button from "./Button/Button";

export default function Profile() {
  return (
    <Container white>
      <Header link="/home" />

      <h1 className={styles.header}>My profile</h1>

      <section className={styles.profileContainer}>
        <img
          className={styles.img}
          src="../../assets/profile-picture.png"
          alt="Rosina smiling"
        />
        <span className={styles.name}>Rosina Doe</span>
        <div className={styles.address}>
          <span>Address: 43 Oxford Road</span>
          <span>M13 4GR</span>
          <span>Manchester, UK</span>
        </div>

        <div className={styles.backdrop} />
      </section>

      <section>
        <Button title="Edit Profile" />
        <Button title="Shopping address" />
        <Button title="Order History" />
        <Button title="Cards" />
        <Button title="Notifications" />
      </section>
    </Container>
  );
}
