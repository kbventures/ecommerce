import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemsProvider } from "./contexts/ItemsContext";

// Client Routes
import Splash from "./routes/Splash";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Login from "./routes/Login";
import Item from "./routes/Item";
import Basket from "./routes/Basket";
import Checkout from "./routes/Checkout";
import Payment from "./routes/Payment";
import Profile from "./routes/Profile";

// Global style sheet
import "./index.css";
import "./mediaquery.css";
import "./reset.css";

ReactDOM.render(
  <ItemsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item" element={<Item />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </ItemsProvider>,
  document.querySelector("#fromjs")
);
