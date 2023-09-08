import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { fetchProducts } from "../features/productsSlice";
import Product from "./Product";

const List = () => {

  const products = useSelector(state => state.products.products)
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.cart)

  useEffect(()=> {
    if(products.length < 1) dispatch(fetchProducts()) // we need "if" statement to not fetch products from fake-api-store everytime we go between the pages
  }, [dispatch, products])

  return (
    <div>
      <h1>List will be here</h1>
      {products.map((product) => (<Product key={products.id} {...product}/>))} {/* {...product} is the same as image = {product.image} name={product.name} price={product.price}  */}
    </div>
  );
};

export default List;