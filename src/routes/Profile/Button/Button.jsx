import React from "react";
import { string } from "prop-types";
import styles from "./Button.module.css";

import RightArrowHead from "../../../../public/assets/chevron-left.svg";

export default function Button({ title }) {
  return (
    <section className={styles.button}>
      {title}
      <RightArrowHead className={styles.svg} />
    </section>
  );
}

Button.propTypes = {
  title: string.isRequired,
};
