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

  const addItem = (item) => {
    console.log("ADDING");
    dispatch({ type: "ADD ITEM", payload: item });
  };
  const deleteItem = (itemId) => {
    dispatch({ type: "REMOVE ITEM", payload: itemId });
  };
  const updateItem = (itemId, update) => {
    dispatch({ type: "UPDATE CART", payload: { itemId, update } });
  };
  return (
    <CartContext.Provider
      value={{ cart: state.cart, addItem, deleteItem, updateItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
