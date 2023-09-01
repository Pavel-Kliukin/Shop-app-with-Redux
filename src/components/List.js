import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { useEffect } from "react";
import { fetchProducts } from "../features/productsSlice";
import Product from "./Product";

const List = () => {

  const products = useSelector(state => state.products.products)
  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div>
      <h1>List will be here</h1>
      {products.map((product) => (<Product key={products.id} {...product}/>))} {/* {...product} is the same as image = {product.image} name={product.name} price={product.price}  */}
    </div>
  );
};

export default List;