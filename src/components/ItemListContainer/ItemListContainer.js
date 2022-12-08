import React, { useEffect, useState } from "react";
import Title from "../Title/Title.js";
import ButtonCount from "../ButtonCount/ButtonCount.js";
import listaProductos from "../../productos";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";

// export default function ItemListContainer(greeting) {
//   console.log(greeting);
//   const { userInfo, saludarFn } = greeting;
//   const { nombre = "Anonimo" } = userInfo;
//   //
//   return (
//     <div className="saludo">
//       <button className="btn-saludo" onClick={() => saludarFn(nombre)}>
//         Saludar
//       </button>
//     </div>
//   );
// }
// export default function ItemListContainer({ greeting }) {
//   return (
//     <div className="saludo">
//       <h1>Bienvenido a CompraOnline</h1>
//     </div>
//   );
// }

export const ItemListContainer = ({ message }) => {
  const [data, setData] = useState([]);

  const { tipo } = useParams();
  console.log(data);
  console.log(tipo);
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(listaProductos);
      }, 2000);
    });
    if (tipo) {
      getData.then((res) =>
        setData(res.filter((producto) => producto.tipo === tipo))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [tipo]);
console.log(listaProductos);
  const onAdd = (cantidad) => {
    console.log(`Compras ${cantidad}`);
  };
  return (
    <>
      <Title greenting={message} />
      <ButtonCount initial={1} stock={15} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
