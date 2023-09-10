import { Container } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import Product from "./Product";
import classes from "./Cart.module.css";

const Cart = () => {

  const cartIds = useAppSelector(state => state.cart)
  const productsList = useAppSelector(state => state.products).products

  console.log(productsList);

  const cartProductsList = []

  console.log("cartIdes: ", cartIds);

  for (const id of cartIds) {
    const productIndex = productsList.findIndex((product) => product.id === id)
    cartProductsList.push(productsList[productIndex])

  }

  console.log("cartProductsList: ", cartProductsList);

  return (
    <Container>
      <h1>Your Cart:</h1>
      <div className={classes.cartBox}>   
        {cartIds.length === 0 && <p>Your cart is empty</p>}
        {cartProductsList.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </Container>
  );
};

export default Cart;