import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";

export default function Dropdown({ trigger, menu }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className={styles.menu}>
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  menu: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};
// [1,2,3]
// [{menuItem: element, inde: string}]
// <></>
// <Button></Button>
