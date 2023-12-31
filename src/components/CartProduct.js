import { Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { removeItemFromCart } from "../features/cartSlice"

const CartProduct = (props) => {
  const {image, title, price, rating, description} = props
  const product = props
  const dispatch = useAppDispatch()

const handleRemoveProduct = () => {
  console.log("Products: ", product);
  dispatch(removeItemFromCart(product)) //adds a product to a Cart via cartSlice
}

  return (
    <section className="Detail">
      <article className="Detail_thumbnail">
        <img src={image} alt={title} />
      </article>

      <article className="Detail_Info">
        <div className="Detail_info-header">
          <h2>{title}</h2>
        </div>
        <div className="Detail_info">
          <span className="Detail_info-price">{price}</span>
          <span className="Detail_info-rating">Rating: {rating.rate}</span>
        </div>
        <p className="Detail_info-description">{description}</p>
        <Button variant="danger" onClick={handleRemoveProduct}>Remove from Cart</Button>
      </article>
    </section>
  );
};

export default CartProduct;