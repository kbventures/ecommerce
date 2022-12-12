import React from "react";

export default function Hamburger() {
  const handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };
  return (
    <div className="App">
      <div className="container">
        <button type="button" className="button" onClick={handleButtonClick()}>
          ☰
        </button>
        <div className="dropdown">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
