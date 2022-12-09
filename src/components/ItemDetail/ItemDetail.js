import React from "react";
import "./ItemDetail.css";
export const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="detail">
        <img src={"/img/" + data.img} alt="" className="detail__img" />
        <div className="content">
          <h1>{data.nombre}</h1>
          <h3>{data.precio}</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
