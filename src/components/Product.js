import { Button } from "react-bootstrap";
import { useAppDispatch} from "../app/hooks";
import { addToCart, removeItemFromCart } from "../features/cartSlice"
import { increaseQuantity, decreaseQuantity } from "../features/productsSlice"
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import classes from "./Product.module.css";

const Product = (props) => {
  const {image, title, price, rating, description, category, id, quantity} = props
  const product = props
  const cartItems = props.cartItems
  const dispatch = useAppDispatch()
  const location = useLocation()

  // cartItems.map((item) => {
  //   if(item.id === id) {
  //     return item.quantity
  //   }
  // })

  const handleAddProduct = () => {

    if (product.quantity === 0) { // if quantity goes from 0 to 1 then we adds the product to the Cart
      dispatch(addToCart(product.id)) //adds a product to a Cart via cartSlice.js
    }
    dispatch(increaseQuantity({ id: product.id })); // adds 1 to a quantity of a product with given id via productsSlice.js
  }
  const handleRemoveProduct = () => {
    
    dispatch(decreaseQuantity({ id: product.id })); // reduces 1 from a quantity of a product with given id via productsSlice.js
    // dispatch(removeItemFromCart(product.id)) //removes a product to a Cart via cartSlice
  }

  return (
    <Card className={classes.productCard} style={{ width: '18rem', margin: "1rem" }}>
    <Card.Header><font color="grey">Price:</font> <b>{price}</b> €</Card.Header>
    <Card.Img variant="top" style={{ padding: "1rem" }} src={image} alt={title} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{category}</ListGroup.Item>
      <ListGroup.Item>Rating: {rating.rate} <font color="grey">({rating.count} votes)</ font></ListGroup.Item>
      <ListGroup.Item>ID: {id}</ListGroup.Item>
      {/* <ListGroup.Item>Quantity: {quantity}</ListGroup.Item> */}
    </ListGroup>
    <Card.Footer className={classes.cardFooter}>
      <small className="text-muted">Add to Cart:</small>
      <div className={classes.addRemoveBox}>
        <button className={`${classes.plusMinus} text-muted`} onClick={handleRemoveProduct}>-</button>
        <div className={`${classes.quantity} text-muted`}>{quantity}</div>
        <button className={`${classes.plusMinus} text-muted`} onClick={handleAddProduct}>+</button>
      </div>
    </Card.Footer>
    {/* <Button variant="primary" onClick={handleAddProduct}>Add to Cart</Button>
    {location.pathname === "/cart" && <Button variant="danger" onClick={handleRemoveProduct}>Remove from Cart</Button>}
    {(cartItems.length > 0 && cartItems.find(item => item.id === product.id)) && <Button variant="danger" onClick={handleRemoveProduct}>Remove from Cart</Button>} */}
    </Card>
  );
};

export default Product;