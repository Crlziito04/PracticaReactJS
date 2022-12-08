import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  // Use params devuelve un string
  const { id } = useParams();

  useEffect(() => {
    fetch("../data/productos.json")
      .then((res) => res.json())
      .then((data) => setData(data.find((item) => item.id === parseInt(id))));
  }, [id]);

  // const { detalleId } = useParams;
  // useEffect(() => {
  //   const data = fetch("../../.././public/data/productos.json");
  //   const getData = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(data);
  //     });
  //   });
  //   getData.then((res) =>
  //     setData(res.find((data) => data.id === parseInt(detalleId)))
  //   );
  // }, [detalleId]);

  //   const { id } = useParams();
  //   console.log(data);
  //   console.log(id);
  //   useEffect(() => {
  //     const getData = new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(listaProductos);
  //       }, 2000);
  //     });
  //     if (id) {
  //       getData.then((res) =>
  //         setData(res.find((producto) => producto.id === id))
  //       );
  //     } else {
  //       getData.then((res) => setData(res));
  //     }
  //   }, [id]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
