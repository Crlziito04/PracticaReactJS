import React from "react";
import "./item.css";
const Item = ({ info }) => {
  return (
    <a href="#" className="producto">
      <img src={info.img} alt="" />
      <p>{info.nombre}</p>
    </a>
  );
};
export default Item;
