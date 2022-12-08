import React, { useState, useEffect } from "react";
import "./ButtonCount.css";
export const ButtonCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="counter">
      <button disabled={count <= 1} onClick={decrementar}>
        -
      </button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={incrementar}>
        +
      </button>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ButtonCount;
