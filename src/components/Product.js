import { Button } from "react-bootstrap";
import { useAppDispatch} from "../app/hooks";
import { addToCart, removeFromCart } from "../features/cartSlice"
import { increaseQuantity, decreaseQuantity, QuantityToZero } from "../features/productsSlice"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import classes from "./Product.module.css";

const Product = (props) => {
  const {image, title, price, rating, description, category, id, quantity} = props
  const product = props
  const dispatch = useAppDispatch()

  const handleIncreaseQuantity = () => {

    if (product.quantity === 0) { // if quantity goes from 0 to 1 then we adds the product to the Cart
      dispatch(addToCart(product.id)) //adds a product to a Cart via cartSlice.js
    }
    dispatch(increaseQuantity({ id: product.id })); // adds 1 to a quantity of a product with given id via productsSlice.js
  }

  const handleDecreaseQuantity = () => {
    
    if (product.quantity === 1) { // if quantity goes from 1 to 0 then we removes the product from the Cart
      dispatch(removeFromCart(product.id)) //removes a product from a Cart via cartSlice
    }
    dispatch(decreaseQuantity({ id: product.id })); // reduces 1 from a quantity of a product with given id via productsSlice.js
  }

  const handleDeleteFromCart = () => {
    dispatch(QuantityToZero({ id: product.id }))
    dispatch(removeFromCart(product.id)) //removes a product from a Cart via cartSlice
  }

  return (
    <Card className={classes.productCard} style={{ width: '22rem', margin: "1rem" }}>
    <Card.Header className={classes.cardHeader}>
      <div className={classes.price}>
        <font color="grey">Price:</font> <b>{price}</b> €
      </div>
      <div className={classes.id}>
        ID: {id}
      </div>
    </Card.Header>
    <div className={classes.imageBox}>
      <Card.Img className={classes.productCardImage} variant="top" src={image} alt={title} />
    </div>
    <div className={`${classes.category} text-muted`}>
      {category}
    </div>
    <Card.Body className={classes.cardBody}>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Rating: {rating.rate} <font color="grey">({rating.count} votes)</ font></ListGroup.Item>
    </ListGroup>
    <Card.Footer className={classes.cardFooter}>
      <div className={classes.delButtonWrapper}>
        {product.quantity > 0 && <Button variant="danger" className={classes.delButton} onClick={handleDeleteFromCart}><b>Delete</b></Button>}
      </div>
      <small className="text-muted">Add to Cart:</small>
      <div className={classes.addRemoveBox}>
        <button className={`${classes.plusMinus} text-muted`} onClick={handleDecreaseQuantity}>-</button>
        <div className={`${classes.quantity} text-muted`}>{quantity}</div>
        <button className={`${classes.plusMinus} text-muted`} onClick={handleIncreaseQuantity}>+</button>
      </div>
    </Card.Footer>
    {/* <Button variant="primary" onClick={handleIncreaseQuantity}>Add to Cart</Button>
    {location.pathname === "/cart" && <Button variant="danger" onClick={handleDecreaseQuantity}>Remove from Cart</Button>}
    {(cartItems.length > 0 && cartItems.find(item => item.id === product.id)) && <Button variant="danger" onClick={handleDecreaseQuantity}>Remove from Cart</Button>} */}
    </Card>
  );
};

export default Product;