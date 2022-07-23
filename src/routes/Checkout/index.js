import React from "react"
import styles from "./checkout.module.css"
import Container from "../../components/Container"

const {
    header,
    header_back_button,
    header_title,
    
    shipping_info_container,
    shipping_info_header,
    shipping_info_main,
    shipping_info_item,
    
    payment_info_container,
    payment_info_header,
    payment_info_main,
    payment_info_option,
    
    payment_total,
    payment_button
} = styles

export default function Checkout() {
    return (
        <Container>
            <div className={header}>
                <div className={header_back_button}>Back button</div>
                <h1 className={header_title}>Checkout</h1>
            </div>

            <div className={shipping_info_container}>
                <div className={shipping_info_header}>
                    <h2>Shiping Information</h2>
                    <span>Change</span>
                </div>
                <div className={shipping_info_main}>
                    <div className={shipping_info_item}>
                        <div>person icon</div>
                        <p>Rosina Doe</p>
                    </div>
                    <div className={shipping_info_item}>
                        <div>Location</div>
                        <p>123 Main St.</p>
                    </div>
                    <div className={shipping_info_item}>
                        <div>Phone</div>
                        <p>123 456 789</p>
                    </div>
                </div>
            </div>

            <div className={payment_info_container}>
                <h2 className={payment_info_header}></h2>
                <div className={payment_info_main}>
                    <div className={payment_info_option}>
                        <input type="radio" />
                        <span>Visa Image</span>
                        <span>**** **** **** 1234</span>
                    </div>
                    <div className={payment_info_option}>
                        <input type="radio" />
                        <span>Visa Image</span>
                        <span>**** **** **** 1234</span>
                    </div>
                </div>
            </div>

            <div className={payment_total}>
                <span>Total</span>
                <span>$954</span>
            </div>

            <div className={payment_button}>
                <button>Confirm and Pay</button>
            </div>
        </Container>
        /*
            
            div payment_total
                span Total
                span 34.231
            
            div payment_button
                button pay now
        */
    )
}