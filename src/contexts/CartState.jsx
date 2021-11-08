import { useReducer } from "react";
import cartReducer from "../reducers/CartReducer";
import CartContext from "./cart-context";
import { products } from "../components/database";

const CartState = (props) => {
  const initialState = {
    products,
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (itemId) => {
    dispatch({ type: "ADD ITEM", payload: itemId });
  };
  const deleteItem = (itemId) => {
    dispatch({ type: "REMOVE ITEM", payload: itemId });
  };
  const reduceItem = (itemId) => {
    dispatch({ type: "REDUCE ITEM", payload: itemId });
  };
  return (
    <CartContext.Provider
      value={{ cart: state.cart, addItem, deleteItem, reduceItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
