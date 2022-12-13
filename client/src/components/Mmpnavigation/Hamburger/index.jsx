import React, { useState } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  //   return (
  //     <div>
  //       <button type="button" onClick={handleOpen}>
  //         Dropdown
  //       </button>
  //       {open ? (
  //         <ul className="menu">
  //           <li className="menu-item">
  //             <button onClick={handleMenuOne} type="button">
  //               Menu 1
  //             </button>
  //           </li>
  //           <li className="menu-item">
  //             <button onClick={handleMenuTwo} type="button">
  //               Menu 2
  //             </button>
  //           </li>
  //         </ul>
  //       ) : null}
  //       {open ? <div>Is Open</div> : <div>Is Closed</div>}
  //     </div>
  //   );
  // }

  return (
    <Dropdown
      open={open}
      trigger={<button onClick={handleOpen}>Dropdown</button>}
      menu={[
        <button onClick={handleMenuOne}>Menu 1</button>,
        <button onClick={handleMenuTwo}>Menu 2</button>,
      ]}
    />
  );
}

function Dropdown({ open, trigger, menu }) {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {menuItem}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
