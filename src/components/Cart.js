import { Container } from "react-bootstrap";
import { useAppSelector } from "../app/hooks";
import CartProduct from "./CartProduct";

const Cart = () => {

  const cartItems = useAppSelector(state => state.cart.cart)

  return (
    <Container>
      <h1>Cart will be here</h1>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map((item) => (
        <CartProduct {...item} />
      ))}
    </Container>
  );
};

export default Cart;