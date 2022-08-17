import React from "react";
import styles from "./Container.module.css";

// styles.red

export function Container({ children }) {
  // props.children

  return <div className={styles.red}>{children}</div>;
}

/*
    <Container>
        <Header>
        <Landing Page>
        <Footer>
    </Container>

*/
