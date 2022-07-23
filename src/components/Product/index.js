import React from 'react';
import styles from './Product.module.css';


export default function Product({title, price, quantity, src}){
    return (
        <div>
            <img href={src} />
            <h3>{title}</h3>
            <span>${price}</span>
            <label>Quantity</label>
            <input type="number" value={quantity}></input>
        </div>
    )
}
 