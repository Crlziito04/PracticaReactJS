import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  // const prueba = process.env.PUBLIC_URL + "/img/" + info.img;
  // console.log(prueba);
  console.log(info);
  return (
    <Link to={`/detalle/${info.id}`} className="producto">
      <img src={"/img/" + info.img} alt="" />
      <p>{info.nombre}</p>
    </Link>
  );
};
export default Item;
