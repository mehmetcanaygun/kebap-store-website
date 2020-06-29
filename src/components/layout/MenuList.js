import React from "react";

const MenuList = ({ items }) => {
  return (
    <div className="menu-list">
      {items.map((i) => (
        <div key={i.id} className="menu-item">
          <p className="name">
            {i.name}
            {i.ingredients !== "" && <span>{i.ingredients}</span>}
          </p>
          <p className="dots"></p>
          <p className="price">{i.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
