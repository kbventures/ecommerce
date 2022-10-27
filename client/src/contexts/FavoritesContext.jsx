import React, { useMemo, useContext, useState } from "react";
import PropTypes from "prop-types";

const FavoriteContext = React.createContext();

export function useFavorite() {
  return useContext(FavoriteContext);
}

export function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  const value = useMemo(
    () => ({ favorite, setFavorite }),
    [favorite, setFavorite]
  );

  return (
    /* eslint-disable */ /* This only disables eslint for the line below (this is temporary) */
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    );
}

FavoriteProvider.propTypes = {
    children: PropTypes.node.isRequired,
};