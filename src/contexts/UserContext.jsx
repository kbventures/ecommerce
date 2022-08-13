import React, { useContext } from "react";
import PropTypes from "prop-types";

const user = [
  {
    firstName: "Rosina",
    lastName: "Doe",
    userId: "XYZ123456",
    phone: "+234 9011039271",
    email: "rosiedoe@gmail.com",
    address: {
      streetNumber: "43",
      street: "Oxford Road",
      postalCode: "M13 4GR",
      city: "Manchester",
      country: "UK",
    },
  },
];

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
