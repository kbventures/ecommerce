import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import styles from "./product.modules.css";

const {
  availableShip,
  availableStore,
  icon,
  price,
  mainWrapper,
  imgWrapper,
  informationWrapper,
  img,
  title,
  starIcon,
  starsWrapper,
  priceNumber,
  priceSave,
  starsReview,
} = styles;

export default function Product({ name, default_price, images }) {
  return (
    <div className={mainWrapper}>
      <div className={imgWrapper}>
        <img src={images[0]} className={img} alt={name} />
      </div>

      <div className={informationWrapper}>
        <h3 className={title}>{name}</h3>
        <p className={starsWrapper}>
          <FontAwesomeIcon icon={faStar} className={starIcon} />
          <FontAwesomeIcon icon={faStar} className={starIcon} />
          <FontAwesomeIcon icon={faStar} className={starIcon} />
          <FontAwesomeIcon icon={faStar} className={starIcon} />
          <FontAwesomeIcon icon={faStarHalf} className={starIcon} />
          <span className={starsReview}>(26 Reviews)</span>
        </p>
        <p className={price}>
          <span className={priceNumber}>
            ${default_price.unit_amount / 100}
          </span>
          <span className={priceSave}> save &#36;20</span>
        </p>
        <p>
          <FontAwesomeIcon className={icon} icon={faCheck} />
          <span className={availableShip}>Available to ship</span>
        </p>
        <p>
          <FontAwesomeIcon className={icon} icon={faCheck} />
          <span className={availableStore}>Available at nearby stores</span>
        </p>
      </div>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  default_price: PropTypes.shape({
    unit_amount: PropTypes.number.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
