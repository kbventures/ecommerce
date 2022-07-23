import React from 'react';
import styles from './TotalPrice.module.css';


export default function TotalPrice({amount}){
    return (
        <div>
            <span>Total</span>
            <span>${amount}</span>
        </div>
    )
}
 