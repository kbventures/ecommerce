import React from 'react';
import styles from './Product.module.css';


export default function Product({title, price, quantity, src}){
    return (
        <div className={styles.mainWrapper}>
            <img src={src} className={styles.img}/>
            
            <div className={styles.informationWrapper}>

                <h3 className={styles.title}>{title}</h3>
                <span className={styles.price}>${price}</span>

                <div className={styles.quantityWrapper}>
                    <span>Quantity</span>
                    <div className={styles.quantityItems}>
                        <button>-</button>
                        <div><span value={quantity}>1</span></div> 
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
 