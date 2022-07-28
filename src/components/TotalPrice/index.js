import React from 'react';
import styles from './TotalPrice.module.css';


export default function TotalPrice({amount}){
    return (
        <div className={styles.wrapper}>
            <span>Total</span>
            <span className={styles.price}>$ {amount}</span>
        </div>
    )
}
 