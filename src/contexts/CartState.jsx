import { useReducer } from "react";
import cartReducer from "../reducers/CartReducer";
import CartContext from "./cart-context";

const CartState = (props) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD TO CART", payload: item });
  };
  const deleteItem = (itemId) => {
    dispatch({ type: "DELETE FROM CART", payload: itemId });
  };
  const editItem = (itemId) => {
    dispatch({ type: "EDIT CART", payload: itemId });
  };
  return (
    <CartContext.Provider
      value={{ cart: state.cart, addItem, deleteItem, editItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
