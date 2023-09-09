import { Container } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import Product from "./Product";
import classes from "./Cart.module.css";

const Cart = () => {

  const cartItems = useAppSelector(state => state.cart)

  return (
    <Container>
      <h1>Cart will be here</h1>
      <div className={classes.cartBox}>   
        {cartItems.length === 0 && <p>Your cart is empty</p>}
        {cartItems.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Cart;