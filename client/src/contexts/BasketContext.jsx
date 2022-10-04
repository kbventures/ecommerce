import React, { useMemo, useContext, useState } from "react";
import PropTypes from "prop-types";

const BasketContext = React.createContext();

export function useBasket() {
  return useContext(BasketContext);
}

// [{quantity: 2, id: 1}, {..}, {..}]
export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const value = useMemo(() => ({ basket, setBasket }), [basket, setBasket]);

  return (
    /* eslint-disable */ /* This only disables eslint for the line below (this is temporary) */
    <BasketContext.Provider value={value}>
      {children}
    </BasketContext.Provider>
  );
}

BasketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};