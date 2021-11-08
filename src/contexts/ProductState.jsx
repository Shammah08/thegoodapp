import { useReducer } from "react";
import productsReducer from "../reducers/ProductReducer";
import ProductContext from "./products-context";
import { products } from "../components/database";

const ProductState = (props) => {
  const initialState = {
    products,
  };
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD TO CART", payload: item });
  };

  return (
    <ProductContext.Provider value={{ products: state.products, addItem }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
