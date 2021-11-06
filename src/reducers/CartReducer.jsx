const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD TO CART":
      // console.log(action.payload);
      // console.log("Adding to cart");
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "DELETE FROM CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "UPDATE CART":
      return state;
    default:
      return state;
  }
};

export default cartReducer;
