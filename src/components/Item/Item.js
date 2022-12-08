import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <Link to={`detalle/${info.id}`} className="producto">
      <img src={info.img} alt="" />
      <p>{info.nombre}</p>
    </Link>
  );
};
export default Item;
