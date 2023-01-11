import "./cart.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeProduct, eliminarPorUnidad, totalPrice } =
    useCartContext();

  return (
    <>
      <div className="cart2">
        {cart.length === 0 ? (
          <div className="vacio">
            <h2>El carrito esta vacio</h2>
          </div>
        ) : (
          <div className="cart-map">
            {cart.map((data, indice) => (
              <div className="detail-cont" key={indice}>
                <div className="cardCarrito">
                  <div className="descriptionArticle">
                    <h3 className="name-cart">{data.nombre}</h3>
                    <img src={data.img} alt={data.img} className="img-cart" />
                    <p>Precio : ${data.precio}</p>
                    <p>Cantidad : {data.cantidad}</p>
                    <div className="content-button">
                      <button
                        className="button-eliminar"
                        disabled={data.cantidad <= 0 && removeProduct(data.id)}
                        onClick={() => eliminarPorUnidad(data.id)}
                      >
                        -
                      </button>
                      <button
                        className="button-eliminar"
                        onClick={() => removeProduct(data.id)}
                      >
                        Eliminar Todo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <p>Precio Total: {totalPrice()}</p>
            <Link to="/form">
              <button>Terminar Compra</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
