# Proyecto ecommerce CompraLibre-ReactJS

Esta app **CompraLibre** se creo con el fin de facilitar la compra y adquisicion de productos a traves de la web, donde el usuario puede ver precios, aspectos del producto que se encuentran en la base de datos, interaccion con el formulario donde el usuario envia sus datos de compra a la base de datos..

# Documentación

## Dependecias usadas

- React-router-dom (Navegación de la web)
- React-bootstrap

## Base de Datos NoSQL

- FireBase, la cual se implemento para la base de datos y storage.

## Organizacion de componentes:

#### En el index.js se implementa el Firebase, luego en App.js se importan las librerias utilizadas, la cual reac-router-dom nos perminte navegar entre los diferentes componentes creados:

- Home (Pagina principal)
- ItemListContainer (Donde muestra todos los productos)
- ItemDetailContainer (Podemos ver el producto a detalle)
- Cart (Ver los productos que estan en el carrito de compras)
- CheckOut (Tenemos el formulario de compra).

## Componentes Contenedores:

- ItemListContainer
- ItemDetailContainer

Estos componentes son los que utilizamos para traer la informacion de la base de datos (FireBase) utilizando el useEffect.

## Componentes Presentacionales:

- ItemDetail: nos encargamos de obtener las props pasadas desde **ItemDetailContainer** hacia **ItemDetail**.
- ItemList: realizamos el método de **JavaScript** (map) que nos permite iterar / recorrer, nuestros productos previamente guardados en un estado llamado **Cart** en el Contexto que sera explicado en breve.
- Item: por medio de props , pasamos de **ItemList** hacia **Item**, con el valor data con su respectiva key.

## Contexto

A traves de este Context pasamos funciones y demas informaciones hacia cualquier componente que este englobado en nuestro context, en este caso se encierran con CartProvider.

### Consumidores

- **ItemDetail**: Usa el context para usar la funcion addProduct la que permite añadir los productos al carro.
- **CheckOut**: Usa el context para obtener los productos seleccionados y poder unificarlos en el formulario de compra.
- **Cart**: Utiliza las funciones Eliminar producto, total de compra, eliminar por unidad, vaciar carrito del context.
- **CartWidget**: Usa la funcion de calcular la cantidad de productos que selecciono el usuario para mostrando en el contador del carrito en el Navbar.

## CheckOut

Al final de la compra, una vez llenado el formulario y elegir los productos deseados, al terminar la compra se envian estos datos hacia el FireStore, donde se crea una nueva Collection la cual se llama Compra, donde se puede ver los datos ingresados por el usuaario, los productos seleccionados y la suma total del precio de los productos.
