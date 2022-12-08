import React from "react";
import "./ItemDetail.css";
export const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="detail">
        <img src={data.img} alt="" className="detail__img" />
        <div className="content">
          <h1>{data.nombre}</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;