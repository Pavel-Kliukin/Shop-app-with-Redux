import { Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { addToCart, removeItemFromCart } from "../features/cartSlice"
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

  const handleAddProduct = () => {
    console.log("Products: ", product);
    dispatch(addToCart(product)) //adds a product to a Cart via cartSlice
  }
  const handleRemoveProduct = () => {
    console.log("Products: ", product);
    dispatch(removeItemFromCart(product)) //adds a product to a Cart via cartSlice
  }

  return (
    // <section className="Detail">
    //   <article className="Detail_thumbnail">
    //     <img src={image} alt={title} />
    //   </article>

    //   <article className="Detail_Info">
    //     <div className="Detail_info-header">
    //       <h2>{title}</h2>
    //     </div>
    //     <div className="Detail_info">
    //       <span className="Detail_info-price">{price}</span>
    //       <span className="Detail_info-rating">Rating: {rating.rate}</span>
    //     </div>
    //     <p className="Detail_info-description">{description}</p>
    //     <Button variant="primary" onClick={handleAddProduct}>Add to Cart</Button>
    //     {location.pathname === "/cart" && <Button variant="danger" onClick={handleRemoveProduct}>Remove from Cart</Button>}
    //     {(cartItems.length > 0 && cartItems.find(item => item.id === product.id)) && <Button variant="danger" onClick={handleRemoveProduct}>Remove from Cart</Button>}
    //   </article>
    // </section>

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
    </ListGroup>
    <Button variant="primary" onClick={handleAddProduct}>Add to Cart</Button>
    {location.pathname === "/cart" && <Button variant="danger" onClick={handleRemoveProduct}>Remove from Cart</Button>}
    {(cartItems.length > 0 && cartItems.find(item => item.id === product.id)) && <Button variant="danger" onClick={handleRemoveProduct}>Remove from Cart</Button>}
    </Card>
  );
};

export default Product;