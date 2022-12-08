import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  //   const user = {
  //     nombre: "CarlosMolina",
  //   };
  //   const saludarFn = (name) => {
  //     alert(`Hola ${name}`);
  //   };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer message="Bienvenido a CompraOnline" />}
          />
          <Route
            path="/categoria/:Tipo"
            element={<ItemListContainer message="Bienvenido a CompraOnline" />}
          />
          <Route path="/detalle" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
