import { useReducer } from "react";
import productsReducer from "../reducers/ProductReducer";
import ProductContext from "./products-context";

const ProductState = (props) => {
  const initialState = {
    products: [
      {
        id: 1,
        name: "Coffee Mug - Black Inside",
        // img: coffeeMug,
        price: 750,
        details: "The Mics Are Open Coffee Mug - Black Inside",
        by: "The Mics Are Open",
        new: false,
        soldOut: true,
        discount: 0,
      },
      {
        id: 2,
        name: "Coffee Mug - White Inside",
        // img: coffeeMugWhite,
        price: 700,
        details: "The Mics Are Open Coffee Mug - White Inside",
        by: "The Mics Are Open",
        new: false,
        soldOut: false,
        discount: 15,
      },
      {
        id: 4,
        name: "Coffee Mug - Black",
        // img: coffeeMugBlack,
        price: 700,
        details: "The Mics Are Open Coffee Mug - Black",
        by: "The Mics Are Open",
        new: true,
        soldOut: false,
        discount: 0,
      },
      {
        id: 5,
        name: "Mics Are Open Tee - Black",
        // img: maoBlack,
        price: 1200,
        details: "The Mics Are Open T/Shirt",
        by: "The Mics Are Open",
        new: false,
        soldOut: false,
      },
      {
        id: 6,
        name: "Mics Are Open Tee - White",
        // img: maoWhite,
        price: 1100,
        details: "The Mics Are Open T/Shirt",
        by: "The Mics Are Open",
        new: false,
        soldOut: false,
        discount: 0,
      },
      {
        id: 7,
        name: "Water Bottle - Black",
        // img: bottleNewBlack,
        price: 1000,
        details: "The Mics Are Open Water Bottle - Black",
        by: "The Mics Are Open",
        new: true,
        soldOut: false,
        discount: 0,
      },
      {
        id: 8,
        name: "Water Bottle - Blue",
        // img: bottleNewBlue,
        price: 1000,
        details: "The Mics Are Open Water Bottle - Blue",
        by: "The Mics Are Open",
        new: true,
        soldOut: false,
      },
      {
        id: 9,
        name: "Water Bottle - Charcoal",
        // img: bottleCharcoal,
        price: 1000,
        details: "The Mics Are Open Water Bottle - Charcoal",
        by: "The Mics Are Open",
        new: false,
        soldOut: false,
        discount: 0,
      },
      {
        id: 10,
        name: "Water Bottle - Blue",
        // img: bottleBlue,
        price: 950,
        details: "The Mics Are Open Water Bottle - Blue",
        by: "The Mics Are Open",
        new: false,
        soldOut: false,
        discount: 0,
      },

      {
        id: 11,
        name: "Water Bottle - Lime",
        // img: bottleLime,
        price: 950,
        details: "The Mics Are Open Water Bottle - Lime",
        by: "The Mics Are Open",
        new: false,
        soldOut: false,
        discount: 0,
      },
      {
        id: 12,
        name: "Water Bottle - Red",
        // img: bottleRed,
        price: 950,
        details: "The Mics Are Open Water Bottle - Red",
        by: "The Mics Are Open",
        new: false,
        soldOut: false,
        discount: 0,
      },
      {
        id: 13,
        name: "Water Bottle - White",
        // img: bottleWhite,
        price: 950,
        details: "The Mics Are Open Water Bottle - White",
        by: "The Mics Are Open",
        new: false,
        soldOut: false,
        discount: 0,
      },
      {
        id: 14,
        name: "Coaster - Round",
        // img: coasters,
        price: 1000,
        details: "The Mics Are Open Caster - Round",
        new: false,
        soldOut: false,
        discount: 10,
      },
      {
        id: 15,
        name: "Coaster - Rounded Edges",
        // img: coastersRound,
        price: 1100,
        details: "The Mics Are Open Caster - Rounded Edges",
        by: "The Mics Are Open",
        new: true,
        soldOut: false,
        discount: 0,
      },
    ],
  };
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD TO CART", payload: item });
  };
  // const deleteItem = (itemId) => {
  //   dispatch({ type: "DELETE FROM CART", payload: itemId });
  // };
  // const editItem = (itemId) => {
  //   dispatch({ type: "EDIT CART", payload: itemId });
  // };
  return (
    <ProductContext.Provider value={{ products: state.products, addItem }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
