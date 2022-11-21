import React from "react";
import "./ItemListContainer.css";
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

export default function ItemListContainer(greeting) {
  const { message, name } = greeting;
  return (
    <div className="saludo">
      <p>Hola {name}</p>
      <p>{message}</p>
    </div>
  );
}
