import React from 'react';
import styles from './ProductsList.module.css';

import Product from '../Product';

export default function ProductsList({cards}){
    return (
        <div className={styles.wrapper}>
          {cards.map(({title, price, quantity, src}, i) => <Product key={i} title={title} price={price} quantity={quantity} src={src} />)}
        </div>
    )
}
