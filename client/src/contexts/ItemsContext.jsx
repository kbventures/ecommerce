import React, { useMemo, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// import { BACKEND_URL } from "../config";

// Store (in isolation)
// React.createContext(defaultState)
// useState(defaultState)
// const [counter, setCounter] = useState(0)
// on the first render, counter has a value of 0
const ItemsContext = React.createContext();

// Access to the store (for convienience not required)
export function useItems() {
  return useContext(ItemsContext);
}

// Provides the store to your application
export function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:4001/products`);
      const json = await response.json();
      setItems(json.data);
    };
    fetchItems();
  }, []);

  const value = useMemo(() => ({ items, setItems }), [items, setItems]);
  // const value = useMemo(() => ({ items, setItems }), [items,setItems]);
  // const value = useMemo(() => ({ items, setItems }), []);

  return (
    // wrap our React components with our store provider (store has "knowledge of your app")
    <ItemsContext.Provider value={value}>
      {/* eventually "children" will be our react app */}
      {children}
    </ItemsContext.Provider>
  );
}

ItemsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

// data in our store

// const items = [
//   {
//     id: "",
//     inventory: 100,
//     title: "Super Long Watch Name",
//     desc: "Series 6. Red",
//     longDesc:
//       "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
//     fullDesc: "",
//     color: [
//       ["Sky Blue", "#80BDE3"],
//       ["Rose Gold", "#B76E79"],
//       ["green", "#9FE2BF"],
//     ],
//     price: 359,
//     src: "assets/apple-watch-red.png",
//     promo: "",
//   },
//   {
//     id: "",
//     inventory: 100,
//     title: "SAMSUNG Galaxy Watch",
//     desc: "Active. Green",
//     longDesc:
//       "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
//     fullDesc: "",
//     color: [
//       ["Sky Blue", "#80BDE3"],
//       ["Rose Gold", "#B76E79"],
//       ["green", "#9FE2BF"],
//     ],
//     price: 159,
//     src: "assets/samsung-galaxy-watch.png",
//     promo: "",
//   },
//   {
//     id: "",
//     inventory: 100,
//     title: "SAMSUNG Galaxy Watch",
//     desc: "Active. Green",
//     longDesc:
//       "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
//     fullDesc: "",
//     color: [
//       ["Sky Blue", "#80BDE3"],
//       ["Rose Gold", "#B76E79"],
//       ["green", "#9FE2BF"],
//     ],
//     price: 159,
//     src: "assets/samsung-galaxy-watch.png",
//     promo: "",
//   },
//   {
//     id: "",
//     inventory: 100,
//     title: "SAMSUNG Galaxy Watch",
//     desc: "Active. Green",
//     longDesc:
//       "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
//     fullDesc: "",
//     color: [
//       ["Sky Blue", "#80BDE3"],
//       ["Rose Gold", "#B76E79"],
//       ["green", "#9FE2BF"],
//     ],
//     price: 159,
//     src: "assets/samsung-galaxy-watch.png",
//     promo: "",
//   },
//   {
//     id: "",
//     inventory: 100,
//     title: "SAMSUNG Galaxy Watch",
//     desc: "Active. Green",
//     longDesc:
//       "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
//     fullDesc: "",
//     color: [
//       ["Sky Blue", "#80BDE3"],
//       ["Rose Gold", "#B76E79"],
//       ["green", "#9FE2BF"],
//     ],
//     price: 159,
//     src: "assets/samsung-galaxy-watch.png",
//     promo: "",
//   },
// ];
