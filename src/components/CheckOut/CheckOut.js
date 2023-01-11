import React from "react";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const CheckOut = () => {
  const [id, setId] = useState();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { totalPrice, clearCart, cart } = useCartContext();

  const compra = {
    form,
    items: cart.map((prod) => ({
      id: prod.id,
      nombre: prod.nombre,
      precio: prod.precio,
      cantidad: prod.cantidad,
    })),
    total: totalPrice(),
  };

  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const finishClick = (e) => {
    e.preventDefault();
    if (form.name === "" && form.email === "") {
      alert("Todos los campos son requeridos");
    } else {
      const db = getFirestore();
      const userCollection = collection(db, "compra");
      addDoc(userCollection, compra).then((res) => {
        alert("el mensaje se envio correctamente");
        setId(res.id);
        clearCart();
      });
    }
  };

  return (
    <div className="div-full">
      {typeof id !== "undefined" ? (
        <div className="message-dad">
          <p className="message">Su mensaje se ha enviado correctamente!</p>
          <Link to="/">
            <button className="button-message">Volver a Comprar</button>
          </Link>
        </div>
      ) : (
        // Envio los datos del formulario que ya estan en el estado.

        <form onSubmit={finishClick} className="form">
          <div>
            <h2 className="title-compra">Formulario de Compra</h2>
            <label htmlFor="name" className="label-1">
              Nombre:{" "}
            </label>
            <input
              name="name"
              id="name"
              value={form.name}
              // Con el change me llevo el valor del input a un estado.
              onChange={changeHandler}
              className="input-duo"
            />
          </div>
          <div>
            <label htmlFor="email" className="label-1">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={changeHandler}
              className="input-duo input-duo-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="label-1">
              Mensaje:{" "}
            </label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={changeHandler}
              className="input-duo"
            ></textarea>
          </div>
          <button className="submit-button">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default CheckOut;
