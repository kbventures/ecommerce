import React from "react";
import PropTypes from "prop-types";
import styles from "./Productinfo.module.css";
// import ColorChoices from "../ColorChoices";

export default function ProductInfo({ singleProduct }) {
  return (
    <div className={styles.container}>

      <h3 className={styles.title}>{singleProduct.name}</h3>
      <p className={styles.colorChoice}>Colors</p>
      {/* <form action="">
        <ColorChoices colors={singleProduct.colors} />
      </form> */}


      <div>
        <h4 className={styles.desc}>{singleProduct.description}</h4>
        <p className={styles.longDesc}>{singleProduct.metadata.longDesc}</p>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  singleProduct: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    metadata: PropTypes.shape({
      longDesc: PropTypes.string.isRequired,
    }),
    // colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  }).isRequired,
};
