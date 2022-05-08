import { useReducer, createContext } from "react";
import cartReducer from "../reducers/CartReducer";

import { products } from "../components/database";

export const cartContext = createContext();

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
    <cartContext.Provider
      value={{ cart: state.cart, addItem, deleteItem, reduceItem }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartState;
