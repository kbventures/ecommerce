import React, { useMemo, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

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
      const response = await fetch(
        `/products`,
        { method: "GET" }
      );
      console.log(response)
      const json = await response.json();
      console.log(json)
      setItems(json);
    };
    fetchItems();
  }, []);
  
//     useEffect(() => {
//     const fetchItems = async () => {
//       const response = await fetch(
//         `https://kdaa-ecommerce-back-end.herokuapp.com/products`,{
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },}
//       );
//       const json = await response.json();
//       setItems(json);
//     };
//     fetchItems();
//   }, []);
  
  

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
