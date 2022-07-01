import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Client Routes
import Splash from "./routes/Splash";
import Home from "./routes/Home"
import Menu from "./routes/Menu"
import Login from "./routes/Login"
import Basket from "./routes/Basket"
import Checkout from "./routes/Checkout"
import Payment from "./routes/Payment"

// Global style sheet
import "./index.css"


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
    </BrowserRouter>
,
document.querySelector('#fromjs'))