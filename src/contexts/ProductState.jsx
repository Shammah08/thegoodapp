import { useReducer } from "react";
import productsReducer from "../reducers/ProductReducer";
import ProductContext from "./products-context";
import { productsImages } from "../components/database";

const ProductState = (props) => {
  const initialState = {
    products: [
      {
        id: 1,
        name: "Coffee Mug - Black Inside",
        img: productsImages.coffeeMug,
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
        img: productsImages.coffeeMugWhite,
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
        img: productsImages.coffeeMugBlack,
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
        img: productsImages.maoBlack,
        price: 1200,
        details: "The Mics Are Open T/Shirt",
        by: "The Mics Are Open",
        new: false,
        soldOut: false,
      },
      {
        id: 6,
        name: "Mics Are Open Tee - White",
        img: productsImages.maoWhite,
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
        img: productsImages.bottleNewBlack,
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
        img: productsImages.bottleNewBlue,
        price: 1000,
        details: "The Mics Are Open Water Bottle - Blue",
        by: "The Mics Are Open",
        new: true,
        soldOut: false,
      },
      {
        id: 9,
        name: "Water Bottle - Charcoal",
        img: productsImages.bottleCharcoal,
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
        img: productsImages.bottleBlue,
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
        img: productsImages.bottleLime,
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
        img: productsImages.bottleRed,
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
        img: productsImages.bottleWhite,
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
        img: productsImages.coasters,
        price: 1000,
        details: "The Mics Are Open Caster - Round",
        new: false,
        soldOut: false,
        discount: 10,
      },
      {
        id: 15,
        name: "Coaster - Rounded Edges",
        img: productsImages.coastersRound,
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
