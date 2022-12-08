import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetail.css";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../../.././public/data/productos.json")
      .then((res) => res.json())
      .then((data) => setData);
  });
  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
